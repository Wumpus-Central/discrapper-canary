n.d(t, { Z: () => f });
var l = n(54381),
    i = n(763600),
    a = n(793030),
    r = n(410030),
    s = n(343312),
    u = n(231338),
    o = n(719662),
    c = n(388032),
    d = n(241497),
    m = n(737413),
    v = n(688913);
function g() {
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
function f() {
    let { gameProvider: e } = (0, s.JL)();
    return e === i.Z.SHOCKBYTE ? (0, l.jsx)(g, {}) : null;
}
