"use strict";
n.d(t, {
    EW: () => y,
    Go: () => O,
    Gr: () => m,
    RE: () => g,
    VQ: () => f,
    XQ: () => S,
    a: () => L,
    e$: () => C,
    gi: () => T,
    sd: () => N,
    w5: () => D,
    xe: () => R,
});
var i = n(636537),
    r = n(765178),
    a = n(228366),
    s = n(913122),
    l = n(77257),
    o = n(61310),
    d = n(451909),
    c = n(287809),
    u = n(174459),
    _ = n(625494),
    E = n(814390),
    A = n(652215),
    h = n(202541),
    I = n(375708);
function f() {
    _._.dispatch(A.jej.SHAKE_PROFILE_MODAL),
        _._.dispatch(A.jej.EMPHASIZE_NOTICE),
        r.O.announce(`${I.intl.string(I.t.GP7JLE)} ${I.intl.string(I.t.gKoO1D)}`);
}
function p(e) {
    u.default.track(A.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: h.tz.PREMIUM_STANDARD });
}
async function T(e, t, n) {
    let r = c.default.getCurrentUser()?.id;
    if (null == r) return;
    let u = (0, E.h)();
    null != e.bio && u && (e.bio = d.Ay.parse(void 0, e.bio).content);
    try {
        a.h.dispatch({ type: "USER_PROFILE_UPDATE_START", userId: r, guildId: t });
        let { url: s, bannerSurface: d } =
                null != t
                    ? { url: A.Rsh.USER_GUILD_PROFILE(t, A.ME), bannerSurface: o.f.USER_GUILD_PROFILE_BANNER }
                    : { url: A.Rsh.USER_PROFILE(A.ME), bannerSurface: o.f.USER_DEFAULT_PROFILE_BANNER },
            c = await i.Bo.patch({
                url: s,
                body: e,
                headers: l.A.buildHeadersForMd5({ [d]: n }),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return a.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: r, guildId: t, ...c.body }), c;
    } catch (i) {
        let e = new s.LG(i),
            n = i?.body ?? {};
        return a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: n, apiError: e }), i;
    }
}
function m(e, t) {
    let n = c.default.getCurrentUser()?.id;
    null != n && a.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
}
function g() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function S() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function N() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
}
function C(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), p(h.Ae.ANIMATED_AVATAR);
}
function O(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
        p(h.Ae.AVATAR_DECORATION);
}
function R(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), p(h.Ae.PROFILE_BANNER);
}
function L(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
        p(h.Ae.PROFILE_THEME_COLOR);
}
function y(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
        p(h.Ae.DISPLAY_NAME_STYLES);
}
function D(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), p(h.Ae.PRESET);
}
