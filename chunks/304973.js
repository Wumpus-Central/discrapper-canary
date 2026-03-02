t.d(l, { A: () => d });
var r = t(627968),
    o = t(397927),
    n = t(506456),
    a = t(653793),
    i = t(494213);
let d = (e) => {
    let { backgroundImage: l, href: t, ctaText: d } = e,
        s = (0, n.A)(l.src);
    return (0, r.jsx)(a.A, {
        children: (0, r.jsx)("div", {
            className: i.j,
            style: { backgroundImage: `url(${s})` },
            children: (0, r.jsx)(o.Text, { variant: "text-lg/bold", color: "always-white", children: d }),
        }),
    });
};
