n.d(t, { E: () => y, V: () => P });
var l = n(64700),
    r = n(284009),
    i = n.n(r),
    a = n(17928),
    s = n(937008),
    o = n(768050),
    u = n(566980),
    c = n(800471),
    d = n(543767),
    p = n(410516),
    m = n(299301),
    h = n(97352),
    A = n(722847),
    C = n(463376),
    E = n(699595);
let y = (e) => {
        let {
                fetchCheckoutInvoicePreviewRequest: t,
                fetchRenewalInvoicePreviewRequest: n,
                shouldAllowNullState: r = !1,
            } = e,
            { setFetchCheckoutInvoicePreviewRequest: i, setFetchRenewalInvoicePreviewRequest: a } = (0, A.t4)((e) => ({
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
    P = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                trialId: r,
                metadata: y,
                isInOneStepSubscriptionCheckout: P = !1,
                isTrial: S = !1,
            } = e,
            {
                selectedSkuId: _,
                contextMetadata: I,
                setFetchCheckoutInvoicePreviewRequest: f,
                setFetchRenewalInvoicePreviewRequest: T,
                checkoutInvoicePreview: N,
                checkoutInvoiceError: v,
                renewalInvoicePreview: g,
                renewalInvoiceError: x,
                setPurchasePreviewError: R,
            } = (0, A.t4)((e) => ({
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
            { activeSubscription: M } = (0, o.P5)(),
            { isEligibleForDiscount: b, discountOffer: L } = (0, C.i)(),
            j = (0, p.YJ)(L),
            { isGift: O } = (0, s.Pv)(),
            {
                subscriptionPlan: w,
                purchaseDisabled: D,
                newItems: U,
            } = ((e) => {
                let { selectedPlanId: t } = e,
                    n = (0, A.t4)((e) => e.purchaseState),
                    r = (0, a.bG)([h.A], () => h.A.get(t));
                i()(null != r, "Missing plan");
                let s = l.useMemo(() => [{ planId: r.id, quantity: 1 }], [r.id]),
                    o = n === u.h.PURCHASING || n === u.h.COMPLETED;
                return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: o, newItems: s };
            })({ selectedPlanId: t }),
            k = !0 === n.loaded,
            G = D || !k,
            Y = l.useMemo(
                () =>
                    O
                        ? {
                              type: "premium_one_time_gift_purchase_invoice",
                              params: {
                                  paymentSourceId: n.paymentSourceId,
                                  skuId: _,
                                  subscriptionPlanId: t,
                                  currency: n.currency,
                                  preventFetch: G,
                                  loadId: I.loadId,
                              },
                          }
                        : {
                              type: "premium_checkout_invoice",
                              params: {
                                  items: U,
                                  renewal: !1,
                                  preventFetch: G,
                                  applyEntitlements: !0,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  trialId: r,
                                  metadata: y ?? void 0,
                              },
                          },
                [U, O, G, n.paymentSourceId, n.currency, r, y, I.loadId, t, _],
            ),
            F = l.useMemo(
                () =>
                    O
                        ? null
                        : {
                              type: "premium_renewal_invoice",
                              params: {
                                  subscriptionId: M?.id,
                                  items: U,
                                  renewal: !0,
                                  preventFetch: G,
                                  trialId: r,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  metadata: y ?? void 0,
                              },
                          },
                [O, G, U, r, y, M?.id, n.paymentSourceId, n.currency],
            );
        l.useEffect(() => {
            f(Y);
        }, [Y, f]),
            l.useEffect(() => {
                T(F);
            }, [F, T]);
        let B = l.useMemo(() => (S && null != N ? N : null), [S, N]),
            { oneTimePurchaseNitroGiftInvoicePreview: W, proratedInvoicePreview: H } = l.useMemo(
                () =>
                    O
                        ? { oneTimePurchaseNitroGiftInvoicePreview: N, proratedInvoicePreview: null }
                        : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: N },
                [O, N],
            ),
            [V, K] = (0, d.YV)({
                items: null != j ? [{ planId: j, quantity: 1 }] : [],
                renewal: !1,
                preventFetch: !b || null == j || !k,
                trialId: r,
                paymentSourceId: n.paymentSourceId,
                currency: n.currency,
                metadata: y,
            });
        (0, E.c)(V, b);
        let Z = l.useMemo(() => v ?? x ?? K, [v, x, K]);
        l.useEffect(() => {
            R(Z);
        }, [Z, R]);
        let q = l.useMemo(() => (null != H ? H.subscriptionPeriodEnd : void 0), [H]),
            z = l.useMemo(() => (0, c.UB)(P, H, w), [P, H, w]),
            $ = l.useMemo(
                () =>
                    (0, m.yf)({
                        error: Z,
                        isGift: O,
                        oneTimePurchaseNitroGiftInvoicePreview: W,
                        trialInvoicePreview: B,
                        proratedInvoicePreview: H,
                        renewalInvoicePreview: g,
                        planSwitchLoading: z,
                    }),
                [Z, O, W, B, H, g, z],
            );
        return {
            checkoutInvoicePreview: N,
            invoiceSummaryTypeWithPreview: $,
            discountInvoicePreview: V,
            oneTimePurchaseNitroGiftInvoicePreview: W,
            trialInvoicePreview: B,
            proratedInvoicePreview: H,
            renewalInvoicePreview: g,
            purchaseDisabled: D,
            subscriptionPlan: w,
            invoiceError: Z,
            subscriptionPeriodEnd: q,
        };
    };
