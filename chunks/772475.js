r.d(t, { A: () => d });
var s = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
    a = r(397927),
    i = r(709562),
    o = r(985018),
    u = r(380519);
function c(e) {
    let { className: t, count: r } = e;
    return (0, s.jsxs)("div", {
        className: l()(u.zr, u.Yd, t),
        children: [
            (0, s.jsx)(a.nFg, { size: "md", color: "currentColor", className: u.Kk }),
            null != r && (0, s.jsx)(a.Text, { color: "none", className: u.U9, variant: "text-md/normal", children: r }),
        ],
    });
}
function d(e) {
    let { count: t, ...r } = e;
    return (0, s.jsx)(i.A, {
        label: o.intl.string(o.t["jNqDh/"]),
        iconComponent: (e) => {
            let { className: r } = e;
            return (0, s.jsx)(c, { className: r, count: t });
        },
        tooltipPosition: "bottom",
        ...r,
    });
}
