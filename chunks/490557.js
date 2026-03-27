"use strict";
n.d(t, { b: () => u, l: () => h });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(512750),
    a = n(990208),
    o = n(568065),
    c = n(853235),
    d = n(107836);
function u(e) {
    let { className: t } = e;
    return (0, i.jsx)("img", { className: t, alt: "", src: d });
}
function h(e) {
    let { className: t, powerup: n, isHovering: s, forceStaticImage: d } = e,
        h = (0, a.A)(n, s, d);
    switch (n.type) {
        case o.o9.LEVEL:
            return (0, i.jsx)(u, {});
        case o.o9.PERK:
            return (0, i.jsx)("img", { alt: "", src: h, className: l()(c.T, { [c.W]: n.skuId === r.aN }, t) });
    }
}
