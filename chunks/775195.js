n.d(t, { Z: () => o });
var a = n(54381),
    l = n(704215),
    i = n(481060),
    r = n(211644),
    s = n(699867);
function o(e) {
    let { searchQuery: t = "" } = e,
        n = (0, r.ZP)((e) => e.recentlyShown)
            .map((e) => l.z[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()));
    return 0 === n.length
        ? null
        : (0, a.jsx)(i.C3N, {
              label: "Recently Shown",
              children: (0, a.jsx)(s.Z, { items: n }),
          });
}
