n.d(t, { Z: () => d });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(626415),
    l = n(113434),
    c = n(95985),
    u = n(667904);
let d = s.forwardRef(function (e, t) {
    var n;
    let { className: o, expansionSpring: d, isExpanded: p, isExpansionAnimationComplete: m, quest: f, taskDetails: g } = e,
        x = (0, l.Jf)(f),
        h = s.useRef(null),
        b = (null == (n = f.userStatus) ? void 0 : n.enrolledAt) != null,
        j = null != x ? x.percentComplete : g.percentComplete;
    return (0, r.jsx)(i.animated.div, {
        ref: t,
        'aria-hidden': p && m,
        className: a()(o, u.contentCollapsed, {
            [u.contentCollapsedExpanded]: p,
            [u.contentCollapsedAccepted]: b
        }),
        style: {
            opacity: d.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: (0, r.jsx)('div', {
            className: u.contentCollapsedWrapper,
            children: b
                ? (0, r.jsx)(c.Z, {
                      contentLocation: 'collapsed',
                      quest: f,
                      progressBarRef: h,
                      isExpanded: !1,
                      percentComplete: j
                  })
                : null
        })
    });
});
