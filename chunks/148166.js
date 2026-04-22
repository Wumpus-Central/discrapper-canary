n.d(e, { default: () => d });
var i = n(627968),
    s = n(64700),
    c = n(732159),
    l = n(834730),
    r = n(150934),
    a = n(985018),
    o = n(239863);
function d(t) {
    let { title: e, body: n, onSubmit: d, ...h } = t,
        [p, u] = s.useState(!1);
    return (0, i.jsxs)(c.ConfirmModal, {
        title: e,
        confirmText: a.intl.string(a.t["26C4oi"]),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onConfirm: () => {
            d(null, p);
        },
        ...h,
        children: [
            (0, i.jsx)(l.E, { variant: "text-md/normal", children: n }),
            (0, i.jsx)("div", {
                className: o.k,
                children: (0, i.jsx)(r.S, {
                    checked: p,
                    onChange: () => u((t) => !t),
                    label: a.intl.string(a.t.bq3JXs),
                    labelType: "secondary",
                }),
            }),
        ],
    });
}
