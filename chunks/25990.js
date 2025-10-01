let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y;
n.d(t, { Z: () => ef });
var O,
    v = n(442837),
    I = n(570140),
    T = n(922347),
    S = n(212161),
    A = n(981631);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let N = A.QZA.CLOSED,
    R = {};
function P() {
    (N = A.QZA.OPEN), (R = {});
}
function w() {
    (N = A.QZA.CLOSED), (R = {});
}
function D() {
    (N = A.QZA.SUBMITTING), (R = {});
}
function L(e) {
    var t;
    if (N !== A.QZA.SUBMITTING) return !1;
    (N = A.QZA.OPEN), (R = null != (t = e.errors) ? t : {});
}
function x(e) {
    let { section: t } = e;
    return t === A.oAB.ACCOUNT && P();
}
function j(e) {
    let { avatar: t } = e;
    (r = t), (g = void 0);
}
function M(e) {
    let { globalName: t } = e;
    i = t;
}
function k(e) {
    let { legacyUsernameDisabled: t } = e;
    _ = t;
}
function U(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function G(e) {
    let { nameplate: t } = e;
    s = t;
}
function B(e) {
    let { profileEffect: t } = e;
    o = t;
}
function Z(e) {
    let { item: t } = e;
    (0, T.M)(t) ? ((E = t), (b = null)) : (0, S.H)(t) && ((E = null), (b = t));
}
function F(e) {
    let { banner: t } = e;
    l = t;
}
function V(e) {
    let { bio: t } = e;
    c = t;
}
function H(e) {
    let { pronouns: t } = e;
    u = t;
}
function Y(e) {
    let { color: t } = e;
    d = t;
}
function W(e) {
    let { themeColors: t } = e;
    f = t;
}
function K(e) {
    let { primaryGuildId: t } = e;
    p = t;
}
function z(e) {
    let { displayNameStyles: t } = e;
    h = t;
}
function q(e) {
    let { themeColors: t } = e;
    m = t;
}
function X(e) {
    let { avatar: t } = e;
    g = t;
}
function Q(e) {
    let { avatarDecoration: t } = e;
    E = t;
}
function J(e) {
    let { profileEffect: t } = e;
    b = t;
}
function $(e) {
    let { banner: t } = e;
    y = t;
}
function ee(e) {
    let { banner: t, themeColors: n, avatarDecoration: r } = e;
    (y = t), (m = n), (E = r);
}
function et() {
    r = void 0;
}
function en() {
    R = {};
}
function er() {
    ei(), ea(), el(), ec(), (R = {});
}
function ei() {
    (r = void 0), (i = void 0), (a = void 0), (o = void 0), (s = void 0), (h = void 0);
}
function ea() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (o = void 0);
}
function eo() {
    (g = void 0), (E = void 0), (b = void 0), (y = void 0), (m = void 0);
}
function es() {
    a = void 0;
}
function el() {
    _ = void 0;
}
function ec() {
    p = void 0;
}
function eu() {
    er(), eo(), w();
}
class ed extends (O = v.ZP.Store) {
    getFormState() {
        return N;
    }
    getErrors() {
        return R;
    }
    showNotice() {
        return (
            void 0 !== r ||
            void 0 !== l ||
            void 0 !== c ||
            void 0 !== u ||
            void 0 !== d ||
            void 0 !== f ||
            void 0 !== a ||
            void 0 !== o ||
            void 0 !== i ||
            void 0 !== s ||
            void 0 !== _ ||
            void 0 !== p ||
            void 0 !== h
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > A.tPV;
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
    getPendingProfileEffect() {
        return o;
    }
    getPendingDisplayNameStyles() {
        return h;
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
            pendingProfileEffect: o,
            pendingGlobalName: i,
            pendingNameplate: s,
            pendingLegacyUsernameDisabled: _,
            pendingPrimaryGuildId: p,
            pendingDisplayNameStyles: h,
        };
    }
    getTryItOutThemeColors() {
        return m;
    }
    getTryItOutAvatar() {
        return g;
    }
    getTryItOutAvatarDecoration() {
        return E;
    }
    getTryItOutProfileEffect() {
        return b;
    }
    getTryItOutBanner() {
        return y;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: m,
            tryItOutAvatar: g,
            tryItOutAvatarDecoration: E,
            tryItOutProfileEffect: b,
            tryItOutBanner: y,
        };
    }
}
C(ed, "displayName", "UserSettingsAccountStore");
let ef = new ed(I.Z, {
    USER_SETTINGS_ACCOUNT_INIT: P,
    USER_SETTINGS_MODAL_INIT: P,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: P,
    USER_SETTINGS_MODAL_SET_SECTION: x,
    USER_SETTINGS_ACCOUNT_CLOSE: w,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: eu,
    USER_SETTINGS_ACCOUNT_SUBMIT: D,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: G,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: Z,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: V,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: H,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: Y,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: X,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: Q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: J,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: $,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: ee,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: K,
    USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: z,
    USER_SETTINGS_CLEAR_ERRORS: en,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: ei,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: ea,
    USER_SETTINGS_RESET_ALL_PENDING: er,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: eo,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: es,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: el,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: ec,
    LOGOUT: et,
});
