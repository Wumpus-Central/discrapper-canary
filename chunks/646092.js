"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(397927),
    a = n(976860);
let s = (e) => {
    let { href: t, ctaText: n, variant: s = "secondary" } = e;
    return (0, r.jsx)(i.Button, {
        variant: s,
        text: n,
        onClick: () => {
            (0, a.pX)(t);
        },
    });
};
