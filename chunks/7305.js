n.d(t, {
    STEPS: () => W,
    default: () => B
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
    _ = n(791785),
    j = n(276442),
    m = n(793541),
    L = n(380898),
    g = n(710094),
    E = n(213264),
    S = n(92594),
    N = n(293858),
    y = n(183813),
    I = n(614223),
    O = n(174827),
    v = n(846464),
    P = n(184160),
    b = n(48175),
    T = n(981631),
    M = n(474936),
    Z = n(388032),
    w = n(214803);
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
let U = [h.h8.PLAN_SELECT, h.h8.ADD_PAYMENT_STEPS, h.h8.REVIEW, h.h8.CONFIRM];
function A(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: j, onClose: m, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: E, openInvoiceId: S, onSubscriptionConfirmation: N, renderPurchaseConfirmation: y, postSuccessGuild: I, followupSKUInfo: O, renderHeader: v, applicationId: P, guildId: b, referralTrialOfferId: Z, skuId: w, returnRef: k, skipConfirm: U = !1, continueSessionToInitialStep: A } = e,
        { analyticsLocations: R } = (0, C.ZP)();
    i.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H } = (0, f.JL)(),
        { isGift: W, giftMessage: B, giftRecipient: F } = (0, x.wD)(),
        G = W && (0, p.pO)(F) && H === h.h8.PLAN_SELECT;
    return (0, l.jsx)(_.PaymentModal, {
        analyticsLocations: R,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: T.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: u,
        giftMessage: B,
        subscriptionTier: j,
        onClose: m,
        trialId: L,
        isGift: W,
        trialFooterMessageOverride: g,
        reviewWarningMessage: E,
        planGroup: M.Y1,
        openInvoiceId: S,
        onSubscriptionConfirmation: N,
        renderPurchaseConfirmation: y,
        postSuccessGuild: I,
        followupSKUInfo: O,
        renderHeader: v,
        applicationId: P,
        guildId: b,
        referralTrialOfferId: Z,
        skuId: w,
        shakeWhilePurchasing: !0,
        isDynamicModal: G,
        returnRef: k,
        skipConfirm: U,
        continueSessionToInitialStep: A
    });
}
function R(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, f.JL)(),
        { isGift: l } = (0, x.wD)();
    return (0, I.Kp)({
        isTrial: null != e && e,
        isGift: l,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function H(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: s, referralTrialOfferId: r } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, f.JL)(),
        { isGift: c, claimableRewards: u } = (0, x.wD)(),
        p = R(
            (0, b.Z)({
                isGift: c,
                skuId: o,
                referralTrialOfferId: r
            })
        ),
        _ = (0, d.id)(C, c, u);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(
            j.J,
            ((t = k({}, e)),
            (n = n =
                {
                    breadcrumbSteps: U,
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
        )
    });
}
let W = [
    {
        key: null,
        renderStep: (e) => (0, l.jsx)(_.I, k({}, e))
    },
    {
        key: h.h8.SKU_SELECT,
        renderStep: (e) => (0, l.jsx)(v.q, k({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: h.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, l.jsx)(P.x, k({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: h.h8.PLAN_SELECT,
        renderStep: (e) => (0, l.jsx)(O.x, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (R(e) ? null : Z.NW.string(Z.t['r+SebW']))
        }
    },
    {
        key: h.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(H, k({}, e)) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (R(e) ? null : Z.NW.string(Z.t.Sb6wIy))
        }
    },
    {
        key: h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, l.jsx)(L.Z, {})
    },
    {
        key: h.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, l.jsx)(m.Z, {})
    },
    {
        key: h.h8.REVIEW,
        renderStep: (e) => (0, l.jsx)(g.l, k({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (R(e) ? Z.NW.string(Z.t.UKbp1N) : Z.NW.string(Z.t.QBnNHh))
        }
    },
    {
        key: h.h8.CONFIRM,
        renderStep: (e) => (0, l.jsx)(N.b, k({}, e))
    },
    {
        key: h.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, l.jsx)(y.S, k({}, e)),
        options: {
            bodyClassName: w.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function B(e) {
    let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        i = (0, E.s)('premiumPaymentModal'),
        { subscriptionTier: r, isGift: a, giftRecipient: d, giftMessage: c, giftStyle: p, giftingOrigin: h, loadId: _, defaultPlanId: j, referralCode: m, repeatPurchase: L } = e;
    if (null != r && !Object.values(M.Si).includes(r)) throw Error('subscriptionTier must be a premium subscription');
    return (0, l.jsx)(C.Gt, {
        value: n,
        children: (0, l.jsx)(f.PaymentContextProvider, {
            loadId: _,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: W,
            skuIDs: [...M.YQ],
            isGift: a,
            defaultPlanId: j,
            referralCode: m,
            repeatPurchase: L,
            children: (0, l.jsxs)(x.KB, {
                isGift: a,
                giftRecipient: null == d ? void 0 : d,
                giftMessage: c,
                giftStyle: p,
                giftingOrigin: h,
                children: [(0, l.jsx)(A, k({}, e)), i && (0, l.jsx)(S.t, {})]
            })
        })
    });
}
