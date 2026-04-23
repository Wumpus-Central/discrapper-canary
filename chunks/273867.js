n.d(t, { A: () => g }), n(321073);
var i = n(136722),
    r = n(937724),
    a = n(626584),
    l = n(142120),
    s = n(95701),
    o = n(961350),
    d = n(734057),
    u = n(317525),
    c = n(71393),
    A = n(576705),
    h = n(799422),
    _ = n(723176),
    E = n(453001);
let p = new a.A("GuildBasicChannels");
function m(e, t) {
    return (
        null == e ||
        e.type !== t.type ||
        e.parent_id !== t.parent_id ||
        A.A.computeBasicPermissions(e) !== A.A.computeBasicPermissions(t)
    );
}
let g = new (class {
    synced = null;
    async getAsync(e) {
        let t = performance.now(),
            [n, i] = await Promise.all([
                _.A.basicChannels(e).getKvEntries(),
                _.A.syncedBasicChannels(e).getKvEntries(),
            ]),
            r = performance.now() - t,
            [a, l] = (function (e) {
                let t = [],
                    n = [];
                for (let [i, r] of e) (r ? t : n).push(i);
                return [t, n];
            })(i),
            s = new Set(a);
        return (
            (this.synced = s),
            p.verbose(`loaded in ${r}ms (guilds: ${n.length}, synced: ${s.size} unsynced: ${l.length})`),
            {
                all: n,
                stale: l,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return s.has(t);
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
            m(d.A.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let n of e.guilds)
            switch (n.data_mode) {
                case "unavailable":
                    break;
                case "partial":
                    let e = (e) => (0, s.UE)(e, n.id);
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
        let e = l.A.lastTimeConnectedChanged(),
            t = _.A.database();
        if (null == this.synced || null == t || !(0, r.O)()) return;
        let n = c.A.getGuildIds(),
            i = n.filter((e) => !this.synced.has(e));
        for (let r of (p.verbose(`scheduling basic_channel optimstic writes (guilds: ${i.length})`), n)) {
            if (null == this.synced || t !== _.A.database() || e !== l.A.lastTimeConnectedChanged()) break;
            if (!this.synced.has(r)) {
                p.verbose(`optimstically writing basic_channels (guild: ${r})`);
                try {
                    await d.D.loadGuildIds([r]),
                        await t.transaction((e) => this.syncOne(r, e), "handlePostConnectionOpen");
                } catch (e) {
                    p.warn("couldn't optimstically write basic_channel:", e);
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
            r = u.A.getRole(e.guildId, n.id);
        (null != r && i.aI(i.iu(n.permissions), r.permissions)) || this.unsync(e.guildId, t);
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
        (n.length > 0 || t.some((e) => m(d.A.getBasicChannel(e.id), e))) && this.unsync(e, i);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), _.A.basicChannelsTransaction(t).delete(e), _.A.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        this.synced?.delete(e),
            _.A.basicChannelsTransaction(t).delete(e),
            _.A.syncedBasicChannelsTransaction(t).put(e, !1),
            E.A.invalidate(e);
    }
    sync(e) {
        p.verbose("Starting to write all basic channels");
        let t = performance.now(),
            n = { written: 0, skipped: 0 };
        for (let t of c.A.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let i = performance.now() - t;
        p.verbose(`${n.written} basic_channel guilds submitted (took: ${i}ms, skipped: ${n.skipped} guilds)`);
    }
    syncOne(e, t) {
        var n;
        return (
            !(null == c.A.getGuild(e) || this.synced?.has(e)) &&
            (this.synced?.add(e),
            _.A.basicChannelsTransaction(t).put(
                e,
                ((n = e),
                Object.values(d.A.getMutableGuildChannelsForGuild(n)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: h.A.asBasicFlag(A.A.computePermissions(e)),
                }))),
            ),
            _.A.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
})();
