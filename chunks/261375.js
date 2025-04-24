n.d(t, { Z: () => b }), n(388685), n(539854);
var i = n(768433),
    r = n(710845),
    s = n(38618),
    l = n(131704),
    a = n(314897),
    o = n(592125),
    c = n(430824),
    d = n(496675),
    u = n(386438),
    m = n(287328),
    p = n(458772);
function g(e, t, n) {
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
let h = new r.Z('GuildBasicChannels');
function f(e, t) {
    return null == e || e.type !== t.type || e.parent_id !== t.parent_id || d.Z.computeBasicPermissions(e) !== d.Z.computeBasicPermissions(t);
}
let b = new (class {
    async getAsync(e) {
        let t = performance.now(),
            [n, i] = await Promise.all([m.Z.basicChannels(e).getKvEntries(), m.Z.syncedBasicChannels(e).getKvEntries()]),
            r = performance.now() - t,
            [s, l] = (function (e) {
                let t = [],
                    n = [];
                for (let [i, r] of e) (r ? t : n).push(i);
                return [t, n];
            })(i),
            a = new Set(s);
        return (
            (this.synced = a),
            h.verbose('loaded in '.concat(r, 'ms (guilds: ').concat(n.length, ', synced: ').concat(a.size, ' unsynced: ').concat(l.length, ')')),
            {
                all: n,
                stale: l,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return a.has(t);
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
                    var n, i, r;
                    let e = (e) => (0, l.q_)(e, s.id);
                    this.onGuildUpdate(s.id, null != (i = null == (n = s.partial_updates.channels) ? void 0 : n.map(e)) ? i : [], null != (r = s.partial_updates.deleted_channel_ids) ? r : [], t);
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
        if (null == this.synced || null == t || !(0, i.O)()) return;
        let n = c.Z.getGuildIds(),
            r = n.filter((e) => !this.synced.has(e));
        for (let i of (h.verbose('scheduling basic_channel optimstic writes (guilds: '.concat(r.length, ')')), n)) {
            if (null == this.synced || t !== m.Z.database() || e !== s.Z.lastTimeConnectedChanged()) break;
            if (!this.synced.has(i)) {
                h.verbose('optimstically writing basic_channels (guild: '.concat(i, ')'));
                try {
                    await o.o.loadGuildIds([i]), await t.transaction((e) => this.syncOne(i, e), 'handlePostConnectionOpen');
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
            i = c.Z.getRole(e.guildId, n.id);
        (null == i || n.permissions !== i.permissions) && this.unsync(e.guildId, t);
    }
    handleGuildMemberUpdate(e, t) {
        e.user.id === a.default.getId() && this.unsync(e.guildId, t);
    }
    handleWriteCaches(e, t) {
        this.sync(t);
    }
    resetInMemoryState() {
        this.synced = null;
    }
    onGuildUpdate(e, t, n, i) {
        (n.length > 0 || t.some((e) => f(o.Z.getBasicChannel(e.id), e))) && this.unsync(e, i);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), m.Z.basicChannelsTransaction(t).delete(e), m.Z.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        var n;
        null == (n = this.synced) || n.delete(e), m.Z.basicChannelsTransaction(t).delete(e), m.Z.syncedBasicChannelsTransaction(t).put(e, !1), p.Z.invalidate(e);
    }
    sync(e) {
        h.verbose('Starting to write all basic channels');
        let t = performance.now(),
            n = {
                written: 0,
                skipped: 0
            };
        for (let t of c.Z.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let i = performance.now() - t;
        h.verbose(''.concat(n.written, ' basic_channel guilds submitted (took: ').concat(i, 'ms, skipped: ').concat(n.skipped, ' guilds)'));
    }
    syncOne(e, t) {
        var n, i, r;
        return (
            !(null == c.Z.getGuild(e) || (null == (n = this.synced) ? void 0 : n.has(e))) &&
            (null == (i = this.synced) || i.add(e),
            m.Z.basicChannelsTransaction(t).put(
                e,
                ((r = e),
                Object.values(o.Z.getMutableGuildChannelsForGuild(r)).map((e) => ({
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
        g(this, 'synced', null),
            g(this, 'actions', {
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
