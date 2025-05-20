let r;
n.d(t, {
    U: () => F,
    Z: () => X
}),
    n(388685),
    n(642613);
var i,
    o = n(392711),
    a = n.n(o),
    s = n(697988),
    l = n(683860),
    c = n(442837),
    u = n(570140),
    d = n(344185),
    f = n(144140),
    _ = n(314897),
    p = n(592125),
    h = n(306680),
    m = n(944486),
    g = n(823379),
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
    S = new Set(),
    T = l.z.LATEST_ACTIVITY,
    A = s.z.MATCH_SOME,
    N = 0,
    C = [],
    P = !1,
    R = [],
    w = a().chain(O),
    D = a().chain(O),
    L = new Set(),
    x = new Set();
function k(e) {
    var t;
    return null != (t = h.ZP.lastMessageId(e)) ? t : e;
}
function M(e) {
    let t = f.Z.getCount(e);
    return null === t || 0 === t;
}
function j(e) {
    return function (t, n) {
        return (0, b.yv)(t) ? -1 : (0, b.yv)(n) ? 1 : e === l.z.LATEST_ACTIVITY ? E.default.compare(k(n), k(t)) : E.default.compare(n, t);
    };
}
function U(e, t) {
    return function (n) {
        var r;
        let i = null == (r = p.Z.getChannel(n)) ? void 0 : r.appliedTags;
        if (null == i || 0 === i.length) return !1;
        if (t === s.z.MATCH_SOME) return i.some((t) => e.has(t));
        for (let t of e.values()) if (!i.includes(t)) return !1;
        return !0;
    };
}
function G() {
    (C = []), (r = null), (I = null), (S = new Set()), (T = l.z.LATEST_ACTIVITY), (A = s.z.MATCH_SOME), (N = 0), (R = []), (w = a().chain(O)), (D = a().chain(O)), x.clear(), L.clear();
}
function B() {
    var e;
    let t = m.Z.getChannelId();
    if (null == t || !(null == (e = p.Z.getChannel(t)) ? void 0 : e.isForumLikeChannel())) return G(), !1;
    V({ refreshThreadIds: !0 });
}
function F(e) {
    let t = p.Z.getChannel(e);
    return null == t
        ? []
        : Object.values(d.Z.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(j(T));
}
function V(e) {
    let t = p.Z.getChannel(I);
    if (null == t) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((R = Object.values(d.Z.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (N = 0),
        (P = !0)),
        0 !== L.size && ((R = R.filter((e) => !L.has(e))), L.clear()),
        0 !== x.size && ((R = Array.from(new Set([...R, ...x]))), x.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && ((D = a().chain(R).sort(j(l.z.LATEST_ACTIVITY))), (w = a().chain(R).sort(j(l.z.CREATION_DATE))));
    let n = (T === l.z.LATEST_ACTIVITY ? D : w).value(),
        i = (C = 0 === S.size ? n : n.filter(U(S, A))).find((e) => M(e));
    r = null == i ? null : i;
}
function Z(e) {
    var t;
    let { guildId: n } = e;
    if (null == I || n !== (null == (t = p.Z.getChannel(I)) ? void 0 : t.guild_id)) return !1;
    V({ refreshThreadIds: !0 });
}
function H(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== I) return !1;
    let n = (0, b.yv)(t.id),
        r = x.has(t.id);
    if (n && !r) x.add(t.id), V({ sortThreadIds: !0 });
    else {
        if (n || !r) return !1;
        x.delete(t.id), V({ sortThreadIds: !0 });
    }
}
function Y(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== I || !n) return !1;
    t.ownerId !== _.default.getId() ? N++ : (v = t.id);
}
function W(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== I) return !1;
    L.add(t.id), V({ sortThreadIds: !0 });
}
function K(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== I) return !1;
    G();
}
function z(e) {
    let { channelId: t } = e;
    if (null == t || t !== I) return !1;
    V({ refreshThreadIds: !0 });
}
function q(e) {
    let { channelId: t } = e;
    if (null == t || t !== I) return !1;
    P = !1;
}
class Q extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, d.Z, m.Z, h.ZP);
    }
    getNewThreadCount() {
        return N;
    }
    getCanAckThreads() {
        return P;
    }
    getThreadIds(e, t, n, r) {
        let i = e !== I,
            o = !(0, g.OL)(n, S),
            a = t !== T,
            s = r !== A;
        return (I = e), (S = n), (T = t), (A = r), i ? V({ refreshThreadIds: !0 }) : a ? V({ sortThreadIds: !0 }) : (o || s) && V(), C;
    }
    getCurrentThreadIds() {
        return C;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = v;
        return (v = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
y(Q, 'displayName', 'ForumActivePostStore');
let X = new Q(u.Z, {
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
