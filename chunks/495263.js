"use strict";
n.d(t, { l: () => m });
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    s = n(384904),
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
        hasRedirectURL: g,
        setHasRedirectURL: E,
        isGift: A,
        baseAnalyticsData: I,
        analyticsLocation: T,
        analyticsLocations: y,
        flowStartTime: S,
        subscriptionPlan: v,
        planGroup: C,
        trialId: b,
        priceOptions: N,
        paymentSource: R,
        isPrepaidPaymentPastDue: O,
        openInvoiceId: D,
        premiumSubscription: L,
        onNext: w,
        metadata: x,
        sku: P,
        skuPricePreview: M,
        purchaseType: k,
        referralCode: U,
        loadId: G,
        giftInfoOptions: V,
        invoicePreview: F,
        orderId: B,
    } = e;
    t(f.h.PURCHASING), n(!0), r(!0), a.h.wait(o.ET), m(null);
    try {
        let e, n, r, a;
        if (
            (d.default.track(p.HAw.PAYMENT_FLOW_COMPLETED, {
                ...I,
                subtotal: F?.subtotal,
                tax: F?.tax,
                expected_amount: F?.total,
                expected_currency: F?.currency,
                duration_ms: Date.now() - S,
            }),
            g)
        )
            return;
        if (k === p.VVm.ONE_TIME)
            i()(null != P, "SKU must exist and be fetched."),
                i()(null != M, "SKUPricePreview must exist."),
                (e = await (0, u.XU)(P.applicationId, P.id, {
                    expectedAmount: M.amount,
                    expectedCurrency: M.currency,
                    isGift: A,
                    paymentSource: R,
                    loadId: G,
                    giftInfoOptions: V,
                    orderId: B,
                }));
        else {
            i()(null != v, "Missing subscriptionPlan"), i()(null != F, "Missing invoicePreview");
            let t = { amount: F.total, currency: F.currency },
                n = (0, _.$Q)((0, _.y8)(v.id, !1, !1, N));
            if (null != L) {
                let e = (0, _.Pg)(L, v.id, 1, new Set(C));
                (e = (0, _.qn)(e)), (n = (0, _.UC)(e, N.currency.toLowerCase(), N.paymentSourceId));
            }
            if (A) {
                let t = F.total,
                    n = F.currency;
                e = await (0, u.XU)(h.tv, v.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: R,
                    subscriptionPlanId: v.id,
                    isGift: !0,
                    loadId: G,
                    giftInfoOptions: V,
                    orderId: B,
                });
            } else if (O && null != D && null != R && null != L)
                e = p.AD1.has(R.type)
                    ? await (0, s.LD)(L, D, R, N.currency)
                    : await (0, s.nV)(L, { paymentSource: R, currency: N.currency }, t, n, y, T, G);
            else if (null != L) {
                let r = (0, _.Pg)(L, v.id, 1, new Set(C)),
                    i = { paymentSource: R, currency: N.currency };
                L.status === p.Dmq.PAUSED && (i.status = p.Dmq.ACTIVE),
                    L.isPausedAllowsResumeButNotUpdates || (i.items = r),
                    (e = await (0, s.nV)(L, i, t, n, y, T, G));
            } else
                e = await (0, l.B1)({
                    planId: v.id,
                    currency: N.currency,
                    paymentSource: R,
                    trialId: b,
                    metadata: x,
                    referralCode: U,
                    loadId: G,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: n,
                });
        }
        if (e.redirectConfirmation) return void E(null != e.redirectURL);
        t(f.h.COMPLETED),
            "subscription" in e
                ? (n = null != e.subscription ? c.A.createFromServer(e.subscription) : null)
                : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (a =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            w(n, r, a);
    } catch (e) {
        t(f.h.FAIL),
            m(e),
            d.default.track(p.HAw.PAYMENT_FLOW_FAILED, {
                ...I,
                payment_error_code: e?.code,
                payment_source_id: R?.id,
                payment_source_type: R?.type,
                duration_ms: Date.now() - S,
            });
    } finally {
        g || r(!1);
    }
}
