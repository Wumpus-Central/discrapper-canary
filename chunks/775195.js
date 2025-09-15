n.d(t, { Z: () => c });
var r = n(951288),
    i = n(704215),
    a = n(481060),
    o = n(211644),
    s = n(699867),
    l = n(197571);
function c(e) {
    let { searchQuery: t = "" } = e,
        n = (0, o.ZP)((e) => e.recentlyShown)
            .map((e) => i.z[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()));
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: l.marginBottom8,
              children: [
                  (0, r.jsx)(a.vwX, {
                      tag: a.RB0.H2,
                      children: "Recently Shown",
                  }),
                  (0, r.jsx)(s.Z, { items: n }),
              ],
          });
}
