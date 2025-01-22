r.d(n, {
    H: function () {
        return E;
    }
});
var i = r(47120);
var a = r(512722),
    o = r.n(a),
    s = r(570140),
    l = r(355467),
    u = r(159351),
    c = r(366939),
    d = r(16084),
    f = r(255078),
    p = r(626135),
    h = r(74538),
    _ = r(45572),
    m = r(981631),
    g = r(474936);
async function E(e) {
    let { setPurchaseState: n, setHasAcceptedTerms: r, setIsSubmitting: i, setPurchaseError: a, hasRedirectURL: E, setHasRedirectURL: v, isGift: y, baseAnalyticsData: b, analyticsLocation: I, analyticsLocations: T, flowStartTime: S, subscriptionPlan: A, planGroup: C, trialId: N, priceOptions: R, paymentSource: O, isPrepaidPaymentPastDue: D, openInvoiceId: L, premiumSubscription: x, onNext: w, metadata: P, sku: M, skuPricePreview: k, purchaseType: U, referralCode: B, loadId: G, giftInfoOptions: Z, invoicePreview: F } = e;
    n(_.A.PURCHASING), r(!0), i(!0), s.Z.wait(u.fw), a(null);
    try {
        let e, r, i;
        if (
            (p.default.track(m.rMx.PAYMENT_FLOW_COMPLETED, {
                ...b,
                subtotal: null == F ? void 0 : F.subtotal,
                tax: null == F ? void 0 : F.tax,
                expected_amount: null == F ? void 0 : F.total,
                expected_currency: null == F ? void 0 : F.currency,
                duration_ms: Date.now() - S
            }),
            E)
        )
            return;
        if (U === m.GZQ.ONE_TIME)
            o()(null != M, 'SKU must exist and be fetched.'),
                o()(null != k, 'SKUPricePreview must exist.'),
                (e = await (0, d.ZZ)(M.applicationId, M.id, {
                    expectedAmount: k.amount,
                    expectedCurrency: k.currency,
                    isGift: y,
                    paymentSource: O,
                    loadId: G,
                    giftInfoOptions: Z
                }));
        else if ((o()(null != A, 'Missing subscriptionPlan'), y)) {
            o()(null != F, 'Missing invoicePreview');
            let n = F.total,
                r = F.currency;
            e = await (0, d.ZZ)(g.CL, A.skuId, {
                expectedAmount: n,
                expectedCurrency: r,
                paymentSource: O,
                subscriptionPlanId: A.id,
                isGift: !0,
                loadId: G,
                giftInfoOptions: Z
            });
        } else if (D && null != L && null != O && null != x)
            e = m.Uk1.has(O.type)
                ? await (0, l.G)(x, L, O, R.currency)
                : await (0, l.Mg)(
                      x,
                      {
                          paymentSource: O,
                          currency: R.currency
                      },
                      T,
                      I,
                      G
                  );
        else if (null != x) {
            let n = (0, h.al)(x, A.id, 1, new Set(C)),
                r = {
                    paymentSource: O,
                    currency: R.currency
                };
            x.status === m.O0b.PAUSED ? (r.status = m.O0b.ACTIVE) : (r.items = n), (e = await (0, l.Mg)(x, r, T, I, G));
        } else
            e = await (0, c.Ld)({
                planId: A.id,
                currency: R.currency,
                paymentSource: O,
                trialId: N,
                metadata: P,
                referralCode: B,
                loadId: G
            });
        if (e.redirectConfirmation) {
            v(null != e.redirectURL);
            return;
        }
        n(_.A.COMPLETED), 'subscription' in e ? (r = null != e.subscription ? f.Z.createFromServer(e.subscription) : null) : 'entitlements' in e && (i = null != e.entitlements ? e.entitlements : void 0), w(r, i);
    } catch (e) {
        n(_.A.FAIL),
            a(e),
            p.default.track(m.rMx.PAYMENT_FLOW_FAILED, {
                ...b,
                payment_error_code: null == e ? void 0 : e.code,
                payment_source_id: null == O ? void 0 : O.id,
                payment_source_type: null == O ? void 0 : O.type,
                duration_ms: Date.now() - S
            });
    } finally {
        !E && i(!1);
    }
}
