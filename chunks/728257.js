"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(106778),
    a = n(21161),
    o = n(851110),
    l = n(281571),
    u = n(776494),
    c = n(952213),
    d = n(204272);
let _ = [l.A, u.A, c.A, d.A].map((e) => ({ src: e, colorize: !1 })),
    f = [],
    p = () => () => {},
    h = 12,
    m = { ...o.Mw, size: { type: "static-random", minValue: 4, maxValue: h } };
function E(e) {
    let { children: t } = e,
        [n, o] = (0, i.useState)(null),
        { confettiCanvas: l } = (0, i.useContext)(a.x);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.K_, { ref: o, sprites: _, colors: f, spriteWidth: h, spriteHeight: h }),
            (0, r.jsx)(a.k, {
                confettiCanvas: l,
                spriteCanvas: n,
                baseConfig: m,
                addClickListener: p,
                removeClickListener: p,
                children: t,
            }),
        ],
    });
}
