e.d(n, { default: () => l }), e(47120);
var i = e(200651),
    o = e(192379),
    r = e(481060),
    s = e(153867),
    a = e(388032),
    c = e(710694);
function l(t) {
    let { onSubmit: n, onClose: e, ...l } = t,
        [d, x] = o.useState(!1);
    return (0, i.jsxs)(r.ConfirmModal, {
        header: a.intl.string(a.t.HlAPoq),
        confirmButtonColor: r.zxk.Colors.GREEN,
        confirmText: a.intl.string(a.t.rimG2d),
        cancelText: a.intl.string(a.t['ETE/oK']),
        onConfirm: n,
        onClose: () => (d && s.ZP.updatedUnsyncedSettings({ disableCallUserConfirmationPrompt: !0 }), e()),
        ...l,
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: a.intl.string(a.t.Jz3oqK)
            }),
            (0, i.jsx)(r.XZJ, {
                type: r.XZJ.Types.INVERTED,
                value: d,
                onChange: (t, n) => x(n),
                className: c.checkbox,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: a.intl.string(a.t['JdIQ/f'])
                })
            })
        ]
    });
}
