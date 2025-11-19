n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(785717),
    c = n(522670);
function d(e) {
    let { section: t, header: n, items: l, listClassName: d, onExpand: u } = e,
        { trackUserProfileAction: p } = (0, o.KZ)(),
        h = i.useId(),
        [f, g] = i.useState(!1),
        m = f ? s.CJ0 : s.Fbu;
    return (0, r.jsxs)("section", {
        className: c.section,
        children: [
            (0, r.jsxs)(s.P3F, {
                className: a()(c.header, c.clickable),
                "aria-controls": h,
                "aria-expanded": f,
                onClick: () => {
                    g(!f),
                        f ||
                            (p({
                                action: "PRESS_SECTION",
                                section: t,
                            }),
                            null == u || u());
                },
                children: [
                    (0, r.jsxs)(s.Heading, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " \u2014 ", l.length],
                    }),
                    (0, r.jsx)(m, { size: "md" }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("ul", {
                    id: h,
                    hidden: !f,
                    className: a()(c.list, d),
                    children: l,
                }),
        ],
    });
}
