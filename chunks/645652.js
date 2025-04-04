n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(819758),
    s = n(863807);
function l(e) {
    let { className: t, children: n, forceUseColor: i = !1, hideStars: l } = e;
    return (0, r.jsxs)('span', {
        className: o()(s.container, t, { [s.containerColored]: i }),
        children: [
            n,
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(a.Z, { foreground: s.sparkleStarTopRight }), (0, r.jsx)(a.Z, { foreground: s.sparkleStarRight }), (0, r.jsx)(a.Z, { foreground: s.sparkleStarBottomLeft })]
                  })
        ]
    });
}
