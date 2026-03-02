t.d(l, { A: () => i });
var r = t(627968),
    o = t(397927),
    n = t(976860),
    a = t(53566);
let i = (e) => {
    let { href: l, ctaText: t, variant: i = "secondary" } = e,
        d = (0, a.S)(t);
    return (0, r.jsx)(o.Button, {
        variant: i,
        text: d,
        onClick: () => {
            (0, n.pX)(l);
        },
    });
};
