n.r(t), n.d(t, { default: () => x });
var r = n(255367);
n(73800);
var o = n(990547),
    i = n(442837),
    l = n(906732),
    s = n(213609),
    a = n(353926),
    u = n(443002),
    c = n(703656),
    d = n(430824),
    p = n(742139),
    f = n(639777),
    m = n(504392),
    g = n(981631);
function x(e) {
    let { guildId: t, powerupListingId: n } = e,
        x = (0, i.e7)([d.Z], () => d.Z.getGuild(t)),
        v = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        _ = (0, f.Z)(t),
        b = (0, c.At)(),
        j = (0, p.V)("GuildPowerupsPage"),
        h = !v || null == _ || null == x,
        E = (0, l.ZP)(null != b ? b : []);
    return ((0, s.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: E.analyticsLocations },
        },
        { disableTrack: h },
    ),
    h)
        ? null
        : _ || j
          ? (0, r.jsx)(m.Z, {
                guildId: t,
                powerupListingId: n,
            })
          : (0, r.jsx)(u.Z, {
                analyticsLocation: {
                    section: g.jXE.CHANNEL_LIST,
                    object: g.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM,
                },
                guild: x,
            });
}
