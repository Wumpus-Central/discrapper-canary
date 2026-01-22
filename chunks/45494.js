let r;
n.d(t, {
    A: () => H,
    m: () => y,
}),
    n(896048),
    n(638769),
    n(264879);
var i,
    a = n(735438),
    s = n.n(a),
    o = n(392421),
    l = n(602137),
    c = n(357758),
    u = n(311907),
    d = n(73153),
    f = n(767581),
    p = n(853742),
    _ = n(95701),
    h = n(734057),
    m = n(222823),
    g = n(661191),
    E = n(152007);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = 25,
    O = !1,
    A = !0,
    v = !1,
    S = !1,
    I = null,
    T = l.T.LATEST_ACTIVITY,
    C = [],
    N = 0,
    R = o.n.MATCH_SOME;

function w() {
    (O = !1),
        (A = !0),
        (v = !1),
        (S = !1),
        (I = null),
        (T = l.T.LATEST_ACTIVITY),
        (r = new Set()),
        (N = 0),
        (C = []),
        (R = o.n.MATCH_SOME);
}

function P(e, t) {
    return t === l.T.LATEST_ACTIVITY ? m.Ay.lastMessageId(e.id) : e.id;
}

function D(e) {
    (e.channelId === I && e.sortOrder === T && (0, c._)(e.tagFilter, r) && e.tagSetting === R) || w(),
        (I = e.channelId),
        (T = e.sortOrder),
        (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
        (R = e.tagSetting),
        (O = !0),
        (A = !1);
}

function x(e) {
    if (e.channelId !== I || e.sortOrder !== T || !(0, c._)(e.tagFilter, r) || e.tagSetting !== R) return !1;
    let t = e.threads.filter((e) => _.A_.has(e.type)).map((e) => e.id);
    C = C.concat(t);
    let n = h.A.getChannel(I);
    null != n &&
        n.isForumLikeChannel() &&
        (0, p._Z)({
            guildId: n.guild_id,
            channelId: n.id,
            numArchivedThreads: C.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder,
        }),
        j(),
        (v = e.hasMore),
        (N = e.offset + y),
        (O = !1),
        (A = !1);
}

function L(e) {
    return (null == I || null == e.channelId || I === e.channelId) && j();
}

function j() {
    if (null == I) return !1;
    let e = !v,
        t = h.A.getChannel(C[C.length - 1]),
        n = null == t ? null : P(t, T);
    C = s()(h.A.getAllThreadsForParent(I))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== r.size) {
                var i, a;
                if (R === o.n.MATCH_SOME) {
                    if ((null == (i = t.appliedTags) ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
                } else if (R === o.n.MATCH_ALL) {
                    for (let e of r.values())
                        if ((null == (a = t.appliedTags) ? void 0 : a.includes(e)) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : P(t, T);
                return null != e && g.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => g.default.compare(P(e, T), P(t, T)))
        .map((e) => e.id)
        .reverse()
        .value();
}

function M(e) {
    if (e.channelId !== I || e.sortOrder !== T || !(0, c._)(e.tagFilter, r) || e.tagSetting !== R) return !1;
    (O = !1), (S = !0), (A = !1);
}

function k(e) {
    if (e.channel.id !== I) return !1;
    w();
}

function U(e) {
    if (!(C.indexOf(e) >= 0)) return !1;
    C = C.filter((t) => t !== e);
}

function G(e) {
    let { channel: t } = e;
    return U(t.id);
}

function V(e) {
    let { channel: t } = e;
    return I === t.parent_id && !!(0, f.yr)(t.id) && void U(t.id);
}
let F = [];
class B extends (i = u.Ay.Store) {
    initialize() {
        this.waitFor(h.A, E.A, m.Ay);
    }
    get canLoadMore() {
        return v && !O && !S;
    }
    get nextOffset() {
        return N;
    }
    get isInitialLoad() {
        return A;
    }
    isLoading(e, t, n, i) {
        return I === e && T === t && (0, c._)(r, n) && R === i ? O : (w(), !1);
    }
    getThreads(e, t, n, i) {
        return I === e && T === t && (0, c._)(r, n) && R === i ? C : F;
    }
}
b(B, "displayName", "ArchivedThreadsStore");
let H = new B(d.h, {
    CONNECTION_OPEN: w,
    THREAD_DELETE: G,
    THREAD_UPDATE: V,
    CHANNEL_DELETE: k,
    LOAD_ARCHIVED_THREADS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: x,
    LOAD_ARCHIVED_THREADS_FAIL: M,
    RESORT_THREADS: L,
});
