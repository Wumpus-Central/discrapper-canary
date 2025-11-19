let r, i;
n.r(t), n.d(t, { default: () => ek }), n(539854), n(358797), n(415506);
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
    b = n(625143),
    y = n(786213),
    O = n(626135),
    v = n(449934),
    I = n(960048),
    T = n(117240),
    S = n(750041),
    A = n(981631),
    C = n(723359);
function N(e, t, n) {
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
let R = new g.Z("AuthenticationStore"),
    P = "fingerprint",
    D = "analytics_installation",
    w = "user_id_cache",
    L = null,
    x = null,
    M = null,
    j = null,
    k = null,
    U = null,
    G = null,
    B = null,
    Z = A.u34.NONE,
    F = !1,
    V = [],
    H = "",
    Y = !1,
    W = null,
    K = !1,
    z = !1,
    q = null,
    X = null,
    Q = !1,
    J = !1,
    $ = [];
function ee(e) {
    let t = null != o.getToken(),
        n = null != u.K.get(A.B1h);
    R.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n,
    });
}
function et() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((k = u.K.get(P)), (G = null != (e = u.K.get(D)) ? e : null), null != q)) return q;
    let n = null != k ? k : o.getToken();
    !(0, E.m1)() || (!t && null != n) || T.Z.isHandoffAvailable() || en({ withGuildExperiments: !0 });
}
function en(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = O.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != k && (n["X-Fingerprint"] = k),
        null != G && (n["X-Installation-ID"] = G),
        (q = c.tn
            .get({
                url: A.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, E.Wf)() },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(
                (e) => {
                    let { fingerprint: t, installation: n, assignments: r, guild_experiments: i } = e.body;
                    t &&
                        d.Z.dispatch({
                            type: "FINGERPRINT",
                            fingerprint: t,
                        }),
                        n &&
                            d.Z.dispatch({
                                type: "INSTALLATION_DEFINED",
                                installation: n,
                            }),
                        d.Z.dispatch({
                            type: "EXPERIMENTS_FETCH_SUCCESS",
                            fingerprint: t,
                            experiments: r,
                            guildExperiments: i,
                        }),
                        (q = null),
                        (0, _.$L)();
                },
                () => {
                    (q = null), d.Z.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
                },
            ));
}
function er() {
    (U = k), (k = null), u.K.remove(P);
}
function ei(e, t) {
    ee("setAuthToken called."), (null == t || t !== L) && o.removeAnalyticsToken(), o.setToken(e, t);
}
function ea(e) {
    (B = e), o.setAnalyticsToken(e);
}
function eo() {
    return ee("removeAuthToken called."), o.removeAnalyticsToken(), o.removeToken();
}
function es(e) {
    let { isPasswordAttempt: t } = e;
    (Z = A.u34.LOGGING_IN), (J = J || !0 === t);
}
function el(e) {
    let { isMultiAccount: t } = e;
    (Z = A.u34.NONE), (H = ""), (Y = !1), (W = null), (i = null), (r = null), t || (ep(), eo(), et(!1));
}
function ec() {
    Z = A.u34.NONE;
}
function eu(e) {
    let { token: t } = e;
    (Z = A.u34.NONE), ei(t), er(), (H = ""), (Y = !1), (W = null), (i = null), ep(), (Q = !1);
}
function ed(e) {
    let { error: t } = e;
    (H = ""),
        (Y = !1),
        (W = null),
        (i = null),
        ep(),
        (Z = null != (0, p.p)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE);
}
function ef() {
    Q = !0;
}
function e_(e) {
    let { error: t } = e;
    (H = ""),
        (Y = !1),
        (W = null),
        (Q = !1),
        (i = null),
        (Z = null != (0, p.F)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE);
}
function ep() {
    let e = [];
    null != W &&
        e.push({
            type: "webauthn",
            challenge: W,
        }),
        K && e.push({ type: "totp" }),
        z && e.push({ type: "backup" }),
        Y && e.push({ type: "sms" }),
        ($ = e);
}
function eh(e) {
    let { ticket: t, sms: n, webauthn: r, backup: a, totp: o, loginInstanceId: s } = e;
    null != t && ((H = t), (Y = n), (W = null != r ? r : null), (z = a), (K = o), (i = s), ep()), (Z = A.u34.MFA_STEP);
}
function em() {
    Z = A.u34.LOGGING_IN_MFA;
}
function eg(e) {
    (Z = A.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eE(e) {
    (Z = A.u34.ACCOUNT_DISABLED), (r = e.credentials);
}
function eb(e) {
    (Z = A.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function ey(e) {
    (Z = A.u34.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eO(e) {
    let t = e.fingerprint;
    null == k
        ? null != t
            ? (O.default.track(A.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != U ? (0, s.s)(U) : null,
                  new_fingerprint: (0, s.s)(t),
              }),
              (k = t),
              (U = t),
              u.K.set(P, k))
            : et()
        : null != t &&
          k !== t &&
          O.default.track(A.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, s.s)(k),
              dropped_fingerprint: (0, s.s)(t),
          });
}
function ev(e) {
    let { installation: t } = e;
    if (null != G && G.length > 0) return !1;
    (G = t), b.Z.canUseInstallationId() && u.K.set(D, t);
}
function eI(e) {
    let { token: t } = e;
    ei(t), er();
}
function eT(e) {
    var t;
    let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: a, auth: o, staticAuthSessionId: s } = e;
    ee("handleConnectionOpen called"),
        I.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, y.Z)(n)),
        (x = r),
        (M = i),
        (j = s),
        ea(a),
        (L = n.id),
        void 0 !== o && (V = o.authenticator_types),
        u.K.set(w, n.id);
}
function eS(e) {
    var t;
    let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
    I.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, y.Z)(n)),
        (x = r),
        (B = i),
        ei(a, n.id),
        null != i && ea(i),
        er(),
        (L = n.id),
        u.K.set(w, n.id);
}
function eA(e) {
    let { code: t } = e;
    ee("handleConnectionClosed called with code ".concat(t, "."));
    let r = n(952265).nf;
    if (4004 === t) {
        if (F || r(C.$$) || r(C.dG)) return void eR();
        O.default.track(A.rMx.APP_USER_DEAUTHENTICATED, { user_id: u.K.get(w) }),
            eP(),
            setImmediate(() => (0, E.uL)(A.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eC(e) {
    let { token: t, userId: n } = e;
    ee("handleUpdateToken called"), ei(t, n), er();
}
function eN(e) {
    let { authSessionIdHash: t } = e;
    null != t && (M = t);
}
function eR() {
    (F = !0),
        eP(),
        d.Z.wait(() => {
            (0, E.uL)(A.Z5c.REGISTER);
        });
}
function eP(e) {
    var t;
    ee("handleLogout called.");
    let n = eo();
    (null != (t = null == e ? void 0 : e.isSwitchingAccount) && t) || (n && er(), et()),
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
        S.Z.clearAll(),
        m.ZH(),
        I.Z.clearUser(),
        u.K.remove(w),
        (L = null),
        (x = null),
        (Z = (null == e ? void 0 : e.isSwitchingAccount) ? A.u34.LOGGING_IN : A.u34.NONE),
        (H = ""),
        (W = null),
        (Y = !1),
        (Q = !1),
        (J = !1),
        ep();
}
function eD() {
    Z = A.u34.FORGOT_PASSWORD;
}
function ew() {
    Z = A.u34.NONE;
}
function eL(e) {
    let { user: t } = e;
    (L = t.id), void 0 !== t.authenticator_types && (V = t.authenticator_types), u.K.set(w, t.id);
}
function ex(e) {
    let { suspendedUserToken: t } = e;
    (Q = !1), (X = t), setImmediate(() => (0, E.uL)(A.Z5c.ACCOUNT_STANDING));
}
function eM() {
    (X = null), (Z = A.u34.NONE), eP(), setImmediate(() => (0, E.uL)(A.Z5c.DEFAULT_LOGGED_OUT));
}
class ej extends (a = l.ZP.Store) {
    initialize() {
        (L = u.K.get(w)), null == o.getToken() && et(), this.addChangeListener(() => (0, h.u)(L));
    }
    getLoginStatus() {
        return Z;
    }
    getId() {
        return L;
    }
    getSessionId() {
        return x;
    }
    getAuthSessionIdHash() {
        return M;
    }
    getStaticAuthSessionId() {
        return j;
    }
    getToken() {
        return (0, v.LP)();
    }
    isAuthenticated() {
        return (0, v.$8)();
    }
    getFingerprint() {
        return k;
    }
    getInstallationForTracking() {
        return b.Z.canUseInstallationId() ? G : null;
    }
    getAnalyticsToken() {
        return null != B ? B : o.getAnalyticsToken();
    }
    getMFATicket() {
        return H;
    }
    getMFAMethods() {
        return $;
    }
    getLoginInstanceId() {
        return i;
    }
    hasTOTPEnabled() {
        return V.includes(f.Pi.TOTP);
    }
    getCredentials() {
        if (null == r) throw Error("no credentials");
        return r;
    }
    allowLogoutRedirect() {
        return !F;
    }
    getSuspendedUserToken() {
        return X;
    }
    getIsPasswordlessActive() {
        return Q;
    }
    attemptedPasswordLogin() {
        return J;
    }
}
N(ej, "displayName", "AuthenticationStore");
let ek = new ej(
    d.Z,
    {
        CONNECTION_OPEN: eT,
        OVERLAY_INITIALIZE: eS,
        CONNECTION_CLOSED: eA,
        AUTH_SESSION_CHANGE: eN,
        LOGIN: es,
        LOGIN_SUCCESS: eu,
        LOGIN_FAILURE: ed,
        LOGIN_MFA_STEP: eh,
        LOGIN_MFA: em,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eg,
        LOGIN_ACCOUNT_DISABLED: eE,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eb,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: ey,
        LOGIN_RESET: el,
        LOGIN_STATUS_RESET: ec,
        LOGIN_SUSPENDED_USER: ex,
        LOGOUT: eP,
        FINGERPRINT: eO,
        INSTALLATION_DEFINED: ev,
        REGISTER_SUCCESS: eI,
        FORGOT_PASSWORD_REQUEST: eD,
        FORGOT_PASSWORD_SENT: ew,
        UPDATE_TOKEN: eC,
        EXPERIMENTS_FETCH: en,
        CURRENT_USER_UPDATE: eL,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eR,
        CLOSE_SUSPENDED_USER: eM,
        PASSWORDLESS_FAILURE: e_,
        PASSWORDLESS_START: ef,
    },
    d.c.Early,
);
