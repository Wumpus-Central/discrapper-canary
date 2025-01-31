e.d(t, { Z: () => u });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    r = e(211739),
    s = e(680089),
    d = e(592125),
    c = e(981631),
    o = e(388032);
function u(n) {
    return (0, l.e7)([s.Z, d.Z], () => {
        let t = Object.values(d.Z.getMutableBasicGuildChannelsForGuild(n.guild_id)).filter((n) => n.type === c.d4z.GUILD_CATEGORY);
        return 0 === t.length || t.every((n) => s.Z.isCollapsed(n.id));
    })
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'collapse-all-categories',
              label: o.intl.string(o.t['9dqzUl']),
              action: () => (0, r.N5)(n.guild_id)
          });
}
