"use strict";
n.d(t, {
    EW: () => O,
    FY: () => L,
    Go: () => N,
    Gr: () => T,
    RE: () => S,
    VQ: () => g,
    XQ: () => y,
    a: () => R,
    e$: () => v,
    gi: () => I,
    w5: () => b,
    xe: () => C,
});
var r = n(311907),
    i = n(562465),
    s = n(582754),
    a = n(73153),
    o = n(198982),
    l = n(451909),
    u = n(287809),
    c = n(954571),
    d = n(203982),
    _ = n(728458),
    f = n(622543),
    p = n(814390),
    h = n(652215),
    m = n(788868),
    E = n(985018);
function g() {
    d._.dispatch(h.jej.SHAKE_PROFILE_MODAL),
        d._.dispatch(h.jej.EMPHASIZE_NOTICE),
        s.OR.announce(`${E.intl.string(E.t.GP7JLE)} ${E.intl.string(E.t.gKoO1D)}`);
}
function A(e) {
    c.default.track(h.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: m.tz.PREMIUM_STANDARD });
}
async function I(e, t) {
    let n = u.default.getCurrentUser()?.id;
    if (null == n) return;
    let r = (0, p.h)();
    null != e.bio && r && (e.bio = l.Ay.parse(void 0, e.bio).content);
    try {
        a.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n, guildId: t });
        let r = await i.Bo.patch({
            url: null != t ? h.Rsh.USER_GUILD_PROFILE(t, h.ME) : h.Rsh.USER_PROFILE(h.ME),
            body: e,
            rejectWithError: !1,
        });
        if (r.ok) a.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: n, guildId: t, ...r.body });
        else {
            let e = new o.LG(r);
            a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: r.body, apiError: e });
        }
        return r;
    } catch (n) {
        let e = new o.LG(n);
        return a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function T(e, t) {
    let n = u.default.getCurrentUser()?.id;
    null != n && a.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function S() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function y() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function v(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), A(m.Ae.ANIMATED_AVATAR);
}
function N(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        A(m.Ae.AVATAR_DECORATION);
}
function C(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), A(m.Ae.PROFILE_BANNER);
}
function R(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        A(m.Ae.PROFILE_THEME_COLOR);
}
function O(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        A(m.Ae.DISPLAY_NAME_STYLES);
}
function b(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), A(m.Ae.PRESET);
}
async function D() {
    if (null == f.A.applicationWidgetConfigs || !(f.A.applicationWidgetConfigs.length > 0)) {
        a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: h.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            a.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (a.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                _.A.captureException(e),
                e)
            );
        }
    }
}
let L = (0, r.UT)(f.A, {
    getQueryId: h.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => f.A.applicationWidgetConfigs,
    load: () => D(),
});
