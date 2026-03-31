n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(183555),
    c = n(75415);
function d(e) {
    let { section: t, header: n, items: s, listClassName: d, onExpand: u } = e,
        { trackUserProfileAction: h } = (0, o.NJ)(),
        A = l.useId(),
        [_, m] = l.useState(!1),
        g = _ ? r.abt : r._BQ;
    return (0, i.jsxs)("section", {
        className: c.uW,
        children: [
            (0, i.jsxs)(r.DUT, {
                className: a()(c.wx, c.vk),
                "aria-controls": A,
                "aria-expanded": _,
                onClick: () => {
                    m(!_), _ || (h({ action: "PRESS_SECTION", section: t }), u?.());
                },
                children: [
                    (0, i.jsxs)(r.Heading, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " — ", s.length],
                    }),
                    (0, i.jsx)(g, { size: "md" }),
                ],
            }),
            s.length > 0 && (0, i.jsx)("ul", { id: A, hidden: !_, className: a()(c.p_, d), children: s }),
        ],
    });
}
