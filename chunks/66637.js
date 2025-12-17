n.d(t, { Z: () => c });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(674633);
let c = r.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: r, disabled: i, children: c, "aria-label": d, ref: u } = e;
    return (0, a.jsx)(s.kL8, {
        ref: u,
        className: l()(o.card, r, {
            [o.clickable]: null != t,
            [o.disabled]: i,
        }),
        onContextMenu: n,
        onClick: i ? void 0 : t,
        "aria-label": d,
        children: c,
    });
});
