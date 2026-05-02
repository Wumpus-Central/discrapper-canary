"use strict";
n.d(t, {
    EW: () => b,
    FY: () => w,
    Go: () => v,
    Gr: () => S,
    RE: () => N,
    VQ: () => A,
    XQ: () => y,
    a: () => R,
    e$: () => C,
    gi: () => T,
    w5: () => D,
    xe: () => O,
});
var i = n(17928),
    r = n(636537),
    s = n(765178),
    a = n(228366),
    o = n(845584),
    l = n(77257),
    u = n(451909),
    c = n(287809),
    d = n(174459),
    _ = n(625494),
    f = n(38405),
    h = n(841595),
    p = n(814390),
    E = n(652215),
    m = n(788868),
    g = n(375708);
function A() {
    _._.dispatch(E.jej.SHAKE_PROFILE_MODAL),
        _._.dispatch(E.jej.EMPHASIZE_NOTICE),
        s.O.announce(`${g.intl.string(g.t.GP7JLE)} ${g.intl.string(g.t.gKoO1D)}`);
}
function I(e) {
    d.default.track(E.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: m.tz.PREMIUM_STANDARD });
}
async function T(e, t, n) {
    let i = c.default.getCurrentUser()?.id;
    if (null == i) return;
    let s = (0, p.h)();
    null != e.bio && s && (e.bio = u.Ay.parse(void 0, e.bio).content);
    try {
        a.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: i, guildId: t });
        let s = await r.Bo.patch({
            url: null != t ? E.Rsh.USER_GUILD_PROFILE(t, E.ME) : E.Rsh.USER_PROFILE(E.ME),
            body: e,
            headers: l.A.buildHeadersForMd5(n),
            rejectWithError: !1,
        });
        if (s.ok) a.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: i, guildId: t, ...s.body });
        else {
            let e = new o.LG(s);
            a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: s.body, apiError: e });
        }
        return s;
    } catch (n) {
        let e = new o.LG(n);
        return a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function S(e, t) {
    let n = c.default.getCurrentUser()?.id;
    null != n && a.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function N() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function y() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function C(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), I(m.Ae.ANIMATED_AVATAR);
}
function v(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        I(m.Ae.AVATAR_DECORATION);
}
function O(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), I(m.Ae.PROFILE_BANNER);
}
function R(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        I(m.Ae.PROFILE_THEME_COLOR);
}
function b(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        I(m.Ae.DISPLAY_NAME_STYLES);
}
function D(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), I(m.Ae.PRESET);
}
async function L() {
    if (null == h.A.applicationWidgetConfigs || !(h.A.applicationWidgetConfigs.length > 0)) {
        a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await r.Bo.get({ url: E.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            a.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                f.A.captureException(e),
                e)
            );
        }
    }
}
let w = (0, i.UT)(h.A, {
    getQueryId: E.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => h.A.applicationWidgetConfigs,
    load: () => L(),
});
