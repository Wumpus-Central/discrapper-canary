"use strict";
n.d(t, {
    EW: () => v,
    FY: () => b,
    Go: () => R,
    Gr: () => T,
    RE: () => S,
    VQ: () => p,
    XQ: () => N,
    a: () => y,
    e$: () => C,
    gi: () => I,
    w5: () => D,
    xe: () => O,
});
var i = n(17928),
    r = n(636537),
    s = n(765178),
    a = n(228366),
    o = n(845584),
    l = n(451909),
    d = n(287809),
    _ = n(954571),
    u = n(625494),
    c = n(38405),
    E = n(841595),
    h = n(814390),
    m = n(652215),
    f = n(788868),
    g = n(985018);
function p() {
    u._.dispatch(m.jej.SHAKE_PROFILE_MODAL),
        u._.dispatch(m.jej.EMPHASIZE_NOTICE),
        s.O.announce(`${g.intl.string(g.t.GP7JLE)} ${g.intl.string(g.t.gKoO1D)}`);
}
function A(e) {
    _.default.track(m.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: f.tz.PREMIUM_STANDARD });
}
async function I(e, t) {
    let n = d.default.getCurrentUser()?.id;
    if (null == n) return;
    let i = (0, h.h)();
    null != e.bio && i && (e.bio = l.Ay.parse(void 0, e.bio).content);
    try {
        a.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n, guildId: t });
        let i = await r.Bo.patch({
            url: null != t ? m.Rsh.USER_GUILD_PROFILE(t, m.ME) : m.Rsh.USER_PROFILE(m.ME),
            body: e,
            rejectWithError: !1,
        });
        if (i.ok) a.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: n, guildId: t, ...i.body });
        else {
            let e = new o.LG(i);
            a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: i.body, apiError: e });
        }
        return i;
    } catch (n) {
        let e = new o.LG(n);
        return a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function T(e, t) {
    let n = d.default.getCurrentUser()?.id;
    null != n && a.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function S() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function N() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function C(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), A(f.Ae.ANIMATED_AVATAR);
}
function R(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        A(f.Ae.AVATAR_DECORATION);
}
function O(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), A(f.Ae.PROFILE_BANNER);
}
function y(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        A(f.Ae.PROFILE_THEME_COLOR);
}
function v(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        A(f.Ae.DISPLAY_NAME_STYLES);
}
function D(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), A(f.Ae.PRESET);
}
async function L() {
    if (null == E.A.applicationWidgetConfigs || !(E.A.applicationWidgetConfigs.length > 0)) {
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
                c.A.captureException(e),
                e)
            );
        }
    }
}
let b = (0, i.UT)(E.A, {
    getQueryId: m.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => E.A.applicationWidgetConfigs,
    load: () => L(),
});
