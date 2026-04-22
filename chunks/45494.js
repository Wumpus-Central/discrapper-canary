"use strict";
let r;
n.d(t, { A: () => P, m: () => g });
var i = n(735438),
    s = n.n(i),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(311907),
    d = n(73153),
    c = n(767581),
    _ = n(853742),
    f = n(95701),
    E = n(734057),
    h = n(222823),
    p = n(661191),
    m = n(152007);
let g = 25,
    A = !1,
    I = !0,
    T = !1,
    S = !1,
    y = null,
    N = o.T.LATEST_ACTIVITY,
    O = [],
    R = 0,
    v = a.n.MATCH_SOME;
function C() {
    (A = !1),
        (I = !0),
        (T = !1),
        (S = !1),
        (y = null),
        (N = o.T.LATEST_ACTIVITY),
        (r = new Set()),
        (R = 0),
        (O = []),
        (v = a.n.MATCH_SOME);
}
function b(e, t) {
    return t === o.T.LATEST_ACTIVITY ? h.Ay.lastMessageId(e.id) : e.id;
}
function D() {
    if (null == y) return !1;
    let e = !T,
        t = E.A.getChannel(O[O.length - 1]),
        n = null == t ? null : b(t, N);
    O = s()(E.A.getAllThreadsForParent(y))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== r.size) {
                if (v === a.n.MATCH_SOME) {
                    if (t.appliedTags?.some((e) => r.has(e)) !== !0) return !1;
                } else if (v === a.n.MATCH_ALL) {
                    for (let e of r.values()) if (t.appliedTags?.includes(e) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : b(t, N);
                return null != e && p.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => p.default.compare(b(e, N), b(t, N)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function L(e) {
    if (!(O.indexOf(e) >= 0)) return !1;
    O = O.filter((t) => t !== e);
}
let w = [];
class M extends u.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(E.A, m.A, h.Ay);
    }
    get canLoadMore() {
        return T && !A && !S;
    }
    get nextOffset() {
        return R;
    }
    get isInitialLoad() {
        return I;
    }
    isLoading(e, t, n, i) {
        return y === e && N === t && (0, l._)(r, n) && v === i ? A : (C(), !1);
    }
    getThreads(e, t, n, i) {
        return y === e && N === t && (0, l._)(r, n) && v === i ? O : w;
    }
}
let P = new M(d.h, {
    CONNECTION_OPEN: C,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return L(t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        return y === t.parent_id && !!(0, c.yr)(t.id) && void L(t.id);
    },
    CHANNEL_DELETE: function (e) {
        if (e.channel.id !== y) return !1;
        C();
    },
    LOAD_ARCHIVED_THREADS: function (e) {
        (e.channelId === y && e.sortOrder === N && (0, l._)(e.tagFilter, r) && e.tagSetting === v) || C(),
            (y = e.channelId),
            (N = e.sortOrder),
            (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (v = e.tagSetting),
            (A = !0),
            (I = !1);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        if (e.channelId !== y || e.sortOrder !== N || !(0, l._)(e.tagFilter, r) || e.tagSetting !== v) return !1;
        let t = e.threads.filter((e) => f.A_.has(e.type)).map((e) => e.id);
        O = O.concat(t);
        let n = E.A.getChannel(y);
        null != n &&
            n.isForumLikeChannel() &&
            (0, _._Z)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: O.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder,
            }),
            D(),
            (T = e.hasMore),
            (R = e.offset + g),
            (A = !1),
            (I = !1);
    },
    LOAD_ARCHIVED_THREADS_FAIL: function (e) {
        if (e.channelId !== y || e.sortOrder !== N || !(0, l._)(e.tagFilter, r) || e.tagSetting !== v) return !1;
        (A = !1), (S = !0), (I = !1);
    },
    RESORT_THREADS: function (e) {
        return (null == y || null == e.channelId || y === e.channelId) && D();
    },
});
