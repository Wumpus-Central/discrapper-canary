n.d(t, { Z: () => f });
var l = n(951288),
    a = n(763600),
    i = n(793030),
    r = n(410030),
    s = n(343312),
    o = n(231338),
    c = n(948208),
    u = n(388032),
    d = n(731926),
    m = n(737413),
    v = n(688913);
function g() {
    let e = (0, r.ZP)();
    return (0, l.jsx)(i.xvT, {
        variant: "text-sm/medium",
        className: d.text,
        children: u.intl.format(c.default.fcJiY2, {
            provider: (0, l.jsx)("img", {
                className: d.image,
                src: e !== o.BR.LIGHT ? v : m,
                alt: "Shockbyte",
            }),
        }),
    });
}
function f() {
    let { gameProvider: e } = (0, s.JL)();
    return e === a.Z.SHOCKBYTE ? (0, l.jsx)(g, {}) : null;
}
