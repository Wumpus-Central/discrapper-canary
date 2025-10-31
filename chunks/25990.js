let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O;
n.d(t, { Z: () => e_ });
var v,
    I = n(442837),
    T = n(570140),
    S = n(922347),
    A = n(212161),
    C = n(981631);
function N(e, t, n) {
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
let R = C.QZA.CLOSED,
    P = {};
function w() {
    (R = C.QZA.OPEN), (P = {});
}
function D() {
    (R = C.QZA.CLOSED), (P = {});
}
function x() {
    (R = C.QZA.SUBMITTING), (P = {});
}
function L(e) {
    var t;
    if (R !== C.QZA.SUBMITTING) return !1;
    (R = C.QZA.OPEN), (P = null != (t = e.errors) ? t : {});
}
function M(e) {
    let { section: t } = e;
    return t === C.oAB.ACCOUNT && w();
}
function j(e) {
    let { avatar: t } = e;
    (r = t), (g = void 0);
}
function k(e) {
    let { globalName: t } = e;
    i = t;
}
function U(e) {
    let { legacyUsernameDisabled: t } = e;
    _ = t;
}
function G(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function B(e) {
    let { nameplate: t } = e;
    s = t;
}
function Z(e) {
    let { profileEffect: t } = e;
    o = t;
}
function F(e) {
    let { item: t } = e;
    (0, S.M)(t) ? ((E = t), (b = null)) : (0, A.H)(t) && ((E = null), (b = t));
}
function V(e) {
    let { banner: t } = e;
    l = t;
}
function H(e) {
    let { bio: t } = e;
    c = t;
}
function Y(e) {
    let { pronouns: t } = e;
    u = t;
}
function W(e) {
    let { color: t } = e;
    d = t;
}
function K(e) {
    let { themeColors: t } = e;
    f = t;
}
function z(e) {
    let { primaryGuildId: t } = e;
    p = t;
}
function q(e) {
    let { displayNameStyles: t } = e;
    h = t;
}
function X(e) {
    let { themeColors: t } = e;
    m = t;
}
function Q(e) {
    let { avatar: t } = e;
    g = t;
}
function J(e) {
    let { avatarDecoration: t } = e;
    E = t;
}
function $(e) {
    let { profileEffect: t } = e;
    b = t;
}
function ee(e) {
    let { banner: t } = e;
    y = t;
}
function et(e) {
    let { banner: t, themeColors: n, avatarDecoration: r, displayNameStyles: i } = e;
    (y = t), (m = n), (E = r), (O = i);
}
function en() {
    r = void 0;
}
function er() {
    P = {};
}
function ei() {
    ea(), eo(), ec(), eu(), (P = {});
}
function ea() {
    (r = void 0), (i = void 0), (a = void 0), (o = void 0), (s = void 0), (h = void 0);
}
function eo() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (o = void 0);
}
function es() {
    (g = void 0), (E = void 0), (b = void 0), (y = void 0), (m = void 0), (O = void 0);
}
function el() {
    a = void 0;
}
function ec() {
    _ = void 0;
}
function eu() {
    p = void 0;
}
function ed() {
    ei(), es(), D();
}
class ef extends (v = I.ZP.Store) {
    getFormState() {
        return R;
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
            void 0 !== _ ||
            void 0 !== p ||
            void 0 !== h
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
            tryItOutDisplayNameStyles: O,
        };
    }
}
N(ef, "displayName", "UserSettingsAccountStore");
let e_ = new ef(T.Z, {
    USER_SETTINGS_ACCOUNT_INIT: w,
    USER_SETTINGS_MODAL_INIT: w,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: w,
    USER_SETTINGS_MODAL_SET_SECTION: M,
    USER_SETTINGS_ACCOUNT_CLOSE: D,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ed,
    USER_SETTINGS_ACCOUNT_SUBMIT: x,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: B,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT: Z,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: V,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: H,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: Y,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: W,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: K,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: Q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: J,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: $,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: ee,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: X,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: et,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: z,
    USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: q,
    USER_SETTINGS_CLEAR_ERRORS: er,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: ea,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: eo,
    USER_SETTINGS_RESET_ALL_PENDING: ei,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: es,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: el,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: ec,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: eu,
    LOGOUT: en,
});
