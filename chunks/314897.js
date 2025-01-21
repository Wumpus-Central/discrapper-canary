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
    k = 'user_id_cache',
    U = null,
    B = null,
    G = null,
    F = null,
    Z = null,
    V = null,
    j = null,
    H = L.u34.NONE,
    Y = L.$ib.NONE,
    W = !1,
    K = [],
    z = '',
    q = !1,
    Q = null,
    X = !1,
    J = !1,
    $ = '',
    ee = !1,
    et = !1,
    en = {},
    er = {},
    ei = null,
    ea = null,
    es = null,
    eo = !1,
    el = !1;
function eu(e) {
    let n = {};
    if (((n.error_code = e.code), null != e.errors)) {
        for (let r of Object.keys(e.errors)) n[r] = [e.getFirstFieldErrorMessage(r)];
        return n;
    }
    return (n.message = e.message), null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function ec(e) {
    if (Object.keys(e.fields).length > 0) return e.fields;
    let n = { message: e.message };
    return null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function ed(e) {
    let n = null != _.getToken(),
        r = null != g.K.get(L.B1h);
    P.verbose(e, {
        tokenManagerHasToken: n,
        storageHasToken: r
    });
}
function ef() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((Z = g.K.get(M)), null != ea)) return ea;
    let n = null != Z ? Z : _.getToken();
    if (!(!(0, S.m1)() || (!e && null != n) || O.Z.isHandoffAvailable())) e_({ withGuildExperiments: !0 });
}
function e_(e) {
    let { withGuildExperiments: n } = e,
        r = {},
        i = N.default.getSuperPropertiesBase64();
    null != i && (r['X-Super-Properties'] = i),
        null != Z && (r['X-Fingerprint'] = Z),
        (ea = m.tn
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
                        (ea = null),
                        (0, I.$L)();
                },
                () => {
                    (ea = null), E.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function eh() {
    (V = Z), (Z = null), g.K.remove(M);
}
function ep(e, n) {
    ed('setAuthToken called.'), _.setToken(e, n);
}
function em() {
    return ed('removeAuthToken called.'), _.removeToken();
}
function eg(e) {
    let { isPasswordAttempt: n } = e;
    (er = {}), (H = L.u34.LOGGING_IN), ($ = ''), (a = null), (el = el || !0 === n);
}
function eE(e) {
    let { isMultiAccount: n } = e;
    if (((er = {}), (H = L.u34.NONE), (z = ''), (q = !1), (Q = null), (a = null), (i = null), !n)) em(), ef(!1);
}
function ev() {
    H = L.u34.NONE;
}
function eI(e) {
    let { login: n, password: r } = e;
    i = {
        login: n,
        password: r
    };
}
function eT(e) {
    let { token: n } = e;
    (H = L.u34.NONE), ep(n), eh(), (z = ''), (q = !1), (Q = null), (eo = !1), ($ = '');
}
function eb(e) {
    let { error: n } = e;
    (z = ''), (q = !1), (Q = null), (H = null != (er = ec(n)).date_of_birth ? L.u34.LOGIN_AGE_GATE : L.u34.NONE);
}
function ey() {
    (er = {}), (eo = !0);
}
function eS(e) {
    let { error: n } = e;
    (z = ''), (q = !1), (Q = null), (eo = !1), (H = null != (er = eu(n)).date_of_birth ? L.u34.LOGIN_AGE_GATE : L.u34.NONE);
}
function eA(e) {
    let { ticket: n, sms: r, webauthn: i, backup: a, totp: s } = e;
    null != n && ((z = n), (q = r), ($ = ''), (Q = null != i ? i : null), (J = a), (X = s)), (er = {}), (H = L.u34.MFA_STEP);
}
function eN() {
    H = L.u34.LOGGING_IN_MFA;
}
function eC(e) {
    let { message: n } = e;
    (H = L.u34.MFA_STEP), (er = { code: n });
}
function eR() {
    H = L.u34.LOGGING_IN_MFA_SMS;
}
function eO(e) {
    let { phone: n } = e;
    (H = L.u34.MFA_SMS_STEP), ($ = n);
}
function eD(e) {
    let { message: n } = e;
    (H = L.u34.MFA_SMS_STEP), (er = { code: n });
}
function eL(e) {
    (H = L.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function ex(e) {
    (H = L.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function ew() {
    H = L.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION;
}
function eP() {
    H = L.u34.PHONE_IP_AUTHORIZATION;
}
function eM(e) {
    let n = e.fingerprint;
    null == Z
        ? null != n
            ? (N.default.track(L.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != V ? (0, h.s)(V) : null,
                  new_fingerprint: (0, h.s)(n)
              }),
              (Z = n),
              (V = n),
              g.K.set(M, Z))
            : ef()
        : null != n &&
          Z !== n &&
          N.default.track(L.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, h.s)(Z),
              dropped_fingerprint: (0, h.s)(n)
          });
}
function ek(e) {
    let { form: n } = e;
    (a = n), (Y = L.$ib.REGISTER_AGE_GATE);
}
function eU(e) {
    let { birthday: n } = e;
    (er = {}),
        null != n &&
            (f()(null != a, 'Got birthday in multistep registration without existing form'),
            (a = {
                ...a,
                birthday: n
            })),
        (Y = L.$ib.REGISTERING);
}
function eB(e) {
    let { token: n } = e;
    (Y = L.$ib.NONE), (a = null), ep(n), eh();
}
function eG(e) {
    let { error: n } = e;
    (er = eu(n)), (Y = null != n.getFieldErrors('date_of_birth') ? L.$ib.REGISTER_AGE_GATE : L.$ib.REGISTER_WITH_ERROR);
}
function eF() {
    if (0 === Object.keys(er).length) return !1;
    er = {};
}
function eZ(e) {
    var n;
    let { user: r, sessionId: i, authSessionIdHash: a, analyticsToken: s, auth: o, staticAuthSessionId: l } = e;
    ed('handleConnectionOpen called'), R.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, A.Z)(r)), (B = i), (G = a), (F = l), (j = s), (U = r.id), void 0 !== o && (K = o.authenticator_types), g.K.set(k, r.id);
}
function eV(e) {
    var n;
    let { user: r, sessionId: i, analyticsToken: a, token: s } = e;
    R.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, A.Z)(r)), (B = i), (j = a), ep(s), eh(), (U = r.id), g.K.set(k, r.id);
}
function ej(e) {
    let { code: n } = e;
    ed('handleConnectionClosed called with code '.concat(n, '.'));
    let i = r(952265).nf;
    if (4004 === n) {
        if (W || i(x.$$) || i(x.dG)) {
            eW();
            return;
        }
        N.default.track(L.rMx.APP_USER_DEAUTHENTICATED, { user_id: g.K.get(k) }), eK(), setImmediate(() => (0, S.uL)(L.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eH(e) {
    let { token: n, userId: r } = e;
    ed('handleUpdateToken called'), ep(n, r), eh();
}
function eY(e) {
    let { authSessionIdHash: n } = e;
    null != n && (G = n);
}
function eW() {
    (W = !0),
        eK(),
        E.Z.wait(() => {
            (0, S.uL)(L.Z5c.REGISTER);
        });
}
function eK(e) {
    var n;
    ed('handleLogout called.');
    let r = em();
    !(null !== (n = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== n && n) && (r && eh(), ef()),
        p.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        D.Z.clearAll();
    b.ZH(), R.Z.clearUser(), g.K.remove(k), (U = null), (B = null), (H = (null == e ? void 0 : e.isSwitchingAccount) ? L.u34.LOGGING_IN : L.u34.NONE), (Y = L.$ib.NONE), (z = ''), ($ = ''), (Q = null), (q = !1), (ee = !1), (et = !1), (en = {}), (er = {}), (eo = !1), (el = !1);
}
function ez(e) {
    let { errors: n } = e;
    (ee = !0), (et = !1), (en = null != n ? n : {});
}
function eq(e) {
    (et = !0), (ee = !1), (en = {}), (ei = e.verifyingUserId);
}
function eQ() {
    (H = L.u34.FORGOT_PASSWORD), (er = {});
}
function eX() {
    (H = L.u34.NONE), (er = {});
}
function eJ(e) {
    let { user: n } = e;
    (U = n.id), void 0 !== n.authenticator_types && (K = n.authenticator_types), g.K.set(k, n.id);
}
function e$() {
    er = {};
}
function e0(e) {
    let { suspendedUserToken: n } = e;
    (eo = !1), (es = n), setImmediate(() => (0, S.uL)(L.Z5c.ACCOUNT_STANDING));
}
function e1() {
    (es = null), (H = L.u34.NONE), eK(), setImmediate(() => (0, S.uL)(L.Z5c.DEFAULT_LOGGED_OUT));
}
class e2 extends (s = p.ZP.Store) {
    initialize() {
        (U = g.K.get(k)), null == _.getToken() && ef(), this.addChangeListener(() => (0, T.u)(U));
    }
    didVerifyFail() {
        return ee;
    }
    getVerifyErrors() {
        return en;
    }
    didVerifySucceed() {
        return et;
    }
    getLoginStatus() {
        return H;
    }
    getRegisterStatus() {
        return Y;
    }
    getId() {
        return U;
    }
    getSessionId() {
        return B;
    }
    getAuthSessionIdHash() {
        return G;
    }
    getStaticAuthSessionId() {
        return F;
    }
    getToken() {
        return (0, C.LP)();
    }
    isAuthenticated() {
        return (0, C.$8)();
    }
    getFingerprint() {
        return Z;
    }
    getAnalyticsToken() {
        return j;
    }
    getErrors() {
        return er;
    }
    getMFATicket() {
        return z;
    }
    getMFASMS() {
        return q;
    }
    getMFATotp() {
        return X;
    }
    getMFABackup() {
        return J;
    }
    getMFAWebAuthn() {
        return Q;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != Q &&
                e.push({
                    type: 'webauthn',
                    challenge: Q
                }),
            X &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: J
                }),
            J && e.push({ type: 'backup' }),
            q && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return K.includes(v.Pi.TOTP);
    }
    hasSMSEnabled() {
        return K.includes(v.Pi.SMS);
    }
    hasWebAuthnEnabled() {
        return K.includes(v.Pi.WEBAUTHN);
    }
    getMaskedPhone() {
        return $;
    }
    getCredentials() {
        if (null == i) throw Error('no credentials');
        return i;
    }
    getVerifyingUserId() {
        return ei;
    }
    getCurrentRegistrationOptions() {
        return a;
    }
    allowLogoutRedirect() {
        return !W;
    }
    getWebAuthnChallenge() {
        return Q;
    }
    getSuspendedUserToken() {
        return es;
    }
    getIsPasswordlessActive() {
        return eo;
    }
    attemptedPasswordLogin() {
        return el;
    }
}
w(e2, 'displayName', 'AuthenticationStore'),
    (n.default = new e2(
        E.Z,
        {
            CONNECTION_OPEN: eZ,
            OVERLAY_INITIALIZE: eV,
            CONNECTION_CLOSED: ej,
            AUTH_SESSION_CHANGE: eY,
            LOGIN: eg,
            LOGIN_SUCCESS: eT,
            LOGIN_FAILURE: eb,
            LOGIN_MFA_STEP: eA,
            LOGIN_MFA: eN,
            LOGIN_MFA_FAILURE: eC,
            LOGIN_MFA_SMS: eR,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: eO,
            LOGIN_MFA_SMS_FAILURE: eD,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eL,
            LOGIN_ACCOUNT_DISABLED: ex,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: ew,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eP,
            LOGIN_RESET: eE,
            LOGIN_STATUS_RESET: ev,
            LOGIN_SUSPENDED_USER: e0,
            SET_LOGIN_CREDENTIALS: eI,
            LOGOUT: eK,
            FINGERPRINT: eM,
            REGISTER_SAVE_FORM: ek,
            REGISTER: eU,
            REGISTER_SUCCESS: eB,
            REGISTER_FAILURE: eG,
            VERIFY_FAILURE: ez,
            VERIFY_SUCCESS: eq,
            START_SESSION: eF,
            FORGOT_PASSWORD_REQUEST: eQ,
            FORGOT_PASSWORD_SENT: eX,
            UPDATE_TOKEN: eH,
            EXPERIMENTS_FETCH: e_,
            CURRENT_USER_UPDATE: eJ,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eW,
            CLEAR_AUTHENTICATION_ERRORS: e$,
            CLOSE_SUSPENDED_USER: e1,
            PASSWORDLESS_FAILURE: eS,
            PASSWORDLESS_START: ey
        },
        E.c.Early
    ));
