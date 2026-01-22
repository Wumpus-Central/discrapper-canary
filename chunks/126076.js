l.r(t),
    l.d(t, {
        default: () => p,
    });
var r = l(627968);
l(64700);
var n = l(110259),
    i = l(311907),
    s = l(688810),
    o = l(139286),
    a = l(49463),
    u = l(976860),
    d = l(71393),
    c = l(363487),
    f = l(484612);

function p(e) {
    let { guildId: t, powerupListingId: l } = e,
        p = (0, i.bG)([d.A], () => d.A.getGuild(t)),
        m = (0, i.bG)([a.A], () => a.A.hasLoadedExperiments),
        v = (0, c.A)(t),
        A = (0, u.PR)(),
        g = !m || null == v || null == p,
        x = (0, s.Ay)(null != A ? A : []);
    return ((0, o.A)(
        {
            type: n.ImpressionTypes.VIEW,
            name: n.ImpressionNames.BOOST_SHOP_OPENED,
            properties: {
                location_stack: x.analyticsLocations,
            },
        },
        {
            disableTrack: g,
        },
    ),
    g)
        ? null
        : (0, r.jsx)(f.A, {
              guildId: t,
              powerupListingId: l,
          });
}
