n.d(t, { Z: () => u });
var r = n(73800),
    i = n(367907),
    l = n(906732),
    o = n(26323),
    a = n(30513),
    s = n(981631),
    c = n(388032);
function u(e, t, n) {
    let { analyticsLocations: u } = (0, l.ZP)(t);
    return r.useCallback(() => {
        ((0, i.yw)(s.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
            location: { section: n },
            guild_id: e.id,
            location_stack: u
        }),
            (0, o.Z)({
                analyticsLocations: u,
                analyticsSourceLocation: {
                    page: s.ZY5.GUILD_CHANNEL,
                    section: n,
                    object: s.qAy.TOOLTIP
                },
                guild: e,
                perks: (0, a.VF)(),
                perkIntro: c.intl.string(c.t.ZhvSn5)
            }));
    }, [u, n, e]);
}
