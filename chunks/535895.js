n.d(t, { Z: () => g });
var l = n(951288),
    i = n(793030),
    a = n(410030),
    r = n(183369),
    s = n(473682),
    o = n(231338),
    c = n(440589),
    u = n(388032),
    d = n(871124),
    m = n(907623),
    v = n(895263);
function f() {
    let e = (0, a.ZP)();
    return (0, l.jsx)(i.xvT, {
        variant: "text-sm/medium",
        className: d.text,
        children: u.intl.format(c.default.JWpue3, {
            provider: (0, l.jsx)("img", {
                className: d.image,
                src: e !== o.BR.LIGHT ? v : m,
                alt: "Shockbyte",
            }),
        }),
    });
}
function g() {
    let { gameProvider: e } = (0, r.aj)();
    return e === s.mg.SHOCKBYTE ? (0, l.jsx)(f, {}) : null;
}
