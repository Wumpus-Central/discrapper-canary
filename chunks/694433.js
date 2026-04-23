n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311678),
    o = n(289873),
    d = n(441442),
    c = n(976402);
function u(e) {
    let { action: t, children: n, className: s, onExpandChange: u, loading: m, ...g } = e,
        [h, x] = l.useState(!1);
    return (0, i.jsx)(a.N, {
        className: r()(c.HS, s),
        isExpanded: h,
        collapsibleContent: (0, i.jsxs)("div", {
            className: c.oV,
            children: [h && (0, i.jsx)("div", { className: c.Wn }), n],
        }),
        children: (e) => {
            let { onClick: n } = e;
            return (0, i.jsx)(d.A, {
                ...g,
                className: c.ro,
                action: m ? (0, i.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS }) : t,
                onClick: (e) => {
                    var t;
                    x((t = !h)), u?.(t), n(e);
                },
            });
        },
    });
}
