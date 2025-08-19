n.d(t, { Z: () => u });
var r = n(647438),
    i = n(367907),
    l = n(906732),
    o = n(26323),
    a = n(30513),
    s = n(981631),
    c = n(388032);
function u(e, t) {
    let { analyticsLocations: n } = (0, l.ZP)(t);
    return r.useCallback(() => {
        (0, i.yw)(s.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
            location: { source: t },
            guild_id: e.id,
            location_stack: n,
        }),
            (0, o.Z)({
                analyticsLocations: n,
                analyticsSourceLocation: {
                    page: s.ZY5.GUILD_CHANNEL,
                    source: t,
                    object: s.qAy.TOOLTIP,
                },
                guild: e,
                perks: (0, a.VF)(),
                perkIntro: c.intl.string(c.t.ZhvSn5),
            });
    }, [n, t, e]);
}
