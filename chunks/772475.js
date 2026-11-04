var i = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    s = n(177953),
    r = n(834730),
    o = n(693409),
    d = n(792996),
    c = n(308625);
function u(e) {
    let { className: t, count: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(c.zr, c.Yd, t),
        children: [
            (0, i.jsx)(s.n, { size: "md", color: "currentColor", className: c.Kk }),
            null != n && (0, i.jsx)(r.E, { color: "none", className: c.U9, variant: "body-md/normal", children: n }),
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { count: t, ...n } = e;
            return (0, i.jsx)(o.A, {
                label: d.intl.string(d.t["jNqDh/"]),
                iconComponent: (e) => {
                    let { className: n } = e;
                    return (0, i.jsx)(u, { className: n, count: t });
                },
                tooltipPosition: "bottom",
                ...n,
            });
        },
    },
);
