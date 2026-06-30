"use strict";
n.d(t, {
    EW: () => R,
    Go: () => C,
    Gr: () => I,
    RE: () => T,
    VQ: () => m,
    XQ: () => S,
    a: () => v,
    e$: () => y,
    gi: () => A,
    w5: () => O,
    xe: () => N,
});
var i = n(636537),
    r = n(765178),
    s = n(228366),
    a = n(913122),
    o = n(77257),
    l = n(61310),
    u = n(451909),
    c = n(287809),
    d = n(174459),
    _ = n(625494),
    h = n(814390),
    f = n(652215),
    p = n(788868),
    E = n(375708);
function m() {
    _._.dispatch(f.jej.SHAKE_PROFILE_MODAL),
        _._.dispatch(f.jej.EMPHASIZE_NOTICE),
        r.O.announce(`${E.intl.string(E.t.GP7JLE)} ${E.intl.string(E.t.gKoO1D)}`);
}
function g(e) {
    d.default.track(f.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: p.tz.PREMIUM_STANDARD });
}
async function A(e, t, n) {
    let r = c.default.getCurrentUser()?.id;
    if (null == r) return;
    let d = (0, h.h)();
    null != e.bio && d && (e.bio = u.Ay.parse(void 0, e.bio).content);
    try {
        s.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: r, guildId: t });
        let { url: a, bannerSurface: u } =
                null != t
                    ? { url: f.Rsh.USER_GUILD_PROFILE(t, f.ME), bannerSurface: l.f.USER_GUILD_PROFILE_BANNER }
                    : { url: f.Rsh.USER_PROFILE(f.ME), bannerSurface: l.f.USER_DEFAULT_PROFILE_BANNER },
            c = await i.Bo.patch({
                url: a,
                body: e,
                headers: o.A.buildHeadersForMd5({ [u]: n }),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return s.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: r, guildId: t, ...c.body }), c;
    } catch (i) {
        let e = new a.LG(i),
            n = i?.body ?? {};
        return s.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: n, apiError: e }), i;
    }
}
function I(e, t) {
    let n = c.default.getCurrentUser()?.id;
    null != n && s.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function T() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function S() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function y(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), g(p.Ae.ANIMATED_AVATAR);
}
function C(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        g(p.Ae.AVATAR_DECORATION);
}
function N(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), g(p.Ae.PROFILE_BANNER);
}
function v(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        g(p.Ae.PROFILE_THEME_COLOR);
}
function R(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        g(p.Ae.DISPLAY_NAME_STYLES);
}
function O(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), g(p.Ae.PRESET);
}
