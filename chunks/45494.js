"use strict";
let r;
n.d(t, { A: () => B, m: () => E });
var i = n(735438),
    a = n.n(i),
    s = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(311907),
    c = n(73153),
    d = n(767581),
    _ = n(853742),
    f = n(95701),
    p = n(734057),
    h = n(222823),
    m = n(661191),
    g = n(152007);
let E = 25,
    A = !1,
    I = !0,
    T = !1,
    y = !1,
    S = null,
    v = o.T.LATEST_ACTIVITY,
    C = [],
    b = 0,
    N = s.n.MATCH_SOME;
function R() {
    (A = !1),
        (I = !0),
        (T = !1),
        (y = !1),
        (S = null),
        (v = o.T.LATEST_ACTIVITY),
        (r = new Set()),
        (b = 0),
        (C = []),
        (N = s.n.MATCH_SOME);
}
function O(e, t) {
    return t === o.T.LATEST_ACTIVITY ? h.Ay.lastMessageId(e.id) : e.id;
}
function D(e) {
    (e.channelId === S && e.sortOrder === v && (0, l._)(e.tagFilter, r) && e.tagSetting === N) || R(),
        (S = e.channelId),
        (v = e.sortOrder),
        (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
        (N = e.tagSetting),
        (A = !0),
        (I = !1);
}
function L(e) {
    if (e.channelId !== S || e.sortOrder !== v || !(0, l._)(e.tagFilter, r) || e.tagSetting !== N) return !1;
    let t = e.threads.filter((e) => f.A_.has(e.type)).map((e) => e.id);
    C = C.concat(t);
    let n = p.A.getChannel(S);
    null != n &&
        n.isForumLikeChannel() &&
        (0, _._Z)({
            guildId: n.guild_id,
            channelId: n.id,
            numArchivedThreads: C.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder,
        }),
        x(),
        (T = e.hasMore),
        (b = e.offset + E),
        (A = !1),
        (I = !1);
}
function w(e) {
    return (null == S || null == e.channelId || S === e.channelId) && x();
}
function x() {
    if (null == S) return !1;
    let e = !T,
        t = p.A.getChannel(C[C.length - 1]),
        n = null == t ? null : O(t, v);
    C = a()(p.A.getAllThreadsForParent(S))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== r.size) {
                if (N === s.n.MATCH_SOME) {
                    if (t.appliedTags?.some((e) => r.has(e)) !== !0) return !1;
                } else if (N === s.n.MATCH_ALL) {
                    for (let e of r.values()) if (t.appliedTags?.includes(e) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : O(t, v);
                return null != e && m.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => m.default.compare(O(e, v), O(t, v)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function P(e) {
    if (e.channelId !== S || e.sortOrder !== v || !(0, l._)(e.tagFilter, r) || e.tagSetting !== N) return !1;
    (A = !1), (y = !0), (I = !1);
}
function M(e) {
    if (e.channel.id !== S) return !1;
    R();
}
function k(e) {
    if (!(C.indexOf(e) >= 0)) return !1;
    C = C.filter((t) => t !== e);
}
function U(e) {
    let { channel: t } = e;
    return k(t.id);
}
function G(e) {
    let { channel: t } = e;
    return S === t.parent_id && !!(0, d.yr)(t.id) && void k(t.id);
}
let V = [];
class F extends u.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(p.A, g.A, h.Ay);
    }
    get canLoadMore() {
        return T && !A && !y;
    }
    get nextOffset() {
        return b;
    }
    get isInitialLoad() {
        return I;
    }
    isLoading(e, t, n, i) {
        return S === e && v === t && (0, l._)(r, n) && N === i ? A : (R(), !1);
    }
    getThreads(e, t, n, i) {
        return S === e && v === t && (0, l._)(r, n) && N === i ? C : V;
    }
}
let B = new F(c.h, {
    CONNECTION_OPEN: R,
    THREAD_DELETE: U,
    THREAD_UPDATE: G,
    CHANNEL_DELETE: M,
    LOAD_ARCHIVED_THREADS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    LOAD_ARCHIVED_THREADS_FAIL: P,
    RESORT_THREADS: w,
});
