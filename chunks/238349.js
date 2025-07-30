let r;
(n.d(t, {
    U: () => V,
    Z: () => Q
}),
    n(388685),
    n(642613));
var i,
    a = n(392711),
    o = n.n(a),
    s = n(697988),
    l = n(683860),
    c = n(843991),
    u = n(442837),
    d = n(570140),
    f = n(344185),
    _ = n(144140),
    p = n(314897),
    h = n(592125),
    m = n(306680),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = [],
    v = null,
    I = null,
    T = new Set(),
    S = l.z.LATEST_ACTIVITY,
    A = s.z.MATCH_SOME,
    N = 0,
    C = [],
    R = !1,
    P = [],
    w = o().chain(O),
    D = o().chain(O),
    L = new Set(),
    x = new Set();
function M(e) {
    var t;
    return null != (t = m.ZP.lastMessageId(e)) ? t : e;
}
function k(e) {
    let t = _.Z.getCount(e);
    return null === t || 0 === t;
}
function j(e) {
    return function (t, n) {
        return (0, b.yv)(t) ? -1 : (0, b.yv)(n) ? 1 : e === l.z.LATEST_ACTIVITY ? E.default.compare(M(n), M(t)) : E.default.compare(n, t);
    };
}
function U(e, t) {
    return function (n) {
        var r;
        let i = null == (r = h.Z.getChannel(n)) ? void 0 : r.appliedTags;
        if (null == i || 0 === i.length) return !1;
        if (t === s.z.MATCH_SOME) return i.some((t) => e.has(t));
        for (let t of e.values()) if (!i.includes(t)) return !1;
        return !0;
    };
}
function G() {
    ((C = []), (r = null), (I = null), (T = new Set()), (S = l.z.LATEST_ACTIVITY), (A = s.z.MATCH_SOME), (N = 0), (P = []), (w = o().chain(O)), (D = o().chain(O)), x.clear(), L.clear());
}
function B() {
    var e;
    let t = g.Z.getChannelId();
    if (null == t || !(null == (e = h.Z.getChannel(t)) ? void 0 : e.isForumLikeChannel())) return (G(), !1);
    F({ refreshThreadIds: !0 });
}
function V(e) {
    let t = h.Z.getChannel(e);
    return null == t
        ? []
        : Object.values(f.Z.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(j(S));
}
function F(e) {
    let t = h.Z.getChannel(I);
    if (null == t) return;
    ((null == e ? void 0 : e.refreshThreadIds) &&
        ((P = Object.values(f.Z.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (N = 0),
        (R = !0)),
        0 !== L.size && ((P = P.filter((e) => !L.has(e))), L.clear()),
        0 !== x.size && ((P = Array.from(new Set([...P, ...x]))), x.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && ((D = o().chain(P).sort(j(l.z.LATEST_ACTIVITY))), (w = o().chain(P).sort(j(l.z.CREATION_DATE)))));
    let n = (S === l.z.LATEST_ACTIVITY ? D : w).value(),
        i = (C = 0 === T.size ? n : n.filter(U(T, A))).find((e) => k(e));
    r = null == i ? null : i;
}
function Z(e) {
    var t;
    let { guildId: n } = e;
    if (null == I || n !== (null == (t = h.Z.getChannel(I)) ? void 0 : t.guild_id)) return !1;
    F({ refreshThreadIds: !0 });
}
function H(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== I) return !1;
    let n = (0, b.yv)(t.id),
        r = x.has(t.id);
    if (n && !r) (x.add(t.id), F({ sortThreadIds: !0 }));
    else {
        if (n || !r) return !1;
        (x.delete(t.id), F({ sortThreadIds: !0 }));
    }
}
function Y(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== I || !n) return !1;
    t.ownerId !== p.default.getId() ? N++ : (v = t.id);
}
function W(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== I) return !1;
    (L.add(t.id), F({ sortThreadIds: !0 }));
}
function K(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== I) return !1;
    G();
}
function z(e) {
    let { channelId: t } = e;
    if (null == t || t !== I) return !1;
    F({ refreshThreadIds: !0 });
}
function q(e) {
    let { channelId: t } = e;
    if (null == t || t !== I) return !1;
    R = !1;
}
class X extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, f.Z, g.Z, m.ZP);
    }
    getNewThreadCount() {
        return N;
    }
    getCanAckThreads() {
        return R;
    }
    getThreadIds(e, t, n, r) {
        let i = e !== I,
            a = !(0, c.O)(n, T),
            o = t !== S,
            s = r !== A;
        return ((I = e), (T = n), (S = t), (A = r), i ? F({ refreshThreadIds: !0 }) : o ? F({ sortThreadIds: !0 }) : (a || s) && F(), C);
    }
    getCurrentThreadIds() {
        return C;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = v;
        return ((v = null), e);
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
y(X, 'displayName', 'ForumActivePostStore');
let Q = new X(d.Z, {
    CONNECTION_OPEN: B,
    OVERLAY_INITIALIZE: B,
    GUILD_CREATE: B,
    CHANNEL_SELECT: B,
    CHANNEL_DELETE: K,
    THREAD_LIST_SYNC: Z,
    THREAD_CREATE: Y,
    THREAD_UPDATE: H,
    THREAD_DELETE: W,
    RESORT_THREADS: z,
    CHANNEL_ACK: q
});
