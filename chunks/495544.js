"use strict";
let i, r;
n.r(t), n.d(t, { default: () => ec }), n(321073), n(142703);
var s = n(247775),
    a = n(80703),
    o = n(17928),
    l = n(636537),
    u = n(506774),
    c = n(228366),
    d = n(181658),
    _ = n(155718);
new (n(683588).K)();
var f = n(15552),
    h = n(53943),
    p = n(626584),
    E = n(620233),
    m = n(976860);
let g = function () {
    return !0;
};
var A = n(252919),
    I = n(174459),
    T = n(612181),
    S = n(38405),
    N = n(115036),
    y = n(536802),
    C = n(652215),
    v = n(204925);
let O = new p.A("AuthenticationStore"),
    R = "fingerprint",
    b = "analytics_installation",
    D = "user_id_cache",
    L = null,
    w = null,
    M = null,
    P = null,
    x = null,
    U = null,
    k = null,
    G = null,
    F = C.aUe.NONE,
    V = !1,
    B = [],
    H = "",
    j = !1,
    Y = null,
    W = !1,
    K = !1,
    z = null,
    $ = null,
    q = !1,
    Z = !1,
    X = [];
function Q(e) {
    let t = null != s.getToken(),
        n = null != u.w.get(C.ilC);
    O.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function J() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((x = u.w.get(R)), (k = u.w.get(b) ?? null), null != z)) return z;
    let t = null != x ? x : s.getToken();
    !(0, m.m)() || (!e && null != t) || N.A.isHandoffAvailable() || ee({ withGuildExperiments: !0 });
}
function ee(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        i = I.default.getSuperPropertiesBase64();
    null != i && (n["X-Super-Properties"] = i),
        null != x && (n["X-Fingerprint"] = x),
        null != k && (n["X-Installation-ID"] = k),
        (z = l.Bo.get({
            url: C.Rsh.EXPERIMENTS,
            query: { with_guild_experiments: t },
            headers: n,
            context: { location: (0, m.SB)() },
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: i } = e.body;
                t && c.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    c.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: i,
                    }),
                    (z = null);
            },
            () => {
                (z = null), c.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ));
}
function et() {
    (U = x), (x = null), u.w.remove(R);
}
function en(e, t) {
    Q("setAuthToken called."), (null == t || t !== L) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function ei(e) {
    (G = e), s.setAnalyticsToken(e);
}
function er() {
    return Q("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function es() {
    let e = [];
    null != Y && e.push({ type: "webauthn", challenge: Y }),
        W && e.push({ type: "totp" }),
        K && e.push({ type: "backup" }),
        j && e.push({ type: "sms" }),
        (X = e);
}
function ea(e) {
    let { installation: t } = e;
    if (null != k && k.length > 0) return !1;
    (k = t), g() && u.w.set(b, t);
}
function eo() {
    (V = !0),
        el(),
        c.h.wait(() => {
            (0, m.pX)(C.BVt.REGISTER);
        });
}
function el(e) {
    Q("handleLogout called.");
    let t = er();
    e?.isSwitchingAccount || (t && et(), J()),
        o.Ay.PersistedStore.clearAll({
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
        o.Ay.Store.removeAllConditionalListeners(),
        y.A.clearAll(),
        h.IU(),
        S.A.clearUser(),
        u.w.remove(D),
        (L = null),
        (w = null),
        (F = e?.isSwitchingAccount ? C.aUe.LOGGING_IN : C.aUe.NONE),
        (H = ""),
        (Y = null),
        (j = !1),
        (q = !1),
        (Z = !1),
        es();
}
class eu extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (L = u.w.get(D)),
            (k = u.w.get(b) ?? null),
            null == s.getToken() && (J(), (null == k || 0 === k.length) && (0, E.Tv)(null)),
            this.addChangeListener(() => void 0);
    }
    getLoginStatus() {
        return F;
    }
    getId() {
        return L;
    }
    getSessionId() {
        return w;
    }
    getAuthSessionIdHash() {
        return M;
    }
    getStaticAuthSessionId() {
        return P;
    }
    getToken() {
        return (0, T.gf)();
    }
    isAuthenticated() {
        return (0, T.wR)();
    }
    getFingerprint() {
        return x;
    }
    getInstallationForTracking() {
        return g() ? k : null;
    }
    getAnalyticsToken() {
        return G ?? s.getAnalyticsToken();
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
        return B.includes(_.Wq.TOTP);
    }
    getCredentials() {
        if (null == i) throw Error("no credentials");
        return i;
    }
    allowLogoutRedirect() {
        return !V;
    }
    getSuspendedUserToken() {
        return $;
    }
    getIsPasswordlessActive() {
        return q;
    }
    attemptedPasswordLogin() {
        return Z;
    }
}
let ec = new eu(
    c.h,
    {
        CONNECTION_OPEN: function (e) {
            let {
                user: t,
                sessionId: n,
                authSessionIdHash: i,
                analyticsToken: r,
                auth: s,
                staticAuthSessionId: a,
                apexExperiments: o,
            } = e;
            Q("handleConnectionOpen called"),
                S.A.setUser(t.id, t.username, t.email ?? void 0, (0, A.A)(t)),
                (w = n),
                (M = i),
                (P = a),
                ei(r),
                (L = t.id),
                void 0 !== s && (B = s.authenticator_types),
                u.w.set(D, t.id),
                o?.installation != null && ea({ type: "INSTALLATION_ID", installation: o.installation });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n, analyticsToken: i, token: r } = e;
            S.A.setUser(t.id, t.username, t.email ?? void 0, (0, A.A)(t)),
                (w = n),
                (G = i),
                en(r, t.id),
                null != i && ei(i),
                et(),
                (L = t.id),
                u.w.set(D, t.id);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            Q(`handleConnectionClosed called with code ${t}.`);
            let i = n(192308).hasModalOpen;
            if (4004 === t) {
                if (V || i(v.jc) || i(v.Uy)) return void eo();
                I.default.track(C.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(D) }),
                    el(),
                    setImmediate(() => (0, m.pX)(C.BVt.DEFAULT_LOGGED_OUT));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (M = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            (F = C.aUe.LOGGING_IN), (Z = Z || !0 === t);
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            (F = C.aUe.NONE), en(t), et(), (H = ""), (j = !1), (Y = null), (r = null), es(), (q = !1);
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            (H = ""),
                (j = !1),
                (Y = null),
                (r = null),
                es(),
                (F = null != (0, f.p)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE);
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: i, backup: s, totp: a, loginInstanceId: o } = e;
            null != t && ((H = t), (j = n), (Y = i ?? null), (K = s), (W = a), (r = o), es()), (F = C.aUe.MFA_STEP);
        },
        LOGIN_MFA: function () {
            F = C.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            (F = C.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            (F = C.aUe.ACCOUNT_DISABLED), (i = e.credentials);
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            (F = C.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            (F = C.aUe.PHONE_IP_AUTHORIZATION), (i = e.credentials);
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            (F = C.aUe.NONE), (H = ""), (j = !1), (Y = null), (r = null), (i = null), t || (es(), er(), J(!1));
        },
        LOGIN_STATUS_RESET: function () {
            F = C.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            (q = !1), ($ = t), setImmediate(() => (0, m.pX)(C.BVt.ACCOUNT_STANDING));
        },
        LOGOUT: el,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == x
                ? null != t
                    ? (I.default.track(C.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != U ? (0, a.d)(U) : null,
                          new_fingerprint: (0, a.d)(t),
                      }),
                      (x = t),
                      (U = t),
                      u.w.set(R, x))
                    : J()
                : null != t &&
                  x !== t &&
                  I.default.track(C.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
                      fingerprint: (0, a.d)(x),
                      dropped_fingerprint: (0, a.d)(t),
                  });
        },
        INSTALLATION_ID: ea,
        REGISTER_SUCCESS: function (e) {
            let { token: t } = e;
            en(t), et();
        },
        FORGOT_PASSWORD_REQUEST: function () {
            F = C.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            F = C.aUe.NONE;
        },
        UPDATE_TOKEN: function (e) {
            let { token: t, userId: n } = e;
            Q("handleUpdateToken called"), en(t, n), et();
        },
        EXPERIMENTS_FETCH: ee,
        CURRENT_USER_UPDATE: function (e) {
            let { user: t } = e;
            (L = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), u.w.set(D, t.id);
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eo,
        CLOSE_SUSPENDED_USER: function () {
            ($ = null), (F = C.aUe.NONE), el(), setImmediate(() => (0, m.pX)(C.BVt.DEFAULT_LOGGED_OUT));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            (H = ""),
                (j = !1),
                (Y = null),
                (q = !1),
                (r = null),
                (F = t instanceof d.A && null != (0, f.W)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE);
        },
        PASSWORDLESS_START: function () {
            q = !0;
        },
    },
    c.A.Early,
);
