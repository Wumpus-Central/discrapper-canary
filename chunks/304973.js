"use strict";
r.d(t, { A: () => o });
var l = r(627968),
    s = r(939249),
    n = r(834730),
    a = r(976860),
    i = r(53566),
    c = r(427941),
    u = r(653793),
    d = r(46008);
let o = (e) => {
    let { backgroundImage: t, href: r, ctaText: o } = e,
        h = (0, i.S)(o);
    return (0, l.jsx)(u.A, {
        children: (0, l.jsx)(s.D, {
            className: d.v,
            onClick: () => (0, a.pX)(r),
            children: (0, l.jsx)(c.A, {
                backgroundImage: t,
                backgroundPosition: "left",
                children: (0, l.jsx)("div", {
                    className: d.j,
                    children: (0, l.jsx)(n.E, { variant: "text-lg/bold", color: "always-white", children: h }),
                }),
            }),
        }),
    });
};
