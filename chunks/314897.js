let i, a;
r.r(n);
var o,
    s = r(177593);
var l = r(653041);
var u = r(411104);
var c = r(213919),
    d = r(756647),
    f = r(442837),
    p = r(544891),
    h = r(433517),
    _ = r(570140),
    m = r(911969),
    g = r(109728),
    E = r(254942),
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
function L(e, n, r) {
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
let x = new b.Z('AuthenticationStore'),
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
    j = !1,
    H = [],
    Y = '',
    W = !1,
    K = null,
    z = !1,
    q = !1,
    Q = '',
    X = {},
    J = null,
    $ = null,
    ee = !1,
    et = !1;
function en(e) {
    let n = null != c.getToken(),
        r = null != h.K.get(O.B1h);
    x.verbose(e, {
        tokenManagerHasToken: n,
        storageHasToken: r
    });
}
function er() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((G = h.K.get(w)), null != J)) return J;
    let n = null != G ? G : c.getToken();
    if (!(!(0, I.m1)() || (!e && null != n) || N.Z.isHandoffAvailable())) ei({ withGuildExperiments: !0 });
}
function ei(e) {
    let { withGuildExperiments: n } = e,
        r = {},
        i = S.default.getSuperPropertiesBase64();
    null != i && (r['X-Super-Properties'] = i),
        null != G && (r['X-Fingerprint'] = G),
        (J = p.tn
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
                        _.Z.dispatch({
                            type: 'FINGERPRINT',
                            fingerprint: n
                        }),
                        _.Z.dispatch({
                            type: 'EXPERIMENTS_FETCH_SUCCESS',
                            fingerprint: n,
                            experiments: r,
                            guildExperiments: i
                        }),
                        (J = null),
                        (0, g.$L)();
                },
                () => {
                    (J = null), _.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function ea() {
    (Z = G), (G = null), h.K.remove(w);
}
function eo(e, n) {
    en('setAuthToken called.'), c.setToken(e, n);
}
function es() {
    return en('removeAuthToken called.'), c.removeToken();
}
function el(e) {
    let { isPasswordAttempt: n } = e;
    (X = {}), (V = O.u34.LOGGING_IN), (Q = ''), (a = null), (et = et || !0 === n);
}
function eu(e) {
    let { isMultiAccount: n } = e;
    if (((X = {}), (V = O.u34.NONE), (Y = ''), (W = !1), (K = null), (a = null), (i = null), !n)) es(), er(!1);
}
function ec() {
    V = O.u34.NONE;
}
function ed(e) {
    let { token: n } = e;
    (V = O.u34.NONE), eo(n), ea(), (Y = ''), (W = !1), (K = null), (ee = !1), (Q = '');
}
function ef(e) {
    let { error: n } = e;
    (Y = ''), (W = !1), (K = null), (V = null != (X = (0, E.p)(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function ep() {
    (X = {}), (ee = !0);
}
function eh(e) {
    let { error: n } = e;
    (Y = ''), (W = !1), (K = null), (ee = !1), (V = null != (X = (0, E.F)(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function e_(e) {
    let { ticket: n, sms: r, webauthn: i, backup: a, totp: o } = e;
    null != n && ((Y = n), (W = r), (Q = ''), (K = null != i ? i : null), (q = a), (z = o)), (X = {}), (V = O.u34.MFA_STEP);
}
function em() {
    V = O.u34.LOGGING_IN_MFA;
}
function eg(e) {
    let { message: n } = e;
    (V = O.u34.MFA_STEP), (X = { code: n });
}
function eE() {
    V = O.u34.LOGGING_IN_MFA_SMS;
}
function ev(e) {
    let { phone: n } = e;
    (V = O.u34.MFA_SMS_STEP), (Q = n);
}
function ey(e) {
    let { message: n } = e;
    (V = O.u34.MFA_SMS_STEP), (X = { code: n });
}
function eb(e) {
    (V = O.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function eI(e) {
    (V = O.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function eT(e) {
    (V = O.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
}
function eS(e) {
    (V = O.u34.PHONE_IP_AUTHORIZATION), (i = e.credentials);
}
function eA(e) {
    let n = e.fingerprint;
    null == G
        ? null != n
            ? (S.default.track(O.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != Z ? (0, d.s)(Z) : null,
                  new_fingerprint: (0, d.s)(n)
              }),
              (G = n),
              (Z = n),
              h.K.set(w, G))
            : er()
        : null != n &&
          G !== n &&
          S.default.track(O.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, d.s)(G),
              dropped_fingerprint: (0, d.s)(n)
          });
}
function eC(e) {
    let { form: n } = e;
    a = n;
}
function eN() {
    X = {};
}
function eR(e) {
    let { token: n } = e;
    (a = null), eo(n), ea();
}
function eO(e) {
    let { error: n } = e;
    X = (0, E.F)(n);
}
function eD() {
    if (0 === Object.keys(X).length) return !1;
    X = {};
}
function eL(e) {
    var n;
    let { user: r, sessionId: i, authSessionIdHash: a, analyticsToken: o, auth: s, staticAuthSessionId: l } = e;
    en('handleConnectionOpen called'), C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (U = a), (B = l), (F = o), (M = r.id), void 0 !== s && (H = s.authenticator_types), h.K.set(P, r.id);
}
function ex(e) {
    var n;
    let { user: r, sessionId: i, analyticsToken: a, token: o } = e;
    C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (F = a), eo(o), ea(), (M = r.id), h.K.set(P, r.id);
}
function ew(e) {
    let { code: n } = e;
    en('handleConnectionClosed called with code '.concat(n, '.'));
    let i = r(952265).nf;
    if (4004 === n) {
        if (j || i(D.$$) || i(D.dG)) {
            ek();
            return;
        }
        S.default.track(O.rMx.APP_USER_DEAUTHENTICATED, { user_id: h.K.get(P) }), eU(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eP(e) {
    let { token: n, userId: r } = e;
    en('handleUpdateToken called'), eo(n, r), ea();
}
function eM(e) {
    let { authSessionIdHash: n } = e;
    null != n && (U = n);
}
function ek() {
    (j = !0),
        eU(),
        _.Z.wait(() => {
            (0, I.uL)(O.Z5c.REGISTER);
        });
}
function eU(e) {
    var n;
    en('handleLogout called.');
    let r = es();
    !(null !== (n = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== n && n) && (r && ea(), er()),
        f.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        R.Z.clearAll();
    y.ZH(), C.Z.clearUser(), h.K.remove(P), (M = null), (k = null), (V = (null == e ? void 0 : e.isSwitchingAccount) ? O.u34.LOGGING_IN : O.u34.NONE), (Y = ''), (Q = ''), (K = null), (W = !1), (X = {}), (ee = !1), (et = !1);
}
function eB() {
    (V = O.u34.FORGOT_PASSWORD), (X = {});
}
function eG() {
    (V = O.u34.NONE), (X = {});
}
function eZ(e) {
    let { user: n } = e;
    (M = n.id), void 0 !== n.authenticator_types && (H = n.authenticator_types), h.K.set(P, n.id);
}
function eF() {
    X = {};
}
function eV(e) {
    let { suspendedUserToken: n } = e;
    (ee = !1), ($ = n), setImmediate(() => (0, I.uL)(O.Z5c.ACCOUNT_STANDING));
}
function ej() {
    ($ = null), (V = O.u34.NONE), eU(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
}
class eH extends (o = f.ZP.Store) {
    initialize() {
        (M = h.K.get(P)), null == c.getToken() && er(), this.addChangeListener(() => (0, v.u)(M));
    }
    getLoginStatus() {
        return V;
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
        return X;
    }
    getMFATicket() {
        return Y;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != K &&
                e.push({
                    type: 'webauthn',
                    challenge: K
                }),
            z &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: q
                }),
            q && e.push({ type: 'backup' }),
            W && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return H.includes(m.Pi.TOTP);
    }
    getMaskedPhone() {
        return Q;
    }
    getCredentials() {
        if (null == i) throw Error('no credentials');
        return i;
    }
    getCurrentRegistrationOptions() {
        return a;
    }
    allowLogoutRedirect() {
        return !j;
    }
    getSuspendedUserToken() {
        return $;
    }
    getIsPasswordlessActive() {
        return ee;
    }
    attemptedPasswordLogin() {
        return et;
    }
}
L(eH, 'displayName', 'AuthenticationStore'),
    (n.default = new eH(
        _.Z,
        {
            CONNECTION_OPEN: eL,
            OVERLAY_INITIALIZE: ex,
            CONNECTION_CLOSED: ew,
            AUTH_SESSION_CHANGE: eM,
            LOGIN: el,
            LOGIN_SUCCESS: ed,
            LOGIN_FAILURE: ef,
            LOGIN_MFA_STEP: e_,
            LOGIN_MFA: em,
            LOGIN_MFA_FAILURE: eg,
            LOGIN_MFA_SMS: eE,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: ev,
            LOGIN_MFA_SMS_FAILURE: ey,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eb,
            LOGIN_ACCOUNT_DISABLED: eI,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eT,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eS,
            LOGIN_RESET: eu,
            LOGIN_STATUS_RESET: ec,
            LOGIN_SUSPENDED_USER: eV,
            LOGOUT: eU,
            FINGERPRINT: eA,
            REGISTER_SAVE_FORM: eC,
            REGISTER: eN,
            REGISTER_SUCCESS: eR,
            REGISTER_FAILURE: eO,
            START_SESSION: eD,
            FORGOT_PASSWORD_REQUEST: eB,
            FORGOT_PASSWORD_SENT: eG,
            UPDATE_TOKEN: eP,
            EXPERIMENTS_FETCH: ei,
            CURRENT_USER_UPDATE: eZ,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: ek,
            CLEAR_AUTHENTICATION_ERRORS: eF,
            CLOSE_SUSPENDED_USER: ej,
            PASSWORDLESS_FAILURE: eh,
            PASSWORDLESS_START: ep
        },
        _.c.Early
    ));
