n.r(t), n.d(t, { default: () => f });
var r = n(951288);
n(647438);
var i = n(990547),
    o = n(442837),
    l = n(906732),
    a = n(213609),
    s = n(353926),
    u = n(703656),
    c = n(430824),
    d = n(639777),
    p = n(504392);
function f(e) {
    let { guildId: t, powerupListingId: n } = e,
        f = (0, o.e7)([c.Z], () => c.Z.getGuild(t)),
        m = (0, o.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        _ = (0, d.Z)(t),
        g = (0, u.At)(),
        v = !m || null == _ || null == f,
        x = (0, l.ZP)(null != g ? g : []);
    return ((0, a.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: x.analyticsLocations },
        },
        { disableTrack: v },
    ),
    v)
        ? null
        : (0, r.jsx)(p.Z, {
              guildId: t,
              powerupListingId: n,
          });
}
