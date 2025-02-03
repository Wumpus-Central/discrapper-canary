let i;
n.d(t, {
    U: () => B,
    Z: () => q
}),
    n(47120);
var r,
    a = n(392711),
    s = n.n(a),
    o = n(683860),
    l = n(442837),
    u = n(570140),
    c = n(344185),
    d = n(144140),
    f = n(314897),
    _ = n(592125),
    p = n(306680),
    h = n(944486),
    m = n(823379),
    g = n(709054),
    E = n(882252);
function v(e, t, n) {
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
let y = [],
    I = null,
    b = null,
    T = new Set(),
    S = o.z.LATEST_ACTIVITY,
    A = 0,
    N = [],
    C = !1,
    R = [],
    O = s().chain(y),
    D = s().chain(y),
    x = new Set(),
    L = new Set();
function P(e) {
    var t;
    return null !== (t = p.ZP.lastMessageId(e)) && void 0 !== t ? t : e;
}
function w(e) {
    let t = d.Z.getCount(e);
    return null === t || 0 === t;
}
function M(e) {
    return function (t, n) {
        return (0, E.yv)(t) ? -1 : (0, E.yv)(n) ? 1 : e === o.z.LATEST_ACTIVITY ? g.default.compare(P(n), P(t)) : g.default.compare(n, t);
    };
}
function k(e) {
    return function (t) {
        var n;
        let i = null === (n = _.Z.getChannel(t)) || void 0 === n ? void 0 : n.appliedTags;
        return null != i && 0 !== i.length && i.some((t) => e.has(t));
    };
}
function U() {
    (N = []), (i = null), (b = null), (T = new Set()), (S = o.z.LATEST_ACTIVITY), (A = 0), (R = []), (O = s().chain(y)), (D = s().chain(y)), L.clear(), x.clear();
}
function G() {
    var e;
    let t = h.Z.getChannelId();
    if (null == t || !(null === (e = _.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
    Z({ refreshThreadIds: !0 });
}
function B(e) {
    let t = _.Z.getChannel(e);
    return null == t
        ? []
        : Object.values(c.Z.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(M(S));
}
function Z(e) {
    let t = _.Z.getChannel(b);
    if (null == t) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((R = Object.values(c.Z.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (A = 0),
        (C = !0)),
        0 !== x.size && ((R = R.filter((e) => !x.has(e))), x.clear()),
        0 !== L.size && ((R = Array.from(new Set([...R, ...L]))), L.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && ((D = s().chain(R).sort(M(o.z.LATEST_ACTIVITY))), (O = s().chain(R).sort(M(o.z.CREATION_DATE))));
    let n = (S === o.z.LATEST_ACTIVITY ? D : O).value(),
        r = (N = 0 === T.size ? n : n.filter(k(T))).find((e) => w(e));
    i = null == r ? null : r;
}
function F(e) {
    var t;
    let { guildId: n } = e;
    if (null == b || n !== (null === (t = _.Z.getChannel(b)) || void 0 === t ? void 0 : t.guild_id)) return !1;
    Z({ refreshThreadIds: !0 });
}
function V(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== b) return !1;
    let n = (0, E.yv)(t.id),
        i = L.has(t.id);
    if (n && !i) L.add(t.id), Z({ sortThreadIds: !0 });
    else {
        if (n || !i) return !1;
        L.delete(t.id), Z({ sortThreadIds: !0 });
    }
}
function j(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== b || !n) return !1;
    t.ownerId !== f.default.getId() ? A++ : (I = t.id);
}
function H(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== b) return !1;
    x.add(t.id), Z({ sortThreadIds: !0 });
}
function Y(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== b) return !1;
    U();
}
function W(e) {
    let { channelId: t } = e;
    if (null == t || t !== b) return !1;
    Z({ refreshThreadIds: !0 });
}
function K(e) {
    let { channelId: t } = e;
    if (null == t || t !== b) return !1;
    C = !1;
}
class z extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, c.Z, h.Z, p.ZP);
    }
    getNewThreadCount() {
        return A;
    }
    getCanAckThreads() {
        return C;
    }
    getThreadIds(e, t, n) {
        let i = e !== b,
            r = !(0, m.OL)(n, T),
            a = t !== S;
        return (b = e), (T = n), (S = t), i ? Z({ refreshThreadIds: !0 }) : a ? Z({ sortThreadIds: !0 }) : r && Z(), N;
    }
    getCurrentThreadIds() {
        return N;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = I;
        return (I = null), e;
    }
    getFirstNoReplyThreadId() {
        return i;
    }
}
v(z, 'displayName', 'ForumActivePostStore');
let q = new z(u.Z, {
    CONNECTION_OPEN: G,
    OVERLAY_INITIALIZE: G,
    GUILD_CREATE: G,
    CHANNEL_SELECT: G,
    CHANNEL_DELETE: Y,
    THREAD_LIST_SYNC: F,
    THREAD_CREATE: j,
    THREAD_UPDATE: V,
    THREAD_DELETE: H,
    RESORT_THREADS: W,
    CHANNEL_ACK: K
});
