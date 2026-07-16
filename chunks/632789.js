"use strict";
n.d(t, { Ay: () => M });
var i = n(734057),
    r = n(498642),
    a = n(536802),
    s = n(309010),
    l = n(753027);
class o {
    index;
    items;
    [Symbol.iterator]() {
        return this;
    }
    constructor(e) {
        (this.index = 0), (this.items = e);
    }
    next() {
        for (; this.index < this.items.length; ) {
            let e = this.items[this.index].next();
            if (!e.done) return e;
            this.index += 1;
        }
        return { done: !0, value: void 0 };
    }
}
function d() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new o(t);
}
class c {
    items;
    limit;
    get length() {
        return this.items.size;
    }
    get capacity() {
        return this.limit;
    }
    constructor(e) {
        (this.items = new Map()), (this.limit = e);
    }
    [Symbol.iterator]() {
        return this.items.entries();
    }
    entries() {
        return this.items.entries();
    }
    keys() {
        return this.items.keys();
    }
    values() {
        return this.items.values();
    }
    ordered() {
        return [...this.items.values()].reverse();
    }
    clear() {
        this.items.clear();
    }
    has(e) {
        return this.items.has(e);
    }
    get(e) {
        return this.items.get(e);
    }
    put(e, t) {
        if ((this.items.delete(e), this.items.set(e, t), this.items.size > this.limit)) {
            let e = this.oldestKey(),
                t = this.items.get(e);
            return this.items.delete(e), [e, t];
        }
    }
    delete(e) {
        return this.items.delete(e);
    }
    oldestKey() {
        return this.items.keys().next().value;
    }
}
class u {
    primary;
    extended;
    constructor(e, t) {
        (this.primary = new c(e)), (this.extended = new c(t));
    }
    get totalLength() {
        return this.primary.length + this.extended.length;
    }
    get primaryCapacity() {
        return this.primary.capacity;
    }
    get extendedCapacity() {
        return this.extended.capacity;
    }
    clear() {
        this.primary.clear(), this.extended.clear();
    }
    has(e) {
        return this.primary.has(e);
    }
    hasExtended(e) {
        return this.primary.has(e) || this.extended.has(e);
    }
    get(e) {
        return this.primary.get(e);
    }
    put(e, t) {
        let n = this.primary.put(e, t);
        void 0 !== n && this.extended.put(n[0], n[1]);
    }
    delete(e) {
        let t = this.primary.delete(e),
            n = this.extended.delete(e);
        return this.upstreamItems(), t || n;
    }
    upstreamItems() {
        if (this.canUpstreamItems()) {
            for (let [e, t] of this.extended.entries())
                if ((this.primary.put(e, t), this.extended.delete(e), !this.canUpstreamItems())) break;
        }
    }
    canUpstreamItems() {
        return this.primary.length < this.primary.capacity && this.extended.length > 0;
    }
    entries() {
        return this.primary.entries();
    }
    keys() {
        return this.primary.keys();
    }
    values() {
        return this.primary.values();
    }
    allEntries() {
        return d(this.extended.entries(), this.primary.entries());
    }
    allKeys() {
        return d(this.extended.keys(), this.primary.keys());
    }
    allValues() {
        return d(this.extended.values(), this.primary.values());
    }
}
var _ = n(652215);
function E(e) {
    let t = r.A.getMemberCount(e?.guild_id) ?? 0;
    return null != e && e.type !== _.rbe.DM && e.type !== _.rbe.GROUP_DM && t >= 1e4;
}
var A = n(552618),
    h = n(711014);
function I(e, t) {
    for (let [n, i] of t.allEntries()) e.put(n, i);
    return e;
}
let f = null,
    p = new u(750, 500),
    T = new c(15),
    m = !1;
