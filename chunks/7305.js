n.d(t, {
    STEPS: () => w,
    default: () => H
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
    g = n(793541),
    L = n(380898),
    E = n(710094),
    y = n(293858),
    S = n(183813),
    v = n(614223),
    P = n(174827),
    b = n(846464),
    I = n(184160),
    T = n(48175),
    M = n(981631),
    Z = n(474936),
    N = n(388032),
    O = n(236691);
function R(e) {
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
let k = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function U(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: j, onClose: _, trialId: g, trialFooterMessageOverride: L, reviewWarningMessage: E, openInvoiceId: y, onSubscriptionConfirmation: S, renderPurchaseConfirmation: v, postSuccessGuild: P, followupSKUInfo: b, renderHeader: I, applicationId: T, guildId: N, referralTrialOfferId: O, skuId: R, returnRef: k, skipConfirm: U = !1, continueSessionToInitialStep: A } = e,
        { analyticsLocations: w } = (0, C.ZP)();
    l.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H } = (0, h.JL)(),
        { isGift: F, giftMessage: B, giftRecipient: G } = (0, x.wD)(),
        D = F && (0, p.pO)(G) && H === f.h8.PLAN_SELECT;
    return (0, i.jsx)(m.PaymentModal, {
        analyticsLocations: w,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: M.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: u,
        giftMessage: B,
        subscriptionTier: j,
        onClose: _,
        trialId: g,
        isGift: F,
        trialFooterMessageOverride: L,
        reviewWarningMessage: E,
        planGroup: Z.Y1,
        openInvoiceId: y,
        onSubscriptionConfirmation: S,
        renderPurchaseConfirmation: v,
        postSuccessGuild: P,
        followupSKUInfo: b,
        renderHeader: I,
        applicationId: T,
        guildId: N,
        referralTrialOfferId: O,
        skuId: R,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: k,
        skipConfirm: U,
        continueSessionToInitialStep: A
    });
}
function A(e) {
    var t, n;
    let { initialPlanId: l, handleStepChange: s, referralTrialOfferId: r } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, h.JL)(),
        { isGift: c, claimableRewards: u } = (0, x.wD)(),
        p = (0, T.Z)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: r
        }),
        j = (0, v.Fv)(p),
        m = (0, d.id)(C, c, u);
    return (0, i.jsx)(
        _.J,
        ((t = R({}, e)),
        (n = n =
            {
                breadcrumbSteps: k,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == l ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    j && (t = f.h8.REVIEW), m && e.length < 1 && (t = f.h8.SELECT_FREE_SKU), s(t, { trackedFromStep: f.h8.PAYMENT_TYPE });
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
let w = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(m.I, R({}, e))
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(b.q, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(I.x, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(P.x, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? null : N.intl.string(N.t['r+SebW'])),
            sectionHeaderText: (e) => (e ? N.intl.string(N.t.H6nk1t) : N.intl.string(N.t.ovf4EB))
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(A, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? null : N.intl.string(N.t.Sb6wIy))
        }
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(L.Z, {})
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(g.Z, {})
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(E.l, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? N.intl.string(N.t.UKbp1N) : N.intl.string(N.t.QBnNHh))
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(y.b, R({}, e))
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(S.S, R({}, e)),
        options: {
            bodyClassName: O.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function H(e) {
    let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: l, defaultPlanId: r, giftingOrigin: a, giftMessage: d, giftRecipient: c, giftStyle: p, isGift: f, loadId: m, paymentModalBanner: _, referralCode: g, repeatPurchase: L, subscriptionTier: E } = e;
    if (null != E && !Object.values(Z.Si).includes(E)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: n,
        children: (0, i.jsx)(h.PaymentContextProvider, {
            loadId: m,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: w,
            skuIDs: [...Z.YQ],
            isGift: f,
            defaultPlanId: r,
            referralCode: g,
            repeatPurchase: L,
            children: (0, i.jsx)(j.c1, {
                confirmationFooter: l,
                paymentModalBanner: _,
                children: (0, i.jsx)(x.KB, {
                    isGift: f,
                    giftRecipient: null == c ? void 0 : c,
                    giftMessage: d,
                    giftStyle: p,
                    giftingOrigin: a,
                    children: (0, i.jsx)(U, R({}, e))
                })
            })
        })
    });
}
