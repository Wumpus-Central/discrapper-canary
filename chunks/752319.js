let r, i, a, s, o, l, c, u, d, f, p, _, h, m, g, E, b, y, O;
n.d(t, { A: () => ec });
var A,
    v = n(575593),
    S = n(311907),
    I = n(73153),
    T = n(652215);
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
let N = T.XlH.CLOSED,
    R = {};
function w() {
    (N = T.XlH.OPEN), (R = {});
}
function P() {
    (N = T.XlH.CLOSED), (R = {});
}
function D() {
    (N = T.XlH.SUBMITTING), (R = {});
}
function x(e) {
    var t;
    if (N !== T.XlH.SUBMITTING) return !1;
    (N = T.XlH.OPEN), (R = null != (t = e.errors) ? t : {});
}
function L(e) {
    let { section: t } = e;
    return t === T.nc_.ACCOUNT && w();
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
    p = t;
}
function U(e) {
    let { item: t } = e;
    t.type === v.R.AVATAR_DECORATION
        ? (a = t.value)
        : t.type === v.R.PROFILE_EFFECT
          ? (s = t.value)
          : t.type === v.R.NAMEPLATE && (o = t.value);
}
function G(e) {
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
function B(e) {
    let { color: t } = e;
    d = t;
}
function H(e) {
    let { themeColors: t } = e;
    f = t;
}
function Y(e) {
    let { primaryGuildId: t } = e;
    _ = t;
}
function W(e) {
    let { displayNameStyles: t } = e;
    h = t;
}
function K(e) {
    let { themeColors: t } = e;
    m = t;
}
function z(e) {
    let { avatar: t } = e;
    g = t;
}
function q(e) {
    let { avatarDecoration: t } = e;
    E = t;
}
function X(e) {
    let { profileEffect: t } = e;
    b = t;
}
function Z(e) {
    let { banner: t } = e;
    y = t;
}
function Q(e) {
    let { displayNameStyles: t } = e;
    O = t;
}
function $(e) {
    let { banner: t, themeColors: n, avatarDecoration: r, displayNameStyles: i } = e;
    (y = t), (m = n), (E = r), (O = i);
}
function J() {
    r = void 0;
}
function ee() {
    R = {};
}
function et() {
    en(), er(), ea(), es(), (R = {});
}
function en() {
    (r = void 0), (i = void 0), (a = void 0), (s = void 0), (o = void 0), (h = void 0);
}
function er() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (s = void 0);
}
function ei() {
    (g = void 0), (E = void 0), (b = void 0), (y = void 0), (m = void 0), (O = void 0);
}
function ea() {
    p = void 0;
}
function es() {
    _ = void 0;
}
function eo() {
    et(), ei(), P();
}
class el extends (A = S.Ay.Store) {
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
            void 0 !== s ||
            void 0 !== i ||
            void 0 !== o ||
            void 0 !== p ||
            void 0 !== _ ||
            void 0 !== h
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > T.NA2;
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
        return o;
    }
    getPendingProfileEffect() {
        return s;
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
            pendingProfileEffect: s,
            pendingGlobalName: i,
            pendingNameplate: o,
            pendingLegacyUsernameDisabled: p,
            pendingPrimaryGuildId: _,
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
    getTryItOutDisplayNameStyles() {
        return O;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: m,
            tryItOutAvatar: g,
            tryItOutAvatarDecoration: E,
            tryItOutProfileEffect: b,
            tryItOutBanner: y,
            tryItOutDisplayNameStyles: O,
        };
    }
}
C(el, "displayName", "UserSettingsAccountStore");
let ec = new el(I.h, {
    USER_SETTINGS_ACCOUNT_INIT: w,
    USER_SETTINGS_MODAL_INIT: w,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: w,
    USER_SETTINGS_MODAL_SET_SECTION: L,
    USER_SETTINGS_ACCOUNT_CLOSE: P,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: eo,
    USER_SETTINGS_ACCOUNT_SUBMIT: D,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: V,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: X,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: K,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: Q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: $,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: Y,
    USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: W,
    USER_SETTINGS_CLEAR_ERRORS: ee,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: en,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: er,
    USER_SETTINGS_RESET_ALL_PENDING: et,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: ei,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: ea,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: es,
    LOGOUT: J,
});
