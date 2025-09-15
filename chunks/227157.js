n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    i = n(704215),
    a = n(512983),
    o = n(211644),
    s = n(98460),
    l = n(699867),
    c = n(197571);
function u(e) {
    let { searchQuery: t = "" } = e,
        n = (0, o.ZP)((e) => e.recentlyShown),
        [u, d] = (0, s.Z)(),
        f = u.filter((e) => e.toLowerCase().includes(t.toLowerCase())).filter((e) => !n.includes(i.z[e]));
    return 0 === f.length
        ? null
        : (0, r.jsxs)("div", {
              className: c.marginBottom8,
              children: [
                  (0, r.jsx)(a.v, {
                      tag: a.R.H2,
                      children: "Recent Overrides",
                  }),
                  (0, r.jsx)(l.Z, { items: f }),
              ],
          });
}
