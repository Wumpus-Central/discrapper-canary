(n.d(t, { k: () => c }), n(321073));
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(854354),
    a = n(400612),
    s = n(848584),
    o = n(758476),
    u = n(105292);
function c(e) {
    let {
            discriminatedInvoicePreview: t,
            subscriptionPlan: n,
            subscriptionTrial: c,
            isPrepaidPaymentSource: d,
            isCustomGift: m,
        } = e,
        { invoicePreview: p } = t,
        C = [];
    C =
        t.type === a.u$.PREMIUM_GIFT
            ? (0, i.fk)(p, { isCustomGift: m, isPrepaidPaymentSource: d, subscriptionPlan: n })
            : (0, i.IY)(p, {
                  isPrepaidPaymentSource: d,
                  invoiceSummaryType: t.type,
                  subscriptionPlan: n,
                  subscriptionTrial: c,
              }).lineItems;
    let h = (0, r.lp)(p, { manualLineItems: C, includeTaxLineItem: !0 }),
        f = (0, r.Dn)(p);
    return (
        null != f && h.push(f),
        (0, l.jsx)(s.Vm, {
            label: u.intl.string(o.default.eoXh7B),
            lineItems: h,
            currency: p.currency,
            defaultExpanded: null != f,
        })
    );
}
