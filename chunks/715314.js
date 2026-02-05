"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153);
let a = {},
    s = null,
    o = null;
function l(e, t) {
    null == t ? e in a && delete a[e] : null != e && (a[e] = t);
}
function u(e) {
    let { required_actions: t, user_id: n } = e;
    l((s = n), t);
}
function c(e) {
    let { user: t } = e;
    o = t.id;
}
function d(e) {
    let { userId: t } = e;
    l(t, null);
}
function _(e) {
    let { isSwitchingAccount: t } = e;
    t || null == o || l(o, null);
}
function f(e) {
    let { userId: t } = e;
    l(t, null);
}
class p extends r.Ay.PersistedStore {
    static displayName = "LoginRequiredActionStore";
    static persistKey = "LoginRequiredActionStore";
    initialize(e) {
        null != e && (a = e);
    }
    requiredActions(e) {
        return a[e] ?? null;
    }
    requiredActionsIncludes(e, t) {
        let n = this.requiredActions(e);
        return null != n && t.reduce((e, t) => e || n.includes(t), !1);
    }
    wasLoginAttemptedInSession(e) {
        return s === e;
    }
    getState() {
        return a;
    }
}
let h = new p(i.h, {
    LOGIN_ATTEMPTED: u,
    CONNECTION_OPEN: c,
    CURRENT_USER_UPDATE: c,
    LOGOUT: _,
    PASSWORD_UPDATED: d,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: f,
});
