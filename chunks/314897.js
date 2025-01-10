let i, a;
r.r(n);
var s,
    o = r(47120);
var l = r(177593);
var u = r(653041);
var c = r(411104);
var d = r(512722),
    f = r.n(d),
    _ = r(213919),
    h = r(756647),
    p = r(442837),
    m = r(544891),
    g = r(433517),
    E = r(570140),
    v = r(911969),
    I = r(109728),
    T = r(670890),
    b = r(569611),
    y = r(710845),
    S = r(703656),
    A = r(786213),
    N = r(626135),
    C = r(449934),
    R = r(960048),
    O = r(117240),
    D = r(412788),
    L = r(981631),
    x = r(723359);
function w(e, n, r) {
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
let P = new y.Z('AuthenticationStore'),
    M = 'fingerprint',
    k = 'email_cache',
    U = 'user_id_cache',
    B = 'login_cache',
    G = null,
    F = null,
    Z = null,
    V = null,
    j = null,
    H = null,
    Y = null,
    W = null,
    K = L.u34.NONE,
    z = L.$ib.NONE,
    q = !1,
    Q = [],
    X = '',
    J = !1,
    $ = null,
    ee = !1,
    et = !1,
    en = '',
    er = !1,
    ei = !1,
    ea = {},
    es = {},
    eo = null,
    el = null,
    eu = null,
    ec = null,
    ed = !1,
    ef = !1;
function e_(e) {
    let n = {};
    if (((n.error_code = e.code), null != e.errors)) {
        for (let r of Object.keys(e.errors)) n[r] = [e.getFirstFieldErrorMessage(r)];
        return n;
    }
    return (n.message = e.message), null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function eh(e) {
    if (Object.keys(e.fields).length > 0) return e.fields;
    let n = { message: e.message };
    return null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function ep(e) {
    let n = null != _.getToken(),
        r = null != g.K.get(L.B1h);
    P.verbose(e, {
        tokenManagerHasToken: n,
        storageHasToken: r
    });
}
function em() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((H = g.K.get(M)), null != el)) return el;
    let n = null != H ? H : _.getToken();
    if (!(!(0, S.m1)() || (!e && null != n) || O.Z.isHandoffAvailable())) eg({ withGuildExperiments: !0 });
}
function eg(e) {
    let { withGuildExperiments: n } = e,
        r = {},
        i = N.default.getSuperPropertiesBase64();
    null != i && (r['X-Super-Properties'] = i),
        null != H && (r['X-Fingerprint'] = H),
        (el = m.tn
            .get({
                url: L.ANM.EXPERIMENTS,
                query: { with_guild_experiments: n },
                headers: r,
                context: { location: (0, S.Wf)() },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    let { fingerprint: n, assignments: r, guild_experiments: i } = e.body;
                    n &&
                        E.Z.dispatch({
                            type: 'FINGERPRINT',
                            fingerprint: n
                        }),
                        E.Z.dispatch({
                            type: 'EXPERIMENTS_FETCH_SUCCESS',
                            fingerprint: n,
                            experiments: r,
                            guildExperiments: i
                        }),
                        (el = null),
                        (0, I.$L)();
                },
                () => {
                    (el = null), E.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function eE() {
    (Y = H), (H = null), g.K.remove(M);
}
function ev(e, n) {
    ep('setAuthToken called.'), _.setToken(e, n);
}
function eI() {
    return ep('removeAuthToken called.'), _.removeToken();
}
function eT(e) {
    (es = {}), (K = L.u34.LOGGING_IN), (en = ''), (a = null), null != e.login && (eu = e.login), ef || (ef = e.loginMethod === L.nnr.PASSWORD);
}
function eb(e) {
    let { isMultiAccount: n } = e;
    if (((es = {}), (K = L.u34.NONE), (X = ''), (J = !1), ($ = null), (a = null), (i = null), !n)) eI(), em(!1);
}
function ey() {
    K = L.u34.NONE;
}
function eS(e) {
    let { login: n, password: r } = e;
    i = {
        login: n,
        password: r
    };
}
function eA(e) {
    let { token: n } = e;
    (K = L.u34.NONE), ev(n), eE(), (X = ''), (J = !1), ($ = null), (ed = !1), (en = '');
}
function eN(e) {
    let { error: n } = e;
    (X = ''), (J = !1), ($ = null), (K = null != (es = eh(n)).date_of_birth ? L.u34.LOGIN_AGE_GATE : L.u34.NONE);
}
function eC() {
    (es = {}), (ed = !0);
}
function eR(e) {
    let { error: n } = e;
    (X = ''), (J = !1), ($ = null), (ed = !1), (K = null != (es = e_(n)).date_of_birth ? L.u34.LOGIN_AGE_GATE : L.u34.NONE);
}
function eO(e) {
    let { ticket: n, sms: r, webauthn: i, backup: a, totp: s } = e;
    null != n && ((X = n), (J = r), (en = ''), ($ = null != i ? i : null), (et = a), (ee = s)), (es = {}), (K = L.u34.MFA_STEP);
}
function eD() {
    K = L.u34.LOGGING_IN_MFA;
}
function eL(e) {
    let { message: n } = e;
    (K = L.u34.MFA_STEP), (es = { code: n });
}
function ex() {
    K = L.u34.LOGGING_IN_MFA_SMS;
}
function ew(e) {
    let { phone: n } = e;
    (K = L.u34.MFA_SMS_STEP), (en = n);
}
function eP(e) {
    let { message: n } = e;
    (K = L.u34.MFA_SMS_STEP), (es = { code: n });
}
function eM(e) {
    (K = L.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function ek(e) {
    (K = L.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function eU() {
    K = L.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION;
}
function eB() {
    K = L.u34.PHONE_IP_AUTHORIZATION;
}
function eG(e) {
    let n = e.fingerprint;
    null == H
        ? null != n
            ? (N.default.track(L.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != Y ? (0, h.s)(Y) : null,
                  new_fingerprint: (0, h.s)(n)
              }),
              (H = n),
              (Y = n),
              g.K.set(M, H))
            : em()
        : null != n &&
          H !== n &&
          N.default.track(L.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, h.s)(H),
              dropped_fingerprint: (0, h.s)(n)
          });
}
function eF(e) {
    let { form: n } = e;
    (a = n), (z = L.$ib.REGISTER_AGE_GATE);
}
function eZ(e) {
    let { birthday: n } = e;
    (es = {}),
        null != n &&
            (f()(null != a, 'Got birthday in multistep registration without existing form'),
            (a = {
                ...a,
                birthday: n
            })),
        (z = L.$ib.REGISTERING);
}
function eV(e) {
    let { token: n } = e;
    (z = L.$ib.NONE), (a = null), ev(n), eE();
}
function ej(e) {
    let { error: n } = e;
    (es = e_(n)), (z = null != n.getFieldErrors('date_of_birth') ? L.$ib.REGISTER_AGE_GATE : L.$ib.REGISTER_WITH_ERROR);
}
function eH() {
    if (0 === Object.keys(es).length) return !1;
    es = {};
}
function eY(e) {
    var n;
    let { user: r, sessionId: i, authSessionIdHash: a, analyticsToken: s, auth: o, staticAuthSessionId: l } = e;
    ep('handleConnectionOpen called'), R.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, A.Z)(r)), (Z = i), (V = a), (j = l), (W = s), (G = r.id), (F = r.email), void 0 !== o && (Q = o.authenticator_types), g.K.set(k, r.email), g.K.set(U, r.id);
}
function eW(e) {
    var n;
    let { user: r, sessionId: i, analyticsToken: a, token: s } = e;
    R.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, A.Z)(r)), (Z = i), (W = a), ev(s), eE(), (G = r.id), g.K.set(U, r.id);
}
function eK(e) {
    let { code: n } = e;
    ep('handleConnectionClosed called with code '.concat(n, '.'));
    let i = r(952265).nf;
    if (4004 === n) {
        if (q || i(x.$$) || i(x.dG)) {
            eQ();
            return;
        }
        N.default.track(L.rMx.APP_USER_DEAUTHENTICATED, { user_id: g.K.get(U) }), eX(), setImmediate(() => (0, S.uL)(L.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function ez(e) {
    let { token: n, userId: r } = e;
    ep('handleUpdateToken called'), ev(n, r), eE();
}
function eq(e) {
    let { authSessionIdHash: n } = e;
    null != n && (V = n);
}
function eQ() {
    (q = !0),
        eX(),
        E.Z.wait(() => {
            (0, S.uL)(L.Z5c.REGISTER);
        });
}
function eX(e) {
    var n;
    ep('handleLogout called.');
    let r = eI();
    !(null !== (n = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== n && n) && (r && eE(), em()),
        p.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        D.Z.clearAll();
    b.ZH(), R.Z.clearUser(), g.K.remove(U), (G = null), (Z = null), (K = (null == e ? void 0 : e.isSwitchingAccount) ? L.u34.LOGGING_IN : L.u34.NONE), (z = L.$ib.NONE), (X = ''), (en = ''), ($ = null), (J = !1), (er = !1), (ei = !1), (ea = {}), (es = {}), (ed = !1), (ef = !1);
}
function eJ(e) {
    let { errors: n } = e;
    (er = !0), (ei = !1), (ea = null != n ? n : {});
}
function e$(e) {
    (ei = !0), (er = !1), (ea = {}), (eo = e.verifyingUserId);
}
function e0() {
    (K = L.u34.FORGOT_PASSWORD), (es = {});
}
function e1() {
    (K = L.u34.NONE), (es = {});
}
function e2(e) {
    let { user: n } = e;
    (G = n.id), (F = n.email), void 0 !== n.authenticator_types && (Q = n.authenticator_types), g.K.set(k, n.email), g.K.set(U, n.id);
}
function e3() {
    es = {};
}
function e4(e) {
    let { suspendedUserToken: n } = e;
    (ed = !1), (ec = n), setImmediate(() => (0, S.uL)(L.Z5c.ACCOUNT_STANDING));
}
function e6() {
    (ec = null), (K = L.u34.NONE), eX(), setImmediate(() => (0, S.uL)(L.Z5c.DEFAULT_LOGGED_OUT));
}
class e5 extends (s = p.ZP.Store) {
    initialize() {
        (G = g.K.get(U)), (F = g.K.get(k)), (eu = g.K.get(B)), null == _.getToken() && em(), this.addChangeListener(() => (0, T.u)(G));
    }
    getEmail() {
        return F;
    }
    getLogin() {
        return eu;
    }
    didVerifyFail() {
        return er;
    }
    getVerifyErrors() {
        return ea;
    }
    didVerifySucceed() {
        return ei;
    }
    getLoginStatus() {
        return K;
    }
    getRegisterStatus() {
        return z;
    }
    getId() {
        return G;
    }
    getSessionId() {
        return Z;
    }
    getAuthSessionIdHash() {
        return V;
    }
    getStaticAuthSessionId() {
        return j;
    }
    getToken() {
        return (0, C.LP)();
    }
    isAuthenticated() {
        return (0, C.$8)();
    }
    getFingerprint() {
        return H;
    }
    getAnalyticsToken() {
        return W;
    }
    getErrors() {
        return es;
    }
    getMFATicket() {
        return X;
    }
    getMFASMS() {
        return J;
    }
    getMFATotp() {
        return ee;
    }
    getMFABackup() {
        return et;
    }
    getMFAWebAuthn() {
        return $;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != $ &&
                e.push({
                    type: 'webauthn',
                    challenge: $
                }),
            ee &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: et
                }),
            et && e.push({ type: 'backup' }),
            J && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return Q.includes(v.Pi.TOTP);
    }
    hasSMSEnabled() {
        return Q.includes(v.Pi.SMS);
    }
    hasWebAuthnEnabled() {
        return Q.includes(v.Pi.WEBAUTHN);
    }
    getMaskedPhone() {
        return en;
    }
    getCredentials() {
        if (null == i) throw Error('no credentials');
        return i;
    }
    getVerifyingUserId() {
        return eo;
    }
    getCurrentRegistrationOptions() {
        return a;
    }
    allowLogoutRedirect() {
        return !q;
    }
    getWebAuthnChallenge() {
        return $;
    }
    getSuspendedUserToken() {
        return ec;
    }
    getIsPasswordlessActive() {
        return ed;
    }
    attemptedPasswordLogin() {
        return ef;
    }
}
w(e5, 'displayName', 'AuthenticationStore'),
    (n.default = new e5(
        E.Z,
        {
            CONNECTION_OPEN: eY,
            OVERLAY_INITIALIZE: eW,
            CONNECTION_CLOSED: eK,
            AUTH_SESSION_CHANGE: eq,
            LOGIN: eT,
            LOGIN_SUCCESS: eA,
            LOGIN_FAILURE: eN,
            LOGIN_MFA_STEP: eO,
            LOGIN_MFA: eD,
            LOGIN_MFA_FAILURE: eL,
            LOGIN_MFA_SMS: ex,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: ew,
            LOGIN_MFA_SMS_FAILURE: eP,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eM,
            LOGIN_ACCOUNT_DISABLED: ek,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eU,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eB,
            LOGIN_RESET: eb,
            LOGIN_STATUS_RESET: ey,
            LOGIN_SUSPENDED_USER: e4,
            SET_LOGIN_CREDENTIALS: eS,
            LOGOUT: eX,
            FINGERPRINT: eG,
            REGISTER_SAVE_FORM: eF,
            REGISTER: eZ,
            REGISTER_SUCCESS: eV,
            REGISTER_FAILURE: ej,
            VERIFY_FAILURE: eJ,
            VERIFY_SUCCESS: e$,
            START_SESSION: eH,
            FORGOT_PASSWORD_REQUEST: e0,
            FORGOT_PASSWORD_SENT: e1,
            UPDATE_TOKEN: ez,
            EXPERIMENTS_FETCH: eg,
            CURRENT_USER_UPDATE: e2,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eQ,
            CLEAR_AUTHENTICATION_ERRORS: e3,
            CLOSE_SUSPENDED_USER: e6,
            PASSWORDLESS_FAILURE: eR,
            PASSWORDLESS_START: eC
        },
        E.c.Early
    ));
