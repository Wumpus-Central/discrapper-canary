let r;
n.r(t), n.d(t, { default: () => eD }), n(539854), n(358797), n(415506);
var i,
    o = n(213919),
    a = n(756647),
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
    I = n(412788),
    S = n(981631),
    T = n(723359);
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
    P = 'user_id_cache',
    R = null,
    w = null,
    D = null,
    L = null,
    x = null,
    k = null,
    M = null,
    j = S.u34.NONE,
    U = !1,
    G = [],
    B = '',
    F = !1,
    V = null,
    Z = !1,
    H = !1,
    Y = null,
    W = null,
    K = !1,
    z = !1,
    q = [];
function Q(e) {
    let t = null != o.getToken(),
        n = null != c.K.get(S.B1h);
    N.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n
    });
}
function X() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((x = c.K.get(C)), null != Y)) return Y;
    let t = null != x ? x : o.getToken();
    !(0, g.m1)() || (!e && null != t) || v.Z.isHandoffAvailable() || J({ withGuildExperiments: !0 });
}
function J(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = b.default.getSuperPropertiesBase64();
    null != r && (n['X-Super-Properties'] = r),
        null != x && (n['X-Fingerprint'] = x),
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
                    let { fingerprint: t, assignments: n, guild_experiments: r } = e.body;
                    t &&
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
                        (0, f.$L)();
                },
                () => {
                    (Y = null), u.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function $() {
    (k = x), (x = null), c.K.remove(C);
}
function ee(e, t) {
    Q('setAuthToken called.'), (null == t || t !== R) && o.removeAnalyticsToken(), o.setToken(e, t);
}
function et(e) {
    (M = e), o.setAnalyticsToken(e);
}
function en() {
    return Q('removeAuthToken called.'), o.removeAnalyticsToken(), o.removeToken();
}
function er(e) {
    let { isPasswordAttempt: t } = e;
    (j = S.u34.LOGGING_IN), (z = z || !0 === t);
}
function ei(e) {
    let { isMultiAccount: t } = e;
    (j = S.u34.NONE), (B = ''), (F = !1), (V = null), (r = null), t || (eu(), en(), X(!1));
}
function eo() {
    j = S.u34.NONE;
}
function ea(e) {
    let { token: t } = e;
    (j = S.u34.NONE), ee(t), $(), (B = ''), (F = !1), (V = null), eu(), (K = !1);
}
function es(e) {
    let { error: t } = e;
    (B = ''), (F = !1), (V = null), eu(), (j = null != (0, _.p)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE);
}
function el() {
    K = !0;
}
function ec(e) {
    let { error: t } = e;
    (B = ''), (F = !1), (V = null), (K = !1), (j = null != (0, _.F)(t).date_of_birth ? S.u34.LOGIN_AGE_GATE : S.u34.NONE);
}
function eu() {
    let e = [];
    null != V &&
        e.push({
            type: 'webauthn',
            challenge: V
        }),
        Z &&
            e.push({
                type: 'totp',
                backup_codes_allowed: H
            }),
        H && e.push({ type: 'backup' }),
        F && e.push({ type: 'sms' }),
        (q = e);
}
function ed(e) {
    let { ticket: t, sms: n, webauthn: r, backup: i, totp: o } = e;
    null != t && ((B = t), (F = n), (V = null != r ? r : null), (H = i), (Z = o), eu()), (j = S.u34.MFA_STEP);
}
function ef() {
    j = S.u34.LOGGING_IN_MFA;
}
function e_(e) {
    (j = S.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function ep(e) {
    (j = S.u34.ACCOUNT_DISABLED), (r = e.credentials);
}
function eh(e) {
    (j = S.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION), (r = e.credentials);
}
function em(e) {
    (j = S.u34.PHONE_IP_AUTHORIZATION), (r = e.credentials);
}
function eg(e) {
    let t = e.fingerprint;
    null == x
        ? null != t
            ? (b.default.track(S.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != k ? (0, a.s)(k) : null,
                  new_fingerprint: (0, a.s)(t)
              }),
              (x = t),
              (k = t),
              c.K.set(C, x))
            : X()
        : null != t &&
          x !== t &&
          b.default.track(S.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, a.s)(x),
              dropped_fingerprint: (0, a.s)(t)
          });
}
function eE(e) {
    let { token: t } = e;
    ee(t), $();
}
function eb(e) {
    var t;
    let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: o, auth: a, staticAuthSessionId: s } = e;
    Q('handleConnectionOpen called'), O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, E.Z)(n)), (w = r), (D = i), (L = s), et(o), (R = n.id), void 0 !== a && (G = a.authenticator_types), c.K.set(P, n.id);
}
function ey(e) {
    var t;
    let { user: n, sessionId: r, analyticsToken: i, token: o } = e;
    O.Z.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, E.Z)(n)), (w = r), (M = i), ee(o, n.id), null != i && et(i), $(), (R = n.id), c.K.set(P, n.id);
}
function eO(e) {
    let { code: t } = e;
    Q('handleConnectionClosed called with code '.concat(t, '.'));
    let r = n(952265).nf;
    if (4004 === t) {
        if (U || r(T.$$) || r(T.dG)) return void eS();
        b.default.track(S.rMx.APP_USER_DEAUTHENTICATED, { user_id: c.K.get(P) }), eT(), setImmediate(() => (0, g.uL)(S.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function ev(e) {
    let { token: t, userId: n } = e;
    Q('handleUpdateToken called'), ee(t, n), $();
}
function eI(e) {
    let { authSessionIdHash: t } = e;
    null != t && (D = t);
}
function eS() {
    (U = !0),
        eT(),
        u.Z.wait(() => {
            (0, g.uL)(S.Z5c.REGISTER);
        });
}
function eT(e) {
    var t;
    Q('handleLogout called.');
    let n = en();
    (null != (t = null == e ? void 0 : e.isSwitchingAccount) && t) || (n && $(), X()),
        s.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore', 'LayoutStore', 'OverlaySettingsStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        I.Z.clearAll(),
        h.ZH(),
        O.Z.clearUser(),
        c.K.remove(P),
        (R = null),
        (w = null),
        (j = (null == e ? void 0 : e.isSwitchingAccount) ? S.u34.LOGGING_IN : S.u34.NONE),
        (B = ''),
        (V = null),
        (F = !1),
        (K = !1),
        (z = !1),
        eu();
}
function eA() {
    j = S.u34.FORGOT_PASSWORD;
}
function eN() {
    j = S.u34.NONE;
}
function eC(e) {
    let { user: t } = e;
    (R = t.id), void 0 !== t.authenticator_types && (G = t.authenticator_types), c.K.set(P, t.id);
}
function eP(e) {
    let { suspendedUserToken: t } = e;
    (K = !1), (W = t), setImmediate(() => (0, g.uL)(S.Z5c.ACCOUNT_STANDING));
}
function eR() {
    (W = null), (j = S.u34.NONE), eT(), setImmediate(() => (0, g.uL)(S.Z5c.DEFAULT_LOGGED_OUT));
}
class ew extends (i = s.ZP.Store) {
    initialize() {
        (R = c.K.get(P)), null == o.getToken() && X(), this.addChangeListener(() => (0, p.u)(R));
    }
    getLoginStatus() {
        return j;
    }
    getId() {
        return R;
    }
    getSessionId() {
        return w;
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
        return null != M ? M : o.getAnalyticsToken();
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
A(ew, 'displayName', 'AuthenticationStore');
let eD = new ew(
    u.Z,
    {
        CONNECTION_OPEN: eb,
        OVERLAY_INITIALIZE: ey,
        CONNECTION_CLOSED: eO,
        AUTH_SESSION_CHANGE: eI,
        LOGIN: er,
        LOGIN_SUCCESS: ea,
        LOGIN_FAILURE: es,
        LOGIN_MFA_STEP: ed,
        LOGIN_MFA: ef,
        LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: e_,
        LOGIN_ACCOUNT_DISABLED: ep,
        LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eh,
        LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: em,
        LOGIN_RESET: ei,
        LOGIN_STATUS_RESET: eo,
        LOGIN_SUSPENDED_USER: eP,
        LOGOUT: eT,
        FINGERPRINT: eg,
        REGISTER_SUCCESS: eE,
        FORGOT_PASSWORD_REQUEST: eA,
        FORGOT_PASSWORD_SENT: eN,
        UPDATE_TOKEN: ev,
        EXPERIMENTS_FETCH: J,
        CURRENT_USER_UPDATE: eC,
        AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eS,
        CLOSE_SUSPENDED_USER: eR,
        PASSWORDLESS_FAILURE: ec,
        PASSWORDLESS_START: el
    },
    u.c.Early
);
