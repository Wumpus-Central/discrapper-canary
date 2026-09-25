i.d(n, { default: () => d });
var a = i(477900),
    r = i(189213),
    s = i(331322),
    e = i(834730),
    c = i(28863),
    l = i(818023),
    o = i(375708);
function d(t) {
    let { application: n, onCancel: i, onClose: d, onConfirm: h, ...u } = t;
    return (0, a.jsx)(r.a, {
        transitionState: u.transitionState,
        onClose: d,
        title: o.intl.string(o.t["06YebE"]),
        actions: [
            {
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: function () {
                    (i(), d());
                },
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t["3PatSz"]),
                onClick: function () {
                    (h(), d());
                },
                variant: "primary",
            },
        ],
        children: (0, a.jsxs)(s.B, {
            children: [
                (0, a.jsxs)(e.E, {
                    variant: "text-sm/normal",
                    children: [o.intl.format(o.t["s+WDGz"], { activityName: n.name }), " "],
                }),
                (0, a.jsx)(e.E, {
                    variant: "text-sm/normal",
                    children: (0, a.jsx)(c.Anchor, { href: l.i6, children: o.intl.string(o.t.E0gf5l) }),
                }),
            ],
        }),
    });
}
