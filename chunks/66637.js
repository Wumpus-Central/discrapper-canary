n.d(t, { Z: () => c });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(981222);
let c = a.memo(
    a.forwardRef(function (e, t) {
        let { onClick: n, onContextMenu: a, className: i, disabled: c, children: d, 'aria-label': u } = e;
        return (0, r.jsx)(s.kL8, {
            ref: t,
            className: l()(o.card, i, {
                [o.clickable]: null != n,
                [o.disabled]: c
            }),
            onContextMenu: a,
            onClick: c ? void 0 : n,
            'aria-label': u,
            children: d
        });
    })
);
