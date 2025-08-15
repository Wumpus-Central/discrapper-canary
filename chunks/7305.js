t.d(n, {
    STEPS: () => H,
    default: () => F,
}),
    t(415506),
    t(388685);
var i = t(255367),
    r = t(73800),
    l = t(442837),
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
    j = t(563132),
    f = t(409813),
    m = t(107998),
    _ = t(791785),
    L = t(276442),
    g = t(793541),
    y = t(380898),
    E = t(710094),
    S = t(518727),
    v = t(293858),
    P = t(183813),
    O = t(614223),
    b = t(174827),
    Z = t(846464),
    I = t(184160),
    M = t(48175),
    T = t(981631),
    w = t(474936),
    A = t(388032),
    R = t(867983);
function N(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
let U = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function k(e) {
    let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: l,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: m,
            trialId: L,
            trialFooterMessageOverride: g,
            reviewWarningMessage: y,
            openInvoiceId: E,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: P,
            postSuccessGuild: O,
            followupSKUInfo: b,
            renderHeader: Z,
            applicationId: I,
            guildId: M,
            referralTrialOfferId: A,
            skuId: R,
            returnRef: N,
            skipConfirm: U = !1,
            continueSessionToInitialStep: k,
        } = e,
        { analyticsLocations: B } = (0, C.ZP)();
    r.useEffect(() => {
        u.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H } = (0, j.JL)(),
        { isGift: F, giftMessage: G, giftRecipient: D } = (0, h.wD)(),
        z = F && (0, x.pO)(D) && H === f.h8.PLAN_SELECT;
    return (0, i.jsx)(S.Z, {
        isConfirmationStep: H === f.h8.CONFIRM,
        children: (0, i.jsx)(_.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: T.NYc.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: p,
            onClose: m,
            trialId: L,
            isGift: F,
            trialFooterMessageOverride: g,
            reviewWarningMessage: y,
            planGroup: w.Y1,
            openInvoiceId: E,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: P,
            postSuccessGuild: O,
            followupSKUInfo: b,
            renderHeader: Z,
            applicationId: I,
            guildId: M,
            referralTrialOfferId: A,
            skuId: R,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: N,
            skipConfirm: U,
            continueSessionToInitialStep: k,
        }),
    });
}
function B(e) {
    var n, t;
    let { initialPlanId: r, handleStepChange: l, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, j.JL)(),
        { isGift: d, claimableRewards: u } = (0, h.wD)(),
        p = (0, M.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: s,
        }),
        x = (0, O.Fv)(p),
        m = (0, c.id)(C, d, u);
    return (0, i.jsx)(
        L.J,
        ((n = N({}, e)),
        (t = t =
            {
                breadcrumbSteps: U,
                onReturn: () => {
                    let e = Object.values(a),
                        n = e.length < 1 && null == r ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    x && (n = f.h8.REVIEW),
                        m && e.length < 1 && (n = f.h8.SELECT_FREE_SKU),
                        l(n, { trackedFromStep: f.h8.PAYMENT_TYPE });
                },
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
        n),
    );
}
let H = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(_.I, N({}, e)),
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(Z.q, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(I.x, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(b.x, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : A.intl.string(A.t["r+SebW"])),
            sectionHeaderText: () => A.intl.string(A.t.UKbp1N),
        },
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(B, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy)),
        },
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(y.Z, {}),
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(g.Z, {}),
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(E.l, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)),
        },
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(v.b, N({}, e)),
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(P.S, N({}, e)),
        options: {
            bodyClassName: R.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function F(e) {
    let n = (0, l.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
        t = (0, d.Vi)() ? w.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: r } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: u,
            giftRecipient: x,
            giftStyle: f,
            isGift: _,
            loadId: L,
            paymentModalBanner: g,
            referralCode: y,
            subscriptionTier: E,
        } = e;
    if (null != E && !Object.values(w.Si).includes(E)) throw Error("subscriptionTier must be a premium subscription");
    return (0, i.jsx)(C.Gt, {
        value: r,
        children: (0, i.jsx)(j.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: H,
            skuIDs: [...w.YQ],
            isGift: _,
            defaultPlanId: null != t ? t : a,
            referralCode: y,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, i.jsx)(m.c1, {
                confirmationFooter: s,
                paymentModalBanner: g,
                children: (0, i.jsx)(h.KB, {
                    isGift: _,
                    giftRecipient: null == x ? void 0 : x,
                    giftMessage: u,
                    giftStyle: f,
                    giftingOrigin: c,
                    children: (0, i.jsx)(k, N({}, e)),
                }),
            }),
        }),
    });
}
