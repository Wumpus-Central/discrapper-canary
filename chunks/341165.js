let r;
n.d(t, { Z: () => j });
var i,
    o = n(569048),
    a = n.n(o),
    s = n(167006),
    l = n.n(s),
    c = n(989872),
    u = n.n(c),
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
    b = {},
    y = !1,
    v = !1,
    O = !1;
function I() {
    (m = {}), (g = {}), (E = {}), (b = {}), (r = null), (v = !1), (O = !1), (y = !1);
}
function S(e) {
    let { channel: t } = e;
    delete m[t.id], delete g[t.id], delete E[t.id];
}
function T(e) {
    let { channelId: t, invite: n } = e,
        r = _.Z.createFromServer(n);
    r.targetType === p.Iq.STREAM && null != r.targetUser ? (null == g[t] && (g[t] = {}), (g[t][String(r.targetUser.id)] = r)) : r.targetType === p.Iq.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == E[t] && (E[t] = {}), (E[t][r.targetApplication.id] = r)) : (m[t] = r);
}
function N(e) {
    let { channelId: t } = e;
    m[t] = null;
}
function A(e) {
    let { channelId: t } = e;
    m[t] = null;
}
function C(e) {
    var t;
    (b[e.invite.code] = _.Z.createFromServer(e.invite)), (r = null != (t = a()(l()(u()(Object.values(b), 'createdAt')))) ? t : null), (O = !1);
}
function R() {
    O = !1;
}
function P(e) {
    var t;
    null != e.invites &&
        e.invites.forEach((e) => {
            null != b[e.code] && delete b[e.code];
        }),
        (r = null != (t = a()(l()(u()(Object.values(b), 'createdAt')))) ? t : null),
        (v = !1);
}
function w() {
    v = !0;
}
function D() {
    O = !0;
}
function L() {
    y = !0;
}
function x(e) {
    var t;
    (b = {}),
        e.invites.forEach((e) => {
            b[e.code] = _.Z.createFromServer(e);
        }),
        (r = null != (t = a()(l()(u()(Object.values(b), 'createdAt')))) ? t : null),
        (y = !1);
}
function M(e) {
    delete m[e.channelId];
}
class k extends (i = d.ZP.Store) {
    getInvite(e) {
        var t, n;
        let { targetType: r, targetUserId: i, targetApplicationId: o } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r === p.Iq.STREAM && null != i ? (null == (t = g[e]) ? void 0 : t[i]) : r === p.Iq.EMBEDDED_APPLICATION && null != o ? (null == (n = E[e]) ? void 0 : n[o]) : m[e];
    }
    getFriendInvite() {
        return r;
    }
    getFriendInvitesFetching() {
        return y;
    }
    canRevokeFriendInvite() {
        return null != r && !v && !O;
    }
}
h(k, 'displayName', 'InstantInviteStore');
let j = new k(f.Z, {
    CONNECTION_OPEN: I,
    CHANNEL_DELETE: S,
    FRIEND_INVITE_CREATE_SUCCESS: C,
    FRIEND_INVITE_CREATE_FAILURE: R,
    FRIEND_INVITE_REVOKE_SUCCESS: P,
    INSTANT_INVITE_CREATE_SUCCESS: T,
    INSTANT_INVITE_CREATE_FAILURE: N,
    INSTANT_INVITE_REVOKE_SUCCESS: A,
    FRIEND_INVITE_REVOKE_REQUEST: w,
    FRIEND_INVITE_CREATE_REQUEST: D,
    FRIEND_INVITES_FETCH_REQUEST: L,
    FRIEND_INVITES_FETCH_RESPONSE: x,
    INSTANT_INVITE_CLEAR: M
});
