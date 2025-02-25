n.d(t, {
    STEPS: () => B,
    default: () => F
}),
    n(411104),
    n(47120);
var l = n(200651),
    i = n(192379),
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
    f = n(563132),
    h = n(409813),
    _ = n(107998),
    j = n(791785),
    m = n(276442),
    L = n(793541),
    g = n(380898),
    E = n(710094),
    S = n(213264),
    N = n(92594),
    y = n(293858),
    I = n(183813),
    O = n(614223),
    v = n(174827),
    b = n(846464),
    P = n(184160),
    T = n(48175),
    M = n(981631),
    Z = n(474936),
    w = n(388032),
    k = n(214803);
function U(e) {
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
let A = [h.h8.PLAN_SELECT, h.h8.ADD_PAYMENT_STEPS, h.h8.REVIEW, h.h8.CONFIRM];
function R(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: _, onClose: m, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: E, openInvoiceId: S, onSubscriptionConfirmation: N, renderPurchaseConfirmation: y, postSuccessGuild: I, followupSKUInfo: O, renderHeader: v, applicationId: b, guildId: P, referralTrialOfferId: T, skuId: w, returnRef: k, skipConfirm: U = !1, continueSessionToInitialStep: A } = e,
        { analyticsLocations: R } = (0, C.ZP)();
    i.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H } = (0, f.JL)(),
        { isGift: W, giftMessage: B, giftRecipient: F } = (0, x.wD)(),
        G = W && (0, p.pO)(F) && H === h.h8.PLAN_SELECT;
    return (0, l.jsx)(j.PaymentModal, {
        analyticsLocations: R,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: M.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: u,
        giftMessage: B,
        subscriptionTier: _,
        onClose: m,
        trialId: L,
        isGift: W,
        trialFooterMessageOverride: g,
        reviewWarningMessage: E,
        planGroup: Z.Y1,
        openInvoiceId: S,
        onSubscriptionConfirmation: N,
        renderPurchaseConfirmation: y,
        postSuccessGuild: I,
        followupSKUInfo: O,
        renderHeader: v,
        applicationId: b,
        guildId: P,
        referralTrialOfferId: T,
        skuId: w,
        shakeWhilePurchasing: !0,
        isDynamicModal: G,
        returnRef: k,
        skipConfirm: U,
        continueSessionToInitialStep: A
    });
}
function H(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, f.JL)(),
        { isGift: l } = (0, x.wD)();
    return (0, O.Kp)({
        isTrial: null != e && e,
        isGift: l,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function W(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: s, referralTrialOfferId: r } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, f.JL)(),
        { isGift: c, claimableRewards: u } = (0, x.wD)(),
        p = H(
            (0, T.Z)({
                isGift: c,
                skuId: o,
                referralTrialOfferId: r
            })
        ),
        _ = (0, d.id)(C, c, u);
    return (0, l.jsx)(
        m.J,
        ((t = U({}, e)),
        (n = n =
            {
                breadcrumbSteps: A,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == i ? h.h8.PLAN_SELECT : h.h8.REVIEW;
                    p && (t = h.h8.REVIEW), _ && e.length < 1 && (t = h.h8.SELECT_FREE_SKU), s(t, { trackedFromStep: h.h8.PAYMENT_TYPE });
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
let B = [
    {
        key: null,
        renderStep: (e) => (0, l.jsx)(j.I, U({}, e))
    },
    {
        key: h.h8.SKU_SELECT,
        renderStep: (e) => (0, l.jsx)(b.q, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: h.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, l.jsx)(P.x, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: h.h8.PLAN_SELECT,
        renderStep: (e) => (0, l.jsx)(v.x, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (H(e) ? null : w.NW.string(w.t['r+SebW']))
        }
    },
    {
        key: h.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, l.jsx)(W, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (H(e) ? null : w.NW.string(w.t.Sb6wIy))
        }
    },
    {
        key: h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, l.jsx)(g.Z, {})
    },
    {
        key: h.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, l.jsx)(L.Z, {})
    },
    {
        key: h.h8.REVIEW,
        renderStep: (e) => (0, l.jsx)(E.l, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (H(e) ? w.NW.string(w.t.UKbp1N) : w.NW.string(w.t.QBnNHh))
        }
    },
    {
        key: h.h8.CONFIRM,
        renderStep: (e) => (0, l.jsx)(y.b, U({}, e))
    },
    {
        key: h.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, l.jsx)(I.S, U({}, e)),
        options: {
            bodyClassName: k.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function F(e) {
    let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        i = (0, S.s)('premiumPaymentModal'),
        { confirmationFooter: r, defaultPlanId: a, giftingOrigin: d, giftMessage: c, giftRecipient: p, giftStyle: h, isGift: j, loadId: m, planSelectBanner: L, referralCode: g, repeatPurchase: E, subscriptionTier: y } = e;
    if (null != y && !Object.values(Z.Si).includes(y)) throw Error('subscriptionTier must be a premium subscription');
    return (0, l.jsx)(C.Gt, {
        value: n,
        children: (0, l.jsx)(f.PaymentContextProvider, {
            loadId: m,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: B,
            skuIDs: [...Z.YQ],
            isGift: j,
            defaultPlanId: a,
            referralCode: g,
            repeatPurchase: E,
            children: (0, l.jsx)(_.c1, {
                confirmationFooter: r,
                planSelectBanner: L,
                children: (0, l.jsxs)(x.KB, {
                    isGift: j,
                    giftRecipient: null == p ? void 0 : p,
                    giftMessage: c,
                    giftStyle: h,
                    giftingOrigin: d,
                    children: [(0, l.jsx)(R, U({}, e)), i && (0, l.jsx)(N.t, {})]
                })
            })
        })
    });
}
