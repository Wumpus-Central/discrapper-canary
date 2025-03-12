t.r(n), t.d(n, { default: () => p });
var r = t(200651),
    i = t(512969),
    o = t(442837),
    a = t(353926),
    s = t(443002),
    l = t(430824),
    c = t(50101),
    d = t(639777),
    u = t(504392),
    v = t(981631);
function p(e) {
    let { guildId: n, powerupSkuId: t } = e,
        p = (0, o.e7)([l.Z], () => l.Z.getGuild(n)),
        x = (0, o.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        b = (0, d.Z)(p),
        m = (0, c.Ek)(p, 'GuildPowerupsPage');
    return x && null != b && null != p
        ? m
            ? b
                ? (0, r.jsx)(u.Z, {
                      guildId: n,
                      powerupSkuId: t
                  })
                : (0, r.jsx)(s.Z, {
                      analyticsLocation: {
                          section: v.jXE.CHANNEL_LIST,
                          object: v.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                      },
                      guild: p
                  })
            : (0, r.jsx)(i.l_, { to: v.Z5c.CHANNEL(n) })
        : null;
}
