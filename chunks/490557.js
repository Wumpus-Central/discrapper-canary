a.d(s, { b: () => o, l: () => m });
var e = a(477900),
    c = a(503698),
    r = a.n(c),
    i = a(512750),
    n = a(990208),
    u = a(568065),
    l = a(448527),
    d = a(107836);
function o(t) {
    let { className: s } = t;
    return (0, e.jsx)("img", { className: s, alt: "", src: d });
}
function m(t) {
    let { className: s, powerup: a, isHovering: c, forceStaticImage: d } = t,
        m = (0, n.A)(a, c, d);
    switch (a.type) {
        case u.o9.LEVEL:
            return (0, e.jsx)(o, {});
        case u.o9.PERK:
            return (0, e.jsx)("img", { alt: "", src: m, className: r()(l.T, { [l.W]: a.skuId === i.aN }, s) });
    }
}
