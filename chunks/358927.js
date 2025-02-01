r.d(n, { default: () => d });
var e = r(200651);
r(192379);
var i = r(481060),
    o = r(63063),
    c = r(937615),
    l = r(981631),
    a = r(388032);
let d = (t) => {
    let { modalProps: n, onConfirm: r, onCancel: d, newInvoice: s } = t,
        C = {
            newCurrencyAndPrice: (0, c.T4)(s.total, s.currency),
            helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING)
        };
    return (0, e.jsx)(i.ConfirmModal, {
        header: a.intl.string(a.t.eZFTbm),
        confirmText: a.intl.string(a.t.p89ACg),
        cancelText: a.intl.string(a.t.gm1Ven),
        onConfirm: r,
        onCancel: d,
        confirmButtonColor: i.zxk.Colors.BRAND,
        ...n,
        children: (0, e.jsx)(i.Text, {
            variant: 'text-md/normal',
            children: a.intl.format(a.t.oZBduL, C)
        })
    });
};
