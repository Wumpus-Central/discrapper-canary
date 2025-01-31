n.d(t, { H: () => m }), n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(570140),
    s = n(355467),
    o = n(159351),
    l = n(366939),
    u = n(16084),
    c = n(255078),
    d = n(626135),
    f = n(74538),
    _ = n(45572),
    p = n(981631),
    h = n(474936);
async function m(e) {
    let { setPurchaseState: t, setHasAcceptedTerms: n, setIsSubmitting: i, setPurchaseError: m, hasRedirectURL: g, setHasRedirectURL: E, isGift: v, baseAnalyticsData: y, analyticsLocation: I, analyticsLocations: b, flowStartTime: T, subscriptionPlan: S, planGroup: A, trialId: N, priceOptions: C, paymentSource: R, isPrepaidPaymentPastDue: O, openInvoiceId: D, premiumSubscription: x, onNext: L, metadata: P, sku: w, skuPricePreview: M, purchaseType: k, referralCode: U, loadId: G, giftInfoOptions: B, invoicePreview: Z } = e;
    t(_.A.PURCHASING), n(!0), i(!0), a.Z.wait(o.fw), m(null);
    try {
        let e, n, i;
        if (
            (d.default.track(p.rMx.PAYMENT_FLOW_COMPLETED, {
                ...y,
                subtotal: null == Z ? void 0 : Z.subtotal,
                tax: null == Z ? void 0 : Z.tax,
                expected_amount: null == Z ? void 0 : Z.total,
                expected_currency: null == Z ? void 0 : Z.currency,
                duration_ms: Date.now() - T
            }),
            g)
        )
            return;
        if (k === p.GZQ.ONE_TIME)
            r()(null != w, 'SKU must exist and be fetched.'),
                r()(null != M, 'SKUPricePreview must exist.'),
                (e = await (0, u.ZZ)(w.applicationId, w.id, {
                    expectedAmount: M.amount,
                    expectedCurrency: M.currency,
                    isGift: v,
                    paymentSource: R,
                    loadId: G,
                    giftInfoOptions: B
                }));
        else if ((r()(null != S, 'Missing subscriptionPlan'), v)) {
            r()(null != Z, 'Missing invoicePreview');
            let t = Z.total,
                n = Z.currency;
            e = await (0, u.ZZ)(h.CL, S.skuId, {
                expectedAmount: t,
                expectedCurrency: n,
                paymentSource: R,
                subscriptionPlanId: S.id,
                isGift: !0,
                loadId: G,
                giftInfoOptions: B
            });
        } else if (O && null != D && null != R && null != x)
            e = p.Uk1.has(R.type)
                ? await (0, s.G)(x, D, R, C.currency)
                : await (0, s.Mg)(
                      x,
                      {
                          paymentSource: R,
                          currency: C.currency
                      },
                      b,
                      I,
                      G
                  );
        else if (null != x) {
            let t = (0, f.al)(x, S.id, 1, new Set(A)),
                n = {
                    paymentSource: R,
                    currency: C.currency
                };
            x.status === p.O0b.PAUSED ? (n.status = p.O0b.ACTIVE) : (n.items = t), (e = await (0, s.Mg)(x, n, b, I, G));
        } else
            e = await (0, l.Ld)({
                planId: S.id,
                currency: C.currency,
                paymentSource: R,
                trialId: N,
                metadata: P,
                referralCode: U,
                loadId: G
            });
        if (e.redirectConfirmation) {
            E(null != e.redirectURL);
            return;
        }
        t(_.A.COMPLETED), 'subscription' in e ? (n = null != e.subscription ? c.Z.createFromServer(e.subscription) : null) : 'entitlements' in e && (i = null != e.entitlements ? e.entitlements : void 0), L(n, i);
    } catch (e) {
        t(_.A.FAIL),
            m(e),
            d.default.track(p.rMx.PAYMENT_FLOW_FAILED, {
                ...y,
                payment_error_code: null == e ? void 0 : e.code,
                payment_source_id: null == R ? void 0 : R.id,
                payment_source_type: null == R ? void 0 : R.type,
                duration_ms: Date.now() - T
            });
    } finally {
        g || i(!1);
    }
}
