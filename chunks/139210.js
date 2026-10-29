n.d(t, { A: () => m, h: () => p });
var l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    i = n(941143),
    o = n(398025),
    u = n(568329),
    c = n(241762);
n(272111);
var d = n(886030);
function m(e) {
    let { children: t, className: n } = e,
        { expansionSpring: r } = s.useContext(u.PW),
        { isExpanded: o, isExpansionAnimationComplete: m } = (0, c.H)();
    return (0, l.jsx)(i.animated.div, {
        className: a()(d.iE, n, { [d.tT]: o && m }),
        style: { transform: (0, i.to)([r.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
        children: t,
    });
}
function p(e) {
    let { children: t, className: n } = e,
        { expansionSpring: r } = s.useContext(u.PW);
    return (0, l.jsx)(i.animated.div, {
        className: n,
        style: { opacity: (0, o.a)(r.to({ range: [0, 1], output: [0, 1] })) },
        children: t,
    });
}
