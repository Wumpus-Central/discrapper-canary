e.d(n, { default: () => s });
var r = e(477900);
e(582128);
var i = e(732159),
    c = e(975571),
    a = e(580630),
    l = e(652215),
    u = e(375708);
let s = function (t) {
    let { modalProps: n, onConfirm: e, onCancel: s, newInvoice: o } = t,
        p = {
            newCurrencyAndPrice: (0, a.$g)(o.total, o.currency),
            helpCenterLink: c.A.getArticleURL(l.MVz.LOCALIZED_PRICING),
        };
    return (0, r.jsx)(i.u, {
        title: u.intl.string(u.t.eZFTbu),
        subtitle: u.intl.format(u.t.oZBduD, p),
        variant: "primary",
        confirmText: u.intl.string(u.t.p89ACt),
        cancelText: u.intl.string(u.t.gm1Vej),
        onConfirm: e,
        onCancel: s,
        ...n,
    });
};
