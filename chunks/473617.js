"use strict";
n.d(t, { E: () => f, V: () => p });
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(937008),
    l = n(566980),
    u = n(800471),
    c = n(299301),
    d = n(97352),
    _ = n(211159),
    h = n(699595);
let f = (e) => {
        let {
                fetchCheckoutInvoicePreviewRequest: t,
                fetchRenewalInvoicePreviewRequest: n,
                shouldAllowNullState: r = !1,
            } = e,
            { setFetchCheckoutInvoicePreviewRequest: s, setFetchRenewalInvoicePreviewRequest: a } = (0, _.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            }));
        i.useEffect(() => {
            (r || null != t) && s(t);
        }, [t, s, r]),
            i.useEffect(() => {
                (r || null != n) && a(n);
            }, [n, a, r]);
    },
    p = (e) => {
        let { selectedPlanId: t, priceOptions: n, trialId: r, metadata: f, isTrial: p = !1 } = e,
            {
                selectedSkuId: E,
                contextMetadata: m,
                setFetchCheckoutInvoicePreviewRequest: g,
                setFetchRenewalInvoicePreviewRequest: A,
                checkoutInvoicePreview: I,
                checkoutInvoiceError: T,
                renewalInvoicePreview: S,
                renewalInvoiceError: y,
                setPurchasePreviewError: C,
                activeSubscription: N,
            } = (0, _.t4)((e) => ({
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
            { isGift: v } = (0, o.Pv)(),
            {
                subscriptionPlan: R,
                purchaseDisabled: O,
                newItems: b,
            } = ((e) => {
                let { selectedPlanId: t } = e,
                    n = (0, _.t4)((e) => e.purchaseState),
                    r = (0, a.bG)([d.A], () => d.A.get(t));
                s()(null != r, "Missing plan");
                let o = i.useMemo(() => [{ planId: r.id, quantity: 1 }], [r.id]),
                    u = n === l.h.PURCHASING || n === l.h.COMPLETED;
                return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: u, newItems: o };
            })({ selectedPlanId: t }),
            D = !0 === n.loaded,
            L = O || !D,
            w = i.useMemo(
                () =>
                    v
                        ? {
                              type: "premium_one_time_gift_purchase_invoice",
                              params: {
                                  paymentSourceId: n.paymentSourceId,
                                  skuId: E,
                                  subscriptionPlanId: t,
                                  currency: n.currency,
                                  preventFetch: L,
                                  loadId: m.loadId,
                              },
                          }
                        : {
                              type: "premium_checkout_invoice",
                              params: {
                                  items: b,
                                  renewal: !1,
                                  preventFetch: L,
                                  applyEntitlements: !0,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  trialId: r,
                                  metadata: f ?? void 0,
                                  loadId: m.loadId,
                              },
                          },
                [b, v, L, n.paymentSourceId, n.currency, r, f, m.loadId, t, E],
            ),
            M = i.useMemo(
                () =>
                    v
                        ? null
                        : {
                              type: "premium_renewal_invoice",
                              params: {
                                  subscriptionId: N?.id,
                                  items: b,
                                  renewal: !0,
                                  preventFetch: L,
                                  trialId: r,
                                  paymentSourceId: n.paymentSourceId,
                                  currency: n.currency,
                                  metadata: f ?? void 0,
                              },
                          },
                [v, L, b, r, f, N?.id, n.paymentSourceId, n.currency],
            );
        i.useEffect(() => {
            g(w);
        }, [w, g]),
            i.useEffect(() => {
                A(M);
            }, [M, A]);
        let P = i.useMemo(() => (p && null != I ? I : null), [p, I]),
            { oneTimePurchaseNitroGiftInvoicePreview: x, proratedInvoicePreview: k } = i.useMemo(
                () =>
                    v
                        ? { oneTimePurchaseNitroGiftInvoicePreview: I, proratedInvoicePreview: null }
                        : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: I },
                [v, I],
            ),
            { discountInvoiceError: U } = (0, h.W)({ priceOptions: n, trialId: r, metadata: f }),
            G = i.useMemo(() => T ?? y ?? U, [T, y, U]);
        i.useEffect(() => {
            C(G);
        }, [G, C]);
        let F = i.useMemo(() => (null != k ? k.subscriptionPeriodEnd : void 0), [k]),
            V = i.useMemo(() => (0, u.UB)(I, R), [I, R]),
            B = i.useMemo(
                () =>
                    (0, c.yf)({
                        error: G,
                        isGift: v,
                        oneTimePurchaseNitroGiftInvoicePreview: x,
                        trialInvoicePreview: P,
                        proratedInvoicePreview: k,
                        renewalInvoicePreview: S,
                        planSwitchLoading: V,
                    }),
                [G, v, x, P, k, S, V],
            );
        return {
            checkoutInvoicePreview: I,
            invoiceSummaryTypeWithPreview: B,
            oneTimePurchaseNitroGiftInvoicePreview: x,
            trialInvoicePreview: P,
            proratedInvoicePreview: k,
            renewalInvoicePreview: S,
            purchaseDisabled: O,
            subscriptionPlan: R,
            invoiceError: G,
            subscriptionPeriodEnd: F,
        };
    };
