i.r(e), i.d(e, { default: () => u });
var t = i(200651),
    a = i(442837),
    r = i(443002),
    o = i(430824),
    s = i(496675),
    c = i(504392),
    l = i(981631),
    d = i(231338);
function u(n) {
    let { guildId: e } = n,
        i = (0, a.e7)([o.Z], () => o.Z.getGuild(e)),
        u = (0, a.e7)([s.Z], () => (null == i || null == s.Z.getGuildPermissions(i) ? null : s.Z.can(d.Pl.ADMINISTRATOR, i)));
    return null == u || null == i
        ? null
        : u
          ? (0, t.jsx)(c.Z, { guildId: e })
          : (0, t.jsx)(r.Z, {
                analyticsLocation: {
                    section: l.jXE.CHANNEL_LIST,
                    object: l.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
                },
                onClose: () => {},
                guild: i
            });
}
