"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(166743);
let l = function (e) {
    let { message: t, className: n, noResultsImageURL: r, forceLightTheme: l, suggestions: o } = e,
        d = null != r ? { backgroundImage: `url(${r})` } : {};
    return (0, i.jsx)("div", {
        className: a()({ [s.VC]: l }, n),
        children: (0, i.jsxs)("div", {
            className: s.iE,
            children: [(0, i.jsx)("div", { className: s.Gg, style: d }), (0, i.jsx)("div", { children: t }), o],
        }),
    });
};
