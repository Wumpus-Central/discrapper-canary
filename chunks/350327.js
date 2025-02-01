n.d(t, {
    CM: () => y,
    Cf: () => E,
    ID: () => v,
    Xz: () => b,
    Z: () => p,
    c_: () => T,
    f4: () => S,
    g_: () => g,
    ho: () => m,
    pG: () => h,
    rf: () => A,
    x3: () => N,
    z5: () => I
});
var i = n(544891),
    r = n(570140),
    a = n(881052),
    s = n(957730),
    o = n(695346),
    l = n(594174),
    u = n(626135),
    c = n(956664),
    d = n(981631),
    f = n(474936);
function _(e) {
    u.default.track(d.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: f.h1.PREMIUM_STANDARD
    });
}
async function p(e, t) {
    var n, u, c;
    let f = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == f) return;
    let _ = o.dN.getSetting();
    null != e.bio && _ && (e.bio = s.ZP.parse(void 0, e.bio).content);
    try {
        r.Z.dispatch({
            type: 'USER_PROFILE_UPDATE_START',
            userId: f
        });
        let n = await i.tn.patch({
            url: null != t ? d.ANM.USER_GUILD_PROFILE(t, d.ME) : d.ANM.USER_PROFILE(d.ME),
            body: e,
            rejectWithError: !1
        });
        if (n.ok) {
            let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id,
                t = null === (c = n.body.profile_effect) || void 0 === c ? void 0 : c.expires_at;
            r.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_SUCCESS',
                userId: f,
                profileEffectId: e,
                profileEffectExpiresAt: t,
                ...n.body
            });
        } else {
            let e = new a.Hx(n);
            r.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: n.body,
                apiError: e
            });
        }
        return n;
    } catch (t) {
        let e = new a.Hx(t);
        return (
            r.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: {},
                apiError: e
            }),
            t
        );
    }
}
function h() {
    r.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function m(e) {
    (null == e ? void 0 : e.startsWith('https:')) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, c.fD)(e))
              .then((e) => g(e))
        : null != e && g(e);
}
function g(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER',
        banner: e
    });
}
function E(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO',
        bio: e
    });
}
function v(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function y(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR',
        color: e
    });
}
function I(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function T(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR',
        avatar: e
    }),
        _(f.QP.ANIMATED_AVATAR);
}
function b(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION',
        avatarDecoration: e
    }),
        _(f.QP.AVATAR_DECORATION);
}
function S(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER',
        banner: e
    }),
        _(f.QP.PROFILE_BANNER);
}
function A(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS',
        themeColors: e
    }),
        _(f.QP.PROFILE_THEME_COLOR);
}
function N(e) {
    r.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET',
        preset: e
    }),
        _(f.QP.PRESET);
}
