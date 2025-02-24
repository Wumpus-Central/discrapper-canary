let r, i, o, a, s, l, c, u, d, f, p, _, h, m, g, E;
n.d(t, { Z: () => eo });
var v,
    b = n(979554),
    y = n(442837),
    O = n(570140),
    S = n(981631);
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
let T = S.QZA.CLOSED,
    N = {};
function A() {
    (T = S.QZA.OPEN), (N = {});
}
function C() {
    (T = S.QZA.CLOSED), (N = {});
}
function R() {
    (T = S.QZA.SUBMITTING), (N = {});
}
function P(e) {
    var t;
    if (T !== S.QZA.SUBMITTING) return !1;
    (T = S.QZA.OPEN), (N = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function D(e) {
    let { section: t } = e;
    return t === S.oAB.ACCOUNT && A();
}
function w(e) {
    let { avatar: t } = e;
    (r = t), (_ = void 0);
}
function L(e) {
    let { avatar: t } = e;
    (i = t), (h = void 0);
}
function x(e) {
    let { globalName: t } = e;
    o = t;
}
function M(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function j(e) {
    let { profileEffectId: t } = e;
    s = t;
}
function k(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === b.Z.PROFILE_EFFECT ? ((m = null), (g = null == t ? void 0 : t.id)) : (null == t ? void 0 : t.type) === b.Z.AVATAR_DECORATION && ((g = null), (m = t));
}
function U(e) {
    let { banner: t } = e;
    l = t;
}
function G(e) {
    let { bio: t } = e;
    c = t;
}
function B(e) {
    let { pronouns: t } = e;
    u = t;
}
function F(e) {
    let { color: t } = e;
    d = t;
}
function V(e) {
    let { themeColors: t } = e;
    f = t;
}
function Z(e) {
    let { themeColors: t } = e;
    p = t;
}
function H(e) {
    let { avatar: t } = e;
    _ = t;
}
function W(e) {
    let { avatar: t } = e;
    h = t;
}
function Y(e) {
    let { avatarDecoration: t } = e;
    m = t;
}
function K(e) {
    let { profileEffectId: t } = e;
    g = t;
}
function z(e) {
    let { banner: t } = e;
    E = t;
}
function q(e) {
    let {
        preset: { themeColors: t, bannerImage: n, avatarDecoration: r }
    } = e;
    (p = t), (E = n), (m = r);
}
function Q() {
    (r = void 0), (i = void 0);
}
function X() {
    N = {};
}
function J() {
    $(), ee(), (N = {});
}
function $() {
    (r = void 0), (i = void 0), (o = void 0), (a = void 0), (s = void 0);
}
function ee() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (s = void 0);
}
function et() {
    (_ = void 0), (h = void 0), (m = void 0), (g = void 0), (E = void 0), (p = void 0);
}
function en() {
    a = void 0;
}
function er() {
    J(), et(), C();
}
class ei extends (v = y.ZP.Store) {
    getFormState() {
        return T;
    }
    getErrors() {
        return N;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== f || void 0 !== a || void 0 !== s || void 0 !== o;
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > S.tPV;
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
    getTryItOutAvatarV2() {
        return h;
    }
    getTryItOutAvatarDecoration() {
        return m;
    }
    getTryItOutProfileEffectId() {
        return g;
    }
    getTryItOutBanner() {
        return E;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: p,
            tryItOutAvatar: _,
            tryItOutAvatarV2: h,
            tryItOutAvatarDecoration: m,
            tryItOutProfileEffectId: g,
            tryItOutBanner: E
        };
    }
}
I(ei, 'displayName', 'UserSettingsAccountStore');
let eo = new ei(O.Z, {
    USER_SETTINGS_ACCOUNT_INIT: A,
    USER_SETTINGS_MODAL_INIT: A,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: A,
    USER_SETTINGS_MODAL_SET_SECTION: D,
    USER_SETTINGS_ACCOUNT_CLOSE: C,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: er,
    USER_SETTINGS_ACCOUNT_SUBMIT: R,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: P,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: w,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_V2: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: M,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: V,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_V2: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: Y,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: K,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: Z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: q,
    USER_SETTINGS_CLEAR_ERRORS: X,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: $,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: ee,
    USER_SETTINGS_RESET_ALL_PENDING: J,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: et,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: en,
    LOGOUT: Q
});
