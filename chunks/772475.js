n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(709562),
    o = n(985018),
    c = n(527573);
function d(e) {
    let { className: t, count: n } = e;
    return (0, i.jsxs)("div", {
        className: s()(c.zr, c.Yd, t),
        children: [
            (0, i.jsx)(a.nFg, { size: "md", color: "currentColor", className: c.Kk }),
            null != n && (0, i.jsx)(a.Text, { color: "none", className: c.U9, variant: "text-md/normal", children: n }),
        ],
    });
}
function u(e) {
    let { count: t, ...n } = e;
    return (0, i.jsx)(r.A, {
        label: o.intl.string(o.t["jNqDh/"]),
        iconComponent: (e) => {
            let { className: n } = e;
            return (0, i.jsx)(d, { className: n, count: t });
        },
        tooltipPosition: "bottom",
        ...n,
    });
}
