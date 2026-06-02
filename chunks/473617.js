n.d(t, { E: () => h, V: () => A });
var l = n(64700),
    r = n(284009),
    i = n.n(r),
    a = n(17928),
    s = n(259160),
    o = n(566980),
    u = n(800471),
    c = n(299301),
    d = n(97352),
    p = n(722847),
    m = n(699595);
let h = (e) => {
        let {
                fetchCheckoutInvoicePreviewRequest: t,
                fetchRenewalInvoicePreviewRequest: n,
                shouldAllowNullState: r = !1,
            } = e,
            { setFetchCheckoutInvoicePreviewRequest: i, setFetchRenewalInvoicePreviewRequest: a } = (0, p.t4)((e) => ({
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
    A = (e) => {
        let { selectedPlanId: t, priceOptions: n, trialId: r, metadata: h, isTrial: A = !1 } = e,
            {
                selectedSkuId: C,
                contextMetadata: E,
                setFetchCheckoutInvoicePreviewRequest: y,
                setFetchRenewalInvoicePreviewRequest: P,
                checkoutInvoicePreview: S,
                checkoutInvoiceError: _,
                renewalInvoicePreview: f,
                renewalInvoiceError: I,
                setPurchasePreviewError: T,
                activeSubscription: N,
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
            })),
            { isGift: v } = (0, s.Pv)(),
            {
                subscriptionPlan: g,
                purchaseDisabled: x,
                newItems: R,
            } = ((e) => {
                let { selectedPlanId: t } = e,
                    n = (0, p.t4)((e) => e.purchaseState),
                    r = (0, a.bG)([d.A], () => d.A.get(t));
                i()(null != r, "Missing plan");
                let s = l.useMemo(() => [{ planId: r.id, quantity: 1 }], [r.id]),
                    u = n === o.h.PURCHASING || n === o.h.COMPLETED;
                return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: u, newItems: s };
            })({ selectedPlanId: t }),
            M = !0 === n.loaded,
            b = x || !M,
            L = l.useMemo(
                () =>
                    v
                        ? {
                              type: "premium_one_time_gift_purchase_invoice",
                              params: {
                                  paymentSourceId: n.paymentSourceId,
                                  skuId: C,
                                  subscriptionPlanId: t,
                                  currency: n.currency,
                                  preventFetch: b,
                                  loadId: E.loadId,
                              },
                          }
                        : {
                              type: "premium_checkout_invoice",
                              params: {
                                  items: R,
                                  renewal: !1,
                                  preventFetch: b,
                                  applyEntitlements: !0,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  trialId: r,
                                  metadata: h ?? void 0,
                              },
                          },
                [R, v, b, n.paymentSourceId, n.currency, r, h, E.loadId, t, C],
            ),
            j = l.useMemo(
                () =>
                    v
                        ? null
                        : {
                              type: "premium_renewal_invoice",
                              params: {
                                  subscriptionId: N?.id,
                                  items: R,
                                  renewal: !0,
                                  preventFetch: b,
                                  trialId: r,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  metadata: h ?? void 0,
                              },
                          },
                [v, b, R, r, h, N?.id, n.paymentSourceId, n.currency],
            );
        l.useEffect(() => {
            y(L);
        }, [L, y]),
            l.useEffect(() => {
                P(j);
            }, [j, P]);
        let O = l.useMemo(() => (A && null != S ? S : null), [A, S]),
            { oneTimePurchaseNitroGiftInvoicePreview: w, proratedInvoicePreview: D } = l.useMemo(
                () =>
                    v
                        ? { oneTimePurchaseNitroGiftInvoicePreview: S, proratedInvoicePreview: null }
                        : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: S },
                [v, S],
            ),
            { discountInvoiceError: U } = (0, m.W)({ priceOptions: n, trialId: r, metadata: h }),
            k = l.useMemo(() => _ ?? I ?? U, [_, I, U]);
        l.useEffect(() => {
            T(k);
        }, [k, T]);
        let G = l.useMemo(() => (null != D ? D.subscriptionPeriodEnd : void 0), [D]),
            Y = l.useMemo(() => (0, u.UB)(S, g), [S, g]),
            F = l.useMemo(
                () =>
                    (0, c.yf)({
                        error: k,
                        isGift: v,
                        oneTimePurchaseNitroGiftInvoicePreview: w,
                        trialInvoicePreview: O,
                        proratedInvoicePreview: D,
                        renewalInvoicePreview: f,
                        planSwitchLoading: Y,
                    }),
                [k, v, w, O, D, f, Y],
            );
        return {
            checkoutInvoicePreview: S,
            invoiceSummaryTypeWithPreview: F,
            oneTimePurchaseNitroGiftInvoicePreview: w,
            trialInvoicePreview: O,
            proratedInvoicePreview: D,
            renewalInvoicePreview: f,
            purchaseDisabled: x,
            subscriptionPlan: g,
            invoiceError: k,
            subscriptionPeriodEnd: G,
        };
    };
