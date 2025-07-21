(n.r(t), n.d(t, { default: () => x }));
var r = n(255367);
n(73800);
var o = n(990547),
    i = n(442837),
    s = n(906732),
    a = n(213609),
    l = n(353926),
    c = n(443002),
    u = n(703656),
    d = n(430824),
    p = n(742139),
    m = n(639777),
    _ = n(504392),
    f = n(981631);
function x(e) {
    let { guildId: t, powerupSkuId: n } = e,
        x = (0, i.e7)([d.Z], () => d.Z.getGuild(t)),
        v = (0, i.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        g = (0, m.Z)(t),
        b = (0, u.At)(),
        j = (0, p.V)('GuildPowerupsPage'),
        E = !v || null == g || null == x,
        h = (0, s.ZP)(null != b ? b : []);
    return ((0, a.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: h.analyticsLocations }
        },
        { disableTrack: E }
    ),
    E)
        ? null
        : g || j
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
