"use strict";
let i, r;
n.r(t), n.d(t, { default: () => eu }), n(321073), n(142703);
var a = n(247775),
    s = n(80703),
    l = n(17928),
    o = n(506774),
    d = n(228366),
    c = n(181658),
    u = n(155718);
new (n(683588).K)();
var _ = n(15552),
    E = n(53943),
    A = n(626584),
    h = n(620233),
    I = n(636537),
    f = n(652215),
    p = n(976860);
let T = function () {
    return !0;
};
var m = n(252919),
    g = n(174459),
    S = n(612181),
    N = n(38405),
    C = n(115036),
    R = n(536802),
    O = n(204925);
let L = new A.A("AuthenticationStore"),
    y = "fingerprint",
    D = "installation_id_v3",
    v = "user_id_cache",
    b = null,
    M = null,
    P = null,
    U = null,
    w = null,
    G = null,
    x = null,
    k = null,
    F = f.aUe.NONE,
    V = !1,
    B = [],
    H = "",
    j = !1,
    W = null,
    Y = !1,
    K = !1,
    $ = null,
    z = null,
    q = !1,
    Z = !1,
    X = [];
function Q(e) {
    let t = null != a.getToken(),
        n = null != o.w.get(f.ilC);
    L.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function J() {
    let e = o.w.get(D);
    if (null != e && e.length > 0) return e;
    let t = o.w.get("analytics_installation");
    return null != t && t.length > 0 ? (o.w.set(D, t), t) : null;
}
function ee() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((w = o.w.get(y)), (x = J()), null != $)) return $;
    let t = null != w ? w : a.getToken();
    return !(0, p.m)() || (!e && null != t) || C.A.isHandoffAvailable()
        ? Promise.resolve()
        : et({ withGuildExperiments: !0 });
}
function et(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        i = g.default.getSuperPropertiesBase64();
    return (
        null != i && (n["X-Super-Properties"] = i),
        null != w && (n["X-Fingerprint"] = w),
        null != x && (n["X-Installation-ID"] = x),
        ($ = (function (e) {
            let { withGuildExperiments: t, headers: n, context: i } = e;
            return I.Bo.get({
                url: f.Rsh.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: i,
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        })({ withGuildExperiments: t, headers: n, context: { location: (0, p.SB)() } }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: i, installation: r } = e.body;
                null != r && r.length > 0 && d.h.dispatch({ type: "INSTALLATION_ID", installation: r }),
                    t && d.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    d.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: i,
                    }),
                    ($ = null);
            },
            () => {
                ($ = null), d.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ))
    );
}
function en() {
    (G = w), (w = null), o.w.remove(y);
}
function ei(e, t) {
    Q("setAuthToken called."), (null == t || t !== b) && a.removeAnalyticsToken(), a.setToken(e, t);
}
function er(e) {
    (k = e), a.setAnalyticsToken(e);
}
function ea() {
    return Q("removeAuthToken called."), a.removeAnalyticsToken(), a.removeToken();
}
function es() {
    let e = [];
    null != W && e.push({ type: "webauthn", challenge: W }),
        Y && e.push({ type: "totp" }),
        K && e.push({ type: "backup" }),
        j && e.push({ type: "sms" }),
        (X = e);
}
function el(e) {
    let { installation: t } = e;
    if (null != x && x.length > 0) return !1;
    (x = t), T() && o.w.set(D, t);
}
function eo() {
    (V = !0),
        ed(),
        d.h.wait(() => {
            (0, p.pX)(f.BVt.REGISTER);
        });
}
function ed(e) {
    Q("handleLogout called.");
    let t = ea();
    e?.isSwitchingAccount || (t && en(), ee()),
        l.Ay.PersistedStore.clearAll({
            omit: [
                "InstallationManagerStore",
                "AgeGateStore",
                "NativePermissionsStore",
                "MultiAccountStore",
                "DraftStore",
                "OverlayStoreV2",
                "StreamerModeStore",
                "LoginRequiredActionStore",
                "LayoutStore",
                "OverlaySettingsStore",
                "ApexExperimentStore",
            ],
            type: e?.isSwitchingAccount ? "user-data-only" : "all",
        }),
        l.Ay.Store.removeAllConditionalListeners(),
        R.A.clearAll(),
        E.IU(),
        N.A.clearUser(),
        o.w.remove(v),
        (b = null),
        (M = null),
        (F = e?.isSwitchingAccount ? f.aUe.LOGGING_IN : f.aUe.NONE),
        (H = ""),
        (W = null),
        (j = !1),
        (q = !1),
        (Z = !1),
        es();
}
class ec extends l.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        if (((b = o.w.get(v)), (x = J()), null == a.getToken())) {
            let t = null == x || 0 === x.length,
                n = ee();
            if (t) {
                function e() {
                    (0, h.Tv)(null);
                }
                n.then(e, e);
            }
        }
        this.addChangeListener(() => void 0);
    }
    getLoginStatus() {
        return F;
    }
    getId() {
        return b;
    }
    getSessionId() {
        return M;
    }
    getAuthSessionIdHash() {
        return P;
    }
    getStaticAuthSessionId() {
        return U;
    }
    getToken() {
        return (0, S.gf)();
    }
    isAuthenticated() {
        return (0, S.wR)();
    }
    getFingerprint() {
        return w;
    }
    getInstallationForTracking() {
        return T() ? x : null;
    }
    getAnalyticsToken() {
        return k ?? a.getAnalyticsToken();
    }
    getMFATicket() {
        return H;
    }
    getMFAMethods() {
        return X;
    }
    getLoginInstanceId() {
        return r;
    }
    hasTOTPEnabled() {
        return B.includes(u.Wq.TOTP);
    }
    getCredentials() {
        if (null == i) throw Error("no credentials");
        return i;
    }
    allowLogoutRedirect() {
        return !V;
    }
    getSuspendedUserToken() {
        return z;
    }
    getIsPasswordlessActive() {
        return q;
    }
    attemptedPasswordLogin() {
        return Z;
    }
}
let eu = new ec(
    d.h,
    {
        CONNECTION_OPEN: function (e) {
            let {
                user: t,
                sessionId: n,
                authSessionIdHash: i,
                analyticsToken: r,
                auth: a,
                staticAuthSessionId: s,
                apexExperiments: l,
            } = e;
            Q("handleConnectionOpen called"),
                N.A.setUser(t.id, t.username, t.email ?? void 0, (0, m.A)(t)),
                (M = n),
                (P = i),
                (U = s),
                er(r),
                (b = t.id),
                void 0 !== a && (B = a.authenticator_types),
                o.w.set(v, t.id),
                l?.installation != null && el({ type: "INSTALLATION_ID", installation: l.installation });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n, analyticsToken: i, token: r } = e;
            N.A.setUser(t.id, t.username, t.email ?? void 0, (0, m.A)(t)),
                (M = n),
                (k = i),
                ei(r, t.id),
                null != i && er(i),
                en(),
                (b = t.id),
                o.w.set(v, t.id);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            Q(`handleConnectionClosed called with code ${t}.`);
            let i = n(192308).hasModalOpen;
            if (4004 === t) {
                if (V || i(O.jc) || i(O.Uy)) return void eo();
                g.default.track(f.HAw.APP_USER_DEAUTHENTICATED, { user_id: o.w.get(v) }),
                    ed(),
                    setImmediate(() => (0, p.pX)(f.BVt.DEFAULT_LOGGED_OUT));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (P = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            (F = f.aUe.LOGGING_IN), (Z = Z || !0 === t);
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            (F = f.aUe.NONE), ei(t), en(), (H = ""), (j = !1), (W = null), (r = null), es(), (q = !1);
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            (H = ""),
                (j = !1),
                (W = null),
                (r = null),
                es(),
                (F = null != (0, _.p)(t).date_of_birth ? f.aUe.LOGIN_AGE_GATE : f.aUe.NONE);
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: i, backup: a, totp: s, loginInstanceId: l } = e;
            null != t && ((H = t), (j = n), (W = i ?? null), (K = a), (Y = s), (r = l), es()), (F = f.aUe.MFA_STEP);
        },
        LOGIN_MFA: function () {
            F = f.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            (F = f.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            (F = f.aUe.ACCOUNT_DISABLED), (i = e.credentials);
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            (F = f.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            (F = f.aUe.PHONE_IP_AUTHORIZATION), (i = e.credentials);
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            (F = f.aUe.NONE), (H = ""), (j = !1), (W = null), (r = null), (i = null), t || (es(), ea(), ee(!1));
        },
        LOGIN_STATUS_RESET: function () {
            F = f.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            (q = !1), (z = t), setImmediate(() => (0, p.pX)(f.BVt.ACCOUNT_STANDING));
        },
        LOGOUT: ed,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == w
                ? null != t
                    ? (g.default.track(f.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != G ? (0, s.d)(G) : null,
                          new_fingerprint: (0, s.d)(t),
                      }),
                      (w = t),
                      (G = t),
                      o.w.set(y, w))
                    : ee()
                : null != t &&
                  w !== t &&
                  g.default.track(f.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
                      fingerprint: (0, s.d)(w),
                      dropped_fingerprint: (0, s.d)(t),
                  });
        },
        INSTALLATION_ID: el,
        REGISTER_SUCCESS: function (e) {
            let { token: t } = e;
            ei(t), en();
        },
        FORGOT_PASSWORD_REQUEST: function () {
            F = f.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            F = f.aUe.NONE;
        },
        UPDATE_TOKEN: function (e) {
            let { token: t, userId: n } = e;
            Q("handleUpdateToken called"), ei(t, n), en();
        },
        EXPERIMENTS_FETCH: (e) => {
            et(e);
        },
        CURRENT_USER_UPDATE: function (e) {
            let { user: t } = e;
            (b = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), o.w.set(v, t.id);
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eo,
        CLOSE_SUSPENDED_USER: function () {
            (z = null), (F = f.aUe.NONE), ed(), setImmediate(() => (0, p.pX)(f.BVt.DEFAULT_LOGGED_OUT));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            (H = ""),
                (j = !1),
                (W = null),
                (q = !1),
                (r = null),
                (F = t instanceof c.A && null != (0, _.W)(t).date_of_birth ? f.aUe.LOGIN_AGE_GATE : f.aUe.NONE);
        },
        PASSWORDLESS_START: function () {
            q = !0;
        },
    },
    d.A.Early,
);
