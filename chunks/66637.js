n.d(t, { Z: () => c });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(898302);
let c = a.memo(
    a.forwardRef(function (e, t) {
        let { onClick: n, onContextMenu: a, className: i, disabled: c, children: d } = e;
        return (0, r.jsx)(o.P3F, {
            innerRef: t,
            className: l()(s.card, i, {
                [s.clickable]: null != n,
                [s.disabled]: c
            }),
            onContextMenu: a,
            onClick: c ? void 0 : n,
            children: d
        });
    })
);
