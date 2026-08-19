a.d(t, { b: () => d, l: () => h });
var c = a(477900),
    e = a(503698),
    r = a.n(e),
    i = a(512750),
    n = a(990208),
    u = a(568065),
    p = a(657334),
    l = a(107836);
function d(s) {
    let { className: t } = s;
    return (0, c.jsx)("img", { className: t, alt: "", src: l });
}
function h(s) {
    let { className: t, powerup: a, isHovering: e, forceStaticImage: l } = s,
        h = (0, n.A)(a, e, l);
    switch (a.type) {
        case u.o9.LEVEL:
            return (0, c.jsx)(d, {});
        case u.o9.PERK:
            return (0, c.jsx)("img", { alt: "", src: h, className: r()(p.T, { [p.W]: a.skuId === i.aN }, t) });
    }
}
