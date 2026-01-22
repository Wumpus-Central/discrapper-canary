let r;
n.d(t, {
    A: () => Q,
    S: () => F,
}),
    n(896048),
    n(638769);
var i,
    a = n(735438),
    s = n.n(a),
    o = n(392421),
    l = n(602137),
    c = n(357758),
    u = n(311907),
    d = n(73153),
    f = n(970278),
    p = n(456874),
    _ = n(961350),
    h = n(734057),
    m = n(222823),
    g = n(309010),
    E = n(661191),
    b = n(767581);

function y(e, t, n) {
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
let O = [],
    A = null,
    v = null,
    S = new Set(),
    I = l.T.LATEST_ACTIVITY,
    T = o.n.MATCH_SOME,
    C = 0,
    N = [],
    R = !1,
    w = [],
    P = s().chain(O),
    D = s().chain(O),
    x = new Set(),
    L = new Set();

function j(e) {
    var t;
    return null != (t = m.Ay.lastMessageId(e)) ? t : e;
}

function M(e) {
    let t = p.A.getCount(e);
    return null === t || 0 === t;
}

function k(e) {
    return function (t, n) {
        return (0, b.yr)(t)
            ? -1
            : (0, b.yr)(n)
              ? 1
              : e === l.T.LATEST_ACTIVITY
                ? E.default.compare(j(n), j(t))
                : E.default.compare(n, t);
    };
}

function U(e, t) {
    return function (n) {
        var r;
        let i = null == (r = h.A.getChannel(n)) ? void 0 : r.appliedTags;
        if (null == i || 0 === i.length) return !1;
        if (t === o.n.MATCH_SOME) return i.some((t) => e.has(t));
        for (let t of e.values()) if (!i.includes(t)) return !1;
        return !0;
    };
}

function G() {
    (N = []),
        (r = null),
        (v = null),
        (S = new Set()),
        (I = l.T.LATEST_ACTIVITY),
        (T = o.n.MATCH_SOME),
        (C = 0),
        (w = []),
        (P = s().chain(O)),
        (D = s().chain(O)),
        L.clear(),
        x.clear();
}

function V() {
    var e;
    let t = g.A.getChannelId();
    if (null == t || !(null == (e = h.A.getChannel(t)) ? void 0 : e.isForumLikeChannel())) return G(), !1;
    B({
        refreshThreadIds: !0,
    });
}

function F(e) {
    let t = h.A.getChannel(e);
    return null == t
        ? []
        : Object.values(f.A.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(k(I));
}

function B(e) {
    let t = h.A.getChannel(v);
    if (null == t) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((w = Object.values(f.A.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (C = 0),
        (R = !0)),
        0 !== x.size && ((w = w.filter((e) => !x.has(e))), x.clear()),
        0 !== L.size && ((w = Array.from(new Set([...w, ...L]))), L.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) &&
            ((D = s().chain(w).sort(k(l.T.LATEST_ACTIVITY))), (P = s().chain(w).sort(k(l.T.CREATION_DATE))));
    let n = (I === l.T.LATEST_ACTIVITY ? D : P).value(),
        i = (N = 0 === S.size ? n : n.filter(U(S, T))).find((e) => M(e));
    r = null == i ? null : i;
}

function H(e) {
    var t;
    let { guildId: n } = e;
    if (null == v || n !== (null == (t = h.A.getChannel(v)) ? void 0 : t.guild_id)) return !1;
    B({
        refreshThreadIds: !0,
    });
}

function Y(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== v) return !1;
    let n = (0, b.yr)(t.id),
        r = L.has(t.id);
    if (n && !r)
        L.add(t.id),
            B({
                sortThreadIds: !0,
            });
    else {
        if (n || !r) return !1;
        L.delete(t.id),
            B({
                sortThreadIds: !0,
            });
    }
}

function W(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== v || !n) return !1;
    t.ownerId !== _.default.getId() ? C++ : (A = t.id);
}

function K(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== v) return !1;
    x.add(t.id),
        B({
            sortThreadIds: !0,
        });
}

function z(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== v) return !1;
    G();
}

function q(e) {
    let { channelId: t } = e;
    if (null == t || t !== v) return !1;
    B({
        refreshThreadIds: !0,
    });
}

function X(e) {
    let { channelId: t } = e;
    if (null == t || t !== v) return !1;
    R = !1;
}
class Z extends (i = u.Ay.Store) {
    initialize() {
        this.waitFor(f.A, _.default, h.A, m.Ay, g.A, p.A);
    }
    getNewThreadCount() {
        return C;
    }
    getCanAckThreads() {
        return R;
    }
    getThreadIds(e, t, n, r) {
        let i = e !== v,
            a = !(0, c._)(n, S),
            s = t !== I,
            o = r !== T;
        return (
            (v = e),
            (S = n),
            (I = t),
            (T = r),
            i
                ? B({
                      refreshThreadIds: !0,
                  })
                : s
                  ? B({
                        sortThreadIds: !0,
                    })
                  : (a || o) && B(),
            N
        );
    }
    getCurrentThreadIds() {
        return N;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = A;
        return (A = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
y(Z, "displayName", "ForumActivePostStore");
let Q = new Z(d.h, {
    CONNECTION_OPEN: V,
    OVERLAY_INITIALIZE: V,
    GUILD_CREATE: V,
    CHANNEL_SELECT: V,
    CHANNEL_DELETE: z,
    THREAD_LIST_SYNC: H,
    THREAD_CREATE: W,
    THREAD_UPDATE: Y,
    THREAD_DELETE: K,
    RESORT_THREADS: q,
    CHANNEL_ACK: X,
});
