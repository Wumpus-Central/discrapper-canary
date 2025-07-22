n.d(t, {
    CM: () => I,
    Cf: () => O,
    ID: () => v,
    Ls: () => g,
    Xz: () => A,
    Z: () => m,
    c_: () => S,
    f4: () => N,
    g_: () => y,
    ho: () => b,
    pG: () => E,
    rf: () => C,
    x3: () => R,
    z5: () => T
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    o = n(957730),
    s = n(695346),
    l = n(594174),
    c = n(626135),
    u = n(956664),
    d = n(981631),
    _ = n(474936);
function f(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function h(e) {
    c.default.track(d.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: _.h1.PREMIUM_STANDARD
    });
}
async function m(e, t) {
    var n, c, u;
    let _ = null == (n = l.default.getCurrentUser()) ? void 0 : n.id;
    if (null == _) return;
    let f = s.dN.getSetting();
    null != e.bio && f && (e.bio = o.ZP.parse(void 0, e.bio).content);
    try {
        i.Z.dispatch({
            type: 'USER_PROFILE_UPDATE_START',
            userId: _
        });
        let n = await r.tn.patch({
            url: null != t ? d.ANM.USER_GUILD_PROFILE(t, d.ME) : d.ANM.USER_PROFILE(d.ME),
            body: e,
            rejectWithError: !1
        });
        if (n.ok) {
            let e = null == (c = n.body.profile_effect) ? void 0 : c.id,
                t = null == (u = n.body.profile_effect) ? void 0 : u.expires_at;
            i.Z.dispatch(
                p(
                    {
                        type: 'USER_PROFILE_UPDATE_SUCCESS',
                        userId: _,
                        profileEffectId: e,
                        profileEffectExpiresAt: t
                    },
                    n.body
                )
            );
        } else {
            let e = new a.Hx(n);
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: n.body,
                apiError: e
            });
        }
        return n;
    } catch (t) {
        let e = new a.Hx(t);
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
function g(e, t) {
    var n;
    let r = null == (n = l.default.getCurrentUser()) ? void 0 : n.id;
    null != r &&
        i.Z.dispatch({
            type: 'USER_PROFILE_PIN_BADGES_ON_CLIENT',
            badges: e,
            ttlInSeconds: t,
            userId: r
        });
}
function E() {
    i.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function b(e) {
    (null == e ? void 0 : e.startsWith('https:')) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, u.fD)(e))
              .then((e) => y(e))
        : null != e && y(e);
}
function y(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER',
        banner: e
    });
}
function O(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO',
        bio: e
    });
}
function v(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function I(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR',
        color: e
    });
}
function T(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function S(e) {
    (i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR',
        avatar: e
    }),
        h(_.QP.ANIMATED_AVATAR));
}
function A(e) {
    (i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION',
        avatarDecoration: e
    }),
        h(_.QP.AVATAR_DECORATION));
}
function N(e) {
    (i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER',
        banner: e
    }),
        h(_.QP.PROFILE_BANNER));
}
function C(e) {
    (i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS',
        themeColors: e
    }),
        h(_.QP.PROFILE_THEME_COLOR));
}
function R(e) {
    (i.Z.dispatch(p({ type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET' }, e)), h(_.QP.PRESET));
}
