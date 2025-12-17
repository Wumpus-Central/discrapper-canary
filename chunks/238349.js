let r;
n.d(t, {
    U: () => F,
    Z: () => X,
}),
    n(388685),
    n(642613);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(697988),
    l = n(683860),
    c = n(843991),
    u = n(442837),
    d = n(570140),
    f = n(344185),
    p = n(144140),
    _ = n(314897),
    m = n(592125),
    h = n(306680),
    g = n(944486),
    E = n(709054),
    b = n(882252);
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
    v = null,
    S = null,
    I = new Set(),
    T = l.z.LATEST_ACTIVITY,
    C = s.z.MATCH_SOME,
    A = 0,
    N = [],
    P = !1,
    R = [],
    w = o().chain(O),
    D = o().chain(O),
    x = new Set(),
    L = new Set();
function j(e) {
    var t;
    return null != (t = h.ZP.lastMessageId(e)) ? t : e;
}
function M(e) {
    let t = p.Z.getCount(e);
    return null === t || 0 === t;
}
function k(e) {
    return function (t, n) {
        return (0, b.yv)(t)
            ? -1
            : (0, b.yv)(n)
              ? 1
              : e === l.z.LATEST_ACTIVITY
                ? E.default.compare(j(n), j(t))
                : E.default.compare(n, t);
    };
}
function U(e, t) {
    return function (n) {
        var r;
        let i = null == (r = m.Z.getChannel(n)) ? void 0 : r.appliedTags;
        if (null == i || 0 === i.length) return !1;
        if (t === s.z.MATCH_SOME) return i.some((t) => e.has(t));
        for (let t of e.values()) if (!i.includes(t)) return !1;
        return !0;
    };
}
function G() {
    (N = []),
        (r = null),
        (S = null),
        (I = new Set()),
        (T = l.z.LATEST_ACTIVITY),
        (C = s.z.MATCH_SOME),
        (A = 0),
        (R = []),
        (w = o().chain(O)),
        (D = o().chain(O)),
        L.clear(),
        x.clear();
}
function Z() {
    var e;
    let t = g.Z.getChannelId();
    if (null == t || !(null == (e = m.Z.getChannel(t)) ? void 0 : e.isForumLikeChannel())) return G(), !1;
    B({ refreshThreadIds: !0 });
}
function F(e) {
    let t = m.Z.getChannel(e);
    return null == t
        ? []
        : Object.values(f.Z.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(k(T));
}
function B(e) {
    let t = m.Z.getChannel(S);
    if (null == t) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((R = Object.values(f.Z.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (A = 0),
        (P = !0)),
        0 !== x.size && ((R = R.filter((e) => !x.has(e))), x.clear()),
        0 !== L.size && ((R = Array.from(new Set([...R, ...L]))), L.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) &&
            ((D = o().chain(R).sort(k(l.z.LATEST_ACTIVITY))), (w = o().chain(R).sort(k(l.z.CREATION_DATE))));
    let n = (T === l.z.LATEST_ACTIVITY ? D : w).value(),
        i = (N = 0 === I.size ? n : n.filter(U(I, C))).find((e) => M(e));
    r = null == i ? null : i;
}
function V(e) {
    var t;
    let { guildId: n } = e;
    if (null == S || n !== (null == (t = m.Z.getChannel(S)) ? void 0 : t.guild_id)) return !1;
    B({ refreshThreadIds: !0 });
}
function H(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== S) return !1;
    let n = (0, b.yv)(t.id),
        r = L.has(t.id);
    if (n && !r) L.add(t.id), B({ sortThreadIds: !0 });
    else {
        if (n || !r) return !1;
        L.delete(t.id), B({ sortThreadIds: !0 });
    }
}
function Y(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== S || !n) return !1;
    t.ownerId !== _.default.getId() ? A++ : (v = t.id);
}
function W(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== S) return !1;
    x.add(t.id), B({ sortThreadIds: !0 });
}
function K(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== S) return !1;
    G();
}
function z(e) {
    let { channelId: t } = e;
    if (null == t || t !== S) return !1;
    B({ refreshThreadIds: !0 });
}
function q(e) {
    let { channelId: t } = e;
    if (null == t || t !== S) return !1;
    P = !1;
}
class Q extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.default, m.Z, h.ZP, g.Z, p.Z);
    }
    getNewThreadCount() {
        return A;
    }
    getCanAckThreads() {
        return P;
    }
    getThreadIds(e, t, n, r) {
        let i = e !== S,
            a = !(0, c.O)(n, I),
            o = t !== T,
            s = r !== C;
        return (
            (S = e),
            (I = n),
            (T = t),
            (C = r),
            i ? B({ refreshThreadIds: !0 }) : o ? B({ sortThreadIds: !0 }) : (a || s) && B(),
            N
        );
    }
    getCurrentThreadIds() {
        return N;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = v;
        return (v = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
y(Q, "displayName", "ForumActivePostStore");
let X = new Q(d.Z, {
    CONNECTION_OPEN: Z,
    OVERLAY_INITIALIZE: Z,
    GUILD_CREATE: Z,
    CHANNEL_SELECT: Z,
    CHANNEL_DELETE: K,
    THREAD_LIST_SYNC: V,
    THREAD_CREATE: Y,
    THREAD_UPDATE: H,
    THREAD_DELETE: W,
    RESORT_THREADS: z,
    CHANNEL_ACK: q,
});
