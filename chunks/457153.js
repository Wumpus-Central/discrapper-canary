n.d(t, { Z: () => u });
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
    l = n(113434),
    c = n(95985),
    d = n(667904);
let u = o.forwardRef(function (e, t) {
    var n;
    let { className: s, expansionSpring: u, isExpanded: p, isExpansionAnimationComplete: m, quest: f, taskDetails: g } = e,
        x = (0, l.Jf)(f),
        h = o.useRef(null),
        b = (null == (n = f.userStatus) ? void 0 : n.enrolledAt) != null,
        j = null != x ? x.percentComplete : g.percentComplete;
    return (0, r.jsx)(i.animated.div, {
        ref: t,
        'aria-hidden': p && m,
        className: a()(s, d.contentCollapsed, {
            [d.contentCollapsedExpanded]: p,
            [d.contentCollapsedAccepted]: b
        }),
        style: {
            opacity: u.to({
                range: [0, 1],
                output: [1, 0]
            })
        },
        children: (0, r.jsx)('div', {
            className: d.contentCollapsedWrapper,
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
