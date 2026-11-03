i.d(n, { default: () => d });
var a = i(477900),
    r = i(189213),
    s = i(331322),
    e = i(834730),
    o = i(28863),
    c = i(818023),
    l = i(105292);
function d(t) {
    let { application: n, onCancel: i, onClose: d, onConfirm: h, ...u } = t;
    return (0, a.jsx)(r.a, {
        transitionState: u.transitionState,
        onClose: d,
        title: l.intl.string(l.t["06YebE"]),
        actions: [
            {
                text: l.intl.string(l.t["ETE/oC"]),
                onClick: function () {
                    (i(), d());
                },
                variant: "secondary",
            },
            {
                text: l.intl.string(l.t["3PatSz"]),
                onClick: function () {
                    (h(), d());
                },
                variant: "primary",
            },
        ],
        children: (0, a.jsxs)(s.B, {
            children: [
                (0, a.jsxs)(e.E, {
                    variant: "body-sm/normal",
                    children: [l.intl.format(l.t["s+WDGz"], { activityName: n.name }), " "],
                }),
                (0, a.jsx)(e.E, {
                    variant: "body-sm/normal",
                    children: (0, a.jsx)(o.Anchor, { href: c.i6, children: l.intl.string(l.t.E0gf5l) }),
                }),
            ],
        }),
    });
}
