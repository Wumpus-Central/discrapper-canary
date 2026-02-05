"use strict";
n.d(t, {
    Dv: () => I,
    EW: () => D,
    Er: () => y,
    FY: () => x,
    Go: () => N,
    Gr: () => E,
    Iz: () => T,
    Oz: () => S,
    RE: () => A,
    XW: () => v,
    Zz: () => C,
    a: () => O,
    e$: () => b,
    gi: () => g,
    w5: () => L,
    xe: () => R,
});
var r = n(311907),
    i = n(562465),
    a = n(73153),
    s = n(198982),
    o = n(451909),
    l = n(287809),
    u = n(954571),
    c = n(515718),
    d = n(728458),
    _ = n(622543),
    f = n(814390),
    p = n(652215),
    h = n(788868);
function m(e) {
    u.default.track(p.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: h.tz.PREMIUM_STANDARD });
}
async function g(e, t) {
    let n = l.default.getCurrentUser()?.id;
    if (null == n) return;
    let r = (0, f.h)();
    null != e.bio && r && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        a.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n, guildId: t });
        let r = await i.Bo.patch({
            url: null != t ? p.Rsh.USER_GUILD_PROFILE(t, p.ME) : p.Rsh.USER_PROFILE(p.ME),
            body: e,
            rejectWithError: !1,
        });
        if (r.ok) a.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: n, guildId: t, ...r.body });
        else {
            let e = new s.LG(r);
            a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: r.body, apiError: e });
        }
        return r;
    } catch (n) {
        let e = new s.LG(n);
        return a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function E(e, t) {
    let n = l.default.getCurrentUser()?.id;
    null != n && a.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function A() {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_PROFILE_CHANGES" });
}
function I(e) {
    e?.startsWith("https:") === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, c.We)(e))
              .then((e) => T(e))
        : null != e && T(e);
}
function T(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER", banner: e });
}
function y(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO", bio: e });
}
function S(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS", pronouns: e });
}
function v(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR", color: e });
}
function C(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS", themeColors: e });
}
function b(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR", avatar: e }), m(h.Ae.ANIMATED_AVATAR);
}
function N(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        m(h.Ae.AVATAR_DECORATION);
}
function R(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER", banner: e }), m(h.Ae.PROFILE_BANNER);
}
function O(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        m(h.Ae.PROFILE_THEME_COLOR);
}
function D(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        m(h.Ae.DISPLAY_NAME_STYLES);
}
function L(e) {
    a.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET", ...e }), m(h.Ae.PRESET);
}
async function w() {
    if (null == _.A.applicationWidgetConfigs || !(_.A.applicationWidgetConfigs.length > 0)) {
        a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: p.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
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
let x = (0, r.UT)(_.A, {
    getQueryId: p.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => _.A.applicationWidgetConfigs,
    load: () => w(),
});
