(t.d(n, {
    STEPS: () => U,
    default: () => B
}),
    t(415506),
    t(388685));
var i = t(255367),
    l = t(73800),
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
    f = t(409813),
    j = t(107998),
    m = t(791785),
    _ = t(276442),
    L = t(793541),
    g = t(380898),
    y = t(710094),
    E = t(293858),
    S = t(183813),
    v = t(614223),
    P = t(174827),
    Z = t(846464),
    b = t(184160),
    I = t(48175),
    O = t(981631),
    T = t(474936),
    M = t(388032),
    w = t(236691);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i));
            }));
    }
    return e;
}
let N = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function R(e) {
    let { analyticsLocation: n, analyticsObject: t, analyticsSourceLocation: r, onComplete: o, transitionState: d, initialPlanId: u, subscriptionTier: j, onClose: _, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: y, openInvoiceId: E, onSubscriptionConfirmation: S, renderPurchaseConfirmation: v, postSuccessGuild: P, followupSKUInfo: Z, renderHeader: b, applicationId: I, guildId: M, referralTrialOfferId: w, skuId: A, returnRef: N, skipConfirm: R = !1, continueSessionToInitialStep: k } = e,
        { analyticsLocations: U } = (0, C.ZP)();
    l.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: B } = (0, h.JL)(),
        { isGift: H, giftMessage: F, giftRecipient: G } = (0, x.wD)(),
        D = H && (0, p.pO)(G) && B === f.h8.PLAN_SELECT;
    return (0, i.jsx)(m.PaymentModal, {
        analyticsLocations: U,
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: r,
        analyticsSubscriptionType: O.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: u,
        giftMessage: F,
        subscriptionTier: j,
        onClose: _,
        trialId: L,
        isGift: H,
        trialFooterMessageOverride: g,
        reviewWarningMessage: y,
        planGroup: T.Y1,
        openInvoiceId: E,
        onSubscriptionConfirmation: S,
        renderPurchaseConfirmation: v,
        postSuccessGuild: P,
        followupSKUInfo: Z,
        renderHeader: b,
        applicationId: I,
        guildId: M,
        referralTrialOfferId: w,
        skuId: A,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: N,
        skipConfirm: R,
        continueSessionToInitialStep: k
    });
}
function k(e) {
    var n, t;
    let { initialPlanId: l, handleStepChange: r, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, h.JL)(),
        { isGift: c, claimableRewards: u } = (0, x.wD)(),
        p = (0, I.Z)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: s
        }),
        j = (0, v.Fv)(p),
        m = (0, d.id)(C, c, u);
    return (0, i.jsx)(
        _.J,
        ((n = A({}, e)),
        (t = t =
            {
                breadcrumbSteps: N,
                onReturn: () => {
                    let e = Object.values(a),
                        n = e.length < 1 && null == l ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    (j && (n = f.h8.REVIEW), m && e.length < 1 && (n = f.h8.SELECT_FREE_SKU), r(n, { trackedFromStep: f.h8.PAYMENT_TYPE }));
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        n)
    );
}
let U = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(m.I, A({}, e))
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(Z.q, A({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(b.x, A({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(P.x, A({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? null : M.intl.string(M.t['r+SebW'])),
            sectionHeaderText: () => M.intl.string(M.t.UKbp1N)
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(k, A({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? null : M.intl.string(M.t.Sb6wIy))
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
        renderStep: (e) => (0, i.jsx)(y.l, A({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, v.Fv)(e) ? M.intl.string(M.t.UKbp1N) : M.intl.string(M.t.QBnNHh))
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(E.b, A({}, e))
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(S.S, A({}, e)),
        options: {
            bodyClassName: w.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function B(e) {
    let n = (0, r.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: l, defaultPlanId: s, giftingOrigin: a, giftMessage: d, giftRecipient: c, giftStyle: p, isGift: f, loadId: m, paymentModalBanner: _, referralCode: L, subscriptionTier: g } = e;
    if (null != g && !Object.values(T.Si).includes(g)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: t,
        children: (0, i.jsx)(h.PaymentContextProvider, {
            loadId: m,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: U,
            skuIDs: [...T.YQ],
            isGift: f,
            defaultPlanId: s,
            referralCode: L,
            children: (0, i.jsx)(j.c1, {
                confirmationFooter: l,
                paymentModalBanner: _,
                children: (0, i.jsx)(x.KB, {
                    isGift: f,
                    giftRecipient: null == c ? void 0 : c,
                    giftMessage: d,
                    giftStyle: p,
                    giftingOrigin: a,
                    children: (0, i.jsx)(R, A({}, e))
                })
            })
        })
    });
}
