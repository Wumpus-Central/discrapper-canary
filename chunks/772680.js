"use strict";
n.d(t, { Ay: () => _, RI: () => d });
var i = n(636537),
    r = n(439372),
    s = n(546183),
    a = n(927813),
    o = n(878118),
    l = n(652215);
let u = 20 * a.A.Millis.MINUTE;
async function d(e) {
    let { applicationId: t, onSuccess: n, onError: r } = e;
    try {
        await i.Bo.post({
            url: l.Rsh.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT,
            body: { application_id: t },
            rejectWithError: !0,
        }),
            n?.();
    } catch (e) {
        r?.(e);
    }
}
class c extends r.A {
    static displayName = "AccountLinkManager";
    actions = {
        OAUTH2_TOKEN_CREATE: (e) => this.handleOAuth2TokenCreate(e),
        USER_AUTHORIZED_APPS_UPDATE: () => this.handleAuthorizedAppsUpdate(),
        APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
        ACCOUNT_LINK_AUTHORIZATION_COMPLETED: (e) => this.handleAccountLinkAuthorizationCompleted(e),
    };
    evaluatePending() {
        let e = o.A.getPendingAuthorizations();
        if (0 === e.size) return;
        let t = Date.now();
        for (let [n, i] of e) {
            if (t - i.startedAt > u) {
                o.A.deletePendingAuthorization(n),
                    i.accountLinkCallbacks?.onError?.("Account link authorization timed out");
                continue;
            }
            null != s.default.getNewestTokenForApplication(n) &&
                (i.accountLinkCallbacks?.onSuccess?.(), o.A.deletePendingAuthorization(n));
        }
    }
    handleOAuth2TokenCreate(e) {
        o.A.getPendingAuthorizations().has(e.application.id) && this.evaluatePending();
    }
    handleAuthorizedAppsUpdate() {
        this.evaluatePending();
    }
    handleAccountLinkAuthorizationCompleted(e) {
        o.A.getPendingAuthorizations().has(e.applicationId) && this.evaluatePending();
    }
    handleAppStateUpdate(e) {
        e.state === l.g6G.ACTIVE && this.evaluatePending();
    }
}
let _ = new c();
