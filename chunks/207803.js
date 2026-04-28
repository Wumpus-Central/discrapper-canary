"use strict";
n.d(t, {
    EW: () => N,
    FY: () => L,
    Go: () => S,
    Gr: () => v,
    RE: () => I,
    VQ: () => b,
    XQ: () => y,
    a: () => C,
    e$: () => x,
    gi: () => E,
    w5: () => R,
    xe: () => T,
});
var r = n(17928),
    a = n(636537),
    i = n(765178),
    l = n(228366),
    s = n(845584),
    o = n(451909),
    c = n(287809),
    d = n(954571),
    u = n(625494),
    _ = n(38405),
    p = n(841595),
    f = n(814390),
    m = n(652215),
    h = n(788868),
    g = n(985018);
function b() {
    u._.dispatch(m.jej.SHAKE_PROFILE_MODAL),
        u._.dispatch(m.jej.EMPHASIZE_NOTICE),
        i.O.announce(`${g.intl.string(g.t.GP7JLE)} ${g.intl.string(g.t.gKoO1D)}`);
}
function A(e) {
    d.default.track(m.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: h.tz.PREMIUM_STANDARD });
}
async function E(e, t) {
    let n = c.default.getCurrentUser()?.id;
    if (null == n) return;
    let r = (0, f.h)();
    null != e.bio && r && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        l.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n, guildId: t });
        let r = await a.Bo.patch({
            url: null != t ? m.Rsh.USER_GUILD_PROFILE(t, m.ME) : m.Rsh.USER_PROFILE(m.ME),
            body: e,
            rejectWithError: !1,
        });
        if (r.ok) l.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: n, guildId: t, ...r.body });
        else {
            let e = new s.LG(r);
            l.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: r.body, apiError: e });
        }
        return r;
    } catch (n) {
        let e = new s.LG(n);
        return l.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function v(e, t) {
    let n = c.default.getCurrentUser()?.id;
    null != n && l.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function I() {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function y() {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function x(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), A(h.Ae.ANIMATED_AVATAR);
}
function S(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        A(h.Ae.AVATAR_DECORATION);
}
function T(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), A(h.Ae.PROFILE_BANNER);
}
function C(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        A(h.Ae.PROFILE_THEME_COLOR);
}
function N(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        A(h.Ae.DISPLAY_NAME_STYLES);
}
function R(e) {
    l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), A(h.Ae.PRESET);
}
async function w() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        l.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await a.Bo.get({ url: m.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
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
let L = (0, r.UT)(p.A, {
    getQueryId: m.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => w(),
});
