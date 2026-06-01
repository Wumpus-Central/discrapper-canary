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
        let { selectedPlanId: t, priceOptions: n, trialId: r, metadata: y, isTrial: P = !1 } = e,
            {
                selectedSkuId: S,
                contextMetadata: _,
                setFetchCheckoutInvoicePreviewRequest: I,
                setFetchRenewalInvoicePreviewRequest: f,
                checkoutInvoicePreview: T,
                checkoutInvoiceError: N,
                renewalInvoicePreview: v,
                renewalInvoiceError: g,
                setPurchasePreviewError: x,
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
            { activeSubscription: R } = (0, o.P5)(),
            { isEligibleForDiscount: M, discountOffer: b } = (0, C.i)(),
            L = (0, p.YJ)(b),
            { isGift: j } = (0, s.Pv)(),
            {
                subscriptionPlan: O,
                purchaseDisabled: w,
                newItems: D,
            } = ((e) => {
                let { selectedPlanId: t } = e,
                    n = (0, A.t4)((e) => e.purchaseState),
                    r = (0, a.bG)([h.A], () => h.A.get(t));
                i()(null != r, "Missing plan");
                let s = l.useMemo(() => [{ planId: r.id, quantity: 1 }], [r.id]),
                    o = n === u.h.PURCHASING || n === u.h.COMPLETED;
                return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: o, newItems: s };
            })({ selectedPlanId: t }),
            U = !0 === n.loaded,
            k = w || !U,
            G = l.useMemo(
                () =>
                    j
                        ? {
                              type: "premium_one_time_gift_purchase_invoice",
                              params: {
                                  paymentSourceId: n.paymentSourceId,
                                  skuId: S,
                                  subscriptionPlanId: t,
                                  currency: n.currency,
                                  preventFetch: k,
                                  loadId: _.loadId,
                              },
                          }
                        : {
                              type: "premium_checkout_invoice",
                              params: {
                                  items: D,
                                  renewal: !1,
                                  preventFetch: k,
                                  applyEntitlements: !0,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  trialId: r,
                                  metadata: y ?? void 0,
                              },
                          },
                [D, j, k, n.paymentSourceId, n.currency, r, y, _.loadId, t, S],
            ),
            Y = l.useMemo(
                () =>
                    j
                        ? null
                        : {
                              type: "premium_renewal_invoice",
                              params: {
                                  subscriptionId: R?.id,
                                  items: D,
                                  renewal: !0,
                                  preventFetch: k,
                                  trialId: r,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  metadata: y ?? void 0,
                              },
                          },
                [j, k, D, r, y, R?.id, n.paymentSourceId, n.currency],
            );
        l.useEffect(() => {
            I(G);
        }, [G, I]),
            l.useEffect(() => {
                f(Y);
            }, [Y, f]);
        let F = l.useMemo(() => (P && null != T ? T : null), [P, T]),
            { oneTimePurchaseNitroGiftInvoicePreview: B, proratedInvoicePreview: W } = l.useMemo(
                () =>
                    j
                        ? { oneTimePurchaseNitroGiftInvoicePreview: T, proratedInvoicePreview: null }
                        : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: T },
                [j, T],
            ),
            [H, V] = (0, d.YV)({
                items: null != L ? [{ planId: L, quantity: 1 }] : [],
                renewal: !1,
                preventFetch: !M || null == L || !U,
                trialId: r,
                paymentSourceId: n.paymentSourceId,
                currency: n.currency,
                metadata: y,
            });
        (0, E.c)(H, M);
        let K = l.useMemo(() => N ?? g ?? V, [N, g, V]);
        l.useEffect(() => {
            x(K);
        }, [K, x]);
        let Z = l.useMemo(() => (null != W ? W.subscriptionPeriodEnd : void 0), [W]),
            q = l.useMemo(() => (0, c.UB)(T, O), [T, O]),
            z = l.useMemo(
                () =>
                    (0, m.yf)({
                        error: K,
                        isGift: j,
                        oneTimePurchaseNitroGiftInvoicePreview: B,
                        trialInvoicePreview: F,
                        proratedInvoicePreview: W,
                        renewalInvoicePreview: v,
                        planSwitchLoading: q,
                    }),
                [K, j, B, F, W, v, q],
            );
        return {
            checkoutInvoicePreview: T,
            invoiceSummaryTypeWithPreview: z,
            discountInvoicePreview: H,
            oneTimePurchaseNitroGiftInvoicePreview: B,
            trialInvoicePreview: F,
            proratedInvoicePreview: W,
            renewalInvoicePreview: v,
            purchaseDisabled: w,
            subscriptionPlan: O,
            invoiceError: K,
            subscriptionPeriodEnd: Z,
        };
    };
