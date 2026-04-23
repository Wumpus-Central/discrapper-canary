n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366);
let l = {},
    a = null,
    s = null;
function o(e, t) {
    null == t ? e in l && delete l[e] : null != e && (l[e] = t);
}
function d(e) {
    let { user: t } = e;
    s = t.id;
}
class u extends i.Ay.PersistedStore {
    static displayName = "LoginRequiredActionStore";
    static persistKey = "LoginRequiredActionStore";
    initialize(e) {
        null != e && (l = e);
    }
    requiredActions(e) {
        return l[e] ?? null;
    }
    requiredActionsIncludes(e, t) {
        let n = this.requiredActions(e);
        return null != n && t.reduce((e, t) => e || n.includes(t), !1);
    }
    wasLoginAttemptedInSession(e) {
        return a === e;
    }
    getState() {
        return l;
    }
}
let c = new u(r.h, {
    LOGIN_ATTEMPTED: function (e) {
        let { required_actions: t, user_id: n } = e;
        o((a = n), t);
    },
    CONNECTION_OPEN: d,
    CURRENT_USER_UPDATE: d,
    LOGOUT: function (e) {
        let { isSwitchingAccount: t } = e;
        t || null == s || o(s, null);
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
