(n.r(t), n.d(t, { default: () => x }));
var r = n(255367);
n(73800);
var i = n(990547),
    o = n(442837),
    a = n(906732),
    s = n(213609),
    l = n(353926),
    c = n(443002),
    d = n(703656),
    u = n(430824),
    p = n(742139),
    m = n(639777),
    _ = n(504392),
    f = n(981631);
function x(e) {
    let { guildId: t, powerupSkuId: n } = e,
        x = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        b = (0, o.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        v = (0, m.Z)(t),
        g = (0, d.At)(),
        h = (0, p.V)('GuildPowerupsPage'),
        j = !b || null == v || null == x,
        E = (0, a.ZP)(null != g ? g : []);
    return ((0, s.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: E.analyticsLocations }
        },
        { disableTrack: j }
    ),
    j)
        ? null
        : v || h
          ? (0, r.jsx)(_.Z, {
                guildId: t,
                powerupSkuId: n
            })
          : (0, r.jsx)(c.Z, {
                analyticsLocation: {
                    section: f.jXE.CHANNEL_LIST,
                    object: f.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                },
                guild: x
            });
}
