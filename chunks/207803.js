_.d(e, {
    EW: () => y,
    FY: () => g,
    Go: () => C,
    Gr: () => u,
    RE: () => L,
    VQ: () => P,
    XQ: () => U,
    a: () => f,
    e$: () => N,
    gi: () => l,
    w5: () => G,
    xe: () => F,
});
var E = _(17928),
    i = _(636537),
    n = _(765178),
    T = _(228366),
    I = _(845584),
    S = _(870218),
    R = _(451909),
    a = _(287809),
    A = _(954571),
    r = _(625494),
    o = _(38405),
    c = _(841595),
    p = _(814390),
    s = _(652215),
    O = _(788868),
    h = _(985018);
function P() {
    r._.dispatch(s.jej.SHAKE_PROFILE_MODAL),
        r._.dispatch(s.jej.EMPHASIZE_NOTICE),
        n.O.announce(`${h.intl.string(h.t.GP7JLE)} ${h.intl.string(h.t.gKoO1D)}`);
}
function d(t) {
    A.default.track(s.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: t, feature_tier: O.tz.PREMIUM_STANDARD });
}
async function l(t, e, _) {
    let E = a.default.getCurrentUser()?.id;
    if (null == E) return;
    let n = (0, p.h)();
    null != t.bio && n && (t.bio = R.Ay.parse(void 0, t.bio).content);
    try {
        T.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: E, guildId: e });
        let n = await i.Bo.patch({
            url: null != e ? s.Rsh.USER_GUILD_PROFILE(e, s.ME) : s.Rsh.USER_PROFILE(s.ME),
            body: t,
            headers: S.A.buildHeadersForMd5(_),
            rejectWithError: !1,
        });
        if (n.ok) T.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: E, guildId: e, ...n.body });
        else {
            let t = new I.LG(n);
            T.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: e, errors: n.body, apiError: t });
        }
        return n;
    } catch (_) {
        let t = new I.LG(_);
        return T.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: e, errors: {}, apiError: t }), _;
    }
}
function u(t, e) {
    let _ = a.default.getCurrentUser()?.id;
    null != _ && T.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: t, ttlInSeconds: e, userId: _ });
}
function L() {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function U() {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function N(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: t }), d(O.Ae.ANIMATED_AVATAR);
}
function C(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: t }),
        d(O.Ae.AVATAR_DECORATION);
}
function F(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: t }), d(O.Ae.PROFILE_BANNER);
}
function f(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: t }),
        d(O.Ae.PROFILE_THEME_COLOR);
}
function y(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: t }),
        d(O.Ae.DISPLAY_NAME_STYLES);
}
function G(t) {
    T.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...t }), d(O.Ae.PRESET);
}
async function D() {
    if (null == c.A.applicationWidgetConfigs || !(c.A.applicationWidgetConfigs.length > 0)) {
        T.h.dispatch({ type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: s.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS, rejectWithError: !0 });
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
let g = (0, E.UT)(c.A, {
    getQueryId: s.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
    get: () => c.A.applicationWidgetConfigs,
    load: () => D(),
});
