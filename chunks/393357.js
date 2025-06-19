t.r(n), t.d(n, { default: () => v });
var r = t(255367);
t(73800);
var i = t(114858),
    o = t(990547),
    a = t(442837),
    s = t(906732),
    l = t(213609),
    c = t(353926),
    u = t(443002),
    d = t(703656),
    p = t(430824),
    m = t(742139),
    _ = t(50101),
    f = t(639777),
    x = t(504392),
    b = t(981631);
function v(e) {
    let { guildId: n, powerupSkuId: t } = e,
        v = (0, a.e7)([p.Z], () => p.Z.getGuild(n)),
        g = (0, a.e7)([c.Z], () => c.Z.hasLoadedExperiments),
        h = (0, f.Z)(n),
        j = (0, d.At)(),
        C = (0, _.Ek)(n, 'GuildPowerupsPage'),
        E = (0, m.V)('GuildPowerupsPage'),
        Z = !g || null == h || null == v,
        N = (0, s.ZP)(null != j ? j : []);
    return ((0, l.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: N.analyticsLocations }
        },
        { disableTrack: Z }
    ),
    Z)
        ? null
        : C
          ? h || E
              ? (0, r.jsx)(x.Z, {
                    guildId: n,
                    powerupSkuId: t
                })
              : (0, r.jsx)(u.Z, {
                    analyticsLocation: {
                        section: b.jXE.CHANNEL_LIST,
                        object: b.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                    },
                    guild: v
                })
          : (0, r.jsx)(i.l_, { to: b.Z5c.CHANNEL(n) });
}
