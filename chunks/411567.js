n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    c = n(211739),
    a = n(680089),
    l = n(592125),
    s = n(981631),
    u = n(388032);
function d(e) {
    return (0, i.e7)([a.Z, l.Z], () => {
        let t = Object.values(l.Z.getMutableBasicGuildChannelsForGuild(e.guild_id)).filter((e) => e.type === s.d4z.GUILD_CATEGORY);
        return 0 === t.length || t.every((e) => a.Z.isCollapsed(e.id));
    })
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'collapse-all-categories',
              label: u.NW.string(u.t['9dqzUl']),
              action: () => (0, c.N5)(e.guild_id)
          });
}
