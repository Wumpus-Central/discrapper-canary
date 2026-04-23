"use strict";
n.d(t, { P: () => m });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(937008),
    l = n(156312),
    u = n(566980),
    c = n(800471),
    d = n(543767),
    _ = n(299301),
    f = n(97352),
    p = n(94420),
    h = n(699595),
    E = n(788868);
let m = (e) => {
    let {
            selectedPlanId: t,
            priceOptions: n,
            trialId: i,
            metadata: m,
            isInOneStepSubscriptionCheckout: g = !1,
            isTrial: A = !1,
        } = e,
        I = (0, p.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: T,
            contextMetadata: S,
            setPurchasePreviewError: y,
            isEligibleForDiscount: N,
        } = (0, l.P5)(),
        { isGift: v } = (0, o.Pv)(),
        {
            subscriptionPlan: C,
            purchaseDisabled: O,
            newItems: R,
        } = ((e) => {
            let { selectedPlanId: t } = e,
                { purchaseState: n } = (0, l.P5)(),
                r = (0, a.bG)([f.A], () => f.A.get(t));
            s()(null != r, "Missing plan");
            let i = [{ planId: r.id, quantity: 1 }],
                o = n === u.h.PURCHASING || n === u.h.COMPLETED;
            return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: o, newItems: i };
        })({ selectedPlanId: t }),
        [b, D] = (0, d.Kq)({
            items: R,
            renewal: !1,
            preventFetch: v || O,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            trialId: i,
            metadata: m,
        }),
        L = r.useMemo(() => {
            if (A && null != b) return b;
        }, [A, b]),
        [w, M] = (0, d.Kq)({
            subscriptionId: T?.id,
            items: R,
            renewal: !0,
            preventFetch: v || O,
            trialId: i,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: m,
        });
    (0, p.Tr)(w);
    let [P, x] = (0, d.FP)({
            paymentSourceId: n.paymentSourceId,
            skuId: I,
            subscriptionPlanId: t,
            currency: n.currency,
            preventFetch: !v || O,
            loadId: S.loadId,
        }),
        k = r.useMemo(() => (v ? P : b), [v, P, b]);
    (0, p.F0)(k);
    let [U, G] = (0, d.Kq)({
        items: [{ planId: E.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
        renewal: !1,
        preventFetch: !N,
        trialId: i,
        paymentSourceId: n.paymentSourceId,
        currency: n.currency,
        metadata: m,
    });
    (0, h.c)(U, N);
    let F = r.useMemo(() => D ?? M ?? G ?? x, [D, M, G, x]);
    r.useEffect(() => {
        y(F);
    }, [F, y]);
    let V = r.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]),
        B = r.useMemo(() => (0, c.UB)(g, b, C), [g, b, C]),
        H = r.useMemo(
            () =>
                (0, _.yf)({
                    error: F,
                    isGift: v,
                    oneTimePurchaseNitroGiftInvoicePreview: P,
                    trialInvoicePreview: L,
                    proratedInvoicePreview: b,
                    renewalInvoicePreview: w,
                    planSwitchLoading: B,
                }),
            [F, v, P, L, b, w, B],
        );
    return {
        checkoutInvoicePreview: k,
        invoiceSummaryTypeWithPreview: H,
        discountInvoicePreview: U,
        oneTimePurchaseNitroGiftInvoicePreview: P,
        trialInvoicePreview: L,
        proratedInvoicePreview: b,
        renewalInvoicePreview: w,
        purchaseDisabled: O,
        subscriptionPlan: C,
        invoiceError: F,
        subscriptionPeriodEnd: V,
    };
};
