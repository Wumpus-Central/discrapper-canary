n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(66418);
let c = i.memo(
    i.forwardRef(function (e, t) {
        let { onClick: n, onContextMenu: i, className: a, disabled: c, children: d, 'aria-label': u } = e;
        return (0, r.jsx)(s.kL8, {
            ref: t,
            className: l()(o.card, a, {
                [o.clickable]: null != n,
                [o.disabled]: c
            }),
            onContextMenu: i,
            onClick: c ? void 0 : n,
            'aria-label': u,
            children: d
        });
    })
);
