n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(177953),
    r = n(834730),
    o = n(709562),
    c = n(985018),
    d = n(943412);
function u(e) {
    let { className: t, count: n } = e;
    return (0, i.jsxs)("div", {
        className: l()(d.zr, d.Yd, t),
        children: [
            (0, i.jsx)(s.n, { size: "md", color: "currentColor", className: d.Kk }),
            null != n && (0, i.jsx)(r.E, { color: "none", className: d.U9, variant: "text-md/normal", children: n }),
        ],
    });
}
function p(e) {
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
