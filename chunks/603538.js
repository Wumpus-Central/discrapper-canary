t.d(n, { A: () => c });
var l = t(627968),
    r = t(534514),
    i = t(834730),
    a = t(206418),
    s = t(224016),
    o = t(149757),
    d = t(985018),
    u = t(74824);
let c = (e) => {
    let { profileBadge: n, tenureBadge: t } = e,
        c = (0, o.I)(t.id).standard;
    return (0, l.jsxs)(a.A, {
        assetComponent: (0, l.jsx)("img", { src: c, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(s.A, { width: 56, className: u.R }),
        children: [
            (0, l.jsx)(r.D, { variant: "heading-xl/extrabold", children: d.intl.string(t.nameUnformatted) }),
            (0, l.jsx)(i.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: u.K,
                children: n.description,
            }),
        ],
    });
};
