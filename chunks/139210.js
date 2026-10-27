n.d(t, { A: () => p, h: () => m });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    s = n(399513),
    i = n(398025),
    u = n(568329),
    c = n(241762);
n(272111);
var d = n(886030);
function p(e) {
    let { children: t, className: n } = e,
        { expansionSpring: a } = r.useContext(u.PW),
        { isExpanded: i, isExpansionAnimationComplete: p } = (0, c.H)();
    return (0, l.jsx)(s.animated.div, {
        className: o()(d.iE, n, { [d.tT]: i && p }),
        style: { transform: (0, s.to)([a.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
        children: t,
    });
}
function m(e) {
    let { children: t, className: n } = e,
        { expansionSpring: a } = r.useContext(u.PW);
    return (0, l.jsx)(s.animated.div, {
        className: n,
        style: { opacity: (0, i.a)(a.to({ range: [0, 1], output: [0, 1] })) },
        children: t,
    });
}
