(n.d(t, { k: () => d }), n(321073));
var l = n(477900);
n(582128);
var i = n(888751),
    r = n(854354),
    a = n(400612),
    s = n(848584),
    o = n(298208),
    u = n(758476),
    c = n(105292);
function d(e) {
    let {
            discriminatedInvoicePreview: t,
            subscriptionPlan: n,
            subscriptionTrial: d,
            isPrepaidPaymentSource: m,
            isCustomGift: p,
        } = e,
        { invoicePreview: C } = t,
        h = (0, o.t4)((e) => e.getGiftSubscriptionPlanId()),
        f = [];
    f =
        t.type === a.u$.PREMIUM_GIFT
            ? (0, i.fk)(C, { isCustomGift: p, isPrepaidPaymentSource: m, subscriptionPlan: n })
            : (0, i.IY)(C, {
                  isPrepaidPaymentSource: m,
                  invoiceSummaryType: t.type,
                  subscriptionPlan: n,
                  subscriptionTrial: d,
                  invoicePlanId: h ?? void 0,
              }).lineItems;
    let E = (0, r.lp)(C, { manualLineItems: f, includeTaxLineItem: !0 }),
        S = (0, r.Dn)(C);
    return (
        null != S && E.push(S),
        (0, l.jsx)(s.Vm, {
            label: c.intl.string(u.default.eoXh7B),
            lineItems: E,
            currency: C.currency,
            defaultExpanded: null != S,
        })
    );
}
