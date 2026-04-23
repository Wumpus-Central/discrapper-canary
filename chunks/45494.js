let i;
n.d(t, { A: () => M, m: () => g });
var r = n(735438),
    l = n.n(r),
    a = n(392421),
    s = n(602137),
    o = n(357758),
    d = n(17928),
    u = n(228366),
    c = n(767581),
    h = n(853742),
    E = n(95701),
    _ = n(734057),
    p = n(222823),
    A = n(935208),
    f = n(152007);
let g = 25,
    I = !1,
    T = !0,
    S = !1,
    m = !1,
    O = null,
    C = s.T.LATEST_ACTIVITY,
    N = [],
    y = 0,
    R = a.n.MATCH_SOME;
function L() {
    (I = !1),
        (T = !0),
        (S = !1),
        (m = !1),
        (O = null),
        (C = s.T.LATEST_ACTIVITY),
        (i = new Set()),
        (y = 0),
        (N = []),
        (R = a.n.MATCH_SOME);
}
function v(e, t) {
    return t === s.T.LATEST_ACTIVITY ? p.Ay.lastMessageId(e.id) : e.id;
}
function D() {
    if (null == O) return !1;
    let e = !S,
        t = _.A.getChannel(N[N.length - 1]),
        n = null == t ? null : v(t, C);
    N = l()(_.A.getAllThreadsForParent(O))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== i.size) {
                if (R === a.n.MATCH_SOME) {
                    if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
                } else if (R === a.n.MATCH_ALL) {
                    for (let e of i.values()) if (t.appliedTags?.includes(e) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : v(t, C);
                return null != e && A.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => A.default.compare(v(e, C), v(t, C)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function b(e) {
    if (!(N.indexOf(e) >= 0)) return !1;
    N = N.filter((t) => t !== e);
}
let U = [];
class P extends d.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(_.A, f.A, p.Ay);
    }
    get canLoadMore() {
        return S && !I && !m;
    }
    get nextOffset() {
        return y;
    }
    get isInitialLoad() {
        return T;
    }
    isLoading(e, t, n, r) {
        return O === e && C === t && (0, o._)(i, n) && R === r ? I : (L(), !1);
    }
    getThreads(e, t, n, r) {
        return O === e && C === t && (0, o._)(i, n) && R === r ? N : U;
    }
}
let M = new P(u.h, {
    CONNECTION_OPEN: L,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return b(t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return O === t.parent_id && !!(0, c.yr)(t.id) && void b(t.id);
    },
    CHANNEL_DELETE: function (e) {
        if (e.channel.id !== O) return !1;
        L();
    },
    LOAD_ARCHIVED_THREADS: function (e) {
        (e.channelId === O && e.sortOrder === C && (0, o._)(e.tagFilter, i) && e.tagSetting === R) || L(),
            (O = e.channelId),
            (C = e.sortOrder),
            (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (R = e.tagSetting),
            (I = !0),
            (T = !1);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        if (e.channelId !== O || e.sortOrder !== C || !(0, o._)(e.tagFilter, i) || e.tagSetting !== R) return !1;
        let t = e.threads.filter((e) => E.A_.has(e.type)).map((e) => e.id);
        N = N.concat(t);
        let n = _.A.getChannel(O);
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
            (S = e.hasMore),
            (y = e.offset + g),
            (I = !1),
            (T = !1);
    },
    LOAD_ARCHIVED_THREADS_FAIL: function (e) {
        if (e.channelId !== O || e.sortOrder !== C || !(0, o._)(e.tagFilter, i) || e.tagSetting !== R) return !1;
        (I = !1), (m = !0), (T = !1);
    },
    RESORT_THREADS: function (e) {
        return (null == O || null == e.channelId || O === e.channelId) && D();
    },
});
