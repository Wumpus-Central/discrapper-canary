e.d(t, { default: () => d });
var i = e(627968),
    r = e(64700),
    s = e(732159),
    l = e(834730),
    a = e(150934),
    c = e(375708),
    o = e(239863);
function d(n) {
    let { title: t, body: e, onSubmit: d, ...u } = n,
        [h, p] = r.useState(!1);
    return (0, i.jsxs)(s.ConfirmModal, {
        title: t,
        confirmText: c.intl.string(c.t["26C4oi"]),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        onConfirm: function () {
            d(null, h);
        },
        ...u,
        children: [
            (0, i.jsx)(l.E, { variant: "text-md/normal", children: e }),
            (0, i.jsx)("div", {
                className: o.k,
                children: (0, i.jsx)(a.S, {
                    checked: h,
                    onChange: function () {
                        return p((n) => !n);
                    },
                    label: c.intl.string(c.t.bq3JXs),
                    labelType: "secondary",
                }),
            }),
        ],
    });
}
