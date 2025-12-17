n.d(t, { Z: () => o });
var a = n(54381),
    r = n(704215),
    l = n(481060),
    i = n(211644),
    s = n(699867);
function o(e) {
    let { searchQuery: t = "" } = e,
        n = (0, i.ZP)((e) => e.recentlyShown)
            .map((e) => r.z[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()));
    return 0 === n.length
        ? null
        : (0, a.jsx)(l.C3N, {
              label: "Recently Shown",
              children: (0, a.jsx)(s.Z, { items: n }),
          });
}
