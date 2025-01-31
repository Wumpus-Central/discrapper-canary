e.d(n, { default: () => d }), e(47120);
var r = e(200651),
    i = e(192379),
    o = e(433517),
    a = e(481060),
    s = e(818634),
    c = e(388032),
    l = e(383192);
function d(t) {
    let [n, e] = i.useState(!1);
    return (0, r.jsxs)(a.ConfirmModal, {
        ...t,
        header: c.intl.string(c.t.pjYu09),
        confirmText: c.intl.string(c.t.zVZXRU),
        cancelText: c.intl.string(c.t['ETE/oK']),
        onConfirm: () => {
            (0, s.l)(!0);
        },
        confirmButtonColor: a.zxk.Colors.BRAND,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: c.intl.format(c.t['0eydys'], {})
            }),
            (0, r.jsx)(a.XZJ, {
                className: l.checkboxMargin,
                type: a.XZJ.Types.INVERTED,
                value: n,
                onChange: () => {
                    o.K.set('doNotShowReorderModal', JSON.stringify(!0)), e(!0);
                },
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: c.intl.string(c.t['50TyjY'])
                })
            })
        ]
    });
}
