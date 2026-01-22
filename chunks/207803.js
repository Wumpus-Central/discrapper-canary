n.d(t, {
    Dv: () => A,
    EW: () => D,
    Er: () => S,
    FY: () => j,
    Go: () => R,
    Gr: () => y,
    Iz: () => v,
    Oz: () => I,
    RE: () => O,
    XW: () => T,
    Zz: () => C,
    a: () => P,
    e$: () => N,
    gi: () => b,
    w5: () => x,
    xe: () => w,
});
var r = n(311907),
    i = n(562465),
    a = n(73153),
    s = n(198982),
    o = n(451909),
    l = n(287809),
    c = n(954571),
    u = n(515718),
    d = n(728458),
    f = n(622543),
    p = n(814390),
    _ = n(652215),
    h = n(788868);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    c.default.track(_.HAw.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: h.tz.PREMIUM_STANDARD,
    });
}
async function b(e, t) {
    var n;
    let r = null == (n = l.default.getCurrentUser()) ? void 0 : n.id;
    if (null == r) return;
    let c = (0, p.h)();
    null != e.bio && c && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        a.h.dispatch({
            type: "USER_PROFILE_UPDATE_START",
            userId: r,
        });
        let n = await i.Bo.patch({
            url: null != t ? _.Rsh.USER_GUILD_PROFILE(t, _.ME) : _.Rsh.USER_PROFILE(_.ME),
            body: e,
            rejectWithError: !1,
        });
        if (n.ok)
            a.h.dispatch(
                g(
                    {
                        type: "USER_PROFILE_UPDATE_SUCCESS",
                        userId: r,
                    },
                    n.body,
                ),
            );
        else {
            let e = new s.LG(n);
            a.h.dispatch({
                type: "USER_PROFILE_UPDATE_FAILURE",
                errors: n.body,
                apiError: e,
            });
        }
        return n;
    } catch (t) {
        let e = new s.LG(t);
        return (
            a.h.dispatch({
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
    let r = null == (n = l.default.getCurrentUser()) ? void 0 : n.id;
    null != r &&
        a.h.dispatch({
            type: "USER_PROFILE_PIN_BADGES_ON_CLIENT",
            badges: e,
            ttlInSeconds: t,
            userId: r,
        });
}
function O() {
    a.h.dispatch({ type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function A(e) {
    (null == e ? void 0 : e.startsWith("https:")) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, u.We)(e))
              .then((e) => v(e))
        : null != e && v(e);
}
function v(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
        banner: e,
    });
}
function S(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
        bio: e,
    });
}
function I(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
        pronouns: e,
    });
}
function T(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
        color: e,
    });
}
function C(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
        themeColors: e,
    });
}
function N(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
        avatar: e,
    }),
        E(h.Ae.ANIMATED_AVATAR);
}
function R(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
        avatarDecoration: e,
    }),
        E(h.Ae.AVATAR_DECORATION);
}
function w(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
        banner: e,
    }),
        E(h.Ae.PROFILE_BANNER);
}
function P(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
        themeColors: e,
    }),
        E(h.Ae.PROFILE_THEME_COLOR);
}
function D(e) {
    a.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES",
        displayNameStyles: e,
    }),
        E(h.Ae.DISPLAY_NAME_STYLES);
}
function x(e) {
    a.h.dispatch(g({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET" }, e)), E(h.Ae.PRESET);
}
async function L() {
    if (null == f.A.applicationWidgetConfigs || !(f.A.applicationWidgetConfigs.length > 0)) {
        a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await i.Bo.get({
                url: _.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS,
                rejectWithError: !0,
            });
            a.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                d.A.captureException(e),
                e)
            );
        }
    }
}
let j = (0, r.UT)(f.A, {
    getQueryId: _.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => f.A.applicationWidgetConfigs,
    load: () => L(),
});
