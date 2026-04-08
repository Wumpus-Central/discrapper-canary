n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(183555),
    d = n(266348);
function c(e) {
    let { section: t, header: n, items: s, listClassName: c, onExpand: u } = e,
        { trackUserProfileAction: h } = (0, o.NJ)(),
        A = l.useId(),
        [_, m] = l.useState(!1),
        p = _ ? r.abt : r._BQ;
    return (0, i.jsxs)("section", {
        className: d.uW,
        children: [
            (0, i.jsxs)(r.DUT, {
                className: a()(d.wx, d.vk),
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
                    (0, i.jsx)(p, { size: "md" }),
                ],
            }),
            s.length > 0 && (0, i.jsx)("ul", { id: A, hidden: !_, className: a()(d.p_, c), children: s }),
        ],
    });
}
