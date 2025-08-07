t.d(r, {
    STEPS: () => F,
    default: () => G,
}),
    t(415506),
    t(388685);
var n = t(255367),
    i = t(73800),
    o = t(442837),
    a = t(570140),
    l = t(821849),
    s = t(100527),
    d = t(906732),
    C = t(367074),
    c = t(717401),
    u = t(509545),
    p = t(78839),
    _ = t(669079),
    f = t(987209),
    m = t(563132),
    x = t(409813),
    h = t(107998),
    j = t(791785),
    L = t(276442),
    b = t(793541),
    g = t(380898),
    y = t(710094),
    S = t(518727),
    E = t(293858),
    v = t(183813),
    I = t(614223),
    w = t(174827),
    O = t(846464),
    P = t(184160),
    M = t(48175),
    T = t(981631),
    Z = t(474936),
    A = t(388032),
    R = t(236691);
function N(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
let U = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];
function B(e) {
    let {
            analyticsLocation: r,
            analyticsObject: t,
            analyticsSourceLocation: o,
            onComplete: s,
            transitionState: C,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: h,
            trialId: L,
            trialFooterMessageOverride: b,
            reviewWarningMessage: g,
            openInvoiceId: y,
            onSubscriptionConfirmation: E,
            renderPurchaseConfirmation: v,
            postSuccessGuild: I,
            followupSKUInfo: w,
            renderHeader: O,
            applicationId: P,
            guildId: M,
            referralTrialOfferId: A,
            skuId: R,
            returnRef: N,
            skipConfirm: U = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: k } = (0, d.ZP)();
    i.useEffect(() => {
        u.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, l.Y2)());
    }, []);
    let { step: F } = (0, m.JL)(),
        { isGift: G, giftMessage: H, giftRecipient: D } = (0, f.wD)(),
        Y = G && (0, _.pO)(D) && F === x.h8.PLAN_SELECT;
    return (0, n.jsx)(S.Z, {
        isConfirmationStep: F === x.h8.CONFIRM,
        children: (0, n.jsx)(j.PaymentModal, {
            analyticsLocations: k,
            analyticsLocation: r,
            analyticsObject: t,
            analyticsSourceLocation: o,
            analyticsSubscriptionType: T.NYc.PREMIUM,
            onComplete: s,
            transitionState: C,
            initialPlanId: c,
            giftMessage: H,
            subscriptionTier: p,
            onClose: h,
            trialId: L,
            isGift: G,
            trialFooterMessageOverride: b,
            reviewWarningMessage: g,
            planGroup: Z.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: E,
            renderPurchaseConfirmation: v,
            postSuccessGuild: I,
            followupSKUInfo: w,
            renderHeader: O,
            applicationId: P,
            guildId: M,
            referralTrialOfferId: A,
            skuId: R,
            shakeWhilePurchasing: !0,
            isDynamicModal: Y,
            returnRef: N,
            skipConfirm: U,
            continueSessionToInitialStep: B,
        }),
    });
}
function k(e) {
    var r, t;
    let { initialPlanId: i, handleStepChange: o, referralTrialOfferId: a } = e,
        { paymentSources: l, selectedSkuId: s, selectedPlan: d } = (0, m.JL)(),
        { isGift: C, claimableRewards: u } = (0, f.wD)(),
        p = (0, M.Z)({
            isGift: C,
            skuId: s,
            referralTrialOfferId: a,
        }),
        _ = (0, I.Fv)(p),
        h = (0, c.id)(d, C, u);
    return (0, n.jsx)(
        L.J,
        ((r = N({}, e)),
        (t = t =
            {
                breadcrumbSteps: U,
                onReturn: () => {
                    let e = Object.values(l),
                        r = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
                    _ && (r = x.h8.REVIEW),
                        h && e.length < 1 && (r = x.h8.SELECT_FREE_SKU),
                        o(r, { trackedFromStep: x.h8.PAYMENT_TYPE });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        r),
    );
}
let F = [
    {
        key: null,
        renderStep: (e) => (0, n.jsx)(j.I, N({}, e)),
    },
    {
        key: x.h8.SKU_SELECT,
        renderStep: (e) => (0, n.jsx)(O.q, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: x.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, n.jsx)(P.x, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: x.h8.PLAN_SELECT,
        renderStep: (e) => (0, n.jsx)(w.x, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? null : A.intl.string(A.t["r+SebW"])),
            sectionHeaderText: () => A.intl.string(A.t.UKbp1N),
        },
    },
    {
        key: x.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, n.jsx)(k, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy)),
        },
    },
    {
        key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, n.jsx)(g.Z, {}),
    },
    {
        key: x.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, n.jsx)(b.Z, {}),
    },
    {
        key: x.h8.REVIEW,
        renderStep: (e) => (0, n.jsx)(y.l, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)),
        },
    },
    {
        key: x.h8.CONFIRM,
        renderStep: (e) => (0, n.jsx)(E.b, N({}, e)),
    },
    {
        key: x.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, n.jsx)(v.S, N({}, e)),
        options: {
            bodyClassName: R.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function G(e) {
    let r = (0, o.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
        t = (0, C.Vi)() ? Z.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: l,
            giftingOrigin: c,
            giftMessage: u,
            giftRecipient: _,
            giftStyle: x,
            isGift: j,
            loadId: L,
            paymentModalBanner: b,
            referralCode: g,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(Z.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, n.jsx)(d.Gt, {
        value: i,
        children: (0, n.jsx)(m.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : r,
            stepConfigs: F,
            skuIDs: [...Z.YQ],
            isGift: j,
            defaultPlanId: null != t ? t : l,
            referralCode: g,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, n.jsx)(h.c1, {
                confirmationFooter: a,
                paymentModalBanner: b,
                children: (0, n.jsx)(f.KB, {
                    isGift: j,
                    giftRecipient: null == _ ? void 0 : _,
                    giftMessage: u,
                    giftStyle: x,
                    giftingOrigin: c,
                    children: (0, n.jsx)(B, N({}, e)),
                }),
            }),
        }),
    });
}
