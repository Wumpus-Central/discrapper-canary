n.d(t, {
    A: () => c,
}),
    n(896048);
var a = n(627968),
    l = n(554146),
    i = n(397927),
    r = n(771781),
    s = n(739560),
    o = n(963763);

function c(e) {
    let { searchQuery: t = "" } = e,
        n = (0, r.Ay)((e) => e.recentlyShown),
        [c, d] = (0, s.A)(),
        u = c
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !n.includes(l.M[e]))
            .slice(0, 3);
    return 0 === u.length
        ? null
        : (0, a.jsx)(i.nVY, {
              label: "Recent Overrides",
              children: (0, a.jsx)(o.A, {
                  items: u,
              }),
          });
}
