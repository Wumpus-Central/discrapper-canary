t.d(l, { A: () => s });
var r = t(627968),
    o = t(397927),
    n = t(976860),
    a = t(53566),
    i = t(506456),
    d = t(653793),
    c = t(494213);
let s = (e) => {
    let { backgroundImage: l, href: t, ctaText: s } = e,
        u = (0, i.A)(l.src),
        h = (0, a.S)(s);
    return (0, r.jsx)(d.A, {
        children: (0, r.jsx)(o.DUT, {
            className: c.j,
            style: { backgroundImage: `url(${u})` },
            onClick: () => {
                (0, n.pX)(t);
            },
            children: (0, r.jsx)(o.Text, { variant: "text-lg/bold", color: "always-white", children: h }),
        }),
    });
};
