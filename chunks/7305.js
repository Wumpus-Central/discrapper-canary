n.d(t, {
    STEPS: () => H,
    default: () => F,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    s = n(821849),
    o = n(100527),
    C = n(906732),
    d = n(367074),
    c = n(717401),
    u = n(509545),
    p = n(78839),
    x = n(669079),
    _ = n(987209),
    h = n(563132),
    f = n(409813),
    m = n(107998),
    j = n(791785),
    L = n(276442),
    g = n(793541),
    b = n(380898),
    y = n(710094),
    S = n(518727),
    v = n(293858),
    E = n(183813),
    O = n(614223),
    P = n(174827),
    w = n(846464),
    k = n(184160),
    M = n(48175),
    I = n(981631),
    T = n(474936),
    A = n(388032),
    Z = n(867983);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let B = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function R(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: m,
            trialId: L,
            trialFooterMessageOverride: g,
            reviewWarningMessage: b,
            openInvoiceId: y,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: E,
            postSuccessGuild: O,
            followupSKUInfo: P,
            renderHeader: w,
            applicationId: k,
            guildId: M,
            referralTrialOfferId: A,
            skuId: Z,
            returnRef: N,
            skipConfirm: B = !1,
            continueSessionToInitialStep: R,
        } = e,
        { analyticsLocations: U } = (0, C.ZP)();
    i.useEffect(() => {
        u.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)());
    }, []);
    let { step: H } = (0, h.JL)(),
        { isGift: F, giftMessage: G, giftRecipient: D } = (0, _.wD)(),
        K = F && (0, x.pO)(D) && H === f.h8.PLAN_SELECT;
    return (0, r.jsx)(S.Z, {
        isConfirmationStep: H === f.h8.CONFIRM,
        children: (0, r.jsx)(j.PaymentModal, {
            analyticsLocations: U,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: I.NYc.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: p,
            onClose: m,
            trialId: L,
            isGift: F,
            trialFooterMessageOverride: g,
            reviewWarningMessage: b,
            planGroup: T.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: E,
            postSuccessGuild: O,
            followupSKUInfo: P,
            renderHeader: w,
            applicationId: k,
            guildId: M,
            referralTrialOfferId: A,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: K,
            returnRef: N,
            skipConfirm: B,
            continueSessionToInitialStep: R,
        }),
    });
}
function U(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: a } = e,
        { paymentSources: s, selectedSkuId: o, selectedPlan: C } = (0, h.JL)(),
        { isGift: d, claimableRewards: u } = (0, _.wD)(),
        p = (0, M.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: a,
        }),
        x = (0, O.Fv)(p),
        m = (0, c.id)(C, d, u);
    return (0, r.jsx)(
        L.J,
        ((t = N({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(s),
                        t = e.length < 1 && null == i ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    x && (t = f.h8.REVIEW),
                        m && e.length < 1 && (t = f.h8.SELECT_FREE_SKU),
                        l(t, { trackedFromStep: f.h8.PAYMENT_TYPE });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
let H = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(j.I, N({}, e)),
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(w.q, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(k.x, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(P.x, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : A.intl.string(A.t["r+SebW"])),
            sectionHeaderText: () => A.intl.string(A.t.UKbp1N),
        },
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(U, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy)),
        },
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(b.Z, {}),
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(g.Z, {}),
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(y.l, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)),
        },
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(v.b, N({}, e)),
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(E.S, N({}, e)),
        options: {
            bodyClassName: Z.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function F(e) {
    let t = (0, l.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
        n = (0, d.Vi)() ? T.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: s,
            giftingOrigin: c,
            giftMessage: u,
            giftRecipient: x,
            giftStyle: f,
            isGift: j,
            loadId: L,
            paymentModalBanner: g,
            referralCode: b,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(T.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, r.jsx)(C.Gt, {
        value: i,
        children: (0, r.jsx)(h.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H,
            skuIDs: [...T.YQ],
            isGift: j,
            defaultPlanId: null != n ? n : s,
            referralCode: b,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(m.c1, {
                confirmationFooter: a,
                paymentModalBanner: g,
                children: (0, r.jsx)(_.KB, {
                    isGift: j,
                    giftRecipient: null == x ? void 0 : x,
                    giftMessage: u,
                    giftStyle: f,
                    giftingOrigin: c,
                    children: (0, r.jsx)(R, N({}, e)),
                }),
            }),
        }),
    });
}
