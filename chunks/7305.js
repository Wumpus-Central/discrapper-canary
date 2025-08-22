n.d(t, {
    STEPS: () => H,
    default: () => F,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(570140),
    a = n(821849),
    o = n(100527),
    C = n(906732),
    d = n(367074),
    c = n(717401),
    p = n(509545),
    u = n(78839),
    x = n(669079),
    h = n(987209),
    _ = n(563132),
    f = n(409813),
    j = n(107998),
    m = n(791785),
    L = n(276442),
    g = n(793541),
    b = n(380898),
    y = n(710094),
    S = n(518727),
    E = n(293858),
    O = n(183813),
    P = n(614223),
    v = n(174827),
    w = n(846464),
    M = n(184160),
    I = n(48175),
    Z = n(981631),
    A = n(474936),
    k = n(388032),
    T = n(867983);
function B(e) {
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
let U = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function R(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: u,
            onClose: j,
            trialId: L,
            trialFooterMessageOverride: g,
            reviewWarningMessage: b,
            openInvoiceId: y,
            onSubscriptionConfirmation: E,
            renderPurchaseConfirmation: O,
            postSuccessGuild: P,
            followupSKUInfo: v,
            renderHeader: w,
            applicationId: M,
            guildId: I,
            referralTrialOfferId: k,
            skuId: T,
            returnRef: B,
            skipConfirm: U = !1,
            continueSessionToInitialStep: R,
        } = e,
        { analyticsLocations: N } = (0, C.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H } = (0, _.JL)(),
        { isGift: F, giftMessage: G, giftRecipient: D } = (0, h.wD)(),
        W = F && (0, x.pO)(D) && H === f.h8.PLAN_SELECT;
    return (0, r.jsx)(S.Z, {
        isConfirmationStep: H === f.h8.CONFIRM,
        children: (0, r.jsx)(m.PaymentModal, {
            analyticsLocations: N,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: Z.NYc.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: u,
            onClose: j,
            trialId: L,
            isGift: F,
            trialFooterMessageOverride: g,
            reviewWarningMessage: b,
            planGroup: A.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: E,
            renderPurchaseConfirmation: O,
            postSuccessGuild: P,
            followupSKUInfo: v,
            renderHeader: w,
            applicationId: M,
            guildId: I,
            referralTrialOfferId: k,
            skuId: T,
            shakeWhilePurchasing: !0,
            isDynamicModal: W,
            returnRef: B,
            skipConfirm: U,
            continueSessionToInitialStep: R,
        }),
    });
}
function N(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, _.JL)(),
        { isGift: d, claimableRewards: p } = (0, h.wD)(),
        u = (0, I.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: s,
        }),
        x = (0, P.Fv)(u),
        j = (0, c.id)(C, d, p);
    return (0, r.jsx)(
        L.J,
        ((t = B({}, e)),
        (n = n =
            {
                breadcrumbSteps: U,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == i ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                    x && (t = f.h8.REVIEW),
                        j && e.length < 1 && (t = f.h8.SELECT_FREE_SKU),
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
        renderStep: (e) => (0, r.jsx)(m.I, B({}, e)),
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(w.q, B({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(M.x, B({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(v.x, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : k.intl.string(k.t["r+SebW"])),
            sectionHeaderText: () => k.intl.string(k.t.UKbp1N),
        },
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(N, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : k.intl.string(k.t.Sb6wIy)),
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
        renderStep: (e) => (0, r.jsx)(y.l, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? k.intl.string(k.t.UKbp1N) : k.intl.string(k.t.QBnNHh)),
        },
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(E.b, B({}, e)),
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(O.S, B({}, e)),
        options: {
            bodyClassName: T.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function F(e) {
    let t = (0, l.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
        n = (0, d.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: x,
            giftStyle: f,
            isGift: m,
            loadId: L,
            paymentModalBanner: g,
            referralCode: b,
            subscriptionTier: y,
            customCheckoutFlow: S,
        } = e;
    if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, r.jsx)(C.Gt, {
        value: i,
        children: (0, r.jsx)(_.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H,
            skuIDs: [...A.YQ],
            isGift: m,
            defaultPlanId: null != n ? n : a,
            referralCode: b,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            customCheckoutFlow: S,
            children: (0, r.jsx)(j.c1, {
                confirmationFooter: s,
                paymentModalBanner: g,
                children: (0, r.jsx)(h.KB, {
                    isGift: m,
                    giftRecipient: null == x ? void 0 : x,
                    giftMessage: p,
                    giftStyle: f,
                    giftingOrigin: c,
                    children: (0, r.jsx)(R, B({}, e)),
                }),
            }),
        }),
    });
}