class g extends a.A {
    static displayName = "SaveableChannelsStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: b,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: O,
            CHANNEL_UPDATES: R,
            CONNECTION_OPEN_SUPPLEMENTAL: N,
            GUILD_DELETE: D,
            LOGIN_SUCCESS: v,
            THREAD_DELETE: y,
            THREAD_UPDATE: L,
        });
    }
    initialize() {
        this.waitFor(i.A),
            this.waitFor(s.Ay),
            this.waitFor(r.A),
            this.syncWith([l.A], () => !0),
            this.syncWith([s.Ay], S);
    }
    loadCache() {
        let e = this.readSnapshot(g.LATEST_SNAPSHOT_VERSION);
        null != e && ((m = !0), g.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return m;
    }
    saveLimit(e) {
        let t = i.A.getBasicChannel(e);
        return (null != t && null == t.guild_id) || (null != t && (s.Ay.getChannelId() === e || p.has(e))) ? 25 : 1;
    }
    getSaveableChannels() {
        let e = i.A.getChannelIds(null).map((e) => ({ guildId: null, channelId: e }));
        return l.A.isLowDisk ? (null != f ? [...e, f] : e) : [...e, ...p.values()];
    }
    takeSnapshot() {
        return {
            version: g.LATEST_SNAPSHOT_VERSION,
            data: { channels: [...p.allValues()].filter((e) => !e.fallback), penalized: [...T.keys()], lastChannel: f },
        };
    }
    static mergeSnapshot(e) {
        let t = p,
            n = T;
        for (let n of ((p = new u(p.primaryCapacity, p.extendedCapacity)),
        (T = new c(T.capacity)),
        (f = f ?? e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || p.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) T.put(e, null);
    }
    static recordChannel(e) {
        let t = i.A.getBasicChannel(e);
        if (null != t && (0, A.c)(t)) {
            let n = { guildId: t.guild_id ?? null, channelId: e, channelType: t.type };
            (f = n), p.put(e, n), E(t) && null != T.put(e, null) && p.delete(e);
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
            (0, A.c)(t) || g.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of p.values()) e !== t.guildId || (0, A.J)(t.channelId) || g.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        p = e;
    }
}
function S() {
    let e = s.Ay.getChannelId();
    null != e && g.recordChannel(e);
}
function N() {
    g.dropUnreachableChannels(),
        g.replaceLru(
            (function (e) {
                if (e.totalLength >= 1250) return e;
                let t = new u(e.primaryCapacity, e.extendedCapacity),
                    n = 1250 - e.totalLength;
                for (let o of h.Ay.getGuildFolders())
                    for (let d of o.guildIds)
                        for (let o of Object.values(i.A.getMutableBasicGuildChannelsForGuild(d))) {
                            var r, a, s, l;
                            if (
                                (((r = o).type === _.rbe.DM ||
                                    r.type === _.rbe.GROUP_DM ||
                                    r.type === _.rbe.GUILD_TEXT) &&
                                    (0, A.c)(o) &&
                                    !E(o) &&
                                    ((a = d),
                                    (s = o),
                                    (l = t).hasExtended(s.id) ||
                                        l.put(s.id, {
                                            guildId: a,
                                            channelId: s.id,
                                            channelType: s.type,
                                            fallback: !0,
                                        })),
                                t.totalLength >= n)
                            )
                                return I(t, e);
                        }
                return I(t, e);
            })(p),
        );
}
function C(e) {
    let t = e.id,
        n = (0, A.c)(e),
        i = s.Ay.getChannelId();
    n && t === i && g.recordChannel(t), n || g.deleteChannel(t);
}
function R(e) {
    for (let t of e.channels) C(t);
}
function O(e) {
    g.deleteChannel(e.channel.id);
}
function L(e) {
    C(e.channel);
}
function y(e) {
    g.deleteChannel(e.channel.id);
}
function D(e) {
    return !e.guild.unavailable && (g.deleteGuild(e.guild.id), !0);
}
function v(e) {
    p.clear(), T.clear(), (m = !1);
}
function b(e) {
    m = !0;
}
let M = new g();
