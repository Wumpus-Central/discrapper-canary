n.d(t, {
    STEPS: () => H,
    default: () => B
}),
    n(415506),
    n(388685);
var l = n(255367),
    i = n(73800),
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
    _ = n(791785),
    L = n(276442),
    m = n(793541),
    g = n(380898),
    E = n(710094),
    S = n(293858),
    y = n(183813),
    I = n(614223),
    P = n(174827),
    M = n(846464),
    O = n(184160),
    Z = n(48175),
    T = n(981631),
    b = n(474936),
    v = n(388032),
    N = n(236691);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let A = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function U(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: j, onClose: L, trialId: m, trialFooterMessageOverride: g, reviewWarningMessage: E, openInvoiceId: S, onSubscriptionConfirmation: y, renderPurchaseConfirmation: I, postSuccessGuild: P, followupSKUInfo: M, renderHeader: O, applicationId: Z, guildId: v, referralTrialOfferId: N, skuId: k, returnRef: A, skipConfirm: U = !1, continueSessionToInitialStep: R } = e,
        { analyticsLocations: w } = (0, C.ZP)();
    i.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H } = (0, h.JL)(),
        { isGift: B, giftMessage: F, giftRecipient: G } = (0, x.wD)(),
        D = B && (0, p.pO)(G) && H === f.h8.PLAN_SELECT;
    return (0, l.jsx)(_.PaymentModal, {
        analyticsLocations: w,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: T.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: u,
        giftMessage: F,
        subscriptionTier: j,
        onClose: L,
        trialId: m,
        isGift: B,
        trialFooterMessageOverride: g,
        reviewWarningMessage: E,
        planGroup: b.Y1,
        openInvoiceId: S,
        onSubscriptionConfirmation: y,
        renderPurchaseConfirmation: I,
        postSuccessGuild: P,
        followupSKUInfo: M,
        renderHeader: O,
        applicationId: Z,
        guildId: v,
        referralTrialOfferId: N,
        skuId: k,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: A,
        skipConfirm: U,
        continueSessionToInitialStep: R
    });
}
function R(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, h.JL)(),
        { isGift: l } = (0, x.wD)();
    return (0, I.Kp)({
        isTrial: null != e && e,
        isGift: l,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function w(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: s, referralTrialOfferId: r } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, h.JL)(),
        { isGift: c, claimableRewards: u } = (0, x.wD)(),
        p = R(
            (0, Z.Z)({
                isGift: c,
                skuId: o,
                referralTrialOfferId: r
            })
        ),
        j = (0, d.id)(C, c, u);
    return (0, l.jsx)(
        L.J,
        ((t = k({}, e)),
        (n = n =
            {
                breadcrumbSteps: A,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == i ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    p && (t = f.h8.REVIEW), j && e.length < 1 && (t = f.h8.SELECT_FREE_SKU), s(t, { trackedFromStep: f.h8.PAYMENT_TYPE });
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
let H = [
    {
        key: null,
        renderStep: (e) => (0, l.jsx)(_.I, k({}, e))
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, l.jsx)(M.q, k({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, l.jsx)(O.x, k({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, l.jsx)(P.x, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (R(e) ? null : v.intl.string(v.t['r+SebW']))
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, l.jsx)(w, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (R(e) ? null : v.intl.string(v.t.Sb6wIy))
        }
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, l.jsx)(g.Z, {})
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, l.jsx)(m.Z, {})
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, l.jsx)(E.l, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (R(e) ? v.intl.string(v.t.UKbp1N) : v.intl.string(v.t.QBnNHh))
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, l.jsx)(S.b, k({}, e))
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, l.jsx)(y.S, k({}, e)),
        options: {
            bodyClassName: N.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function B(e) {
    let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: i, defaultPlanId: r, giftingOrigin: a, giftMessage: d, giftRecipient: c, giftStyle: p, isGift: f, loadId: _, paymentModalBanner: L, referralCode: m, repeatPurchase: g, subscriptionTier: E } = e;
    if (null != E && !Object.values(b.Si).includes(E)) throw Error('subscriptionTier must be a premium subscription');
    return (0, l.jsx)(C.Gt, {
        value: n,
        children: (0, l.jsx)(h.PaymentContextProvider, {
            loadId: _,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H,
            skuIDs: [...b.YQ],
            isGift: f,
            defaultPlanId: r,
            referralCode: m,
            repeatPurchase: g,
            children: (0, l.jsx)(j.c1, {
                confirmationFooter: i,
                paymentModalBanner: L,
                children: (0, l.jsx)(x.KB, {
                    isGift: f,
                    giftRecipient: null == c ? void 0 : c,
                    giftMessage: d,
                    giftStyle: p,
                    giftingOrigin: a,
                    children: (0, l.jsx)(U, k({}, e))
                })
            })
        })
    });
}
