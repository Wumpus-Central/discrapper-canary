"use strict";
a.d(t, { A: () => o });
var l = a(627968),
    r = a(397927),
    n = a(53566),
    s = a(506456),
    i = a(709710);
let o = (e) => {
    let { backgroundImage: t, href: a, ctaText: o } = e,
        d = (0, s.A)(t.src),
        c = (0, n.S)(o ?? "");
    return (0, l.jsx)("div", {
        className: i.q,
        style: { backgroundImage: `url(${d})` },
        children: (0, l.jsx)(r.Text, { variant: "text-lg/bold", color: "always-white", children: c }),
    });
};
