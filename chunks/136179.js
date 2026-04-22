n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(607399),
    r = n(599319),
    o = n(772577),
    d = n(760967);
function c(e) {
    let { children: t, className: n } = e,
        { horizontalScrollNotice: l, handleScroll: c, handleSetScrollerRef: u, handleSetContainerRef: h } = (0, o.A)(),
        A = (0, i.jsx)("div", {
            className: d.vi,
            children: (0, i.jsx)("div", { className: s()(d._s, n), children: t }),
        });
    return (
        a.Fr ||
            (A = (0, i.jsxs)(i.Fragment, {
                children: [
                    l,
                    (0, i.jsx)(r.Ch, { className: d.XG, orientation: "horizontal", ref: u, onScroll: c, children: A }),
                ],
            })),
        (0, i.jsx)("div", { className: d.Rc, ref: h, children: A })
    );
}
