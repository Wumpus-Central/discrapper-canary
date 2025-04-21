t.r(n), t.d(n, { default: () => m });
var r = t(200651),
    i = t(512969),
    o = t(442837),
    s = t(353926),
    a = t(443002),
    l = t(430824),
    c = t(50101),
    d = t(639777),
    u = t(504392),
    p = t(981631);
function m(e) {
    let { guildId: n, powerupSkuId: t } = e,
        m = (0, o.e7)([l.Z], () => l.Z.getGuild(n)),
        x = (0, o.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        _ = (0, d.Z)(n),
        f = (0, c.Ek)(n, 'GuildPowerupsPage');
    return x && null != _ && null != m
        ? f
            ? _
                ? (0, r.jsx)(u.Z, {
                      guildId: n,
                      powerupSkuId: t
                  })
                : (0, r.jsx)(a.Z, {
                      analyticsLocation: {
                          section: p.jXE.CHANNEL_LIST,
                          object: p.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                      },
                      guild: m
                  })
            : (0, r.jsx)(i.l_, { to: p.Z5c.CHANNEL(n) })
        : null;
}
