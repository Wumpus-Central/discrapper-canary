let r, i;
n.r(t), n.d(t, { default: () => eU }), n(539854), n(358797), n(415506);
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
    E = n(872780),
    b = n(703656),
    y = n(625143),
    O = n(786213),
    v = n(626135),
    S = n(449934),
    I = n(960048),
    T = n(117240),
    C = n(750041),
    A = n(981631),
    N = n(723359);
function P(e, t, n) {
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
    w = "fingerprint",
    D = "analytics_installation",
    x = "user_id_cache",
    L = null,
    j = null,
    M = null,
    k = null,
    U = null,
    G = null,
    Z = null,
    F = null,
    B = A.u34.NONE,
    V = !1,
    H = [],
    Y = "",
    W = !1,
    K = null,
    z = !1,
    q = !1,
    Q = null,
    X = null,
    J = !1,
    $ = !1,
    ee = [];
function et(e) {
    let t = null != o.getToken(),
        n = null != u.K.get(A.B1h);
    R.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n,
    });
}
function en() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((U = u.K.get(w)), (Z = null != (e = u.K.get(D)) ? e : null), null != Q)) return Q;
    let n = null != U ? U : o.getToken();
    !(0, b.m1)() || (!t && null != n) || T.Z.isHandoffAvailable() || er({ withGuildExperiments: !0 });
}
function er(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = v.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r),
        null != U && (n["X-Fingerprint"] = U),
        null != Z && (n["X-Installation-ID"] = Z),
        (Q = c.tn
            .get({
                url: A.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, b.Wf)() },
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
                        (Q = null),
                        (0, p.$L)();
                },
                () => {
                    (Q = null), d.Z.dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
                },
            ));
}
function ei() {
    (G = U), (U = null), u.K.remove(w);
}
function ea(e, t) {
    et("setAuthToken called."), (null == t || t !== L) && o.removeAnalyticsToken(), o.setToken(e, t);
}
function eo(e) {
    (F = e), o.setAnalyticsToken(e);
}
function es() {
    return et("removeAuthToken called."), o.removeAnalyticsToken(), o.removeToken();
}
function el(e) {
    let { isPasswordAttempt: t } = e;
    (B = A.u34.LOGGING_IN), ($ = $ || !0 === t);
}
function ec(e) {
    let { isMultiAccount: t } = e;
    (B = A.u34.NONE), (Y = ""), (W = !1), (K = null), (i = null), (r = null), t || (em(), es(), en(!1));
}
function eu() {
    B = A.u34.NONE;
}
function ed(e) {
    let { token: t } = e;
    (B = A.u34.NONE), ea(t), ei(), (Y = ""), (W = !1), (K = null), (i = null), em(), (J = !1);
}
function ef(e) {
    let { error: t } = e;
    (Y = ""),
        (W = !1),
        (K = null),
        (i = null),
        em(),
        (B = null != (0, _.p)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE);
}
function ep() {
    J = !0;
}
function e_(e) {
    let { error: t } = e;
    (Y = ""),
        (W = !1),
        (K = null),
        (J = !1),
        (i = null),
        (B = null != (0, _.F)(t).date_of_birth ? A.u34.LOGIN_AGE_GATE : A.u34.NONE);
}
function em() {
    let e = [];
    null != K &&
        e.push({
            type: "webauthn",
            challenge: K,
        }),
        z && e.push({ type: "totp" }),
        q && e.push({ type: "backup" }),
        W && e.push({ type: "sms" }),
        (ee = e);
}
function eh(e) {
    let { ticket: t, sms: n, webauthn: r, backup: a, totp: o, loginInstanceId: s } = e;
    null != t && ((Y = t), (W = n), (K = null != r ? r : null), (q = a), (z = o), (i = s), em()), (B = A.u34.MFA_STEP);
}
function eg() {
    B = A.u34.LOGGING_IN_MFA;
}
function eE(e) {
    (B = A.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function eb(e) {
    (B = A.u34.ACCOUNT_DISABLED), (r = e.credentials);
}
function ey(e) {
    (B = A.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function eO(e) {
    (B = A.u34.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function ev(e) {
    let t = e.fingerprint;
    null == U
        ? null != t
            ? (v.default.track(A.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != G ? (0, s.s)(G) : null,
                  new_fingerprint: (0, s.s)(t),
              }),
              (U = t),
              (G = t),
              u.K.set(w, U))
            : en()
        : null != t &&
          U !== t &&
          v.default.track(A.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, s.s)(U),
              dropped_fingerprint: (0, s.s)(t),
          });
}
function eS(e) {
    let { installation: t } = e;
    if (null != Z && Z.length > 0) return !1;
    (Z = t), y.Z.canUseInstallationId() && u.K.set(D, t);
}
function eI(e) {
    let { token: t } = e;
    ea(t), ei();
}
function eT(e) {
    var t;
    let {
        user: n,
        sessionId: r,
        authSessionIdHash: i,
        analyticsToken: a,
        auth: o,
        staticAuthSessionId: s,
        apexExperiments: l,
    } = e;
    et("handleConnectionOpen called"),
        I.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, O.Z)(n)),
        (j = r),
        (M = i),
        (k = s),
        eo(a),
        (L = n.id),
        void 0 !== o && (H = o.authenticator_types),
        u.K.set(x, n.id),
        (null == l ? void 0 : l.installation) != null &&
            eS({
                type: "INSTALLATION_ID",
                installation: l.installation,
            });
}
function eC(e) {
    var t;
    let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
    I.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, O.Z)(n)),
        (j = r),
        (F = i),
        ea(a, n.id),
        null != i && eo(i),
        ei(),
        (L = n.id),
        u.K.set(x, n.id);
}
function eA(e) {
    let { code: t } = e;
    et("handleConnectionClosed called with code ".concat(t, "."));
    let r = n(952265).hasModalOpen;
    if (4004 === t) {
        if (V || r(N.$$) || r(N.dG)) return void eR();
        v.default.track(A.rMx.APP_USER_DEAUTHENTICATED, { user_id: u.K.get(x) }),
            ew(),
            setImmediate(() => (0, b.uL)(A.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eN(e) {
    let { token: t, userId: n } = e;
    et("handleUpdateToken called"), ea(t, n), ei();
}
function eP(e) {
    let { authSessionIdHash: t } = e;
    null != t && (M = t);
}
function eR() {
    (V = !0),
        ew(),
        d.Z.wait(() => {
            (0, b.uL)(A.Z5c.REGISTER);
        });
}
function ew(e) {
    var t;
    et("handleLogout called.");
    let n = es();
    (null != (t = null == e ? void 0 : e.isSwitchingAccount) && t) || (n && ei(), en()),
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
        C.Z.clearAll(),
        h.ZH(),
        I.Z.clearUser(),
        u.K.remove(x),
        (L = null),
        (j = null),
        (B = (null == e ? void 0 : e.isSwitchingAccount) ? A.u34.LOGGING_IN : A.u34.NONE),
        (Y = ""),
        (K = null),
        (W = !1),
        (J = !1),
        ($ = !1),
        em();
}
function eD() {
    B = A.u34.FORGOT_PASSWORD;
}
function ex() {
    B = A.u34.NONE;
}
function eL(e) {
    let { user: t } = e;
    (L = t.id), void 0 !== t.authenticator_types && (H = t.authenticator_types), u.K.set(x, t.id);
}
function ej(e) {
    let { suspendedUserToken: t } = e;
    (J = !1), (X = t), setImmediate(() => (0, b.uL)(A.Z5c.ACCOUNT_STANDING));
}
function eM() {
    (X = null), (B = A.u34.NONE), ew(), setImmediate(() => (0, b.uL)(A.Z5c.DEFAULT_LOGGED_OUT));
}
class ek extends (a = l.ZP.Store) {
    initialize() {
        var e;
        (L = u.K.get(x)),
            (Z = null != (e = u.K.get(D)) ? e : null),
            null == o.getToken() && (en(), (null == Z || 0 === Z.length) && (0, E.kI)(null)),
            this.addChangeListener(() => (0, m.u)(L));
    }
    getLoginStatus() {
        return B;
    }
    getId() {
        return L;
    }
    getSessionId() {
        return j;
    }
    getAuthSessionIdHash() {
        return M;
    }
    getStaticAuthSessionId() {
        return k;
    }
    getToken() {
        return (0, S.LP)();
    }
    isAuthenticated() {
        return (0, S.$8)();
    }
    getFingerprint() {
        return U;
    }
    getInstallationForTracking() {
        return y.Z.canUseInstallationId() ? Z : null;
    }
    getAnalyticsToken() {
        return null != F ? F : o.getAnalyticsToken();
    }
    getMFATicket() {
        return Y;
    }
    getMFAMethods() {
        return ee;
    }
    getLoginInstanceId() {
        return i;
    }
    hasTOTPEnabled() {
        return H.includes(f.Pi.TOTP);
    }
    getCredentials() {
        if (null == r) throw Error("no credentials");
        return r;
    }
    allowLogoutRedirect() {
        return !V;
    }
    getSuspendedUserToken() {
        return X;
    }
    getIsPasswordlessActive() {
        return J;
    }
    attemptedPasswordLogin() {
        return $;
    }
}
P(ek, "displayName", "AuthenticationStore");
let eU = new ek(
    d.Z,
    {
        CONNECTION_OPEN: eT,
        OVERLAY_INITIALIZE: eC,
        CONNECTION_CLOSED: eA,
        AUTH_SESSION_CHANGE: eP,
        LOGIN: el,
        LOGIN_SUCCESS: ed,
        LOGIN_FAILURE: ef,
        LOGIN_MFA_STEP: eh,
        LOGIN_MFA: eg,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eE,
        LOGIN_ACCOUNT_DISABLED: eb,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: ey,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eO,
        LOGIN_RESET: ec,
        LOGIN_STATUS_RESET: eu,
        LOGIN_SUSPENDED_USER: ej,
        LOGOUT: ew,
        FINGERPRINT: ev,
        INSTALLATION_ID: eS,
        REGISTER_SUCCESS: eI,
        FORGOT_PASSWORD_REQUEST: eD,
        FORGOT_PASSWORD_SENT: ex,
        UPDATE_TOKEN: eN,
        EXPERIMENTS_FETCH: er,
        CURRENT_USER_UPDATE: eL,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eR,
        CLOSE_SUSPENDED_USER: eM,
        PASSWORDLESS_FAILURE: e_,
        PASSWORDLESS_START: ep,
    },
    d.c.Early,
);
