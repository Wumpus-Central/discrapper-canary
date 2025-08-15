n.r(t), n.d(t, { default: () => x });
var r = n(951288);
n(647438);
var o = n(990547),
    i = n(442837),
    l = n(906732),
    s = n(213609),
    a = n(353926),
    c = n(443002),
    u = n(703656),
    d = n(430824),
    p = n(742139),
    m = n(639777),
    f = n(504392),
    _ = n(981631);
function x(e) {
    let { guildId: t, powerupListingId: n } = e,
        x = (0, i.e7)([d.Z], () => d.Z.getGuild(t)),
        g = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        v = (0, m.Z)(t),
        b = (0, u.At)(),
        h = (0, p.V)("GuildPowerupsPage"),
        j = !g || null == v || null == x,
        C = (0, l.ZP)(null != b ? b : []);
    return ((0, s.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: C.analyticsLocations },
        },
        { disableTrack: j },
    ),
    j)
        ? null
        : v || h
          ? (0, r.jsx)(f.Z, {
                guildId: t,
                powerupListingId: n,
            })
          : (0, r.jsx)(c.Z, {
                analyticsLocation: {
                    section: _.jXE.CHANNEL_LIST,
                    object: _.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM,
                },
                guild: x,
            });
}
