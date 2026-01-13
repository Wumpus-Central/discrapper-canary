n.d(t, { Z: () => o });
var a = n(54381),
    r = n(704215),
    i = n(481060),
    l = n(211644),
    s = n(699867);
function o(e) {
    let { searchQuery: t = "" } = e,
        n = (0, l.ZP)((e) => e.recentlyShown)
            .map((e) => r.z[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === n.length
        ? null
        : (0, a.jsx)(i.C3N, {
              label: "Recently Shown",
              children: (0, a.jsx)(s.Z, { items: n }),
          });
}
