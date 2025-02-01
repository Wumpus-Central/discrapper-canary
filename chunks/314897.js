let i;
n.r(t), n.d(t, { default: () => eO }), n(177593), n(653041), n(411104);
var r,
    a = n(213919),
    s = n(756647),
    o = n(442837),
    l = n(544891),
    u = n(433517),
    c = n(570140),
    d = n(911969),
    f = n(109728),
    _ = n(254942),
    p = n(670890),
    h = n(569611),
    m = n(710845),
    g = n(703656),
    E = n(786213),
    v = n(626135),
    y = n(449934),
    I = n(960048),
    T = n(117240),
    b = n(412788),
    S = n(981631),
    A = n(723359);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let C = new m.Z('AuthenticationStore'),
    R = 'fingerprint',
    O = 'user_id_cache',
    D = null,
    x = null,
    L = null,
    P = null,
    w = null,
    M = null,
    k = null,
    U = S.u34.NONE,
    G = !1,
    B = [],
    Z = '',
    F = !1,
    V = null,
    j = !1,
    H = !1,
    Y = null,
    W = null,
    K = !1,
    z = !1;
function q(e) {
    let t = null != a.getToken(),
        n = null != u.K.get(S.B1h);
    C.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n
    });
}
function Q() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((w = u.K.get(R)), null != Y)) return Y;
    let t = null != w ? w : a.getToken();
    !(!(0, g.m1)() || (!e && null != t) || T.Z.isHandoffAvailable()) && X({ withGuildExperiments: !0 });
}
function X(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        i = v.default.getSuperPropertiesBase64();
    null != i && (n['X-Super-Properties'] = i),
        null != w && (n['X-Fingerprint'] = w),
        (Y = l.tn
            .get({
                url: S.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, g.Wf)() },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    let { fingerprint: t, assignments: n, guild_experiments: i } = e.body;
                    t &&
                        c.Z.dispatch({
                            type: 'FINGERPRINT',
                            fingerprint: t
                        }),
                        c.Z.dispatch({
                            type: 'EXPERIMENTS_FETCH_SUCCESS',
                            fingerprint: t,
                            experiments: n,
                            guildExperiments: i
                        }),
                        (Y = null),
                        (0, f.$L)();
                },
                () => {
                    (Y = null), c.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function J() {
    (M = w), (w = null), u.K.remove(R);
}
function $(e, t) {
    q('setAuthToken called.'), a.setToken(e, t);
}
function ee() {
    return q('removeAuthToken called.'), a.removeToken();
}
function et(e) {
    let { isPasswordAttempt: t } = e;
    (U = S.u34.LOGGING_IN), (z = z || !0 === t);
}
function en(e) {
    let { isMultiAccount: t } = e;
    (U = S.u34.NONE), (Z = ''), (F = !1), (V = null), (i = null), !t && (ee(), Q(!1));
}
function ei() {
    U = S.u34.NONE;
}
function er(e) {
    let { token: t } = e;
    (U = S.u34.NONE), $(t), J(), (Z = ''), (F = !1), (V = null), (K = !1);
}
function ea(e) {
    let { error: t } = e;
    (Z = ''), (F = !1), (V = null), (U = null != (0, _.p)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE);
}
function es() {
    K = !0;
}
function eo(e) {
    let { error: t } = e;
    (Z = ''), (F = !1), (V = null), (K = !1), (U = null != (0, _.F)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE);
}
function el(e) {
    let { ticket: t, sms: n, webauthn: i, backup: r, totp: a } = e;
    null != t && ((Z = t), (F = n), (V = null != i ? i : null), (H = r), (j = a)), (U = S.u34.MFA_STEP);
}
function eu() {
    U = S.u34.LOGGING_IN_MFA;
}
function ec(e) {
    (U = S.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (i = e.credentials);
}
function ed(e) {
    (U = S.u34.ACCOUNT_DISABLED), (i = e.credentials);
}
function ef(e) {
    (U = S.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (i = e.credentials);
}
function e_(e) {
    (U = S.u34.PHONE_IP_AUTHORIZATION), (i = e.credentials);
}
function ep(e) {
    let t = e.fingerprint;
    null == w
        ? null != t
            ? (v.default.track(S.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != M ? (0, s.s)(M) : null,
                  new_fingerprint: (0, s.s)(t)
              }),
              (w = t),
              (M = t),
              u.K.set(R, w))
            : Q()
        : null != t &&
          w !== t &&
          v.default.track(S.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, s.s)(w),
              dropped_fingerprint: (0, s.s)(t)
          });
}
function eh(e) {
    let { token: t } = e;
    $(t), J();
}
function em(e) {
    var t;
    let { user: n, sessionId: i, authSessionIdHash: r, analyticsToken: a, auth: s, staticAuthSessionId: o } = e;
    q('handleConnectionOpen called'), I.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, E.Z)(n)), (x = i), (L = r), (P = o), (k = a), (D = n.id), void 0 !== s && (B = s.authenticator_types), u.K.set(O, n.id);
}
function eg(e) {
    var t;
    let { user: n, sessionId: i, analyticsToken: r, token: a } = e;
    I.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, E.Z)(n)), (x = i), (k = r), $(a), J(), (D = n.id), u.K.set(O, n.id);
}
function eE(e) {
    let { code: t } = e;
    q('handleConnectionClosed called with code '.concat(t, '.'));
    let i = n(952265).nf;
    if (4004 === t) {
        if (G || i(A.$$) || i(A.dG)) {
            eI();
            return;
        }
        v.default.track(S.rMx.APP_USER_DEAUTHENTICATED, { user_id: u.K.get(O) }), eT(), setImmediate(() => (0, g.uL)(S.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function ev(e) {
    let { token: t, userId: n } = e;
    q('handleUpdateToken called'), $(t, n), J();
}
function ey(e) {
    let { authSessionIdHash: t } = e;
    null != t && (L = t);
}
function eI() {
    (G = !0),
        eT(),
        c.Z.wait(() => {
            (0, g.uL)(S.Z5c.REGISTER);
        });
}
function eT(e) {
    var t;
    q('handleLogout called.');
    let n = ee();
    (null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) || (n && J(), Q()),
        o.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        b.Z.clearAll(),
        h.ZH(),
        I.Z.clearUser(),
        u.K.remove(O),
        (D = null),
        (x = null),
        (U = (null == e ? void 0 : e.isSwitchingAccount) ? S.u34.LOGGING_IN : S.u34.NONE),
        (Z = ''),
        (V = null),
        (F = !1),
        (K = !1),
        (z = !1);
}
function eb() {
    U = S.u34.FORGOT_PASSWORD;
}
function eS() {
    U = S.u34.NONE;
}
function eA(e) {
    let { user: t } = e;
    (D = t.id), void 0 !== t.authenticator_types && (B = t.authenticator_types), u.K.set(O, t.id);
}
function eN(e) {
    let { suspendedUserToken: t } = e;
    (K = !1), (W = t), setImmediate(() => (0, g.uL)(S.Z5c.ACCOUNT_STANDING));
}
function eC() {
    (W = null), (U = S.u34.NONE), eT(), setImmediate(() => (0, g.uL)(S.Z5c.DEFAULT_LOGGED_OUT));
}
class eR extends (r = o.ZP.Store) {
    initialize() {
        (D = u.K.get(O)), null == a.getToken() && Q(), this.addChangeListener(() => (0, p.u)(D));
    }
    getLoginStatus() {
        return U;
    }
    getId() {
        return D;
    }
    getSessionId() {
        return x;
    }
    getAuthSessionIdHash() {
        return L;
    }
    getStaticAuthSessionId() {
        return P;
    }
    getToken() {
        return (0, y.LP)();
    }
    isAuthenticated() {
        return (0, y.$8)();
    }
    getFingerprint() {
        return w;
    }
    getAnalyticsToken() {
        return k;
    }
    getMFATicket() {
        return Z;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != V &&
                e.push({
                    type: 'webauthn',
                    challenge: V
                }),
            j &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: H
                }),
            H && e.push({ type: 'backup' }),
            F && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return B.includes(d.Pi.TOTP);
    }
    getCredentials() {
        if (null == i) throw Error('no credentials');
        return i;
    }
    allowLogoutRedirect() {
        return !G;
    }
    getSuspendedUserToken() {
        return W;
    }
    getIsPasswordlessActive() {
        return K;
    }
    attemptedPasswordLogin() {
        return z;
    }
}
N(eR, 'displayName', 'AuthenticationStore');
let eO = new eR(
    c.Z,
    {
        CONNECTION_OPEN: em,
        OVERLAY_INITIALIZE: eg,
        CONNECTION_CLOSED: eE,
        AUTH_SESSION_CHANGE: ey,
        LOGIN: et,
        LOGIN_SUCCESS: er,
        LOGIN_FAILURE: ea,
        LOGIN_MFA_STEP: el,
        LOGIN_MFA: eu,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: ec,
        LOGIN_ACCOUNT_DISABLED: ed,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: ef,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: e_,
        LOGIN_RESET: en,
        LOGIN_STATUS_RESET: ei,
        LOGIN_SUSPENDED_USER: eN,
        LOGOUT: eT,
        FINGERPRINT: ep,
        REGISTER_SUCCESS: eh,
        FORGOT_PASSWORD_REQUEST: eb,
        FORGOT_PASSWORD_SENT: eS,
        UPDATE_TOKEN: ev,
        EXPERIMENTS_FETCH: X,
        CURRENT_USER_UPDATE: eA,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eI,
        CLOSE_SUSPENDED_USER: eC,
        PASSWORDLESS_FAILURE: eo,
        PASSWORDLESS_START: es
    },
    c.c.Early
);
