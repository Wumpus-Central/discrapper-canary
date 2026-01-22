n.d(t, { A: () => o });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(397927),
    c = n(330640);
let o = a.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: a, disabled: r, children: o, "aria-label": d, ref: u } = e;
    return (0, l.jsx)(s.sqX, {
        ref: u,
        className: i()(c.Nr, a, {
            [c.vk]: null != t,
            [c.r9]: r,
        }),
        onContextMenu: n,
        onClick: r ? void 0 : t,
        "aria-label": d,
        children: o,
    });
});
