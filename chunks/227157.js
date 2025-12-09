n.d(t, { Z: () => c }), n(388685);
var a = n(54381),
    r = n(704215),
    i = n(481060),
    l = n(211644),
    s = n(98460),
    o = n(699867);
function c(e) {
    let { searchQuery: t = "" } = e,
        n = (0, l.ZP)((e) => e.recentlyShown),
        [c, d] = (0, s.Z)(),
        u = c.filter((e) => e.toLowerCase().includes(t.toLowerCase())).filter((e) => !n.includes(r.z[e]));
    return 0 === u.length
        ? null
        : (0, a.jsx)(i.C3N, {
              label: "Recent Overrides",
              children: (0, a.jsx)(o.Z, { items: u }),
          });
}
