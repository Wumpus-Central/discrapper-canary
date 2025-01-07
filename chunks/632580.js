t.d(n, {
    H: function () {
        return f;
    }
}),
    t(47120);
var i = t(512722),
    l = t.n(i),
    r = t(570140),
    s = t(355467),
    a = t(159351),
    c = t(366939),
    o = t(16084),
    u = t(255078),
    d = t(626135),
    m = t(74538),
    p = t(45572),
    x = t(981631),
    h = t(474936);
async function f(e) {
    let { setPurchaseState: n, setHasAcceptedTerms: t, setIsSubmitting: i, setPurchaseError: f, hasRedirectURL: v, setHasRedirectURL: E, isGift: S, baseAnalyticsData: g, analyticsLocation: j, analyticsLocations: y, flowStartTime: I, subscriptionPlan: P, planGroup: T, trialId: N, priceOptions: b, paymentSource: C, isPrepaidPaymentPastDue: _, openInvoiceId: O, premiumSubscription: A, onNext: Z, metadata: R, sku: w, skuPricePreview: M, purchaseType: L, referralCode: k, loadId: F, giftInfoOptions: D, invoicePreview: U } = e;
    n(p.A.PURCHASING), t(!0), i(!0), r.Z.wait(a.fw), f(null);
    try {
        let e, t, i;
        if (
            (d.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, {
                ...g,
                subtotal: null == U ? void 0 : U.subtotal,
                tax: null == U ? void 0 : U.tax,
                expected_amount: null == U ? void 0 : U.total,
                expected_currency: null == U ? void 0 : U.currency,
                duration_ms: Date.now() - I
            }),
            v)
        )
            return;
        if (L === x.GZQ.ONE_TIME)
            l()(null != w, 'SKU must exist and be fetched.'),
                l()(null != M, 'SKUPricePreview must exist.'),
                (e = await (0, o.ZZ)(w.applicationId, w.id, {
                    expectedAmount: M.amount,
                    expectedCurrency: M.currency,
                    isGift: S,
                    paymentSource: C,
                    loadId: F,
                    giftInfoOptions: D
                }));
        else if ((l()(null != P, 'Missing subscriptionPlan'), S)) {
            l()(null != U, 'Missing invoicePreview');
            let n = U.total,
                t = U.currency;
            e = await (0, o.ZZ)(h.CL, P.skuId, {
                expectedAmount: n,
                expectedCurrency: t,
                paymentSource: C,
                subscriptionPlanId: P.id,
                isGift: !0,
                loadId: F,
                giftInfoOptions: D
            });
        } else if (_ && null != O && null != C && null != A)
            e = x.Uk1.has(C.type)
                ? await (0, s.G)(A, O, C, b.currency)
                : await (0, s.Mg)(
                      A,
                      {
                          paymentSource: C,
                          currency: b.currency
                      },
                      y,
                      j,
                      F
                  );
        else if (null != A) {
            let n = (0, m.al)(A, P.id, 1, new Set(T)),
                t = {
                    paymentSource: C,
                    currency: b.currency
                };
            A.status === x.O0b.PAUSED ? (t.status = x.O0b.ACTIVE) : (t.items = n), (e = await (0, s.Mg)(A, t, y, j, F));
        } else
            e = await (0, c.Ld)({
                planId: P.id,
                currency: b.currency,
                paymentSource: C,
                trialId: N,
                metadata: R,
                referralCode: k,
                loadId: F
            });
        if (e.redirectConfirmation) {
            E(null != e.redirectURL);
            return;
        }
        n(p.A.COMPLETED), 'subscription' in e ? (t = null != e.subscription ? u.Z.createFromServer(e.subscription) : null) : 'entitlements' in e && (i = null != e.entitlements ? e.entitlements : void 0), Z(t, i);
    } catch (e) {
        n(p.A.FAIL),
            f(e),
            d.default.track(x.rMx.PAYMENT_FLOW_FAILED, {
                ...g,
                payment_error_code: null == e ? void 0 : e.code,
                payment_source_id: null == C ? void 0 : C.id,
                payment_source_type: null == C ? void 0 : C.type,
                duration_ms: Date.now() - I
            });
    } finally {
        !v && i(!1);
    }
}
