n.d(t, { E: () => h, V: () => C });
var l = n(64700),
    i = n(284009),
    r = n.n(i),
    a = n(17928),
    s = n(951305),
    o = n(566980),
    u = n(800471),
    c = n(299301),
    d = n(97352),
    p = n(316915),
    m = n(699595);
function h(e) {
    let {
            fetchCheckoutInvoicePreviewRequest: t,
            fetchRenewalInvoicePreviewRequest: n,
            shouldAllowNullState: i = !1,
        } = e,
        { setFetchCheckoutInvoicePreviewRequest: r, setFetchRenewalInvoicePreviewRequest: a } = (0, p.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
        }));
    l.useEffect(() => {
        (i || null != t) && r(t);
    }, [t, r, i]),
        l.useEffect(() => {
            (i || null != n) && a(n);
        }, [n, a, i]);
}
function C(e) {
    let { selectedPlanId: t, priceOptions: n, trialId: i, metadata: h, isTrial: C = !1 } = e,
        {
            selectedSkuId: E,
            contextMetadata: f,
            setFetchCheckoutInvoicePreviewRequest: A,
            setFetchRenewalInvoicePreviewRequest: S,
            checkoutInvoicePreview: y,
            checkoutInvoiceError: P,
            renewalInvoicePreview: I,
            renewalInvoiceError: _,
            setPurchasePreviewError: T,
            activeSubscription: g,
            quantity: x,
        } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            contextMetadata: e.contextMetadata,
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutInvoiceError: e.checkoutInvoiceError,
            renewalInvoicePreview: e.renewalInvoicePreview,
            renewalInvoiceError: e.renewalInvoiceError,
            setPurchasePreviewError: e.setPurchasePreviewError,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        { isGift: v } = (0, s.Pv)(),
        {
            subscriptionPlan: N,
            purchaseDisabled: M,
            newItems: R,
        } = (function (e) {
            let { selectedPlanId: t } = e,
                n = (0, p.t4)((e) => e.purchaseState),
                i = (0, a.bG)([d.A], () => d.A.get(t));
            r()(null != i, "Missing plan");
            let s = l.useMemo(() => [{ planId: i.id, quantity: 1 }], [i.id]),
                u = n === o.h.PURCHASING || n === o.h.COMPLETED;
            return { subscriptionPlan: i, purchaseState: n, purchaseDisabled: u, newItems: s };
        })({ selectedPlanId: t }),
        b = !0 === n.loaded,
        j = M || !b,
        O = l.useMemo(
            () =>
                v
                    ? {
                          type: "premium_one_time_gift_purchase_invoice",
                          params: {
                              paymentSourceId: n.paymentSourceId,
                              skuId: E,
                              subscriptionPlanId: t,
                              currency: n.currency,
                              preventFetch: j,
                              loadId: f.loadId,
                              quantity: x,
                          },
                      }
                    : {
                          type: "premium_checkout_invoice",
                          params: {
                              items: R,
                              renewal: !1,
                              preventFetch: j,
                              applyEntitlements: !0,
                              paymentSourceId: n.paymentSourceId,
                              currency: n.currency,
                              trialId: i,
                              metadata: h ?? void 0,
                              loadId: f.loadId,
                          },
                      },
            [R, v, j, n.paymentSourceId, n.currency, i, h, f.loadId, t, E, x],
        ),
        L = l.useMemo(
            () =>
                v
                    ? null
                    : {
                          type: "premium_renewal_invoice",
                          params: {
                              subscriptionId: g?.id,
                              items: R,
                              renewal: !0,
                              preventFetch: j,
                              trialId: i,
                              paymentSourceId: n.paymentSourceId,
                              currency: n.currency,
                              metadata: h ?? void 0,
                          },
                      },
            [v, j, R, i, h, g?.id, n.paymentSourceId, n.currency],
        );
    l.useEffect(() => {
        A(O);
    }, [O, A]),
        l.useEffect(() => {
            S(L);
        }, [L, S]);
    let w = l.useMemo(() => (C && null != y ? y : null), [C, y]),
        { oneTimePurchaseNitroGiftInvoicePreview: k, proratedInvoicePreview: D } = l.useMemo(
            () =>
                v
                    ? { oneTimePurchaseNitroGiftInvoicePreview: y, proratedInvoicePreview: null }
                    : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: y },
            [v, y],
        ),
        { discountInvoiceError: U } = (0, m.W)({ priceOptions: n, trialId: i, metadata: h }),
        G = l.useMemo(() => P ?? _ ?? U, [P, _, U]);
    l.useEffect(() => {
        T(G);
    }, [G, T]);
    let F = l.useMemo(() => (null != D ? D.subscriptionPeriodEnd : void 0), [D]),
        H = l.useMemo(() => (0, u.U)(y, N), [y, N]),
        B = l.useMemo(
            () =>
                (0, c.yf)({
                    error: G,
                    isGift: v,
                    oneTimePurchaseNitroGiftInvoicePreview: k,
                    trialInvoicePreview: w,
                    proratedInvoicePreview: D,
                    renewalInvoicePreview: I,
                    planSwitchLoading: H,
                }),
            [G, v, k, w, D, I, H],
        );
    return {
        checkoutInvoicePreview: y,
        invoiceSummaryTypeWithPreview: B,
        oneTimePurchaseNitroGiftInvoicePreview: k,
        trialInvoicePreview: w,
        proratedInvoicePreview: D,
        renewalInvoicePreview: I,
        purchaseDisabled: M,
        invoiceError: G,
        subscriptionPeriodEnd: F,
    };
}
