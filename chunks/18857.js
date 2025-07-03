n.d(t, { Z: () => d });
var r = n(73800),
    i = n(100527),
    l = n(367907),
    o = n(906732),
    s = n(26323),
    a = n(30513),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { analyticsLocations: t } = (0, o.ZP)(i.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
    return r.useCallback(() => {
        ((0, l.yw)(c.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
            location: { section: c.jXE.PREMIUM_GUILD_PROGRESS_BAR },
            guild_id: e.id,
            location_stack: t
        }),
            (0, s.Z)({
                analyticsLocations: t,
                analyticsSourceLocation: {
                    page: c.ZY5.GUILD_CHANNEL,
                    section: c.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                    object: c.qAy.TOOLTIP
                },
                guild: e,
                perks: (0, a.VF)(),
                perkIntro: u.intl.string(u.t.ZhvSn5)
            }));
    }, [t, e]);
}
