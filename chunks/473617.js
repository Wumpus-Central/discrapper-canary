n.d(t, { E: () => A, V: () => C });
var l = n(64700),
    r = n(284009),
    i = n.n(r),
    a = n(17928),
    s = n(937008),
    o = n(768050),
    u = n(566980),
    c = n(800471),
    d = n(299301),
    p = n(97352),
    m = n(722847),
    h = n(699595);
let A = (e) => {
        let {
                fetchCheckoutInvoicePreviewRequest: t,
                fetchRenewalInvoicePreviewRequest: n,
                shouldAllowNullState: r = !1,
            } = e,
            { setFetchCheckoutInvoicePreviewRequest: i, setFetchRenewalInvoicePreviewRequest: a } = (0, m.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            }));
        l.useEffect(() => {
            (r || null != t) && i(t);
        }, [t, i, r]),
            l.useEffect(() => {
                (r || null != n) && a(n);
            }, [n, a, r]);
    },
    C = (e) => {
        let { selectedPlanId: t, priceOptions: n, trialId: r, metadata: A, isTrial: C = !1 } = e,
            {
                selectedSkuId: E,
                contextMetadata: y,
                setFetchCheckoutInvoicePreviewRequest: P,
                setFetchRenewalInvoicePreviewRequest: S,
                checkoutInvoicePreview: _,
                checkoutInvoiceError: I,
                renewalInvoicePreview: f,
                renewalInvoiceError: T,
                setPurchasePreviewError: N,
            } = (0, m.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                contextMetadata: e.contextMetadata,
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutInvoiceError: e.checkoutInvoiceError,
                renewalInvoicePreview: e.renewalInvoicePreview,
                renewalInvoiceError: e.renewalInvoiceError,
                setPurchasePreviewError: e.setPurchasePreviewError,
            })),
            { activeSubscription: v } = (0, o.P5)(),
            { isGift: g } = (0, s.Pv)(),
            {
                subscriptionPlan: x,
                purchaseDisabled: R,
                newItems: M,
            } = ((e) => {
                let { selectedPlanId: t } = e,
                    n = (0, m.t4)((e) => e.purchaseState),
                    r = (0, a.bG)([p.A], () => p.A.get(t));
                i()(null != r, "Missing plan");
                let s = l.useMemo(() => [{ planId: r.id, quantity: 1 }], [r.id]),
                    o = n === u.h.PURCHASING || n === u.h.COMPLETED;
                return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: o, newItems: s };
            })({ selectedPlanId: t }),
            b = !0 === n.loaded,
            L = R || !b,
            j = l.useMemo(
                () =>
                    g
                        ? {
                              type: "premium_one_time_gift_purchase_invoice",
                              params: {
                                  paymentSourceId: n.paymentSourceId,
                                  skuId: E,
                                  subscriptionPlanId: t,
                                  currency: n.currency,
                                  preventFetch: L,
                                  loadId: y.loadId,
                              },
                          }
                        : {
                              type: "premium_checkout_invoice",
                              params: {
                                  items: M,
                                  renewal: !1,
                                  preventFetch: L,
                                  applyEntitlements: !0,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  trialId: r,
                                  metadata: A ?? void 0,
                              },
                          },
                [M, g, L, n.paymentSourceId, n.currency, r, A, y.loadId, t, E],
            ),
            O = l.useMemo(
                () =>
                    g
                        ? null
                        : {
                              type: "premium_renewal_invoice",
                              params: {
                                  subscriptionId: v?.id,
                                  items: M,
                                  renewal: !0,
                                  preventFetch: L,
                                  trialId: r,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  metadata: A ?? void 0,
                              },
                          },
                [g, L, M, r, A, v?.id, n.paymentSourceId, n.currency],
            );
        l.useEffect(() => {
            P(j);
        }, [j, P]),
            l.useEffect(() => {
                S(O);
            }, [O, S]);
        let w = l.useMemo(() => (C && null != _ ? _ : null), [C, _]),
            { oneTimePurchaseNitroGiftInvoicePreview: D, proratedInvoicePreview: U } = l.useMemo(
                () =>
                    g
                        ? { oneTimePurchaseNitroGiftInvoicePreview: _, proratedInvoicePreview: null }
                        : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: _ },
                [g, _],
            ),
            { discountInvoiceError: k } = (0, h.W)({ priceOptions: n, trialId: r, metadata: A }),
            G = l.useMemo(() => I ?? T ?? k, [I, T, k]);
        l.useEffect(() => {
            N(G);
        }, [G, N]);
        let Y = l.useMemo(() => (null != U ? U.subscriptionPeriodEnd : void 0), [U]),
            F = l.useMemo(() => (0, c.UB)(_, x), [_, x]),
            B = l.useMemo(
                () =>
                    (0, d.yf)({
                        error: G,
                        isGift: g,
                        oneTimePurchaseNitroGiftInvoicePreview: D,
                        trialInvoicePreview: w,
                        proratedInvoicePreview: U,
                        renewalInvoicePreview: f,
                        planSwitchLoading: F,
                    }),
                [G, g, D, w, U, f, F],
            );
        return {
            checkoutInvoicePreview: _,
            invoiceSummaryTypeWithPreview: B,
            oneTimePurchaseNitroGiftInvoicePreview: D,
            trialInvoicePreview: w,
            proratedInvoicePreview: U,
            renewalInvoicePreview: f,
            purchaseDisabled: R,
            subscriptionPlan: x,
            invoiceError: G,
            subscriptionPeriodEnd: Y,
        };
    };
