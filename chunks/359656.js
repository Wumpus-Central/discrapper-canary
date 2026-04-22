n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(847374),
    o = n(320448),
    d = n(939249),
    c = n(534514),
    u = n(183555),
    h = n(680391);
function A(e) {
    let { section: t, header: n, items: s, listClassName: A, onExpand: _ } = e,
        { trackUserProfileAction: m } = (0, u.NJ)(),
        g = l.useId(),
        [p, f] = l.useState(!1),
        E = p ? r.a : o._;
    return (0, i.jsxs)("section", {
        className: h.uW,
        children: [
            (0, i.jsxs)(d.D, {
                className: a()(h.wx, h.vk),
                "aria-controls": g,
                "aria-expanded": p,
                onClick: () => {
                    f(!p), p || (m({ action: "PRESS_SECTION", section: t }), _?.());
                },
                children: [
                    (0, i.jsxs)(c.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " — ", s.length],
                    }),
                    (0, i.jsx)(E, { size: "md" }),
                ],
            }),
            s.length > 0 && (0, i.jsx)("ul", { id: g, hidden: !p, className: a()(h.p_, A), children: s }),
        ],
    });
}
