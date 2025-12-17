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
    p = n(109728),
    _ = n(254942),
    m = n(670890),
    h = n(569611),
    g = n(710845),
    E = n(703656),
    b = n(625143),
    y = n(786213),
    O = n(626135),
    v = n(449934),
    S = n(960048),
    I = n(117240),
    T = n(750041),
    C = n(981631),
    A = n(723359);
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
let P = new g.Z("AuthenticationStore"),
    R = "fingerprint",
    w = "analytics_installation",
    D = "user_id_cache",
    x = null,
    L = null,
    j = null,
    M = null,
    k = null,
    U = null,
    G = null,
    Z = null,
    F = C.u34.NONE,
    B = !1,
    V = [],
    H = "",
    Y = !1,
    W = null,
    K = !1,
    z = !1,
    q = null,
    Q = null,
    X = !1,
    J = !1,
    $ = [];
function ee(e) {
    let t = null != o.getToken(),
        n = null != u.K.get(C.B1h);
    P.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n,
    });
}
function et() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((k = u.K.get(R)), (G = null != (e = u.K.get(w)) ? e : null), null != q)) return q;
    let n = null != k ? k : o.getToken();
    !(0, E.m1)() || (!t && null != n) || I.Z.isHandoffAvailable() || en({ withGuildExperiments: !0 });
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
                url: C.ANM.EXPERIMENTS,
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
                        (0, p.$L)();
                },
                () => {
                    (q = null), d.Z.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
                },
            ));
}
function er() {
    (U = k), (k = null), u.K.remove(R);
}
function ei(e, t) {
    ee("setAuthToken called."), (null == t || t !== x) && o.removeAnalyticsToken(), o.setToken(e, t);
}
function ea(e) {
    (Z = e), o.setAnalyticsToken(e);
}
function eo() {
    return ee("removeAuthToken called."), o.removeAnalyticsToken(), o.removeToken();
}
function es(e) {
    let { isPasswordAttempt: t } = e;
    (F = C.u34.LOGGING_IN), (J = J || !0 === t);
}
function el(e) {
    let { isMultiAccount: t } = e;
    (F = C.u34.NONE), (H = ""), (Y = !1), (W = null), (i = null), (r = null), t || (e_(), eo(), et(!1));
}
function ec() {
    F = C.u34.NONE;
}
function eu(e) {
    let { token: t } = e;
    (F = C.u34.NONE), ei(t), er(), (H = ""), (Y = !1), (W = null), (i = null), e_(), (X = !1);
}
function ed(e) {
    let { error: t } = e;
    (H = ""),
        (Y = !1),
        (W = null),
        (i = null),
        e_(),
        (F = null != (0, _.p)(t).date_of_birth ? C.u34.LOGIN_AGE_GATE : C.u34.NONE);
}
function ef() {
    X = !0;
}
function ep(e) {
    let { error: t } = e;
    (H = ""),
        (Y = !1),
        (W = null),
        (X = !1),
        (i = null),
        (F = null != (0, _.F)(t).date_of_birth ? C.u34.LOGIN_AGE_GATE : C.u34.NONE);
}
function e_() {
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
function em(e) {
    let { ticket: t, sms: n, webauthn: r, backup: a, totp: o, loginInstanceId: s } = e;
    null != t && ((H = t), (Y = n), (W = null != r ? r : null), (z = a), (K = o), (i = s), e_()), (F = C.u34.MFA_STEP);
}
function eh() {
    F = C.u34.LOGGING_IN_MFA;
}
function eg(e) {
    (F = C.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eE(e) {
    (F = C.u34.ACCOUNT_DISABLED), (r = e.credentials);
}
function eb(e) {
    (F = C.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function ey(e) {
    (F = C.u34.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eO(e) {
    let t = e.fingerprint;
    null == k
        ? null != t
            ? (O.default.track(C.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != U ? (0, s.s)(U) : null,
                  new_fingerprint: (0, s.s)(t),
              }),
              (k = t),
              (U = t),
              u.K.set(R, k))
            : et()
        : null != t &&
          k !== t &&
          O.default.track(C.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, s.s)(k),
              dropped_fingerprint: (0, s.s)(t),
          });
}
function ev(e) {
    let { installation: t } = e;
    if (null != G && G.length > 0) return !1;
    (G = t), b.Z.canUseInstallationId() && u.K.set(w, t);
}
function eS(e) {
    let { token: t } = e;
    ei(t), er();
}
function eI(e) {
    var t;
    let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: a, auth: o, staticAuthSessionId: s } = e;
    ee("handleConnectionOpen called"),
        S.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, y.Z)(n)),
        (L = r),
        (j = i),
        (M = s),
        ea(a),
        (x = n.id),
        void 0 !== o && (V = o.authenticator_types),
        u.K.set(D, n.id);
}
function eT(e) {
    var t;
    let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
    S.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, y.Z)(n)),
        (L = r),
        (Z = i),
        ei(a, n.id),
        null != i && ea(i),
        er(),
        (x = n.id),
        u.K.set(D, n.id);
}
function eC(e) {
    let { code: t } = e;
    ee("handleConnectionClosed called with code ".concat(t, "."));
    let r = n(952265).hasModalOpen;
    if (4004 === t) {
        if (B || r(A.$$) || r(A.dG)) return void eP();
        O.default.track(C.rMx.APP_USER_DEAUTHENTICATED, { user_id: u.K.get(D) }),
            eR(),
            setImmediate(() => (0, E.uL)(C.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eA(e) {
    let { token: t, userId: n } = e;
    ee("handleUpdateToken called"), ei(t, n), er();
}
function eN(e) {
    let { authSessionIdHash: t } = e;
    null != t && (j = t);
}
function eP() {
    (B = !0),
        eR(),
        d.Z.wait(() => {
            (0, E.uL)(C.Z5c.REGISTER);
        });
}
function eR(e) {
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
        T.Z.clearAll(),
        h.ZH(),
        S.Z.clearUser(),
        u.K.remove(D),
        (x = null),
        (L = null),
        (F = (null == e ? void 0 : e.isSwitchingAccount) ? C.u34.LOGGING_IN : C.u34.NONE),
        (H = ""),
        (W = null),
        (Y = !1),
        (X = !1),
        (J = !1),
        e_();
}
function ew() {
    F = C.u34.FORGOT_PASSWORD;
}
function eD() {
    F = C.u34.NONE;
}
function ex(e) {
    let { user: t } = e;
    (x = t.id), void 0 !== t.authenticator_types && (V = t.authenticator_types), u.K.set(D, t.id);
}
function eL(e) {
    let { suspendedUserToken: t } = e;
    (X = !1), (Q = t), setImmediate(() => (0, E.uL)(C.Z5c.ACCOUNT_STANDING));
}
function ej() {
    (Q = null), (F = C.u34.NONE), eR(), setImmediate(() => (0, E.uL)(C.Z5c.DEFAULT_LOGGED_OUT));
}
class eM extends (a = l.ZP.Store) {
    initialize() {
        (x = u.K.get(D)), null == o.getToken() && et(), this.addChangeListener(() => (0, m.u)(x));
    }
    getLoginStatus() {
        return F;
    }
    getId() {
        return x;
    }
    getSessionId() {
        return L;
    }
    getAuthSessionIdHash() {
        return j;
    }
    getStaticAuthSessionId() {
        return M;
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
        return null != Z ? Z : o.getAnalyticsToken();
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
        return !B;
    }
    getSuspendedUserToken() {
        return Q;
    }
    getIsPasswordlessActive() {
        return X;
    }
    attemptedPasswordLogin() {
        return J;
    }
}
N(eM, "displayName", "AuthenticationStore");
let ek = new eM(
    d.Z,
    {
        CONNECTION_OPEN: eI,
        OVERLAY_INITIALIZE: eT,
        CONNECTION_CLOSED: eC,
        AUTH_SESSION_CHANGE: eN,
        LOGIN: es,
        LOGIN_SUCCESS: eu,
        LOGIN_FAILURE: ed,
        LOGIN_MFA_STEP: em,
        LOGIN_MFA: eh,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eg,
        LOGIN_ACCOUNT_DISABLED: eE,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eb,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: ey,
        LOGIN_RESET: el,
        LOGIN_STATUS_RESET: ec,
        LOGIN_SUSPENDED_USER: eL,
        LOGOUT: eR,
        FINGERPRINT: eO,
        INSTALLATION_DEFINED: ev,
        REGISTER_SUCCESS: eS,
        FORGOT_PASSWORD_REQUEST: ew,
        FORGOT_PASSWORD_SENT: eD,
        UPDATE_TOKEN: eA,
        EXPERIMENTS_FETCH: en,
        CURRENT_USER_UPDATE: ex,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eP,
        CLOSE_SUSPENDED_USER: ej,
        PASSWORDLESS_FAILURE: ep,
        PASSWORDLESS_START: ef,
    },
    d.c.Early,
);
