e.d(n, { default: () => s });
var r = e(627968);
e(64700);
var i = e(732159),
    a = e(975571),
    c = e(580630),
    l = e(652215),
    o = e(375708);
let s = function (t) {
    let { modalProps: n, onConfirm: e, onCancel: s, newInvoice: u } = t,
        p = {
            newCurrencyAndPrice: (0, c.$g)(u.total, u.currency),
            helpCenterLink: a.A.getArticleURL(l.MVz.LOCALIZED_PRICING),
        };
    return (0, r.jsx)(i.ConfirmModal, {
        title: o.intl.string(o.t.eZFTbu),
        subtitle: o.intl.format(o.t.oZBduD, p),
        variant: "primary",
        confirmText: o.intl.string(o.t.p89ACt),
        cancelText: o.intl.string(o.t.gm1Vej),
        onConfirm: e,
        onCancel: s,
        ...n,
    });
};
