"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(183555),
    c = n(75415);
function d(e) {
    let { section: t, header: n, items: l, listClassName: d, onExpand: u } = e,
        { trackUserProfileAction: h } = (0, o.NJ)(),
        A = s.useId(),
        [m, _] = s.useState(!1),
        p = m ? r.abt : r._BQ;
    return (0, i.jsxs)("section", {
        className: c.uW,
        children: [
            (0, i.jsxs)(r.DUT, {
                className: a()(c.wx, c.vk),
                "aria-controls": A,
                "aria-expanded": m,
                onClick: () => {
                    _(!m), m || (h({ action: "PRESS_SECTION", section: t }), u?.());
                },
                children: [
                    (0, i.jsxs)(r.Heading, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " — ", l.length],
                    }),
                    (0, i.jsx)(p, { size: "md" }),
                ],
            }),
            l.length > 0 && (0, i.jsx)("ul", { id: A, hidden: !m, className: a()(c.p_, d), children: l }),
        ],
    });
}
