a.d(t, { A: () => d });
var n = a(627968),
    l = a(554146),
    i = a(270003),
    s = a(771781),
    r = a(739560),
    o = a(963763);
function d(e) {
    let { searchQuery: t = "" } = e,
        a = (0, s.Ay)((e) => e.recentlyShown),
        [d, c] = (0, r.A)(),
        u = d
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(l.M[e]))
            .slice(0, 3);
    return 0 === u.length
        ? null
        : (0, n.jsx)(i.n, { label: "Recent Overrides", children: (0, n.jsx)(o.A, { items: u }) });
}
