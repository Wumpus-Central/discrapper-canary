n.d(i, { default: () => d });
var a = n(627968),
    r = n(189213),
    s = n(331322),
    e = n(834730),
    l = n(349288),
    c = n(360469),
    o = n(985018);
function d(t) {
    let { application: i, onCancel: n, onClose: d, onConfirm: h, ...x } = t;
    return (0, a.jsx)(r.Modal, {
        transitionState: x.transitionState,
        onClose: d,
        title: o.intl.string(o.t["06YebE"]),
        actions: [
            {
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: () => {
                    n(), d();
                },
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t["3PatSz"]),
                onClick: () => {
                    h(), d();
                },
                variant: "primary",
            },
        ],
        children: (0, a.jsxs)(s.B, {
            children: [
                (0, a.jsxs)(e.E, {
                    variant: "text-sm/normal",
                    children: [o.intl.format(o.t["s+WDGz"], { activityName: i.name }), " "],
                }),
                (0, a.jsx)(e.E, {
                    variant: "text-sm/normal",
                    children: (0, a.jsx)(l.Anchor, { href: c.i6, children: o.intl.string(o.t.E0gf5l) }),
                }),
            ],
        }),
    });
}
