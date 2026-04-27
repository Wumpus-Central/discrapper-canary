"use strict";
r.d(t, {
    EW: () => R,
    FY: () => w,
    Go: () => x,
    Gr: () => v,
    RE: () => y,
    VQ: () => b,
    XQ: () => I,
    a: () => C,
    e$: () => S,
    gi: () => E,
    w5: () => N,
    xe: () => T,
});
var n = r(17928),
    i = r(636537),
    a = r(765178),
    s = r(228366),
    l = r(845584),
    o = r(451909),
    c = r(287809),
    d = r(954571),
    u = r(625494),
    _ = r(38405),
    p = r(841595),
    f = r(814390),
    m = r(652215),
    h = r(788868),
    g = r(985018);
function b() {
    u._.dispatch(m.jej.SHAKE_PROFILE_MODAL),
        u._.dispatch(m.jej.EMPHASIZE_NOTICE),
        a.O.announce(`${g.intl.string(g.t.GP7JLE)} ${g.intl.string(g.t.gKoO1D)}`);
}
function A(e) {
    d.default.track(m.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: h.tz.PREMIUM_STANDARD });
}
async function E(e, t) {
    let r = c.default.getCurrentUser()?.id;
    if (null == r) return;
    let n = (0, f.h)();
    null != e.bio && n && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        s.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: r, guildId: t });
        let n = await i.Bo.patch({
            url: null != t ? m.Rsh.USER_GUILD_PROFILE(t, m.ME) : m.Rsh.USER_PROFILE(m.ME),
            body: e,
            rejectWithError: !1,
        });
        if (n.ok) s.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: r, guildId: t, ...n.body });
        else {
            let e = new l.LG(n);
            s.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: n.body, apiError: e });
        }
        return n;
    } catch (r) {
        let e = new l.LG(r);
        return s.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), r;
    }
}
function v(e, t) {
    let r = c.default.getCurrentUser()?.id;
    null != r && s.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: r });
}
function y() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function I() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function S(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), A(h.Ae.ANIMATED_AVATAR);
}
function x(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        A(h.Ae.AVATAR_DECORATION);
}
function T(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), A(h.Ae.PROFILE_BANNER);
}
function C(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        A(h.Ae.PROFILE_THEME_COLOR);
}
function R(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        A(h.Ae.DISPLAY_NAME_STYLES);
}
function N(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), A(h.Ae.PRESET);
}
async function L() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        s.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: m.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            s.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (s.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                _.A.captureException(e),
                e)
            );
        }
    }
}
let w = (0, n.UT)(p.A, {
    getQueryId: m.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => L(),
});
