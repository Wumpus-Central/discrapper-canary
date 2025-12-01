let r;
n.d(t, { Z: () => k });
var i,
    a = n(569048),
    o = n.n(a),
    s = n(167006),
    l = n.n(s),
    c = n(989872),
    u = n.n(c),
    d = n(442837),
    f = n(570140),
    p = n(758449),
    _ = n(245335);
function m(e, t, n) {
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
let h = {},
    g = {},
    E = {},
    b = {},
    y = !1,
    O = !1,
    v = !1;
function S() {
    (h = {}), (g = {}), (E = {}), (b = {}), (r = null), (O = !1), (v = !1), (y = !1);
}
function I(e) {
    let { channel: t } = e;
    delete h[t.id], delete g[t.id], delete E[t.id];
}
function T(e) {
    let { channelId: t, invite: n } = e,
        r = p.Z.createFromServer(n);
    r.targetType === _.Iq.STREAM && null != r.targetUser
        ? (null == g[t] && (g[t] = {}), (g[t][String(r.targetUser.id)] = r))
        : r.targetType === _.Iq.EMBEDDED_APPLICATION && null != r.targetApplication
          ? (null == E[t] && (E[t] = {}), (E[t][r.targetApplication.id] = r))
          : (h[t] = r);
}
function A(e) {
    let { channelId: t } = e;
    h[t] = null;
}
function C(e) {
    let { channelId: t } = e;
    h[t] = null;
}
function N(e) {
    var t;
    (b[e.invite.code] = p.Z.createFromServer(e.invite)),
        (r = null != (t = o()(l()(u()(Object.values(b), "createdAt")))) ? t : null),
        (v = !1);
}
function P() {
    v = !1;
}
function R(e) {
    var t;
    null != e.invites &&
        e.invites.forEach((e) => {
            null != b[e.code] && delete b[e.code];
        }),
        (r = null != (t = o()(l()(u()(Object.values(b), "createdAt")))) ? t : null),
        (O = !1);
}
function w() {
    O = !0;
}
function D() {
    v = !0;
}
function x() {
    y = !0;
}
function L(e) {
    var t;
    (b = {}),
        e.invites.forEach((e) => {
            b[e.code] = p.Z.createFromServer(e);
        }),
        (r = null != (t = o()(l()(u()(Object.values(b), "createdAt")))) ? t : null),
        (y = !1);
}
function j(e) {
    delete h[e.channelId];
}
class M extends (i = d.ZP.Store) {
    getInvite(e) {
        var t, n;
        let {
            targetType: r,
            targetUserId: i,
            targetApplicationId: a,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r === _.Iq.STREAM && null != i
            ? null == (t = g[e])
                ? void 0
                : t[i]
            : r === _.Iq.EMBEDDED_APPLICATION && null != a
              ? null == (n = E[e])
                  ? void 0
                  : n[a]
              : h[e];
    }
    getFriendInvite() {
        return r;
    }
    getFriendInvitesFetching() {
        return y;
    }
    canRevokeFriendInvite() {
        return null != r && !O && !v;
    }
}
m(M, "displayName", "InstantInviteStore");
let k = new M(f.Z, {
    CONNECTION_OPEN: S,
    CHANNEL_DELETE: I,
    FRIEND_INVITE_CREATE_SUCCESS: N,
    FRIEND_INVITE_CREATE_FAILURE: P,
    FRIEND_INVITE_REVOKE_SUCCESS: R,
    INSTANT_INVITE_CREATE_SUCCESS: T,
    INSTANT_INVITE_CREATE_FAILURE: A,
    INSTANT_INVITE_REVOKE_SUCCESS: C,
    FRIEND_INVITE_REVOKE_REQUEST: w,
    FRIEND_INVITE_CREATE_REQUEST: D,
    FRIEND_INVITES_FETCH_REQUEST: x,
    FRIEND_INVITES_FETCH_RESPONSE: L,
    INSTANT_INVITE_CLEAR: j,
});
