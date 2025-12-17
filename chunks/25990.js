let r, i, a, o, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O;
n.d(t, { Z: () => ec });
var v,
    S = n(979554),
    I = n(442837),
    T = n(570140),
    C = n(981631);
function A(e, t, n) {
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
let N = C.QZA.CLOSED,
    P = {};
function R() {
    (N = C.QZA.OPEN), (P = {});
}
function w() {
    (N = C.QZA.CLOSED), (P = {});
}
function D() {
    (N = C.QZA.SUBMITTING), (P = {});
}
function x(e) {
    var t;
    if (N !== C.QZA.SUBMITTING) return !1;
    (N = C.QZA.OPEN), (P = null != (t = e.errors) ? t : {});
}
function L(e) {
    let { section: t } = e;
    return t === C.oAB.ACCOUNT && R();
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
    t.type === S.Z.AVATAR_DECORATION
        ? (a = t.value)
        : t.type === S.Z.PROFILE_EFFECT
          ? (o = t.value)
          : t.type === S.Z.NAMEPLATE && (s = t.value);
}
function G(e) {
    let { banner: t } = e;
    l = t;
}
function Z(e) {
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
function V(e) {
    let { themeColors: t } = e;
    f = t;
}
function H(e) {
    let { primaryGuildId: t } = e;
    _ = t;
}
function Y(e) {
    let { displayNameStyles: t } = e;
    m = t;
}
function W(e) {
    let { themeColors: t } = e;
    h = t;
}
function K(e) {
    let { avatar: t } = e;
    g = t;
}
function z(e) {
    let { avatarDecoration: t } = e;
    E = t;
}
function q(e) {
    let { profileEffect: t } = e;
    b = t;
}
function Q(e) {
    let { banner: t } = e;
    y = t;
}
function X(e) {
    let { displayNameStyles: t } = e;
    O = t;
}
function J(e) {
    let { banner: t, themeColors: n, avatarDecoration: r, displayNameStyles: i } = e;
    (y = t), (h = n), (E = r), (O = i);
}
function $() {
    r = void 0;
}
function ee() {
    P = {};
}
function et() {
    en(), er(), ea(), eo(), (P = {});
}
function en() {
    (r = void 0), (i = void 0), (a = void 0), (o = void 0), (s = void 0), (m = void 0);
}
function er() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (o = void 0);
}
function ei() {
    (g = void 0), (E = void 0), (b = void 0), (y = void 0), (h = void 0), (O = void 0);
}
function ea() {
    p = void 0;
}
function eo() {
    _ = void 0;
}
function es() {
    et(), ei(), w();
}
class el extends (v = I.ZP.Store) {
    getFormState() {
        return N;
    }
    getErrors() {
        return P;
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
            void 0 !== p ||
            void 0 !== _ ||
            void 0 !== m
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > C.tPV;
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
        return m;
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
            pendingLegacyUsernameDisabled: p,
            pendingPrimaryGuildId: _,
            pendingDisplayNameStyles: m,
        };
    }
    getTryItOutThemeColors() {
        return h;
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
            tryItOutThemeColors: h,
            tryItOutAvatar: g,
            tryItOutAvatarDecoration: E,
            tryItOutProfileEffect: b,
            tryItOutBanner: y,
            tryItOutDisplayNameStyles: O,
        };
    }
}
A(el, "displayName", "UserSettingsAccountStore");
let ec = new el(T.Z, {
    USER_SETTINGS_ACCOUNT_INIT: R,
    USER_SETTINGS_MODAL_INIT: R,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: R,
    USER_SETTINGS_MODAL_SET_SECTION: L,
    USER_SETTINGS_ACCOUNT_CLOSE: w,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: es,
    USER_SETTINGS_ACCOUNT_SUBMIT: D,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: Z,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: V,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: K,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: X,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: J,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: H,
    USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: Y,
    USER_SETTINGS_CLEAR_ERRORS: ee,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: en,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: er,
    USER_SETTINGS_RESET_ALL_PENDING: et,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: ei,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: ea,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: eo,
    LOGOUT: $,
});
