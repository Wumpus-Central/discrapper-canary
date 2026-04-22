n.d(t, { l: () => _ });
var l = n(284009),
    i = n.n(l),
    a = n(73153),
    r = n(391048),
    s = n(158032),
    o = n(830382),
    u = n(323082),
    c = n(272207),
    d = n(954571),
    p = n(927578),
    m = n(566980),
    h = n(652215),
    A = n(788868);
async function _(e) {
    let {
        setPurchaseState: t,
        setHasAcceptedTerms: n,
        setIsSubmitting: l,
        setPurchaseError: _,
        hasRedirectURL: C,
        setHasRedirectURL: E,
        isGift: y,
        baseAnalyticsData: f,
        analyticsLocation: P,
        analyticsLocations: S,
        flowStartTime: x,
        subscriptionPlan: T,
        planGroup: N,
        trialId: g,
        priceOptions: I,
        paymentSource: v,
        isPrepaidPaymentPastDue: b,
        openInvoiceId: R,
        premiumSubscription: M,
        onNext: j,
        metadata: L,
        sku: O,
        skuPricePreview: D,
        purchaseType: U,
        referralCode: w,
        loadId: k,
        giftInfoOptions: F,
        invoicePreview: G,
        orderId: B,
    } = e;
    t(m.h.PURCHASING), n(!0), l(!0), a.h.wait(r.ET), _(null);
    try {
        let e, n, l, a;
        if (
            (d.default.track(h.HAw.PAYMENT_FLOW_COMPLETED, {
                ...f,
                subtotal: G?.subtotal,
                tax: G?.tax,
                expected_amount: G?.total,
                expected_currency: G?.currency,
                duration_ms: Date.now() - x,
            }),
            C)
        )
            return;
        if (U === h.VVm.ONE_TIME)
            i()(null != O, "SKU must exist and be fetched."),
                i()(null != D, "SKUPricePreview must exist."),
                (e = await (0, o.XU)(O.applicationId, O.id, {
                    expectedAmount: D.amount,
                    expectedCurrency: D.currency,
                    isGift: y,
                    paymentSource: v,
                    loadId: k,
                    giftInfoOptions: F,
                    orderId: B,
                }));
        else {
            i()(null != T, "Missing subscriptionPlan"), i()(null != G, "Missing invoicePreview");
            let t = { amount: G.total, currency: G.currency },
                n = (0, p.l6)(I, G.checkoutContext?.available_plans),
                l = (0, p.$Q)((0, p.y8)(T.id, !1, !1, n));
            if (null != M) {
                let e = I.currency ?? G.currency,
                    t = (0, p.Pg)(M, T.id, 1, new Set(N));
                (t = (0, p.qn)(t)), (l = (0, p.UC)(t, e.toLowerCase(), I.paymentSourceId));
            }
            if (y) {
                let t = G.total,
                    n = G.currency;
                e = await (0, o.XU)(A.tv, T.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: v,
                    subscriptionPlanId: T.id,
                    isGift: !0,
                    loadId: k,
                    giftInfoOptions: F,
                    orderId: B,
                });
            } else if (b && null != R && null != v && null != M) {
                let n = I.currency ?? G.currency;
                e = h.AD1.has(v.type)
                    ? await (0, u.LD)(M, R, v, n, k)
                    : await (0, u.nV)(M, { paymentSource: v, currency: n }, t, l, S, P, k);
            } else if (null != M) {
                let n = (0, p.Pg)(M, T.id, 1, new Set(N)),
                    i = { paymentSource: v, currency: I.currency ?? G.currency };
                M.status === h.Dmq.PAUSED && (i.status = h.Dmq.ACTIVE),
                    M.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, u.nV)(M, i, t, l, S, P, k));
            } else
                e = await (0, s.B1)({
                    planId: T.id,
                    currency: I.currency ?? G.currency,
                    paymentSource: v,
                    trialId: g,
                    metadata: L,
                    referralCode: w,
                    loadId: k,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        if (e.redirectConfirmation) return void E(null != e.redirectURL);
        t(m.h.COMPLETED),
            "subscription" in e
                ? (n = null != e.subscription ? c.A.createFromServer(e.subscription) : null)
                : "entitlements" in e && (l = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (a =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            j(n, l, a);
    } catch (e) {
        t(m.h.FAIL),
            _(e),
            d.default.track(h.HAw.PAYMENT_FLOW_FAILED, {
                ...f,
                payment_error_code: e?.code,
                payment_source_id: v?.id,
                payment_source_type: v?.type,
                duration_ms: Date.now() - x,
            });
    } finally {
        C || l(!1);
    }
}
