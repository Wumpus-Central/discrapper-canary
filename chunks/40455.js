n.d(t, { ZP: () => j }), n(388685);
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
    _ = n(872261);
function p(e, t, n) {
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
    v = new l.b(h, g),
    I = new c.S(m),
    T = !1;
class S extends a.Z {
    initialize() {
        this.waitFor(r.Z),
            this.waitFor(o.Z),
            this.waitFor(i.Z),
            this.syncWith([s.Z], () => !0),
            this.syncWith([o.Z], A);
    }
    loadCache() {
        let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
        null != e && ((T = !0), S.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return T;
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
            version: S.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...v.allValues()].filter((e) => !e.fallback),
                penalized: [...I.keys()],
                lastChannel: O,
            },
        };
    }
    static mergeSnapshot(e) {
        let t = v,
            n = I;
        for (let n of ((v = new l.b(v.primaryCapacity, v.extendedCapacity)),
        (I = new c.S(I.capacity)),
        (O = null != O ? O : e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || v.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) I.put(e, null);
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
            (O = r), v.put(e, r), (0, u.Hr)(t) && null != I.put(e, null) && v.delete(e);
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
            (0, f.v)(t) || S.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of v.values()) e !== t.guildId || (0, f.$)(t.channelId) || S.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        v = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: M,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: P,
            CHANNEL_UPDATES: R,
            CONNECTION_OPEN_SUPPLEMENTAL: C,
            GUILD_DELETE: L,
            LOGIN_SUCCESS: x,
            THREAD_DELETE: w,
            THREAD_UPDATE: D,
        });
    }
}
function A() {
    let e = o.Z.getChannelId();
    null != e && S.recordChannel(e);
}
function C() {
    S.dropUnreachableChannels(), S.replaceLru((0, _.J)(v, h + g));
}
function N(e) {
    let t = e.id,
        n = (0, f.v)(e),
        r = o.Z.getChannelId();
    n && t === r && S.recordChannel(t), n || S.deleteChannel(t);
}
function R(e) {
    for (let t of e.channels) N(t);
}
function P(e) {
    S.deleteChannel(e.channel.id);
}
function D(e) {
    N(e.channel);
}
function w(e) {
    S.deleteChannel(e.channel.id);
}
function L(e) {
    return !e.guild.unavailable && (S.deleteGuild(e.guild.id), !0);
}
function x(e) {
    v.clear(), I.clear(), (T = !1);
}
function M(e) {
    T = !0;
}
p(S, "displayName", "SaveableChannelsStore"), p(S, "LATEST_SNAPSHOT_VERSION", 1);
let j = new S();
