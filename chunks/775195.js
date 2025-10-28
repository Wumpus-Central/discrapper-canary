n.d(t, { Z: () => s });
var a = n(951288),
    r = n(704215),
    l = n(481060),
    i = n(211644),
    o = n(699867);
function s(e) {
    let { searchQuery: t = "" } = e,
        n = (0, i.ZP)((e) => e.recentlyShown)
            .map((e) => r.z[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()));
    return 0 === n.length
        ? null
        : (0, a.jsx)(l.C3N, {
              label: "Recently Shown",
              children: (0, a.jsx)(o.Z, { items: n }),
          });
}
