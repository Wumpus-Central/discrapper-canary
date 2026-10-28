n.d(t, { A: () => m, h: () => p });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(399513),
    o = n(398025),
    u = n(568329),
    c = n(241762);
n(272111);
var d = n(886030);
function m(e) {
    let { children: t, className: n } = e,
        { expansionSpring: s } = r.useContext(u.PW),
        { isExpanded: o, isExpansionAnimationComplete: m } = (0, c.H)();
    return (0, l.jsx)(i.animated.div, {
        className: a()(d.iE, n, { [d.tT]: o && m }),
        style: { transform: (0, i.to)([s.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
        children: t,
    });
}
function p(e) {
    let { children: t, className: n } = e,
        { expansionSpring: s } = r.useContext(u.PW);
    return (0, l.jsx)(i.animated.div, {
        className: n,
        style: { opacity: (0, o.a)(s.to({ range: [0, 1], output: [0, 1] })) },
        children: t,
    });
}
