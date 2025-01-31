i.d(n, { default: () => l });
var r = i(200651);
i(192379);
var o = i(481060),
    e = i(388032);
function l(t) {
    let { onConfirm: n, ...i } = t;
    return (0, r.jsx)(o.ConfirmModal, {
        header: e.intl.string(e.t['5yTUub']),
        confirmText: e.intl.string(e.t.TyCVIi),
        cancelText: e.intl.string(e.t['ETE/oK']),
        confirmButtonColor: o.zxk.Colors.BRAND,
        onConfirm: n,
        ...i,
        children: (0, r.jsx)(o.Text, {
            variant: 'text-md/normal',
            children: e.intl.string(e.t.dRhrXl)
        })
    });
}
