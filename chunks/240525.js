"use strict";
n.d(t, { Ay: () => M });
var r = n(734057),
    i = n(498642),
    a = n(536802),
    s = n(309010),
    o = n(753027),
    l = n(447508),
    u = n(383682),
    c = n(27548),
    d = n(363433),
    _ = n(552618),
    f = n(879658);
let p = 750,
    h = 15,
    m = 500,
    g = 25,
    E = 25,
    A = 1,
    I = null,
    T = new l.o(p, m),
    y = new u.K(h),
    S = !1;
class v extends a.A {
    static displayName = "SaveableChannelsStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: P,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: O,
            CHANNEL_UPDATES: R,
            CONNECTION_OPEN_SUPPLEMENTAL: b,
            GUILD_DELETE: w,
            LOGIN_SUCCESS: x,
            THREAD_DELETE: L,
            THREAD_UPDATE: D,
        });
    }
    initialize() {
        this.waitFor(r.A),
            this.waitFor(s.A),
            this.waitFor(i.A),
            this.syncWith([o.A], () => !0),
            this.syncWith([s.A], C);
    }
    loadCache() {
        let e = this.readSnapshot(v.LATEST_SNAPSHOT_VERSION);
        null != e && ((S = !0), v.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return S;
    }
    saveLimit(e) {
        let t = r.A.getBasicChannel(e);
        return null != t && (0, d.Z)(t) ? g : null != t && (s.A.getChannelId() === e || T.has(e)) ? E : A;
    }
    getSaveableChannels() {
        let e = r.A.getChannelIds(null).map((e) => ({ guildId: null, channelId: e }));
        return o.A.isLowDisk ? (null != I ? [...e, I] : e) : [...e, ...T.values()];
    }
    takeSnapshot() {
        return {
            version: v.LATEST_SNAPSHOT_VERSION,
            data: { channels: [...T.allValues()].filter((e) => !e.fallback), penalized: [...y.keys()], lastChannel: I },
        };
    }
    static mergeSnapshot(e) {
        let t = T,
            n = y;
        for (let n of ((T = new l.o(T.primaryCapacity, T.extendedCapacity)),
        (y = new u.K(y.capacity)),
        (I = I ?? e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || T.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) y.put(e, null);
    }
    static recordChannel(e) {
        let t = r.A.getBasicChannel(e);
        if (null != t && (0, _.c)(t)) {
            let n = { guildId: t.guild_id ?? null, channelId: e, channelType: t.type };
            (I = n), T.put(e, n), (0, c.qA)(t) && null != y.put(e, null) && T.delete(e);
        }
    }
    static deleteChannel(e) {
        T.delete(e);
    }
    static deleteGuild(e) {
        for (let t of T.allValues()) t.guildId === e && T.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of T.keys()) {
            let t = r.A.getBasicChannel(e);
            (0, _.c)(t) || v.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of T.values()) e !== t.guildId || (0, _.J)(t.channelId) || v.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        T = e;
    }
}
function C() {
    let e = s.A.getChannelId();
    null != e && v.recordChannel(e);
}
function b() {
    v.dropUnreachableChannels(), v.replaceLru((0, f.I)(T, p + m));
}
function N(e) {
    let t = e.id,
        n = (0, _.c)(e),
        r = s.A.getChannelId();
    n && t === r && v.recordChannel(t), n || v.deleteChannel(t);
}
function R(e) {
    for (let t of e.channels) N(t);
}
function O(e) {
    v.deleteChannel(e.channel.id);
}
function D(e) {
    N(e.channel);
}
function L(e) {
    v.deleteChannel(e.channel.id);
}
function w(e) {
    return !e.guild.unavailable && (v.deleteGuild(e.guild.id), !0);
}
function x(e) {
    T.clear(), y.clear(), (S = !1);
}
function P(e) {
    S = !0;
}
let M = new v();
