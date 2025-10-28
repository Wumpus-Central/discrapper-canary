n.d(t, { Z: () => c }), n(388685);
var a = n(951288),
    r = n(704215),
    l = n(481060),
    i = n(211644),
    o = n(98460),
    s = n(699867);
function c(e) {
    let { searchQuery: t = "" } = e,
        n = (0, i.ZP)((e) => e.recentlyShown),
        [c, d] = (0, o.Z)(),
        u = c.filter((e) => e.toLowerCase().includes(t.toLowerCase())).filter((e) => !n.includes(r.z[e]));
    return 0 === u.length
        ? null
        : (0, a.jsx)(l.C3N, {
              label: "Recent Overrides",
              children: (0, a.jsx)(s.Z, { items: u }),
          });
}
