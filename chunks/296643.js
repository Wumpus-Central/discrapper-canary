t.d(n, { Z: () => f });
var l = t(951288),
    a = t(763600),
    i = t(793030),
    r = t(410030),
    s = t(343312),
    o = t(231338),
    u = t(948208),
    c = t(388032),
    d = t(731926),
    m = t(737413),
    v = t(688913);
function g() {
    let e = (0, r.ZP)();
    return (0, l.jsx)(i.xvT, {
        variant: "text-sm/medium",
        className: d.text,
        children: c.intl.format(u.default.fcJiY2, {
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
