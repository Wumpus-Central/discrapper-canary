var i = r(47120);
var a = r(710845),
    o = r(430824),
    s = r(287328);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = new a.Z('GuildVersions');
class c {
    async getCommittedVersions() {
        try {
            let e = s.Z.guildVersions();
            if (null == e) return {};
            let n = (await e.getMany()).map((e) => [e.id, e.version]);
            return Object.fromEntries(null != n ? n : []);
        } catch (e) {
            return u.warn("couldn't load guild versions", e), {};
        }
    }
    remove(e, n) {
        this.deleteWith(e), this.commit(n);
    }
    handleBackgroundSync(e, n) {
        for (let r of e.guilds) 'unavailable' !== r.data_mode && this.updateWith(r.id, [r]), null == o.Z.getGuild(r.id) && this.remove(r.id, n);
        this.commit(n);
    }
    handleConnectionOpen(e, n) {
        for (let n of (this.reset(), e.guilds)) this.updateWith(n.id, [n]);
        this.commit(n);
    }
    handleGuildCreate(e, n) {
        var r;
        let i = e.guild,
            a = e.guild.id;
        this.updateWith(a, [i]), this.updateWith(a, i.emojis), this.updateWith(a, i.stickers), this.updateWith(a, i.channels), this.updateWith(a, null === (r = i.channelUpdates) || void 0 === r ? void 0 : r.writes), this.updateWith(a, Array.isArray(i.roles) ? i.roles : Object.values(i.roles)), this.commit(n);
    }
    handleGuildUpdate(e, n) {
        let r = e.guild,
            i = e.guild.id;
        this.updateWith(i, [r]), this.updateWith(i, r.emojis), this.updateWith(i, r.stickers), this.updateWith(i, Array.isArray(r.roles) ? r.roles : Object.values(r.roles)), this.commit(n);
    }
    handleGuildDelete(e, n) {
        this.deleteWith(e.guild.id), this.commit(n);
    }
    handleGuildRoleChange(e, n) {
        this.updateWith(e.guildId, [e.role]), this.commit(n);
    }
    handleGuildRoleDelete(e, n) {
        this.updateWith(e.guildId, [{ version: e.version }]), this.commit(n);
    }
    handleGuildEmojisUpdate(e, n) {
        this.updateWith(e.guildId, e.emojis), this.commit(n);
    }
    handleGuildStickersUpdate(e, n) {
        this.updateWith(e.guildId, e.stickers), this.commit(n);
    }
    handleChannelCreate(e, n) {
        null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(n);
    }
    handleChannelUpdates(e, n) {
        for (let n of e.channels) null != n.guild_id && this.updateWith(n.guild_id, [n]);
        this.commit(n);
    }
    handleChannelDelete(e, n) {
        null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(n);
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
    updateWith(e, n) {
        if (null != n) {
            var r, i;
            let a = Math.max(null !== (r = this.committed.get(e)) && void 0 !== r ? r : 0, null !== (i = this.pending.get(e)) && void 0 !== i ? i : 0),
                o = this.computeLatestVersion(a, n);
            o > a && this.pending.set(e, o);
        }
    }
    computeLatestVersion(e, n) {
        let r = e;
        for (let e of n) {
            var i;
            r = Math.max(r, null !== (i = e.version) && void 0 !== i ? i : 0);
        }
        return r;
    }
    commit(e) {
        if (this.pending.size > 0) {
            let n = s.Z.guildVersionsTransaction(e);
            for (let [e, r] of this.pending)
                null != r
                    ? (n.put({
                          id: e,
                          version: r
                      }),
                      this.committed.set(e, r))
                    : (n.delete(e), this.committed.delete(e));
            this.pending.clear();
        }
    }
    constructor() {
        l(this, 'pending', new Map()),
            l(this, 'committed', new Map()),
            l(this, 'actions', {
                BACKGROUND_SYNC: (e, n) => this.handleBackgroundSync(e, n),
                CHANNEL_CREATE: (e, n) => this.handleChannelCreate(e, n),
                CHANNEL_DELETE: (e, n) => this.handleChannelDelete(e, n),
                CHANNEL_UPDATES: (e, n) => this.handleChannelUpdates(e, n),
                CONNECTION_OPEN: (e, n) => this.handleConnectionOpen(e, n),
                GUILD_CREATE: (e, n) => this.handleGuildCreate(e, n),
                GUILD_DELETE: (e, n) => this.handleGuildDelete(e, n),
                GUILD_EMOJIS_UPDATE: (e, n) => this.handleGuildEmojisUpdate(e, n),
                GUILD_ROLE_CREATE: (e, n) => this.handleGuildRoleChange(e, n),
                GUILD_ROLE_DELETE: (e, n) => this.handleGuildRoleDelete(e, n),
                GUILD_ROLE_UPDATE: (e, n) => this.handleGuildRoleChange(e, n),
                GUILD_STICKERS_UPDATE: (e, n) => this.handleGuildStickersUpdate(e, n),
                GUILD_UPDATE: (e, n) => this.handleGuildUpdate(e, n)
            });
    }
}
n.Z = new c();
