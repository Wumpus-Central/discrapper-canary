"use strict";
let i, r;
n.r(t), n.d(t, { default: () => ec }), n(321073), n(142703);
var s = n(247775),
    a = n(80703),
    o = n(17928),
    l = n(506774),
    u = n(228366),
    d = n(181658),
    c = n(155718);
new (n(683588).K)();
var _ = n(15552),
    h = n(53943),
    f = n(626584),
    E = n(620233),
    p = n(636537),
    m = n(652215),
    g = n(976860);
let A = function () {
    return !0;
};
var I = n(252919),
    T = n(174459),
    S = n(612181),
    N = n(38405),
    C = n(115036),
    y = n(536802),
    v = n(204925);
let R = new f.A("AuthenticationStore"),
    O = "fingerprint",
    b = "installation_id_v3",
    L = "user_id_cache",
    D = null,
    P = null,
    w = null,
    M = null,
    x = null,
    U = null,
    k = null,
    G = null,
    V = m.aUe.NONE,
    F = !1,
    B = [],
    j = "",
    H = !1,
    W = null,
    Y = !1,
    K = !1,
    $ = null,
    z = null,
    q = !1,
    Z = !1,
    X = [];
function Q(e) {
    let t = null != s.getToken(),
        n = null != l.w.get(m.ilC);
    R.verbose(e, { tokenManagerHasToken: t, storageHasToken: n });
}
function J() {
    let e = l.w.get(b);
    if (null != e && e.length > 0) return e;
    let t = l.w.get("analytics_installation");
    return null != t && t.length > 0 ? (l.w.set(b, t), t) : null;
}
function ee() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((x = l.w.get(O)), (k = J()), null != $)) return $;
    let t = null != x ? x : s.getToken();
    return !(0, g.m)() || (!e && null != t) || C.A.isHandoffAvailable()
        ? Promise.resolve()
        : et({ withGuildExperiments: !0 });
}
function et(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        i = T.default.getSuperPropertiesBase64();
    return (
        null != i && (n["X-Super-Properties"] = i),
        null != x && (n["X-Fingerprint"] = x),
        null != k && (n["X-Installation-ID"] = k),
        ($ = (function (e) {
            let { withGuildExperiments: t, headers: n, context: i } = e;
            return p.Bo.get({
                url: m.Rsh.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: i,
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        })({ withGuildExperiments: t, headers: n, context: { location: (0, g.SB)() } }).then(
            (e) => {
                let { fingerprint: t, assignments: n, guild_experiments: i, installation: r } = e.body;
                null != r && r.length > 0 && u.h.dispatch({ type: "INSTALLATION_ID", installation: r }),
                    t && u.h.dispatch({ type: "FINGERPRINT", fingerprint: t }),
                    u.h.dispatch({
                        type: "EXPERIMENTS_FETCH_SUCCESS",
                        fingerprint: t,
                        experiments: n,
                        guildExperiments: i,
                    }),
                    ($ = null);
            },
            () => {
                ($ = null), u.h.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
            },
        ))
    );
}
function en() {
    (U = x), (x = null), l.w.remove(O);
}
function ei(e, t) {
    Q("setAuthToken called."), (null == t || t !== D) && s.removeAnalyticsToken(), s.setToken(e, t);
}
function er(e) {
    (G = e), s.setAnalyticsToken(e);
}
function es() {
    return Q("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken();
}
function ea() {
    let e = [];
    null != W && e.push({ type: "webauthn", challenge: W }),
        Y && e.push({ type: "totp" }),
        K && e.push({ type: "backup" }),
        H && e.push({ type: "sms" }),
        (X = e);
}
function eo(e) {
    let { installation: t } = e;
    if (null != k && k.length > 0) return !1;
    (k = t), A() && l.w.set(b, t);
}
function el() {
    (F = !0),
        eu(),
        u.h.wait(() => {
            (0, g.pX)(m.BVt.REGISTER);
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
        y.A.clearAll(),
        h.IU(),
        N.A.clearUser(),
        l.w.remove(L),
        (D = null),
        (P = null),
        (V = e?.isSwitchingAccount ? m.aUe.LOGGING_IN : m.aUe.NONE),
        (j = ""),
        (W = null),
        (H = !1),
        (q = !1),
        (Z = !1),
        ea();
}
class ed extends o.Ay.Store {
    static displayName = "AuthenticationStore";
    initialize() {
        if (((D = l.w.get(L)), (k = J()), null == s.getToken())) {
            let e = null == k || 0 === k.length,
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
        return V;
    }
    getId() {
        return D;
    }
    getSessionId() {
        return P;
    }
    getAuthSessionIdHash() {
        return w;
    }
    getStaticAuthSessionId() {
        return M;
    }
    getToken() {
        return (0, S.gf)();
    }
    isAuthenticated() {
        return (0, S.wR)();
    }
    getFingerprint() {
        return x;
    }
    getInstallationForTracking() {
        return A() ? k : null;
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
        return z;
    }
    getIsPasswordlessActive() {
        return q;
    }
    attemptedPasswordLogin() {
        return Z;
    }
}
let ec = new ed(
    u.h,
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
                N.A.setUser(t.id, t.username, t.email ?? void 0, (0, I.A)(t)),
                (P = n),
                (w = i),
                (M = a),
                er(r),
                (D = t.id),
                void 0 !== s && (B = s.authenticator_types),
                l.w.set(L, t.id),
                o?.installation != null && eo({ type: "INSTALLATION_ID", installation: o.installation });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { user: t, sessionId: n, analyticsToken: i, token: r } = e;
            N.A.setUser(t.id, t.username, t.email ?? void 0, (0, I.A)(t)),
                (P = n),
                (G = i),
                ei(r, t.id),
                null != i && er(i),
                en(),
                (D = t.id),
                l.w.set(L, t.id);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            Q(`handleConnectionClosed called with code ${t}.`);
            let i = n(192308).hasModalOpen;
            if (4004 === t) {
                if (F || i(v.jc) || i(v.Uy)) return void el();
                T.default.track(m.HAw.APP_USER_DEAUTHENTICATED, { user_id: l.w.get(L) }),
                    eu(),
                    setImmediate(() => (0, g.pX)(m.BVt.DEFAULT_LOGGED_OUT));
            }
        },
        AUTH_SESSION_CHANGE: function (e) {
            let { authSessionIdHash: t } = e;
            null != t && (w = t);
        },
        LOGIN: function (e) {
            let { isPasswordAttempt: t } = e;
            (V = m.aUe.LOGGING_IN), (Z = Z || !0 === t);
        },
        LOGIN_SUCCESS: function (e) {
            let { token: t } = e;
            (V = m.aUe.NONE), ei(t), en(), (j = ""), (H = !1), (W = null), (r = null), ea(), (q = !1);
        },
        LOGIN_FAILURE: function (e) {
            let { error: t } = e;
            (j = ""),
                (H = !1),
                (W = null),
                (r = null),
                ea(),
                (V = null != (0, _.p)(t).date_of_birth ? m.aUe.LOGIN_AGE_GATE : m.aUe.NONE);
        },
        LOGIN_MFA_STEP: function (e) {
            let { ticket: t, sms: n, webauthn: i, backup: s, totp: a, loginInstanceId: o } = e;
            null != t && ((j = t), (H = n), (W = i ?? null), (K = s), (Y = a), (r = o), ea()), (V = m.aUe.MFA_STEP);
        },
        LOGIN_MFA: function () {
            V = m.aUe.LOGGING_IN_MFA;
        },
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
            (V = m.aUe.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
        },
        LOGIN_ACCOUNT_DISABLED: function (e) {
            (V = m.aUe.ACCOUNT_DISABLED), (i = e.credentials);
        },
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function (e) {
            (V = m.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
        },
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function (e) {
            (V = m.aUe.PHONE_IP_AUTHORIZATION), (i = e.credentials);
        },
        LOGIN_RESET: function (e) {
            let { isMultiAccount: t } = e;
            (V = m.aUe.NONE), (j = ""), (H = !1), (W = null), (r = null), (i = null), t || (ea(), es(), ee(!1));
        },
        LOGIN_STATUS_RESET: function () {
            V = m.aUe.NONE;
        },
        LOGIN_SUSPENDED_USER: function (e) {
            let { suspendedUserToken: t } = e;
            (q = !1), (z = t), setImmediate(() => (0, g.pX)(m.BVt.ACCOUNT_STANDING));
        },
        LOGOUT: eu,
        FINGERPRINT: function (e) {
            let t = e.fingerprint;
            null == x
                ? null != t
                    ? (T.default.track(m.HAw.USER_FINGERPRINT_CHANGED, {
                          old_fingerprint: null != U ? (0, a.d)(U) : null,
                          new_fingerprint: (0, a.d)(t),
                      }),
                      (x = t),
                      (U = t),
                      l.w.set(O, x))
                    : ee()
                : null != t &&
                  x !== t &&
                  T.default.track(m.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
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
            V = m.aUe.FORGOT_PASSWORD;
        },
        FORGOT_PASSWORD_SENT: function () {
            V = m.aUe.NONE;
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
            (D = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), l.w.set(L, t.id);
        },
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: el,
        CLOSE_SUSPENDED_USER: function () {
            (z = null), (V = m.aUe.NONE), eu(), setImmediate(() => (0, g.pX)(m.BVt.DEFAULT_LOGGED_OUT));
        },
        PASSWORDLESS_FAILURE: function (e) {
            let { error: t } = e;
            (j = ""),
                (H = !1),
                (W = null),
                (q = !1),
                (r = null),
                (V = t instanceof d.A && null != (0, _.W)(t).date_of_birth ? m.aUe.LOGIN_AGE_GATE : m.aUe.NONE);
        },
        PASSWORDLESS_START: function () {
            q = !0;
        },
    },
    u.A.Early,
);
