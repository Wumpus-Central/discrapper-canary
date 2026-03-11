"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(607399),
    r = n(397927),
    o = n(772577),
    c = n(67828);
function d(e) {
    let { guildId: t, children: n, className: s } = e,
        { horizontalScrollNotice: d, handleScroll: u, handleSetScrollerRef: h, handleSetContainerRef: A } = (0, o.A)(t),
        m = (0, i.jsx)("div", {
            className: c.vi,
            children: (0, i.jsx)("div", { className: l()(c._s, s), children: n }),
        });
    return (
        a.Fr ||
            (m = (0, i.jsxs)(i.Fragment, {
                children: [
                    d,
                    (0, i.jsx)(r.T7Y, { className: c.XG, orientation: "horizontal", ref: h, onScroll: u, children: m }),
                ],
            })),
        (0, i.jsx)("div", { className: c.Rc, ref: A, children: m })
    );
}
