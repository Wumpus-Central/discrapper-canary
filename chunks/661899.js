n.d(t, { y0: () => w, Ni: () => G, t4: () => k, Q9: () => x, y$: () => F });
var i = n(462180),
    r = n(882035),
    a = n(428865),
    s = n(811391),
    l = n(566980),
    o = n(511484),
    d = n(570221),
    c = n(786300),
    u = n(563020),
    _ = n(365813),
    E = n(652215),
    A = n(504275),
    h = n(219538);
let I = { lastOrderUpdateRevision: 0 };
var f = n(73153),
    p = n(158032),
    T = n(830382),
    g = n(136857),
    m = n(739508),
    S = n(71532),
    N = n(375708);
let C = [E.__0.COMPLETED, E.__0.FAILED, E.__0.CANCELED];
async function O(e) {
    if (null == e) return;
    let { error: t } = await (0, S.ap)(e);
    null != t && (0, m.pM)(Error(t), { extra: { authenticationError: t } });
}
let R = {
    paymentAuthError: null,
    isAwaitingPaymentAuthentication: !1,
    awaitingPaymentId: null,
    paymentAuthWasCancelled: !1,
};
var L = n(811315),
    y = n.n(L),
    D = n(158045),
    v = n(75304),
    b = n(202541),
    M = n(442467),
    P = n(403362),
    U = n(427262);
