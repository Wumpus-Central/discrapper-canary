t.r(n), t.d(n, { default: () => u });
var i = t(200651),
    r = t(442837),
    a = t(443002),
    o = t(430824),
    s = t(496675),
    c = t(504392),
    l = t(981631),
    d = t(231338);
function u(e) {
    let { guildId: n } = e,
        t = (0, r.e7)([o.Z], () => o.Z.getGuild(n)),
        u = (0, r.e7)([s.Z], () => (null == t || null == s.Z.getGuildPermissions(t) ? null : s.Z.can(d.Pl.ADMINISTRATOR, t)));
    return null == u || null == t
        ? null
        : u
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
