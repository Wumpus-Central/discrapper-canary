let r, i, o, a, s, l, c, u, d, f, _, p, h, g, m, E, v;
n.d(t, { Z: () => es });
var b,
    y = n(979554),
    O = n(442837),
    S = n(570140),
    I = n(981631);
function T(e, t, n) {
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
let N = I.QZA.CLOSED,
    A = {};
function C() {
    (N = I.QZA.OPEN), (A = {});
}
function R() {
    (N = I.QZA.CLOSED), (A = {});
}
function P() {
    (N = I.QZA.SUBMITTING), (A = {});
}
function D(e) {
    var t;
    if (N !== I.QZA.SUBMITTING) return !1;
    (N = I.QZA.OPEN), (A = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function w(e) {
    let { section: t } = e;
    return t === I.oAB.ACCOUNT && C();
}
function L(e) {
    let { avatar: t } = e;
    (r = t), (h = void 0);
}
function x(e) {
    let { avatar: t } = e;
    (i = t), (g = void 0);
}
function M(e) {
    let { globalName: t } = e;
    o = t;
}
function k(e) {
    let { avatarDecoration: t } = e;
    a = t;
}
function j(e) {
    let { nameplate: t } = e;
    l = t;
}
function U(e) {
    let { profileEffectId: t } = e;
    s = t;
}
function G(e) {
    let { item: t } = e;
    (null == t ? void 0 : t.type) === y.Z.PROFILE_EFFECT ? ((m = null), (E = null == t ? void 0 : t.id)) : (null == t ? void 0 : t.type) === y.Z.AVATAR_DECORATION && ((E = null), (m = t));
}
function B(e) {
    let { banner: t } = e;
    c = t;
}
function V(e) {
    let { bio: t } = e;
    u = t;
}
function F(e) {
    let { pronouns: t } = e;
    d = t;
}
function Z(e) {
    let { color: t } = e;
    f = t;
}
function H(e) {
    let { themeColors: t } = e;
    _ = t;
}
function W(e) {
    let { themeColors: t } = e;
    p = t;
}
function Y(e) {
    let { avatar: t } = e;
    h = t;
}
function K(e) {
    let { avatar: t } = e;
    g = t;
}
function z(e) {
    let { avatarDecoration: t } = e;
    m = t;
}
function q(e) {
    let { profileEffectId: t } = e;
    E = t;
}
function Q(e) {
    let { banner: t } = e;
    v = t;
}
function X(e) {
    let {
        preset: { themeColors: t, bannerImage: n, avatarDecoration: r }
    } = e;
    (p = t), (v = n), (m = r);
}
function J() {
    (r = void 0), (i = void 0);
}
function $() {
    A = {};
}
function ee() {
    et(), en(), (A = {});
}
function et() {
    (r = void 0), (i = void 0), (o = void 0), (a = void 0), (s = void 0), (l = void 0);
}
function en() {
    (c = void 0), (u = void 0), (d = void 0), (f = void 0), (_ = void 0), (s = void 0);
}
function er() {
    (h = void 0), (g = void 0), (m = void 0), (E = void 0), (v = void 0), (p = void 0);
}
function ei() {
    a = void 0;
}
function eo() {
    ee(), er(), R();
}
class ea extends (b = O.ZP.Store) {
    getFormState() {
        return N;
    }
    getErrors() {
        return A;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== f || void 0 !== _ || void 0 !== a || void 0 !== s || void 0 !== o || void 0 !== l;
    }
    getIsSubmitDisabled() {
        return void 0 !== u && u.length > I.tPV;
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
        return c;
    }
    getPendingBio() {
        return u;
    }
    getPendingPronouns() {
        return d;
    }
    getPendingAccentColor() {
        return f;
    }
    getPendingThemeColors() {
        return _;
    }
    getPendingAvatarDecoration() {
        return a;
    }
    getPendingNameplate() {
        return l;
    }
    getPendingProfileEffectId() {
        return s;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarV2: i,
            pendingBanner: c,
            pendingBio: u,
            pendingPronouns: d,
            pendingAccentColor: f,
            pendingThemeColors: _,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: s,
            pendingGlobalName: o,
            pendingNameplate: l
        };
    }
    getTryItOutThemeColors() {
        return p;
    }
    getTryItOutAvatar() {
        return h;
    }
    getTryItOutAvatarV2() {
        return g;
    }
    getTryItOutAvatarDecoration() {
        return m;
    }
    getTryItOutProfileEffectId() {
        return E;
    }
    getTryItOutBanner() {
        return v;
    }
    getAllTryItOut() {
        return {
            tryItOutThemeColors: p,
            tryItOutAvatar: h,
            tryItOutAvatarV2: g,
            tryItOutAvatarDecoration: m,
            tryItOutProfileEffectId: E,
            tryItOutBanner: v
        };
    }
}
T(ea, 'displayName', 'UserSettingsAccountStore');
let es = new ea(S.Z, {
    USER_SETTINGS_ACCOUNT_INIT: C,
    USER_SETTINGS_MODAL_INIT: C,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: C,
    USER_SETTINGS_MODAL_SET_SECTION: w,
    USER_SETTINGS_ACCOUNT_CLOSE: R,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: eo,
    USER_SETTINGS_ACCOUNT_SUBMIT: P,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: D,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_V2: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: M,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: k,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: j,
    USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: G,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: U,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: V,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: F,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: Z,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: H,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: Y,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_V2: K,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: z,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Q,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: W,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: X,
    USER_SETTINGS_CLEAR_ERRORS: $,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: et,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: en,
    USER_SETTINGS_RESET_ALL_PENDING: ee,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: er,
    USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: ei,
    LOGOUT: J
});
