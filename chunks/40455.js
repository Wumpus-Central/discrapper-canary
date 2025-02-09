n.d(t, { ZP: () => k }), n(47120);
var i = n(592125),
    r = n(650774),
    a = n(944486),
    s = n(412788),
    o = n(368321),
    l = n(553245),
    u = n(143806),
    c = n(814074),
    d = n(582142),
    f = n(989263),
    _ = n(872261);
function p(e, t, n) {
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
let h = 750,
    m = 15,
    g = 500,
    E = 25,
    v = 25,
    y = 1,
    I = null,
    T = new l.b(h, g),
    b = new u.S(m),
    S = !1;
class A extends s.Z {
    initialize() {
        this.waitFor(i.Z), this.waitFor(a.Z), this.waitFor(r.Z), this.syncWith([o.Z], () => !0), this.syncWith([a.Z], N);
    }
    loadCache() {
        let e = this.readSnapshot(A.LATEST_SNAPSHOT_VERSION);
        null != e && ((S = !0), A.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return S;
    }
    saveLimit(e) {
        let t = i.Z.getBasicChannel(e);
        return null != t && (0, d.p)(t) ? E : null != t && T.has(e) ? v : y;
    }
    getSaveableChannels() {
        let e = i.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return o.Z.isLowDisk ? (null != I ? [...e, I] : e) : [...e, ...T.values()];
    }
    takeSnapshot() {
        return {
            version: A.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...T.allValues()].filter((e) => !e.fallback),
                penalized: [...b.keys()],
                lastChannel: I
            }
        };
    }
    static mergeSnapshot(e) {
        let t = T,
            n = b;
        for (let n of ((T = new l.b(T.primaryCapacity, T.extendedCapacity)), (b = new u.S(b.capacity)), (I = null != I ? I : e.lastChannel), [e.channels, t.values()])) for (let e of n) e.fallback || T.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) b.put(e, null);
    }
    static recordChannel(e) {
        let t = i.Z.getBasicChannel(e);
        if (null != t && (0, f.v)(t)) {
            var n;
            let i = {
                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                channelId: e,
                channelType: t.type
            };
            (I = i), T.put(e, i), (0, c.Hr)(t) && null != b.put(e, null) && T.delete(e);
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
            let t = i.Z.getBasicChannel(e);
            (0, f.v)(t) || A.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of T.values()) e !== t.guildId || (0, f.$)(t.channelId) || A.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        T = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: M,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: D,
            CHANNEL_UPDATES: O,
            CONNECTION_OPEN_SUPPLEMENTAL: C,
            GUILD_DELETE: w,
            LOGIN_SUCCESS: P,
            THREAD_DELETE: x,
            THREAD_UPDATE: L
        });
    }
}
function N() {
    let e = a.Z.getChannelId();
    null != e && A.recordChannel(e);
}
function C() {
    A.dropUnreachableChannels(), A.replaceLru((0, _.J)(T, h + g));
}
function R(e) {
    let t = e.id,
        n = (0, f.v)(e),
        i = a.Z.getChannelId();
    n && t === i && A.recordChannel(t), n || A.deleteChannel(t);
}
function O(e) {
    for (let t of e.channels) R(t);
}
function D(e) {
    A.deleteChannel(e.channel.id);
}
function L(e) {
    R(e.channel);
}
function x(e) {
    A.deleteChannel(e.channel.id);
}
function w(e) {
    return !e.guild.unavailable && (A.deleteGuild(e.guild.id), !0);
}
function P(e) {
    T.clear(), b.clear(), (S = !1);
}
function M(e) {
    S = !0;
}
p(A, 'displayName', 'SaveableChannelsStore'), p(A, 'LATEST_SNAPSHOT_VERSION', 1);
let k = new A();
