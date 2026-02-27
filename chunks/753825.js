"use strict";
a.d(t, { A: () => i });
var l = a(627968),
    r = a(397927),
    n = a(506456),
    s = a(709710);
let i = (e) => {
    let { backgroundImage: t, href: a, ctaText: i } = e,
        o = (0, n.A)(t);
    return (0, l.jsx)("div", {
        className: s.q,
        style: { backgroundImage: `url(${o})` },
        children: (0, l.jsx)(r.Text, { variant: "text-lg/bold", color: "always-white", children: i }),
    });
};
