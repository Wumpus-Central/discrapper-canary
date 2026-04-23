n.d(t, { Ay: () => v });
var i = n(734057),
    r = n(498642),
    l = n(536802),
    a = n(309010),
    s = n(753027),
    o = n(509417),
    d = n(383682),
    u = n(27548),
    c = n(363433),
    h = n(552618),
    E = n(879658);
let _ = null,
    p = new o.o(750, 500),
    A = new d.K(15),
    f = !1;
class g extends l.A {
    static displayName = "SaveableChannelsStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: L,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: O,
            CHANNEL_UPDATES: m,
            CONNECTION_OPEN_SUPPLEMENTAL: T,
            GUILD_DELETE: y,
            LOGIN_SUCCESS: R,
            THREAD_DELETE: N,
            THREAD_UPDATE: C,
        });
    }
    initialize() {
        this.waitFor(i.A),
            this.waitFor(a.A),
            this.waitFor(r.A),
            this.syncWith([s.A], () => !0),
            this.syncWith([a.A], I);
    }
    loadCache() {
        let e = this.readSnapshot(g.LATEST_SNAPSHOT_VERSION);
        null != e && ((f = !0), g.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return f;
    }
    saveLimit(e) {
        let t = i.A.getBasicChannel(e);
        return (null != t && (0, c.Z)(t)) || (null != t && (a.A.getChannelId() === e || p.has(e))) ? 25 : 1;
    }
    getSaveableChannels() {
        let e = i.A.getChannelIds(null).map((e) => ({ guildId: null, channelId: e }));
        return s.A.isLowDisk ? (null != _ ? [...e, _] : e) : [...e, ...p.values()];
    }
    takeSnapshot() {
        return {
            version: g.LATEST_SNAPSHOT_VERSION,
            data: { channels: [...p.allValues()].filter((e) => !e.fallback), penalized: [...A.keys()], lastChannel: _ },
        };
    }
    static mergeSnapshot(e) {
        let t = p,
            n = A;
        for (let n of ((p = new o.o(p.primaryCapacity, p.extendedCapacity)),
        (A = new d.K(A.capacity)),
        (_ = _ ?? e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || p.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) A.put(e, null);
    }
    static recordChannel(e) {
        let t = i.A.getBasicChannel(e);
        if (null != t && (0, h.c)(t)) {
            let n = { guildId: t.guild_id ?? null, channelId: e, channelType: t.type };
            (_ = n), p.put(e, n), (0, u.qA)(t) && null != A.put(e, null) && p.delete(e);
        }
    }
    static deleteChannel(e) {
        p.delete(e);
    }
    static deleteGuild(e) {
        for (let t of p.allValues()) t.guildId === e && p.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of p.keys()) {
            let t = i.A.getBasicChannel(e);
            (0, h.c)(t) || g.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of p.values()) e !== t.guildId || (0, h.J)(t.channelId) || g.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        p = e;
    }
}
function I() {
    let e = a.A.getChannelId();
    null != e && g.recordChannel(e);
}
function T() {
    g.dropUnreachableChannels(), g.replaceLru((0, E.I)(p, 1250));
}
function S(e) {
    let t = e.id,
        n = (0, h.c)(e),
        i = a.A.getChannelId();
    n && t === i && g.recordChannel(t), n || g.deleteChannel(t);
}
function m(e) {
    for (let t of e.channels) S(t);
}
function O(e) {
    g.deleteChannel(e.channel.id);
}
function C(e) {
    S(e.channel);
}
function N(e) {
    g.deleteChannel(e.channel.id);
}
function y(e) {
    return !e.guild.unavailable && (g.deleteGuild(e.guild.id), !0);
}
function R(e) {
    p.clear(), A.clear(), (f = !1);
}
function L(e) {
    f = !0;
}
let v = new g();
