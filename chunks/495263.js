"use strict";
n.d(t, { l: () => m });
var r = n(284009),
    i = n.n(r),
    s = n(73153),
    a = n(384904),
    o = n(391048),
    l = n(158032),
    u = n(830382),
    c = n(272207),
    d = n(954571),
    _ = n(927578),
    f = n(566980),
    p = n(652215),
    h = n(788868);
async function m(e) {
    let {
        setPurchaseState: t,
        setHasAcceptedTerms: n,
        setIsSubmitting: r,
        setPurchaseError: m,
        hasRedirectURL: E,
        setHasRedirectURL: g,
        isGift: A,
        baseAnalyticsData: I,
        analyticsLocation: T,
        analyticsLocations: S,
        flowStartTime: y,
        subscriptionPlan: v,
        planGroup: N,
        trialId: C,
        priceOptions: R,
        paymentSource: O,
        isPrepaidPaymentPastDue: b,
        openInvoiceId: D,
        premiumSubscription: L,
        onNext: w,
        metadata: M,
        sku: x,
        skuPricePreview: P,
        purchaseType: k,
        referralCode: U,
        loadId: G,
        giftInfoOptions: F,
        invoicePreview: V,
        orderId: B,
    } = e;
    t(f.h.PURCHASING), n(!0), r(!0), s.h.wait(o.ET), m(null);
    try {
        let e, n, r, s;
        if (
            (d.default.track(p.HAw.PAYMENT_FLOW_COMPLETED, {
                ...I,
                subtotal: V?.subtotal,
                tax: V?.tax,
                expected_amount: V?.total,
                expected_currency: V?.currency,
                duration_ms: Date.now() - y,
            }),
            E)
        )
            return;
        if (k === p.VVm.ONE_TIME)
            i()(null != x, "SKU must exist and be fetched."),
                i()(null != P, "SKUPricePreview must exist."),
                (e = await (0, u.XU)(x.applicationId, x.id, {
                    expectedAmount: P.amount,
                    expectedCurrency: P.currency,
                    isGift: A,
                    paymentSource: O,
                    loadId: G,
                    giftInfoOptions: F,
                    orderId: B,
                }));
        else {
            i()(null != v, "Missing subscriptionPlan"), i()(null != V, "Missing invoicePreview");
            let t = { amount: V.total, currency: V.currency },
                n = (0, _.$Q)((0, _.y8)(v.id, !1, !1, R));
            if (null != L) {
                let e = (0, _.Pg)(L, v.id, 1, new Set(N));
                (e = (0, _.qn)(e)), (n = (0, _.UC)(e, R.currency.toLowerCase(), R.paymentSourceId));
            }
            if (A) {
                let t = V.total,
                    n = V.currency;
                e = await (0, u.XU)(h.tv, v.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: O,
                    subscriptionPlanId: v.id,
                    isGift: !0,
                    loadId: G,
                    giftInfoOptions: F,
                    orderId: B,
                });
            } else if (b && null != D && null != O && null != L)
                e = p.AD1.has(O.type)
                    ? await (0, a.LD)(L, D, O, R.currency, G)
                    : await (0, a.nV)(L, { paymentSource: O, currency: R.currency }, t, n, S, T, G);
            else if (null != L) {
                let r = (0, _.Pg)(L, v.id, 1, new Set(N)),
                    i = { paymentSource: O, currency: R.currency };
                L.status === p.Dmq.PAUSED && (i.status = p.Dmq.ACTIVE),
                    L.isPausedAllowsResumeButNotUpdates || (i.items = r),
                    (e = await (0, a.nV)(L, i, t, n, S, T, G));
            } else
                e = await (0, l.B1)({
                    planId: v.id,
                    currency: R.currency,
                    paymentSource: O,
                    trialId: C,
                    metadata: M,
                    referralCode: U,
                    loadId: G,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: n,
                });
        }
        if (e.redirectConfirmation) return void g(null != e.redirectURL);
        t(f.h.COMPLETED),
            "subscription" in e
                ? (n = null != e.subscription ? c.A.createFromServer(e.subscription) : null)
                : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (s =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            w(n, r, s);
    } catch (e) {
        t(f.h.FAIL),
            m(e),
            d.default.track(p.HAw.PAYMENT_FLOW_FAILED, {
                ...I,
                payment_error_code: e?.code,
                payment_source_id: O?.id,
                payment_source_type: O?.type,
                duration_ms: Date.now() - y,
            });
    } finally {
        E || r(!1);
    }
}
