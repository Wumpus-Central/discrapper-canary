n.d(t, { Z: () => d });
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(95985),
    c = n(39260);
let d = r.forwardRef(function (e, t) {
    var n;
    let { className: a, expansionSpring: d, isExpanded: u, isExpansionAnimationComplete: p, quest: m, taskDetails: x } = e,
        h = r.useRef(null),
        g = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
    return (0, s.jsx)(i.animated.div, {
        ref: t,
        'aria-hidden': u && p,
        className: o()(a, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: g
        }),
        style: {
            opacity: d.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: (0, s.jsx)('div', {
            className: c.contentCollapsedWrapper,
            children: g
                ? (0, s.jsx)(l.Z, {
                      contentLocation: 'collapsed',
                      quest: m,
                      progressBarRef: h,
                      isExpanded: !1,
                      taskDetails: x
                  })
                : null
        })
    });
});
