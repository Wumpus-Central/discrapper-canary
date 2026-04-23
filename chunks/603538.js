"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(534514),
    s = n(834730),
    a = n(206418),
    o = n(224016),
    l = n(149757),
    u = n(985018),
    c = n(74824);
let d = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        d = (0, l.I)(n.id).standard;
    return (0, r.jsxs)(a.A, {
        assetComponent: (0, r.jsx)("img", { src: d, alt: "" }),
        tooltipWordmarkComponent: (0, r.jsx)(o.A, { width: 56, className: c.R }),
        children: [
            (0, r.jsx)(i.D, { variant: "heading-xl/extrabold", children: u.intl.string(n.nameUnformatted) }),
            (0, r.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: c.K,
                children: t.description,
            }),
        ],
    });
};
