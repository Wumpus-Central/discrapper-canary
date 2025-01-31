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
    b = new l.b(h, g),
    T = new u.S(m),
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
        return null != t && (0, d.p)(t) ? E : null != t && b.has(e) ? v : y;
    }
    getSaveableChannels() {
        let e = i.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return o.Z.isLowDisk ? (null != I ? [...e, I] : e) : [...e, ...b.values()];
    }
    takeSnapshot() {
        return {
            version: A.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...b.allValues()].filter((e) => !e.fallback),
                penalized: [...T.keys()],
                lastChannel: I
            }
        };
    }
    static mergeSnapshot(e) {
        let t = b,
            n = T;
        for (let n of ((b = new l.b(b.primaryCapacity, b.extendedCapacity)), (T = new u.S(T.capacity)), (I = null != I ? I : e.lastChannel), [e.channels, t.values()])) for (let e of n) e.fallback || b.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) T.put(e, null);
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
            (I = i), b.put(e, i), (0, c.Hr)(t) && null != T.put(e, null) && b.delete(e);
        }
    }
    static deleteChannel(e) {
        b.delete(e);
    }
    static deleteGuild(e) {
        for (let t of b.allValues()) t.guildId === e && b.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of b.keys()) {
            let t = i.Z.getBasicChannel(e);
            (0, f.v)(t) || A.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of b.values()) e !== t.guildId || (0, f.$)(t.channelId) || A.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        b = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: M,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: D,
            CHANNEL_UPDATES: O,
            CONNECTION_OPEN_SUPPLEMENTAL: C,
            GUILD_DELETE: P,
            LOGIN_SUCCESS: w,
            THREAD_DELETE: L,
            THREAD_UPDATE: x
        });
    }
}
function N() {
    let e = a.Z.getChannelId();
    null != e && A.recordChannel(e);
}
function C() {
    A.dropUnreachableChannels(), A.replaceLru((0, _.J)(b, h + g));
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
function x(e) {
    R(e.channel);
}
function L(e) {
    A.deleteChannel(e.channel.id);
}
function P(e) {
    return !e.guild.unavailable && (A.deleteGuild(e.guild.id), !0);
}
function w(e) {
    b.clear(), T.clear(), (S = !1);
}
function M(e) {
    S = !0;
}
p(A, 'displayName', 'SaveableChannelsStore'), p(A, 'LATEST_SNAPSHOT_VERSION', 1);
let k = new A();
