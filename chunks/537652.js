r.d(t, { A: () => a });
var s = r(477900);
r(582128);
var n = r(503698),
    l = r.n(n),
    i = r(166743);
let a = function (e) {
    let { message: t, className: r, noResultsImageURL: n, forceLightTheme: a, suggestions: o } = e,
        u = null != n ? { backgroundImage: `url(${n})` } : {};
    return (0, s.jsx)("div", {
        className: l()({ [i.VC]: a }, r),
        children: (0, s.jsxs)("div", {
            className: i.iE,
            children: [(0, s.jsx)("div", { className: i.Gg, style: u }), (0, s.jsx)("div", { children: t }), o],
        }),
    });
};
