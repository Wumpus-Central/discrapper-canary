e.d(t, { A: () => A });
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(477782),
    a = e(914430),
    d = e(924985),
    s = e(734057),
    c = e(652215),
    o = e(985018);
function A(n) {
    return (0, r.bG)([d.A, s.A], () => {
        let t = Object.values(s.A.getMutableBasicGuildChannelsForGuild(n.guild_id)).filter(
            (n) => n.type === c.rbe.GUILD_CATEGORY,
        );
        return 0 === t.length || t.every((n) => d.A.isCollapsed(n.id));
    })
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "collapse-all-categories",
              label: o.intl.string(o.t["9dqzUr"]),
              action: () => (0, a.rZ)(n.guild_id),
          });
}
