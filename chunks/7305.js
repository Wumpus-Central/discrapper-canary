(n.d(t, {
    STEPS: () => B,
    default: () => H
}),
    n(415506),
    n(388685));
var i = n(255367),
    r = n(73800),
    l = n(442837),
    s = n(570140),
    a = n(821849),
    o = n(100527),
    C = n(906732),
    d = n(367074),
    c = n(717401),
    u = n(509545),
    p = n(78839),
    x = n(669079),
    h = n(987209),
    f = n(563132),
    j = n(409813),
    m = n(107998),
    _ = n(791785),
    L = n(276442),
    y = n(793541),
    g = n(380898),
    E = n(710094),
    S = n(293858),
    v = n(183813),
    b = n(614223),
    O = n(174827),
    P = n(846464),
    Z = n(184160),
    I = n(48175),
    w = n(981631),
    T = n(474936),
    M = n(388032),
    A = n(236691);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
let N = [j.h8.PLAN_SELECT, j.h8.ADD_PAYMENT_STEPS, j.h8.REVIEW, j.h8.CONFIRM];
function U(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: l, onComplete: o, transitionState: d, initialPlanId: c, subscriptionTier: p, onClose: m, trialId: L, trialFooterMessageOverride: y, reviewWarningMessage: g, openInvoiceId: E, onSubscriptionConfirmation: S, renderPurchaseConfirmation: v, postSuccessGuild: b, followupSKUInfo: O, renderHeader: P, applicationId: Z, guildId: I, referralTrialOfferId: M, skuId: A, returnRef: R, skipConfirm: N = !1, continueSessionToInitialStep: U } = e,
        { analyticsLocations: k } = (0, C.ZP)();
    r.useEffect(() => {
        u.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: B } = (0, f.JL)(),
        { isGift: H, giftMessage: F, giftRecipient: G } = (0, h.wD)(),
        D = H && (0, x.pO)(G) && B === j.h8.PLAN_SELECT;
    return (0, i.jsx)(_.PaymentModal, {
        analyticsLocations: k,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: l,
        analyticsSubscriptionType: w.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        giftMessage: F,
        subscriptionTier: p,
        onClose: m,
        trialId: L,
        isGift: H,
        trialFooterMessageOverride: y,
        reviewWarningMessage: g,
        planGroup: T.Y1,
        openInvoiceId: E,
        onSubscriptionConfirmation: S,
        renderPurchaseConfirmation: v,
        postSuccessGuild: b,
        followupSKUInfo: O,
        renderHeader: P,
        applicationId: Z,
        guildId: I,
        referralTrialOfferId: M,
        skuId: A,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: R,
        skipConfirm: N,
        continueSessionToInitialStep: U
    });
}
function k(e) {
    var t, n;
    let { initialPlanId: r, handleStepChange: l, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, f.JL)(),
        { isGift: d, claimableRewards: u } = (0, h.wD)(),
        p = (0, I.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: s
        }),
        x = (0, b.Fv)(p),
        m = (0, c.id)(C, d, u);
    return (0, i.jsx)(
        L.J,
        ((t = R({}, e)),
        (n = n =
            {
                breadcrumbSteps: N,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == r ? j.h8.PLAN_SELECT : j.h8.REVIEW;
                    (x && (t = j.h8.REVIEW), m && e.length < 1 && (t = j.h8.SELECT_FREE_SKU), l(t, { trackedFromStep: j.h8.PAYMENT_TYPE }));
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
let B = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(_.I, R({}, e))
    },
    {
        key: j.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(P.q, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: j.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(Z.x, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: j.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(O.x, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, b.Fv)(e) ? null : M.intl.string(M.t['r+SebW'])),
            sectionHeaderText: () => M.intl.string(M.t.UKbp1N)
        }
    },
    {
        key: j.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(k, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, b.Fv)(e) ? null : M.intl.string(M.t.Sb6wIy))
        }
    },
    {
        key: j.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(g.Z, {})
    },
    {
        key: j.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(y.Z, {})
    },
    {
        key: j.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(E.l, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, b.Fv)(e) ? M.intl.string(M.t.UKbp1N) : M.intl.string(M.t.QBnNHh))
        }
    },
    {
        key: j.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(S.b, R({}, e))
    },
    {
        key: j.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(v.S, R({}, e)),
        options: {
            bodyClassName: A.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function H(e) {
    let t = (0, l.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
        n = (0, d.Vi)() ? T.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: r } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: s, defaultPlanId: a, giftingOrigin: c, giftMessage: u, giftRecipient: x, giftStyle: j, isGift: _, loadId: L, paymentModalBanner: y, referralCode: g, subscriptionTier: E } = e;
    if (null != E && !Object.values(T.Si).includes(E)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: r,
        children: (0, i.jsx)(f.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: B,
            skuIDs: [...T.YQ],
            isGift: _,
            defaultPlanId: null != n ? n : a,
            referralCode: g,
            children: (0, i.jsx)(m.c1, {
                confirmationFooter: s,
                paymentModalBanner: y,
                children: (0, i.jsx)(h.KB, {
                    isGift: _,
                    giftRecipient: null == x ? void 0 : x,
                    giftMessage: u,
                    giftStyle: j,
                    giftingOrigin: c,
                    children: (0, i.jsx)(U, R({}, e))
                })
            })
        })
    });
}
