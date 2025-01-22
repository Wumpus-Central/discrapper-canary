let i, a;
r.r(n);
var o,
    s = r(47120);
var l = r(177593);
var u = r(653041);
var c = r(411104);
var d = r(213919),
    f = r(756647),
    p = r(442837),
    h = r(544891),
    _ = r(433517),
    m = r(570140),
    g = r(911969),
    E = r(109728),
    v = r(670890),
    y = r(569611),
    b = r(710845),
    I = r(703656),
    T = r(786213),
    S = r(626135),
    A = r(449934),
    C = r(960048),
    N = r(117240),
    R = r(412788),
    O = r(981631),
    D = r(723359);
function x(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let L = new b.Z('AuthenticationStore'),
    w = 'fingerprint',
    P = 'user_id_cache',
    M = null,
    k = null,
    U = null,
    B = null,
    G = null,
    Z = null,
    F = null,
    V = O.u34.NONE,
    j = O.$ib.NONE,
    H = !1,
    Y = [],
    W = '',
    K = !1,
    z = null,
    q = !1,
    Q = !1,
    X = '',
    J = !1,
    $ = !1,
    ee = {},
    et = {},
    en = null,
    er = null,
    ei = null,
    ea = !1,
    eo = !1;
function es(e) {
    let n = {};
    if (((n.error_code = e.code), null != e.errors)) {
        for (let r of Object.keys(e.errors)) n[r] = [e.getFirstFieldErrorMessage(r)];
        return n;
    }
    return (n.message = e.message), null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function el(e) {
    if (Object.keys(e.fields).length > 0) return e.fields;
    let n = { message: e.message };
    return null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function eu(e) {
    let n = null != d.getToken(),
        r = null != _.K.get(O.B1h);
    L.verbose(e, {
        tokenManagerHasToken: n,
        storageHasToken: r
    });
}
function ec() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((G = _.K.get(w)), null != er)) return er;
    let n = null != G ? G : d.getToken();
    if (!(!(0, I.m1)() || (!e && null != n) || N.Z.isHandoffAvailable())) ed({ withGuildExperiments: !0 });
}
function ed(e) {
    let { withGuildExperiments: n } = e,
        r = {},
        i = S.default.getSuperPropertiesBase64();
    null != i && (r['X-Super-Properties'] = i),
        null != G && (r['X-Fingerprint'] = G),
        (er = h.tn
            .get({
                url: O.ANM.EXPERIMENTS,
                query: { with_guild_experiments: n },
                headers: r,
                context: { location: (0, I.Wf)() },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    let { fingerprint: n, assignments: r, guild_experiments: i } = e.body;
                    n &&
                        m.Z.dispatch({
                            type: 'FINGERPRINT',
                            fingerprint: n
                        }),
                        m.Z.dispatch({
                            type: 'EXPERIMENTS_FETCH_SUCCESS',
                            fingerprint: n,
                            experiments: r,
                            guildExperiments: i
                        }),
                        (er = null),
                        (0, E.$L)();
                },
                () => {
                    (er = null), m.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function ef() {
    (Z = G), (G = null), _.K.remove(w);
}
function ep(e, n) {
    eu('setAuthToken called.'), d.setToken(e, n);
}
function eh() {
    return eu('removeAuthToken called.'), d.removeToken();
}
function e_(e) {
    let { isPasswordAttempt: n } = e;
    (et = {}), (V = O.u34.LOGGING_IN), (X = ''), (a = null), (eo = eo || !0 === n);
}
function em(e) {
    let { isMultiAccount: n } = e;
    if (((et = {}), (V = O.u34.NONE), (W = ''), (K = !1), (z = null), (a = null), (i = null), !n)) eh(), ec(!1);
}
function eg() {
    V = O.u34.NONE;
}
function eE(e) {
    let { login: n, password: r } = e;
    i = {
        login: n,
        password: r
    };
}
function ev(e) {
    let { token: n } = e;
    (V = O.u34.NONE), ep(n), ef(), (W = ''), (K = !1), (z = null), (ea = !1), (X = '');
}
function ey(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (V = null != (et = el(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function eb() {
    (et = {}), (ea = !0);
}
function eI(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (ea = !1), (V = null != (et = es(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function eT(e) {
    let { ticket: n, sms: r, webauthn: i, backup: a, totp: o } = e;
    null != n && ((W = n), (K = r), (X = ''), (z = null != i ? i : null), (Q = a), (q = o)), (et = {}), (V = O.u34.MFA_STEP);
}
function eS() {
    V = O.u34.LOGGING_IN_MFA;
}
function eA(e) {
    let { message: n } = e;
    (V = O.u34.MFA_STEP), (et = { code: n });
}
function eC() {
    V = O.u34.LOGGING_IN_MFA_SMS;
}
function eN(e) {
    let { phone: n } = e;
    (V = O.u34.MFA_SMS_STEP), (X = n);
}
function eR(e) {
    let { message: n } = e;
    (V = O.u34.MFA_SMS_STEP), (et = { code: n });
}
function eO(e) {
    (V = O.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function eD(e) {
    (V = O.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function ex() {
    V = O.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION;
}
function eL() {
    V = O.u34.PHONE_IP_AUTHORIZATION;
}
function ew(e) {
    let n = e.fingerprint;
    null == G
        ? null != n
            ? (S.default.track(O.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != Z ? (0, f.s)(Z) : null,
                  new_fingerprint: (0, f.s)(n)
              }),
              (G = n),
              (Z = n),
              _.K.set(w, G))
            : ec()
        : null != n &&
          G !== n &&
          S.default.track(O.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, f.s)(G),
              dropped_fingerprint: (0, f.s)(n)
          });
}
function eP(e) {
    let { form: n } = e;
    (a = n), (j = O.$ib.REGISTER_AGE_GATE);
}
function eM() {
    (et = {}), (j = O.$ib.REGISTERING);
}
function ek(e) {
    let { token: n } = e;
    (j = O.$ib.NONE), (a = null), ep(n), ef();
}
function eU(e) {
    let { error: n } = e;
    (et = es(n)), (j = null != n.getFieldErrors('date_of_birth') ? O.$ib.REGISTER_AGE_GATE : O.$ib.REGISTER_WITH_ERROR);
}
function eB() {
    if (0 === Object.keys(et).length) return !1;
    et = {};
}
function eG(e) {
    var n;
    let { user: r, sessionId: i, authSessionIdHash: a, analyticsToken: o, auth: s, staticAuthSessionId: l } = e;
    eu('handleConnectionOpen called'), C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (U = a), (B = l), (F = o), (M = r.id), void 0 !== s && (Y = s.authenticator_types), _.K.set(P, r.id);
}
function eZ(e) {
    var n;
    let { user: r, sessionId: i, analyticsToken: a, token: o } = e;
    C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (F = a), ep(o), ef(), (M = r.id), _.K.set(P, r.id);
}
function eF(e) {
    let { code: n } = e;
    eu('handleConnectionClosed called with code '.concat(n, '.'));
    let i = r(952265).nf;
    if (4004 === n) {
        if (H || i(D.$$) || i(D.dG)) {
            eH();
            return;
        }
        S.default.track(O.rMx.APP_USER_DEAUTHENTICATED, { user_id: _.K.get(P) }), eY(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eV(e) {
    let { token: n, userId: r } = e;
    eu('handleUpdateToken called'), ep(n, r), ef();
}
function ej(e) {
    let { authSessionIdHash: n } = e;
    null != n && (U = n);
}
function eH() {
    (H = !0),
        eY(),
        m.Z.wait(() => {
            (0, I.uL)(O.Z5c.REGISTER);
        });
}
function eY(e) {
    var n;
    eu('handleLogout called.');
    let r = eh();
    !(null !== (n = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== n && n) && (r && ef(), ec()),
        p.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        R.Z.clearAll();
    y.ZH(), C.Z.clearUser(), _.K.remove(P), (M = null), (k = null), (V = (null == e ? void 0 : e.isSwitchingAccount) ? O.u34.LOGGING_IN : O.u34.NONE), (j = O.$ib.NONE), (W = ''), (X = ''), (z = null), (K = !1), (J = !1), ($ = !1), (ee = {}), (et = {}), (ea = !1), (eo = !1);
}
function eW(e) {
    let { errors: n } = e;
    (J = !0), ($ = !1), (ee = null != n ? n : {});
}
function eK(e) {
    ($ = !0), (J = !1), (ee = {}), (en = e.verifyingUserId);
}
function ez() {
    (V = O.u34.FORGOT_PASSWORD), (et = {});
}
function eq() {
    (V = O.u34.NONE), (et = {});
}
function eQ(e) {
    let { user: n } = e;
    (M = n.id), void 0 !== n.authenticator_types && (Y = n.authenticator_types), _.K.set(P, n.id);
}
function eX() {
    et = {};
}
function eJ(e) {
    let { suspendedUserToken: n } = e;
    (ea = !1), (ei = n), setImmediate(() => (0, I.uL)(O.Z5c.ACCOUNT_STANDING));
}
function e$() {
    (ei = null), (V = O.u34.NONE), eY(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
}
class e0 extends (o = p.ZP.Store) {
    initialize() {
        (M = _.K.get(P)), null == d.getToken() && ec(), this.addChangeListener(() => (0, v.u)(M));
    }
    didVerifyFail() {
        return J;
    }
    getVerifyErrors() {
        return ee;
    }
    didVerifySucceed() {
        return $;
    }
    getLoginStatus() {
        return V;
    }
    getRegisterStatus() {
        return j;
    }
    getId() {
        return M;
    }
    getSessionId() {
        return k;
    }
    getAuthSessionIdHash() {
        return U;
    }
    getStaticAuthSessionId() {
        return B;
    }
    getToken() {
        return (0, A.LP)();
    }
    isAuthenticated() {
        return (0, A.$8)();
    }
    getFingerprint() {
        return G;
    }
    getAnalyticsToken() {
        return F;
    }
    getErrors() {
        return et;
    }
    getMFATicket() {
        return W;
    }
    getMFASMS() {
        return K;
    }
    getMFATotp() {
        return q;
    }
    getMFABackup() {
        return Q;
    }
    getMFAWebAuthn() {
        return z;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != z &&
                e.push({
                    type: 'webauthn',
                    challenge: z
                }),
            q &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: Q
                }),
            Q && e.push({ type: 'backup' }),
            K && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return Y.includes(g.Pi.TOTP);
    }
    hasSMSEnabled() {
        return Y.includes(g.Pi.SMS);
    }
    hasWebAuthnEnabled() {
        return Y.includes(g.Pi.WEBAUTHN);
    }
    getMaskedPhone() {
        return X;
    }
    getCredentials() {
        if (null == i) throw Error('no credentials');
        return i;
    }
    getVerifyingUserId() {
        return en;
    }
    getCurrentRegistrationOptions() {
        return a;
    }
    allowLogoutRedirect() {
        return !H;
    }
    getWebAuthnChallenge() {
        return z;
    }
    getSuspendedUserToken() {
        return ei;
    }
    getIsPasswordlessActive() {
        return ea;
    }
    attemptedPasswordLogin() {
        return eo;
    }
}
x(e0, 'displayName', 'AuthenticationStore'),
    (n.default = new e0(
        m.Z,
        {
            CONNECTION_OPEN: eG,
            OVERLAY_INITIALIZE: eZ,
            CONNECTION_CLOSED: eF,
            AUTH_SESSION_CHANGE: ej,
            LOGIN: e_,
            LOGIN_SUCCESS: ev,
            LOGIN_FAILURE: ey,
            LOGIN_MFA_STEP: eT,
            LOGIN_MFA: eS,
            LOGIN_MFA_FAILURE: eA,
            LOGIN_MFA_SMS: eC,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: eN,
            LOGIN_MFA_SMS_FAILURE: eR,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eO,
            LOGIN_ACCOUNT_DISABLED: eD,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: ex,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eL,
            LOGIN_RESET: em,
            LOGIN_STATUS_RESET: eg,
            LOGIN_SUSPENDED_USER: eJ,
            SET_LOGIN_CREDENTIALS: eE,
            LOGOUT: eY,
            FINGERPRINT: ew,
            REGISTER_SAVE_FORM: eP,
            REGISTER: eM,
            REGISTER_SUCCESS: ek,
            REGISTER_FAILURE: eU,
            VERIFY_FAILURE: eW,
            VERIFY_SUCCESS: eK,
            START_SESSION: eB,
            FORGOT_PASSWORD_REQUEST: ez,
            FORGOT_PASSWORD_SENT: eq,
            UPDATE_TOKEN: eV,
            EXPERIMENTS_FETCH: ed,
            CURRENT_USER_UPDATE: eQ,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eH,
            CLEAR_AUTHENTICATION_ERRORS: eX,
            CLOSE_SUSPENDED_USER: e$,
            PASSWORDLESS_FAILURE: eI,
            PASSWORDLESS_START: eb
        },
        m.c.Early
    ));
