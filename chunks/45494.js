"use strict";
let i;
n.d(t, { A: () => U, m: () => A });
var r = n(735438),
    s = n.n(r),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(17928),
    c = n(228366),
    d = n(626584),
    _ = n(767581),
    h = n(853742),
    f = n(95701),
    p = n(734057),
    E = n(222823),
    m = n(935208),
    g = n(152007);
let A = 25,
    I = !1,
    T = !0,
    S = !1,
    y = !1,
    C = null,
    N = o.T.LATEST_ACTIVITY,
    v = [],
    R = 0,
    O = a.n.MATCH_SOME,
    b = new d.A("ArchivedThreadsStore");
function D() {
    (I = !1),
        (T = !0),
        (S = !1),
        (y = !1),
        (C = null),
        (N = o.T.LATEST_ACTIVITY),
        (i = new Set()),
        (R = 0),
        (v = []),
        (O = a.n.MATCH_SOME);
}
function L(e, t) {
    return t === o.T.LATEST_ACTIVITY ? E.Ay.lastMessageId(e.id) : e.id;
}
function w() {
    if (null == C) return !1;
    let e = !S,
        t = p.A.getChannel(v[v.length - 1]),
        n = null == t ? null : L(t, N);
    v = s()(p.A.getAllThreadsForParent(C))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== i.size)
                switch (O) {
                    case a.n.MATCH_SOME:
                        if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
                        break;
                    case a.n.MATCH_ALL:
                        for (let e of i.values()) if (t.appliedTags?.includes(e) !== !0) return !1;
                }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : L(t, N);
                return null != e && m.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => m.default.compare(L(e, N), L(t, N)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function M(e) {
    if (!(v.indexOf(e) >= 0)) return !1;
    v = v.filter((t) => t !== e);
}
function P(e, t, n, r) {
    return C === e && N === t && (0, l._)(i, n) && O === r;
}
let x = [];
class k extends u.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(p.A, g.A, E.Ay);
    }
    getCanLoadMore(e, t, n, i) {
        return !!P(e, t, n, i) && S && !I && !y;
    }
    getNextOffset(e, t, n, i) {
        return P(e, t, n, i) ? R : 0;
    }
    getIsInitialLoad(e, t, n, i) {
        return !P(e, t, n, i) || T;
    }
    isLoading(e, t, n, i) {
        return P(e, t, n, i) && I;
    }
    getThreads(e, t, n, i) {
        return P(e, t, n, i) ? v : x;
    }
}
let U = new k(c.h, {
    CONNECTION_OPEN: D,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return M(t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return C === t.parent_id && !!(0, _.yr)(t.id) && void M(t.id);
    },
    CHANNEL_DELETE: function (e) {
        if (e.channel.id !== C) return !1;
        D();
    },
    LOAD_ARCHIVED_THREADS: function (e) {
        (e.channelId === C && e.sortOrder === N && (0, l._)(e.tagFilter, i) && e.tagSetting === O) || D(),
            (C = e.channelId),
            (N = e.sortOrder),
            (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (O = e.tagSetting),
            (I = !0),
            (T = !1);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        if (e.channelId !== C || e.sortOrder !== N || !(0, l._)(e.tagFilter, i) || e.tagSetting !== O)
            return b.info("ignored stale archived threads response", { channelId: e.channelId }), !1;
        let t = e.threads.filter((e) => f.A_.has(e.type)).map((e) => e.id);
        v = v.concat(t);
        let n = p.A.getChannel(C);
        null != n &&
            n.isForumLikeChannel() &&
            (0, h._Z)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: v.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder,
            }),
            w(),
            b.info("archived threads loaded", { channelId: C, offset: e.offset, count: v.length, hasMore: e.hasMore }),
            (S = e.hasMore),
            (R = e.offset + A),
            (I = !1),
            (T = !1);
    },
    LOAD_ARCHIVED_THREADS_FAIL: function (e) {
        if (e.channelId !== C || e.sortOrder !== N || !(0, l._)(e.tagFilter, i) || e.tagSetting !== O) return !1;
        (I = !1), (y = !0), (T = !1);
    },
    RESORT_THREADS: function (e) {
        return (null == C || null == e.channelId || C === e.channelId) && w();
    },
});
