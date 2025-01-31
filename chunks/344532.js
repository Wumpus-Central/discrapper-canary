n.d(t, { Z: () => g }), n(724458);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = {},
    l = null,
    u = null;
function c(e, t) {
    null == t ? e in o && delete o[e] : null != e && (o[e] = t);
}
function d(e) {
    let { required_actions: t, user_id: n } = e;
    c((l = n), t);
}
function f(e) {
    let { user: t } = e;
    u = t.id;
}
function _(e) {
    let { userId: t } = e;
    c(t, null);
}
function p(e) {
    let { isSwitchingAccount: t } = e;
    t || null == u || c(u, null);
}
function h(e) {
    let { userId: t } = e;
    c(t, null);
}
class m extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (o = e);
    }
    requiredActions(e) {
        var t;
        return null !== (t = o[e]) && void 0 !== t ? t : null;
    }
    requiredActionsIncludes(e, t) {
        let n = this.requiredActions(e);
        return null != n && t.reduce((e, t) => e || n.includes(t), !1);
    }
    wasLoginAttemptedInSession(e) {
        return l === e;
    }
    getState() {
        return o;
    }
}
s(m, 'displayName', 'LoginRequiredActionStore'), s(m, 'persistKey', 'LoginRequiredActionStore');
let g = new m(a.Z, {
    LOGIN_ATTEMPTED: d,
    CONNECTION_OPEN: f,
    CURRENT_USER_UPDATE: f,
    LOGOUT: p,
    PASSWORD_UPDATED: _,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: h
});
