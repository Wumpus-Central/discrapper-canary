n.d(t, { Z: () => g });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = {},
    l = null,
    c = null;
function u(e, t) {
    null == t ? e in s && delete s[e] : null != e && (s[e] = t);
}
function d(e) {
    let { required_actions: t, user_id: n } = e;
    u((l = n), t);
}
function f(e) {
    let { user: t } = e;
    c = t.id;
}
function _(e) {
    let { userId: t } = e;
    u(t, null);
}
function p(e) {
    let { isSwitchingAccount: t } = e;
    t || null == c || u(c, null);
}
function h(e) {
    let { userId: t } = e;
    u(t, null);
}
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (s = e);
    }
    requiredActions(e) {
        var t;
        return null != (t = s[e]) ? t : null;
    }
    requiredActionsIncludes(e, t) {
        let n = this.requiredActions(e);
        return null != n && t.reduce((e, t) => e || n.includes(t), !1);
    }
    wasLoginAttemptedInSession(e) {
        return l === e;
    }
    getState() {
        return s;
    }
}
a(m, 'displayName', 'LoginRequiredActionStore'), a(m, 'persistKey', 'LoginRequiredActionStore');
let g = new m(o.Z, {
    LOGIN_ATTEMPTED: d,
    CONNECTION_OPEN: f,
    CURRENT_USER_UPDATE: f,
    LOGOUT: p,
    PASSWORD_UPDATED: _,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: h
});
