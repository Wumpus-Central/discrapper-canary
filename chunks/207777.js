"use strict";
let r;
n.d(t, { A: () => q, S: () => V });
var i = n(735438),
    a = n.n(i),
    s = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(311907),
    c = n(73153),
    d = n(970278),
    _ = n(456874),
    f = n(961350),
    p = n(734057),
    h = n(222823),
    m = n(309010),
    g = n(661191),
    E = n(767581);
let A = [],
    I = null,
    T = null,
    y = new Set(),
    S = o.T.LATEST_ACTIVITY,
    v = s.n.MATCH_SOME,
    C = 0,
    b = [],
    N = !1,
    R = [],
    O = a().chain(A),
    D = a().chain(A),
    L = new Set(),
    w = new Set();
function x(e) {
    return h.Ay.lastMessageId(e) ?? e;
}
function P(e) {
    let t = _.A.getCount(e);
    return null === t || 0 === t;
}
function M(e) {
    return function (t, n) {
        return (0, E.yr)(t)
            ? -1
            : (0, E.yr)(n)
              ? 1
              : e === o.T.LATEST_ACTIVITY
                ? g.default.compare(x(n), x(t))
                : g.default.compare(n, t);
    };
}
function k(e, t) {
    return function (n) {
        let r = p.A.getChannel(n)?.appliedTags;
        if (null == r || 0 === r.length) return !1;
        if (t === s.n.MATCH_SOME) return r.some((t) => e.has(t));
        for (let t of e.values()) if (!r.includes(t)) return !1;
        return !0;
    };
}
function U() {
    (b = []),
        (r = null),
        (T = null),
        (y = new Set()),
        (S = o.T.LATEST_ACTIVITY),
        (v = s.n.MATCH_SOME),
        (C = 0),
        (R = []),
        (O = a().chain(A)),
        (D = a().chain(A)),
        w.clear(),
        L.clear();
}
function G() {
    let e = m.A.getChannelId();
    if (null == e || !p.A.getChannel(e)?.isForumLikeChannel()) return U(), !1;
    F({ refreshThreadIds: !0 });
}
function V(e) {
    let t = p.A.getChannel(e);
    return null == t
        ? []
        : Object.values(d.A.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(M(S));
}
function F(e) {
    let t = p.A.getChannel(T);
    if (null == t) return;
    e?.refreshThreadIds &&
        ((R = Object.values(d.A.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (C = 0),
        (N = !0)),
        0 !== L.size && ((R = R.filter((e) => !L.has(e))), L.clear()),
        0 !== w.size && ((R = Array.from(new Set([...R, ...w]))), w.clear()),
        (e?.refreshThreadIds || e?.sortThreadIds) &&
            ((D = a().chain(R).sort(M(o.T.LATEST_ACTIVITY))), (O = a().chain(R).sort(M(o.T.CREATION_DATE))));
    let n = (S === o.T.LATEST_ACTIVITY ? D : O).value(),
        i = (b = 0 === y.size ? n : n.filter(k(y, v))).find((e) => P(e));
    r = null == i ? null : i;
}
function B(e) {
    let { guildId: t } = e;
    if (null == T || t !== p.A.getChannel(T)?.guild_id) return !1;
    F({ refreshThreadIds: !0 });
}
function j(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== T) return !1;
    let n = (0, E.yr)(t.id),
        r = w.has(t.id);
    if (n && !r) w.add(t.id), F({ sortThreadIds: !0 });
    else {
        if (n || !r) return !1;
        w.delete(t.id), F({ sortThreadIds: !0 });
    }
}
function H(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== T || !n) return !1;
    t.ownerId !== f.default.getId() ? C++ : (I = t.id);
}
function Y(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== T) return !1;
    L.add(t.id), F({ sortThreadIds: !0 });
}
function W(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== T) return !1;
    U();
}
function K(e) {
    let { channelId: t } = e;
    if (null == t || t !== T) return !1;
    F({ refreshThreadIds: !0 });
}
function z(e) {
    let { channelId: t } = e;
    if (null == t || t !== T) return !1;
    N = !1;
}
class $ extends u.Ay.Store {
    static displayName = "ForumActivePostStore";
    initialize() {
        this.waitFor(d.A, f.default, p.A, h.Ay, m.A, _.A);
    }
    getNewThreadCount() {
        return C;
    }
    getCanAckThreads() {
        return N;
    }
    getThreadIds(e, t, n, r) {
        let i = e !== T,
            a = !(0, l._)(n, y),
            s = t !== S,
            o = r !== v;
        return (
            (T = e),
            (y = n),
            (S = t),
            (v = r),
            i ? F({ refreshThreadIds: !0 }) : s ? F({ sortThreadIds: !0 }) : (a || o) && F(),
            b
        );
    }
    getCurrentThreadIds() {
        return b;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = I;
        return (I = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
let q = new $(c.h, {
    CONNECTION_OPEN: G,
    OVERLAY_INITIALIZE: G,
    GUILD_CREATE: G,
    CHANNEL_SELECT: G,
    CHANNEL_DELETE: W,
    THREAD_LIST_SYNC: B,
    THREAD_CREATE: H,
    THREAD_UPDATE: j,
    THREAD_DELETE: Y,
    RESORT_THREADS: K,
    CHANNEL_ACK: z,
});