let w = 1,
    [G, x] = (0, c.A)();
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.x;
    return x()(e, t);
}
function F(e) {
    let {
        checkoutInitParameters: t,
        startingValues: n,
        contextMetadata: c,
        order: m,
        initialPaymentSourceId: S,
        initialCurrency: L,
    } = e;
    return (0, r.h)((e, i) => {
        var r;
        let G,
            x,
            k,
            F =
                ((G = { checkoutContext: null, checkoutPaymentSources: [] }),
                {
                    isPremiumPurchase: () => (0, _.Mx)(i().selectedPlanId).isPremiumPurchase,
                    isPremiumGroupPurchase: () => (0, _.Mx)(i().selectedPlanId).isPremiumGroupPurchase,
                    selectedPlanAttributes: () => (0, _.Mx)(i().selectedPlanId),
                    premiumDiscountOffer: () => i().premiumDiscountInfo.discountOffer ?? null,
                    premiumDiscountPercent: () => {
                        let e = i().premiumDiscountInfo.discountOffer;
                        return null != e ? e.discount.amount : null;
                    },
                    isPremiumDiscountAppliedToCheckoutInvoice: () => {
                        let { discountOffer: e } = i().premiumDiscountInfo,
                            t = i().checkoutInvoicePreview;
                        return null != e && null != e.discount && null != t && (0, u.Ro)(t, e.discount.id);
                    },
                    isCheckoutInvoicePreviewLoading: () => {
                        let e = i().fetchCheckoutInvoicePreviewRequest,
                            t = null == i().checkoutInvoicePreview && null == i().checkoutInvoiceError;
                        return null != e && t;
                    },
                    checkoutContext: () => {
                        let { order: e, checkoutInvoicePreview: t } = i();
                        return (0, _.SB)(e, t);
                    },
                    hasCheckoutContextLoaded: () => null != i().get("checkoutContext"),
                    checkoutStoreCountry: () => {
                        let e = i().get("checkoutContext");
                        return null == e ? null : null != e.store_country ? e.store_country.country : null;
                    },
                    checkoutSelectedCurrency: () => i().checkoutPriceOptions.currency ?? null,
                    checkoutPaymentSources: () => {
                        let e = i().get("checkoutContext");
                        return (
                            e !== G.checkoutContext &&
                                ((G.checkoutContext = e), (G.checkoutPaymentSources = (0, _.wW)(e))),
                            G.checkoutPaymentSources
                        );
                    },
                    checkoutSelectedPaymentSource: () => {
                        let { get: e, paymentSourceId: t } = i();
                        return e("checkoutPaymentSources").find((e) => e.id === t) ?? null;
                    },
                    hasFiatCheckoutPaymentSources: () =>
                        i()
                            .get("checkoutPaymentSources")
                            .some((e) => e.type !== E.hes.TDS_WALLET && e.type !== E.hes.UNKNOWN),
                    isCheckoutDataLoading: () => {
                        let {
                            order: e,
                            checkoutInvoicePreview: t,
                            checkoutInvoiceError: n,
                            purchasePreviewError: r,
                        } = i();
                        return null == n && null == r && (null == t || null == (0, _.SB)(e, t));
                    },
                    primaryInvoicesError: () => i().checkoutInvoiceError ?? i().renewalInvoiceError,
                    isOrderLocked: () => {
                        let { order: e, isOrderSyncing: t, isOrderSigning: n } = i();
                        return null != e && (t || n);
                    },
                });
        return {
            ...(0, A.p)(e, i, t),
            ...{
                startedPaymentFlowWithPaymentSources: n.startedPaymentFlowWithPaymentSources,
                startingPremiumSubscriptionPlanId: n.startingPremiumSubscriptionPlanId,
                startingFractionalPremiumEndsAt: null,
                captureStartingPremiumSubscriptionPlanId: (t) => {
                    null == i().startingPremiumSubscriptionPlanId && e({ startingPremiumSubscriptionPlanId: t });
                },
                captureStartingFractionalPremiumEndsAt: (t) => {
                    null == i().startingFractionalPremiumEndsAt && e({ startingFractionalPremiumEndsAt: t });
                },
                captureStartingPaymentFlowWithPaymentSources: (t) => {
                    null == i().startedPaymentFlowWithPaymentSources && e({ startedPaymentFlowWithPaymentSources: t });
                },
                startingIsInPastDueCheckout: null,
                setStartingIsInPastDueCheckout: (t) => {
                    null == i().startingIsInPastDueCheckout && e({ startingIsInPastDueCheckout: t });
                },
            },
            ...{
                fetchSetupIntentRequestKey: null,
                fetchSetupIntentPromise: null,
                getOrCreateSetupIntent: function (t) {
                    let { forceRecreate: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = JSON.stringify(t),
                        { fetchSetupIntentRequestKey: a, fetchSetupIntentPromise: s, clearFetchSetupIntent: l } = i();
                    if (!n && null != s && a === r) return s;
                    let o = (0, h.w)({ body: t });
                    return (
                        e({ fetchSetupIntentRequestKey: r, fetchSetupIntentPromise: o }),
                        o.catch(() => {
                            i().fetchSetupIntentPromise === o && l();
                        }),
                        o
                    );
                },
                clearFetchSetupIntent: () => {
                    e({ fetchSetupIntentRequestKey: null, fetchSetupIntentPromise: null });
                },
                linkWalletEnabled: !0,
                setLinkWalletEnabled: (t) => {
                    e({ linkWalletEnabled: t });
                },
            },
            ...((r = () => i().order),
            {
                ...I,
                handleOrderUpdate: (t) => {
                    let { orderId: n, revision: i } = t,
                        a = r();
                    null != n &&
                        null != i &&
                        null != a &&
                        a.id === n &&
                        e((e) => (i > e.lastOrderUpdateRevision ? { lastOrderUpdateRevision: i } : e));
                },
            }),
            ...{
                ...R,
                handlePaymentFailure: (t) => {
                    let { error: n } = t,
                        { code: r, paymentId: a } = n;
                    if (r !== g.tG.CONFIRMATION_REQUIRED && r !== g.tG.AUTHENTICATION_REQUIRED) {
                        i().isAwaitingPaymentAuthentication && e({ isAwaitingPaymentAuthentication: !1 });
                        return;
                    }
                    i().isAwaitingPaymentAuthentication ||
                        (e({
                            isAwaitingPaymentAuthentication: !0,
                            awaitingPaymentId: a ?? null,
                            paymentAuthWasCancelled: !1,
                        }),
                        r === g.tG.AUTHENTICATION_REQUIRED && O(a));
                },
                handlePaymentUpdate: (t) => {
                    let { payment: n } = t;
                    if (i().isAwaitingPaymentAuthentication && n.id === i().awaitingPaymentId && C.includes(n.status)) {
                        if (n.status === E.__0.FAILED) {
                            let t = n.metadata?.billing_error_code,
                                i = t === g.tG.BILLING_INSUFFICIENT_FUNDS ? t : null;
                            e({
                                isAwaitingPaymentAuthentication: !1,
                                awaitingPaymentId: null,
                                paymentAuthError: new g.Ay(N.intl.string(N.t.khEaRI), i),
                            });
                            return;
                        }
                        (e({ isAwaitingPaymentAuthentication: !1, awaitingPaymentId: null, paymentAuthError: null }),
                            f.h.wait(p.ET),
                            f.h.wait(T.T3));
                    }
                },
                handlePaymentAuthenticationError: (t) => {
                    let { error: n } = t;
                    e({ paymentAuthError: n, isAwaitingPaymentAuthentication: !1 });
                },
                handlePaymentAuthenticationCancel: () => {
                    e({
                        isAwaitingPaymentAuthentication: !1,
                        awaitingPaymentId: null,
                        paymentAuthError: null,
                        paymentAuthWasCancelled: !0,
                    });
                },
                resetPaymentAuthentication: () => e({ ...R }),
            },
            ...{
                expressCheckoutSubmitting: !1,
                setExpressCheckoutSubmitting: (t) => e({ expressCheckoutSubmitting: t }),
                getShouldUseStripeExpressCheckout: () => {
                    let e = i().getSharedTenantParams();
                    return (
                        !!((0, U.Gn)() || "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, P.m6)()) &&
                        null != e &&
                        !!e.shouldUseStripeExpressCheckout
                    );
                },
            },
            ...((x = []),
            (k = { premiumPlanOptions: null }),
            {
                getShouldDisallowPlanSelection: () => {
                    let e = i().getTenantParams(v.C.PREMIUM_CHECKOUT);
                    return null != e && (e.shouldDisallowPlanSelection ?? !1);
                },
                getIsInOneStepSubscriptionCheckout: (e) => {
                    let { isTrial: t, selectedSkuId: n } = e,
                        {
                            isGift: r,
                            selectedSkuId: a,
                            startedPaymentFlowWithPaymentSources: s,
                            getShouldDisallowPlanSelection: l,
                            getShouldUseStripeExpressCheckout: o,
                        } = i();
                    return (
                        !!(l() || o()) ||
                        (0, _.IF)({
                            isTrial: t,
                            isGift: r,
                            selectedSkuId: n ?? a,
                            startedPaymentFlowWithPaymentSources: s,
                        })
                    );
                },
                getVerifiedTrialId: (e) => {
                    let { trialId: t } = e,
                        { referralTrialOfferId: n, selectedSkuId: r, get: a } = i(),
                        s = a("isPremiumPurchase"),
                        l = t ?? n ?? null,
                        o = null != l && l in b.kb ? b.kb[l].skus : [];
                    return null != l && (!s || o.includes(r)) ? l : null;
                },
                getEffectivePlanGroup: (e) => {
                    let { planGroup: t } = e,
                        { selectedPlanId: n } = i();
                    if (null != t && (null == n || t.includes(n))) return t;
                    if (null != n) {
                        if ((0, D.xq)(n)) return b.LE;
                        if ((0, D.z4)(n)) return b.DA;
                    }
                    return x;
                },
                getPremiumPlanOptionsOrNull: () => {
                    let { selectedSkuId: e, defaultPlanId: t, get: n } = i(),
                        r = n("isPremiumPurchase");
                    try {
                        let n = (0, D.Tm)({ skuId: e, isPremium: r, defaultPlanId: t });
                        if (y()(n, k.premiumPlanOptions)) return k.premiumPlanOptions;
                        return ((k.premiumPlanOptions = n), n);
                    } catch (e) {
                        return null;
                    }
                },
            }),
            ...(0, M.d)(e, i),
            get: (e) => (null != F[e] ? F[e]() : null),
            contextMetadata: c,
            order: m,
            orderRecord: null != m ? s.A.createFromServer(m) : null,
            setOrder: (t) => e((e) => (0, _.N4)(e, t)),
            selectedSkuId: void 0,
            selectedPlanId: void 0,
            setSelectedSkuId: (t) =>
                e((e) => {
                    let n = t ?? void 0;
                    return n === e.selectedSkuId ? e : { selectedSkuId: n, quantity: w };
                }),
            setSelectedPlanId: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shouldUpdateQuantity: !0 },
                    i = t ?? void 0;
                return n.shouldUpdateQuantity ? e({ selectedPlanId: i, quantity: w }) : e({ selectedPlanId: i });
            },
            quantity: w,
            setQuantity: (t) => e({ quantity: t }),
            fetchCheckoutInvoicePreviewRequest: null,
            setFetchCheckoutInvoicePreviewRequest: (t) => e({ fetchCheckoutInvoicePreviewRequest: (0, _.Rn)(t, i) }),
            checkoutInvoicePreview: null == m || (0, a.L)(m) ? null : d.A.createFromOrder(m),
            checkoutInvoiceError: null,
            setCheckoutInvoicePreview: (t, n) =>
                e((e) => ({
                    checkoutInvoicePreview: t ?? null,
                    checkoutInvoiceError: n ?? null,
                    pendingPaymentSourceId: null != t && null == e.order ? null : e.pendingPaymentSourceId,
                })),
            fetchRenewalInvoicePreviewRequest: null,
            setFetchRenewalInvoicePreviewRequest: (t) => e({ fetchRenewalInvoicePreviewRequest: (0, _.Rn)(t, i) }),
            renewalInvoicePreview: null,
            renewalInvoiceError: null,
            setRenewalInvoicePreview: (t, n) => e({ renewalInvoicePreview: t ?? null, renewalInvoiceError: n ?? null }),
            premiumDiscountInfo: o.TI,
            setPremiumDiscountInfo: (t) => e({ premiumDiscountInfo: t }),
            entitlementsGranted: [],
            setEntitlementsGranted: (t) => e({ entitlementsGranted: t }),
            hasAcceptedTerms: !1,
            setHasAcceptedTerms: (t) => e({ hasAcceptedTerms: t }),
            checkoutReviewButtonLabel: "",
            setCheckoutReviewButtonLabel: (t) => e({ checkoutReviewButtonLabel: t }),
            paymentSourceId: S,
            setPaymentSourceId: (t) => e({ paymentSourceId: t ?? null }),
            applyWalletBalance: null,
            setApplyWalletBalance: (t) => e({ applyWalletBalance: t }),
            pendingPaymentSourceId: null,
            setPendingPaymentSourceId: (t) => e({ pendingPaymentSourceId: t ?? null }),
            hasAddedPaymentSourceThisSession: !1,
            setHasAddedPaymentSourceThisSession: () => e({ hasAddedPaymentSourceThisSession: !0 }),
            isOrderSyncing: !1,
            setIsOrderSyncing: (t) => e({ isOrderSyncing: t }),
            isOrderSigning: !1,
            setIsOrderSigning: (t) => e({ isOrderSigning: t }),
            orderSyncError: null,
            setOrderSyncError: (t) => e({ orderSyncError: t ?? null }),
            checkoutPriceOptions: { paymentSourceId: S ?? void 0, currency: L, loaded: !1 },
            setCheckoutPriceOptions: (t) => e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, ...t } })),
            setCheckoutCurrency: (t) =>
                e((e) => ({ checkoutPriceOptions: { ...e.checkoutPriceOptions, currency: t ?? void 0 } })),
            purchaseState: l.h.WAITING,
            setPurchaseState: (t) => e({ purchaseState: t }),
            appliedUserDiscounts: [],
            setAppliedUserDiscounts: (t) => e({ appliedUserDiscounts: t }),
            purchaseError: null,
            setPurchaseError: (t) => e({ purchaseError: t ?? null }),
            purchasePreviewError: null,
            setPurchasePreviewError: (t) => e({ purchasePreviewError: t ?? null }),
            updatedSubscription: null,
            setUpdatedSubscription: (t) => e({ updatedSubscription: t }),
            readySlideId: null,
            setReadySlideId: (t) => e({ readySlideId: t ?? null }),
        };
    }, i.x);
}
