r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(819758),
    l = r(308513);
function u(e) {
    let { className: n, children: r, forceUseColor: a = !1, hideStars: u } = e;
    return (0, i.jsxs)('span', {
        className: o()(l.container, n, { [l.containerColored]: a }),
        children: [
            r,
            u
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(s.Z, { foreground: l.sparkleStarTopRight }), (0, i.jsx)(s.Z, { foreground: l.sparkleStarRight }), (0, i.jsx)(s.Z, { foreground: l.sparkleStarBottomLeft })]
                  })
        ]
    });
}
