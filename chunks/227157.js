n.d(t, { Z: () => c }), n(388685);
var a = n(951288),
    i = n(704215),
    l = n(481060),
    r = n(211644),
    s = n(98460),
    o = n(699867);
function c(e) {
    let { searchQuery: t = "" } = e,
        n = (0, r.ZP)((e) => e.recentlyShown),
        [c, d] = (0, s.Z)(),
        u = c.filter((e) => e.toLowerCase().includes(t.toLowerCase())).filter((e) => !n.includes(i.z[e]));
    return 0 === u.length
        ? null
        : (0, a.jsx)(l.C3N, {
              label: "Recent Overrides",
              children: (0, a.jsx)(o.Z, { items: u }),
          });
}
