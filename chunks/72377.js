a.d(t, { l: () => o, b: () => d });
var e = a(477900),
    c = a(503698),
    r = a.n(c),
    i = a(512750),
    n = a(990208),
    u = a(568065),
    l = a(448527);
function d(s) {
    let { className: t } = s;
    return (0, e.jsx)("img", { className: t, alt: "", src: "/assets/6cc7df94a1e18cbc.svg" });
}
function o(s) {
    let { className: t, powerup: a, isHovering: c, forceStaticImage: o } = s,
        m = (0, n.A)(a, c, o);
    switch (a.type) {
        case u.o9.LEVEL:
            return (0, e.jsx)(d, {});
        case u.o9.PERK:
            return (0, e.jsx)("img", { alt: "", src: m, className: r()(l.T, { [l.W]: a.skuId === i.aN }, t) });
    }
}
