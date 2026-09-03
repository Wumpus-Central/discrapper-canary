n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let a = {},
    s = null,
    l = null;
function o(e, t) {
    null == t ? e in a && delete a[e] : null != e && (a[e] = t);
}
function d(e) {
    let { user: t } = e;
    l = t.id;
}
class c extends i.Ay.PersistedStore {
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
let u = new c(r.h, {
    LOGIN_ATTEMPTED: function (e) {
        let { required_actions: t, user_id: n } = e;
        o((s = n), t);
    },
    CONNECTION_OPEN: d,
    CURRENT_USER_UPDATE: d,
    LOGOUT: function (e) {
        let { isSwitchingAccount: t } = e;
        t || null == l || o(l, null);
    },
    PASSWORD_UPDATED: function (e) {
        let { userId: t } = e;
        o(t, null);
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        let { userId: t } = e;
        o(t, null);
    },
});
