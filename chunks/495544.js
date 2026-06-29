"use strict";
let i, r;
n.r(t), n.d(t, { default: () => ed }), n(321073), n(142703);
var s = n(247775),
    a = n(80703),
    o = n(17928),
    l = n(636537),
    u = n(506774),
    c = n(228366),
    d = n(181658),
    _ = n(155718);
new (n(683588).K)();
var h = n(15552),
    f = n(53943),
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
    y = n(115036),
    C = n(536802),
    N = n(652215),
    v = n(204925);
let R = new p.A("AuthenticationStore"),
    O = "fingerprint",
    b = "installation_id_v3",
    D = "user_id_cache",
    L = null,
    w = null,
    M = null,
    P = null,
    x = null,
    k = null,
    U = null,
    G = null,
    F = N.aUe.NONE,
    V = !1,
    B = [],
    j = "",
    H = !1,
    Y = null,
    W = !1,
    K = !1,
    $ = null,
    z = null,
    q = !1,
    Z = !1,
    X = [];
function Q(e) {
    let t = null != s.getToken(),
        n = null != u.w.get(N.ilC);
    R.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function J() {
    let e = u.w.get(b);
    if (null != e && e.length > 0) return e;
    let t = u.w.get("analytics_installation");
    return null != t && t.length > 0 ? (u.w.set(b, t), t) : null;
}
function ee() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((x = u.w.get(O)), (U = J()), null != $)) return $;
    let t = null != x ? x : s.getToken();
    return !(0, m.m)() || (!e && null != t) || y.A.isHandoffAvailable()
        ? Promise.resolve()
        : et({ withGuildExperiments: !0 });
}
function et(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        i = I.default.getSuperPropertiesBase64();
    return (
        null != i && (n["X-Super-Properties"] = i),
        null != x && (n["X-Fingerprint"] = x),
        null != U && (n["X-Installation-ID"] = U),
        ($ = l.Bo.get({
            url: N.Rsh.EXPERIMENTS,
            query: { with_guild_experiments: t },
            headers: n,
            context: { location: (0, m.SB)() },
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: i, installation: r } = e.body;
                null != r && r.length > 0 && c.h.dispatch({ type: "INSTALLATION_ID", installation: r }),
                    t && c.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    c.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: i,
                    }),
                    ($ = null);
            },
            () => {
                ($ = null), c.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ))
    );
}
function en() {
    (k = x), (x = null), u.w.remove(O);
}
function ei(e, t) {
    Q("setAuthToken called."), (null == t || t !== L) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function er(e) {
    (G = e), s.setAnalyticsToken(e);
}
function es() {
    return Q("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function ea() {
    let e = [];
    null != Y && e.push({ type: "webauthn", challenge: Y }),
        W && e.push({ type: "totp" }),
        K && e.push({ type: "backup" }),
        H && e.push({ type: "sms" }),
        (X = e);
}
function eo(e) {
    let { installation: t } = e;
    if (null != U && U.length > 0) return !1;
    (U = t), g() && u.w.set(b, t);
}
function el() {
    (V = !0),
        eu(),
        c.h.wait(() => {
            (0, m.pX)(N.BVt.REGISTER);
        });
}
function eu(e) {
    Q("handleLogout called.");
    let t = es();
    e?.isSwitchingAccount || (t && en(), ee()),
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
        C.A.clearAll(),
        f.IU(),
        S.A.clearUser(),
        u.w.remove(D),
        (L = null),
        (w = null),
        (F = e?.isSwitchingAccount ? N.aUe.LOGGING_IN : N.aUe.NONE),
        (j = ""),
        (Y = null),
        (H = !1),
        (q = !1),
        (Z = !1),
        ea();
}
class ec extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        if (((L = u.w.get(D)), (U = J()), null == s.getToken())) {
            let e = null == U || 0 === U.length,
                t = ee();
            if (e) {
                let e = () => {
                    (0, E.Tv)(null);
                };
                t.then(e, e);
            }
        }
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
        return g() ? U : null;
    }
    getAnalyticsToken() {
        return G ?? s.getAnalyticsToken();
    }
    getMFATicket() {
        return j;
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
        return z;
    }
    getIsPasswordlessActive() {
        return q;
    }
    attemptedPasswordLogin() {
        return Z;
    }
}
let ed = new ec(
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
                er(r),
                (L = t.id),
                void 0 !== s && (B = s.authenticator_types),
                u.w.set(D, t.id),
                o?.installation != null && eo({ type: "INSTALLATION_ID", installation: o.installation });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n, analyticsToken: i, token: r } = e;
            S.A.setUser(t.id, t.username, t.email ?? void 0, (0, A.A)(t)),
                (w = n),
                (G = i),
                ei(r, t.id),
                null != i && er(i),
                en(),
                (L = t.id),
                u.w.set(D, t.id);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            Q(`handleConnectionClosed called with code ${t}.`);
            let i = n(192308).hasModalOpen;
            if (4004 === t) {
                if (V || i(v.jc) || i(v.Uy)) return void el();
                I.default.track(N.HAw.APP_USER_DEAUTHENTICATED, { user_id: u.w.get(D) }),
                    eu(),
                    setImmediate(() => (0, m.pX)(N.BVt.DEFAULT_LOGGED_OUT));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (M = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            (F = N.aUe.LOGGING_IN), (Z = Z || !0 === t);
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            (F = N.aUe.NONE), ei(t), en(), (j = ""), (H = !1), (Y = null), (r = null), ea(), (q = !1);
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            (j = ""),
                (H = !1),
                (Y = null),
                (r = null),
                ea(),
                (F = null != (0, h.p)(t).date_of_birth ? N.aUe.LOGIN_AGE_GATE : N.aUe.NONE);
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: i, backup: s, totp: a, loginInstanceId: o } = e;
            null != t && ((j = t), (H = n), (Y = i ?? null), (K = s), (W = a), (r = o), ea()), (F = N.aUe.MFA_STEP);
        },
        LOGIN_MFA: function () {
            F = N.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            (F = N.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            (F = N.aUe.ACCOUNT_DISABLED), (i = e.credentials);
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            (F = N.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            (F = N.aUe.PHONE_IP_AUTHORIZATION), (i = e.credentials);
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            (F = N.aUe.NONE), (j = ""), (H = !1), (Y = null), (r = null), (i = null), t || (ea(), es(), ee(!1));
        },
        LOGIN_STATUS_RESET: function () {
            F = N.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            (q = !1), (z = t), setImmediate(() => (0, m.pX)(N.BVt.ACCOUNT_STANDING));
        },
        LOGOUT: eu,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == x
                ? null != t
                    ? (I.default.track(N.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != k ? (0, a.d)(k) : null,
                          new_fingerprint: (0, a.d)(t),
                      }),
                      (x = t),
                      (k = t),
                      u.w.set(O, x))
                    : ee()
                : null != t &&
                  x !== t &&
                  I.default.track(N.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
                      fingerprint: (0, a.d)(x),
                      dropped_fingerprint: (0, a.d)(t),
                  });
        },
        INSTALLATION_ID: eo,
        REGISTER_SUCCESS: function (e) {
            let { token: t } = e;
            ei(t), en();
        },
        FORGOT_PASSWORD_REQUEST: function () {
            F = N.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            F = N.aUe.NONE;
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
            (L = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), u.w.set(D, t.id);
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: el,
        CLOSE_SUSPENDED_USER: function () {
            (z = null), (F = N.aUe.NONE), eu(), setImmediate(() => (0, m.pX)(N.BVt.DEFAULT_LOGGED_OUT));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            (j = ""),
                (H = !1),
                (Y = null),
                (q = !1),
                (r = null),
                (F = t instanceof d.A && null != (0, h.W)(t).date_of_birth ? N.aUe.LOGIN_AGE_GATE : N.aUe.NONE);
        },
        PASSWORDLESS_START: function () {
            q = !0;
        },
    },
    c.A.Early,
);
