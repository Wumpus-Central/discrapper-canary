"use strict";
n.d(t, { A: () => u });
var r = n(626584),
    i = n(71393),
    s = n(403362),
    a = n(723176);
let o = new r.A("GuildVersions");
class l {
    pending = new Map();
    committed = new Map();
    async getCommittedVersions() {
        try {
            let e = a.A.guildVersions();
            if (null == e) return {};
            let t = (await e.getMany()).map((e) => [e.id, e.version]);
            return Object.fromEntries(t ?? []);
        } catch (e) {
            return o.warn("couldn't load guild versions", e), {};
        }
    }
    remove(e, t) {
        this.deleteWith(e), this.commit(t);
    }
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
        CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
        GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
        GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
    };
    handleBackgroundSync(e, t) {
        for (let n of e.guilds)
            "unavailable" !== n.data_mode && this.updateWith(n.id, [n]),
                null == i.A.getGuild(n.id) && this.remove(n.id, t);
        this.commit(t);
    }
    handleConnectionOpen(e, t) {
        this.reset();
        let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
        for (let r of (a.A.guildVersionsTransaction(t).deleteAllExcept(n), e.guilds)) this.updateWith(r.id, [r]);
        this.commit(t);
    }
    handleGuildCreate(e, t) {
        let n = e.guild,
            r = e.guild.id;
        function i(e) {
            switch (e.op) {
                case "full_sync":
                    return e.items;
                case "update":
                    return e.writes;
                default:
                    (0, s.xb)(e);
            }
        }
        this.updateWith(r, [n]),
            this.updateWith(r, i(n.emojis)),
            this.updateWith(r, i(n.stickers)),
            this.updateWith(r, i(n.channels)),
            this.updateWith(r, i(n.roles)),
            this.commit(t);
    }
    handleGuildUpdate(e, t) {
        let n = e.guild,
            r = e.guild.id;
        this.updateWith(r, [n]),
            this.updateWith(r, n.emojis),
            this.updateWith(r, n.stickers),
            this.updateWith(r, n.roles),
            this.commit(t);
    }
    handleGuildDelete(e, t) {
        this.deleteWith(e.guild.id), this.commit(t);
    }
    handleGuildRoleChange(e, t) {
        this.updateWith(e.guildId, [e.role]), this.commit(t);
    }
    handleGuildRoleDelete(e, t) {
        this.updateWith(e.guildId, [{ version: e.version }]), this.commit(t);
    }
    handleGuildEmojisUpdate(e, t) {
        this.updateWith(e.guildId, e.emojis), this.commit(t);
    }
    handleGuildStickersUpdate(e, t) {
        this.updateWith(e.guildId, e.stickers), this.commit(t);
    }
    handleChannelCreate(e, t) {
        null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t);
    }
    handleChannelUpdates(e, t) {
        for (let t of e.channels) null != t.guild_id && this.updateWith(t.guild_id, [t]);
        this.commit(t);
    }
    handleChannelDelete(e, t) {
        null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t);
    }
    resetInMemoryState() {
        this.reset();
    }
    reset() {
        (this.committed = new Map()), (this.pending = new Map());
    }
    deleteWith(e) {
        this.pending.set(e, null);
    }
    updateWith(e, t) {
        if (0 === t.length) return;
        let n = Math.max(this.committed.get(e) ?? 0, this.pending.get(e) ?? 0),
            r = this.computeLatestVersion(n, t);
        r > n && this.pending.set(e, r);
    }
    computeLatestVersion(e, t) {
        let n = e;
        for (let e of t) n = Math.max(n, e.version ?? 0);
        return n;
    }
    commit(e) {
        if (this.pending.size > 0) {
            let t = a.A.guildVersionsTransaction(e);
            for (let [e, n] of this.pending)
                null != n
                    ? (t.put({ id: e, version: n }), this.committed.set(e, n))
                    : (t.delete(e), this.committed.delete(e));
            this.pending.clear();
        }
    }
}
let u = new l();
