n.d(t, { Z: () => c });
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(481060),
    o = n(39028);
let c = a.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: a, disabled: r, children: c } = e;
    return (0, i.jsx)(s.P3F, {
        className: l()(o.card, a, {
            [o.clickable]: null != t,
            [o.disabled]: r
        }),
        onContextMenu: n,
        onClick: r ? void 0 : t,
        children: c
    });
});
