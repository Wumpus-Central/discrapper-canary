n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(607399),
    r = n(397927),
    o = n(772577),
    c = n(814871);
function d(e) {
    let { children: t, className: n } = e,
        { horizontalScrollNotice: l, handleScroll: d, handleSetScrollerRef: u, handleSetContainerRef: h } = (0, o.A)(),
        A = (0, i.jsx)("div", {
            className: c.vi,
            children: (0, i.jsx)("div", { className: s()(c._s, n), children: t }),
        });
    return (
        a.Fr ||
            (A = (0, i.jsxs)(i.Fragment, {
                children: [
                    l,
                    (0, i.jsx)(r.T7Y, { className: c.XG, orientation: "horizontal", ref: u, onScroll: d, children: A }),
                ],
            })),
        (0, i.jsx)("div", { className: c.Rc, ref: h, children: A })
    );
}
