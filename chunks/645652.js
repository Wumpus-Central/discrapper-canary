n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(819758),
    s = n(759735);
function l(e) {
    let { className: t, children: n, forceUseColor: i = !1, hideStars: l } = e;
    return (0, r.jsxs)("span", {
        className: a()(s.container, t, { [s.containerColored]: i }),
        children: [
            n,
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.Z, { foreground: s.sparkleStarTopRight }),
                          (0, r.jsx)(o.Z, { foreground: s.sparkleStarRight }),
                          (0, r.jsx)(o.Z, { foreground: s.sparkleStarBottomLeft }),
                      ],
                  }),
        ],
    });
}
