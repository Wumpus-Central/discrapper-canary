n.d(t, { Z: () => c }), n(977457), n(47120);
var r = n(710845),
    i = n(430824),
    o = n(287328);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = new r.Z('GuildVersions');
class l {
    async getCommittedVersions() {
        try {
            let e = o.Z.guildVersions();
            if (null == e) return {};
            let t = (await e.getMany()).map((e) => [e.id, e.version]);
            return Object.fromEntries(null != t ? t : []);
        } catch (e) {
            return s.warn("couldn't load guild versions", e), {};
        }
    }
    remove(e, t) {
        this.deleteWith(e), this.commit(t);
    }
    handleBackgroundSync(e, t) {
        for (let n of e.guilds) 'unavailable' !== n.data_mode && this.updateWith(n.id, [n]), null == i.Z.getGuild(n.id) && this.remove(n.id, t);
        this.commit(t);
    }
    handleConnectionOpen(e, t) {
        for (let t of (this.reset(), e.guilds)) this.updateWith(t.id, [t]);
        this.commit(t);
    }
    handleGuildCreate(e, t) {
        var n;
        let r = e.guild,
            i = e.guild.id;
        this.updateWith(i, [r]), this.updateWith(i, r.emojis), this.updateWith(i, r.stickers), this.updateWith(i, r.channels), this.updateWith(i, null == (n = r.channelUpdates) ? void 0 : n.writes), this.updateWith(i, Array.isArray(r.roles) ? r.roles : Object.values(r.roles)), this.commit(t);
    }
    handleGuildUpdate(e, t) {
        let n = e.guild,
            r = e.guild.id;
        this.updateWith(r, [n]), this.updateWith(r, n.emojis), this.updateWith(r, n.stickers), this.updateWith(r, Array.isArray(n.roles) ? n.roles : Object.values(n.roles)), this.commit(t);
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
        if (null != t) {
            var n, r;
            let i = Math.max(null != (n = this.committed.get(e)) ? n : 0, null != (r = this.pending.get(e)) ? r : 0),
                o = this.computeLatestVersion(i, t);
            o > i && this.pending.set(e, o);
        }
    }
    computeLatestVersion(e, t) {
        let n = e;
        for (let e of t) {
            var r;
            n = Math.max(n, null != (r = e.version) ? r : 0);
        }
        return n;
    }
    commit(e) {
        if (this.pending.size > 0) {
            let t = o.Z.guildVersionsTransaction(e);
            for (let [e, n] of this.pending)
                null != n
                    ? (t.put({
                          id: e,
                          version: n
                      }),
                      this.committed.set(e, n))
                    : (t.delete(e), this.committed.delete(e));
            this.pending.clear();
        }
    }
    constructor() {
        a(this, 'pending', new Map()),
            a(this, 'committed', new Map()),
            a(this, 'actions', {
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
                GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
            });
    }
}
let c = new l();
