n.d(t, { Z: () => v }), n(388685), n(539854);
var r = n(149765),
    i = n(768433),
    a = n(710845),
    o = n(38618),
    s = n(131704),
    l = n(314897),
    c = n(592125),
    u = n(485386),
    d = n(430824),
    f = n(496675),
    p = n(386438),
    _ = n(287328),
    m = n(458772);
function h(e, t, n) {
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
let g = new a.Z("GuildBasicChannels");
class E {
    async getAsync(e) {
        let t = performance.now(),
            [n, r] = await Promise.all([
                _.Z.basicChannels(e).getKvEntries(),
                _.Z.syncedBasicChannels(e).getKvEntries(),
            ]),
            i = performance.now() - t,
            [a, o] = O(r),
            s = new Set(a);
        return (
            (this.synced = s),
            g.verbose(
                "loaded in "
                    .concat(i, "ms (guilds: ")
                    .concat(n.length, ", synced: ")
                    .concat(s.size, " unsynced: ")
                    .concat(o.length, ")"),
            ),
            {
                all: n,
                stale: o,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return s.has(t);
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
            b(c.Z.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let a of e.guilds)
            switch (a.data_mode) {
                case "unavailable":
                    break;
                case "partial":
                    var n, r, i;
                    let e = (e) => (0, s.q_)(e, a.id);
                    this.onGuildUpdate(
                        a.id,
                        null != (r = null == (n = a.partial_updates.channels) ? void 0 : n.map(e)) ? r : [],
                        null != (i = a.partial_updates.deleted_channel_ids) ? i : [],
                        t,
                    );
                    break;
                default:
                    this.onGuildSync(a.id, t);
            }
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    async handlePostConnectionOpen() {
        let e = o.Z.lastTimeConnectedChanged(),
            t = _.Z.database();
        if (null == this.synced || null == t || !(0, i.O)()) return;
        let n = d.Z.getGuildIds(),
            r = n.filter((e) => !this.synced.has(e));
        for (let i of (g.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(r.length, ")")), n)) {
            if (null == this.synced || t !== _.Z.database() || e !== o.Z.lastTimeConnectedChanged()) break;
            if (!this.synced.has(i)) {
                g.verbose("optimstically writing basic_channels (guild: ".concat(i, ")"));
                try {
                    await c.o.loadGuildIds([i]),
                        await t.transaction((e) => this.syncOne(i, e), "handlePostConnectionOpen");
                } catch (e) {
                    g.warn("couldn't optimstically write basic_channel:", e);
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
            i = u.Z.getRole(e.guildId, n.id);
        (null != i && r.fS(r.vB(n.permissions), i.permissions)) || this.unsync(e.guildId, t);
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
        (n.length > 0 || t.some((e) => b(c.Z.getBasicChannel(e.id), e))) && this.unsync(e, r);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), _.Z.basicChannelsTransaction(t).delete(e), _.Z.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        var n;
        null == (n = this.synced) || n.delete(e),
            _.Z.basicChannelsTransaction(t).delete(e),
            _.Z.syncedBasicChannelsTransaction(t).put(e, !1),
            m.Z.invalidate(e);
    }
    sync(e) {
        g.verbose("Starting to write all basic channels");
        let t = performance.now(),
            n = {
                written: 0,
                skipped: 0,
            };
        for (let t of d.Z.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let r = performance.now() - t;
        g.verbose(
            ""
                .concat(n.written, " basic_channel guilds submitted (took: ")
                .concat(r, "ms, skipped: ")
                .concat(n.skipped, " guilds)"),
        );
    }
    syncOne(e, t) {
        var n, r;
        return (
            !(null == d.Z.getGuild(e) || (null == (n = this.synced) ? void 0 : n.has(e))) &&
            (null == (r = this.synced) || r.add(e),
            _.Z.basicChannelsTransaction(t).put(e, y(e)),
            _.Z.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
    constructor() {
        h(this, "synced", null),
            h(this, "actions", {
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
}
function b(e, t) {
    return (
        null == e ||
        e.type !== t.type ||
        e.parent_id !== t.parent_id ||
        f.Z.computeBasicPermissions(e) !== f.Z.computeBasicPermissions(t)
    );
}
function y(e) {
    return Object.values(c.Z.getMutableGuildChannelsForGuild(e)).map((e) => ({
        id: e.id,
        type: e.type,
        guild_id: e.guild_id,
        parent_id: e.parent_id,
        basicPermissions: p.Z.asBasicFlag(f.Z.computePermissions(e)),
    }));
}
function O(e) {
    let t = [],
        n = [];
    for (let [r, i] of e) (i ? t : n).push(r);
    return [t, n];
}
let v = new E();
