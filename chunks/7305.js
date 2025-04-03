n.d(t, {
    STEPS: () => F,
    default: () => B
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(570140),
    o = n(821849),
    a = n(100527),
    C = n(906732),
    d = n(717401),
    c = n(509545),
    u = n(78839),
    p = n(669079),
    _ = n(987209),
    x = n(563132),
    f = n(409813),
    h = n(107998),
    m = n(791785),
    j = n(276442),
    L = n(793541),
    g = n(380898),
    S = n(710094),
    y = n(293858),
    E = n(183813),
    b = n(614223),
    I = n(174827),
    N = n(846464),
    T = n(184160),
    M = n(48175),
    P = n(981631),
    v = n(474936),
    O = n(388032),
    Z = n(236691);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let k = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function A(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: l, onComplete: a, transitionState: d, initialPlanId: u, subscriptionTier: h, onClose: j, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: S, openInvoiceId: y, onSubscriptionConfirmation: E, renderPurchaseConfirmation: b, postSuccessGuild: I, followupSKUInfo: N, renderHeader: T, applicationId: M, guildId: O, referralTrialOfferId: Z, skuId: w, returnRef: k, skipConfirm: A = !1, continueSessionToInitialStep: U } = e,
        { analyticsLocations: R } = (0, C.ZP)();
    i.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: F } = (0, x.JL)(),
        { isGift: B, giftMessage: H, giftRecipient: W } = (0, _.wD)(),
        G = B && (0, p.pO)(W) && F === f.h8.PLAN_SELECT;
    return (0, r.jsx)(m.PaymentModal, {
        analyticsLocations: R,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: l,
        analyticsSubscriptionType: P.NYc.PREMIUM,
        onComplete: a,
        transitionState: d,
        initialPlanId: u,
        giftMessage: H,
        subscriptionTier: h,
        onClose: j,
        trialId: L,
        isGift: B,
        trialFooterMessageOverride: g,
        reviewWarningMessage: S,
        planGroup: v.Y1,
        openInvoiceId: y,
        onSubscriptionConfirmation: E,
        renderPurchaseConfirmation: b,
        postSuccessGuild: I,
        followupSKUInfo: N,
        renderHeader: T,
        applicationId: M,
        guildId: O,
        referralTrialOfferId: Z,
        skuId: w,
        shakeWhilePurchasing: !0,
        isDynamicModal: G,
        returnRef: k,
        skipConfirm: A,
        continueSessionToInitialStep: U
    });
}
function U(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, x.JL)(),
        { isGift: r } = (0, _.wD)();
    return (0, b.Kp)({
        isTrial: null != e && e,
        isGift: r,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function R(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: s } = e,
        { paymentSources: o, selectedSkuId: a, selectedPlan: C } = (0, x.JL)(),
        { isGift: c, claimableRewards: u } = (0, _.wD)(),
        p = U(
            (0, M.Z)({
                isGift: c,
                skuId: a,
                referralTrialOfferId: s
            })
        ),
        h = (0, d.id)(C, c, u);
    return (0, r.jsx)(
        j.J,
        ((t = w({}, e)),
        (n = n =
            {
                breadcrumbSteps: k,
                onReturn: () => {
                    let e = Object.values(o),
                        t = e.length < 1 && null == i ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    p && (t = f.h8.REVIEW), h && e.length < 1 && (t = f.h8.SELECT_FREE_SKU), l(t, { trackedFromStep: f.h8.PAYMENT_TYPE });
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
let F = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(m.I, w({}, e))
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(N.q, w({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(T.x, w({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(I.x, w({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (U(e) ? null : O.NW.string(O.t['r+SebW']))
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(R, w({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (U(e) ? null : O.NW.string(O.t.Sb6wIy))
        }
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(g.Z, {})
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(L.Z, {})
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(S.l, w({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (U(e) ? O.NW.string(O.t.UKbp1N) : O.NW.string(O.t.QBnNHh))
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(y.b, w({}, e))
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(E.S, w({}, e)),
        options: {
            bodyClassName: Z.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function B(e) {
    let t = (0, l.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, a.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: i, defaultPlanId: s, giftingOrigin: o, giftMessage: d, giftRecipient: c, giftStyle: p, isGift: f, loadId: m, paymentModalBanner: j, referralCode: L, repeatPurchase: g, subscriptionTier: S } = e;
    if (null != S && !Object.values(v.Si).includes(S)) throw Error('subscriptionTier must be a premium subscription');
    return (0, r.jsx)(C.Gt, {
        value: n,
        children: (0, r.jsx)(x.PaymentContextProvider, {
            loadId: m,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: F,
            skuIDs: [...v.YQ],
            isGift: f,
            defaultPlanId: s,
            referralCode: L,
            repeatPurchase: g,
            children: (0, r.jsx)(h.c1, {
                confirmationFooter: i,
                paymentModalBanner: j,
                children: (0, r.jsx)(_.KB, {
                    isGift: f,
                    giftRecipient: null == c ? void 0 : c,
                    giftMessage: d,
                    giftStyle: p,
                    giftingOrigin: o,
                    children: (0, r.jsx)(A, w({}, e))
                })
            })
        })
    });
}
