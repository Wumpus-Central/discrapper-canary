let i;
r.d(n, {
    U: function () {
        return F;
    }
});
var a,
    s = r(47120);
var o = r(392711),
    l = r.n(o),
    u = r(683860),
    c = r(442837),
    d = r(570140),
    f = r(344185),
    _ = r(144140),
    h = r(314897),
    p = r(592125),
    m = r(306680),
    g = r(944486),
    E = r(823379),
    v = r(709054),
    I = r(882252);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = [],
    y = null,
    S = null,
    A = new Set(),
    N = u.z.LATEST_ACTIVITY,
    C = 0,
    R = [],
    O = !1,
    D = [],
    L = l().chain(b),
    x = l().chain(b),
    w = new Set(),
    P = new Set();
function M(e) {
    var n;
    return null !== (n = m.ZP.lastMessageId(e)) && void 0 !== n ? n : e;
}
function k(e) {
    let n = _.Z.getCount(e);
    return null === n || 0 === n;
}
function U(e) {
    return function (n, r) {
        if ((0, I.yv)(n)) return -1;
        if ((0, I.yv)(r)) return 1;
        if (e === u.z.LATEST_ACTIVITY) return v.default.compare(M(r), M(n));
        else return v.default.compare(r, n);
    };
}
function B(e) {
    return function (n) {
        var r;
        let i = null === (r = p.Z.getChannel(n)) || void 0 === r ? void 0 : r.appliedTags;
        return null != i && 0 !== i.length && i.some((n) => e.has(n));
    };
}
function G() {
    (R = []), (i = null), (S = null), (A = new Set()), (N = u.z.LATEST_ACTIVITY), (C = 0), (D = []), (L = l().chain(b)), (x = l().chain(b)), P.clear(), w.clear();
}
function Z() {
    var e;
    let n = g.Z.getChannelId();
    if (null == n || !(null === (e = p.Z.getChannel(n)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return G(), !1;
    V({ refreshThreadIds: !0 });
}
function F(e) {
    let n = p.Z.getChannel(e);
    return null == n
        ? []
        : Object.values(f.Z.getThreadsForParent(n.guild_id, n.id))
              .map((e) => {
                  let { id: n } = e;
                  return n;
              })
              .sort(U(N));
}
function V(e) {
    let n = p.Z.getChannel(S);
    if (null == n) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((D = Object.values(f.Z.getThreadsForParent(n.guild_id, n.id)).map((e) => {
            let { id: n } = e;
            return n;
        })),
        (C = 0),
        (O = !0)),
        0 !== w.size && ((D = D.filter((e) => !w.has(e))), w.clear()),
        0 !== P.size && ((D = Array.from(new Set([...D, ...P]))), P.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && ((x = l().chain(D).sort(U(u.z.LATEST_ACTIVITY))), (L = l().chain(D).sort(U(u.z.CREATION_DATE))));
    let r = (N === u.z.LATEST_ACTIVITY ? x : L).value(),
        a = (R = 0 === A.size ? r : r.filter(B(A))).find((e) => k(e));
    i = null == a ? null : a;
}
function j(e) {
    var n;
    let { guildId: r } = e;
    if (null == S || r !== (null === (n = p.Z.getChannel(S)) || void 0 === n ? void 0 : n.guild_id)) return !1;
    V({ refreshThreadIds: !0 });
}
function H(e) {
    let { channel: n } = e;
    if (null == n.parent_id || n.parent_id !== S) return !1;
    let r = (0, I.yv)(n.id),
        i = P.has(n.id);
    if (r && !i) P.add(n.id), V({ sortThreadIds: !0 });
    else {
        if (r || !i) return !1;
        P.delete(n.id), V({ sortThreadIds: !0 });
    }
}
function Y(e) {
    let { channel: n, isNewlyCreated: r } = e;
    if (null == n.parent_id || n.parent_id !== S || !r) return !1;
    n.ownerId !== h.default.getId() ? C++ : (y = n.id);
}
function W(e) {
    let { channel: n } = e;
    if (null == n.parent_id || n.parent_id !== S) return !1;
    w.add(n.id), V({ sortThreadIds: !0 });
}
function K(e) {
    let { channel: n } = e;
    if (null == n.parent_id || n.parent_id !== S) return !1;
    G();
}
function z(e) {
    let { channelId: n } = e;
    if (null == n || n !== S) return !1;
    V({ refreshThreadIds: !0 });
}
function q(e) {
    let { channelId: n } = e;
    if (null == n || n !== S) return !1;
    O = !1;
}
class Q extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z, g.Z, m.ZP);
    }
    getNewThreadCount() {
        return C;
    }
    getCanAckThreads() {
        return O;
    }
    getThreadIds(e, n, r) {
        let i = e !== S,
            a = !(0, E.OL)(r, A),
            s = n !== N;
        return (S = e), (A = r), (N = n), i ? V({ refreshThreadIds: !0 }) : s ? V({ sortThreadIds: !0 }) : a && V(), R;
    }
    getCurrentThreadIds() {
        return R;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = y;
        return (y = null), e;
    }
    getFirstNoReplyThreadId() {
        return i;
    }
}
T(Q, 'displayName', 'ForumActivePostStore'),
    (n.Z = new Q(d.Z, {
        CONNECTION_OPEN: Z,
        OVERLAY_INITIALIZE: Z,
        GUILD_CREATE: Z,
        CHANNEL_SELECT: Z,
        CHANNEL_DELETE: K,
        THREAD_LIST_SYNC: j,
        THREAD_CREATE: Y,
        THREAD_UPDATE: H,
        THREAD_DELETE: W,
        RESORT_THREADS: z,
        CHANNEL_ACK: q
    }));
