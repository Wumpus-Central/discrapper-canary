"use strict";
n.d(t, { RI: () => f, Ay: () => E });
var i = n(636537),
    r = n(439372),
    s = n(546183),
    a = n(927813),
    o = n(17928),
    l = n(228366);
let u = new Map();
class c extends o.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "AccountLinkStore";
    getPendingAuthorizations() {
        return u;
    }
    deletePendingAuthorization(e) {
        u.delete(e);
    }
}
let d = new c(l.h, {
    ACCOUNT_LINK_AUTHORIZATION_STARTED: function (e) {
        null != s.default.getNewestTokenForApplication(e.applicationId) ||
            (null != e.accountLinkCallbacks &&
                u.set(e.applicationId, {
                    applicationId: e.applicationId,
                    startedAt: Date.now(),
                    accountLinkCallbacks: e.accountLinkCallbacks,
                }));
    },
});
var _ = n(652215);
let h = 20 * a.A.Millis.MINUTE;
async function f(e) {
    let { applicationId: t, onSuccess: n, onError: r } = e;
    try {
        await i.Bo.post({
            url: _.Rsh.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT,
            body: { application_id: t },
            rejectWithError: !0,
        }),
            n?.();
    } catch (e) {
        r?.(e);
    }
}
class p extends r.A {
    static displayName = "AccountLinkManager";
    actions = {
        OAUTH2_TOKEN_CREATE: (e) => this.handleOAuth2TokenCreate(e),
        USER_AUTHORIZED_APPS_UPDATE: () => this.handleAuthorizedAppsUpdate(),
        APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
        ACCOUNT_LINK_AUTHORIZATION_COMPLETED: (e) => this.handleAccountLinkAuthorizationCompleted(e),
    };
    evaluatePending() {
        let e = d.getPendingAuthorizations();
        if (0 === e.size) return;
        let t = Date.now();
        for (let [n, i] of e) {
            if (t - i.startedAt > h) {
                d.deletePendingAuthorization(n),
                    i.accountLinkCallbacks?.onError?.("Account link authorization timed out");
                continue;
            }
            null != s.default.getNewestTokenForApplication(n) &&
                (i.accountLinkCallbacks?.onSuccess?.(), d.deletePendingAuthorization(n));
        }
    }
    handleOAuth2TokenCreate(e) {
        d.getPendingAuthorizations().has(e.application.id) && this.evaluatePending();
    }
    handleAuthorizedAppsUpdate() {
        this.evaluatePending();
    }
    handleAccountLinkAuthorizationCompleted(e) {
        d.getPendingAuthorizations().has(e.applicationId) && this.evaluatePending();
    }
    handleAppStateUpdate(e) {
        e.state === _.g6G.ACTIVE && this.evaluatePending();
    }
}
let E = new p();
