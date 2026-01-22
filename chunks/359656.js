n.d(t, { A: () => u }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(183555),
    c = n(752458);
function u(e) {
    let { section: t, header: n, items: i, listClassName: u, onExpand: d } = e,
        { trackUserProfileAction: f } = (0, o.NJ)(),
        p = l.useId(),
        [h, b] = l.useState(!1),
        g = h ? s.abt : s._BQ;
    return (0, r.jsxs)("section", {
        className: c.uW,
        children: [
            (0, r.jsxs)(s.DUT, {
                className: a()(c.wx, c.vk),
                "aria-controls": p,
                "aria-expanded": h,
                onClick: () => {
                    b(!h),
                        h ||
                            (f({
                                action: "PRESS_SECTION",
                                section: t,
                            }),
                            null == d || d());
                },
                children: [
                    (0, r.jsxs)(s.Heading, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " \u2014 ", i.length],
                    }),
                    (0, r.jsx)(g, { size: "md" }),
                ],
            }),
            i.length > 0 &&
                (0, r.jsx)("ul", {
                    id: p,
                    hidden: !h,
                    className: a()(c.p_, u),
                    children: i,
                }),
        ],
    });
}
