a.d(t, {
    EW: () => T,
    FY: () => N,
    Go: () => S,
    Gr: () => A,
    RE: () => E,
    VQ: () => g,
    XQ: () => y,
    a: () => C,
    e$: () => I,
    gi: () => v,
    w5: () => w,
    xe: () => j,
});
var n = a(17928),
    l = a(636537),
    r = a(765178),
    i = a(228366),
    s = a(845584),
    o = a(451909),
    c = a(287809),
    d = a(954571),
    u = a(625494),
    h = a(38405),
    p = a(841595),
    m = a(814390),
    f = a(652215),
    _ = a(788868),
    b = a(985018);
function g() {
    u._.dispatch(f.jej.SHAKE_PROFILE_MODAL),
        u._.dispatch(f.jej.EMPHASIZE_NOTICE),
        r.O.announce(`${b.intl.string(b.t.GP7JLE)} ${b.intl.string(b.t.gKoO1D)}`);
}
function x(e) {
    d.default.track(f.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: _.tz.PREMIUM_STANDARD });
}
async function v(e, t) {
    let a = c.default.getCurrentUser()?.id;
    if (null == a) return;
    let n = (0, m.h)();
    null != e.bio && n && (e.bio = o.Ay.parse(void 0, e.bio).content);
    try {
        i.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: a, guildId: t });
        let n = await l.Bo.patch({
            url: null != t ? f.Rsh.USER_GUILD_PROFILE(t, f.ME) : f.Rsh.USER_PROFILE(f.ME),
            body: e,
            rejectWithError: !1,
        });
        if (n.ok) i.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: a, guildId: t, ...n.body });
        else {
            let e = new s.LG(n);
            i.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: n.body, apiError: e });
        }
        return n;
    } catch (a) {
        let e = new s.LG(a);
        return i.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: {}, apiError: e }), a;
    }
}
function A(e, t) {
    let a = c.default.getCurrentUser()?.id;
    null != a && i.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: a });
}
function E() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function y() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function I(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), x(_.Ae.ANIMATED_AVATAR);
}
function S(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        x(_.Ae.AVATAR_DECORATION);
}
function j(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), x(_.Ae.PROFILE_BANNER);
}
function C(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        x(_.Ae.PROFILE_THEME_COLOR);
}
function T(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        x(_.Ae.DISPLAY_NAME_STYLES);
}
function w(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), x(_.Ae.PRESET);
}
async function R() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        i.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let e = await l.Bo.get({ url: f.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
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
let N = (0, n.UT)(p.A, {
    getQueryId: f.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => R(),
});
