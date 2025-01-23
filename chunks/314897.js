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
    J = {},
    $ = null,
    ee = null,
    et = !1,
    en = !1;
function er(e) {
    let n = {};
    if (((n.error_code = e.code), null != e.errors)) {
        for (let r of Object.keys(e.errors)) n[r] = [e.getFirstFieldErrorMessage(r)];
        return n;
    }
    return (n.message = e.message), null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function ei(e) {
    if (Object.keys(e.fields).length > 0) return e.fields;
    let n = { message: e.message };
    return null != e.retryAfter && (n.retry_after = e.retryAfter), n;
}
function ea(e) {
    let n = null != d.getToken(),
        r = null != _.K.get(O.B1h);
    x.verbose(e, {
        tokenManagerHasToken: n,
        storageHasToken: r
    });
}
function eo() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((G = _.K.get(w)), null != $)) return $;
    let n = null != G ? G : d.getToken();
    if (!(!(0, I.m1)() || (!e && null != n) || N.Z.isHandoffAvailable())) es({ withGuildExperiments: !0 });
}
function es(e) {
    let { withGuildExperiments: n } = e,
        r = {},
        i = S.default.getSuperPropertiesBase64();
    null != i && (r['X-Super-Properties'] = i),
        null != G && (r['X-Fingerprint'] = G),
        ($ = h.tn
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
                        ($ = null),
                        (0, E.$L)();
                },
                () => {
                    ($ = null), m.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function el() {
    (Z = G), (G = null), _.K.remove(w);
}
function eu(e, n) {
    ea('setAuthToken called.'), d.setToken(e, n);
}
function ec() {
    return ea('removeAuthToken called.'), d.removeToken();
}
function ed(e) {
    let { isPasswordAttempt: n } = e;
    (J = {}), (V = O.u34.LOGGING_IN), (X = ''), (a = null), (en = en || !0 === n);
}
function ef(e) {
    let { isMultiAccount: n } = e;
    if (((J = {}), (V = O.u34.NONE), (W = ''), (K = !1), (z = null), (a = null), (i = null), !n)) ec(), eo(!1);
}
function ep() {
    V = O.u34.NONE;
}
function eh(e) {
    let { token: n } = e;
    (V = O.u34.NONE), eu(n), el(), (W = ''), (K = !1), (z = null), (et = !1), (X = '');
}
function e_(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (V = null != (J = ei(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function em() {
    (J = {}), (et = !0);
}
function eg(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (et = !1), (V = null != (J = er(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function eE(e) {
    let { ticket: n, sms: r, webauthn: i, backup: a, totp: o } = e;
    null != n && ((W = n), (K = r), (X = ''), (z = null != i ? i : null), (Q = a), (q = o)), (J = {}), (V = O.u34.MFA_STEP);
}
function ev() {
    V = O.u34.LOGGING_IN_MFA;
}
function ey(e) {
    let { message: n } = e;
    (V = O.u34.MFA_STEP), (J = { code: n });
}
function eb() {
    V = O.u34.LOGGING_IN_MFA_SMS;
}
function eI(e) {
    let { phone: n } = e;
    (V = O.u34.MFA_SMS_STEP), (X = n);
}
function eT(e) {
    let { message: n } = e;
    (V = O.u34.MFA_SMS_STEP), (J = { code: n });
}
function eS(e) {
    (V = O.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function eA(e) {
    (V = O.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function eC(e) {
    (V = O.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
}
function eN(e) {
    (V = O.u34.PHONE_IP_AUTHORIZATION), (i = e.credentials);
}
function eR(e) {
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
            : eo()
        : null != n &&
          G !== n &&
          S.default.track(O.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, f.s)(G),
              dropped_fingerprint: (0, f.s)(n)
          });
}
function eO(e) {
    let { form: n } = e;
    (a = n), (j = O.$ib.REGISTER_AGE_GATE);
}
function eD() {
    (J = {}), (j = O.$ib.REGISTERING);
}
function eL(e) {
    let { token: n } = e;
    (j = O.$ib.NONE), (a = null), eu(n), el();
}
function ex(e) {
    let { error: n } = e;
    (J = er(n)), (j = null != n.getFieldErrors('date_of_birth') ? O.$ib.REGISTER_AGE_GATE : O.$ib.REGISTER_WITH_ERROR);
}
function ew() {
    if (0 === Object.keys(J).length) return !1;
    J = {};
}
function eP(e) {
    var n;
    let { user: r, sessionId: i, authSessionIdHash: a, analyticsToken: o, auth: s, staticAuthSessionId: l } = e;
    ea('handleConnectionOpen called'), C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (U = a), (B = l), (F = o), (M = r.id), void 0 !== s && (Y = s.authenticator_types), _.K.set(P, r.id);
}
function eM(e) {
    var n;
    let { user: r, sessionId: i, analyticsToken: a, token: o } = e;
    C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (F = a), eu(o), el(), (M = r.id), _.K.set(P, r.id);
}
function ek(e) {
    let { code: n } = e;
    ea('handleConnectionClosed called with code '.concat(n, '.'));
    let i = r(952265).nf;
    if (4004 === n) {
        if (H || i(D.$$) || i(D.dG)) {
            eG();
            return;
        }
        S.default.track(O.rMx.APP_USER_DEAUTHENTICATED, { user_id: _.K.get(P) }), eZ(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eU(e) {
    let { token: n, userId: r } = e;
    ea('handleUpdateToken called'), eu(n, r), el();
}
function eB(e) {
    let { authSessionIdHash: n } = e;
    null != n && (U = n);
}
function eG() {
    (H = !0),
        eZ(),
        m.Z.wait(() => {
            (0, I.uL)(O.Z5c.REGISTER);
        });
}
function eZ(e) {
    var n;
    ea('handleLogout called.');
    let r = ec();
    !(null !== (n = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== n && n) && (r && el(), eo()),
        p.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        R.Z.clearAll();
    y.ZH(), C.Z.clearUser(), _.K.remove(P), (M = null), (k = null), (V = (null == e ? void 0 : e.isSwitchingAccount) ? O.u34.LOGGING_IN : O.u34.NONE), (j = O.$ib.NONE), (W = ''), (X = ''), (z = null), (K = !1), (J = {}), (et = !1), (en = !1);
}
function eF() {
    (V = O.u34.FORGOT_PASSWORD), (J = {});
}
function eV() {
    (V = O.u34.NONE), (J = {});
}
function ej(e) {
    let { user: n } = e;
    (M = n.id), void 0 !== n.authenticator_types && (Y = n.authenticator_types), _.K.set(P, n.id);
}
function eH() {
    J = {};
}
function eY(e) {
    let { suspendedUserToken: n } = e;
    (et = !1), (ee = n), setImmediate(() => (0, I.uL)(O.Z5c.ACCOUNT_STANDING));
}
function eW() {
    (ee = null), (V = O.u34.NONE), eZ(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
}
class eK extends (o = p.ZP.Store) {
    initialize() {
        (M = _.K.get(P)), null == d.getToken() && eo(), this.addChangeListener(() => (0, v.u)(M));
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
        return J;
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
        return ee;
    }
    getIsPasswordlessActive() {
        return et;
    }
    attemptedPasswordLogin() {
        return en;
    }
}
L(eK, 'displayName', 'AuthenticationStore'),
    (n.default = new eK(
        m.Z,
        {
            CONNECTION_OPEN: eP,
            OVERLAY_INITIALIZE: eM,
            CONNECTION_CLOSED: ek,
            AUTH_SESSION_CHANGE: eB,
            LOGIN: ed,
            LOGIN_SUCCESS: eh,
            LOGIN_FAILURE: e_,
            LOGIN_MFA_STEP: eE,
            LOGIN_MFA: ev,
            LOGIN_MFA_FAILURE: ey,
            LOGIN_MFA_SMS: eb,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: eI,
            LOGIN_MFA_SMS_FAILURE: eT,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eS,
            LOGIN_ACCOUNT_DISABLED: eA,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eC,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eN,
            LOGIN_RESET: ef,
            LOGIN_STATUS_RESET: ep,
            LOGIN_SUSPENDED_USER: eY,
            LOGOUT: eZ,
            FINGERPRINT: eR,
            REGISTER_SAVE_FORM: eO,
            REGISTER: eD,
            REGISTER_SUCCESS: eL,
            REGISTER_FAILURE: ex,
            START_SESSION: ew,
            FORGOT_PASSWORD_REQUEST: eF,
            FORGOT_PASSWORD_SENT: eV,
            UPDATE_TOKEN: eU,
            EXPERIMENTS_FETCH: es,
            CURRENT_USER_UPDATE: ej,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eG,
            CLEAR_AUTHENTICATION_ERRORS: eH,
            CLOSE_SUSPENDED_USER: eW,
            PASSWORDLESS_FAILURE: eg,
            PASSWORDLESS_START: em
        },
        m.c.Early
    ));
