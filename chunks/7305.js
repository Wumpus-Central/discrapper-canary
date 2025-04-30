n.d(t, {
    STEPS: () => F,
    default: () => B
}),
    n(415506),
    n(388685);
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
    h = n(409813),
    f = n(107998),
    j = n(791785),
    m = n(276442),
    L = n(793541),
    g = n(380898),
    S = n(710094),
    E = n(293858),
    y = n(183813),
    I = n(614223),
    b = n(174827),
    T = n(846464),
    P = n(184160),
    M = n(48175),
    O = n(981631),
    Z = n(474936),
    v = n(388032),
    N = n(236691);
function k(e) {
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
let A = [h.h8.PLAN_SELECT, h.h8.ADD_PAYMENT_STEPS, h.h8.REVIEW, h.h8.CONFIRM];
function U(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: l, onComplete: a, transitionState: d, initialPlanId: u, subscriptionTier: f, onClose: m, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: S, openInvoiceId: E, onSubscriptionConfirmation: y, renderPurchaseConfirmation: I, postSuccessGuild: b, followupSKUInfo: T, renderHeader: P, applicationId: M, guildId: v, referralTrialOfferId: N, skuId: k, returnRef: A, skipConfirm: U = !1, continueSessionToInitialStep: w } = e,
        { analyticsLocations: R } = (0, C.ZP)();
    i.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: F } = (0, x.JL)(),
        { isGift: B, giftMessage: H, giftRecipient: G } = (0, _.wD)(),
        D = B && (0, p.pO)(G) && F === h.h8.PLAN_SELECT;
    return (0, r.jsx)(j.PaymentModal, {
        analyticsLocations: R,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: l,
        analyticsSubscriptionType: O.NYc.PREMIUM,
        onComplete: a,
        transitionState: d,
        initialPlanId: u,
        giftMessage: H,
        subscriptionTier: f,
        onClose: m,
        trialId: L,
        isGift: B,
        trialFooterMessageOverride: g,
        reviewWarningMessage: S,
        planGroup: Z.Y1,
        openInvoiceId: E,
        onSubscriptionConfirmation: y,
        renderPurchaseConfirmation: I,
        postSuccessGuild: b,
        followupSKUInfo: T,
        renderHeader: P,
        applicationId: M,
        guildId: v,
        referralTrialOfferId: N,
        skuId: k,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: A,
        skipConfirm: U,
        continueSessionToInitialStep: w
    });
}
function w(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, x.JL)(),
        { isGift: r } = (0, _.wD)();
    return (0, I.Kp)({
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
        p = w(
            (0, M.Z)({
                isGift: c,
                skuId: a,
                referralTrialOfferId: s
            })
        ),
        f = (0, d.id)(C, c, u);
    return (0, r.jsx)(
        m.J,
        ((t = k({}, e)),
        (n = n =
            {
                breadcrumbSteps: A,
                onReturn: () => {
                    let e = Object.values(o),
                        t = e.length < 1 && null == i ? h.h8.PLAN_SELECT : h.h8.REVIEW;
                    p && (t = h.h8.REVIEW), f && e.length < 1 && (t = h.h8.SELECT_FREE_SKU), l(t, { trackedFromStep: h.h8.PAYMENT_TYPE });
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
        renderStep: (e) => (0, r.jsx)(j.I, k({}, e))
    },
    {
        key: h.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(T.q, k({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: h.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(P.x, k({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: h.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(b.x, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (w(e) ? null : v.intl.string(v.t['r+SebW']))
        }
    },
    {
        key: h.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(R, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (w(e) ? null : v.intl.string(v.t.Sb6wIy))
        }
    },
    {
        key: h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(g.Z, {})
    },
    {
        key: h.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(L.Z, {})
    },
    {
        key: h.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(S.l, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (w(e) ? v.intl.string(v.t.UKbp1N) : v.intl.string(v.t.QBnNHh))
        }
    },
    {
        key: h.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(E.b, k({}, e))
    },
    {
        key: h.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(y.S, k({}, e)),
        options: {
            bodyClassName: N.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function B(e) {
    let t = (0, l.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, a.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: i, defaultPlanId: s, giftingOrigin: o, giftMessage: d, giftRecipient: c, giftStyle: p, isGift: h, loadId: j, paymentModalBanner: m, referralCode: L, repeatPurchase: g, subscriptionTier: S } = e;
    if (null != S && !Object.values(Z.Si).includes(S)) throw Error('subscriptionTier must be a premium subscription');
    return (0, r.jsx)(C.Gt, {
        value: n,
        children: (0, r.jsx)(x.PaymentContextProvider, {
            loadId: j,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: F,
            skuIDs: [...Z.YQ],
            isGift: h,
            defaultPlanId: s,
            referralCode: L,
            repeatPurchase: g,
            children: (0, r.jsx)(f.c1, {
                confirmationFooter: i,
                paymentModalBanner: m,
                children: (0, r.jsx)(_.KB, {
                    isGift: h,
                    giftRecipient: null == c ? void 0 : c,
                    giftMessage: d,
                    giftStyle: p,
                    giftingOrigin: o,
                    children: (0, r.jsx)(U, k({}, e))
                })
            })
        })
    });
}
