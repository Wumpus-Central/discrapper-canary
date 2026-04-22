"use strict";
a.d(t, {
    EW: () => T,
    FY: () => k,
    Go: () => I,
    Gr: () => A,
    RE: () => E,
    VQ: () => f,
    XQ: () => y,
    a: () => C,
    e$: () => j,
    gi: () => v,
    w5: () => w,
    xe: () => S,
});
var r = a(311907),
    l = a(562465),
    n = a(765178),
    i = a(73153),
    s = a(198982),
    o = a(451909),
    d = a(287809),
    c = a(954571),
    u = a(203982),
    h = a(728458),
    p = a(622543),
    _ = a(814390),
    m = a(652215),
    b = a(788868),
    g = a(985018);
function f() {
    u._.dispatch(m.jej.SHAKE_PROFILE_MODAL),
        u._.dispatch(m.jej.EMPHASIZE_NOTICE),
        n.O.announce(`${g.intl.string(g.t.GP7JLE)} ${g.intl.string(g.t.gKoO1D)}`);
}
function x(e) {
    c.default.track(m.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: b.tz.PREMIUM_STANDARD });
}
async function v(e, t) {
    let a = d.default.getCurrentUser()?.id;
    if (null == a) return;
    let r = (0, _.h)();
    null != e.bio && r && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        i.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: a, guildId: t });
        let r = await l.Bo.patch({
            url: null != t ? m.Rsh.USER_GUILD_PROFILE(t, m.ME) : m.Rsh.USER_PROFILE(m.ME),
            body: e,
            rejectWithError: !1,
        });
        if (r.ok) i.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: a, guildId: t, ...r.body });
        else {
            let e = new s.LG(r);
            i.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: r.body, apiError: e });
        }
        return r;
    } catch (a) {
        let e = new s.LG(a);
        return i.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), a;
    }
}
function A(e, t) {
    let a = d.default.getCurrentUser()?.id;
    null != a && i.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: a });
}
function E() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function y() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function j(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), x(b.Ae.ANIMATED_AVATAR);
}
function I(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        x(b.Ae.AVATAR_DECORATION);
}
function S(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), x(b.Ae.PROFILE_BANNER);
}
function C(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        x(b.Ae.PROFILE_THEME_COLOR);
}
function T(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        x(b.Ae.DISPLAY_NAME_STYLES);
}
function w(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), x(b.Ae.PRESET);
}
async function R() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        i.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await l.Bo.get({ url: m.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            i.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (i.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                h.A.captureException(e),
                e)
            );
        }
    }
}
let k = (0, r.UT)(p.A, {
    getQueryId: m.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => R(),
});
