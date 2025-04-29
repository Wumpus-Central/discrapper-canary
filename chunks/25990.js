let r, i, o, a, s, l, c, u, d, f, _, p, h, m, g, E;
n.d(t, { Z: () => ea });
var b,
    y = n(979554),
    O = n(442837),
    v = n(570140),
    I = n(981631);
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
let T = I.QZA.CLOSED,
    A = {};
function N() {
    (T = I.QZA.OPEN), (A = {});
}
function C() {
    (T = I.QZA.CLOSED), (A = {});
}
function R() {
    (T = I.QZA.SUBMITTING), (A = {});
}
function P(e) {
    var t;
    if (T !== I.QZA.SUBMITTING) return !1;
    (T = I.QZA.OPEN), (A = null != (t = e.errors) ? t : {});
}
function w(e) {
    let { section: t } = e;
    return t === I.oAB.ACCOUNT && N();
}
function D(e) {
    let { avatar: t } = e;
    (r = t), (h = void 0);
}
function L(e) {
    let { globalName: t } = e;
    i = t;
}
function x(e) {
    let { avatarDecoration: t } = e;
    o = t;
}
function M(e) {
    let { nameplate: t } = e;
    s = t;
}
function k(e) {
    let { profileEffectId: t } = e;
    a = t;
}
function j(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === y.Z.PROFILE_EFFECT ? ((m = null), (g = null == t ? void 0 : t.id)) : (null == t ? void 0 : t.type) === y.Z.AVATAR_DECORATION && ((g = null), (m = t));
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
function V(e) {
    let { color: t } = e;
    d = t;
}
function F(e) {
    let { themeColors: t } = e;
    f = t;
}
function Z(e) {
    let { primaryGuildId: t } = e;
    _ = t;
}
function H(e) {
    let { themeColors: t } = e;
    p = t;
}
function Y(e) {
    let { avatar: t } = e;
    h = t;
}
function W(e) {
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
    let { banner: t, themeColors: n, avatarDecoration: r } = e;
    (E = t), (p = n), (m = r);
}
function Q() {
    r = void 0;
}
function X() {
    A = {};
}
function J() {
    $(), ee(), er(), (A = {});
}
function $() {
    (r = void 0), (i = void 0), (o = void 0), (a = void 0), (s = void 0);
}
function ee() {
    (l = void 0), (c = void 0), (u = void 0), (d = void 0), (f = void 0), (a = void 0);
}
function et() {
    (h = void 0), (m = void 0), (g = void 0), (E = void 0), (p = void 0);
}
function en() {
    o = void 0;
}
function er() {
    _ = void 0;
}
function ei() {
    J(), et(), C();
}
class eo extends (b = O.ZP.Store) {
    getFormState() {
        return T;
    }
    getErrors() {
        return A;
    }
    showNotice() {
        return void 0 !== r || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== f || void 0 !== o || void 0 !== a || void 0 !== i || void 0 !== s || void 0 !== _;
    }
    getIsSubmitDisabled() {
        return void 0 !== c && c.length > I.tPV;
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
            pendingPrimaryGuildId: _
        };
    }
    getTryItOutThemeColors() {
        return p;
    }
    getTryItOutAvatar() {
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
            tryItOutAvatar: h,
            tryItOutAvatarDecoration: m,
            tryItOutProfileEffectId: g,
            tryItOutBanner: E
        };
    }
}
S(eo, 'displayName', 'UserSettingsAccountStore');
let ea = new eo(v.Z, {
    USER_SETTINGS_ACCOUNT_INIT: N,
    USER_SETTINGS_MODAL_INIT: N,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: N,
    USER_SETTINGS_MODAL_SET_SECTION: w,
    USER_SETTINGS_ACCOUNT_CLOSE: C,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ei,
    USER_SETTINGS_ACCOUNT_SUBMIT: R,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: P,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: D,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: M,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: j,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: V,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: F,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: Y,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: K,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: q,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: Z,
    USER_SETTINGS_CLEAR_ERRORS: X,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: $,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: ee,
    USER_SETTINGS_RESET_ALL_PENDING: J,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: et,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: en,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: er,
    LOGOUT: Q
});
