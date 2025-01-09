t.d(e, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(211739),
    u = t(680089),
    d = t(592125),
    s = t(981631),
    o = t(388032);
function c(n) {
    return (0, r.e7)([u.Z, d.Z], () => {
        let e = Object.values(d.Z.getMutableBasicGuildChannelsForGuild(n.guild_id)).filter((n) => n.type === s.d4z.GUILD_CATEGORY);
        return 0 === e.length || e.every((n) => u.Z.isCollapsed(n.id));
    })
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'collapse-all-categories',
              label: o.intl.string(o.t['9dqzUl']),
              action: () => (0, a.N5)(n.guild_id)
          });
}
