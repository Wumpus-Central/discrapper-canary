n.d(t, { k: () => c });
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(854354),
    a = n(400612),
    s = n(848584),
    o = n(327105),
    u = n(375708);
function c(e) {
    let {
            discriminatedInvoicePreview: t,
            subscriptionPlan: n,
            subscriptionTrial: c,
            isPrepaidPaymentSource: d,
            isCustomGift: p,
        } = e,
        { invoicePreview: m } = t,
        C = [];
    C =
        t.type === a.u$.PREMIUM_GIFT
            ? (0, i.fk)(m, { isCustomGift: p, isPrepaidPaymentSource: d, subscriptionPlan: n })
            : (0, i.IY)(m, {
                  isPrepaidPaymentSource: d,
                  invoiceSummaryType: t.type,
                  subscriptionPlan: n,
                  subscriptionTrial: c,
              }).lineItems;
    let h = (0, r.lp)(m, { manualLineItems: C, includeTaxLineItem: !0 });
    return (0, l.jsx)(s.Vm, { label: u.intl.string(o.default.eoXh7B), lineItems: h, currency: m.currency });
}
