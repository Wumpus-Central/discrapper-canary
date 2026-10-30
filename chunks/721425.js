l.d(t, { X: () => m, A: () => p });
var n = l(477900),
    a = l(281445),
    s = l(834730),
    u = l(736653),
    i = l(608266),
    d = l(818348),
    o = l(135570),
    r = l(105292),
    c = l(946456);
function m() {
    let e = (0, u.Ay)();
    return (0, n.jsx)(s.E, {
        variant: "text-sm/medium",
        className: c.Q,
        children: r.intl.format(o.default.fcJiY8, {
            provider: (0, n.jsx)(
                "img",
                {
                    className: c.S,
                    src: e !== d.NJ.LIGHT ? "/assets/2980fac538c392b2.svg" : "/assets/42be501fd1509fb8.svg",
                    alt: "Shockbyte",
                },
                "shockbyte-logo",
            ),
        }),
    });
}
function p() {
    let { gameProvider: e } = (0, i.bv)();
    return e === a.X.SHOCKBYTE ? (0, n.jsx)(m, {}) : null;
}
