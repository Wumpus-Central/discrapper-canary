"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(34879);
let o = (e) => {
    let { message: t, className: n, noResultsImageURL: r, forceLightTheme: o, suggestions: l } = e,
        u = null != r ? { backgroundImage: `url(${r})` } : {};
    return (0, i.jsx)("div", {
        className: s()({ [a.VC]: o }, n),
        children: (0, i.jsxs)("div", {
            className: a.iE,
            children: [(0, i.jsx)("div", { className: a.Gg, style: u }), (0, i.jsx)("div", { children: t }), l],
        }),
    });
};
