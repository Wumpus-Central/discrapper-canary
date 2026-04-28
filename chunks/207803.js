_.d(e, {
    EW: () => f,
    FY: () => D,
    Go: () => N,
    Gr: () => u,
    RE: () => L,
    VQ: () => P,
    XQ: () => d,
    a: () => F,
    e$: () => U,
    gi: () => l,
    w5: () => y,
    xe: () => C,
});
var E = _(17928),
    i = _(636537),
    n = _(765178),
    T = _(228366),
    I = _(845584),
    S = _(451909),
    R = _(287809),
    a = _(954571),
    A = _(625494),
    o = _(38405),
    c = _(841595),
    r = _(814390),
    p = _(652215),
    O = _(788868),
    s = _(985018);
function P() {
    A._.dispatch(p.jej.SHAKE_PROFILE_MODAL),
        A._.dispatch(p.jej.EMPHASIZE_NOTICE),
        n.O.announce(`${s.intl.string(s.t.GP7JLE)} ${s.intl.string(s.t.gKoO1D)}`);
}
function h(t) {
    a.default.track(p.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: t, feature_tier: O.tz.PREMIUM_STANDARD });
}
async function l(t, e) {
    let _ = R.default.getCurrentUser()?.id;
    if (null == _) return;
    let E = (0, r.h)();
    null != t.bio && E && (t.bio = S.Ay.parse(void 0, t.bio).content);
    try {
        T.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: _, guildId: e });
        let E = await i.Bo.patch({
            url: null != e ? p.Rsh.USER_GUILD_PROFILE(e, p.ME) : p.Rsh.USER_PROFILE(p.ME),
            body: t,
            rejectWithError: !1,
        });
        if (E.ok) T.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: _, guildId: e, ...E.body });
        else {
            let t = new I.LG(E);
            T.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: e, errors: E.body, apiError: t });
        }
        return E;
    } catch (_) {
        let t = new I.LG(_);
        return T.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: e, errors: {}, apiError: t }), _;
    }
}
function u(t, e) {
    let _ = R.default.getCurrentUser()?.id;
    null != _ && T.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: t, ttlInSeconds: e, userId: _ });
}
function L() {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function d() {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function U(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: t }), h(O.Ae.ANIMATED_AVATAR);
}
function N(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: t }),
        h(O.Ae.AVATAR_DECORATION);
}
function C(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: t }), h(O.Ae.PROFILE_BANNER);
}
function F(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: t }),
        h(O.Ae.PROFILE_THEME_COLOR);
}
function f(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: t }),
        h(O.Ae.DISPLAY_NAME_STYLES);
}
function y(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...t }), h(O.Ae.PRESET);
}
async function G() {
    if (null == c.A.applicationWidgetConfigs || !(c.A.applicationWidgetConfigs.length > 0)) {
        T.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: p.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
            T.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
                applicationConfigs: t.body.application_configs,
            });
        } catch (t) {
            throw (
                (T.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE" }),
                o.A.captureException(t),
                t)
            );
        }
    }
}
let D = (0, E.UT)(c.A, {
    getQueryId: p.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => c.A.applicationWidgetConfigs,
    load: () => G(),
});
