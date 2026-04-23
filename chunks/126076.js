n.r(t), n.d(t, { default: () => m });
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(311907),
    s = n(688810),
    a = n(139286),
    o = n(49463),
    d = n(976860),
    u = n(71393),
    c = n(363487),
    _ = n(484612);
function m(e) {
    let { guildId: t, powerupListingId: n } = e,
        m = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        p = (0, l.bG)([o.A], () => o.A.hasLoadedExperiments),
        A = (0, c.A)(t),
        x = (0, d.PR)(),
        g = !p || null == A || null == m,
        f = (0, s.Ay)(null != x ? x : []);
    return ((0, a.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: f.analyticsLocations },
        },
        { disableTrack: g },
    ),
    g)
        ? null
        : (0, r.jsx)(_.A, { guildId: t, powerupListingId: n });
}
