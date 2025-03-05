t.r(n), t.d(n, { default: () => d });
var r = t(200651),
    i = t(442837),
    o = t(443002),
    a = t(430824),
    s = t(639777),
    c = t(504392),
    l = t(981631);
function d(e) {
    let { guildId: n } = e,
        t = (0, i.e7)([a.Z], () => a.Z.getGuild(n)),
        d = (0, s.Z)(t);
    return null == d || null == t
        ? null
        : d
          ? (0, r.jsx)(c.Z, { guildId: n })
          : (0, r.jsx)(o.Z, {
                analyticsLocation: {
                    section: l.jXE.CHANNEL_LIST,
                    object: l.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                },
                guild: t
            });
}
