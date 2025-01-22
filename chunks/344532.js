var i,
    a = r(724458);
var o = r(442837),
    s = r(570140);
function l(e, n, r) {
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
let u = {},
    c = null,
    d = null;
function f(e, n) {
    null == n ? e in u && delete u[e] : null != e && (u[e] = n);
}
function p(e) {
    let { required_actions: n, user_id: r } = e;
    f((c = r), n);
}
function h(e) {
    let { user: n } = e;
    d = n.id;
}
function _(e) {
    let { userId: n } = e;
    f(n, null);
}
function m(e) {
    let { isSwitchingAccount: n } = e;
    !n && null != d && f(d, null);
}
function g(e) {
    let { userId: n } = e;
    f(n, null);
}
class E extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (u = e);
    }
    requiredActions(e) {
        var n;
        return null !== (n = u[e]) && void 0 !== n ? n : null;
    }
    requiredActionsIncludes(e, n) {
        let r = this.requiredActions(e);
        return null != r && n.reduce((e, n) => e || r.includes(n), !1);
    }
    wasLoginAttemptedInSession(e) {
        return c === e;
    }
    getState() {
        return u;
    }
}
l(E, 'displayName', 'LoginRequiredActionStore'),
    l(E, 'persistKey', 'LoginRequiredActionStore'),
    (n.Z = new E(s.Z, {
        LOGIN_ATTEMPTED: p,
        CONNECTION_OPEN: h,
        CURRENT_USER_UPDATE: h,
        LOGOUT: m,
        PASSWORD_UPDATED: _,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: g
    }));
