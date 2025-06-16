let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b;
n.d(t, { Z: () => ec });
var y,
    O = n(979554),
    v = n(442837),
    I = n(570140),
    T = n(981631);
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
let A = T.QZA.CLOSED,
    N = {};
function C() {
    (A = T.QZA.OPEN), (N = {});
}
function R() {
    (A = T.QZA.CLOSED), (N = {});
}
function P() {
    (A = T.QZA.SUBMITTING), (N = {});
}
function w(e) {
    var t;
    if (A !== T.QZA.SUBMITTING) return !1;
    (A = T.QZA.OPEN), (N = null != (t = e.errors) ? t : {});
}
function D(e) {
    let { section: t } = e;
    return t === T.oAB.ACCOUNT && C();
}
function L(e) {
    let { avatar: t } = e;
    (r = t), (m = void 0);
}
function x(e) {
    let { globalName: t } = e;
    i = t;
}
function k(e) {
    let { legacyUsernameDisabled: t } = e;
    _ = t;
}
function M(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function j(e) {
    let { nameplate: t } = e;
    s = t;
}
function U(e) {
    let { profileEffectId: t } = e;
    o = t;
}
function G(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === O.Z.PROFILE_EFFECT ? ((g = null), (E = null == t ? void 0 : t.id)) : (null == t ? void 0 : t.type) === O.Z.AVATAR_DECORATION && ((E = null), (g = t));
}
function B(e) {
    let { banner: t } = e;
    l = t;
}
function V(e) {
    let { bio: t } = e;
    c = t;
}
function F(e) {
    let { pronouns: t } = e;
    u = t;
}
function Z(e) {
    let { color: t } = e;
    d = t;
}
function H(e) {
    let { themeColors: t } = e;
    f = t;
}
function Y(e) {
    let { primaryGuildId: t } = e;
    p = t;
}
function W(e) {
    let { themeColors: t } = e;
    h = t;
}
function K(e) {
    let { avatar: t } = e;
    m = t;
}
function z(e) {
    let { avatarDecoration: t } = e;
    g = t;
}
function q(e) {
    let { profileEffectId: t } = e;
    E = t;
}
function X(e) {
    let { banner: t } = e;
    b = t;
}
function Q(e) {
    let { banner: t, themeColors: n, avatarDecoration: r } = e;
    (b = t), (h = n), (g = r);
}
function J() {
    r = void 0;
}
function $() {
    N = {};
}
function ee() {
    et(), en(), ea(), eo(), (N = {});
}
function et() {
    (r = void 0), (i = void 0), (a = void 0), (o = void 0), (s = void 0);
}
function en() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (o = void 0);
}
function er() {
    (m = void 0), (g = void 0), (E = void 0), (b = void 0), (h = void 0);
}
function ei() {
    a = void 0;
}
function ea() {
    _ = void 0;
}
function eo() {
    p = void 0;
}
function es() {
    ee(), er(), R();
}
class el extends (y = v.ZP.Store) {
    getFormState() {
        return A;
    }
    getErrors() {
        return N;
    }
    showNotice() {
        return void 0 !== r || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== f || void 0 !== a || void 0 !== o || void 0 !== i || void 0 !== s || void 0 !== _ || void 0 !== p;
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > T.tPV;
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
        return a;
    }
    getPendingNameplate() {
        return s;
    }
    getPendingProfileEffectId() {
        return o;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingBanner: l,
            pendingBio: c,
            pendingPronouns: u,
            pendingAccentColor: d,
            pendingThemeColors: f,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: o,
            pendingGlobalName: i,
            pendingNameplate: s,
            pendingLegacyUsernameDisabled: _,
            pendingPrimaryGuildId: p
        };
    }
    getTryItOutThemeColors() {
        return h;
    }
    getTryItOutAvatar() {
        return m;
    }
    getTryItOutAvatarDecoration() {
        return g;
    }
    getTryItOutProfileEffectId() {
        return E;
    }
    getTryItOutBanner() {
        return b;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: h,
            tryItOutAvatar: m,
            tryItOutAvatarDecoration: g,
            tryItOutProfileEffectId: E,
            tryItOutBanner: b
        };
    }
}
S(el, 'displayName', 'UserSettingsAccountStore');
let ec = new el(I.Z, {
    USER_SETTINGS_ACCOUNT_INIT: C,
    USER_SETTINGS_MODAL_INIT: C,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: C,
    USER_SETTINGS_MODAL_SET_SECTION: D,
    USER_SETTINGS_ACCOUNT_CLOSE: R,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: es,
    USER_SETTINGS_ACCOUNT_SUBMIT: P,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: w,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: j,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: V,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: Z,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: K,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: X,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: Q,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: Y,
    USER_SETTINGS_CLEAR_ERRORS: $,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: et,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: en,
    USER_SETTINGS_RESET_ALL_PENDING: ee,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: er,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: ei,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: ea,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: eo,
    LOGOUT: J
});
