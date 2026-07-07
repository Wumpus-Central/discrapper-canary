n.d(t, { E: () => C, V: () => h });
var l = n(64700),
    i = n(284009),
    r = n.n(i),
    a = n(17928),
    s = n(937008),
    o = n(566980),
    u = n(800471),
    c = n(299301),
    d = n(97352),
    p = n(6938),
    m = n(699595);
function C(e) {
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
function h(e) {
    let { selectedPlanId: t, priceOptions: n, trialId: i, metadata: C, isTrial: h = !1 } = e,
        {
            selectedSkuId: E,
            contextMetadata: A,
            setFetchCheckoutInvoicePreviewRequest: f,
            setFetchRenewalInvoicePreviewRequest: S,
            checkoutInvoicePreview: y,
            checkoutInvoiceError: P,
            renewalInvoicePreview: T,
            renewalInvoiceError: I,
            setPurchasePreviewError: _,
            activeSubscription: g,
            quantity: v,
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
        { isGift: x } = (0, s.Pv)(),
        {
            subscriptionPlan: N,
            purchaseDisabled: R,
            newItems: b,
        } = (function (e) {
            let { selectedPlanId: t } = e,
                n = (0, p.t4)((e) => e.purchaseState),
                i = (0, a.bG)([d.A], () => d.A.get(t));
            r()(null != i, "Missing plan");
            let s = l.useMemo(() => [{ planId: i.id, quantity: 1 }], [i.id]),
                u = n === o.h.PURCHASING || n === o.h.COMPLETED;
            return { subscriptionPlan: i, purchaseState: n, purchaseDisabled: u, newItems: s };
        })({ selectedPlanId: t }),
        M = !0 === n.loaded,
        O = R || !M,
        j = l.useMemo(
            () =>
                x
                    ? {
                          type: "premium_one_time_gift_purchase_invoice",
                          params: {
                              paymentSourceId: n.paymentSourceId,
                              skuId: E,
                              subscriptionPlanId: t,
                              currency: n.currency,
                              preventFetch: O,
                              loadId: A.loadId,
                              quantity: v,
                          },
                      }
                    : {
                          type: "premium_checkout_invoice",
                          params: {
                              items: b,
                              renewal: !1,
                              preventFetch: O,
                              applyEntitlements: !0,
                              paymentSourceId: n.paymentSourceId,
                              currency: n.currency,
                              trialId: i,
                              metadata: C ?? void 0,
                              loadId: A.loadId,
                          },
                      },
            [b, x, O, n.paymentSourceId, n.currency, i, C, A.loadId, t, E, v],
        ),
        L = l.useMemo(
            () =>
                x
                    ? null
                    : {
                          type: "premium_renewal_invoice",
                          params: {
                              subscriptionId: g?.id,
                              items: b,
                              renewal: !0,
                              preventFetch: O,
                              trialId: i,
                              paymentSourceId: n.paymentSourceId,
                              currency: n.currency,
                              metadata: C ?? void 0,
                          },
                      },
            [x, O, b, i, C, g?.id, n.paymentSourceId, n.currency],
        );
    l.useEffect(() => {
        f(j);
    }, [j, f]),
        l.useEffect(() => {
            S(L);
        }, [L, S]);
    let D = l.useMemo(() => (h && null != y ? y : null), [h, y]),
        { oneTimePurchaseNitroGiftInvoicePreview: U, proratedInvoicePreview: w } = l.useMemo(
            () =>
                x
                    ? { oneTimePurchaseNitroGiftInvoicePreview: y, proratedInvoicePreview: null }
                    : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: y },
            [x, y],
        ),
        { discountInvoiceError: k } = (0, m.W)({ priceOptions: n, trialId: i, metadata: C }),
        G = l.useMemo(() => P ?? I ?? k, [P, I, k]);
    l.useEffect(() => {
        _(G);
    }, [G, _]);
    let F = l.useMemo(() => (null != w ? w.subscriptionPeriodEnd : void 0), [w]),
        B = l.useMemo(() => (0, u.UB)(y, N), [y, N]),
        Y = l.useMemo(
            () =>
                (0, c.yf)({
                    error: G,
                    isGift: x,
                    oneTimePurchaseNitroGiftInvoicePreview: U,
                    trialInvoicePreview: D,
                    proratedInvoicePreview: w,
                    renewalInvoicePreview: T,
                    planSwitchLoading: B,
                }),
            [G, x, U, D, w, T, B],
        );
    return {
        checkoutInvoicePreview: y,
        invoiceSummaryTypeWithPreview: Y,
        oneTimePurchaseNitroGiftInvoicePreview: U,
        trialInvoicePreview: D,
        proratedInvoicePreview: w,
        renewalInvoicePreview: T,
        purchaseDisabled: R,
        invoiceError: G,
        subscriptionPeriodEnd: F,
    };
}
