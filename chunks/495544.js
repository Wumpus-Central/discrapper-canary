"use strict";
let i, r;
n.r(t), n.d(t, { default: () => e_ }), n(321073), n(142703);
var s = n(247775),
    a = n(80703),
    o = n(17928),
    l = n(636537),
    d = n(506774),
    _ = n(228366),
    u = n(181658),
    c = n(155718);
new (n(683588).K)();
var E = n(15552),
    h = n(53943),
    m = n(626584),
    f = n(620233),
    g = n(976860);
let p = function () {
    return !0;
};
var A = n(252919),
    I = n(954571),
    T = n(612181),
    S = n(38405),
    N = n(115036),
    C = n(536802),
    R = n(652215),
    O = n(204925);
let y = new m.A("AuthenticationStore"),
    v = "fingerprint",
    D = "analytics_installation",
    L = "user_id_cache",
    b = null,
    w = null,
    P = null,
    k = null,
    M = null,
    U = null,
    x = null,
    G = null,
    V = R.aUe.NONE,
    F = !1,
    B = [],
    H = "",
    j = !1,
    W = null,
    Y = !1,
    K = !1,
    z = null,
    $ = null,
    q = !1,
    X = !1,
    Z = [];
function Q(e) {
    let t = null != s.getToken(),
        n = null != d.w.get(R.ilC);
    y.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function J() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((M = d.w.get(v)), (x = d.w.get(D) ?? null), null != z)) return z;
    let t = null != M ? M : s.getToken();
    !(0, g.m)() || (!e && null != t) || N.A.isHandoffAvailable() || ee({ withGuildExperiments: !0 });
}
function ee(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        i = I.default.getSuperPropertiesBase64();
    null != i && (n["X-Super-Properties"] = i),
        null != M && (n["X-Fingerprint"] = M),
        null != x && (n["X-Installation-ID"] = x),
        (z = l.Bo.get({
            url: R.Rsh.EXPERIMENTS,
            query: { with_guild_experiments: t },
            headers: n,
            context: { location: (0, g.SB)() },
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: i } = e.body;
                t && _.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    _.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: i,
                    }),
                    (z = null);
            },
            () => {
                (z = null), _.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ));
}
function et() {
    (U = M), (M = null), d.w.remove(v);
}
function en(e, t) {
    Q("setAuthToken called."), (null == t || t !== b) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function ei(e) {
    (G = e), s.setAnalyticsToken(e);
}
function er() {
    return Q("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function es() {
    let e = [];
    null != W && e.push({ type: "webauthn", challenge: W }),
        Y && e.push({ type: "totp" }),
        K && e.push({ type: "backup" }),
        j && e.push({ type: "sms" }),
        (Z = e);
}
function ea(e) {
    let { installation: t } = e;
    if (null != x && x.length > 0) return !1;
    (x = t), p() && d.w.set(D, t);
}
function eo() {
    (F = !0),
        el(),
        _.h.wait(() => {
            (0, g.pX)(R.BVt.REGISTER);
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
        C.A.clearAll(),
        h.IU(),
        S.A.clearUser(),
        d.w.remove(L),
        (b = null),
        (w = null),
        (V = e?.isSwitchingAccount ? R.aUe.LOGGING_IN : R.aUe.NONE),
        (H = ""),
        (W = null),
        (j = !1),
        (q = !1),
        (X = !1),
        es();
}
class ed extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        (b = d.w.get(L)),
            (x = d.w.get(D) ?? null),
            null == s.getToken() && (J(), (null == x || 0 === x.length) && (0, f.Tv)(null)),
            this.addChangeListener(() => void 0);
    }
    getLoginStatus() {
        return V;
    }
    getId() {
        return b;
    }
    getSessionId() {
        return w;
    }
    getAuthSessionIdHash() {
        return P;
    }
    getStaticAuthSessionId() {
        return k;
    }
    getToken() {
        return (0, T.gf)();
    }
    isAuthenticated() {
        return (0, T.wR)();
    }
    getFingerprint() {
        return M;
    }
    getInstallationForTracking() {
        return p() ? x : null;
    }
    getAnalyticsToken() {
        return G ?? s.getAnalyticsToken();
    }
    getMFATicket() {
        return H;
    }
    getMFAMethods() {
        return Z;
    }
    getLoginInstanceId() {
        return r;
    }
    hasTOTPEnabled() {
        return B.includes(c.Wq.TOTP);
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
        return q;
    }
    attemptedPasswordLogin() {
        return X;
    }
}
let e_ = new ed(
    _.h,
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
                (P = i),
                (k = a),
                ei(r),
                (b = t.id),
                void 0 !== s && (B = s.authenticator_types),
                d.w.set(L, t.id),
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
                (b = t.id),
                d.w.set(L, t.id);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            Q(`handleConnectionClosed called with code ${t}.`);
            let i = n(192308).hasModalOpen;
            if (4004 === t) {
                if (F || i(O.jc) || i(O.Uy)) return void eo();
                I.default.track(R.HAw.APP_USER_DEAUTHENTICATED, { user_id: d.w.get(L) }),
                    el(),
                    setImmediate(() => (0, g.pX)(R.BVt.DEFAULT_LOGGED_OUT));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (P = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            (V = R.aUe.LOGGING_IN), (X = X || !0 === t);
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            (V = R.aUe.NONE), en(t), et(), (H = ""), (j = !1), (W = null), (r = null), es(), (q = !1);
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            (H = ""),
                (j = !1),
                (W = null),
                (r = null),
                es(),
                (V = null != (0, E.p)(t).date_of_birth ? R.aUe.LOGIN_AGE_GATE : R.aUe.NONE);
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: i, backup: s, totp: a, loginInstanceId: o } = e;
            null != t && ((H = t), (j = n), (W = i ?? null), (K = s), (Y = a), (r = o), es()), (V = R.aUe.MFA_STEP);
        },
        LOGIN_MFA: function () {
            V = R.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            (V = R.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            (V = R.aUe.ACCOUNT_DISABLED), (i = e.credentials);
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            (V = R.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            (V = R.aUe.PHONE_IP_AUTHORIZATION), (i = e.credentials);
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            (V = R.aUe.NONE), (H = ""), (j = !1), (W = null), (r = null), (i = null), t || (es(), er(), J(!1));
        },
        LOGIN_STATUS_RESET: function () {
            V = R.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            (q = !1), ($ = t), setImmediate(() => (0, g.pX)(R.BVt.ACCOUNT_STANDING));
        },
        LOGOUT: el,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == M
                ? null != t
                    ? (I.default.track(R.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != U ? (0, a.d)(U) : null,
                          new_fingerprint: (0, a.d)(t),
                      }),
                      (M = t),
                      (U = t),
                      d.w.set(v, M))
                    : J()
                : null != t &&
                  M !== t &&
                  I.default.track(R.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
                      fingerprint: (0, a.d)(M),
                      dropped_fingerprint: (0, a.d)(t),
                  });
        },
        INSTALLATION_ID: ea,
        REGISTER_SUCCESS: function (e) {
            let { token: t } = e;
            en(t), et();
        },
        FORGOT_PASSWORD_REQUEST: function () {
            V = R.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            V = R.aUe.NONE;
        },
        UPDATE_TOKEN: function (e) {
            let { token: t, userId: n } = e;
            Q("handleUpdateToken called"), en(t, n), et();
        },
        EXPERIMENTS_FETCH: ee,
        CURRENT_USER_UPDATE: function (e) {
            let { user: t } = e;
            (b = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), d.w.set(L, t.id);
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eo,
        CLOSE_SUSPENDED_USER: function () {
            ($ = null), (V = R.aUe.NONE), el(), setImmediate(() => (0, g.pX)(R.BVt.DEFAULT_LOGGED_OUT));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            (H = ""),
                (j = !1),
                (W = null),
                (q = !1),
                (r = null),
                (V = t instanceof u.A && null != (0, E.W)(t).date_of_birth ? R.aUe.LOGIN_AGE_GATE : R.aUe.NONE);
        },
        PASSWORDLESS_START: function () {
            q = !0;
        },
    },
    _.A.Early,
);
