n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(211739),
    c = n(680089),
    a = n(592125),
    s = n(981631),
    u = n(388032);
function d(e) {
    return (0, i.e7)([c.Z, a.Z], () => {
        let t = Object.values(a.Z.getMutableBasicGuildChannelsForGuild(e.guild_id)).filter((e) => e.type === s.d4z.GUILD_CATEGORY);
        return 0 === t.length || t.every((e) => c.Z.isCollapsed(e.id));
    })
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'collapse-all-categories',
              label: u.intl.string(u.t['9dqzUl']),
              action: () => (0, o.N5)(e.guild_id)
          });
}
