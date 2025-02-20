n.d(t, { Z: () => c });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(969073);
let c = a.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: a, disabled: i, children: c } = e;
    return (0, r.jsx)(o.P3F, {
        className: l()(s.card, a, {
            [s.clickable]: null != t,
            [s.disabled]: i
        }),
        onContextMenu: n,
        onClick: i ? void 0 : t,
        children: c
    });
});
