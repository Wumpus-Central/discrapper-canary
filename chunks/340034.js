"use strict";
n.d(t, { PI: () => y, W9: () => T, l$: () => S });
var i = n(627968);
n(64700);
var r = n(683071),
    s = n(854354),
    a = n(364995),
    o = n(463376),
    l = n(818824),
    u = n(944355),
    c = n(270537),
    d = n(211159),
    _ = n(881489),
    h = n(531506),
    f = n(458785),
    p = n(367921),
    E = n(299301),
    m = n(888751),
    g = n(652215),
    A = n(375708),
    I = n(327105);
let T = (e) => {
        let {
                invoiceSummaryTypeWithPreview: t,
                subscriptionPlan: n,
                subscriptionTrial: r,
                isPrepaidPaymentSource: a,
                isCustomGift: o,
            } = e,
            { invoicePreview: l } = t,
            u = [];
        u =
            t.type === E.N$.PREMIUM_GIFT
                ? (0, m.fk)(l, { isCustomGift: o, isPrepaidPaymentSource: a, subscriptionPlan: n })
                : (0, m.IY)(l, {
                      isPrepaidPaymentSource: a,
                      invoiceSummaryType: t.type,
                      subscriptionPlan: n,
                      subscriptionTrial: r,
                  }).lineItems;
        let d = (0, s.lp)(l, { manualLineItems: u, includeTaxLineItem: !0 });
        return (0, i.jsx)(c.Vm, { label: A.intl.string(I.default.eoXh7B), lineItems: d, currency: l.currency });
    },
    S = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: s, subscriptionPeriodEnd: a } = e,
            { fractionalPremiumBannerMessage: o } = ((e) => {
                let {
                        fractionalPremiumInfo: t,
                        isEligibleForTrial: n,
                        trialPeriodCopy: i,
                        subscriptionPeriodEnd: r,
                    } = e,
                    s = (0, _.ds)(),
                    a = {};
                return (
                    s
                        ? (a = { variant: h.uA.REVERSE_TRIAL })
                        : n && (a = { variant: h.uA.TRIAL, trialPeriod: i, trialEnd: r }),
                    { fractionalPremiumBannerMessage: (0, h.NQ)({ fractionalPremiumInfo: t, ...a }) }
                );
            })({ fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: s, subscriptionPeriodEnd: a });
        return null != o && "" !== o ? (0, i.jsx)(r.w, { type: "info", children: o }) : null;
    };
function y(e) {
    let {
            planGroup: t,
            isTrial: n,
            plan: r,
            isGift: s,
            paymentSourceType: c,
            activeSubscription: _,
            invoiceSummaryTypeWithPreview: h,
            isPrepaidPaymentSource: A = !1,
            overrideRenewalDate: I,
            fractionalPremiumInfo: T,
            hideLegalContent: S,
            isInvoiceBilledImmediately: y = !0,
        } = e,
        { immediateDelivery: C } = (0, l.U)(),
        { discountOffer: N, premiumGroupDiscountOffer: v } = (0, o.i)(),
        R = (0, d.t4)((e) => e.paymentSourceId),
        { checkoutPaymentSources: O } = (0, a.t)();
    if (h.type === E.N$.LOADING) return null;
    let { invoicePreview: b } = h,
        D = ("renewalInvoicePreview" in h ? h.renewalInvoicePreview : null) ?? b,
        { renewalPrice: L, multiPeriodDiscountAttributes: w } = (0, m.Go)(D, r, v ?? N);
    if (S) return null;
    let M = null != R && O?.some((e) => e.id === R && null != e.relocationCountry),
        P = {
            purchaseButtonText: (0, p.Ro)({
                productLine: g.EZt.PREMIUM,
                purchaseType: g.VVm.SUBSCRIPTION,
                plan: r,
                premiumSubscription: _,
                isGift: s,
                planGroup: t,
                isPrepaidPaymentSource: A,
                willRelocateStoreCountry: M,
            }),
            totalDue: y ? b.total : 0,
            renewalPrice: L,
            multiPeriodDiscountAttributes: w,
            currency: b.currency,
            interval: r.interval,
            intervalCount: r.intervalCount,
            startDate: (0, f.de)({
                overrideRenewalDate: I,
                currentInvoice: b.id !== D.id ? b : void 0,
                renewalInvoice: D,
                isSubscriptionUpdate: null != _,
                fractionalPremiumInfo: T,
            }),
        };
    return (0, i.jsx)(u._P, {
        variant: { type: s ? u.I0.GiftNitro : n ? u.I0.SubscriptionTrial : u.I0.Subscription, ...P },
        paymentSourceType: c,
        immediateDelivery: C,
    });
}
