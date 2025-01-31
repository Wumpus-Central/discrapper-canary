a.d(n, { default: () => l });
var e = a(200651);
a(192379);
var i = a(481060),
    r = a(388032);
function l(t) {
    let { onConfirmUninstall: n, game: a, ...l } = t;
    return (0, e.jsx)(i.ConfirmModal, {
        header: r.intl.formatToPlainString(r.t['f/BAbG'], { gameName: a.name }),
        confirmText: r.intl.string(r.t.RVy6Vl),
        cancelText: r.intl.string(r.t['96dwMT']),
        onConfirm: n,
        ...l,
        children: (0, e.jsx)(i.Text, {
            variant: 'text-md/normal',
            children: r.intl.format(r.t['FP+NKS'], { gameName: a.name })
        })
    });
}
