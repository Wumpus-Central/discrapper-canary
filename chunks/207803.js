"use strict";
n.d(t, {
    EW: () => y,
    FY: () => C,
    Go: () => I,
    Gr: () => E,
    RE: () => g,
    a: () => S,
    e$: () => A,
    gi: () => m,
    w5: () => v,
    xe: () => T,
});
var r = n(311907),
    i = n(562465),
    s = n(73153),
    a = n(198982),
    o = n(451909),
    l = n(287809),
    u = n(954571),
    c = n(728458),
    d = n(622543),
    _ = n(814390),
    f = n(652215),
    p = n(788868);
function h(e) {
    u.default.track(f.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: p.tz.PREMIUM_STANDARD });
}
async function m(e, t) {
    let n = l.default.getCurrentUser()?.id;
    if (null == n) return;
    let r = (0, _.h)();
    null != e.bio && r && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        s.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n, guildId: t });
        let r = await i.Bo.patch({
            url: null != t ? f.Rsh.USER_GUILD_PROFILE(t, f.ME) : f.Rsh.USER_PROFILE(f.ME),
            body: e,
            rejectWithError: !1,
        });
        if (r.ok) s.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: n, guildId: t, ...r.body });
        else {
            let e = new a.LG(r);
            s.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: r.body, apiError: e });
        }
        return r;
    } catch (n) {
        let e = new a.LG(n);
        return s.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function E(e, t) {
    let n = l.default.getCurrentUser()?.id;
    null != n && s.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function g() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function A(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), h(p.Ae.ANIMATED_AVATAR);
}
function I(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        h(p.Ae.AVATAR_DECORATION);
}
function T(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), h(p.Ae.PROFILE_BANNER);
}
function S(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        h(p.Ae.PROFILE_THEME_COLOR);
}
function y(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        h(p.Ae.DISPLAY_NAME_STYLES);
}
function v(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), h(p.Ae.PRESET);
}
async function N() {
    if (null == d.A.applicationWidgetConfigs || !(d.A.applicationWidgetConfigs.length > 0)) {
        s.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: f.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            s.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (s.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                c.A.captureException(e),
                e)
            );
        }
    }
}
let C = (0, r.UT)(d.A, {
    getQueryId: f.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => d.A.applicationWidgetConfigs,
    load: () => N(),
});
