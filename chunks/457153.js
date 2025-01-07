var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(752877),
    l = n(95985),
    c = n(952529);
let d = r.forwardRef(function (e, t) {
    var n;
    let { className: s, expansionSpring: d, isExpanded: u, isExpansionAnimationComplete: p, quest: m, taskDetails: x } = e,
        f = r.useRef(null),
        g = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
    return (0, o.jsx)(i.animated.div, {
        ref: t,
        'aria-hidden': u && p,
        className: a()(s, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: g
        }),
        style: {
            opacity: d.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: (0, o.jsx)('div', {
            className: c.contentCollapsedWrapper,
            children: g
                ? (0, o.jsx)(l.Z, {
                      contentLocation: 'collapsed',
                      quest: m,
                      progressBarRef: f,
                      isExpanded: !1,
                      taskDetails: x
                  })
                : null
        })
    });
});
t.Z = d;
