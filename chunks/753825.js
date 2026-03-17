a.d(t, { A: () => d });
var l = a(627968),
    r = a(397927),
    n = a(53566),
    o = a(506456),
    s = a(709710);
let d = (e) => {
    let { backgroundImage: t, href: a, ctaText: d } = e,
        i = (0, o.A)(t.src),
        c = (0, n.S)(d ?? "");
    return (0, l.jsx)("div", {
        className: s.q,
        style: { backgroundImage: `url(${i})` },
        children: (0, l.jsx)(r.Text, { variant: "text-lg/bold", color: "always-white", children: c }),
    });
};
