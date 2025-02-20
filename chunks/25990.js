let r, i, o, a, s, l, c, u, d, f, p, _, h, m, g;
n.d(t, { Z: () => er });
var E,
    v = n(979554),
    b = n(442837),
    y = n(570140),
    O = n(981631);
function S(e, t, n) {
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
let I = O.QZA.CLOSED,
    T = {};
function N() {
    (I = O.QZA.OPEN), (T = {});
}
function A() {
    (I = O.QZA.CLOSED), (T = {});
}
function C() {
    (I = O.QZA.SUBMITTING), (T = {});
}
function R(e) {
    var t;
    if (I !== O.QZA.SUBMITTING) return !1;
    (I = O.QZA.OPEN), (T = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function P(e) {
    let { section: t } = e;
    return t === O.oAB.ACCOUNT && N();
}
function w(e) {
    let { avatar: t } = e;
    (r = t), (_ = void 0);
}
function D(e) {
    let { avatar: t } = e;
    (i = t), (_ = void 0);
}
function x(e) {
    let { globalName: t } = e;
    o = t;
}
function L(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function M(e) {
    let { profileEffectId: t } = e;
    s = t;
}
function k(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === v.Z.PROFILE_EFFECT ? ((h = null), (m = null == t ? void 0 : t.id)) : ((m = null), (h = t));
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
function Z(e) {
    let { themeColors: t } = e;
    f = t;
}
function F(e) {
    let { themeColors: t } = e;
    p = t;
}
function V(e) {
    let { avatar: t } = e;
    _ = t;
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
    let {
        preset: { themeColors: t, bannerImage: n, avatarDecoration: r }
    } = e;
    (p = t), (g = n), (h = r);
}
function z() {
    (r = void 0), (i = void 0);
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
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (s = void 0);
}
function $() {
    (_ = void 0), (h = void 0), (m = void 0), (g = void 0), (p = void 0);
}
function ee() {
    a = void 0;
}
function et() {
    Q(), $(), A();
}
class en extends (E = b.ZP.Store) {
    getFormState() {
        return I;
    }
    getErrors() {
        return T;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== f || void 0 !== a || void 0 !== s || void 0 !== o;
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > O.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarV2() {
        return i;
    }
    getPendingGlobalName() {
        return o;
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
        return a;
    }
    getPendingProfileEffectId() {
        return s;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarV2: i,
            pendingBanner: l,
            pendingBio: c,
            pendingPronouns: u,
            pendingAccentColor: d,
            pendingThemeColors: f,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: s,
            pendingGlobalName: o
        };
    }
    getTryItOutThemeColors() {
        return p;
    }
    getTryItOutAvatar() {
        return _;
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
            tryItOutThemeColors: p,
            tryItOutAvatar: _,
            tryItOutAvatarDecoration: h,
            tryItOutProfileEffectId: m,
            tryItOutBanner: g
        };
    }
}
S(en, 'displayName', 'UserSettingsAccountStore');
let er = new en(y.Z, {
    USER_SETTINGS_ACCOUNT_INIT: N,
    USER_SETTINGS_MODAL_INIT: N,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: N,
    USER_SETTINGS_MODAL_SET_SECTION: P,
    USER_SETTINGS_ACCOUNT_CLOSE: A,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: et,
    USER_SETTINGS_ACCOUNT_SUBMIT: C,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: R,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: w,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_V2: D,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: L,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: Z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: V,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Y,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: F,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: K,
    USER_SETTINGS_CLEAR_ERRORS: q,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: X,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: J,
    USER_SETTINGS_RESET_ALL_PENDING: Q,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: $,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: ee,
    LOGOUT: z
});
