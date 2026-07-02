"use strict";
n.d(t, { E: () => f, V: () => E });
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(937008),
    l = n(566980),
    u = n(800471),
    d = n(299301),
    c = n(97352),
    _ = n(650170),
    h = n(699595);
function f(e) {
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
}
function E(e) {
    let { selectedPlanId: t, priceOptions: n, trialId: r, metadata: f, isTrial: E = !1 } = e,
        {
            selectedSkuId: p,
            contextMetadata: m,
            setFetchCheckoutInvoicePreviewRequest: g,
            setFetchRenewalInvoicePreviewRequest: A,
            checkoutInvoicePreview: I,
            checkoutInvoiceError: T,
            renewalInvoicePreview: S,
            renewalInvoiceError: N,
            setPurchasePreviewError: C,
            activeSubscription: y,
            quantity: v,
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
            quantity: e.quantity,
        })),
        { isGift: R } = (0, o.Pv)(),
        {
            subscriptionPlan: O,
            purchaseDisabled: b,
            newItems: L,
        } = (function (e) {
            let { selectedPlanId: t } = e,
                n = (0, _.t4)((e) => e.purchaseState),
                r = (0, a.bG)([c.A], () => c.A.get(t));
            s()(null != r, "Missing plan");
            let o = i.useMemo(() => [{ planId: r.id, quantity: 1 }], [r.id]),
                u = n === l.h.PURCHASING || n === l.h.COMPLETED;
            return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: u, newItems: o };
        })({ selectedPlanId: t }),
        D = !0 === n.loaded,
        P = b || !D,
        w = i.useMemo(
            () =>
                R
                    ? {
                          type: "premium_one_time_gift_purchase_invoice",
                          params: {
                              paymentSourceId: n.paymentSourceId,
                              skuId: p,
                              subscriptionPlanId: t,
                              currency: n.currency,
                              preventFetch: P,
                              loadId: m.loadId,
                              quantity: v,
                          },
                      }
                    : {
                          type: "premium_checkout_invoice",
                          params: {
                              items: L,
                              renewal: !1,
                              preventFetch: P,
                              applyEntitlements: !0,
                              paymentSourceId: n.paymentSourceId,
                              currency: n.currency,
                              trialId: r,
                              metadata: f ?? void 0,
                              loadId: m.loadId,
                          },
                      },
            [L, R, P, n.paymentSourceId, n.currency, r, f, m.loadId, t, p, v],
        ),
        M = i.useMemo(
            () =>
                R
                    ? null
                    : {
                          type: "premium_renewal_invoice",
                          params: {
                              subscriptionId: y?.id,
                              items: L,
                              renewal: !0,
                              preventFetch: P,
                              trialId: r,
                              paymentSourceId: n.paymentSourceId,
                              currency: n.currency,
                              metadata: f ?? void 0,
                          },
                      },
            [R, P, L, r, f, y?.id, n.paymentSourceId, n.currency],
        );
    i.useEffect(() => {
        g(w);
    }, [w, g]),
        i.useEffect(() => {
            A(M);
        }, [M, A]);
    let x = i.useMemo(() => (E && null != I ? I : null), [E, I]),
        { oneTimePurchaseNitroGiftInvoicePreview: U, proratedInvoicePreview: k } = i.useMemo(
            () =>
                R
                    ? { oneTimePurchaseNitroGiftInvoicePreview: I, proratedInvoicePreview: null }
                    : { oneTimePurchaseNitroGiftInvoicePreview: null, proratedInvoicePreview: I },
            [R, I],
        ),
        { discountInvoiceError: G } = (0, h.W)({ priceOptions: n, trialId: r, metadata: f }),
        V = i.useMemo(() => T ?? N ?? G, [T, N, G]);
    i.useEffect(() => {
        C(V);
    }, [V, C]);
    let F = i.useMemo(() => (null != k ? k.subscriptionPeriodEnd : void 0), [k]),
        B = i.useMemo(() => (0, u.UB)(I, O), [I, O]),
        j = i.useMemo(
            () =>
                (0, d.yf)({
                    error: V,
                    isGift: R,
                    oneTimePurchaseNitroGiftInvoicePreview: U,
                    trialInvoicePreview: x,
                    proratedInvoicePreview: k,
                    renewalInvoicePreview: S,
                    planSwitchLoading: B,
                }),
            [V, R, U, x, k, S, B],
        );
    return {
        checkoutInvoicePreview: I,
        invoiceSummaryTypeWithPreview: j,
        oneTimePurchaseNitroGiftInvoicePreview: U,
        trialInvoicePreview: x,
        proratedInvoicePreview: k,
        renewalInvoicePreview: S,
        purchaseDisabled: b,
        invoiceError: V,
        subscriptionPeriodEnd: F,
    };
}
