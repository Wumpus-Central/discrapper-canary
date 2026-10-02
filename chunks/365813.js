n.d(t, { IF: () => E, Mx: () => _, N4: () => u, Rn: () => A, SB: () => d, wW: () => c });
var i = n(428865),
    r = n(811391),
    a = n(826469),
    s = n(570221),
    l = n(158045),
    o = n(202541);
function d(e, t) {
    return null != e && null != e.checkout_context
        ? e.checkout_context
        : null != t && null != t.checkoutContext
          ? t.checkoutContext
          : null;
}
function c(e) {
    return null == e || null == e.payment_sources ? [] : e.payment_sources.map(a.A.createFromCheckoutContext);
}
function u(e, t) {
    let n = r.A.createFromServer(t),
        a = (0, i.L)(t) ? null : s.A.createFromOrder(t);
    return {
        order: t,
        orderRecord: n,
        ...(null != a ? { checkoutInvoicePreview: a } : {}),
        pendingPaymentSourceId: null,
        ...(function (e, t) {
            let n = e.orderRecord,
                i = null != n && n.id === t.id;
            if (i && t.revision <= n.revision) return {};
            let r = i ? n.billingFacetRecord : null,
                a = null != r ? r.paymentSourceId : null,
                s = null != r ? r.fiatCurrency : null,
                l = t.billingFacetRecord,
                o = null != l ? l.paymentSourceId : null,
                d = null != l ? l.fiatCurrency : null,
                c = {};
            return (
                o !== a && (c.paymentSourceId = o),
                d !== s && (c.checkoutPriceOptions = { ...e.checkoutPriceOptions, currency: d ?? void 0 }),
                c
            );
        })(e, n),
    };
}
function _(e) {
    return null == e
        ? { isPremiumPurchase: !0, isPremiumGroupPurchase: !1 }
        : { isPremiumPurchase: (0, l.ys)(e), isPremiumGroupPurchase: e === o.gD.PREMIUM_GROUP_MONTH };
}
function E(e) {
    let { isTrial: t, isGift: n, selectedSkuId: i, startedPaymentFlowWithPaymentSources: r } = e;
    return !t && !n && null != i && o.oz.includes(i) && !!r;
}
function A(e, t) {
    if (null == e) return null;
    if ("subscription_checkout_invoice_get_request" === e.type) return e;
    let n = t().contextMetadata.loadId;
    return e.params.loadId !== n ? { ...e, params: { loadId: n, ...e.params } } : e;
}
