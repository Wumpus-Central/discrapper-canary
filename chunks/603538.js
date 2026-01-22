n.d(t, {
    A: () => u,
}),
    n(228524);
var r = n(627968),
    i = n(158954),
    a = n(206418),
    s = n(224016),
    o = n(149757),
    l = n(985018),
    c = n(916e3);
let u = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        u = (0, o.I)(n.id);
    return (0, r.jsxs)(a.A, {
        assetComponent: (0, r.jsx)("img", {
            src: u,
            alt: "",
        }),
        tooltipWordmarkComponent: (0, r.jsx)(s.A, {
            width: 56,
            className: c.R,
        }),
        children: [
            (0, r.jsx)(i.DZT, {
                variant: "heading-xl/extrabold",
                children: l.intl.string(n.nameUnformatted),
            }),
            (0, r.jsx)(i.EYj, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: c.K,
                children: t.description,
            }),
        ],
    });
};
