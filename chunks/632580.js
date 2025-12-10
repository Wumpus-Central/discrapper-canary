n.d(t, { H: () => y }), n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(570140),
    o = n(355467),
    s = n(159351),
    l = n(366939),
    c = n(16084),
    u = n(255078),
    d = n(626135),
    f = n(74538),
    p = n(45572),
    _ = n(981631),
    m = n(474936);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function y(e) {
    let {
        setPurchaseState: t,
        setHasAcceptedTerms: n,
        setIsSubmitting: r,
        setPurchaseError: h,
        hasRedirectURL: E,
        setHasRedirectURL: y,
        isGift: O,
        baseAnalyticsData: v,
        analyticsLocation: S,
        analyticsLocations: I,
        flowStartTime: T,
        subscriptionPlan: C,
        planGroup: A,
        trialId: N,
        priceOptions: P,
        paymentSource: R,
        isPrepaidPaymentPastDue: D,
        openInvoiceId: w,
        premiumSubscription: x,
        onNext: L,
        metadata: j,
        sku: M,
        skuPricePreview: k,
        purchaseType: U,
        referralCode: G,
        loadId: Z,
        giftInfoOptions: B,
        invoicePreview: F,
        orderId: V,
    } = e;
    t(p.A.PURCHASING), n(!0), r(!0), a.Z.wait(s.fw), h(null);
    try {
        let e, n, r, a;
        if (
            (d.default.track(
                _.rMx.PAYMENT_FLOW_COMPLETED,
                b(g({}, v), {
                    subtotal: null == F ? void 0 : F.subtotal,
                    tax: null == F ? void 0 : F.tax,
                    expected_amount: null == F ? void 0 : F.total,
                    expected_currency: null == F ? void 0 : F.currency,
                    duration_ms: Date.now() - T,
                }),
            ),
            E)
        )
            return;
        if (U === _.GZQ.ONE_TIME)
            i()(null != M, "SKU must exist and be fetched."),
                i()(null != k, "SKUPricePreview must exist."),
                (e = await (0, c.ZZ)(M.applicationId, M.id, {
                    expectedAmount: k.amount,
                    expectedCurrency: k.currency,
                    isGift: O,
                    paymentSource: R,
                    loadId: Z,
                    giftInfoOptions: B,
                    orderId: V,
                }));
        else {
            i()(null != C, "Missing subscriptionPlan"), i()(null != F, "Missing invoicePreview");
            let t = {
                    amount: F.total,
                    currency: F.currency,
                },
                n = (0, f.BK)((0, f.aS)(C.id, !1, !1, P));
            if (null != x) {
                let e = (0, f.al)(x, C.id, 1, new Set(A));
                (e = (0, f.gB)(e)), (n = (0, f.UX)(e, P.currency.toLowerCase(), P.paymentSourceId));
            }
            if (O) {
                let t = F.total,
                    n = F.currency;
                e = await (0, c.ZZ)(m.CL, C.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: R,
                    subscriptionPlanId: C.id,
                    isGift: !0,
                    loadId: Z,
                    giftInfoOptions: B,
                    orderId: V,
                });
            } else if (D && null != w && null != R && null != x)
                e = _.Uk1.has(R.type)
                    ? await (0, o.G)(x, w, R, P.currency)
                    : await (0, o.Mg)(
                          x,
                          {
                              paymentSource: R,
                              currency: P.currency,
                          },
                          t,
                          n,
                          I,
                          S,
                          Z,
                      );
            else if (null != x) {
                let r = (0, f.al)(x, C.id, 1, new Set(A)),
                    i = {
                        paymentSource: R,
                        currency: P.currency,
                    };
                x.status === _.O0b.PAUSED && (i.status = _.O0b.ACTIVE),
                    x.isPausedAllowsResumeButNotUpdates || (i.items = r),
                    (e = await (0, o.Mg)(x, i, t, n, I, S, Z));
            } else
                e = await (0, l.Ld)({
                    planId: C.id,
                    currency: P.currency,
                    paymentSource: R,
                    trialId: N,
                    metadata: j,
                    referralCode: G,
                    loadId: Z,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: n,
                });
        }
        if (e.redirectConfirmation) return void y(null != e.redirectURL);
        t(p.A.COMPLETED),
            "subscription" in e
                ? (n = null != e.subscription ? u.Z.createFromServer(e.subscription) : null)
                : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (a =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            L(n, r, a);
    } catch (e) {
        t(p.A.FAIL),
            h(e),
            d.default.track(
                _.rMx.PAYMENT_FLOW_FAILED,
                b(g({}, v), {
                    payment_error_code: null == e ? void 0 : e.code,
                    payment_source_id: null == R ? void 0 : R.id,
                    payment_source_type: null == R ? void 0 : R.type,
                    duration_ms: Date.now() - T,
                }),
            );
    } finally {
        E || r(!1);
    }
}
