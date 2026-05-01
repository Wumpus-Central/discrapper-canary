let i;
n.d(t, { A: () => M, m: () => f });
var l = n(735438),
    a = n.n(l),
    r = n(392421),
    s = n(602137),
    o = n(357758),
    d = n(17928),
    u = n(228366),
    c = n(767581),
    h = n(853742),
    E = n(95701),
    A = n(734057),
    _ = n(222823),
    p = n(935208),
    g = n(152007);
let f = 25,
    I = !1,
    S = !0,
    T = !1,
    m = !1,
    C = null,
    O = s.T.LATEST_ACTIVITY,
    N = [],
    y = 0,
    R = r.n.MATCH_SOME;
function L() {
    (I = !1),
        (S = !0),
        (T = !1),
        (m = !1),
        (C = null),
        (O = s.T.LATEST_ACTIVITY),
        (i = new Set()),
        (y = 0),
        (N = []),
        (R = r.n.MATCH_SOME);
}
function v(e, t) {
    return t === s.T.LATEST_ACTIVITY ? _.Ay.lastMessageId(e.id) : e.id;
}
function D() {
    if (null == C) return !1;
    let e = !T,
        t = A.A.getChannel(N[N.length - 1]),
        n = null == t ? null : v(t, O);
    N = a()(A.A.getAllThreadsForParent(C))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== i.size) {
                if (R === r.n.MATCH_SOME) {
                    if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
                } else if (R === r.n.MATCH_ALL) {
                    for (let e of i.values()) if (t.appliedTags?.includes(e) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : v(t, O);
                return null != e && p.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => p.default.compare(v(e, O), v(t, O)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function U(e) {
    if (!(N.indexOf(e) >= 0)) return !1;
    N = N.filter((t) => t !== e);
}
let P = [];
class b extends d.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(A.A, g.A, _.Ay);
    }
    get canLoadMore() {
        return T && !I && !m;
    }
    get nextOffset() {
        return y;
    }
    get isInitialLoad() {
        return S;
    }
    isLoading(e, t, n, l) {
        return C === e && O === t && (0, o._)(i, n) && R === l ? I : (L(), !1);
    }
    getThreads(e, t, n, l) {
        return C === e && O === t && (0, o._)(i, n) && R === l ? N : P;
    }
}
let M = new b(u.h, {
    CONNECTION_OPEN: L,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return U(t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return C === t.parent_id && !!(0, c.yr)(t.id) && void U(t.id);
    },
    CHANNEL_DELETE: function (e) {
        if (e.channel.id !== C) return !1;
        L();
    },
    LOAD_ARCHIVED_THREADS: function (e) {
        (e.channelId === C && e.sortOrder === O && (0, o._)(e.tagFilter, i) && e.tagSetting === R) || L(),
            (C = e.channelId),
            (O = e.sortOrder),
            (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (R = e.tagSetting),
            (I = !0),
            (S = !1);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        if (e.channelId !== C || e.sortOrder !== O || !(0, o._)(e.tagFilter, i) || e.tagSetting !== R) return !1;
        let t = e.threads.filter((e) => E.A_.has(e.type)).map((e) => e.id);
        N = N.concat(t);
        let n = A.A.getChannel(C);
        null != n &&
            n.isForumLikeChannel() &&
            (0, h._Z)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: N.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder,
            }),
            D(),
            (T = e.hasMore),
            (y = e.offset + f),
            (I = !1),
            (S = !1);
    },
    LOAD_ARCHIVED_THREADS_FAIL: function (e) {
        if (e.channelId !== C || e.sortOrder !== O || !(0, o._)(e.tagFilter, i) || e.tagSetting !== R) return !1;
        (I = !1), (m = !0), (S = !1);
    },
    RESORT_THREADS: function (e) {
        return (null == C || null == e.channelId || C === e.channelId) && D();
    },
});
