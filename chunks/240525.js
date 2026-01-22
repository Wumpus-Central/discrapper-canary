n.d(t, { Ay: () => M }), n(896048);
var r = n(734057),
    i = n(498642),
    a = n(536802),
    s = n(309010),
    o = n(753027),
    l = n(447508),
    c = n(383682),
    u = n(27548),
    d = n(363433),
    f = n(552618),
    p = n(879658);
function _(e, t, n) {
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
let h = 750,
    m = 15,
    g = 500,
    E = 25,
    b = 25,
    y = 1,
    O = null,
    A = new l.o(h, g),
    v = new c.K(m),
    S = !1;
class I extends a.A {
    initialize() {
        this.waitFor(r.A),
            this.waitFor(s.A),
            this.waitFor(i.A),
            this.syncWith([o.A], () => !0),
            this.syncWith([s.A], T);
    }
    loadCache() {
        let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
        null != e && ((S = !0), I.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return S;
    }
    saveLimit(e) {
        let t = r.A.getBasicChannel(e);
        return null != t && (0, d.Z)(t) ? E : null != t && (s.A.getChannelId() === e || A.has(e)) ? b : y;
    }
    getSaveableChannels() {
        let e = r.A.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e,
        }));
        return o.A.isLowDisk ? (null != O ? [...e, O] : e) : [...e, ...A.values()];
    }
    takeSnapshot() {
        return {
            version: I.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...A.allValues()].filter((e) => !e.fallback),
                penalized: [...v.keys()],
                lastChannel: O,
            },
        };
    }
    static mergeSnapshot(e) {
        let t = A,
            n = v;
        for (let n of ((A = new l.o(A.primaryCapacity, A.extendedCapacity)),
        (v = new c.K(v.capacity)),
        (O = null != O ? O : e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || A.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) v.put(e, null);
    }
    static recordChannel(e) {
        let t = r.A.getBasicChannel(e);
        if (null != t && (0, f.c)(t)) {
            var n;
            let r = {
                guildId: null != (n = t.guild_id) ? n : null,
                channelId: e,
                channelType: t.type,
            };
            (O = r), A.put(e, r), (0, u.qA)(t) && null != v.put(e, null) && A.delete(e);
        }
    }
    static deleteChannel(e) {
        A.delete(e);
    }
    static deleteGuild(e) {
        for (let t of A.allValues()) t.guildId === e && A.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of A.keys()) {
            let t = r.A.getBasicChannel(e);
            (0, f.c)(t) || I.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of A.values()) e !== t.guildId || (0, f.J)(t.channelId) || I.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        A = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: j,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: w,
            CHANNEL_UPDATES: R,
            CONNECTION_OPEN_SUPPLEMENTAL: C,
            GUILD_DELETE: x,
            LOGIN_SUCCESS: L,
            THREAD_DELETE: D,
            THREAD_UPDATE: P,
        });
    }
}
function T() {
    let e = s.A.getChannelId();
    null != e && I.recordChannel(e);
}
function C() {
    I.dropUnreachableChannels(), I.replaceLru((0, p.I)(A, h + g));
}
function N(e) {
    let t = e.id,
        n = (0, f.c)(e),
        r = s.A.getChannelId();
    n && t === r && I.recordChannel(t), n || I.deleteChannel(t);
}
function R(e) {
    for (let t of e.channels) N(t);
}
function w(e) {
    I.deleteChannel(e.channel.id);
}
function P(e) {
    N(e.channel);
}
function D(e) {
    I.deleteChannel(e.channel.id);
}
function x(e) {
    return !e.guild.unavailable && (I.deleteGuild(e.guild.id), !0);
}
function L(e) {
    A.clear(), v.clear(), (S = !1);
}
function j(e) {
    S = !0;
}
_(I, "displayName", "SaveableChannelsStore"), _(I, "LATEST_SNAPSHOT_VERSION", 1);
let M = new I();
