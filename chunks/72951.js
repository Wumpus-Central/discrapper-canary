n.d(t, { A: () => c });
var i = n(627968),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    s = n(47167),
    o = n(713654),
    d = n(170147);
function c(e) {
    let { className: t, channel: n, guild: r, onClick: c } = e,
        u = (0, o.gU)(n, r),
        _ = (0, s.Ay)(n);
    return (0, i.jsxs)(a.DUT, {
        onClick: c,
        className: l()(d.UP, t),
        children: [
            null != u &&
                (0, i.jsx)(u, { className: d.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, i.jsxs)(a.Text, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: [r.name, " / ", _],
            }),
            (0, i.jsx)(a._BQ, { className: d.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
