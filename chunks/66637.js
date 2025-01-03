var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(481060),
    s = t(704839);
n.Z = i.memo(function (e) {
    let { onClick: n, onContextMenu: t, className: i, disabled: r, children: c } = e;
    return (0, a.jsx)(o.Clickable, {
        className: l()(s.card, i, {
            [s.clickable]: null != n,
            [s.disabled]: r
        }),
        onContextMenu: t,
        onClick: r ? void 0 : n,
        children: c
    });
});
