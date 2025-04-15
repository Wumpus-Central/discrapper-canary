let r, i, o, a, s, l, c, u, d, f, _, p, h, m, g;
n.d(t, { Z: () => er });
var E,
    b = n(979554),
    y = n(442837),
    v = n(570140),
    O = n(981631);
function I(e, t, n) {
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
let S = O.QZA.CLOSED,
    T = {};
function N() {
    (S = O.QZA.OPEN), (T = {});
}
function A() {
    (S = O.QZA.CLOSED), (T = {});
}
function C() {
    (S = O.QZA.SUBMITTING), (T = {});
}
function R(e) {
    var t;
    if (S !== O.QZA.SUBMITTING) return !1;
    (S = O.QZA.OPEN), (T = null != (t = e.errors) ? t : {});
}
function P(e) {
    let { section: t } = e;
    return t === O.oAB.ACCOUNT && N();
}
function w(e) {
    let { avatar: t } = e;
    (r = t), (p = void 0);
}
function D(e) {
    let { globalName: t } = e;
    i = t;
}
function L(e) {
    let { avatarDecoration: t } = e;
    o = t;
}
function x(e) {
    let { nameplate: t } = e;
    s = t;
}
function M(e) {
    let { profileEffectId: t } = e;
    a = t;
}
function k(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === b.Z.PROFILE_EFFECT ? ((h = null), (m = null == t ? void 0 : t.id)) : (null == t ? void 0 : t.type) === b.Z.AVATAR_DECORATION && ((m = null), (h = t));
}
function j(e) {
    let { banner: t } = e;
    l = t;
}
function U(e) {
    let { bio: t } = e;
    c = t;
}
function G(e) {
    let { pronouns: t } = e;
    u = t;
}
function B(e) {
    let { color: t } = e;
    d = t;
}
function F(e) {
    let { themeColors: t } = e;
    f = t;
}
function V(e) {
    let { themeColors: t } = e;
    _ = t;
}
function Z(e) {
    let { avatar: t } = e;
    p = t;
}
function H(e) {
    let { avatarDecoration: t } = e;
    h = t;
}
function W(e) {
    let { profileEffectId: t } = e;
    m = t;
}
function Y(e) {
    let { banner: t } = e;
    g = t;
}
function K(e) {
    let { banner: t, themeColors: n, avatarDecoration: r } = e;
    (g = t), (_ = n), (h = r);
}
function z() {
    r = void 0;
}
function q() {
    T = {};
}
function Q() {
    X(), J(), (T = {});
}
function X() {
    (r = void 0), (i = void 0), (o = void 0), (a = void 0), (s = void 0);
}
function J() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (a = void 0);
}
function $() {
    (p = void 0), (h = void 0), (m = void 0), (g = void 0), (_ = void 0);
}
function ee() {
    o = void 0;
}
function et() {
    Q(), $(), A();
}
class en extends (E = y.ZP.Store) {
    getFormState() {
        return S;
    }
    getErrors() {
        return T;
    }
    showNotice() {
        return void 0 !== r || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== f || void 0 !== o || void 0 !== a || void 0 !== i || void 0 !== s;
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > O.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingGlobalName() {
        return i;
    }
    getPendingBanner() {
        return l;
    }
    getPendingBio() {
        return c;
    }
    getPendingPronouns() {
        return u;
    }
    getPendingAccentColor() {
        return d;
    }
    getPendingThemeColors() {
        return f;
    }
    getPendingAvatarDecoration() {
        return o;
    }
    getPendingNameplate() {
        return s;
    }
    getPendingProfileEffectId() {
        return a;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingBanner: l,
            pendingBio: c,
            pendingPronouns: u,
            pendingAccentColor: d,
            pendingThemeColors: f,
            pendingAvatarDecoration: o,
            pendingProfileEffectId: a,
            pendingGlobalName: i,
            pendingNameplate: s
        };
    }
    getTryItOutThemeColors() {
        return _;
    }
    getTryItOutAvatar() {
        return p;
    }
    getTryItOutAvatarDecoration() {
        return h;
    }
    getTryItOutProfileEffectId() {
        return m;
    }
    getTryItOutBanner() {
        return g;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: _,
            tryItOutAvatar: p,
            tryItOutAvatarDecoration: h,
            tryItOutProfileEffectId: m,
            tryItOutBanner: g
        };
    }
}
I(en, 'displayName', 'UserSettingsAccountStore');
let er = new en(v.Z, {
    USER_SETTINGS_ACCOUNT_INIT: N,
    USER_SETTINGS_MODAL_INIT: N,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: N,
    USER_SETTINGS_MODAL_SET_SECTION: P,
    USER_SETTINGS_ACCOUNT_CLOSE: A,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: et,
    USER_SETTINGS_ACCOUNT_SUBMIT: C,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: R,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: w,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: D,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: x,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: F,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: Z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Y,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: V,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: K,
    USER_SETTINGS_CLEAR_ERRORS: q,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: X,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: J,
    USER_SETTINGS_RESET_ALL_PENDING: Q,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: $,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: ee,
    LOGOUT: z
});
