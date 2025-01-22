var i = r(47120);
var a = r(592125),
    o = r(650774),
    s = r(944486),
    l = r(412788),
    u = r(368321),
    c = r(553245),
    d = r(143806),
    f = r(814074),
    p = r(582142),
    h = r(989263),
    _ = r(872261);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = 750,
    E = 15,
    v = 500,
    y = 25,
    b = 25,
    I = 1,
    T = null,
    S = new c.b(g, v),
    A = new d.S(E),
    C = !1;
class N extends l.Z {
    initialize() {
        this.waitFor(a.Z), this.waitFor(s.Z), this.waitFor(o.Z), this.syncWith([u.Z], () => !0), this.syncWith([s.Z], R);
    }
    loadCache() {
        let e = this.readSnapshot(N.LATEST_SNAPSHOT_VERSION);
        null != e && ((C = !0), N.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return C;
    }
    saveLimit(e) {
        let n = a.Z.getBasicChannel(e);
        return null != n && (0, p.p)(n) ? y : null != n && S.has(e) ? b : I;
    }
    getSaveableChannels() {
        let e = a.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return u.Z.isLowDisk ? (null != T ? [...e, T] : e) : [...e, ...S.values()];
    }
    takeSnapshot() {
        return {
            version: N.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...S.allValues()].filter((e) => !e.fallback),
                penalized: [...A.keys()],
                lastChannel: T
            }
        };
    }
    static mergeSnapshot(e) {
        let n = S,
            r = A;
        for (let r of ((S = new c.b(S.primaryCapacity, S.extendedCapacity)), (A = new d.S(A.capacity)), (T = null != T ? T : e.lastChannel), [e.channels, n.values()])) for (let e of r) !e.fallback && S.put(e.channelId, e);
        for (let n of [e.penalized, r.keys()]) for (let e of n) A.put(e, null);
    }
    static recordChannel(e) {
        let n = a.Z.getBasicChannel(e);
        if (null != n && (0, h.v)(n)) {
            var r;
            let i = {
                guildId: null !== (r = n.guild_id) && void 0 !== r ? r : null,
                channelId: e,
                channelType: n.type
            };
            (T = i), S.put(e, i), (0, f.Hr)(n) && null != A.put(e, null) && S.delete(e);
        }
    }
    static deleteChannel(e) {
        S.delete(e);
    }
    static deleteGuild(e) {
        for (let n of S.allValues()) n.guildId === e && S.delete(n.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of S.keys()) {
            let n = a.Z.getBasicChannel(e);
            !(0, h.v)(n) && N.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let n of S.values()) e === n.guildId && !(0, h.$)(n.channelId) && N.deleteChannel(n.channelId);
    }
    static replaceLru(e) {
        S = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: U,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: x,
            CHANNEL_UPDATES: L,
            CONNECTION_OPEN_SUPPLEMENTAL: O,
            GUILD_DELETE: M,
            LOGIN_SUCCESS: k,
            THREAD_DELETE: P,
            THREAD_UPDATE: w
        });
    }
}
function R() {
    let e = s.Z.getChannelId();
    null != e && N.recordChannel(e);
}
function O() {
    N.dropUnreachableChannels(), N.replaceLru((0, _.J)(S, g + v));
}
function D(e) {
    let n = e.id,
        r = (0, h.v)(e),
        i = s.Z.getChannelId();
    r && n === i && N.recordChannel(n), !r && N.deleteChannel(n);
}
function L(e) {
    for (let n of e.channels) D(n);
}
function x(e) {
    N.deleteChannel(e.channel.id);
}
function w(e) {
    D(e.channel);
}
function P(e) {
    N.deleteChannel(e.channel.id);
}
function M(e) {
    return !e.guild.unavailable && (N.deleteGuild(e.guild.id), !0);
}
function k(e) {
    S.clear(), A.clear(), (C = !1);
}
function U(e) {
    C = !0;
}
m(N, 'displayName', 'SaveableChannelsStore'), m(N, 'LATEST_SNAPSHOT_VERSION', 1), (n.ZP = new N());
