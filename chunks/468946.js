l.d(t, { A: () => g });
var n = l(627968),
    a = l(281445),
    s = l(834730),
    i = l(736653),
    r = l(27023),
    d = l(818348),
    o = l(576709),
    c = l(985018),
    u = l(670439),
    m = l(391637),
    v = l(588979);
function x() {
    let e = (0, i.Ay)();
    return (0, n.jsx)(s.E, {
        variant: "text-sm/medium",
        className: u.Q,
        children: c.intl.format(o.default.fcJiY8, {
            provider: (0, n.jsx)("img", { className: u.S, src: e !== d.NJ.LIGHT ? v : m, alt: "Shockbyte" }),
        }),
    });
}
function g() {
    let { gameProvider: e } = (0, r.bv)();
    return e === a.X.SHOCKBYTE ? (0, n.jsx)(x, {}) : null;
}
