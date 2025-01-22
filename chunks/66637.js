var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    s = n(704839);
t.Z = a.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: a, disabled: r, children: c } = e;
    return (0, i.jsx)(o.Clickable, {
        className: l()(s.card, a, {
            [s.clickable]: null != t,
            [s.disabled]: r
        }),
        onContextMenu: n,
        onClick: r ? void 0 : t,
        children: c
    });
});
