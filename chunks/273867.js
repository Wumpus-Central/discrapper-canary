n.d(t, { A: () => p }), n(321073);
var i = n(136722),
    s = n(937724),
    r = n(626584),
    a = n(142120),
    l = n(95701),
    o = n(961350),
    c = n(734057),
    d = n(317525),
    u = n(71393),
    _ = n(576705),
    m = n(799422),
    A = n(723176),
    g = n(453001);
let E = new r.A("GuildBasicChannels");
function h(e, t) {
    return (
        null == e ||
        e.type !== t.type ||
        e.parent_id !== t.parent_id ||
        _.A.computeBasicPermissions(e) !== _.A.computeBasicPermissions(t)
    );
}
let p = new (class {
    synced = null;
    async getAsync(e) {
        let t = performance.now(),
            [n, i] = await Promise.all([
                A.A.basicChannels(e).getKvEntries(),
                A.A.syncedBasicChannels(e).getKvEntries(),
            ]),
            s = performance.now() - t,
            [r, a] = (function (e) {
                let t = [],
                    n = [];
                for (let [i, s] of e) (s ? t : n).push(i);
                return [t, n];
            })(i),
            l = new Set(r);
        return (
            (this.synced = l),
            E.verbose(`loaded in ${s}ms (guilds: ${n.length}, synced: ${l.size} unsynced: ${a.length})`),
            {
                all: n,
                stale: a,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return l.has(t);
                }),
            }
        );
    }
    actions = {
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
    };
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
        for (let n of e.guilds)
            switch (n.data_mode) {
                case "unavailable":
                    break;
                case "partial":
                    let e = (e) => (0, l.UE)(e, n.id);
                    this.onGuildUpdate(
                        n.id,
                        n.partial_updates.channels?.map(e) ?? [],
                        n.partial_updates.deleted_channel_ids ?? [],
                        t,
                    );
                    break;
                default:
                    this.onGuildSync(n.id, t);
            }
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    async handlePostConnectionOpen() {
        let e = a.A.lastTimeConnectedChanged(),
            t = A.A.database();
        if (null == this.synced || null == t || !(0, s.O)()) return;
        let n = u.A.getGuildIds(),
            i = n.filter((e) => !this.synced.has(e));
        for (let s of (E.verbose(`scheduling basic_channel optimstic writes (guilds: ${i.length})`), n)) {
            if (null == this.synced || t !== A.A.database() || e !== a.A.lastTimeConnectedChanged()) break;
            if (!this.synced.has(s)) {
                E.verbose(`optimstically writing basic_channels (guild: ${s})`);
                try {
                    await c.D.loadGuildIds([s]),
                        await t.transaction((e) => this.syncOne(s, e), "handlePostConnectionOpen");
                } catch (e) {
                    E.warn("couldn't optimstically write basic_channel:", e);
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
        let { id: n, channels: i } = e;
        switch (i.op) {
            case "full_sync":
                this.onGuildSync(n, t);
                break;
            case "update":
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
            s = d.A.getRole(e.guildId, n.id);
        (null != s && i.aI(i.iu(n.permissions), s.permissions)) || this.unsync(e.guildId, t);
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
    onGuildUpdate(e, t, n, i) {
        (n.length > 0 || t.some((e) => h(c.A.getBasicChannel(e.id), e))) && this.unsync(e, i);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), A.A.basicChannelsTransaction(t).delete(e), A.A.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        this.synced?.delete(e),
            A.A.basicChannelsTransaction(t).delete(e),
            A.A.syncedBasicChannelsTransaction(t).put(e, !1),
            g.A.invalidate(e);
    }
    sync(e) {
        E.verbose("Starting to write all basic channels");
        let t = performance.now(),
            n = { written: 0, skipped: 0 };
        for (let t of u.A.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let i = performance.now() - t;
        E.verbose(`${n.written} basic_channel guilds submitted (took: ${i}ms, skipped: ${n.skipped} guilds)`);
    }
    syncOne(e, t) {
        var n;
        return (
            !(null == u.A.getGuild(e) || this.synced?.has(e)) &&
            (this.synced?.add(e),
            A.A.basicChannelsTransaction(t).put(
                e,
                ((n = e),
                Object.values(c.A.getMutableGuildChannelsForGuild(n)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: m.A.asBasicFlag(_.A.computePermissions(e)),
                }))),
            ),
            A.A.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
})();
