"use strict";
n.d(t, { Ay: () => b });
var r = n(734057),
    i = n(498642),
    s = n(536802),
    a = n(309010),
    o = n(753027),
    l = n(447508),
    u = n(383682),
    c = n(27548),
    d = n(363433),
    _ = n(552618),
    f = n(879658);
let p = null,
    h = new l.o(750, 500),
    E = new u.K(15),
    m = !1;
class g extends s.A {
    static displayName = "SaveableChannelsStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: R,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: y,
            CHANNEL_UPDATES: S,
            CONNECTION_OPEN_SUPPLEMENTAL: I,
            GUILD_DELETE: C,
            LOGIN_SUCCESS: O,
            THREAD_DELETE: v,
            THREAD_UPDATE: N,
        });
    }
    initialize() {
        this.waitFor(r.A),
            this.waitFor(a.A),
            this.waitFor(i.A),
            this.syncWith([o.A], () => !0),
            this.syncWith([a.A], A);
    }
    loadCache() {
        let e = this.readSnapshot(g.LATEST_SNAPSHOT_VERSION);
        null != e && ((m = !0), g.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return m;
    }
    saveLimit(e) {
        let t = r.A.getBasicChannel(e);
        return (null != t && (0, d.Z)(t)) || (null != t && (a.A.getChannelId() === e || h.has(e))) ? 25 : 1;
    }
    getSaveableChannels() {
        let e = r.A.getChannelIds(null).map((e) => ({ guildId: null, channelId: e }));
        return o.A.isLowDisk ? (null != p ? [...e, p] : e) : [...e, ...h.values()];
    }
    takeSnapshot() {
        return {
            version: g.LATEST_SNAPSHOT_VERSION,
            data: { channels: [...h.allValues()].filter((e) => !e.fallback), penalized: [...E.keys()], lastChannel: p },
        };
    }
    static mergeSnapshot(e) {
        let t = h,
            n = E;
        for (let n of ((h = new l.o(h.primaryCapacity, h.extendedCapacity)),
        (E = new u.K(E.capacity)),
        (p = p ?? e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || h.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) E.put(e, null);
    }
    static recordChannel(e) {
        let t = r.A.getBasicChannel(e);
        if (null != t && (0, _.c)(t)) {
            let n = { guildId: t.guild_id ?? null, channelId: e, channelType: t.type };
            (p = n), h.put(e, n), (0, c.qA)(t) && null != E.put(e, null) && h.delete(e);
        }
    }
    static deleteChannel(e) {
        h.delete(e);
    }
    static deleteGuild(e) {
        for (let t of h.allValues()) t.guildId === e && h.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of h.keys()) {
            let t = r.A.getBasicChannel(e);
            (0, _.c)(t) || g.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of h.values()) e !== t.guildId || (0, _.J)(t.channelId) || g.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        h = e;
    }
}
function A() {
    let e = a.A.getChannelId();
    null != e && g.recordChannel(e);
}
function I() {
    g.dropUnreachableChannels(), g.replaceLru((0, f.I)(h, 1250));
}
function T(e) {
    let t = e.id,
        n = (0, _.c)(e),
        r = a.A.getChannelId();
    n && t === r && g.recordChannel(t), n || g.deleteChannel(t);
}
function S(e) {
    for (let t of e.channels) T(t);
}
function y(e) {
    g.deleteChannel(e.channel.id);
}
function N(e) {
    T(e.channel);
}
function v(e) {
    g.deleteChannel(e.channel.id);
}
function C(e) {
    return !e.guild.unavailable && (g.deleteGuild(e.guild.id), !0);
}
function O(e) {
    h.clear(), E.clear(), (m = !1);
}
function R(e) {
    m = !0;
}
let b = new g();
