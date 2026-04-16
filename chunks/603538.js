"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(158954),
    s = n(206418),
    a = n(224016),
    o = n(149757),
    l = n(985018),
    u = n(74824);
let c = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        c = (0, o.I)(n.id).standard;
    return (0, r.jsxs)(s.A, {
        assetComponent: (0, r.jsx)("img", { src: c, alt: "" }),
        tooltipWordmarkComponent: (0, r.jsx)(a.A, { width: 56, className: u.R }),
        children: [
            (0, r.jsx)(i.DZT, { variant: "heading-xl/extrabold", children: l.intl.string(n.nameUnformatted) }),
            (0, r.jsx)(i.EYj, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: u.K,
                children: t.description,
            }),
        ],
    });
};
