(n.d(t, { Z: () => x }), n(388685), n(539854));
var i = n(768433),
    r = n(710845),
    s = n(38618),
    a = n(131704),
    l = n(314897),
    o = n(592125),
    c = n(485386),
    d = n(430824),
    u = n(496675),
    m = n(386438),
    p = n(287328),
    g = n(458772);
function h(e, t, n) {
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
let f = new r.Z('GuildBasicChannels');
function b(e, t) {
    return null == e || e.type !== t.type || e.parent_id !== t.parent_id || u.Z.computeBasicPermissions(e) !== u.Z.computeBasicPermissions(t);
}
let x = new (class {
    async getAsync(e) {
        let t = performance.now(),
            [n, i] = await Promise.all([p.Z.basicChannels(e).getKvEntries(), p.Z.syncedBasicChannels(e).getKvEntries()]),
            r = performance.now() - t,
            [s, a] = (function (e) {
                let t = [],
                    n = [];
                for (let [i, r] of e) (r ? t : n).push(i);
                return [t, n];
            })(i),
            l = new Set(s);
        return (
            (this.synced = l),
            f.verbose('loaded in '.concat(r, 'ms (guilds: ').concat(n.length, ', synced: ').concat(l.size, ' unsynced: ').concat(a.length, ')')),
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
        for (let n of e.channels.filter((e) => null != e.guild_id)) b(o.Z.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let s of e.guilds)
            switch (s.data_mode) {
                case 'unavailable':
                    break;
                case 'partial':
                    var n, i, r;
                    let e = (e) => (0, a.q_)(e, s.id);
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
            t = p.Z.database();
        if (null == this.synced || null == t || !(0, i.O)()) return;
        let n = d.Z.getGuildIds(),
            r = n.filter((e) => !this.synced.has(e));
        for (let i of (f.verbose('scheduling basic_channel optimstic writes (guilds: '.concat(r.length, ')')), n)) {
            if (null == this.synced || t !== p.Z.database() || e !== s.Z.lastTimeConnectedChanged()) break;
            if (!this.synced.has(i)) {
                f.verbose('optimstically writing basic_channels (guild: '.concat(i, ')'));
                try {
                    (await o.o.loadGuildIds([i]), await t.transaction((e) => this.syncOne(i, e), 'handlePostConnectionOpen'));
                } catch (e) {
                    f.warn("couldn't optimstically write basic_channel:", e);
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
        let { id: n, channels: i } = e;
        switch (i.op) {
            case 'full_sync':
                this.onGuildSync(n, t);
                break;
            case 'update':
                this.onGuildUpdate(n, i.writes, i.deletes, t);
        }
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
        e.user.id === l.default.getId() && this.unsync(e.guildId, t);
    }
    handleWriteCaches(e, t) {
        this.sync(t);
    }
    resetInMemoryState() {
        this.synced = null;
    }
    onGuildUpdate(e, t, n, i) {
        (n.length > 0 || t.some((e) => b(o.Z.getBasicChannel(e.id), e))) && this.unsync(e, i);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        (this.unsync(e, t), p.Z.basicChannelsTransaction(t).delete(e), p.Z.syncedBasicChannelsTransaction(t).delete(e));
    }
    unsync(e, t) {
        var n;
        (null == (n = this.synced) || n.delete(e), p.Z.basicChannelsTransaction(t).delete(e), p.Z.syncedBasicChannelsTransaction(t).put(e, !1), g.Z.invalidate(e));
    }
    sync(e) {
        f.verbose('Starting to write all basic channels');
        let t = performance.now(),
            n = {
                written: 0,
                skipped: 0
            };
        for (let t of d.Z.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let i = performance.now() - t;
        f.verbose(''.concat(n.written, ' basic_channel guilds submitted (took: ').concat(i, 'ms, skipped: ').concat(n.skipped, ' guilds)'));
    }
    syncOne(e, t) {
        var n, i, r;
        return (
            !(null == d.Z.getGuild(e) || (null == (n = this.synced) ? void 0 : n.has(e))) &&
            (null == (i = this.synced) || i.add(e),
            p.Z.basicChannelsTransaction(t).put(
                e,
                ((r = e),
                Object.values(o.Z.getMutableGuildChannelsForGuild(r)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: m.Z.asBasicFlag(u.Z.computePermissions(e))
                })))
            ),
            p.Z.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
    constructor() {
        (h(this, 'synced', null),
            h(this, 'actions', {
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
            }));
    }
})();
