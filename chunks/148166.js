n.d(t, { default: () => o });
var i = n(627968),
    c = n(64700),
    s = n(158954),
    l = n(397927),
    r = n(985018),
    a = n(985415);
function o(e) {
    let { title: t, body: n, onSubmit: o, ...d } = e,
        [h, x] = c.useState(!1);
    return (0, i.jsxs)(s.ConfirmModal, {
        title: t,
        confirmText: r.intl.string(r.t["26C4oi"]),
        cancelText: r.intl.string(r.t["ETE/oC"]),
        onConfirm: () => {
            o(null, h);
        },
        ...d,
        children: [
            (0, i.jsx)(l.Text, { variant: "text-md/normal", children: n }),
            (0, i.jsx)("div", {
                className: a.k,
                children: (0, i.jsx)(l.Checkbox, {
                    checked: h,
                    onChange: () => x((e) => !e),
                    label: r.intl.string(r.t.bq3JXs),
                    labelType: "secondary",
                }),
            }),
        ],
    });
}
