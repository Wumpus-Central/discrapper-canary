i.d(n, { default: () => c });
var r = i(200651);
i(192379);
var e = i(481060),
    o = i(388032);
function c(t) {
    let { onConfirm: n, onBack: i, ...c } = t;
    return (0, r.jsx)(e.ConfirmModal, {
        header: o.intl.string(o.t.YrV3Iy),
        confirmText: o.intl.string(o.t.X7eUJi),
        cancelText: o.intl.string(o.t['13/7kZ']),
        confirmButtonColor: e.zxk.Colors.BRAND,
        onConfirm: n,
        onCancel: i,
        ...c,
        children: (0, r.jsx)(e.Text, {
            variant: 'text-md/medium',
            children: o.intl.string(o.t.MXSMtr)
        })
    });
}
