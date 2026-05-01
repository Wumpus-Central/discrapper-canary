n.d(t, { Ay: () => v });
var i = n(734057),
    l = n(498642),
    a = n(536802),
    r = n(309010),
    s = n(753027),
    o = n(509417),
    d = n(383682),
    u = n(27548),
    c = n(363433),
    h = n(552618),
    E = n(879658);
let A = null,
    _ = new o.o(750, 500),
    p = new d.K(15),
    g = !1;
class f extends a.A {
    static displayName = "SaveableChannelsStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: L,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: C,
            CHANNEL_UPDATES: m,
            CONNECTION_OPEN_SUPPLEMENTAL: S,
            GUILD_DELETE: y,
            LOGIN_SUCCESS: R,
            THREAD_DELETE: N,
            THREAD_UPDATE: O,
        });
    }
    initialize() {
        this.waitFor(i.A),
            this.waitFor(r.A),
            this.waitFor(l.A),
            this.syncWith([s.A], () => !0),
            this.syncWith([r.A], I);
    }
    loadCache() {
        let e = this.readSnapshot(f.LATEST_SNAPSHOT_VERSION);
        null != e && ((g = !0), f.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return g;
    }
    saveLimit(e) {
        let t = i.A.getBasicChannel(e);
        return (null != t && (0, c.Z)(t)) || (null != t && (r.A.getChannelId() === e || _.has(e))) ? 25 : 1;
    }
    getSaveableChannels() {
        let e = i.A.getChannelIds(null).map((e) => ({ guildId: null, channelId: e }));
        return s.A.isLowDisk ? (null != A ? [...e, A] : e) : [...e, ..._.values()];
    }
    takeSnapshot() {
        return {
            version: f.LATEST_SNAPSHOT_VERSION,
            data: { channels: [..._.allValues()].filter((e) => !e.fallback), penalized: [...p.keys()], lastChannel: A },
        };
    }
    static mergeSnapshot(e) {
        let t = _,
            n = p;
        for (let n of ((_ = new o.o(_.primaryCapacity, _.extendedCapacity)),
        (p = new d.K(p.capacity)),
        (A = A ?? e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || _.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) p.put(e, null);
    }
    static recordChannel(e) {
        let t = i.A.getBasicChannel(e);
        if (null != t && (0, h.c)(t)) {
            let n = { guildId: t.guild_id ?? null, channelId: e, channelType: t.type };
            (A = n), _.put(e, n), (0, u.qA)(t) && null != p.put(e, null) && _.delete(e);
        }
    }
    static deleteChannel(e) {
        _.delete(e);
    }
    static deleteGuild(e) {
        for (let t of _.allValues()) t.guildId === e && _.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of _.keys()) {
            let t = i.A.getBasicChannel(e);
            (0, h.c)(t) || f.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of _.values()) e !== t.guildId || (0, h.J)(t.channelId) || f.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        _ = e;
    }
}
function I() {
    let e = r.A.getChannelId();
    null != e && f.recordChannel(e);
}
function S() {
    f.dropUnreachableChannels(), f.replaceLru((0, E.I)(_, 1250));
}
function T(e) {
    let t = e.id,
        n = (0, h.c)(e),
        i = r.A.getChannelId();
    n && t === i && f.recordChannel(t), n || f.deleteChannel(t);
}
function m(e) {
    for (let t of e.channels) T(t);
}
function C(e) {
    f.deleteChannel(e.channel.id);
}
function O(e) {
    T(e.channel);
}
function N(e) {
    f.deleteChannel(e.channel.id);
}
function y(e) {
    return !e.guild.unavailable && (f.deleteGuild(e.guild.id), !0);
}
function R(e) {
    _.clear(), p.clear(), (g = !1);
}
function L(e) {
    g = !0;
}
let v = new f();
