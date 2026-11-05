var i = n(620632),
    r = n(765178),
    a = n(73153),
    s = n(627784),
    l = n(724165),
    o = n(61310),
    d = n(451909),
    c = n(287809),
    u = n(129230),
    _ = n(188567),
    E = n(814390),
    A = n(652215),
    f = n(682901),
    h = n(792996);
function I(e) {
    u.default.track(A.HAw.PREMIUM_FEATURE_TRY_OUT, { feature_name: e, feature_tier: f.tz.PREMIUM_STANDARD });
}
n.d(
    t,
    {},
    {
        EW: function (e) {
            (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles: e }),
                I(f.Ae.DISPLAY_NAME_STYLES));
        },
        Go: function (e) {
            (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration: e }),
                I(f.Ae.AVATAR_DECORATION));
        },
        Gr: function (e, t) {
            let n = c.default.getCurrentUser()?.id;
            null != n &&
                a.h.dispatch({ type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: e, ttlInSeconds: t, userId: n });
        },
        RE: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
        },
        VQ: function () {
            (_._.dispatch(A.jej.SHAKE_PROFILE_MODAL),
                _._.dispatch(A.jej.EMPHASIZE_NOTICE),
                r.O.announce(`${h.intl.string(h.t.GP7JLE)} ${h.intl.string(h.t.gKoO1D)}`));
        },
        XQ: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
        },
        a: function (e) {
            (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors: e }),
                I(f.Ae.PROFILE_THEME_COLOR));
        },
        e$: function (e) {
            (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: e }), I(f.Ae.ANIMATED_AVATAR));
        },
        gi: async function (e, t, n) {
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
                return (a.h.dispatch({ type: "USER_PROFILE_UPDATE_SUCCESS", userId: r, guildId: t, ...c.body }), c);
            } catch (i) {
                let e = new s.LG(i),
                    n = i?.body ?? {};
                return (a.h.dispatch({ type: "USER_PROFILE_UPDATE_FAILURE", guildId: t, errors: n, apiError: e }), i);
            }
        },
        sd: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
        },
        w5: function (e) {
            (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET", ...e }), I(f.Ae.PRESET));
        },
        xe: function (e) {
            (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: e }), I(f.Ae.PROFILE_BANNER));
        },
    },
);
