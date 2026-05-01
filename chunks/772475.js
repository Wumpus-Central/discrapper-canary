n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(177953),
    r = n(834730),
    o = n(204651),
    c = n(375708),
    d = n(943412);
function u(e) {
    let { className: t, count: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(d.zr, d.Yd, t),
        children: [
            (0, i.jsx)(s.n, { size: "md", color: "currentColor", className: d.Kk }),
            null != n && (0, i.jsx)(r.E, { color: "none", className: d.U9, variant: "text-md/normal", children: n }),
        ],
    });
}
function h(e) {
    let { count: t, ...n } = e;
    return (0, i.jsx)(o.A, {
        label: c.intl.string(c.t["jNqDh/"]),
        iconComponent: (e) => {
            let { className: n } = e;
            return (0, i.jsx)(u, { className: n, count: t });
        },
        tooltipPosition: "bottom",
        ...n,
    });
}
