let r;
n.d(t, {
    U: () => G,
    Z: () => q
}),
    n(47120),
    n(230036);
var i,
    o = n(392711),
    a = n.n(o),
    s = n(683860),
    l = n(442837),
    c = n(570140),
    u = n(344185),
    d = n(144140),
    f = n(314897),
    _ = n(592125),
    p = n(306680),
    h = n(944486),
    m = n(823379),
    g = n(709054),
    E = n(882252);
function b(e, t, n) {
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
    v = null,
    O = null,
    I = new Set(),
    S = s.z.LATEST_ACTIVITY,
    T = 0,
    N = [],
    A = !1,
    C = [],
    R = a().chain(y),
    P = a().chain(y),
    w = new Set(),
    D = new Set();
function L(e) {
    var t;
    return null != (t = p.ZP.lastMessageId(e)) ? t : e;
}
function x(e) {
    let t = d.Z.getCount(e);
    return null === t || 0 === t;
}
function M(e) {
    return function (t, n) {
        return (0, E.yv)(t) ? -1 : (0, E.yv)(n) ? 1 : e === s.z.LATEST_ACTIVITY ? g.default.compare(L(n), L(t)) : g.default.compare(n, t);
    };
}
function k(e) {
    return function (t) {
        var n;
        let r = null == (n = _.Z.getChannel(t)) ? void 0 : n.appliedTags;
        return null != r && 0 !== r.length && r.some((t) => e.has(t));
    };
}
function j() {
    (N = []), (r = null), (O = null), (I = new Set()), (S = s.z.LATEST_ACTIVITY), (T = 0), (C = []), (R = a().chain(y)), (P = a().chain(y)), D.clear(), w.clear();
}
function U() {
    var e;
    let t = h.Z.getChannelId();
    if (null == t || !(null == (e = _.Z.getChannel(t)) ? void 0 : e.isForumLikeChannel())) return j(), !1;
    B({ refreshThreadIds: !0 });
}
function G(e) {
    let t = _.Z.getChannel(e);
    return null == t
        ? []
        : Object.values(u.Z.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(M(S));
}
function B(e) {
    let t = _.Z.getChannel(O);
    if (null == t) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((C = Object.values(u.Z.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (T = 0),
        (A = !0)),
        0 !== w.size && ((C = C.filter((e) => !w.has(e))), w.clear()),
        0 !== D.size && ((C = Array.from(new Set([...C, ...D]))), D.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && ((P = a().chain(C).sort(M(s.z.LATEST_ACTIVITY))), (R = a().chain(C).sort(M(s.z.CREATION_DATE))));
    let n = (S === s.z.LATEST_ACTIVITY ? P : R).value(),
        i = (N = 0 === I.size ? n : n.filter(k(I))).find((e) => x(e));
    r = null == i ? null : i;
}
function F(e) {
    var t;
    let { guildId: n } = e;
    if (null == O || n !== (null == (t = _.Z.getChannel(O)) ? void 0 : t.guild_id)) return !1;
    B({ refreshThreadIds: !0 });
}
function V(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== O) return !1;
    let n = (0, E.yv)(t.id),
        r = D.has(t.id);
    if (n && !r) D.add(t.id), B({ sortThreadIds: !0 });
    else {
        if (n || !r) return !1;
        D.delete(t.id), B({ sortThreadIds: !0 });
    }
}
function Z(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== O || !n) return !1;
    t.ownerId !== f.default.getId() ? T++ : (v = t.id);
}
function H(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== O) return !1;
    w.add(t.id), B({ sortThreadIds: !0 });
}
function W(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== O) return !1;
    j();
}
function Y(e) {
    let { channelId: t } = e;
    if (null == t || t !== O) return !1;
    B({ refreshThreadIds: !0 });
}
function K(e) {
    let { channelId: t } = e;
    if (null == t || t !== O) return !1;
    A = !1;
}
class z extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, u.Z, h.Z, p.ZP);
    }
    getNewThreadCount() {
        return T;
    }
    getCanAckThreads() {
        return A;
    }
    getThreadIds(e, t, n) {
        let r = e !== O,
            i = !(0, m.OL)(n, I),
            o = t !== S;
        return (O = e), (I = n), (S = t), r ? B({ refreshThreadIds: !0 }) : o ? B({ sortThreadIds: !0 }) : i && B(), N;
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
b(z, 'displayName', 'ForumActivePostStore');
let q = new z(c.Z, {
    CONNECTION_OPEN: U,
    OVERLAY_INITIALIZE: U,
    GUILD_CREATE: U,
    CHANNEL_SELECT: U,
    CHANNEL_DELETE: W,
    THREAD_LIST_SYNC: F,
    THREAD_CREATE: Z,
    THREAD_UPDATE: V,
    THREAD_DELETE: H,
    RESORT_THREADS: Y,
    CHANNEL_ACK: K
});
