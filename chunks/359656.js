"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(183555),
    c = n(752458);
function d(e) {
    let { section: t, header: n, items: l, listClassName: d, onExpand: u } = e,
        { trackUserProfileAction: h } = (0, o.NJ)(),
        A = s.useId(),
        [p, g] = s.useState(!1),
        m = p ? a.abt : a._BQ;
    return (0, i.jsxs)("section", {
        className: c.uW,
        children: [
            (0, i.jsxs)(a.DUT, {
                className: r()(c.wx, c.vk),
                "aria-controls": A,
                "aria-expanded": p,
                onClick: () => {
                    g(!p), p || (h({ action: "PRESS_SECTION", section: t }), u?.());
                },
                children: [
                    (0, i.jsxs)(a.Heading, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " — ", l.length],
                    }),
                    (0, i.jsx)(m, { size: "md" }),
                ],
            }),
            l.length > 0 && (0, i.jsx)("ul", { id: A, hidden: !p, className: r()(c.p_, d), children: l }),
        ],
    });
}
