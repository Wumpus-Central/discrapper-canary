n.d(t, { Z: () => b }), n(47120), n(653041);
var r = n(768433),
    i = n(710845),
    s = n(38618),
    a = n(131704),
    l = n(314897),
    o = n(592125),
    c = n(430824),
    d = n(496675),
    u = n(386438),
    m = n(287328),
    g = n(458772);
function p(e, t, n) {
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
let h = new i.Z('GuildBasicChannels');
function f(e, t) {
    return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.Z.computeBasicPermissions(e) !== d.Z.computeBasicPermissions(t);
}
let b = new (class {
    async getAsync(e) {
        let t = performance.now(),
            [n, r] = await Promise.all([m.Z.basicChannels(e).getKvEntries(), m.Z.syncedBasicChannels(e).getKvEntries()]),
            i = performance.now() - t,
            [s, a] = (function (e) {
                let t = [],
                    n = [];
                for (let [r, i] of e) (i ? t : n).push(r);
                return [t, n];
            })(r),
            l = new Set(s);
        return (
            (this.synced = l),
            h.verbose('loaded in '.concat(i, 'ms (guilds: ').concat(n.length, ', synced: ').concat(l.size, ' unsynced: ').concat(a.length, ')')),
            {
                all: n,
                stale: a,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return l.has(t);
                })
            }
        );
    }
    handleChannelCreate(e, t) {
        null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
    }
    handleChannelDelete(e, t) {
        null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
    }
    handleChannelUpdates(e, t) {
        for (let n of e.channels.filter((e) => null != e.guild_id)) f(o.Z.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let s of e.guilds)
            switch (s.data_mode) {
                case 'unavailable':
                    break;
                case 'partial':
                    var n, r, i;
                    let e = (e) => (0, a.q_)(e, s.id);
                    this.onGuildUpdate(s.id, null != (r = null == (n = s.partial_updates.channels) ? void 0 : n.map(e)) ? r : [], null != (i = s.partial_updates.deleted_channel_ids) ? i : [], t);
                    break;
                default:
                    this.onGuildSync(s.id, t);
            }
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    async handlePostConnectionOpen() {
        let e = s.Z.lastTimeConnectedChanged(),
            t = m.Z.database();
        if (null == this.synced || null == t || !(0, r.O)()) return;
        let n = c.Z.getGuildIds(),
            i = n.filter((e) => !this.synced.has(e));
        for (let r of (h.verbose('scheduling basic_channel optimstic writes (guilds: '.concat(i.length, ')')), n)) {
            if (null == this.synced || t !== m.Z.database() || e !== s.Z.lastTimeConnectedChanged()) break;
            if (!this.synced.has(r)) {
                h.verbose('optimstically writing basic_channels (guild: '.concat(r, ')'));
                try {
                    await o.o.loadGuildIds([r]), await t.transaction((e) => this.syncOne(r, e), 'handlePostConnectionOpen');
                } catch (e) {
                    h.warn("couldn't optimstically write basic_channel:", e);
                    return;
                }
                await new Promise((e) => setTimeout(e, 1000));
            }
        }
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleOneGuildCreate(e, t) {
        null != e.channelUpdates ? this.onGuildUpdate(e.id, e.channelUpdates.writes, e.channelUpdates.deletes, t) : this.onGuildSync(e.id, t);
    }
    handleGuildUpdate(e, t) {
        this.unsync(e.guild.id, t);
    }
    handleGuildDelete(e, t) {
        !0 !== e.guild.unavailable && this.delete(e.guild.id, t);
    }
    handleGuildRoleUpdate(e, t) {
        let n = e.role,
            r = c.Z.getRole(e.guildId, n.id);
        (null == r || n.permissions !== r.permissions) && this.unsync(e.guildId, t);
    }
    handleGuildMemberUpdate(e, t) {
        e.user.id === l.default.getId() && this.unsync(e.guildId, t);
    }
    handleWriteCaches(e, t) {
        this.sync(t);
    }
    resetInMemoryState() {
        this.synced = null;
    }
    onGuildUpdate(e, t, n, r) {
        (n.length > 0 || t.some((e) => f(o.Z.getBasicChannel(e.id), e))) && this.unsync(e, r);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), m.Z.basicChannelsTransaction(t).delete(e), m.Z.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        var n;
        null == (n = this.synced) || n.delete(e), m.Z.basicChannelsTransaction(t).delete(e), m.Z.syncedBasicChannelsTransaction(t).put(e, !1), g.Z.invalidate(e);
    }
    sync(e) {
        h.verbose('Starting to write all basic channels');
        let t = performance.now(),
            n = {
                written: 0,
                skipped: 0
            };
        for (let t of c.Z.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let r = performance.now() - t;
        h.verbose(''.concat(n.written, ' basic_channel guilds submitted (took: ').concat(r, 'ms, skipped: ').concat(n.skipped, ' guilds)'));
    }
    syncOne(e, t) {
        var n, r, i;
        return (
            !(null == c.Z.getGuild(e) || (null == (n = this.synced) ? void 0 : n.has(e))) &&
            (null == (r = this.synced) || r.add(e),
            m.Z.basicChannelsTransaction(t).put(
                e,
                ((i = e),
                Object.values(o.Z.getMutableGuildChannelsForGuild(i)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: u.Z.asBasicFlag(d.Z.computePermissions(e))
                })))
            ),
            m.Z.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
    constructor() {
        p(this, 'synced', null),
            p(this, 'actions', {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
                CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
                GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
                GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t)
            });
    }
})();
