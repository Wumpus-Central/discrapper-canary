t.r(n), t.d(n, { default: () => d });
var i = t(200651),
    r = t(442837),
    a = t(443002),
    o = t(430824),
    s = t(639777),
    c = t(504392),
    l = t(981631);
function d(e) {
    let { guildId: n } = e,
        t = (0, r.e7)([o.Z], () => o.Z.getGuild(n)),
        d = (0, s.Z)(t);
    return null == d || null == t
        ? null
        : d
          ? (0, i.jsx)(c.Z, { guildId: n })
          : (0, i.jsx)(a.Z, {
                analyticsLocation: {
                    section: l.jXE.CHANNEL_LIST,
                    object: l.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                },
                onClose: () => {},
                guild: t
            });
}
