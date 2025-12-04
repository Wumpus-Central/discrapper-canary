n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(324060),
    c = n(285764);
function u(e) {
    let { children: t, useTopRightClipPath: n = !1, innerClassName: a } = e,
        u = i.useContext(l.Q),
        d = (0, s.dQu)(u.primaryColor).hex();
    return (0, r.jsxs)("div", {
        className: o()(n ? c.containerClipped : c.container),
        children: [
            (0, r.jsx)("div", {
                className: c.outerBorder,
                style: { borderColor: d },
            }),
            (0, r.jsx)("div", {
                className: c.outerBorderAngleTopRight,
                style: { backgroundColor: d },
            }),
            (0, r.jsx)("div", {
                className: c.outerBorderAngleBottomLeft,
                style: { backgroundColor: d },
            }),
            (0, r.jsx)("div", {
                className: c.outerBorderAngleBottomRight,
                style: { backgroundColor: d },
            }),
            (0, r.jsx)("div", {
                className: o()(c.innerBorder, a),
                style: { borderColor: d },
                children: t,
            }),
        ],
    });
}
