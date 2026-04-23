l.d(t, { A: () => v });
var s = l(627968),
    a = l(281445),
    n = l(834730),
    i = l(736653),
    r = l(509790),
    d = l(818348),
    c = l(576709),
    o = l(985018),
    u = l(670439);
function m() {
    let e = (0, i.Ay)();
    return (0, s.jsx)(n.E, {
        variant: "text-sm/medium",
        className: u.Q,
        children: o.intl.format(c.default.fcJiY8, {
            provider: (0, s.jsx)("img", {
                className: u.S,
                src: e !== d.NJ.LIGHT ? "/assets/2980fac538c392b2.svg" : "/assets/42be501fd1509fb8.svg",
                alt: "Shockbyte",
            }),
        }),
    });
}
function v() {
    let { gameProvider: e } = (0, r.bv)();
    return e === a.X.SHOCKBYTE ? (0, s.jsx)(m, {}) : null;
}
