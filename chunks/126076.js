n.r(t), n.d(t, { default: () => m });
var r = n(627968);
n(64700);
var l = n(110259),
    i = n(311907),
    s = n(688810),
    o = n(139286),
    a = n(49463),
    u = n(976860),
    d = n(71393),
    c = n(363487),
    p = n(484612);
function m(e) {
    let { guildId: t, powerupListingId: n } = e,
        m = (0, i.bG)([d.A], () => d.A.getGuild(t)),
        A = (0, i.bG)([a.A], () => a.A.hasLoadedExperiments),
        _ = (0, c.A)(t),
        g = (0, u.PR)(),
        f = !A || null == _ || null == m,
        x = (0, s.Ay)(null != g ? g : []);
    return ((0, o.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: x.analyticsLocations },
        },
        { disableTrack: f },
    ),
    f)
        ? null
        : (0, r.jsx)(p.A, { guildId: t, powerupListingId: n });
}
