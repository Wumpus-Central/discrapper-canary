let i, r, a, s, o, l, u, c, d, f, _, p, h, m;
n.d(t, { Z: () => et });
var g,
    E = n(979554),
    v = n(442837),
    y = n(570140),
    I = n(981631);
function T(e, t, n) {
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
let b = I.QZA.CLOSED,
    S = {};
function A() {
    (b = I.QZA.OPEN), (S = {});
}
function N() {
    (b = I.QZA.CLOSED), (S = {});
}
function C() {
    (b = I.QZA.SUBMITTING), (S = {});
}
function R(e) {
    var t;
    if (b !== I.QZA.SUBMITTING) return !1;
    (b = I.QZA.OPEN), (S = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function O(e) {
    let { section: t } = e;
    return t === I.oAB.ACCOUNT && A();
}
function D(e) {
    let { avatar: t } = e;
    (i = t), (_ = void 0);
}
function L(e) {
    let { globalName: t } = e;
    r = t;
}
function x(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function P(e) {
    let { profileEffectId: t } = e;
    s = t;
}
function w(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === E.Z.PROFILE_EFFECT ? ((p = null), (h = null == t ? void 0 : t.id)) : ((h = null), (p = t));
}
function M(e) {
    let { banner: t } = e;
    o = t;
}
function k(e) {
    let { bio: t } = e;
    l = t;
}
function U(e) {
    let { pronouns: t } = e;
    u = t;
}
function G(e) {
    let { color: t } = e;
    c = t;
}
function B(e) {
    let { themeColors: t } = e;
    d = t;
}
function Z(e) {
    let { themeColors: t } = e;
    f = t;
}
function F(e) {
    let { avatar: t } = e;
    _ = t;
}
function V(e) {
    let { avatarDecoration: t } = e;
    p = t;
}
function j(e) {
    let { profileEffectId: t } = e;
    h = t;
}
function H(e) {
    let { banner: t } = e;
    m = t;
}
function Y(e) {
    let {
        preset: { themeColors: t, bannerImage: n, avatarDecoration: i }
    } = e;
    (f = t), (m = n), (p = i);
}
function W() {
    i = void 0;
}
function K() {
    S = {};
}
function z() {
    q(), Q(), (S = {});
}
function q() {
    (i = void 0), (r = void 0), (a = void 0), (s = void 0);
}
function Q() {
    (o = void 0), (l = void 0), (u = void 0), (c = void 0), (d = void 0), (s = void 0);
}
function X() {
    (_ = void 0), (p = void 0), (h = void 0), (m = void 0), (f = void 0);
}
function J() {
    a = void 0;
}
function $() {
    z(), X(), N();
}
class ee extends (g = v.ZP.Store) {
    getFormState() {
        return b;
    }
    getErrors() {
        return S;
    }
    showNotice() {
        return void 0 !== i || void 0 !== o || void 0 !== l || void 0 !== u || void 0 !== c || void 0 !== d || void 0 !== a || void 0 !== s || void 0 !== r;
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > I.tPV;
    }
    getPendingAvatar() {
        return i;
    }
    getPendingGlobalName() {
        return r;
    }
    getPendingBanner() {
        return o;
    }
    getPendingBio() {
        return l;
    }
    getPendingPronouns() {
        return u;
    }
    getPendingAccentColor() {
        return c;
    }
    getPendingThemeColors() {
        return d;
    }
    getPendingAvatarDecoration() {
        return a;
    }
    getPendingProfileEffectId() {
        return s;
    }
    getAllPending() {
        return {
            pendingAvatar: i,
            pendingBanner: o,
            pendingBio: l,
            pendingPronouns: u,
            pendingAccentColor: c,
            pendingThemeColors: d,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: s,
            pendingGlobalName: r
        };
    }
    getTryItOutThemeColors() {
        return f;
    }
    getTryItOutAvatar() {
        return _;
    }
    getTryItOutAvatarDecoration() {
        return p;
    }
    getTryItOutProfileEffectId() {
        return h;
    }
    getTryItOutBanner() {
        return m;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: f,
            tryItOutAvatar: _,
            tryItOutAvatarDecoration: p,
            tryItOutProfileEffectId: h,
            tryItOutBanner: m
        };
    }
}
T(ee, 'displayName', 'UserSettingsAccountStore');
let et = new ee(y.Z, {
    USER_SETTINGS_ACCOUNT_INIT: A,
    USER_SETTINGS_MODAL_INIT: A,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: A,
    USER_SETTINGS_MODAL_SET_SECTION: O,
    USER_SETTINGS_ACCOUNT_CLOSE: N,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: $,
    USER_SETTINGS_ACCOUNT_SUBMIT: C,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: R,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: D,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: x,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: w,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: P,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: B,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: F,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: V,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: j,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: Z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: Y,
    USER_SETTINGS_CLEAR_ERRORS: K,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: q,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: Q,
    USER_SETTINGS_RESET_ALL_PENDING: z,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: X,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: J,
    LOGOUT: W
});
