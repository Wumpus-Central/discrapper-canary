n.d(t, { P: () => C });
var l = n(64700),
    i = n(284009),
    a = n.n(i),
    r = n(311907),
    s = n(937008),
    o = n(156312),
    u = n(566980),
    c = n(800471),
    d = n(543767),
    p = n(299301),
    m = n(97352),
    h = n(94420),
    A = n(699595),
    _ = n(788868);
let C = (e) => {
    let {
            selectedPlanId: t,
            priceOptions: n,
            trialId: i,
            metadata: C,
            isInOneStepSubscriptionCheckout: E = !1,
            isTrial: y = !1,
        } = e,
        f = (0, h.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: P,
            contextMetadata: S,
            setPurchasePreviewError: x,
            isEligibleForDiscount: T,
        } = (0, o.P5)(),
        { isGift: N } = (0, s.Pv)(),
        {
            subscriptionPlan: g,
            purchaseDisabled: I,
            newItems: v,
        } = ((e) => {
            let { selectedPlanId: t } = e,
                { purchaseState: n } = (0, o.P5)(),
                l = (0, r.bG)([m.A], () => m.A.get(t));
            a()(null != l, "Missing plan");
            let i = [{ planId: l.id, quantity: 1 }],
                s = n === u.h.PURCHASING || n === u.h.COMPLETED;
            return { subscriptionPlan: l, purchaseState: n, purchaseDisabled: s, newItems: i };
        })({ selectedPlanId: t }),
        [b, R] = (0, d.Kq)({
            items: v,
            renewal: !1,
            preventFetch: N || I,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            trialId: i,
            metadata: C,
        }),
        M = l.useMemo(() => {
            if (y && null != b) return b;
        }, [y, b]),
        [j, L] = (0, d.Kq)({
            subscriptionId: P?.id,
            items: v,
            renewal: !0,
            preventFetch: N || I,
            trialId: i,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: C,
        });
    (0, h.Tr)(j);
    let [O, D] = (0, d.FP)({
            paymentSourceId: n.paymentSourceId,
            skuId: f,
            subscriptionPlanId: t,
            currency: n.currency,
            preventFetch: !N || I,
            loadId: S.loadId,
        }),
        U = l.useMemo(() => (N ? O : b), [N, O, b]);
    (0, h.F0)(U);
    let [w, k] = (0, d.Kq)({
        items: [{ planId: _.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
        renewal: !1,
        preventFetch: !T,
        trialId: i,
        paymentSourceId: n.paymentSourceId,
        currency: n.currency,
        metadata: C,
    });
    (0, A.c)(w, T);
    let F = l.useMemo(() => R ?? L ?? k ?? D, [R, L, k, D]);
    l.useEffect(() => {
        x(F);
    }, [F, x]);
    let G = l.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]),
        B = l.useMemo(() => (0, c.UB)(E, b, g), [E, b, g]),
        Y = l.useMemo(
            () =>
                (0, p.yf)({
                    error: F,
                    isGift: N,
                    oneTimePurchaseNitroGiftInvoicePreview: O,
                    trialInvoicePreview: M,
                    proratedInvoicePreview: b,
                    renewalInvoicePreview: j,
                    planSwitchLoading: B,
                }),
            [F, N, O, M, b, j, B],
        );
    return {
        checkoutInvoicePreview: U,
        invoiceSummaryTypeWithPreview: Y,
        discountInvoicePreview: w,
        oneTimePurchaseNitroGiftInvoicePreview: O,
        trialInvoicePreview: M,
        proratedInvoicePreview: b,
        renewalInvoicePreview: j,
        purchaseDisabled: I,
        subscriptionPlan: g,
        invoiceError: F,
        subscriptionPeriodEnd: G,
    };
};
