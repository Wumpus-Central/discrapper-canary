"use strict";
let i;
n.d(t, { A: () => x, m: () => g });
var r = n(735438),
    s = n.n(r),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(17928),
    c = n(228366),
    d = n(767581),
    _ = n(853742),
    h = n(95701),
    f = n(734057),
    p = n(568548),
    E = n(935208),
    m = n(152007);
let g = 25,
    A = !1,
    I = !0,
    T = !1,
    S = !1,
    y = null,
    C = o.T.LATEST_ACTIVITY,
    N = [],
    v = 0,
    R = a.n.MATCH_SOME;
function O() {
    (A = !1),
        (I = !0),
        (T = !1),
        (S = !1),
        (y = null),
        (C = o.T.LATEST_ACTIVITY),
        (i = new Set()),
        (v = 0),
        (N = []),
        (R = a.n.MATCH_SOME);
}
function b(e, t) {
    return t === o.T.LATEST_ACTIVITY ? p.Ay.lastMessageId(e.id) : e.id;
}
function D() {
    if (null == y) return !1;
    let e = !T,
        t = f.A.getChannel(N[N.length - 1]),
        n = null == t ? null : b(t, C);
    N = s()(f.A.getAllThreadsForParent(y))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== i.size)
                switch (R) {
                    case a.n.MATCH_SOME:
                        if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
                        break;
                    case a.n.MATCH_ALL:
                        for (let e of i.values()) if (t.appliedTags?.includes(e) !== !0) return !1;
                }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : b(t, C);
                return null != e && E.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => E.default.compare(b(e, C), b(t, C)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function L(e) {
    if (!(N.indexOf(e) >= 0)) return !1;
    N = N.filter((t) => t !== e);
}
function w(e, t, n, r) {
    return y === e && C === t && (0, l._)(i, n) && R === r;
}
let M = [];
class P extends u.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(f.A, m.A, p.Ay);
    }
    getCanLoadMore(e, t, n, i) {
        return !!w(e, t, n, i) && T && !A && !S;
    }
    getNextOffset(e, t, n, i) {
        return w(e, t, n, i) ? v : 0;
    }
    getIsInitialLoad(e, t, n, i) {
        return !w(e, t, n, i) || I;
    }
    isLoading(e, t, n, i) {
        return w(e, t, n, i) && A;
    }
    getThreads(e, t, n, i) {
        return w(e, t, n, i) ? N : M;
    }
}
let x = new P(c.h, {
    CONNECTION_OPEN: O,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return L(t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return y === t.parent_id && !!(0, d.yr)(t.id) && void L(t.id);
    },
    CHANNEL_DELETE: function (e) {
        if (e.channel.id !== y) return !1;
        O();
    },
    LOAD_ARCHIVED_THREADS: function (e) {
        (e.channelId === y && e.sortOrder === C && (0, l._)(e.tagFilter, i) && e.tagSetting === R) || O(),
            (y = e.channelId),
            (C = e.sortOrder),
            (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (R = e.tagSetting),
            (A = !0),
            (I = !1);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        if (e.channelId !== y || e.sortOrder !== C || !(0, l._)(e.tagFilter, i) || e.tagSetting !== R) return !1;
        let t = e.threads.filter((e) => h.A_.has(e.type)).map((e) => e.id);
        N = N.concat(t);
        let n = f.A.getChannel(y);
        null != n &&
            n.isForumLikeChannel() &&
            (0, _._Z)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: N.length,
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
        if (e.channelId !== y || e.sortOrder !== C || !(0, l._)(e.tagFilter, i) || e.tagSetting !== R) return !1;
        (A = !1), (S = !0), (I = !1);
    },
    RESORT_THREADS: function (e) {
        return (null == y || null == e.channelId || y === e.channelId) && D();
    },
});
