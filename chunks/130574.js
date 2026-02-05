n.d(i, { default: () => c });
var a = n(627968),
    r = n(158954),
    e = n(397927),
    s = n(360469),
    l = n(985018);
function c(t) {
    let { application: i, onCancel: n, onClose: c, onConfirm: o, ...d } = t;
    return (0, a.jsx)(r.Modal, {
        transitionState: d.transitionState,
        onClose: c,
        title: l.intl.string(l.t["06YebE"]),
        actions: [
            {
                text: l.intl.string(l.t["ETE/oC"]),
                onClick: () => {
                    n(), c();
                },
                variant: "secondary",
            },
            {
                text: l.intl.string(l.t["3PatSz"]),
                onClick: () => {
                    o(), c();
                },
                variant: "primary",
            },
        ],
        children: (0, a.jsxs)(e.BJc, {
            children: [
                (0, a.jsxs)(e.Text, {
                    variant: "text-sm/normal",
                    children: [l.intl.format(l.t["s+WDGz"], { activityName: i.name }), " "],
                }),
                (0, a.jsx)(e.Text, {
                    variant: "text-sm/normal",
                    children: (0, a.jsx)(e.MzZ, { href: s.i6, children: l.intl.string(l.t.E0gf5l) }),
                }),
            ],
        }),
    });
}
