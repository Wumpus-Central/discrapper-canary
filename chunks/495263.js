"use strict";
n.d(t, { l: () => E });
var r = n(284009),
    i = n.n(r),
    s = n(73153),
    a = n(391048),
    o = n(158032),
    l = n(830382),
    u = n(323082),
    c = n(272207),
    d = n(954571),
    _ = n(927578),
    f = n(566980),
    p = n(652215),
    h = n(788868);
async function E(e) {
    let {
        setPurchaseState: t,
        setHasAcceptedTerms: n,
        setIsSubmitting: r,
        setPurchaseError: E,
        hasRedirectURL: m,
        setHasRedirectURL: g,
        isGift: A,
        baseAnalyticsData: I,
        analyticsLocation: T,
        analyticsLocations: S,
        flowStartTime: y,
        subscriptionPlan: N,
        planGroup: v,
        trialId: C,
        priceOptions: O,
        paymentSource: R,
        isPrepaidPaymentPastDue: b,
        openInvoiceId: D,
        premiumSubscription: L,
        onNext: w,
        metadata: M,
        sku: P,
        skuPricePreview: x,
        purchaseType: k,
        referralCode: U,
        loadId: G,
        giftInfoOptions: F,
        invoicePreview: V,
        orderId: B,
    } = e;
    t(f.h.PURCHASING), n(!0), r(!0), s.h.wait(a.ET), E(null);
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
            m)
        )
            return;
        if (k === p.VVm.ONE_TIME)
            i()(null != P, "SKU must exist and be fetched."),
                i()(null != x, "SKUPricePreview must exist."),
                (e = await (0, l.XU)(P.applicationId, P.id, {
                    expectedAmount: x.amount,
                    expectedCurrency: x.currency,
                    isGift: A,
                    paymentSource: R,
                    loadId: G,
                    giftInfoOptions: F,
                    orderId: B,
                }));
        else {
            i()(null != N, "Missing subscriptionPlan"), i()(null != V, "Missing invoicePreview");
            let t = { amount: V.total, currency: V.currency },
                n = (0, _.l6)(O, V.checkoutContext?.available_plans),
                r = (0, _.$Q)((0, _.y8)(N.id, !1, !1, n));
            if (null != L) {
                let e = O.currency ?? V.currency,
                    t = (0, _.Pg)(L, N.id, 1, new Set(v));
                (t = (0, _.qn)(t)), (r = (0, _.UC)(t, e.toLowerCase(), O.paymentSourceId));
            }
            if (A) {
                let t = V.total,
                    n = V.currency;
                e = await (0, l.XU)(h.tv, N.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: R,
                    subscriptionPlanId: N.id,
                    isGift: !0,
                    loadId: G,
                    giftInfoOptions: F,
                    orderId: B,
                });
            } else if (b && null != D && null != R && null != L) {
                let n = O.currency ?? V.currency;
                e = p.AD1.has(R.type)
                    ? await (0, u.LD)(L, D, R, n, G)
                    : await (0, u.nV)(L, { paymentSource: R, currency: n }, t, r, S, T, G);
            } else if (null != L) {
                let n = (0, _.Pg)(L, N.id, 1, new Set(v)),
                    i = { paymentSource: R, currency: O.currency ?? V.currency };
                L.status === p.Dmq.PAUSED && (i.status = p.Dmq.ACTIVE),
                    L.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, u.nV)(L, i, t, r, S, T, G));
            } else
                e = await (0, o.B1)({
                    planId: N.id,
                    currency: O.currency ?? V.currency,
                    paymentSource: R,
                    trialId: C,
                    metadata: M,
                    referralCode: U,
                    loadId: G,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: r,
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
            E(e),
            d.default.track(p.HAw.PAYMENT_FLOW_FAILED, {
                ...I,
                payment_error_code: e?.code,
                payment_source_id: R?.id,
                payment_source_type: R?.type,
                duration_ms: Date.now() - y,
            });
    } finally {
        m || r(!1);
    }
}
