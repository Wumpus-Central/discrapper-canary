n.d(t, { A: () => m, h: () => p });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(941143),
    o = n(398025),
    u = n(568329),
    c = n(241762);
n(272111);
var d = n(886030);
function m(e) {
    let { children: t, className: n } = e,
        { expansionSpring: a } = s.useContext(u.PW),
        { isExpanded: o, isExpansionAnimationComplete: m } = (0, c.H)();
    return (0, l.jsx)(i.animated.div, {
        className: r()(d.iE, n, { [d.tT]: o && m }),
        style: { transform: (0, i.to)([a.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
        children: t,
    });
}
function p(e) {
    let { children: t, className: n } = e,
        { expansionSpring: a } = s.useContext(u.PW);
    return (0, l.jsx)(i.animated.div, {
        className: n,
        style: { opacity: (0, o.a)(a.to({ range: [0, 1], output: [0, 1] })) },
        children: t,
    });
}
