let r, i;
n.r(t), n.d(t, { default: () => ex }), n(539854), n(358797), n(415506);
var a,
    o = n(213919),
    s = n(756647),
    l = n(442837),
    c = n(544891),
    u = n(433517),
    d = n(570140),
    f = n(911969),
    _ = n(109728),
    p = n(254942),
    h = n(670890),
    m = n(569611),
    g = n(710845),
    E = n(703656),
    b = n(786213),
    y = n(626135),
    O = n(449934),
    v = n(960048),
    I = n(117240),
    T = n(750041),
    S = n(981631),
    A = n(723359);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let N = new g.Z("AuthenticationStore"),
    R = "fingerprint",
    P = "user_id_cache",
    D = null,
    w = null,
    x = null,
    L = null,
    M = null,
    j = null,
    k = null,
    U = S.u34.NONE,
    G = !1,
    B = [],
    Z = "",
    F = !1,
    V = null,
    H = !1,
    Y = !1,
    W = null,
    K = null,
    z = !1,
    q = !1,
    X = [];
function Q(e) {
    let t = null != o.getToken(),
        n = null != u.K.get(S.B1h);
    N.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n,
    });
}
function J() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((M = u.K.get(R)), null != W)) return W;
    let t = null != M ? M : o.getToken();
    !(0, E.m1)() || (!e && null != t) || I.Z.isHandoffAvailable() || $({ withGuildExperiments: !0 });
}
function $(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = y.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != M && (n["X-Fingerprint"] = M),
        (W = c.tn
            .get({
                url: S.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, E.Wf)() },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(
                (e) => {
                    let { fingerprint: t, assignments: n, guild_experiments: r } = e.body;
                    t &&
                        d.Z.dispatch({
                            type: "FINGERPRINT",
                            fingerprint: t,
                        }),
                        d.Z.dispatch({
                            type: "EXPERIMENTS_FETCH_SUCCESS",
                            fingerprint: t,
                            experiments: n,
                            guildExperiments: r,
                        }),
                        (W = null),
                        (0, _.$L)();
                },
                () => {
                    (W = null), d.Z.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
                },
            ));
}
function ee() {
    (j = M), (M = null), u.K.remove(R);
}
function et(e, t) {
    Q("setAuthToken called."), (null == t || t !== D) && o.removeAnalyticsToken(), o.setToken(e, t);
}
function en(e) {
    (k = e), o.setAnalyticsToken(e);
}
function er() {
    return Q("removeAuthToken called."), o.removeAnalyticsToken(), o.removeToken();
}
function ei(e) {
    let { isPasswordAttempt: t } = e;
    (U = S.u34.LOGGING_IN), (q = q || !0 === t);
}
function ea(e) {
    let { isMultiAccount: t } = e;
    (U = S.u34.NONE), (Z = ""), (F = !1), (V = null), (i = null), (r = null), t || (ed(), er(), J(!1));
}
function eo() {
    U = S.u34.NONE;
}
function es(e) {
    let { token: t } = e;
    (U = S.u34.NONE), et(t), ee(), (Z = ""), (F = !1), (V = null), (i = null), ed(), (z = !1);
}
function el(e) {
    let { error: t } = e;
    (Z = ""),
        (F = !1),
        (V = null),
        (i = null),
        ed(),
        (U = null != (0, p.p)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE);
}
function ec() {
    z = !0;
}
function eu(e) {
    let { error: t } = e;
    (Z = ""),
        (F = !1),
        (V = null),
        (z = !1),
        (i = null),
        (U = null != (0, p.F)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE);
}
function ed() {
    let e = [];
    null != V &&
        e.push({
            type: "webauthn",
            challenge: V,
        }),
        H && e.push({ type: "totp" }),
        Y && e.push({ type: "backup" }),
        F && e.push({ type: "sms" }),
        (X = e);
}
function ef(e) {
    let { ticket: t, sms: n, webauthn: r, backup: a, totp: o, loginInstanceId: s } = e;
    null != t && ((Z = t), (F = n), (V = null != r ? r : null), (Y = a), (H = o), (i = s), ed()), (U = S.u34.MFA_STEP);
}
function e_() {
    U = S.u34.LOGGING_IN_MFA;
}
function ep(e) {
    (U = S.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eh(e) {
    (U = S.u34.ACCOUNT_DISABLED), (r = e.credentials);
}
function em(e) {
    (U = S.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function eg(e) {
    (U = S.u34.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eE(e) {
    let t = e.fingerprint;
    null == M
        ? null != t
            ? (y.default.track(S.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != j ? (0, s.s)(j) : null,
                  new_fingerprint: (0, s.s)(t),
              }),
              (M = t),
              (j = t),
              u.K.set(R, M))
            : J()
        : null != t &&
          M !== t &&
          y.default.track(S.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, s.s)(M),
              dropped_fingerprint: (0, s.s)(t),
          });
}
function eb(e) {
    let { token: t } = e;
    et(t), ee();
}
function ey(e) {
    var t;
    let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: a, auth: o, staticAuthSessionId: s } = e;
    Q("handleConnectionOpen called"),
        v.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, b.Z)(n)),
        (w = r),
        (x = i),
        (L = s),
        en(a),
        (D = n.id),
        void 0 !== o && (B = o.authenticator_types),
        u.K.set(P, n.id);
}
function eO(e) {
    var t;
    let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
    v.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, b.Z)(n)),
        (w = r),
        (k = i),
        et(a, n.id),
        null != i && en(i),
        ee(),
        (D = n.id),
        u.K.set(P, n.id);
}
function ev(e) {
    let { code: t } = e;
    Q("handleConnectionClosed called with code ".concat(t, "."));
    let r = n(952265).nf;
    if (4004 === t) {
        if (G || r(A.$$) || r(A.dG)) return void eS();
        y.default.track(S.rMx.APP_USER_DEAUTHENTICATED, { user_id: u.K.get(P) }),
            eA(),
            setImmediate(() => (0, E.uL)(S.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eI(e) {
    let { token: t, userId: n } = e;
    Q("handleUpdateToken called"), et(t, n), ee();
}
function eT(e) {
    let { authSessionIdHash: t } = e;
    null != t && (x = t);
}
function eS() {
    (G = !0),
        eA(),
        d.Z.wait(() => {
            (0, E.uL)(S.Z5c.REGISTER);
        });
}
function eA(e) {
    var t;
    Q("handleLogout called.");
    let n = er();
    (null != (t = null == e ? void 0 : e.isSwitchingAccount) && t) || (n && ee(), J()),
        l.ZP.PersistedStore.clearAll({
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
            type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all",
        }),
        T.Z.clearAll(),
        m.ZH(),
        v.Z.clearUser(),
        u.K.remove(P),
        (D = null),
        (w = null),
        (U = (null == e ? void 0 : e.isSwitchingAccount) ? S.u34.LOGGING_IN : S.u34.NONE),
        (Z = ""),
        (V = null),
        (F = !1),
        (z = !1),
        (q = !1),
        ed();
}
function eC() {
    U = S.u34.FORGOT_PASSWORD;
}
function eN() {
    U = S.u34.NONE;
}
function eR(e) {
    let { user: t } = e;
    (D = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), u.K.set(P, t.id);
}
function eP(e) {
    let { suspendedUserToken: t } = e;
    (z = !1), (K = t), setImmediate(() => (0, E.uL)(S.Z5c.ACCOUNT_STANDING));
}
function eD() {
    (K = null), (U = S.u34.NONE), eA(), setImmediate(() => (0, E.uL)(S.Z5c.DEFAULT_LOGGED_OUT));
}
class ew extends (a = l.ZP.Store) {
    initialize() {
        (D = u.K.get(P)), null == o.getToken() && J(), this.addChangeListener(() => (0, h.u)(D));
    }
    getLoginStatus() {
        return U;
    }
    getId() {
        return D;
    }
    getSessionId() {
        return w;
    }
    getAuthSessionIdHash() {
        return x;
    }
    getStaticAuthSessionId() {
        return L;
    }
    getToken() {
        return (0, O.LP)();
    }
    isAuthenticated() {
        return (0, O.$8)();
    }
    getFingerprint() {
        return M;
    }
    getAnalyticsToken() {
        return null != k ? k : o.getAnalyticsToken();
    }
    getMFATicket() {
        return Z;
    }
    getMFAMethods() {
        return X;
    }
    getLoginInstanceId() {
        return i;
    }
    hasTOTPEnabled() {
        return B.includes(f.Pi.TOTP);
    }
    getCredentials() {
        if (null == r) throw Error("no credentials");
        return r;
    }
    allowLogoutRedirect() {
        return !G;
    }
    getSuspendedUserToken() {
        return K;
    }
    getIsPasswordlessActive() {
        return z;
    }
    attemptedPasswordLogin() {
        return q;
    }
}
C(ew, "displayName", "AuthenticationStore");
let ex = new ew(
    d.Z,
    {
        CONNECTION_OPEN: ey,
        OVERLAY_INITIALIZE: eO,
        CONNECTION_CLOSED: ev,
        AUTH_SESSION_CHANGE: eT,
        LOGIN: ei,
        LOGIN_SUCCESS: es,
        LOGIN_FAILURE: el,
        LOGIN_MFA_STEP: ef,
        LOGIN_MFA: e_,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: ep,
        LOGIN_ACCOUNT_DISABLED: eh,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: em,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eg,
        LOGIN_RESET: ea,
        LOGIN_STATUS_RESET: eo,
        LOGIN_SUSPENDED_USER: eP,
        LOGOUT: eA,
        FINGERPRINT: eE,
        REGISTER_SUCCESS: eb,
        FORGOT_PASSWORD_REQUEST: eC,
        FORGOT_PASSWORD_SENT: eN,
        UPDATE_TOKEN: eI,
        EXPERIMENTS_FETCH: $,
        CURRENT_USER_UPDATE: eR,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eS,
        CLOSE_SUSPENDED_USER: eD,
        PASSWORDLESS_FAILURE: eu,
        PASSWORDLESS_START: ec,
    },
    d.c.Early,
);
