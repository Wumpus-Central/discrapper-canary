"use strict";
n.d(t, { Ay: () => w });
var i = n(734057),
    r = n(498642),
    s = n(536802),
    a = n(309010),
    o = n(753027);
class l {
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
function u() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new l(t);
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
class d {
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
        return u(this.extended.entries(), this.primary.entries());
    }
    allKeys() {
        return u(this.extended.keys(), this.primary.keys());
    }
    allValues() {
        return u(this.extended.values(), this.primary.values());
    }
}
var _ = n(652215);
function f(e) {
    let t = r.A.getMemberCount(e?.guild_id) ?? 0;
    return null != e && e.type !== _.rbe.DM && e.type !== _.rbe.GROUP_DM && t >= 1e4;
}
var h = n(552618),
    p = n(711014);
function E(e, t) {
    for (let [n, i] of t.allEntries()) e.put(n, i);
    return e;
}
let m = null,
    g = new d(750, 500),
    A = new c(15),
    I = !1;
class T extends s.A {
    static displayName = "SaveableChannelsStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: L,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: v,
            CHANNEL_UPDATES: C,
            CONNECTION_OPEN_SUPPLEMENTAL: N,
            GUILD_DELETE: b,
            LOGIN_SUCCESS: D,
            THREAD_DELETE: R,
            THREAD_UPDATE: O,
        });
    }
    initialize() {
        this.waitFor(i.A),
            this.waitFor(a.A),
            this.waitFor(r.A),
            this.syncWith([o.A], () => !0),
            this.syncWith([a.A], S);
    }
    loadCache() {
        let e = this.readSnapshot(T.LATEST_SNAPSHOT_VERSION);
        null != e && ((I = !0), T.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return I;
    }
    saveLimit(e) {
        let t = i.A.getBasicChannel(e);
        return (null != t && null == t.guild_id) || (null != t && (a.A.getChannelId() === e || g.has(e))) ? 25 : 1;
    }
    getSaveableChannels() {
        let e = i.A.getChannelIds(null).map((e) => ({ guildId: null, channelId: e }));
        return o.A.isLowDisk ? (null != m ? [...e, m] : e) : [...e, ...g.values()];
    }
    takeSnapshot() {
        return {
            version: T.LATEST_SNAPSHOT_VERSION,
            data: { channels: [...g.allValues()].filter((e) => !e.fallback), penalized: [...A.keys()], lastChannel: m },
        };
    }
    static mergeSnapshot(e) {
        let t = g,
            n = A;
        for (let n of ((g = new d(g.primaryCapacity, g.extendedCapacity)),
        (A = new c(A.capacity)),
        (m = m ?? e.lastChannel),
        [e.channels, t.values()]))
            for (let e of n) e.fallback || g.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) A.put(e, null);
    }
    static recordChannel(e) {
        let t = i.A.getBasicChannel(e);
        if (null != t && (0, h.c)(t)) {
            let n = { guildId: t.guild_id ?? null, channelId: e, channelType: t.type };
            (m = n), g.put(e, n), f(t) && null != A.put(e, null) && g.delete(e);
        }
    }
    static deleteChannel(e) {
        g.delete(e);
    }
    static deleteGuild(e) {
        for (let t of g.allValues()) t.guildId === e && g.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of g.keys()) {
            let t = i.A.getBasicChannel(e);
            (0, h.c)(t) || T.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of g.values()) e !== t.guildId || (0, h.J)(t.channelId) || T.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        g = e;
    }
}
function S() {
    let e = a.A.getChannelId();
    null != e && T.recordChannel(e);
}
function N() {
    T.dropUnreachableChannels(),
        T.replaceLru(
            (function (e) {
                if (e.totalLength >= 1250) return e;
                let t = new d(e.primaryCapacity, e.extendedCapacity),
                    n = 1250 - e.totalLength;
                for (let l of p.Ay.getGuildFolders())
                    for (let u of l.guildIds)
                        for (let l of Object.values(i.A.getMutableBasicGuildChannelsForGuild(u))) {
                            var r, s, a, o;
                            if (
                                (((r = l).type === _.rbe.DM ||
                                    r.type === _.rbe.GROUP_DM ||
                                    r.type === _.rbe.GUILD_TEXT) &&
                                    (0, h.c)(l) &&
                                    !f(l) &&
                                    ((s = u),
                                    (a = l),
                                    (o = t).hasExtended(a.id) ||
                                        o.put(a.id, {
                                            guildId: s,
                                            channelId: a.id,
                                            channelType: a.type,
                                            fallback: !0,
                                        })),
                                t.totalLength >= n)
                            )
                                return E(t, e);
                        }
                return E(t, e);
            })(g),
        );
}
function y(e) {
    let t = e.id,
        n = (0, h.c)(e),
        i = a.A.getChannelId();
    n && t === i && T.recordChannel(t), n || T.deleteChannel(t);
}
function C(e) {
    for (let t of e.channels) y(t);
}
function v(e) {
    T.deleteChannel(e.channel.id);
}
function O(e) {
    y(e.channel);
}
function R(e) {
    T.deleteChannel(e.channel.id);
}
function b(e) {
    return !e.guild.unavailable && (T.deleteGuild(e.guild.id), !0);
}
function D(e) {
    g.clear(), A.clear(), (I = !1);
}
function L(e) {
    I = !0;
}
let w = new T();
