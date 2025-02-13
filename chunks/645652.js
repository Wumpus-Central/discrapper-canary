n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(819758),
    o = n(493597);
function l(e) {
    let { className: t, children: n, forceUseColor: r = !1, hideStars: l } = e;
    return (0, i.jsxs)('span', {
        className: a()(o.container, t, { [o.containerColored]: r }),
        children: [
            n,
            l
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(s.Z, { foreground: o.sparkleStarTopRight }), (0, i.jsx)(s.Z, { foreground: o.sparkleStarRight }), (0, i.jsx)(s.Z, { foreground: o.sparkleStarBottomLeft })]
                  })
        ]
    });
}
