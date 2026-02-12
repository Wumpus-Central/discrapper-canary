n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(607399),
    r = n(397927),
    o = n(772577),
    d = n(216042);
function c(e) {
    let { guildId: t, children: n, className: l } = e,
        { horizontalScrollNotice: c, handleScroll: u, handleSetScrollerRef: h, handleSetContainerRef: A } = (0, o.A)(t),
        m = (0, i.jsx)("div", {
            className: d.vi,
            children: (0, i.jsx)("div", { className: s()(d._s, l), children: n }),
        });
    return (
        a.Fr ||
            (m = (0, i.jsxs)(i.Fragment, {
                children: [
                    c,
                    (0, i.jsx)(r.T7Y, { className: d.XG, orientation: "horizontal", ref: h, onScroll: u, children: m }),
                ],
            })),
        (0, i.jsx)("div", { className: d.Rc, ref: A, children: m })
    );
}
