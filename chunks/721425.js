l.d(t, { X: () => m, A: () => p });
var n = l(477900),
    a = l(281445),
    s = l(834730),
    i = l(736653),
    u = l(608266),
    d = l(818348),
    r = l(632847),
    c = l(375708),
    o = l(946456);
function m() {
    let e = (0, i.Ay)();
    return (0, n.jsx)(s.E, {
        variant: "text-sm/medium",
        className: o.Q,
        children: c.intl.format(r.default.fcJiY8, {
            provider: (0, n.jsx)(
                "img",
                {
                    className: o.S,
                    src: e !== d.NJ.LIGHT ? "/assets/2980fac538c392b2.svg" : "/assets/42be501fd1509fb8.svg",
                    alt: "Shockbyte",
                },
                "shockbyte-logo",
            ),
        }),
    });
}
function p() {
    let { gameProvider: e } = (0, u.bv)();
    return e === a.X.SHOCKBYTE ? (0, n.jsx)(m, {}) : null;
}
