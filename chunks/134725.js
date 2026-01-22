n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(914430),
    c = n(924985),
    o = n(734057),
    s = n(652215),
    u = n(985018);
function d(e) {
    return (0, i.bG)([c.A, o.A], () => {
        let t = Object.values(o.A.getMutableBasicGuildChannelsForGuild(e.guild_id)).filter(
            (e) => e.type === s.rbe.GUILD_CATEGORY,
        );
        return 0 === t.length || t.every((e) => c.A.isCollapsed(e.id));
    })
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "collapse-all-categories",
              label: u.intl.string(u.t["9dqzUr"]),
              action: () => (0, a.rZ)(e.guild_id),
          });
}
