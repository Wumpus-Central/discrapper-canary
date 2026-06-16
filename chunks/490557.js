s.d(t, { b: () => d, l: () => m });
var a = s(627968),
    r = s(503698),
    c = s.n(r),
    n = s(512750),
    u = s(990208),
    i = s(568065),
    l = s(945249),
    o = s(107836);
function d(e) {
    let { className: t } = e;
    return (0, a.jsx)("img", { className: t, alt: "", src: o });
}
function m(e) {
    let { className: t, powerup: s, isHovering: r, forceStaticImage: o } = e,
        m = (0, u.A)(s, r, o);
    switch (s.type) {
        case i.o9.LEVEL:
            return (0, a.jsx)(d, {});
        case i.o9.PERK:
            return (0, a.jsx)("img", { alt: "", src: m, className: c()(l.T, { [l.W]: s.skuId === n.aN }, t) });
    }
}
