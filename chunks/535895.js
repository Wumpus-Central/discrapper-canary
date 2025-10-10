n.d(t, { Z: () => g });
var l = n(951288),
    a = n(763600),
    i = n(793030),
    r = n(410030),
    s = n(183369),
    o = n(231338),
    c = n(401561),
    u = n(388032),
    d = n(680247),
    m = n(907623),
    v = n(895263);
function f() {
    let e = (0, r.ZP)();
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
    let { gameProvider: e } = (0, s.aj)();
    return e === a.Z.SHOCKBYTE ? (0, l.jsx)(f, {}) : null;
}
