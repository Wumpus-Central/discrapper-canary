t.r(n), t.d(n, { default: () => g });
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
    m = t(742139),
    _ = t(50101),
    x = t(639777),
    f = t(504392),
    v = t(981631);
function g(e) {
    let { guildId: n, powerupSkuId: t } = e,
        g = (0, s.e7)([p.Z], () => p.Z.getGuild(n)),
        j = (0, s.e7)([c.Z], () => c.Z.hasLoadedExperiments),
        b = (0, x.Z)(n),
        h = (0, d.At)(),
        C = (0, _.Ek)(n, 'GuildPowerupsPage'),
        E = (0, m.V)('GuildPowerupsPage'),
        N = !j || null == b || null == g,
        Z = (0, a.ZP)(null != h ? h : []);
    return ((0, l.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: Z.analyticsLocations }
        },
        { disableTrack: N }
    ),
    N)
        ? null
        : C
          ? b || E
              ? (0, r.jsx)(f.Z, {
                    guildId: n,
                    powerupSkuId: t
                })
              : (0, r.jsx)(u.Z, {
                    analyticsLocation: {
                        section: v.jXE.CHANNEL_LIST,
                        object: v.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                    },
                    guild: g
                })
          : (0, r.jsx)(i.l_, { to: v.Z5c.CHANNEL(n) });
}
