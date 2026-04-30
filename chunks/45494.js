"use strict";
let i;
n.d(t, { A: () => P, m: () => g });
var r = n(735438),
    s = n.n(r),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(17928),
    c = n(228366),
    d = n(767581),
    _ = n(853742),
    f = n(95701),
    h = n(734057),
    p = n(222823),
    E = n(935208),
    m = n(152007);
let g = 25,
    A = !1,
    I = !0,
    T = !1,
    S = !1,
    N = null,
    y = o.T.LATEST_ACTIVITY,
    C = [],
    v = 0,
    O = a.n.MATCH_SOME;
function R() {
    (A = !1),
        (I = !0),
        (T = !1),
        (S = !1),
        (N = null),
        (y = o.T.LATEST_ACTIVITY),
        (i = new Set()),
        (v = 0),
        (C = []),
        (O = a.n.MATCH_SOME);
}
function b(e, t) {
    return t === o.T.LATEST_ACTIVITY ? p.Ay.lastMessageId(e.id) : e.id;
}
function D() {
    if (null == N) return !1;
    let e = !T,
        t = h.A.getChannel(C[C.length - 1]),
        n = null == t ? null : b(t, y);
    C = s()(h.A.getAllThreadsForParent(N))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== i.size) {
                if (O === a.n.MATCH_SOME) {
                    if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
                } else if (O === a.n.MATCH_ALL) {
                    for (let e of i.values()) if (t.appliedTags?.includes(e) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : b(t, y);
                return null != e && E.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => E.default.compare(b(e, y), b(t, y)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function L(e) {
    if (!(C.indexOf(e) >= 0)) return !1;
    C = C.filter((t) => t !== e);
}
let w = [];
class M extends u.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(h.A, m.A, p.Ay);
    }
    get canLoadMore() {
        return T && !A && !S;
    }
    get nextOffset() {
        return v;
    }
    get isInitialLoad() {
        return I;
    }
    isLoading(e, t, n, r) {
        return N === e && y === t && (0, l._)(i, n) && O === r ? A : (R(), !1);
    }
    getThreads(e, t, n, r) {
        return N === e && y === t && (0, l._)(i, n) && O === r ? C : w;
    }
}
let P = new M(c.h, {
    CONNECTION_OPEN: R,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return L(t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return N === t.parent_id && !!(0, d.yr)(t.id) && void L(t.id);
    },
    CHANNEL_DELETE: function (e) {
        if (e.channel.id !== N) return !1;
        R();
    },
    LOAD_ARCHIVED_THREADS: function (e) {
        (e.channelId === N && e.sortOrder === y && (0, l._)(e.tagFilter, i) && e.tagSetting === O) || R(),
            (N = e.channelId),
            (y = e.sortOrder),
            (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (O = e.tagSetting),
            (A = !0),
            (I = !1);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        if (e.channelId !== N || e.sortOrder !== y || !(0, l._)(e.tagFilter, i) || e.tagSetting !== O) return !1;
        let t = e.threads.filter((e) => f.A_.has(e.type)).map((e) => e.id);
        C = C.concat(t);
        let n = h.A.getChannel(N);
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
            D(),
            (T = e.hasMore),
            (v = e.offset + g),
            (A = !1),
            (I = !1);
    },
    LOAD_ARCHIVED_THREADS_FAIL: function (e) {
        if (e.channelId !== N || e.sortOrder !== y || !(0, l._)(e.tagFilter, i) || e.tagSetting !== O) return !1;
        (A = !1), (S = !0), (I = !1);
    },
    RESORT_THREADS: function (e) {
        return (null == N || null == e.channelId || N === e.channelId) && D();
    },
});
