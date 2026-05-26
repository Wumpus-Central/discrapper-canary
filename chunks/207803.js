"use strict";
n.d(t, {
    EW: () => D,
    FY: () => M,
    Go: () => O,
    Gr: () => N,
    RE: () => y,
    VQ: () => I,
    XQ: () => C,
    a: () => b,
    e$: () => v,
    gi: () => S,
    w5: () => L,
    xe: () => R,
});
var i = n(17928),
    r = n(636537),
    s = n(765178),
    a = n(228366),
    o = n(913122),
    l = n(77257),
    u = n(61310),
    c = n(451909),
    d = n(287809),
    _ = n(174459),
    f = n(625494),
    h = n(38405),
    p = n(841595),
    E = n(814390),
    m = n(652215),
    g = n(788868),
    A = n(375708);
function I() {
    f._.dispatch(m.jej.SHAKE_PROFILE_MODAL),
        f._.dispatch(m.jej.EMPHASIZE_NOTICE),
        s.O.announce(`${A.intl.string(A.t.GP7JLE)} ${A.intl.string(A.t.gKoO1D)}`);
}
function T(e) {
    _.default.track(m.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: g.tz.PREMIUM_STANDARD });
}
async function S(e, t, n) {
    let i = d.default.getCurrentUser()?.id;
    if (null == i) return;
    let s = (0, E.h)();
    null != e.bio && s && (e.bio = c.Ay.parse(void 0, e.bio).content);
    try {
        a.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: i, guildId: t });
        let { url: s, bannerSurface: c } =
                null != t
                    ? { url: m.Rsh.USER_GUILD_PROFILE(t, m.ME), bannerSurface: u.f.USER_GUILD_PROFILE_BANNER }
                    : { url: m.Rsh.USER_PROFILE(m.ME), bannerSurface: u.f.USER_DEFAULT_PROFILE_BANNER },
            d = await r.Bo.patch({ url: s, body: e, headers: l.A.buildHeadersForMd5({ [c]: n }), rejectWithError: !1 });
        if (d.ok) a.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: i, guildId: t, ...d.body });
        else {
            let e = new o.LG(d);
            a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: d.body, apiError: e });
        }
        return d;
    } catch (n) {
        let e = new o.LG(n);
        return a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function N(e, t) {
    let n = d.default.getCurrentUser()?.id;
    null != n && a.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function y() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function C() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function v(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), T(g.Ae.ANIMATED_AVATAR);
}
function O(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        T(g.Ae.AVATAR_DECORATION);
}
function R(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), T(g.Ae.PROFILE_BANNER);
}
function b(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        T(g.Ae.PROFILE_THEME_COLOR);
}
function D(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        T(g.Ae.DISPLAY_NAME_STYLES);
}
function L(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), T(g.Ae.PRESET);
}
async function w() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await r.Bo.get({ url: m.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            a.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                h.A.captureException(e),
                e)
            );
        }
    }
}
let M = (0, i.UT)(p.A, {
    getQueryId: m.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => w(),
});
