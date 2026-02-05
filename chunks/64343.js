n.d(t, { A: () => d });
var a = n(627968),
    s = n(554146),
    i = n(397927),
    l = n(771781),
    r = n(739560),
    o = n(963763);
function d(e) {
    let { searchQuery: t = "" } = e,
        n = (0, l.Ay)((e) => e.recentlyShown),
        [d, c] = (0, r.A)(),
        u = d
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !n.includes(s.M[e]))
            .slice(0, 3);
    return 0 === u.length
        ? null
        : (0, a.jsx)(i.nVY, { label: "Recent Overrides", children: (0, a.jsx)(o.A, { items: u }) });
}
