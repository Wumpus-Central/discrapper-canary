i.r(e), i.d(e, { default: () => u });
var t = i(200651),
    r = i(442837),
    a = i(443002),
    s = i(430824),
    o = i(496675),
    c = i(504392),
    l = i(981631),
    d = i(231338);
function u(n) {
    let { guildId: e } = n,
        i = (0, r.e7)([s.Z], () => s.Z.getGuild(e)),
        u = (0, r.e7)([o.Z], () => (null == i || null == o.Z.getGuildPermissions(i) ? null : o.Z.can(d.Pl.ADMINISTRATOR, i)));
    return null == u || null == i
        ? null
        : u
          ? (0, t.jsx)(c.Z, { guildId: e })
          : (0, t.jsx)(a.Z, {
                analyticsLocation: {
                    section: l.jXE.CHANNEL_LIST,
                    object: l.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                },
                onClose: () => {},
                guild: i
            });
}
