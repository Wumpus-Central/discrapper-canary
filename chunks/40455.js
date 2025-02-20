n.d(t, { ZP: () => k }), n(47120);
var r = n(592125),
    i = n(650774),
    o = n(944486),
    a = n(412788),
    s = n(368321),
    l = n(553245),
    c = n(143806),
    u = n(814074),
    d = n(582142),
    f = n(989263),
    p = n(872261);
function _(e, t, n) {
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
    b = 1,
    y = null,
    O = new l.b(h, g),
    S = new c.S(m),
    I = !1;
class T extends a.Z {
    initialize() {
        this.waitFor(r.Z), this.waitFor(o.Z), this.waitFor(i.Z), this.syncWith([s.Z], () => !0), this.syncWith([o.Z], N);
    }
    loadCache() {
        let e = this.readSnapshot(T.LATEST_SNAPSHOT_VERSION);
        null != e && ((I = !0), T.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return I;
    }
    saveLimit(e) {
        let t = r.Z.getBasicChannel(e);
        return null != t && (0, d.p)(t) ? E : null != t && O.has(e) ? v : b;
    }
    getSaveableChannels() {
        let e = r.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return s.Z.isLowDisk ? (null != y ? [...e, y] : e) : [...e, ...O.values()];
    }
    takeSnapshot() {
        return {
            version: T.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...O.allValues()].filter((e) => !e.fallback),
                penalized: [...S.keys()],
                lastChannel: y
            }
        };
    }
    static mergeSnapshot(e) {
        let t = O,
            n = S;
        for (let n of ((O = new l.b(O.primaryCapacity, O.extendedCapacity)), (S = new c.S(S.capacity)), (y = null != y ? y : e.lastChannel), [e.channels, t.values()])) for (let e of n) e.fallback || O.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) S.put(e, null);
    }
    static recordChannel(e) {
        let t = r.Z.getBasicChannel(e);
        if (null != t && (0, f.v)(t)) {
            var n;
            let r = {
                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                channelId: e,
                channelType: t.type
            };
            (y = r), O.put(e, r), (0, u.Hr)(t) && null != S.put(e, null) && O.delete(e);
        }
    }
    static deleteChannel(e) {
        O.delete(e);
    }
    static deleteGuild(e) {
        for (let t of O.allValues()) t.guildId === e && O.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of O.keys()) {
            let t = r.Z.getBasicChannel(e);
            (0, f.v)(t) || T.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of O.values()) e !== t.guildId || (0, f.$)(t.channelId) || T.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        O = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: M,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: P,
            CHANNEL_UPDATES: R,
            CONNECTION_OPEN_SUPPLEMENTAL: A,
            GUILD_DELETE: x,
            LOGIN_SUCCESS: L,
            THREAD_DELETE: D,
            THREAD_UPDATE: w
        });
    }
}
function N() {
    let e = o.Z.getChannelId();
    null != e && T.recordChannel(e);
}
function A() {
    T.dropUnreachableChannels(), T.replaceLru((0, p.J)(O, h + g));
}
function C(e) {
    let t = e.id,
        n = (0, f.v)(e),
        r = o.Z.getChannelId();
    n && t === r && T.recordChannel(t), n || T.deleteChannel(t);
}
function R(e) {
    for (let t of e.channels) C(t);
}
function P(e) {
    T.deleteChannel(e.channel.id);
}
function w(e) {
    C(e.channel);
}
function D(e) {
    T.deleteChannel(e.channel.id);
}
function x(e) {
    return !e.guild.unavailable && (T.deleteGuild(e.guild.id), !0);
}
function L(e) {
    O.clear(), S.clear(), (I = !1);
}
function M(e) {
    I = !0;
}
_(T, 'displayName', 'SaveableChannelsStore'), _(T, 'LATEST_SNAPSHOT_VERSION', 1);
let k = new T();
