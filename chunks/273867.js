n.d(t, {
    A: () => b,
}),
    n(896048),
    n(321073);
var r = n(136722),
    i = n(937724),
    l = n(626584),
    s = n(142120),
    a = n(95701),
    o = n(961350),
    c = n(734057),
    d = n(317525),
    u = n(71393),
    _ = n(576705),
    p = n(799422),
    m = n(723176),
    g = n(453001);

function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = new l.A("GuildBasicChannels");

function h(e, t) {
    return (
        null == e ||
        e.type !== t.type ||
        e.parent_id !== t.parent_id ||
        _.A.computeBasicPermissions(e) !== _.A.computeBasicPermissions(t)
    );
}
let b = new (class {
    async getAsync(e) {
        let t = performance.now(),
            [n, r] = await Promise.all([
                m.A.basicChannels(e).getKvEntries(),
                m.A.syncedBasicChannels(e).getKvEntries(),
            ]),
            i = performance.now() - t,
            [l, s] = (function (e) {
                let t = [],
                    n = [];
                for (let [r, i] of e) (i ? t : n).push(r);
                return [t, n];
            })(r),
            a = new Set(l);
        return (
            (this.synced = a),
            f.verbose(
                "loaded in "
                    .concat(i, "ms (guilds: ")
                    .concat(n.length, ", synced: ")
                    .concat(a.size, " unsynced: ")
                    .concat(s.length, ")"),
            ),
            {
                all: n,
                stale: s,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return a.has(t);
                }),
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
        for (let n of e.channels.filter((e) => null != e.guild_id))
            h(c.A.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let l of e.guilds)
            switch (l.data_mode) {
                case "unavailable":
                    break;
                case "partial":
                    var n, r, i;
                    let e = (e) => (0, a.UE)(e, l.id);
                    this.onGuildUpdate(
                        l.id,
                        null != (n = null == (i = l.partial_updates.channels) ? void 0 : i.map(e)) ? n : [],
                        null != (r = l.partial_updates.deleted_channel_ids) ? r : [],
                        t,
                    );
                    break;
                default:
                    this.onGuildSync(l.id, t);
            }
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    async handlePostConnectionOpen() {
        let e = s.A.lastTimeConnectedChanged(),
            t = m.A.database();
        if (null == this.synced || null == t || !(0, i.O)()) return;
        let n = u.A.getGuildIds(),
            r = n.filter((e) => !this.synced.has(e));
        for (let i of (f.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(r.length, ")")), n)) {
            if (null == this.synced || t !== m.A.database() || e !== s.A.lastTimeConnectedChanged()) break;
            if (!this.synced.has(i)) {
                f.verbose("optimstically writing basic_channels (guild: ".concat(i, ")"));
                try {
                    await c.D.loadGuildIds([i]),
                        await t.transaction((e) => this.syncOne(i, e), "handlePostConnectionOpen");
                } catch (e) {
                    f.warn("couldn't optimstically write basic_channel:", e);
                    return;
                }
                await new Promise((e) => setTimeout(e, 1e3));
            }
        }
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleOneGuildCreate(e, t) {
        let { id: n, channels: r } = e;
        switch (r.op) {
            case "full_sync":
                this.onGuildSync(n, t);
                break;
            case "update":
                this.onGuildUpdate(n, r.writes, r.deletes, t);
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
            i = d.A.getRole(e.guildId, n.id);
        (null != i && r.aI(r.iu(n.permissions), i.permissions)) || this.unsync(e.guildId, t);
    }
    handleGuildMemberUpdate(e, t) {
        e.user.id === o.default.getId() && this.unsync(e.guildId, t);
    }
    handleWriteCaches(e, t) {
        this.sync(t);
    }
    resetInMemoryState() {
        this.synced = null;
    }
    onGuildUpdate(e, t, n, r) {
        (n.length > 0 || t.some((e) => h(c.A.getBasicChannel(e.id), e))) && this.unsync(e, r);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), m.A.basicChannelsTransaction(t).delete(e), m.A.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        var n;
        null == (n = this.synced) || n.delete(e),
            m.A.basicChannelsTransaction(t).delete(e),
            m.A.syncedBasicChannelsTransaction(t).put(e, !1),
            g.A.invalidate(e);
    }
    sync(e) {
        f.verbose("Starting to write all basic channels");
        let t = performance.now(),
            n = {
                written: 0,
                skipped: 0,
            };
        for (let t of u.A.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let r = performance.now() - t;
        f.verbose(
            ""
                .concat(n.written, " basic_channel guilds submitted (took: ")
                .concat(r, "ms, skipped: ")
                .concat(n.skipped, " guilds)"),
        );
    }
    syncOne(e, t) {
        var n, r, i;
        return (
            !(null == u.A.getGuild(e) || (null == (n = this.synced) ? void 0 : n.has(e))) &&
            (null == (r = this.synced) || r.add(e),
            m.A.basicChannelsTransaction(t).put(
                e,
                ((i = e),
                Object.values(c.A.getMutableGuildChannelsForGuild(i)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: p.A.asBasicFlag(_.A.computePermissions(e)),
                }))),
            ),
            m.A.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
    constructor() {
        A(this, "synced", null),
            A(this, "actions", {
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
                WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t),
            });
    }
})();
