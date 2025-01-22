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
    et = null,
    en = null,
    er = !1,
    ei = !1;
function ea(e) {
    let n = {};
    if (((n.error_code = e.code), null != e.errors)) {
        for (let r of Object.keys(e.errors)) n[r] = [e.getFirstFieldErrorMessage(r)];
        return n;
    }
    return (n.message = e.message), null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function eo(e) {
    if (Object.keys(e.fields).length > 0) return e.fields;
    let n = { message: e.message };
    return null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function es(e) {
    let n = null != d.getToken(),
        r = null != _.K.get(O.B1h);
    x.verbose(e, {
        tokenManagerHasToken: n,
        storageHasToken: r
    });
}
function el() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((G = _.K.get(w)), null != et)) return et;
    let n = null != G ? G : d.getToken();
    if (!(!(0, I.m1)() || (!e && null != n) || N.Z.isHandoffAvailable())) eu({ withGuildExperiments: !0 });
}
function eu(e) {
    let { withGuildExperiments: n } = e,
        r = {},
        i = S.default.getSuperPropertiesBase64();
    null != i && (r['X-Super-Properties'] = i),
        null != G && (r['X-Fingerprint'] = G),
        (et = h.tn
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
                        (et = null),
                        (0, E.$L)();
                },
                () => {
                    (et = null), m.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function ec() {
    (Z = G), (G = null), _.K.remove(w);
}
function ed(e, n) {
    es('setAuthToken called.'), d.setToken(e, n);
}
function ef() {
    return es('removeAuthToken called.'), d.removeToken();
}
function ep(e) {
    let { isPasswordAttempt: n } = e;
    (ee = {}), (V = O.u34.LOGGING_IN), (X = ''), (a = null), (ei = ei || !0 === n);
}
function eh(e) {
    let { isMultiAccount: n } = e;
    if (((ee = {}), (V = O.u34.NONE), (W = ''), (K = !1), (z = null), (a = null), (i = null), !n)) ef(), el(!1);
}
function e_() {
    V = O.u34.NONE;
}
function em(e) {
    let { token: n } = e;
    (V = O.u34.NONE), ed(n), ec(), (W = ''), (K = !1), (z = null), (er = !1), (X = '');
}
function eg(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (V = null != (ee = eo(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function eE() {
    (ee = {}), (er = !0);
}
function ev(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (er = !1), (V = null != (ee = ea(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function ey(e) {
    let { ticket: n, sms: r, webauthn: i, backup: a, totp: o } = e;
    null != n && ((W = n), (K = r), (X = ''), (z = null != i ? i : null), (Q = a), (q = o)), (ee = {}), (V = O.u34.MFA_STEP);
}
function eb() {
    V = O.u34.LOGGING_IN_MFA;
}
function eI(e) {
    let { message: n } = e;
    (V = O.u34.MFA_STEP), (ee = { code: n });
}
function eT() {
    V = O.u34.LOGGING_IN_MFA_SMS;
}
function eS(e) {
    let { phone: n } = e;
    (V = O.u34.MFA_SMS_STEP), (X = n);
}
function eA(e) {
    let { message: n } = e;
    (V = O.u34.MFA_SMS_STEP), (ee = { code: n });
}
function eC(e) {
    (V = O.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function eN(e) {
    (V = O.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function eR(e) {
    (V = O.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
}
function eO(e) {
    (V = O.u34.PHONE_IP_AUTHORIZATION), (i = e.credentials);
}
function eD(e) {
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
            : el()
        : null != n &&
          G !== n &&
          S.default.track(O.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, f.s)(G),
              dropped_fingerprint: (0, f.s)(n)
          });
}
function eL(e) {
    let { form: n } = e;
    (a = n), (j = O.$ib.REGISTER_AGE_GATE);
}
function ex() {
    (ee = {}), (j = O.$ib.REGISTERING);
}
function ew(e) {
    let { token: n } = e;
    (j = O.$ib.NONE), (a = null), ed(n), ec();
}
function eP(e) {
    let { error: n } = e;
    (ee = ea(n)), (j = null != n.getFieldErrors('date_of_birth') ? O.$ib.REGISTER_AGE_GATE : O.$ib.REGISTER_WITH_ERROR);
}
function eM() {
    if (0 === Object.keys(ee).length) return !1;
    ee = {};
}
function ek(e) {
    var n;
    let { user: r, sessionId: i, authSessionIdHash: a, analyticsToken: o, auth: s, staticAuthSessionId: l } = e;
    es('handleConnectionOpen called'), C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (U = a), (B = l), (F = o), (M = r.id), void 0 !== s && (Y = s.authenticator_types), _.K.set(P, r.id);
}
function eU(e) {
    var n;
    let { user: r, sessionId: i, analyticsToken: a, token: o } = e;
    C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (F = a), ed(o), ec(), (M = r.id), _.K.set(P, r.id);
}
function eB(e) {
    let { code: n } = e;
    es('handleConnectionClosed called with code '.concat(n, '.'));
    let i = r(952265).nf;
    if (4004 === n) {
        if (H || i(D.$$) || i(D.dG)) {
            eF();
            return;
        }
        S.default.track(O.rMx.APP_USER_DEAUTHENTICATED, { user_id: _.K.get(P) }), eV(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eG(e) {
    let { token: n, userId: r } = e;
    es('handleUpdateToken called'), ed(n, r), ec();
}
function eZ(e) {
    let { authSessionIdHash: n } = e;
    null != n && (U = n);
}
function eF() {
    (H = !0),
        eV(),
        m.Z.wait(() => {
            (0, I.uL)(O.Z5c.REGISTER);
        });
}
function eV(e) {
    var n;
    es('handleLogout called.');
    let r = ef();
    !(null !== (n = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== n && n) && (r && ec(), el()),
        p.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        R.Z.clearAll();
    y.ZH(), C.Z.clearUser(), _.K.remove(P), (M = null), (k = null), (V = (null == e ? void 0 : e.isSwitchingAccount) ? O.u34.LOGGING_IN : O.u34.NONE), (j = O.$ib.NONE), (W = ''), (X = ''), (z = null), (K = !1), (J = !1), ($ = !1), (ee = {}), (er = !1), (ei = !1);
}
function ej() {
    (J = !0), ($ = !1);
}
function eH() {
    ($ = !0), (J = !1);
}
function eY() {
    (V = O.u34.FORGOT_PASSWORD), (ee = {});
}
function eW() {
    (V = O.u34.NONE), (ee = {});
}
function eK(e) {
    let { user: n } = e;
    (M = n.id), void 0 !== n.authenticator_types && (Y = n.authenticator_types), _.K.set(P, n.id);
}
function ez() {
    ee = {};
}
function eq(e) {
    let { suspendedUserToken: n } = e;
    (er = !1), (en = n), setImmediate(() => (0, I.uL)(O.Z5c.ACCOUNT_STANDING));
}
function eQ() {
    (en = null), (V = O.u34.NONE), eV(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
}
class eX extends (o = p.ZP.Store) {
    initialize() {
        (M = _.K.get(P)), null == d.getToken() && el(), this.addChangeListener(() => (0, v.u)(M));
    }
    didVerifyFail() {
        return J;
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
        return ee;
    }
    getMFATicket() {
        return W;
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
    getMaskedPhone() {
        return X;
    }
    getCredentials() {
        if (null == i) throw Error('no credentials');
        return i;
    }
    getCurrentRegistrationOptions() {
        return a;
    }
    allowLogoutRedirect() {
        return !H;
    }
    getSuspendedUserToken() {
        return en;
    }
    getIsPasswordlessActive() {
        return er;
    }
    attemptedPasswordLogin() {
        return ei;
    }
}
L(eX, 'displayName', 'AuthenticationStore'),
    (n.default = new eX(
        m.Z,
        {
            CONNECTION_OPEN: ek,
            OVERLAY_INITIALIZE: eU,
            CONNECTION_CLOSED: eB,
            AUTH_SESSION_CHANGE: eZ,
            LOGIN: ep,
            LOGIN_SUCCESS: em,
            LOGIN_FAILURE: eg,
            LOGIN_MFA_STEP: ey,
            LOGIN_MFA: eb,
            LOGIN_MFA_FAILURE: eI,
            LOGIN_MFA_SMS: eT,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: eS,
            LOGIN_MFA_SMS_FAILURE: eA,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eC,
            LOGIN_ACCOUNT_DISABLED: eN,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eR,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eO,
            LOGIN_RESET: eh,
            LOGIN_STATUS_RESET: e_,
            LOGIN_SUSPENDED_USER: eq,
            LOGOUT: eV,
            FINGERPRINT: eD,
            REGISTER_SAVE_FORM: eL,
            REGISTER: ex,
            REGISTER_SUCCESS: ew,
            REGISTER_FAILURE: eP,
            VERIFY_FAILURE: ej,
            VERIFY_SUCCESS: eH,
            START_SESSION: eM,
            FORGOT_PASSWORD_REQUEST: eY,
            FORGOT_PASSWORD_SENT: eW,
            UPDATE_TOKEN: eG,
            EXPERIMENTS_FETCH: eu,
            CURRENT_USER_UPDATE: eK,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eF,
            CLEAR_AUTHENTICATION_ERRORS: ez,
            CLOSE_SUSPENDED_USER: eQ,
            PASSWORDLESS_FAILURE: ev,
            PASSWORDLESS_START: eE
        },
        m.c.Early
    ));
