n.d(t, {
    l: () => y,
}),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    s = n(384904),
    o = n(391048),
    l = n(158032),
    c = n(830382),
    u = n(272207),
    d = n(954571),
    f = n(927578),
    p = n(566980),
    _ = n(652215),
    h = n(788868);

function m(e, t, n) {
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
                m(e, t, n[t]);
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
        setPurchaseError: m,
        hasRedirectURL: E,
        setHasRedirectURL: y,
        isGift: O,
        baseAnalyticsData: A,
        analyticsLocation: v,
        analyticsLocations: S,
        flowStartTime: I,
        subscriptionPlan: T,
        planGroup: C,
        trialId: N,
        priceOptions: R,
        paymentSource: w,
        isPrepaidPaymentPastDue: P,
        openInvoiceId: D,
        premiumSubscription: x,
        onNext: L,
        metadata: j,
        sku: M,
        skuPricePreview: k,
        purchaseType: U,
        referralCode: G,
        loadId: V,
        giftInfoOptions: F,
        invoicePreview: B,
        orderId: H,
    } = e;
    t(p.h.PURCHASING), n(!0), r(!0), a.h.wait(o.ET), m(null);
    try {
        let e, n, r, a;
        if (
            (d.default.track(
                _.HAw.PAYMENT_FLOW_COMPLETED,
                b(g({}, A), {
                    subtotal: null == B ? void 0 : B.subtotal,
                    tax: null == B ? void 0 : B.tax,
                    expected_amount: null == B ? void 0 : B.total,
                    expected_currency: null == B ? void 0 : B.currency,
                    duration_ms: Date.now() - I,
                }),
            ),
            E)
        )
            return;
        if (U === _.VVm.ONE_TIME)
            i()(null != M, "SKU must exist and be fetched."),
                i()(null != k, "SKUPricePreview must exist."),
                (e = await (0, c.XU)(M.applicationId, M.id, {
                    expectedAmount: k.amount,
                    expectedCurrency: k.currency,
                    isGift: O,
                    paymentSource: w,
                    loadId: V,
                    giftInfoOptions: F,
                    orderId: H,
                }));
        else {
            i()(null != T, "Missing subscriptionPlan"), i()(null != B, "Missing invoicePreview");
            let t = {
                    amount: B.total,
                    currency: B.currency,
                },
                n = (0, f.$Q)((0, f.y8)(T.id, !1, !1, R));
            if (null != x) {
                let e = (0, f.Pg)(x, T.id, 1, new Set(C));
                (e = (0, f.qn)(e)), (n = (0, f.UC)(e, R.currency.toLowerCase(), R.paymentSourceId));
            }
            if (O) {
                let t = B.total,
                    n = B.currency;
                e = await (0, c.XU)(h.tv, T.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: w,
                    subscriptionPlanId: T.id,
                    isGift: !0,
                    loadId: V,
                    giftInfoOptions: F,
                    orderId: H,
                });
            } else if (P && null != D && null != w && null != x)
                e = _.AD1.has(w.type)
                    ? await (0, s.LD)(x, D, w, R.currency)
                    : await (0, s.nV)(
                          x,
                          {
                              paymentSource: w,
                              currency: R.currency,
                          },
                          t,
                          n,
                          S,
                          v,
                          V,
                      );
            else if (null != x) {
                let r = (0, f.Pg)(x, T.id, 1, new Set(C)),
                    i = {
                        paymentSource: w,
                        currency: R.currency,
                    };
                x.status === _.Dmq.PAUSED && (i.status = _.Dmq.ACTIVE),
                    x.isPausedAllowsResumeButNotUpdates || (i.items = r),
                    (e = await (0, s.nV)(x, i, t, n, S, v, V));
            } else
                e = await (0, l.B1)({
                    planId: T.id,
                    currency: R.currency,
                    paymentSource: w,
                    trialId: N,
                    metadata: j,
                    referralCode: G,
                    loadId: V,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: n,
                });
        }
        if (e.redirectConfirmation) return void y(null != e.redirectURL);
        t(p.h.COMPLETED),
            "subscription" in e
                ? (n = null != e.subscription ? u.A.createFromServer(e.subscription) : null)
                : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (a =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            L(n, r, a);
    } catch (e) {
        t(p.h.FAIL),
            m(e),
            d.default.track(
                _.HAw.PAYMENT_FLOW_FAILED,
                b(g({}, A), {
                    payment_error_code: null == e ? void 0 : e.code,
                    payment_source_id: null == w ? void 0 : w.id,
                    payment_source_type: null == w ? void 0 : w.type,
                    duration_ms: Date.now() - I,
                }),
            );
    } finally {
        E || r(!1);
    }
}
