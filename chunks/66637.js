n.d(t, { Z: () => c });
var r = n(951288),
    a = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(514482);
let c = a.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: a, disabled: i, children: c, "aria-label": d, ref: u } = e;
    return (0, r.jsx)(s.kL8, {
        ref: u,
        className: l()(o.card, a, {
            [o.clickable]: null != t,
            [o.disabled]: i,
        }),
        onContextMenu: n,
        onClick: i ? void 0 : t,
        "aria-label": d,
        children: c,
    });
});
