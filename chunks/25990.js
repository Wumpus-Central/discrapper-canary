let i, a, o, s, l, u, c, d, f, p, h, _, m, g;
var E,
    v = r(979554),
    y = r(442837),
    b = r(570140),
    I = r(981631);
function T(e, n, r) {
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
let S = I.QZA.CLOSED,
    A = {};
function C() {
    (S = I.QZA.OPEN), (A = {});
}
function N() {
    (S = I.QZA.CLOSED), (A = {});
}
function R() {
    (S = I.QZA.SUBMITTING), (A = {});
}
function O(e) {
    var n;
    if (S !== I.QZA.SUBMITTING) return !1;
    (S = I.QZA.OPEN), (A = null !== (n = e.errors) && void 0 !== n ? n : {});
}
function D(e) {
    let { section: n } = e;
    return n === I.oAB.ACCOUNT && C();
}
function x(e) {
    let { avatar: n } = e;
    (i = n), (h = void 0);
}
function L(e) {
    let { globalName: n } = e;
    a = n;
}
function w(e) {
    let { avatarDecoration: n } = e;
    o = n;
}
function P(e) {
    let { profileEffectId: n } = e;
    s = n;
}
function M(e) {
    let { item: n } = e;
    (null == n ? void 0 : n.type) === v.Z.PROFILE_EFFECT ? ((_ = null), (m = null == n ? void 0 : n.id)) : ((m = null), (_ = n));
}
function k(e) {
    let { banner: n } = e;
    l = n;
}
function U(e) {
    let { bio: n } = e;
    u = n;
}
function B(e) {
    let { pronouns: n } = e;
    c = n;
}
function G(e) {
    let { color: n } = e;
    d = n;
}
function Z(e) {
    let { themeColors: n } = e;
    f = n;
}
function F(e) {
    let { themeColors: n } = e;
    p = n;
}
function V(e) {
    let { avatar: n } = e;
    h = n;
}
function j(e) {
    let { avatarDecoration: n } = e;
    _ = n;
}
function H(e) {
    let { profileEffectId: n } = e;
    m = n;
}
function Y(e) {
    let { banner: n } = e;
    g = n;
}
function W(e) {
    let {
        preset: { themeColors: n, bannerImage: r, avatarDecoration: i }
    } = e;
    (p = n), (g = r), (_ = i);
}
function K() {
    i = void 0;
}
function z() {
    A = {};
}
function q() {
    Q(), X(), (A = {});
}
function Q() {
    (i = void 0), (a = void 0), (o = void 0), (s = void 0);
}
function X() {
    (l = void 0), (u = void 0), (c = void 0), (d = void 0), (f = void 0), (s = void 0);
}
function J() {
    (h = void 0), (_ = void 0), (m = void 0), (g = void 0), (p = void 0);
}
function $() {
    o = void 0;
}
function ee() {
    q(), J(), N();
}
class et extends (E = y.ZP.Store) {
    getFormState() {
        return S;
    }
    getErrors() {
        return A;
    }
    showNotice() {
        return void 0 !== i || void 0 !== l || void 0 !== u || void 0 !== c || void 0 !== d || void 0 !== f || void 0 !== o || void 0 !== s || void 0 !== a;
    }
    getIsSubmitDisabled() {
        return void 0 !== u && u.length > I.tPV;
    }
    getPendingAvatar() {
        return i;
    }
    getPendingGlobalName() {
        return a;
    }
    getPendingBanner() {
        return l;
    }
    getPendingBio() {
        return u;
    }
    getPendingPronouns() {
        return c;
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
    getPendingProfileEffectId() {
        return s;
    }
    getAllPending() {
        return {
            pendingAvatar: i,
            pendingBanner: l,
            pendingBio: u,
            pendingPronouns: c,
            pendingAccentColor: d,
            pendingThemeColors: f,
            pendingAvatarDecoration: o,
            pendingProfileEffectId: s,
            pendingGlobalName: a
        };
    }
    getTryItOutThemeColors() {
        return p;
    }
    getTryItOutAvatar() {
        return h;
    }
    getTryItOutAvatarDecoration() {
        return _;
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
            tryItOutAvatar: h,
            tryItOutAvatarDecoration: _,
            tryItOutProfileEffectId: m,
            tryItOutBanner: g
        };
    }
}
T(et, 'displayName', 'UserSettingsAccountStore'),
    (n.Z = new et(b.Z, {
        USER_SETTINGS_ACCOUNT_INIT: C,
        USER_SETTINGS_MODAL_INIT: C,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: C,
        USER_SETTINGS_MODAL_SET_SECTION: D,
        USER_SETTINGS_ACCOUNT_CLOSE: N,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ee,
        USER_SETTINGS_ACCOUNT_SUBMIT: R,
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: O,
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: x,
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: L,
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: w,
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: M,
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: P,
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: k,
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: U,
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: B,
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: G,
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: Z,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: V,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: j,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: H,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Y,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: F,
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: W,
        USER_SETTINGS_CLEAR_ERRORS: z,
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: Q,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: X,
        USER_SETTINGS_RESET_ALL_PENDING: q,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: J,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: $,
        LOGOUT: K
    }));
