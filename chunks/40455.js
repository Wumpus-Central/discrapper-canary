n.d(t, { ZP: () => M }), n(388685);
var r = n(592125),
    i = n(650774),
    a = n(750041),
    o = n(944486),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = 750,
    h = 15,
    g = 500,
    E = 25,
    b = 25,
    y = 1,
    O = null,
    v = new l.b(m, g),
    S = new c.S(h),
    I = !1;
class T extends a.Z {
    initialize() {
        this.waitFor(r.Z),
            this.waitFor(o.Z),
            this.waitFor(i.Z),
            this.syncWith([s.Z], () => !0),
            this.syncWith([o.Z], C);
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
        return null != t && (0, d.p)(t) ? E : null != t && v.has(e) ? b : y;
    }
    getSaveableChannels() {
        let e = r.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e,
        }));
        return s.Z.isLowDisk ? (null != O ? [...e, O] : e) : [...e, ...v.values()];
    }
    takeSnapshot() {
        return {
            version: T.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...v.allValues()].filter((e) => !e.fallback),
                penalized: [...S.keys()],
                lastChannel: O,
            },
        };
    }
    static mergeSnapshot(e) {
        let t = v,
            n = S;
        for (let n of ((v = new l.b(v.primaryCapacity, v.extendedCapacity)),
        (S = new c.S(S.capacity)),
        (O = null != O ? O : e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || v.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) S.put(e, null);
    }
    static recordChannel(e) {
        let t = r.Z.getBasicChannel(e);
        if (null != t && (0, f.v)(t)) {
            var n;
            let r = {
                guildId: null != (n = t.guild_id) ? n : null,
                channelId: e,
                channelType: t.type,
            };
            (O = r), v.put(e, r), (0, u.Hr)(t) && null != S.put(e, null) && v.delete(e);
        }
    }
    static deleteChannel(e) {
        v.delete(e);
    }
    static deleteGuild(e) {
        for (let t of v.allValues()) t.guildId === e && v.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of v.keys()) {
            let t = r.Z.getBasicChannel(e);
            (0, f.v)(t) || T.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of v.values()) e !== t.guildId || (0, f.$)(t.channelId) || T.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        v = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: j,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: R,
            CHANNEL_UPDATES: P,
            CONNECTION_OPEN_SUPPLEMENTAL: A,
            GUILD_DELETE: x,
            LOGIN_SUCCESS: L,
            THREAD_DELETE: D,
            THREAD_UPDATE: w,
        });
    }
}
function C() {
    let e = o.Z.getChannelId();
    null != e && T.recordChannel(e);
}
function A() {
    T.dropUnreachableChannels(), T.replaceLru((0, p.J)(v, m + g));
}
function N(e) {
    let t = e.id,
        n = (0, f.v)(e),
        r = o.Z.getChannelId();
    n && t === r && T.recordChannel(t), n || T.deleteChannel(t);
}
function P(e) {
    for (let t of e.channels) N(t);
}
function R(e) {
    T.deleteChannel(e.channel.id);
}
function w(e) {
    N(e.channel);
}
function D(e) {
    T.deleteChannel(e.channel.id);
}
function x(e) {
    return !e.guild.unavailable && (T.deleteGuild(e.guild.id), !0);
}
function L(e) {
    v.clear(), S.clear(), (I = !1);
}
function j(e) {
    I = !0;
}
_(T, "displayName", "SaveableChannelsStore"), _(T, "LATEST_SNAPSHOT_VERSION", 1);
let M = new T();
