n.d(t, { A: () => g });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
let o = {},
    l = null,
    c = null;
function u(e, t) {
    null == t ? e in o && delete o[e] : null != e && (o[e] = t);
}
function d(e) {
    let { required_actions: t, user_id: n } = e;
    u((l = n), t);
}
function f(e) {
    let { user: t } = e;
    c = t.id;
}
function p(e) {
    let { userId: t } = e;
    u(t, null);
}
function _(e) {
    let { isSwitchingAccount: t } = e;
    t || null == c || u(c, null);
}
function h(e) {
    let { userId: t } = e;
    u(t, null);
}
class m extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (o = e);
    }
    requiredActions(e) {
        var t;
        return null != (t = o[e]) ? t : null;
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
s(m, "displayName", "LoginRequiredActionStore"), s(m, "persistKey", "LoginRequiredActionStore");
let g = new m(a.h, {
    LOGIN_ATTEMPTED: d,
    CONNECTION_OPEN: f,
    CURRENT_USER_UPDATE: f,
    LOGOUT: _,
    PASSWORD_UPDATED: p,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: h,
});
