(t.r(n), t.d(n, { default: () => x }));
var r = t(255367);
t(73800);
var i = t(990547),
    o = t(442837),
    a = t(906732),
    s = t(213609),
    l = t(353926),
    c = t(443002),
    u = t(703656),
    d = t(430824),
    m = t(742139),
    p = t(639777),
    _ = t(504392),
    f = t(981631);
function x(e) {
    let { guildId: n, powerupSkuId: t } = e,
        x = (0, o.e7)([d.Z], () => d.Z.getGuild(n)),
        v = (0, o.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        b = (0, p.Z)(n),
        g = (0, u.At)(),
        h = (0, m.V)('GuildPowerupsPage'),
        j = !v || null == b || null == x,
        C = (0, a.ZP)(null != g ? g : []);
    return ((0, s.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: C.analyticsLocations }
        },
        { disableTrack: j }
    ),
    j)
        ? null
        : b || h
          ? (0, r.jsx)(_.Z, {
                guildId: n,
                powerupSkuId: t
            })
          : (0, r.jsx)(c.Z, {
                analyticsLocation: {
                    section: f.jXE.CHANNEL_LIST,
                    object: f.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                },
                guild: x
            });
}
