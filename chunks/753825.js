"use strict";
a.d(t, { A: () => o });
var r = a(627968),
    l = a(834730),
    n = a(53566),
    i = a(427941),
    s = a(228880);
let o = (e) => {
    let { backgroundImage: t, href: a, ctaText: o } = e,
        d = (0, n.S)(o ?? "");
    return (0, r.jsx)("div", {
        className: s.q,
        children: (0, r.jsx)(i.A, {
            backgroundImage: t,
            backgroundPosition: "left",
            children: (0, r.jsx)("div", {
                className: s.R,
                children: (0, r.jsx)(l.E, { variant: "text-lg/bold", color: "always-white", children: d }),
            }),
        }),
    });
};
