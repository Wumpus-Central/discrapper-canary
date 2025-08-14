let r, i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b, y;
n.d(t, { Z: () => ed });
var O,
    v = n(979554),
    I = n(442837),
    T = n(570140),
    S = n(981631);
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
let N = S.QZA.CLOSED,
    C = {};
function R() {
    (N = S.QZA.OPEN), (C = {});
}
function P() {
    (N = S.QZA.CLOSED), (C = {});
}
function w() {
    (N = S.QZA.SUBMITTING), (C = {});
}
function D(e) {
    var t;
    if (N !== S.QZA.SUBMITTING) return !1;
    (N = S.QZA.OPEN), (C = null != (t = e.errors) ? t : {});
}
function L(e) {
    let { section: t } = e;
    return t === S.oAB.ACCOUNT && R();
}
function x(e) {
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
function j(e) {
    let { avatarDecoration: t } = e;
    o = t;
}
function U(e) {
    let { nameplate: t } = e;
    s = t;
}
function G(e) {
    let { profileEffectId: t } = e;
    a = t;
}
function B(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === v.Z.PROFILE_EFFECT
        ? ((E = null), (b = null == t ? void 0 : t.id))
        : (null == t ? void 0 : t.type) === v.Z.AVATAR_DECORATION && ((b = null), (E = t));
}
function Z(e) {
    let { banner: t } = e;
    l = t;
}
function F(e) {
    let { bio: t } = e;
    c = t;
}
function V(e) {
    let { pronouns: t } = e;
    u = t;
}
function H(e) {
    let { color: t } = e;
    d = t;
}
function Y(e) {
    let { themeColors: t } = e;
    f = t;
}
function W(e) {
    let { primaryGuildId: t } = e;
    p = t;
}
function K(e) {
    let { displayNameStyles: t } = e;
    h = t;
}
function z(e) {
    let { themeColors: t } = e;
    m = t;
}
function q(e) {
    let { avatar: t } = e;
    g = t;
}
function X(e) {
    let { avatarDecoration: t } = e;
    E = t;
}
function Q(e) {
    let { profileEffectId: t } = e;
    b = t;
}
function J(e) {
    let { banner: t } = e;
    y = t;
}
function $(e) {
    let { banner: t, themeColors: n, avatarDecoration: r } = e;
    (y = t), (m = n), (E = r);
}
function ee() {
    r = void 0;
}
function et() {
    C = {};
}
function en() {
    er(), ei(), es(), el(), (C = {});
}
function er() {
    (r = void 0), (i = void 0), (o = void 0), (a = void 0), (s = void 0), (h = void 0);
}
function ei() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (a = void 0);
}
function eo() {
    (g = void 0), (E = void 0), (b = void 0), (y = void 0), (m = void 0);
}
function ea() {
    o = void 0;
}
function es() {
    _ = void 0;
}
function el() {
    p = void 0;
}
function ec() {
    en(), eo(), P();
}
class eu extends (O = I.ZP.Store) {
    getFormState() {
        return N;
    }
    getErrors() {
        return C;
    }
    showNotice() {
        return (
            void 0 !== r ||
            void 0 !== l ||
            void 0 !== c ||
            void 0 !== u ||
            void 0 !== d ||
            void 0 !== f ||
            void 0 !== o ||
            void 0 !== a ||
            void 0 !== i ||
            void 0 !== s ||
            void 0 !== _ ||
            void 0 !== p ||
            void 0 !== h
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > S.tPV;
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
    getTryItOutProfileEffectId() {
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
            tryItOutProfileEffectId: b,
            tryItOutBanner: y,
        };
    }
}
A(eu, "displayName", "UserSettingsAccountStore");
let ed = new eu(T.Z, {
    USER_SETTINGS_ACCOUNT_INIT: R,
    USER_SETTINGS_MODAL_INIT: R,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: R,
    USER_SETTINGS_MODAL_SET_SECTION: L,
    USER_SETTINGS_ACCOUNT_CLOSE: P,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ec,
    USER_SETTINGS_ACCOUNT_SUBMIT: w,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: D,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: U,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: Z,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: V,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: H,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: Y,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: X,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: Q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: J,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: $,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: W,
    USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: K,
    USER_SETTINGS_CLEAR_ERRORS: et,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: er,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: ei,
    USER_SETTINGS_RESET_ALL_PENDING: en,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: eo,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: ea,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: es,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: el,
    LOGOUT: ee,
});
