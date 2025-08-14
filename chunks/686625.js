n.d(t, { Z: () => u }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(785717),
    c = n(689315);
function u(e) {
    let { section: t, header: n, items: l, listClassName: u, onExpand: d } = e,
        { trackUserProfileAction: h } = (0, o.KZ)(),
        p = i.useId(),
        [f, g] = i.useState(!1),
        m = f ? s.CJ0 : s.Fbu;
    return (0, r.jsxs)("section", {
        className: c.section,
        children: [
            (0, r.jsxs)(s.P3F, {
                className: a()(c.header, c.clickable),
                "aria-controls": p,
                "aria-expanded": f,
                onClick: () => {
                    g(!f),
                        f ||
                            (h({
                                action: "PRESS_SECTION",
                                section: t,
                            }),
                            null == d || d());
                },
                children: [
                    (0, r.jsxs)(s.X6q, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " \u2014 ", l.length],
                    }),
                    (0, r.jsx)(m, { size: "md" }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("ul", {
                    id: p,
                    hidden: !f,
                    className: a()(c.list, u),
                    children: l,
                }),
        ],
    });
}
