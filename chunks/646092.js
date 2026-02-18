t.d(r, { A: () => o });
var d = t(627968),
    l = t(397927),
    c = t(976860);
let o = (e) => {
    let { href: r, ctaText: t, variant: o = "secondary" } = e;
    return (0, d.jsx)(l.Button, {
        variant: o,
        text: t,
        onClick: () => {
            (0, c.pX)(r);
        },
    });
};
