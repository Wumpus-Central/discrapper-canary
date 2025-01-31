i.d(n, { default: () => c });
var r = i(200651);
i(192379);
var l = i(481060),
    e = i(65912),
    a = i(388032);
function c(t) {
    let { ruleName: n, onConfirm: i, ...c } = t,
        { setEditingRule: o } = (0, e.V)(),
        s = null != n ? n : a.intl.string(a.t.ffR2cH);
    return (0, r.jsx)(l.ConfirmModal, {
        ...c,
        header: a.intl.string(a.t.kknTmJ),
        cancelText: a.intl.string(a.t['ETE/oK']),
        confirmText: a.intl.string(a.t['cY+Ooa']),
        onConfirm: () => {
            o(null), null == i || i();
        },
        children: (0, r.jsx)(l.Text, {
            variant: 'text-md/normal',
            children: a.intl.format(a.t['ff/gx8'], { ruleName: s })
        })
    });
}
