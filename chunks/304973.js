t.d(l, { A: () => s });
var r = t(627968),
    o = t(397927),
    n = t(53566),
    a = t(506456),
    i = t(653793),
    d = t(494213);
let s = (e) => {
    let { backgroundImage: l, href: t, ctaText: s } = e,
        c = (0, a.A)(l.src),
        u = (0, n.S)(s);
    return (0, r.jsx)(i.A, {
        children: (0, r.jsx)("div", {
            className: d.j,
            style: { backgroundImage: `url(${c})` },
            children: (0, r.jsx)(o.Text, { variant: "text-lg/bold", color: "always-white", children: u }),
        }),
    });
};
