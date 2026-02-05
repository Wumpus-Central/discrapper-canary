n.d(e, { default: () => o });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(975571),
    l = n(580630),
    c = n(652215),
    s = n(985018);
let o = (t) => {
    let { modalProps: e, onConfirm: n, onCancel: o, newInvoice: u } = t,
        p = {
            newCurrencyAndPrice: (0, l.$g)(u.total, u.currency),
            helpCenterLink: a.A.getArticleURL(c.MVz.LOCALIZED_PRICING),
        };
    return (0, r.jsx)(i.ConfirmModal, {
        title: s.intl.string(s.t.eZFTbu),
        subtitle: s.intl.format(s.t.oZBduD, p),
        variant: "primary",
        confirmText: s.intl.string(s.t.p89ACt),
        cancelText: s.intl.string(s.t.gm1Vej),
        onConfirm: n,
        onCancel: o,
        ...e,
    });
};
