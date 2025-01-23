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
    let n = null != c.getToken(),
        r = null != h.K.get(O.B1h);
    x.verbose(e, {
        tokenManagerHasToken: n,
        storageHasToken: r
    });
}
function ei() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((G = h.K.get(w)), null != $)) return $;
    let n = null != G ? G : c.getToken();
    if (!(!(0, I.m1)() || (!e && null != n) || N.Z.isHandoffAvailable())) ea({ withGuildExperiments: !0 });
}
function ea(e) {
    let { withGuildExperiments: n } = e,
        r = {},
        i = S.default.getSuperPropertiesBase64();
    null != i && (r['X-Super-Properties'] = i),
        null != G && (r['X-Fingerprint'] = G),
        ($ = p.tn
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
                        ($ = null),
                        (0, g.$L)();
                },
                () => {
                    ($ = null), _.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function eo() {
    (Z = G), (G = null), h.K.remove(w);
}
function es(e, n) {
    er('setAuthToken called.'), c.setToken(e, n);
}
function el() {
    return er('removeAuthToken called.'), c.removeToken();
}
function eu(e) {
    let { isPasswordAttempt: n } = e;
    (J = {}), (V = O.u34.LOGGING_IN), (X = ''), (a = null), (en = en || !0 === n);
}
function ec(e) {
    let { isMultiAccount: n } = e;
    if (((J = {}), (V = O.u34.NONE), (W = ''), (K = !1), (z = null), (a = null), (i = null), !n)) el(), ei(!1);
}
function ed() {
    V = O.u34.NONE;
}
function ef(e) {
    let { token: n } = e;
    (V = O.u34.NONE), es(n), eo(), (W = ''), (K = !1), (z = null), (et = !1), (X = '');
}
function ep(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (V = null != (J = (0, E.p)(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function eh() {
    (J = {}), (et = !0);
}
function e_(e) {
    let { error: n } = e;
    (W = ''), (K = !1), (z = null), (et = !1), (V = null != (J = (0, E.F)(n)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
}
function em(e) {
    let { ticket: n, sms: r, webauthn: i, backup: a, totp: o } = e;
    null != n && ((W = n), (K = r), (X = ''), (z = null != i ? i : null), (Q = a), (q = o)), (J = {}), (V = O.u34.MFA_STEP);
}
function eg() {
    V = O.u34.LOGGING_IN_MFA;
}
function eE(e) {
    let { message: n } = e;
    (V = O.u34.MFA_STEP), (J = { code: n });
}
function ev() {
    V = O.u34.LOGGING_IN_MFA_SMS;
}
function ey(e) {
    let { phone: n } = e;
    (V = O.u34.MFA_SMS_STEP), (X = n);
}
function eb(e) {
    let { message: n } = e;
    (V = O.u34.MFA_SMS_STEP), (J = { code: n });
}
function eI(e) {
    (V = O.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function eT(e) {
    (V = O.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function eS(e) {
    (V = O.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
}
function eA(e) {
    (V = O.u34.PHONE_IP_AUTHORIZATION), (i = e.credentials);
}
function eC(e) {
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
            : ei()
        : null != n &&
          G !== n &&
          S.default.track(O.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, d.s)(G),
              dropped_fingerprint: (0, d.s)(n)
          });
}
function eN(e) {
    let { form: n } = e;
    (a = n), (j = O.$ib.REGISTER_AGE_GATE);
}
function eR() {
    (J = {}), (j = O.$ib.REGISTERING);
}
function eO(e) {
    let { token: n } = e;
    (j = O.$ib.NONE), (a = null), es(n), eo();
}
function eD(e) {
    let { error: n } = e;
    (J = (0, E.F)(n)), (j = null != n.getFieldErrors('date_of_birth') ? O.$ib.REGISTER_AGE_GATE : O.$ib.REGISTER_WITH_ERROR);
}
function eL() {
    if (0 === Object.keys(J).length) return !1;
    J = {};
}
function ex(e) {
    var n;
    let { user: r, sessionId: i, authSessionIdHash: a, analyticsToken: o, auth: s, staticAuthSessionId: l } = e;
    er('handleConnectionOpen called'), C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (U = a), (B = l), (F = o), (M = r.id), void 0 !== s && (Y = s.authenticator_types), h.K.set(P, r.id);
}
function ew(e) {
    var n;
    let { user: r, sessionId: i, analyticsToken: a, token: o } = e;
    C.Z.setUser(r.id, r.username, null !== (n = r.email) && void 0 !== n ? n : void 0, (0, T.Z)(r)), (k = i), (F = a), es(o), eo(), (M = r.id), h.K.set(P, r.id);
}
function eP(e) {
    let { code: n } = e;
    er('handleConnectionClosed called with code '.concat(n, '.'));
    let i = r(952265).nf;
    if (4004 === n) {
        if (H || i(D.$$) || i(D.dG)) {
            eU();
            return;
        }
        S.default.track(O.rMx.APP_USER_DEAUTHENTICATED, { user_id: h.K.get(P) }), eB(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eM(e) {
    let { token: n, userId: r } = e;
    er('handleUpdateToken called'), es(n, r), eo();
}
function ek(e) {
    let { authSessionIdHash: n } = e;
    null != n && (U = n);
}
function eU() {
    (H = !0),
        eB(),
        _.Z.wait(() => {
            (0, I.uL)(O.Z5c.REGISTER);
        });
}
function eB(e) {
    var n;
    er('handleLogout called.');
    let r = el();
    !(null !== (n = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== n && n) && (r && eo(), ei()),
        f.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        R.Z.clearAll();
    y.ZH(), C.Z.clearUser(), h.K.remove(P), (M = null), (k = null), (V = (null == e ? void 0 : e.isSwitchingAccount) ? O.u34.LOGGING_IN : O.u34.NONE), (j = O.$ib.NONE), (W = ''), (X = ''), (z = null), (K = !1), (J = {}), (et = !1), (en = !1);
}
function eG() {
    (V = O.u34.FORGOT_PASSWORD), (J = {});
}
function eZ() {
    (V = O.u34.NONE), (J = {});
}
function eF(e) {
    let { user: n } = e;
    (M = n.id), void 0 !== n.authenticator_types && (Y = n.authenticator_types), h.K.set(P, n.id);
}
function eV() {
    J = {};
}
function ej(e) {
    let { suspendedUserToken: n } = e;
    (et = !1), (ee = n), setImmediate(() => (0, I.uL)(O.Z5c.ACCOUNT_STANDING));
}
function eH() {
    (ee = null), (V = O.u34.NONE), eB(), setImmediate(() => (0, I.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
}
class eY extends (o = f.ZP.Store) {
    initialize() {
        (M = h.K.get(P)), null == c.getToken() && ei(), this.addChangeListener(() => (0, v.u)(M));
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
        return Y.includes(m.Pi.TOTP);
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
L(eY, 'displayName', 'AuthenticationStore'),
    (n.default = new eY(
        _.Z,
        {
            CONNECTION_OPEN: ex,
            OVERLAY_INITIALIZE: ew,
            CONNECTION_CLOSED: eP,
            AUTH_SESSION_CHANGE: ek,
            LOGIN: eu,
            LOGIN_SUCCESS: ef,
            LOGIN_FAILURE: ep,
            LOGIN_MFA_STEP: em,
            LOGIN_MFA: eg,
            LOGIN_MFA_FAILURE: eE,
            LOGIN_MFA_SMS: ev,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: ey,
            LOGIN_MFA_SMS_FAILURE: eb,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eI,
            LOGIN_ACCOUNT_DISABLED: eT,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eS,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eA,
            LOGIN_RESET: ec,
            LOGIN_STATUS_RESET: ed,
            LOGIN_SUSPENDED_USER: ej,
            LOGOUT: eB,
            FINGERPRINT: eC,
            REGISTER_SAVE_FORM: eN,
            REGISTER: eR,
            REGISTER_SUCCESS: eO,
            REGISTER_FAILURE: eD,
            START_SESSION: eL,
            FORGOT_PASSWORD_REQUEST: eG,
            FORGOT_PASSWORD_SENT: eZ,
            UPDATE_TOKEN: eM,
            EXPERIMENTS_FETCH: ea,
            CURRENT_USER_UPDATE: eF,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eU,
            CLEAR_AUTHENTICATION_ERRORS: eV,
            CLOSE_SUSPENDED_USER: eH,
            PASSWORDLESS_FAILURE: e_,
            PASSWORDLESS_START: eh
        },
        _.c.Early
    ));
