n.r(t), n.d(t, { default: () => f });
var r = n(54381);
n(473749);
var i = n(990547),
    l = n(442837),
    o = n(906732),
    a = n(213609),
    s = n(353926),
    u = n(703656),
    c = n(430824),
    d = n(639777),
    p = n(504392);
function f(e) {
    let { guildId: t, powerupListingId: n } = e,
        f = (0, l.e7)([c.Z], () => c.Z.getGuild(t)),
        m = (0, l.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        g = (0, d.Z)(t),
        v = (0, u.At)(),
        x = !m || null == g || null == f,
        _ = (0, o.ZP)(null != v ? v : []);
    return ((0, a.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: _.analyticsLocations },
        },
        { disableTrack: x },
    ),
    x)
        ? null
        : (0, r.jsx)(p.Z, {
              guildId: t,
              powerupListingId: n,
          });
}
