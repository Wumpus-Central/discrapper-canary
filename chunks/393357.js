t.r(n), t.d(n, { default: () => v });
var r = t(255367);
t(73800);
var i = t(114858),
    o = t(990547),
    s = t(442837),
    a = t(906732),
    l = t(213609),
    c = t(353926),
    u = t(443002),
    d = t(703656),
    p = t(430824),
    m = t(50101),
    x = t(639777),
    _ = t(504392),
    f = t(981631);
function v(e) {
    let { guildId: n, powerupSkuId: t } = e,
        v = (0, s.e7)([p.Z], () => p.Z.getGuild(n)),
        g = (0, s.e7)([c.Z], () => c.Z.hasLoadedExperiments),
        j = (0, x.Z)(n),
        b = (0, d.At)(),
        h = (0, m.Ek)(n, 'GuildPowerupsPage'),
        C = !g || null == j || null == v,
        N = (0, a.ZP)(null != b ? b : []);
    return ((0, l.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: N.analyticsLocations }
        },
        { disableTrack: C }
    ),
    C)
        ? null
        : h
          ? j
              ? (0, r.jsx)(_.Z, {
                    guildId: n,
                    powerupSkuId: t
                })
              : (0, r.jsx)(u.Z, {
                    analyticsLocation: {
                        section: f.jXE.CHANNEL_LIST,
                        object: f.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                    },
                    guild: v
                })
          : (0, r.jsx)(i.l_, { to: f.Z5c.CHANNEL(n) });
}
