n.d(t, {
    CM: () => O,
    Cf: () => b,
    ID: () => y,
    US: () => T,
    Xz: () => N,
    Z: () => m,
    c_: () => I,
    f4: () => A,
    g_: () => v,
    ho: () => E,
    pG: () => g,
    rf: () => C,
    x3: () => R,
    z5: () => S
});
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(957730),
    s = n(695346),
    l = n(594174),
    c = n(626135),
    u = n(956664),
    d = n(981631),
    f = n(474936);
function p(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    c.default.track(d.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: f.h1.PREMIUM_STANDARD
    });
}
async function m(e, t) {
    var n, c, u;
    let f = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == f) return;
    let p = s.dN.getSetting();
    null != e.bio && p && (e.bio = a.ZP.parse(void 0, e.bio).content);
    try {
        i.Z.dispatch({
            type: 'USER_PROFILE_UPDATE_START',
            userId: f
        });
        let n = await r.tn.patch({
            url: null != t ? d.ANM.USER_GUILD_PROFILE(t, d.ME) : d.ANM.USER_PROFILE(d.ME),
            body: e,
            rejectWithError: !1
        });
        if (n.ok) {
            let e = null === (c = n.body.profile_effect) || void 0 === c ? void 0 : c.id,
                t = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.expires_at;
            i.Z.dispatch(
                _(
                    {
                        type: 'USER_PROFILE_UPDATE_SUCCESS',
                        userId: f,
                        profileEffectId: e,
                        profileEffectExpiresAt: t
                    },
                    n.body
                )
            );
        } else {
            let e = new o.Hx(n);
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: n.body,
                apiError: e
            });
        }
        return n;
    } catch (t) {
        let e = new o.Hx(t);
        return (
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: {},
                apiError: e
            }),
            t
        );
    }
}
function g() {
    i.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function E(e) {
    (null == e ? void 0 : e.startsWith('https:')) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, u.fD)(e))
              .then((e) => v(e))
        : null != e && v(e);
}
function v(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER',
        banner: e
    });
}
function b(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO',
        bio: e
    });
}
function y(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function O(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR',
        color: e
    });
}
function S(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function I(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR',
        avatar: e
    }),
        h(f.QP.ANIMATED_AVATAR);
}
function T(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_V2',
        avatar: e
    }),
        h(f.QP.ANIMATED_AVATAR);
}
function N(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION',
        avatarDecoration: e
    }),
        h(f.QP.AVATAR_DECORATION);
}
function A(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER',
        banner: e
    }),
        h(f.QP.PROFILE_BANNER);
}
function C(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS',
        themeColors: e
    }),
        h(f.QP.PROFILE_THEME_COLOR);
}
function R(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET',
        preset: e
    }),
        h(f.QP.PRESET);
}
