n.d(t, { A: () => g });
var a = n(627968),
    l = n(281445),
    s = n(158954),
    i = n(736653),
    r = n(27023),
    d = n(818348),
    o = n(738072),
    c = n(985018),
    u = n(73658),
    m = n(391637),
    x = n(588979);
function v() {
    let e = (0, i.Ay)();
    return (0, a.jsx)(s.EYj, {
        variant: "text-sm/medium",
        className: u.Q,
        children: c.intl.format(o.default.fcJiY8, {
            provider: (0, a.jsx)("img", { className: u.S, src: e !== d.NJ.LIGHT ? x : m, alt: "Shockbyte" }),
        }),
    });
}
function g() {
    let { gameProvider: e } = (0, r.bv)();
    return e === l.X.SHOCKBYTE ? (0, a.jsx)(v, {}) : null;
}
