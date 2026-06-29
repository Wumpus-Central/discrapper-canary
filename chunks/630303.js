"use strict";
n.d(t, { p: () => c });
var i = n(627968),
    r = n(64700),
    s = n(465657),
    a = n(46332),
    o = n(166532),
    l = n(601144);
let u = (e, t) => {
    let { handlePaymentSourceAdd: n } = e;
    return (0, i.jsx)(l.Ay, { handlePaymentSourceAdd: n, ...t });
};
function c(e) {
    let { isGift: t } = (0, a.t4)((e) => ({ isGift: e.isGift })),
        n = e.handleStepChange,
        l = r.useCallback(() => {
            if (t) return void n(o.pn.GIFT_CUSTOMIZATION);
        }, [n, t]),
        c = r.useCallback((e, t) => {
            let { isSelectedPaymentSourceDisabled: n, purchasePreviewError: i, invoicePreview: r } = t,
                s = e.disablePurchase || n || null == r || null != i;
            return { ...e, disablePurchase: s };
        }, []);
    return (0, i.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: t,
        onFooterBackClick: l,
        renderStepBody: u,
        resolveInternalState: c,
    });
}
