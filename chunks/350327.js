n.d(t, {
    CM: () => C,
    Cf: () => I,
    ID: () => T,
    Ls: () => y,
    Xz: () => P,
    Z: () => b,
    c_: () => N,
    f4: () => R,
    g_: () => S,
    ho: () => v,
    pG: () => O,
    rH: () => D,
    rf: () => w,
    uV: () => j,
    x3: () => x,
    z5: () => A,
});
var r = n(442837),
    i = n(544891),
    a = n(570140),
    o = n(881052),
    s = n(957730),
    l = n(695346),
    c = n(594174),
    u = n(626135),
    d = n(956664),
    f = n(960048),
    p = n(621853),
    _ = n(981631),
    m = n(474936);
function h(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    u.default.track(_.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: m.h1.PREMIUM_STANDARD,
    });
}
async function b(e, t) {
    var n;
    let r = null == (n = c.default.getCurrentUser()) ? void 0 : n.id;
    if (null == r) return;
    let u = l.dN.getSetting();
    null != e.bio && u && (e.bio = s.ZP.parse(void 0, e.bio).content);
    try {
        a.Z.dispatch({
            type: "USER_PROFILE_UPDATE_START",
            userId: r,
        });
        let n = await i.tn.patch({
            url: null != t ? _.ANM.USER_GUILD_PROFILE(t, _.ME) : _.ANM.USER_PROFILE(_.ME),
            body: e,
            rejectWithError: !1,
        });
        if (n.ok)
            a.Z.dispatch(
                g(
                    {
                        type: "USER_PROFILE_UPDATE_SUCCESS",
                        userId: r,
                    },
                    n.body,
                ),
            );
        else {
            let e = new o.Hx(n);
            a.Z.dispatch({
                type: "USER_PROFILE_UPDATE_FAILURE",
                errors: n.body,
                apiError: e,
            });
        }
        return n;
    } catch (t) {
        let e = new o.Hx(t);
        return (
            a.Z.dispatch({
                type: "USER_PROFILE_UPDATE_FAILURE",
                errors: {},
                apiError: e,
            }),
            t
        );
    }
}
function y(e, t) {
    var n;
    let r = null == (n = c.default.getCurrentUser()) ? void 0 : n.id;
    null != r &&
        a.Z.dispatch({
            type: "USER_PROFILE_PIN_BADGES_ON_CLIENT",
            badges: e,
            ttlInSeconds: t,
            userId: r,
        });
}
function O() {
    a.Z.dispatch({ type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function v(e) {
    (null == e ? void 0 : e.startsWith("https:")) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, d.fD)(e))
              .then((e) => S(e))
        : null != e && S(e);
}
function S(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
        banner: e,
    });
}
function I(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
        bio: e,
    });
}
function T(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
        pronouns: e,
    });
}
function C(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
        color: e,
    });
}
function A(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
        themeColors: e,
    });
}
function N(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
        avatar: e,
    }),
        E(m.QP.ANIMATED_AVATAR);
}
function P(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
        avatarDecoration: e,
    }),
        E(m.QP.AVATAR_DECORATION);
}
function R(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
        banner: e,
    }),
        E(m.QP.PROFILE_BANNER);
}
function w(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
        themeColors: e,
    }),
        E(m.QP.PROFILE_THEME_COLOR);
}
function D(e) {
    a.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES",
        displayNameStyles: e,
    }),
        E(m.QP.DISPLAY_NAME_STYLES);
}
function x(e) {
    a.Z.dispatch(g({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET" }, e)), E(m.QP.PRESET);
}
async function L() {
    if (null == p.Z.applicationWidgetApplicationConfigs || !(p.Z.applicationWidgetApplicationConfigs.length > 0)) {
        a.Z.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_START" });
        try {
            let e = await i.tn.get({
                url: _.ANM.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS,
                rejectWithError: !0,
            });
            a.Z.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (a.Z.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_FAILURE" }),
                f.Z.captureException(e),
                e)
            );
        }
    }
}
let j = (0, r.Kb)(p.Z, {
    getQueryId: _.McO.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.Z.applicationWidgetApplicationConfigs,
    load: () => L(),
});
