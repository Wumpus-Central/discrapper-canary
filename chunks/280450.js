let i, r;
(n.r(t), n.d(t, { default: () => ec }), n(321073), n(142703));
var a = n(247775),
    s = n(80703),
    l = n(17928),
    o = n(506774),
    d = n(73153),
    c = n(181658),
    u = n(155718);
new (n(683588).K)();
var _ = n(15552),
    E = n(53943),
    A = n(626584),
    h = n(636537),
    f = n(652215),
    I = n(976860);
let p = function () {
    return !0;
};
var T = n(252919),
    m = n(174459),
    g = n(612181),
    S = n(38405),
    N = n(115036),
    C = n(536802),
    O = n(204925);
let R = new A.A("AuthenticationStore"),
    L = "fingerprint",
    y = "installation_id_v3",
    D = "user_id_cache",
    v = null,
    b = null,
    M = null,
    P = null,
    U = null,
    w = null,
    G = null,
    x = null,
    k = f.aUe.NONE,
    F = !1,
    B = [],
    V = "",
    H = !1,
    j = null,
    W = !1,
    Y = !1,
    K = null,
    $ = null,
    z = !1,
    X = !1,
    Z = [];
function q(e) {
    let t = null != a.getToken(),
        n = null != o.w.get(f.ilC);
    R.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function Q() {
    let e = o.w.get(y);
    if (null != e && e.length > 0) return e;
    let t = o.w.get("analytics_installation");
    return null != t && t.length > 0 ? (o.w.set(y, t), t) : null;
}
function J() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((U = o.w.get(L)), (G = Q()), null != K)) return K;
    let t = null != U ? U : a.getToken();
    return !(0, I.m)() || (!e && null != t) || N.A.isHandoffAvailable()
        ? Promise.resolve()
        : ee({ withGuildExperiments: !0 });
}
function ee(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        i = m.default.getSuperPropertiesBase64();
    return (
        null != i && (n["X-Super-Properties"] = i),
        null != U && (n["X-Fingerprint"] = U),
        null != G && (n["X-Installation-ID"] = G),
        (K = (function (e) {
            let { withGuildExperiments: t, headers: n, context: i } = e;
            return h.Bo.get({
                url: f.Rsh.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: i,
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        })({ withGuildExperiments: t, headers: n, context: { location: (0, I.SB)() } }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: i, installation: r } = e.body;
                (null != r && r.length > 0 && d.h.dispatch({ type: "INSTALLATION_ID", installation: r }),
                    t && d.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    d.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: i,
                    }),
                    (K = null));
            },
            () => {
                ((K = null), d.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" }));
            },
        ))
    );
}
function et() {
    ((w = U), (U = null), o.w.remove(L));
}
function en(e, t) {
    (q("setAuthToken called."), (null == t || t !== v) && a.removeAnalyticsToken(), a.setToken(e, t));
}
function ei(e) {
    ((x = e), a.setAnalyticsToken(e));
}
function er() {
    return (q("removeAuthToken called."), a.removeAnalyticsToken(), a.removeToken());
}
function ea() {
    let e = [];
    (null != j && e.push({ type: "webauthn", challenge: j }),
        W && e.push({ type: "totp" }),
        Y && e.push({ type: "backup" }),
        H && e.push({ type: "sms" }),
        (Z = e));
}
function es(e) {
    let { installation: t } = e;
    if (null != G && G.length > 0) return !1;
    ((G = t), p() && o.w.set(y, t));
}
function el() {
    ((F = !0),
        eo(),
        d.h.wait(() => {
            (0, I.pX)(f.BVt.REGISTER);
        }));
}
function eo(e) {
    q("handleLogout called.");
    let t = er();
    (e?.isSwitchingAccount || (t && et(), J()),
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
                "AccessibilityStore",
                "DerivedQosDataStore",
            ],
            type: e?.isSwitchingAccount ? "user-data-only" : "all",
        }),
        l.Ay.Store.removeAllConditionalListeners(),
        C.A.clearAll(),
        E.IU(),
        S.A.clearUser(),
        o.w.remove(D),
        (v = null),
        (b = null),
        (k = e?.isSwitchingAccount ? f.aUe.LOGGING_IN : f.aUe.NONE),
        (V = ""),
        (j = null),
        (H = !1),
        (z = !1),
        (X = !1),
        ea());
}
class ed extends l.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        if (((v = o.w.get(D)), (G = Q()), null == a.getToken())) {
            let t = null == G || 0 === G.length,
                i = J();
            if (t) {
                function e() {
                    Promise.resolve()
                        .then(n.bind(n, 620233))
                        .then((e) => {
                            let { fetchInstallationExperiments: t } = e;
                            return t(null);
                        });
                }
                i.then(e, e);
            }
        }
        this.addChangeListener(() => void 0);
    }
    getLoginStatus() {
        return k;
    }
    getId() {
        return v;
    }
    getSessionId() {
        return b;
    }
    getAuthSessionIdHash() {
        return M;
    }
    getStaticAuthSessionId() {
        return P;
    }
    getToken() {
        return (0, g.gf)();
    }
    isAuthenticated() {
        return (0, g.wR)();
    }
    getFingerprint() {
        return U;
    }
    getInstallationForTracking() {
        return p() ? G : null;
    }
    getAnalyticsToken() {
        return x ?? a.getAnalyticsToken();
    }
    getMFATicket() {
        return V;
    }
    getMFAMethods() {
        return Z;
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
        return !F;
    }
    getSuspendedUserToken() {
        return $;
    }
    getIsPasswordlessActive() {
        return z;
    }
    attemptedPasswordLogin() {
        return X;
    }
}
let ec = new ed(
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
            (q("handleConnectionOpen called"),
                S.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
                (b = n),
                (M = i),
                (P = s),
                ei(r),
                (v = t.id),
                void 0 !== a && (B = a.authenticator_types),
                o.w.set(D, t.id),
                l?.installation != null && es({ type: "INSTALLATION_ID", installation: l.installation }));
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n, analyticsToken: i, token: r } = e;
            (S.A.setUser(t.id, t.username, t.email ?? void 0, (0, T.A)(t)),
                (b = n),
                (x = i),
                en(r, t.id),
                null != i && ei(i),
                et(),
                (v = t.id),
                o.w.set(D, t.id));
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            q(`handleConnectionClosed called with code ${t}.`);
            let i = n(192308).hasModalOpen;
            if (4004 === t) {
                if (F || i(O.jc) || i(O.Uy)) return void el();
                (m.default.track(f.HAw.APP_USER_DEAUTHENTICATED, { user_id: o.w.get(D) }),
                    eo(),
                    setImmediate(() => (0, I.pX)(f.BVt.DEFAULT_LOGGED_OUT)));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (M = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            ((k = f.aUe.LOGGING_IN), (X = X || !0 === t));
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            ((k = f.aUe.NONE), en(t), et(), (V = ""), (H = !1), (j = null), (r = null), ea(), (z = !1), ($ = null));
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            ((V = ""),
                (H = !1),
                (j = null),
                (r = null),
                ea(),
                (k = null != (0, _.p)(t).date_of_birth ? f.aUe.LOGIN_AGE_GATE : f.aUe.NONE));
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: i, backup: a, totp: s, loginInstanceId: l } = e;
            (null != t && ((V = t), (H = n), (j = i ?? null), (Y = a), (W = s), (r = l), ea()), (k = f.aUe.MFA_STEP));
        },
        LOGIN_MFA: function () {
            k = f.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            ((k = f.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials));
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            ((k = f.aUe.ACCOUNT_DISABLED), (i = e.credentials));
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            ((k = f.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials));
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            ((k = f.aUe.PHONE_IP_AUTHORIZATION), (i = e.credentials));
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            ((k = f.aUe.NONE), (V = ""), (H = !1), (j = null), (r = null), (i = null), t || (ea(), er(), J(!1)));
        },
        LOGIN_STATUS_RESET: function () {
            k = f.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            ((z = !1), ($ = t), setImmediate(() => (0, I.pX)(f.BVt.ACCOUNT_STANDING)));
        },
        LOGOUT: eo,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == U
                ? null != t
                    ? (m.default.track(f.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != w ? (0, s.d)(w) : null,
                          new_fingerprint: (0, s.d)(t),
                      }),
                      (U = t),
                      (w = t),
                      o.w.set(L, U))
                    : J()
                : null != t &&
                  U !== t &&
                  m.default.track(f.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
                      fingerprint: (0, s.d)(U),
                      dropped_fingerprint: (0, s.d)(t),
                  });
        },
        INSTALLATION_ID: es,
        REGISTER_SUCCESS: function (e) {
            let { token: t } = e;
            (en(t), et());
        },
        FORGOT_PASSWORD_REQUEST: function () {
            k = f.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            k = f.aUe.NONE;
        },
        UPDATE_TOKEN: function (e) {
            let { token: t, userId: n } = e;
            (q("handleUpdateToken called"), en(t, n), et());
        },
        EXPERIMENTS_FETCH: (e) => {
            ee(e);
        },
        CURRENT_USER_UPDATE: function (e) {
            let { user: t } = e;
            ((v = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), o.w.set(D, t.id));
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: el,
        CLOSE_SUSPENDED_USER: function () {
            (($ = null), (k = f.aUe.NONE), eo(), setImmediate(() => (0, I.pX)(f.BVt.DEFAULT_LOGGED_OUT)));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            ((V = ""),
                (H = !1),
                (j = null),
                (z = !1),
                (r = null),
                (k = t instanceof c.A && null != (0, _.W)(t).date_of_birth ? f.aUe.LOGIN_AGE_GATE : f.aUe.NONE));
        },
        PASSWORDLESS_START: function () {
            z = !0;
        },
    },
    d.A.Early,
);
