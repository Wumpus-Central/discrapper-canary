(n.d(t, {
    STEPS: () => H,
    default: () => F
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
    c = n(619067),
    u = n(717401),
    p = n(509545),
    x = n(78839),
    h = n(669079),
    f = n(987209),
    j = n(563132),
    m = n(409813),
    _ = n(107998),
    L = n(791785),
    y = n(276442),
    E = n(793541),
    g = n(380898),
    b = n(710094),
    S = n(518727),
    v = n(293858),
    O = n(183813),
    w = n(614223),
    Z = n(174827),
    P = n(846464),
    I = n(184160),
    M = n(48175),
    R = n(981631),
    T = n(474936),
    A = n(388032),
    N = n(236691);
function U(e) {
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
let k = [m.h8.PLAN_SELECT, m.h8.ADD_PAYMENT_STEPS, m.h8.REVIEW, m.h8.CONFIRM];
function G(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: l, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: x, onClose: _, trialId: y, trialFooterMessageOverride: E, reviewWarningMessage: g, openInvoiceId: b, onSubscriptionConfirmation: v, renderPurchaseConfirmation: O, postSuccessGuild: w, followupSKUInfo: Z, renderHeader: P, applicationId: I, guildId: M, referralTrialOfferId: A, skuId: N, returnRef: U, skipConfirm: k = !1, continueSessionToInitialStep: G } = e,
        { analyticsLocations: B } = (0, C.ZP)();
    r.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H, selectedSkuId: F } = (0, j.JL)(),
        { isGift: D, giftMessage: W, giftRecipient: z } = (0, f.wD)(),
        Y = D && (0, h.pO)(z) && H === m.h8.PLAN_SELECT,
        K = (0, c.a)(D, !1, F);
    return (0, i.jsx)(S.Z, {
        shouldPrefetchWowMoment: K,
        visible: K && H === m.h8.CONFIRM,
        children: (0, i.jsx)(L.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: R.NYc.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: u,
            giftMessage: W,
            subscriptionTier: x,
            onClose: _,
            trialId: y,
            isGift: D,
            trialFooterMessageOverride: E,
            reviewWarningMessage: g,
            planGroup: T.Y1,
            openInvoiceId: b,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: O,
            postSuccessGuild: w,
            followupSKUInfo: Z,
            renderHeader: P,
            applicationId: I,
            guildId: M,
            referralTrialOfferId: A,
            skuId: N,
            shakeWhilePurchasing: !0,
            isDynamicModal: Y,
            returnRef: U,
            skipConfirm: k,
            continueSessionToInitialStep: G
        })
    });
}
function B(e) {
    var t, n;
    let { initialPlanId: r, handleStepChange: l, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, j.JL)(),
        { isGift: d, claimableRewards: c } = (0, f.wD)(),
        p = (0, M.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: s
        }),
        x = (0, w.Fv)(p),
        h = (0, u.id)(C, d, c);
    return (0, i.jsx)(
        y.J,
        ((t = U({}, e)),
        (n = n =
            {
                breadcrumbSteps: k,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == r ? m.h8.PLAN_SELECT : m.h8.REVIEW;
                    (x && (t = m.h8.REVIEW), h && e.length < 1 && (t = m.h8.SELECT_FREE_SKU), l(t, { trackedFromStep: m.h8.PAYMENT_TYPE }));
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
let H = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(L.I, U({}, e))
    },
    {
        key: m.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(P.q, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: m.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(I.x, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: m.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(Z.x, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? null : A.intl.string(A.t['r+SebW'])),
            sectionHeaderText: () => A.intl.string(A.t.UKbp1N)
        }
    },
    {
        key: m.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(B, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy))
        }
    },
    {
        key: m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(g.Z, {})
    },
    {
        key: m.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(E.Z, {})
    },
    {
        key: m.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(b.l, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh))
        }
    },
    {
        key: m.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(v.b, U({}, e))
    },
    {
        key: m.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(O.S, U({}, e)),
        options: {
            bodyClassName: N.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function F(e) {
    let t = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        n = (0, d.Vi)() ? T.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: r } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: s, defaultPlanId: a, giftingOrigin: c, giftMessage: u, giftRecipient: p, giftStyle: h, isGift: m, loadId: L, paymentModalBanner: y, referralCode: E, subscriptionTier: g } = e;
    if (null != g && !Object.values(T.Si).includes(g)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: r,
        children: (0, i.jsx)(j.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H,
            skuIDs: [...T.YQ],
            isGift: m,
            defaultPlanId: null != n ? n : a,
            referralCode: E,
            children: (0, i.jsx)(_.c1, {
                confirmationFooter: s,
                paymentModalBanner: y,
                children: (0, i.jsx)(f.KB, {
                    isGift: m,
                    giftRecipient: null == p ? void 0 : p,
                    giftMessage: u,
                    giftStyle: h,
                    giftingOrigin: c,
                    children: (0, i.jsx)(G, U({}, e))
                })
            })
        })
    });
}
