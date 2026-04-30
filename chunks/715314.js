"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = {},
    a = null,
    o = null;
function l(e, t) {
    null == t ? e in s && delete s[e] : null != e && (s[e] = t);
}
function u(e) {
    let { user: t } = e;
    o = t.id;
}
class c extends i.Ay.PersistedStore {
    static displayName = "LoginRequiredActionStore";
    static persistKey = "LoginRequiredActionStore";
    initialize(e) {
        null != e && (s = e);
    }
    requiredActions(e) {
        return s[e] ?? null;
    }
    requiredActionsIncludes(e, t) {
        let n = this.requiredActions(e);
        return null != n && t.reduce((e, t) => e || n.includes(t), !1);
    }
    wasLoginAttemptedInSession(e) {
        return a === e;
    }
    getState() {
        return s;
    }
}
let d = new c(r.h, {
    LOGIN_ATTEMPTED: function (e) {
        let { required_actions: t, user_id: n } = e;
        l((a = n), t);
    },
    CONNECTION_OPEN: u,
    CURRENT_USER_UPDATE: u,
    LOGOUT: function (e) {
        let { isSwitchingAccount: t } = e;
        t || null == o || l(o, null);
    },
    PASSWORD_UPDATED: function (e) {
        let { userId: t } = e;
        l(t, null);
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        let { userId: t } = e;
        l(t, null);
    },
});
