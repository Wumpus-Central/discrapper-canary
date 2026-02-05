n.d(t, { A: () => _ });
var a = n(627968),
    i = n(281445),
    l = n(158954),
    s = n(736653),
    r = n(27023),
    d = n(818348),
    u = n(294726),
    c = n(985018),
    o = n(288948),
    m = n(391637),
    g = n(588979);
function f() {
    let e = (0, s.Ay)();
    return (0, a.jsx)(l.EYj, {
        variant: "text-sm/medium",
        className: o.Q,
        children: c.intl.format(u.default.fcJiY8, {
            provider: (0, a.jsx)("img", { className: o.S, src: e !== d.NJ.LIGHT ? g : m, alt: "Shockbyte" }),
        }),
    });
}
function _() {
    let { gameProvider: e } = (0, r.bv)();
    return e === i.X.SHOCKBYTE ? (0, a.jsx)(f, {}) : null;
}
