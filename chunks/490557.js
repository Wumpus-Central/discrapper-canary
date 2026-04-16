n.d(t, { b: () => u, l: () => h });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(512750),
    r = n(990208),
    o = n(568065),
    d = n(945249),
    c = n(107836);
function u(e) {
    let { className: t } = e;
    return (0, i.jsx)("img", { className: t, alt: "", src: c });
}
function h(e) {
    let { className: t, powerup: n, isHovering: l, forceStaticImage: c } = e,
        h = (0, r.A)(n, l, c);
    switch (n.type) {
        case o.o9.LEVEL:
            return (0, i.jsx)(u, {});
        case o.o9.PERK:
            return (0, i.jsx)("img", { alt: "", src: h, className: s()(d.T, { [d.W]: n.skuId === a.aN }, t) });
    }
}
