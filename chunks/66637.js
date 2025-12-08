n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(514482);
let c = i.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: i, disabled: a, children: c, "aria-label": d, ref: u } = e;
    return (0, r.jsx)(s.kL8, {
        ref: u,
        className: l()(o.card, i, {
            [o.clickable]: null != t,
            [o.disabled]: a,
        }),
        onContextMenu: n,
        onClick: a ? void 0 : t,
        "aria-label": d,
        children: c,
    });
});
