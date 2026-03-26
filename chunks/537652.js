"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(20079);
let o = (e) => {
    let { message: t, className: n, noResultsImageURL: i, forceLightTheme: o, suggestions: l } = e,
        u = null != i ? { backgroundImage: `url(${i})` } : {};
    return (0, r.jsx)("div", {
        className: s()({ [a.VC]: o }, n),
        children: (0, r.jsxs)("div", {
            className: a.iE,
            children: [(0, r.jsx)("div", { className: a.Gg, style: u }), (0, r.jsx)("div", { children: t }), l],
        }),
    });
};
