r.d(t, { A: () => o });
var s = r(627968);
r(64700);
var l = r(503698),
    n = r.n(l),
    i = r(34879);
let o = (e) => {
    let { message: t, className: r, noResultsImageURL: l, forceLightTheme: o, suggestions: a } = e,
        c = null != l ? { backgroundImage: `url(${l})` } : {};
    return (0, s.jsx)("div", {
        className: n()({ [i.VC]: o }, r),
        children: (0, s.jsxs)("div", {
            className: i.iE,
            children: [(0, s.jsx)("div", { className: i.Gg, style: c }), (0, s.jsx)("div", { children: t }), a],
        }),
    });
};
