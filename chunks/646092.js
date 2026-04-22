"use strict";
a.d(t, { A: () => s });
var r = a(627968),
    l = a(821609),
    n = a(976860),
    i = a(53566);
let s = (e) => {
    let { href: t, ctaText: a, variant: s = "secondary" } = e,
        o = (0, i.S)(a);
    return (0, r.jsx)(l.$, {
        variant: s,
        text: o,
        onClick: () => {
            (0, n.pX)(t);
        },
    });
};
