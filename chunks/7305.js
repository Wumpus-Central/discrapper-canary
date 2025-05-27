n.d(t, {
    STEPS: () => A,
    default: () => B
}),
    n(415506),
    n(388685);
var i = n(255367),
    l = n(73800),
    s = n(442837),
    r = n(570140),
    a = n(821849),
    o = n(100527),
    C = n(906732),
    d = n(717401),
    c = n(509545),
    u = n(78839),
    p = n(669079),
    x = n(987209),
    h = n(563132),
    f = n(409813),
    j = n(107998),
    m = n(791785),
    _ = n(276442),
    L = n(793541),
    g = n(380898),
    E = n(710094),
    y = n(293858),
    S = n(183813),
    Z = n(614223),
    M = n(174827),
    v = n(846464),
    P = n(184160),
    b = n(48175),
    I = n(981631),
    T = n(474936),
    N = n(388032),
    O = n(236691);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let R = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function k(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: j, onClose: _, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: E, openInvoiceId: y, onSubscriptionConfirmation: S, renderPurchaseConfirmation: Z, postSuccessGuild: M, followupSKUInfo: v, renderHeader: P, applicationId: b, guildId: N, referralTrialOfferId: O, skuId: w, returnRef: R, skipConfirm: k = !1, continueSessionToInitialStep: H } = e,
        { analyticsLocations: U } = (0, C.ZP)();
    l.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: A } = (0, h.JL)(),
        { isGift: B, giftMessage: F, giftRecipient: G } = (0, x.wD)(),
        D = B && (0, p.pO)(G) && A === f.h8.PLAN_SELECT;
    return (0, i.jsx)(m.PaymentModal, {
        analyticsLocations: U,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: I.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: u,
        giftMessage: F,
        subscriptionTier: j,
        onClose: _,
        trialId: L,
        isGift: B,
        trialFooterMessageOverride: g,
        reviewWarningMessage: E,
        planGroup: T.Y1,
        openInvoiceId: y,
        onSubscriptionConfirmation: S,
        renderPurchaseConfirmation: Z,
        postSuccessGuild: M,
        followupSKUInfo: v,
        renderHeader: P,
        applicationId: b,
        guildId: N,
        referralTrialOfferId: O,
        skuId: w,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: R,
        skipConfirm: k,
        continueSessionToInitialStep: H
    });
}
function H(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, h.JL)(),
        { isGift: i } = (0, x.wD)();
    return (0, Z.Kp)({
        isTrial: null != e && e,
        isGift: i,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function U(e) {
    var t, n;
    let { initialPlanId: l, handleStepChange: s, referralTrialOfferId: r } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, h.JL)(),
        { isGift: c, claimableRewards: u } = (0, x.wD)(),
        p = H(
            (0, b.Z)({
                isGift: c,
                skuId: o,
                referralTrialOfferId: r
            })
        ),
        j = (0, d.id)(C, c, u);
    return (0, i.jsx)(
        _.J,
        ((t = w({}, e)),
        (n = n =
            {
                breadcrumbSteps: R,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == l ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    p && (t = f.h8.REVIEW), j && e.length < 1 && (t = f.h8.SELECT_FREE_SKU), s(t, { trackedFromStep: f.h8.PAYMENT_TYPE });
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
let A = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(m.I, w({}, e))
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(v.q, w({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(P.x, w({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(M.x, w({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (H(e) ? null : N.intl.string(N.t['r+SebW']))
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(U, w({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (H(e) ? null : N.intl.string(N.t.Sb6wIy))
        }
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(g.Z, {})
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(L.Z, {})
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(E.l, w({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (H(e) ? N.intl.string(N.t.UKbp1N) : N.intl.string(N.t.QBnNHh))
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(y.b, w({}, e))
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(S.S, w({}, e)),
        options: {
            bodyClassName: O.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function B(e) {
    let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: l, defaultPlanId: r, giftingOrigin: a, giftMessage: d, giftRecipient: c, giftStyle: p, isGift: f, loadId: m, paymentModalBanner: _, referralCode: L, repeatPurchase: g, subscriptionTier: E } = e;
    if (null != E && !Object.values(T.Si).includes(E)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: n,
        children: (0, i.jsx)(h.PaymentContextProvider, {
            loadId: m,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: A,
            skuIDs: [...T.YQ],
            isGift: f,
            defaultPlanId: r,
            referralCode: L,
            repeatPurchase: g,
            children: (0, i.jsx)(j.c1, {
                confirmationFooter: l,
                paymentModalBanner: _,
                children: (0, i.jsx)(x.KB, {
                    isGift: f,
                    giftRecipient: null == c ? void 0 : c,
                    giftMessage: d,
                    giftStyle: p,
                    giftingOrigin: a,
                    children: (0, i.jsx)(k, w({}, e))
                })
            })
        })
    });
}
