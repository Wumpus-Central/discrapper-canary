"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(397927),
    a = n(653793),
    s = n(494213);
let o = (e) => {
    let { backgroundImage: t, href: n, ctaText: o } = e;
    return (0, r.jsx)(a.A, {
        children: (0, r.jsx)("div", {
            className: s.j,
            style: { backgroundImage: `url(${t})` },
            children: (0, r.jsx)(i.Text, { variant: "text-lg/bold", color: "always-white", children: o }),
        }),
    });
};
