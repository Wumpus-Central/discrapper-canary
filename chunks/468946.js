n.d(t, { A: () => g });
var l = n(627968),
    i = n(281445),
    a = n(158954),
    r = n(736653),
    s = n(27023),
    u = n(818348),
    o = n(294726),
    d = n(985018),
    c = n(288948),
    m = n(391637),
    v = n(588979);
function f() {
    let e = (0, r.Ay)();
    return (0, l.jsx)(a.EYj, {
        variant: "text-sm/medium",
        className: c.Q,
        children: d.intl.format(o.default.fcJiY8, {
            provider: (0, l.jsx)("img", {
                className: c.S,
                src: e !== u.NJ.LIGHT ? v : m,
                alt: "Shockbyte",
            }),
        }),
    });
}
function g() {
    let { gameProvider: e } = (0, s.bv)();
    return e === i.X.SHOCKBYTE ? (0, l.jsx)(f, {}) : null;
}
