_.d(e, {
    EW: () => G,
    FY: () => M,
    Go: () => C,
    Gr: () => d,
    RE: () => U,
    VQ: () => u,
    XQ: () => N,
    a: () => y,
    e$: () => F,
    gi: () => l,
    w5: () => D,
    xe: () => f,
});
var E = _(17928),
    n = _(636537),
    i = _(765178),
    T = _(228366),
    I = _(913122),
    R = _(77257),
    S = _(61310),
    a = _(451909),
    r = _(287809),
    A = _(174459),
    c = _(625494),
    o = _(38405),
    p = _(841595),
    O = _(814390),
    s = _(652215),
    P = _(788868),
    h = _(375708);
function u() {
    c._.dispatch(s.jej.SHAKE_PROFILE_MODAL),
        c._.dispatch(s.jej.EMPHASIZE_NOTICE),
        i.O.announce(`${h.intl.string(h.t.GP7JLE)} ${h.intl.string(h.t.gKoO1D)}`);
}
function L(t) {
    A.default.track(s.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: t, feature_tier: P.tz.PREMIUM_STANDARD });
}
async function l(t, e, _) {
    let E = r.default.getCurrentUser()?.id;
    if (null == E) return;
    let i = (0, O.h)();
    null != t.bio && i && (t.bio = a.Ay.parse(void 0, t.bio).content);
    try {
        T.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: E, guildId: e });
        let { url: i, bannerSurface: a } =
                null != e
                    ? { url: s.Rsh.USER_GUILD_PROFILE(e, s.ME), bannerSurface: S.f.USER_GUILD_PROFILE_BANNER }
                    : { url: s.Rsh.USER_PROFILE(s.ME), bannerSurface: S.f.USER_DEFAULT_PROFILE_BANNER },
            r = await n.Bo.patch({ url: i, body: t, headers: R.A.buildHeadersForMd5({ [a]: _ }), rejectWithError: !1 });
        if (r.ok) T.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: E, guildId: e, ...r.body });
        else {
            let t = new I.LG(r);
            T.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: e, errors: r.body, apiError: t });
        }
        return r;
    } catch (_) {
        let t = new I.LG(_);
        return T.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: e, errors: {}, apiError: t }), _;
    }
}
function d(t, e) {
    let _ = r.default.getCurrentUser()?.id;
    null != _ && T.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: t, ttlInSeconds: e, userId: _ });
}
function U() {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function N() {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function F(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: t }), L(P.Ae.ANIMATED_AVATAR);
}
function C(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: t }),
        L(P.Ae.AVATAR_DECORATION);
}
function f(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: t }), L(P.Ae.PROFILE_BANNER);
}
function y(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: t }),
        L(P.Ae.PROFILE_THEME_COLOR);
}
function G(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: t }),
        L(P.Ae.DISPLAY_NAME_STYLES);
}
function D(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...t }), L(P.Ae.PRESET);
}
async function g() {
    if (null == p.A.applicationWidgetConfigs || !(p.A.applicationWidgetConfigs.length > 0)) {
        T.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let t = await n.Bo.get({ url: s.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
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
let M = (0, E.UT)(p.A, {
    getQueryId: s.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => p.A.applicationWidgetConfigs,
    load: () => g(),
});
