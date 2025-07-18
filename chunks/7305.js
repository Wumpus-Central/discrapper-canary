(t.d(n, {
    STEPS: () => B,
    default: () => H
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
    d = t(367074),
    c = t(717401),
    u = t(509545),
    p = t(78839),
    x = t(669079),
    h = t(987209),
    f = t(563132),
    j = t(409813),
    m = t(107998),
    _ = t(791785),
    L = t(276442),
    g = t(793541),
    y = t(380898),
    E = t(710094),
    S = t(293858),
    v = t(183813),
    Z = t(614223),
    P = t(174827),
    b = t(846464),
    I = t(184160),
    O = t(48175),
    M = t(981631),
    T = t(474936),
    w = t(388032),
    A = t(236691);
function R(e) {
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
let N = [j.h8.PLAN_SELECT, j.h8.ADD_PAYMENT_STEPS, j.h8.REVIEW, j.h8.CONFIRM];
function U(e) {
    let { analyticsLocation: n, analyticsObject: t, analyticsSourceLocation: r, onComplete: o, transitionState: d, initialPlanId: c, subscriptionTier: p, onClose: m, trialId: L, trialFooterMessageOverride: g, reviewWarningMessage: y, openInvoiceId: E, onSubscriptionConfirmation: S, renderPurchaseConfirmation: v, postSuccessGuild: Z, followupSKUInfo: P, renderHeader: b, applicationId: I, guildId: O, referralTrialOfferId: w, skuId: A, returnRef: R, skipConfirm: N = !1, continueSessionToInitialStep: U } = e,
        { analyticsLocations: k } = (0, C.ZP)();
    l.useEffect(() => {
        u.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: B } = (0, f.JL)(),
        { isGift: H, giftMessage: F, giftRecipient: G } = (0, h.wD)(),
        D = H && (0, x.pO)(G) && B === j.h8.PLAN_SELECT;
    return (0, i.jsx)(_.PaymentModal, {
        analyticsLocations: k,
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: r,
        analyticsSubscriptionType: M.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        giftMessage: F,
        subscriptionTier: p,
        onClose: m,
        trialId: L,
        isGift: H,
        trialFooterMessageOverride: g,
        reviewWarningMessage: y,
        planGroup: T.Y1,
        openInvoiceId: E,
        onSubscriptionConfirmation: S,
        renderPurchaseConfirmation: v,
        postSuccessGuild: Z,
        followupSKUInfo: P,
        renderHeader: b,
        applicationId: I,
        guildId: O,
        referralTrialOfferId: w,
        skuId: A,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: R,
        skipConfirm: N,
        continueSessionToInitialStep: U
    });
}
function k(e) {
    var n, t;
    let { initialPlanId: l, handleStepChange: r, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, f.JL)(),
        { isGift: d, claimableRewards: u } = (0, h.wD)(),
        p = (0, O.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: s
        }),
        x = (0, Z.Fv)(p),
        m = (0, c.id)(C, d, u);
    return (0, i.jsx)(
        L.J,
        ((n = R({}, e)),
        (t = t =
            {
                breadcrumbSteps: N,
                onReturn: () => {
                    let e = Object.values(a),
                        n = e.length < 1 && null == l ? j.h8.PLAN_SELECT : j.h8.REVIEW;
                    (x && (n = j.h8.REVIEW), m && e.length < 1 && (n = j.h8.SELECT_FREE_SKU), r(n, { trackedFromStep: j.h8.PAYMENT_TYPE }));
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
let B = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(_.I, R({}, e))
    },
    {
        key: j.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(b.q, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: j.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(I.x, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: j.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(P.x, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, Z.Fv)(e) ? null : w.intl.string(w.t['r+SebW'])),
            sectionHeaderText: () => w.intl.string(w.t.UKbp1N)
        }
    },
    {
        key: j.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(k, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, Z.Fv)(e) ? null : w.intl.string(w.t.Sb6wIy))
        }
    },
    {
        key: j.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(y.Z, {})
    },
    {
        key: j.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(g.Z, {})
    },
    {
        key: j.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(E.l, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, Z.Fv)(e) ? w.intl.string(w.t.UKbp1N) : w.intl.string(w.t.QBnNHh))
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
    let n = (0, r.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
        t = (0, d.Vi)() ? T.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: l } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { confirmationFooter: s, defaultPlanId: a, giftingOrigin: c, giftMessage: u, giftRecipient: x, giftStyle: j, isGift: _, loadId: L, paymentModalBanner: g, referralCode: y, subscriptionTier: E } = e;
    if (null != E && !Object.values(T.Si).includes(E)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: l,
        children: (0, i.jsx)(f.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: B,
            skuIDs: [...T.YQ],
            isGift: _,
            defaultPlanId: null != t ? t : a,
            referralCode: y,
            children: (0, i.jsx)(m.c1, {
                confirmationFooter: s,
                paymentModalBanner: g,
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
