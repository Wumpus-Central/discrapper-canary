t.d(n, { Z: () => g });
var l = t(54381),
    i = t(763600),
    a = t(793030),
    r = t(410030),
    s = t(343312),
    u = t(231338),
    o = t(613275),
    c = t(388032),
    d = t(731926),
    m = t(737413),
    v = t(688913);
function f() {
    let e = (0, r.ZP)();
    return (0, l.jsx)(a.xvT, {
        variant: "text-sm/medium",
        className: d.text,
        children: c.intl.format(o.default.fcJiY8, {
            provider: (0, l.jsx)("img", {
                className: d.image,
                src: e !== u.BR.LIGHT ? v : m,
                alt: "Shockbyte",
            }),
        }),
    });
}
function g() {
    let { gameProvider: e } = (0, s.JL)();
    return e === i.Z.SHOCKBYTE ? (0, l.jsx)(f, {}) : null;
}
