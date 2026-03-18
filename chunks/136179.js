"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(607399),
    a = n(397927),
    o = n(772577),
    c = n(216042);
function d(e) {
    let { children: t, className: n } = e,
        { horizontalScrollNotice: s, handleScroll: d, handleSetScrollerRef: u, handleSetContainerRef: h } = (0, o.A)(),
        A = (0, i.jsx)("div", {
            className: c.vi,
            children: (0, i.jsx)("div", { className: l()(c._s, n), children: t }),
        });
    return (
        r.Fr ||
            (A = (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(a.T7Y, { className: c.XG, orientation: "horizontal", ref: u, onScroll: d, children: A }),
                ],
            })),
        (0, i.jsx)("div", { className: c.Rc, ref: h, children: A })
    );
}
