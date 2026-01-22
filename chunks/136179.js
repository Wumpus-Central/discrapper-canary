n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(607399),
    s = n(397927),
    o = n(772577),
    c = n(216042);
function u(e) {
    let { guildId: t, children: n, className: l } = e,
        { horizontalScrollNotice: u, handleScroll: d, handleSetScrollerRef: f, handleSetContainerRef: p } = (0, o.A)(t),
        h = (0, r.jsx)("div", {
            className: c.vi,
            children: (0, r.jsx)("div", {
                className: i()(c._s, l),
                children: n,
            }),
        });
    return (
        a.Fr ||
            (h = (0, r.jsxs)(r.Fragment, {
                children: [
                    u,
                    (0, r.jsx)(s.T7Y, {
                        className: c.XG,
                        orientation: "horizontal",
                        ref: f,
                        onScroll: d,
                        children: h,
                    }),
                ],
            })),
        (0, r.jsx)("div", {
            className: c.Rc,
            ref: p,
            children: h,
        })
    );
}
