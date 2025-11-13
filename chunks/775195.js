n.d(t, { Z: () => o });
var a = n(951288),
    i = n(704215),
    r = n(481060),
    l = n(211644),
    s = n(699867);
function o(e) {
    let { searchQuery: t = "" } = e,
        n = (0, l.ZP)((e) => e.recentlyShown)
            .map((e) => i.z[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()));
    return 0 === n.length
        ? null
        : (0, a.jsx)(r.C3N, {
              label: "Recently Shown",
              children: (0, a.jsx)(s.Z, { items: n }),
          });
}
