let i, a, s, o, l, u, c, d, f, _, h, p, m, g;
var E,
    v = r(979554),
    I = r(442837),
    T = r(570140),
    b = r(981631);
function y(e, n, r) {
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
let S = b.QZA.CLOSED,
    A = {};
function N() {
    (S = b.QZA.OPEN), (A = {});
}
function C() {
    (S = b.QZA.CLOSED), (A = {});
}
function R() {
    (S = b.QZA.SUBMITTING), (A = {});
}
function O(e) {
    var n;
    if (S !== b.QZA.SUBMITTING) return !1;
    (S = b.QZA.OPEN), (A = null !== (n = e.errors) && void 0 !== n ? n : {});
}
function D(e) {
    let { section: n } = e;
    return n === b.oAB.ACCOUNT && N();
}
function L(e) {
    let { avatar: n } = e;
    (i = n), (h = void 0);
}
function x(e) {
    let { globalName: n } = e;
    a = n;
}
function w(e) {
    let { avatarDecoration: n } = e;
    s = n;
}
function P(e) {
    let { profileEffectId: n } = e;
    o = n;
}
function M(e) {
    let { item: n } = e;
    (null == n ? void 0 : n.type) === v.Z.PROFILE_EFFECT ? ((p = null), (m = null == n ? void 0 : n.id)) : ((m = null), (p = n));
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
    _ = n;
}
function V(e) {
    let { avatar: n } = e;
    h = n;
}
function j(e) {
    let { avatarDecoration: n } = e;
    p = n;
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
    (_ = n), (g = r), (p = i);
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
    (i = void 0), (a = void 0), (s = void 0), (o = void 0);
}
function X() {
    (l = void 0), (u = void 0), (c = void 0), (d = void 0), (f = void 0), (o = void 0);
}
function J() {
    (h = void 0), (p = void 0), (m = void 0), (g = void 0), (_ = void 0);
}
function $() {
    s = void 0;
}
function ee() {
    q(), J(), C();
}
class et extends (E = I.ZP.Store) {
    getFormState() {
        return S;
    }
    getErrors() {
        return A;
    }
    showNotice() {
        return void 0 !== i || void 0 !== l || void 0 !== u || void 0 !== c || void 0 !== d || void 0 !== f || void 0 !== s || void 0 !== o || void 0 !== a;
    }
    getIsSubmitDisabled() {
        return void 0 !== u && u.length > b.tPV;
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
        return s;
    }
    getPendingProfileEffectId() {
        return o;
    }
    getAllPending() {
        return {
            pendingAvatar: i,
            pendingBanner: l,
            pendingBio: u,
            pendingPronouns: c,
            pendingAccentColor: d,
            pendingThemeColors: f,
            pendingAvatarDecoration: s,
            pendingProfileEffectId: o,
            pendingGlobalName: a
        };
    }
    getTryItOutThemeColors() {
        return _;
    }
    getTryItOutAvatar() {
        return h;
    }
    getTryItOutAvatarDecoration() {
        return p;
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
            tryItOutAvatar: h,
            tryItOutAvatarDecoration: p,
            tryItOutProfileEffectId: m,
            tryItOutBanner: g
        };
    }
}
y(et, 'displayName', 'UserSettingsAccountStore'),
    (n.Z = new et(T.Z, {
        USER_SETTINGS_ACCOUNT_INIT: N,
        USER_SETTINGS_MODAL_INIT: N,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: N,
        USER_SETTINGS_MODAL_SET_SECTION: D,
        USER_SETTINGS_ACCOUNT_CLOSE: C,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ee,
        USER_SETTINGS_ACCOUNT_SUBMIT: R,
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: O,
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: L,
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: x,
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
