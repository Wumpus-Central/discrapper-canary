n.d(t, { Z: () => f });
var l = n(951288),
    a = n(793030),
    i = n(410030),
    r = n(183369),
    s = n(473682),
    o = n(231338),
    c = n(401561),
    u = n(388032),
    d = n(680247),
    m = n(907623),
    v = n(895263);
function g() {
    let e = (0, i.ZP)();
    return (0, l.jsx)(a.xvT, {
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
function f() {
    let { gameProvider: e } = (0, r.aj)();
    return e === s.mg.SHOCKBYTE ? (0, l.jsx)(g, {}) : null;
}
