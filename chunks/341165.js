let i;
n.d(t, { Z: () => U });
var r,
    a = n(569048),
    s = n.n(a),
    o = n(167006),
    l = n.n(o),
    u = n(989872),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(758449),
    p = n(245335);
function h(e, t, n) {
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
let m = {},
    g = {},
    E = {},
    v = {},
    y = !1,
    I = !1,
    T = !1;
function b() {
    (m = {}), (g = {}), (E = {}), (v = {}), (i = null), (I = !1), (T = !1), (y = !1);
}
function S(e) {
    let { channel: t } = e;
    delete m[t.id], delete g[t.id], delete E[t.id];
}
function A(e) {
    let { channelId: t, invite: n } = e,
        i = _.Z.createFromServer(n);
    i.targetType === p.Iq.STREAM && null != i.targetUser ? (null == g[t] && (g[t] = {}), (g[t][String(i.targetUser.id)] = i)) : i.targetType === p.Iq.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == E[t] && (E[t] = {}), (E[t][i.targetApplication.id] = i)) : (m[t] = i);
}
function N(e) {
    let { channelId: t } = e;
    m[t] = null;
}
function C(e) {
    let { channelId: t } = e;
    m[t] = null;
}
function R(e) {
    var t;
    (v[e.invite.code] = _.Z.createFromServer(e.invite)), (i = null !== (t = s()(l()(c()(Object.values(v), 'createdAt')))) && void 0 !== t ? t : null), (T = !1);
}
function O() {
    T = !1;
}
function D(e) {
    var t;
    null != e.invites &&
        e.invites.forEach((e) => {
            null != v[e.code] && delete v[e.code];
        }),
        (i = null !== (t = s()(l()(c()(Object.values(v), 'createdAt')))) && void 0 !== t ? t : null),
        (I = !1);
}
function L() {
    I = !0;
}
function x() {
    T = !0;
}
function w() {
    y = !0;
}
function P(e) {
    var t;
    (v = {}),
        e.invites.forEach((e) => {
            v[e.code] = _.Z.createFromServer(e);
        }),
        (i = null !== (t = s()(l()(c()(Object.values(v), 'createdAt')))) && void 0 !== t ? t : null),
        (y = !1);
}
function M(e) {
    delete m[e.channelId];
}
class k extends (r = d.ZP.Store) {
    getInvite(e) {
        var t, n;
        let { targetType: i, targetUserId: r, targetApplicationId: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i === p.Iq.STREAM && null != r ? (null === (t = g[e]) || void 0 === t ? void 0 : t[r]) : i === p.Iq.EMBEDDED_APPLICATION && null != a ? (null === (n = E[e]) || void 0 === n ? void 0 : n[a]) : m[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return y;
    }
    canRevokeFriendInvite() {
        return null != i && !I && !T;
    }
}
h(k, 'displayName', 'InstantInviteStore');
let U = new k(f.Z, {
    CONNECTION_OPEN: b,
    CHANNEL_DELETE: S,
    FRIEND_INVITE_CREATE_SUCCESS: R,
    FRIEND_INVITE_CREATE_FAILURE: O,
    FRIEND_INVITE_REVOKE_SUCCESS: D,
    INSTANT_INVITE_CREATE_SUCCESS: A,
    INSTANT_INVITE_CREATE_FAILURE: N,
    INSTANT_INVITE_REVOKE_SUCCESS: C,
    FRIEND_INVITE_REVOKE_REQUEST: L,
    FRIEND_INVITE_CREATE_REQUEST: x,
    FRIEND_INVITES_FETCH_REQUEST: w,
    FRIEND_INVITES_FETCH_RESPONSE: P,
    INSTANT_INVITE_CLEAR: M
});
