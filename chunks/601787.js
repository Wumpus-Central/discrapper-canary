i.d(n, { default: () => l });
var r = i(200651);
i(192379);
var e = i(481060),
    a = i(388032);
function l(t) {
    let { ruleName: n, keyword: i, ...l } = t,
        c = null != n ? n : a.intl.string(a.t.ffR2cH);
    return (0, r.jsx)(e.ConfirmModal, {
        ...l,
        header: a.intl.string(a.t['zib/xM']),
        cancelText: a.intl.string(a.t['ETE/oK']),
        confirmText: a.intl.string(a.t['cY+Ooa']),
        children: (0, r.jsx)(e.Text, {
            variant: 'text-md/normal',
            children: a.intl.format(a.t.AxSYKC, {
                ruleName: c,
                keyword: i
            })
        })
    });
}
