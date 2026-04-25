"use strict";
n.d(t, {
    EW: () => N,
    FY: () => L,
    Go: () => C,
    Gr: () => x,
    RE: () => E,
    VQ: () => b,
    XQ: () => T,
    a: () => y,
    e$: () => S,
    gi: () => A,
    w5: () => R,
    xe: () => I,
});
var a = n(17928),
    r = n(636537),
    i = n(765178),
    l = n(228366),
    s = n(845584),
    o = n(451909),
    c = n(287809),
    d = n(954571),
    u = n(625494),
    _ = n(38405),
    p = n(841595),
    m = n(814390),
    h = n(652215),
    f = n(788868),
    g = n(985018);
function b() {
    u._.dispatch(h.jej.SHAKE_PROFILE_MODAL),
        u._.dispatch(h.jej.EMPHASIZE_NOTICE),
        i.O.announce(`${g.intl.string(g.t.GP7JLE)} ${g.intl.string(g.t.gKoO1D)}`);
}
function v(e) {
    d.default.track(h.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: f.tz.PREMIUM_STANDARD });
}
async function A(e, t) {
    let n = c.default.getCurrentUser()?.id;
    if (null == n) return;
    let a = (0, m.h)();
    null != e.bio && a && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        l.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n, guildId: t });
        let a = await r.Bo.patch({
            url: null != t ? h.Rsh.USER_GUILD_PROFILE(t, h.ME) : h.Rsh.USER_PROFILE(h.ME),
            body: e,
            rejectWithError: !1,
        });
        if (a.ok) l.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: n, guildId: t, ...a.body });
        else {
            let e = new s.LG(a);
            l.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: a.body, apiError: e });
        }
        return a;
    } catch (n) {
        let e = new s.LG(n);
        return l.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function x(e, t) {
    let n = c.default.getCurrentUser()?.id;
    null != n && l.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function E() {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function T() {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function S(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), v(f.Ae.ANIMATED_AVATAR);
}
function C(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        v(f.Ae.AVATAR_DECORATION);
}
function I(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), v(f.Ae.PROFILE_BANNER);
}
function y(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        v(f.Ae.PROFILE_THEME_COLOR);
}
function N(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        v(f.Ae.DISPLAY_NAME_STYLES);
}
function R(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), v(f.Ae.PRESET);
}
async function j() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        l.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await r.Bo.get({ url: h.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            l.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (l.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                _.A.captureException(e),
                e)
            );
        }
    }
}
let L = (0, a.UT)(p.A, {
    getQueryId: h.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => j(),
});
