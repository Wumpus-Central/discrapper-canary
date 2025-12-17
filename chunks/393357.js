n.r(t), n.d(t, { default: () => p });
var r = n(54381);
n(473749);
var i = n(990547),
    l = n(442837),
    o = n(906732),
    a = n(213609),
    s = n(353926),
    c = n(703656),
    u = n(430824),
    d = n(639777),
    f = n(504392);
function p(e) {
    let { guildId: t, powerupListingId: n } = e,
        p = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        m = (0, l.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        g = (0, d.Z)(t),
        v = (0, c.At)(),
        x = !m || null == g || null == p,
        b = (0, o.ZP)(null != v ? v : []);
    return ((0, a.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: b.analyticsLocations },
        },
        { disableTrack: x },
    ),
    x)
        ? null
        : (0, r.jsx)(f.Z, {
              guildId: t,
              powerupListingId: n,
          });
}
