l.d(t, { A: () => u });
var n = l(627968),
    i = l(503698),
    s = l.n(i),
    a = l(939249),
    r = l(847374),
    o = l(990078),
    c = l(110814),
    d = l(518229);
function u(e) {
    let {
        ref: t,
        tooltipText: l,
        caretTooltipText: i,
        onClick: u,
        onContextMenu: h,
        text: g,
        fullWidth: f,
        size: A = "md",
        variant: v = "primary",
    } = e;
    return (0, n.jsxs)("div", {
        ref: t,
        className: s()(c.kL, { [d.fullWidth]: f, [d.hasText]: null != g }),
        children: [
            (0, n.jsx)(o.m, {
                text: l,
                children: (0, n.jsx)(a.D, {
                    "aria-label": l,
                    onClick: u,
                    onContextMenu: h,
                    className: s()(c.x6, d.button, d[A], d[v]),
                    children: g,
                }),
            }),
            (0, n.jsx)(o.m, {
                text: i,
                children: (0, n.jsx)(a.D, {
                    "aria-label": i,
                    onClick: h,
                    onContextMenu: h,
                    className: s()(c.me, d.button, d[A], d[v]),
                    children: (0, n.jsx)(r.a, { color: "currentColor", size: "xs" }),
                }),
            }),
        ],
    });
}
