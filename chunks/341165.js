let i;
var a,
    o = r(569048),
    s = r.n(o),
    l = r(167006),
    u = r.n(l),
    c = r(989872),
    d = r.n(c),
    f = r(442837),
    p = r(570140),
    h = r(758449),
    _ = r(245335);
function m(e, n, r) {
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
let g = {},
    E = {},
    v = {},
    y = {},
    b = !1,
    I = !1,
    T = !1;
function S() {
    (g = {}), (E = {}), (v = {}), (y = {}), (i = null), (I = !1), (T = !1), (b = !1);
}
function A(e) {
    let { channel: n } = e;
    delete g[n.id], delete E[n.id], delete v[n.id];
}
function C(e) {
    let { channelId: n, invite: r } = e,
        i = h.Z.createFromServer(r);
    i.targetType === _.Iq.STREAM && null != i.targetUser ? (null == E[n] && (E[n] = {}), (E[n][String(i.targetUser.id)] = i)) : i.targetType === _.Iq.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == v[n] && (v[n] = {}), (v[n][i.targetApplication.id] = i)) : (g[n] = i);
}
function N(e) {
    let { channelId: n } = e;
    g[n] = null;
}
function R(e) {
    let { channelId: n } = e;
    g[n] = null;
}
function O(e) {
    var n;
    (y[e.invite.code] = h.Z.createFromServer(e.invite)), (i = null !== (n = s()(u()(d()(Object.values(y), 'createdAt')))) && void 0 !== n ? n : null), (T = !1);
}
function D() {
    T = !1;
}
function x(e) {
    var n;
    null != e.invites &&
        e.invites.forEach((e) => {
            null != y[e.code] && delete y[e.code];
        }),
        (i = null !== (n = s()(u()(d()(Object.values(y), 'createdAt')))) && void 0 !== n ? n : null),
        (I = !1);
}
function L() {
    I = !0;
}
function w() {
    T = !0;
}
function P() {
    b = !0;
}
function M(e) {
    var n;
    (y = {}),
        e.invites.forEach((e) => {
            y[e.code] = h.Z.createFromServer(e);
        }),
        (i = null !== (n = s()(u()(d()(Object.values(y), 'createdAt')))) && void 0 !== n ? n : null),
        (b = !1);
}
function k(e) {
    delete g[e.channelId];
}
class U extends (a = f.ZP.Store) {
    getInvite(e) {
        var n, r;
        let { targetType: i, targetUserId: a, targetApplicationId: o } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i === _.Iq.STREAM && null != a ? (null === (n = E[e]) || void 0 === n ? void 0 : n[a]) : i === _.Iq.EMBEDDED_APPLICATION && null != o ? (null === (r = v[e]) || void 0 === r ? void 0 : r[o]) : g[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return b;
    }
    canRevokeFriendInvite() {
        return null != i && !I && !T;
    }
}
m(U, 'displayName', 'InstantInviteStore'),
    (n.Z = new U(p.Z, {
        CONNECTION_OPEN: S,
        CHANNEL_DELETE: A,
        FRIEND_INVITE_CREATE_SUCCESS: O,
        FRIEND_INVITE_CREATE_FAILURE: D,
        FRIEND_INVITE_REVOKE_SUCCESS: x,
        INSTANT_INVITE_CREATE_SUCCESS: C,
        INSTANT_INVITE_CREATE_FAILURE: N,
        INSTANT_INVITE_REVOKE_SUCCESS: R,
        FRIEND_INVITE_REVOKE_REQUEST: L,
        FRIEND_INVITE_CREATE_REQUEST: w,
        FRIEND_INVITES_FETCH_REQUEST: P,
        FRIEND_INVITES_FETCH_RESPONSE: M,
        INSTANT_INVITE_CLEAR: k
    }));
