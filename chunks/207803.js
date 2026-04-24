n.d(t, {
    EW: () => R,
    FY: () => w,
    Go: () => C,
    Gr: () => v,
    RE: () => I,
    VQ: () => b,
    XQ: () => y,
    a: () => x,
    e$: () => S,
    gi: () => E,
    w5: () => L,
    xe: () => T,
});
var a = n(17928),
    i = n(636537),
    l = n(765178),
    r = n(228366),
    o = n(845584),
    s = n(451909),
    c = n(287809),
    d = n(954571),
    u = n(625494),
    _ = n(38405),
    p = n(841595),
    f = n(814390),
    h = n(652215),
    m = n(788868),
    g = n(985018);
function b() {
    u._.dispatch(h.jej.SHAKE_PROFILE_MODAL),
        u._.dispatch(h.jej.EMPHASIZE_NOTICE),
        l.O.announce(`${g.intl.string(g.t.GP7JLE)} ${g.intl.string(g.t.gKoO1D)}`);
}
function A(e) {
    d.default.track(h.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: m.tz.PREMIUM_STANDARD });
}
async function E(e, t) {
    let n = c.default.getCurrentUser()?.id;
    if (null == n) return;
    let a = (0, f.h)();
    null != e.bio && a && (e.bio = s.Ay.parse(void 0, e.bio).content);
    try {
        r.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: n, guildId: t });
        let a = await i.Bo.patch({
            url: null != t ? h.Rsh.USER_GUILD_PROFILE(t, h.ME) : h.Rsh.USER_PROFILE(h.ME),
            body: e,
            rejectWithError: !1,
        });
        if (a.ok) r.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: n, guildId: t, ...a.body });
        else {
            let e = new o.LG(a);
            r.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: a.body, apiError: e });
        }
        return a;
    } catch (n) {
        let e = new o.LG(n);
        return r.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), n;
    }
}
function v(e, t) {
    let n = c.default.getCurrentUser()?.id;
    null != n && r.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function I() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function y() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function S(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), A(m.Ae.ANIMATED_AVATAR);
}
function C(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        A(m.Ae.AVATAR_DECORATION);
}
function T(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), A(m.Ae.PROFILE_BANNER);
}
function x(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        A(m.Ae.PROFILE_THEME_COLOR);
}
function R(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        A(m.Ae.DISPLAY_NAME_STYLES);
}
function L(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), A(m.Ae.PRESET);
}
async function N() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        r.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: h.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            r.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: e.body.application_configs,
            });
        } catch (e) {
            throw (
                (r.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                _.A.captureException(e),
                e)
            );
        }
    }
}
let w = (0, a.UT)(p.A, {
    getQueryId: h.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => N(),
});
