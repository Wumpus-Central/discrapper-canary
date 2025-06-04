t.d(n, {
    STEPS: () => R,
    default: () => F
}),
    t(415506),
    t(388685);
var l = t(255367),
    i = t(73800),
    r = t(442837),
    s = t(570140),
    a = t(821849),
    o = t(100527),
    C = t(906732),
    d = t(717401),
    c = t(509545),
    u = t(78839),
    p = t(669079),
    x = t(987209),
    h = t(563132),
    j = t(409813),
    f = t(107998),
    m = t(791785),
    _ = t(276442),
    L = t(793541),
    g = t(380898),
    y = t(710094),
    S = t(293858),
    E = t(183813),
    v = t(614223),
    b = t(174827),
    P = t(846464),
    Z = t(184160),
    O = t(48175),
    I = t(981631),
    w = t(474936),
    M = t(388032),
    T = t(236691);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
let k = [j.h8.PLAN_SELECT, j.h8.ADD_PAYMENT_STEPS, j.h8.REVIEW, j.h8.CONFIRM];
function N(e) {
    let { analyticsLocation: n, analyticsObject: t, analyticsSourceLocation: r, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: f, onClose: _, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: y, openInvoiceId: S, onSubscriptionConfirmation: E, renderPurchaseConfirmation: v, postSuccessGuild: b, followupSKUInfo: P, renderHeader: Z, applicationId: O, guildId: M, referralTrialOfferId: T, skuId: A, returnRef: k, skipConfirm: N = !1, continueSessionToInitialStep: U } = e,
        { analyticsLocations: R } = (0, C.ZP)();
    i.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: F } = (0, h.JL)(),
        { isGift: B, giftMessage: H, giftRecipient: G } = (0, x.wD)(),
        D = B && (0, p.pO)(G) && F === j.h8.PLAN_SELECT;
    return (0, l.jsx)(m.PaymentModal, {
        analyticsLocations: R,
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: r,
        analyticsSubscriptionType: I.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: u,
        giftMessage: H,
        subscriptionTier: f,
        onClose: _,
        trialId: L,
        isGift: B,
        trialFooterMessageOverride: g,
        reviewWarningMessage: y,
        planGroup: w.Y1,
        openInvoiceId: S,
        onSubscriptionConfirmation: E,
        renderPurchaseConfirmation: v,
        postSuccessGuild: b,
        followupSKUInfo: P,
        renderHeader: Z,
        applicationId: O,
        guildId: M,
        referralTrialOfferId: T,
        skuId: A,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: k,
        skipConfirm: N,
        continueSessionToInitialStep: U
    });
}
function U(e) {
    var n, t;
    let { initialPlanId: i, handleStepChange: r, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, h.JL)(),
        { isGift: c, claimableRewards: u } = (0, x.wD)(),
        p = (0, O.Z)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: s
        }),
        f = (0, v.Fv)(p),
        m = (0, d.id)(C, c, u);
    return (0, l.jsx)(
        _.J,
        ((n = A({}, e)),
        (t = t =
            {
                breadcrumbSteps: k,
                onReturn: () => {
                    let e = Object.values(a),
                        n = e.length < 1 && null == i ? j.h8.PLAN_SELECT : j.h8.REVIEW;
                    f && (n = j.h8.REVIEW), m && e.length < 1 && (n = j.h8.SELECT_FREE_SKU), r(n, { trackedFromStep: j.h8.PAYMENT_TYPE });
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        n)
    );
}
let R = [
    {
        key: null,
        renderStep: (e) => (0, l.jsx)(m.I, A({}, e))
    },
    {
        key: j.h8.SKU_SELECT,
        renderStep: (e) => (0, l.jsx)(P.q, A({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: j.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, l.jsx)(Z.x, A({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: j.h8.PLAN_SELECT,
        renderStep: (e) => (0, l.jsx)(b.x, A({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? null : M.intl.string(M.t['r+SebW'])),
            sectionHeaderText: () => M.intl.string(M.t.UKbp1N)
        }
    },
    {
        key: j.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, l.jsx)(U, A({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? null : M.intl.string(M.t.Sb6wIy))
        }
    },
    {
        key: j.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, l.jsx)(g.Z, {})
    },
    {
        key: j.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, l.jsx)(L.Z, {})
    },
    {
        key: j.h8.REVIEW,
        renderStep: (e) => (0, l.jsx)(y.l, A({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? M.intl.string(M.t.UKbp1N) : M.intl.string(M.t.QBnNHh))
        }
    },
    {
        key: j.h8.CONFIRM,
        renderStep: (e) => (0, l.jsx)(S.b, A({}, e))
    },
    {
        key: j.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, l.jsx)(E.S, A({}, e)),
        options: {
            bodyClassName: T.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function F(e) {
    let n = (0, r.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: i, defaultPlanId: s, giftingOrigin: a, giftMessage: d, giftRecipient: c, giftStyle: p, isGift: j, loadId: m, paymentModalBanner: _, referralCode: L, repeatPurchase: g, subscriptionTier: y } = e;
    if (null != y && !Object.values(w.Si).includes(y)) throw Error('subscriptionTier must be a premium subscription');
    return (0, l.jsx)(C.Gt, {
        value: t,
        children: (0, l.jsx)(h.PaymentContextProvider, {
            loadId: m,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: R,
            skuIDs: [...w.YQ],
            isGift: j,
            defaultPlanId: s,
            referralCode: L,
            repeatPurchase: g,
            children: (0, l.jsx)(f.c1, {
                confirmationFooter: i,
                paymentModalBanner: _,
                children: (0, l.jsx)(x.KB, {
                    isGift: j,
                    giftRecipient: null == c ? void 0 : c,
                    giftMessage: d,
                    giftStyle: p,
                    giftingOrigin: a,
                    children: (0, l.jsx)(N, A({}, e))
                })
            })
        })
    });
}
