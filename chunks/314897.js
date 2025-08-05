let r;
(n.r(t), n.d(t, { default: () => eD }), n(539854), n(358797), n(415506));
var i,
    a = n(213919),
    o = n(756647),
    s = n(442837),
    l = n(544891),
    c = n(433517),
    u = n(570140),
    d = n(911969),
    f = n(109728),
    _ = n(254942),
    p = n(670890),
    h = n(569611),
    m = n(710845),
    g = n(703656),
    E = n(786213),
    b = n(626135),
    y = n(449934),
    O = n(960048),
    v = n(117240),
    I = n(750041),
    T = n(981631),
    S = n(723359);
function A(e, t, n) {
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
let N = new m.Z('AuthenticationStore'),
    C = 'fingerprint',
    w = 'user_id_cache',
    R = null,
    P = null,
    D = null,
    L = null,
    x = null,
    k = null,
    j = null,
    M = T.u34.NONE,
    U = !1,
    G = [],
    B = '',
    Z = !1,
    F = null,
    V = !1,
    H = !1,
    Y = null,
    W = null,
    K = !1,
    z = !1,
    q = [];
function $(e) {
    let t = null != a.getToken(),
        n = null != c.K.get(T.B1h);
    N.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n
    });
}
function X() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((x = c.K.get(C)), null != Y)) return Y;
    let t = null != x ? x : a.getToken();
    !(0, g.m1)() || (!e && null != t) || v.Z.isHandoffAvailable() || Q({ withGuildExperiments: !0 });
}
function Q(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = b.default.getSuperPropertiesBase64();
    (null != r && (n['X-Super-Properties'] = r),
        null != x && (n['X-Fingerprint'] = x),
        (Y = l.tn
            .get({
                url: T.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, g.Wf)() },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    let { fingerprint: t, assignments: n, guild_experiments: r } = e.body;
                    (t &&
                        u.Z.dispatch({
                            type: 'FINGERPRINT',
                            fingerprint: t
                        }),
                        u.Z.dispatch({
                            type: 'EXPERIMENTS_FETCH_SUCCESS',
                            fingerprint: t,
                            experiments: n,
                            guildExperiments: r
                        }),
                        (Y = null),
                        (0, f.$L)());
                },
                () => {
                    ((Y = null), u.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' }));
                }
            )));
}
function J() {
    ((k = x), (x = null), c.K.remove(C));
}
function ee(e, t) {
    ($('setAuthToken called.'), (null == t || t !== R) && a.removeAnalyticsToken(), a.setToken(e, t));
}
function et(e) {
    ((j = e), a.setAnalyticsToken(e));
}
function en() {
    return ($('removeAuthToken called.'), a.removeAnalyticsToken(), a.removeToken());
}
function er(e) {
    let { isPasswordAttempt: t } = e;
    ((M = T.u34.LOGGING_IN), (z = z || !0 === t));
}
function ei(e) {
    let { isMultiAccount: t } = e;
    ((M = T.u34.NONE), (B = ''), (Z = !1), (F = null), (r = null), t || (eu(), en(), X(!1)));
}
function ea() {
    M = T.u34.NONE;
}
function eo(e) {
    let { token: t } = e;
    ((M = T.u34.NONE), ee(t), J(), (B = ''), (Z = !1), (F = null), eu(), (K = !1));
}
function es(e) {
    let { error: t } = e;
    ((B = ''), (Z = !1), (F = null), eu(), (M = null != (0, _.p)(t).date_of_birth ? T.u34.LOGIN_AGE_GATE : T.u34.NONE));
}
function el() {
    K = !0;
}
function ec(e) {
    let { error: t } = e;
    ((B = ''), (Z = !1), (F = null), (K = !1), (M = null != (0, _.F)(t).date_of_birth ? T.u34.LOGIN_AGE_GATE : T.u34.NONE));
}
function eu() {
    let e = [];
    (null != F &&
        e.push({
            type: 'webauthn',
            challenge: F
        }),
        V &&
            e.push({
                type: 'totp',
                backup_codes_allowed: H
            }),
        H && e.push({ type: 'backup' }),
        Z && e.push({ type: 'sms' }),
        (q = e));
}
function ed(e) {
    let { ticket: t, sms: n, webauthn: r, backup: i, totp: a } = e;
    (null != t && ((B = t), (Z = n), (F = null != r ? r : null), (H = i), (V = a), eu()), (M = T.u34.MFA_STEP));
}
function ef() {
    M = T.u34.LOGGING_IN_MFA;
}
function e_(e) {
    ((M = T.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials));
}
function ep(e) {
    ((M = T.u34.ACCOUNT_DISABLED), (r = e.credentials));
}
function eh(e) {
    ((M = T.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials));
}
function em(e) {
    ((M = T.u34.PHONE_IP_AUTHORIZATION), (r = e.credentials));
}
function eg(e) {
    let t = e.fingerprint;
    null == x
        ? null != t
            ? (b.default.track(T.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != k ? (0, o.s)(k) : null,
                  new_fingerprint: (0, o.s)(t)
              }),
              (x = t),
              (k = t),
              c.K.set(C, x))
            : X()
        : null != t &&
          x !== t &&
          b.default.track(T.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, o.s)(x),
              dropped_fingerprint: (0, o.s)(t)
          });
}
function eE(e) {
    let { token: t } = e;
    (ee(t), J());
}
function eb(e) {
    var t;
    let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: a, auth: o, staticAuthSessionId: s } = e;
    ($('handleConnectionOpen called'), O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, E.Z)(n)), (P = r), (D = i), (L = s), et(a), (R = n.id), void 0 !== o && (G = o.authenticator_types), c.K.set(w, n.id));
}
function ey(e) {
    var t;
    let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
    (O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, E.Z)(n)), (P = r), (j = i), ee(a, n.id), null != i && et(i), J(), (R = n.id), c.K.set(w, n.id));
}
function eO(e) {
    let { code: t } = e;
    $('handleConnectionClosed called with code '.concat(t, '.'));
    let r = n(952265).nf;
    if (4004 === t) {
        if (U || r(S.$$) || r(S.dG)) return void eT();
        (b.default.track(T.rMx.APP_USER_DEAUTHENTICATED, { user_id: c.K.get(w) }), eS(), setImmediate(() => (0, g.uL)(T.Z5c.DEFAULT_LOGGED_OUT)));
    }
}
function ev(e) {
    let { token: t, userId: n } = e;
    ($('handleUpdateToken called'), ee(t, n), J());
}
function eI(e) {
    let { authSessionIdHash: t } = e;
    null != t && (D = t);
}
function eT() {
    ((U = !0),
        eS(),
        u.Z.wait(() => {
            (0, g.uL)(T.Z5c.REGISTER);
        }));
}
function eS(e) {
    var t;
    $('handleLogout called.');
    let n = en();
    ((null != (t = null == e ? void 0 : e.isSwitchingAccount) && t) || (n && J(), X()),
        s.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore', 'LayoutStore', 'OverlaySettingsStore', 'ApexExperimentStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        I.Z.clearAll(),
        h.ZH(),
        O.Z.clearUser(),
        c.K.remove(w),
        (R = null),
        (P = null),
        (M = (null == e ? void 0 : e.isSwitchingAccount) ? T.u34.LOGGING_IN : T.u34.NONE),
        (B = ''),
        (F = null),
        (Z = !1),
        (K = !1),
        (z = !1),
        eu());
}
function eA() {
    M = T.u34.FORGOT_PASSWORD;
}
function eN() {
    M = T.u34.NONE;
}
function eC(e) {
    let { user: t } = e;
    ((R = t.id), void 0 !== t.authenticator_types && (G = t.authenticator_types), c.K.set(w, t.id));
}
function ew(e) {
    let { suspendedUserToken: t } = e;
    ((K = !1), (W = t), setImmediate(() => (0, g.uL)(T.Z5c.ACCOUNT_STANDING)));
}
function eR() {
    ((W = null), (M = T.u34.NONE), eS(), setImmediate(() => (0, g.uL)(T.Z5c.DEFAULT_LOGGED_OUT)));
}
class eP extends (i = s.ZP.Store) {
    initialize() {
        ((R = c.K.get(w)), null == a.getToken() && X(), this.addChangeListener(() => (0, p.u)(R)));
    }
    getLoginStatus() {
        return M;
    }
    getId() {
        return R;
    }
    getSessionId() {
        return P;
    }
    getAuthSessionIdHash() {
        return D;
    }
    getStaticAuthSessionId() {
        return L;
    }
    getToken() {
        return (0, y.LP)();
    }
    isAuthenticated() {
        return (0, y.$8)();
    }
    getFingerprint() {
        return x;
    }
    getAnalyticsToken() {
        return null != j ? j : a.getAnalyticsToken();
    }
    getMFATicket() {
        return B;
    }
    getMFAMethods() {
        return q;
    }
    hasTOTPEnabled() {
        return G.includes(d.Pi.TOTP);
    }
    getCredentials() {
        if (null == r) throw Error('no credentials');
        return r;
    }
    allowLogoutRedirect() {
        return !U;
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
A(eP, 'displayName', 'AuthenticationStore');
let eD = new eP(
    u.Z,
    {
        CONNECTION_OPEN: eb,
        OVERLAY_INITIALIZE: ey,
        CONNECTION_CLOSED: eO,
        AUTH_SESSION_CHANGE: eI,
        LOGIN: er,
        LOGIN_SUCCESS: eo,
        LOGIN_FAILURE: es,
        LOGIN_MFA_STEP: ed,
        LOGIN_MFA: ef,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: e_,
        LOGIN_ACCOUNT_DISABLED: ep,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eh,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: em,
        LOGIN_RESET: ei,
        LOGIN_STATUS_RESET: ea,
        LOGIN_SUSPENDED_USER: ew,
        LOGOUT: eS,
        FINGERPRINT: eg,
        REGISTER_SUCCESS: eE,
        FORGOT_PASSWORD_REQUEST: eA,
        FORGOT_PASSWORD_SENT: eN,
        UPDATE_TOKEN: ev,
        EXPERIMENTS_FETCH: Q,
        CURRENT_USER_UPDATE: eC,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eT,
        CLOSE_SUSPENDED_USER: eR,
        PASSWORDLESS_FAILURE: ec,
        PASSWORDLESS_START: el
    },
    u.c.Early
);
