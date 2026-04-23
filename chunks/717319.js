n.d(t, { A: () => u });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(939249),
    r = n(847374),
    o = n(990078),
    d = n(110814),
    c = n(518229);
function u(e) {
    let {
        ref: t,
        tooltipText: n,
        caretTooltipText: l,
        onClick: u,
        onContextMenu: h,
        text: _,
        fullWidth: g,
        size: A = "md",
        variant: f = "primary",
    } = e;
    return (0, i.jsxs)("div", {
        ref: t,
        className: s()(d.kL, { [c.fullWidth]: g, [c.hasText]: null != _ }),
        children: [
            (0, i.jsx)(o.m, {
                text: n,
                children: (0, i.jsx)(a.D, {
                    "aria-label": n,
                    onClick: u,
                    onContextMenu: h,
                    className: s()(d.x6, c.button, c[A], c[f]),
                    children: _,
                }),
            }),
            (0, i.jsx)(o.m, {
                text: l,
                children: (0, i.jsx)(a.D, {
                    "aria-label": l,
                    onClick: h,
                    onContextMenu: h,
                    className: s()(d.me, c.button, c[A], c[f]),
                    children: (0, i.jsx)(r.a, { color: "currentColor", size: "xs" }),
                }),
            }),
        ],
    });
}
