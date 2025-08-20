t.d(n, {
    STEPS: () => F,
    default: () => N,
}),
    t(415506),
    t(388685);
var r = t(951288),
    i = t(647438),
    l = t(442837),
    s = t(570140),
    a = t(821849),
    o = t(100527),
    C = t(906732),
    d = t(367074),
    p = t(717401),
    c = t(509545),
    u = t(78839),
    x = t(669079),
    _ = t(987209),
    f = t(563132),
    h = t(409813),
    j = t(107998),
    L = t(791785),
    m = t(276442),
    g = t(793541),
    S = t(380898),
    y = t(710094),
    E = t(518727),
    b = t(293858),
    P = t(183813),
    O = t(614223),
    I = t(174827),
    v = t(846464),
    Z = t(184160),
    M = t(48175),
    w = t(981631),
    A = t(474936),
    B = t(388032),
    T = t(867983);
function U(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
let k = [h.h8.PLAN_SELECT, h.h8.ADD_PAYMENT_STEPS, h.h8.REVIEW, h.h8.CONFIRM];
function R(e) {
    let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: l,
            onComplete: o,
            transitionState: d,
            initialPlanId: p,
            subscriptionTier: u,
            onClose: j,
            trialId: m,
            trialFooterMessageOverride: g,
            reviewWarningMessage: S,
            openInvoiceId: y,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: P,
            postSuccessGuild: O,
            followupSKUInfo: I,
            renderHeader: v,
            applicationId: Z,
            guildId: M,
            referralTrialOfferId: B,
            skuId: T,
            returnRef: U,
            skipConfirm: k = !1,
            continueSessionToInitialStep: R,
        } = e,
        { analyticsLocations: H } = (0, C.ZP)();
    i.useEffect(() => {
        c.Z.isLoadedForPremiumSKUs() || s.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: F } = (0, f.JL)(),
        { isGift: N, giftMessage: G, giftRecipient: D } = (0, _.wD)(),
        W = N && (0, x.pO)(D) && F === h.h8.PLAN_SELECT;
    return (0, r.jsx)(E.Z, {
        isConfirmationStep: F === h.h8.CONFIRM,
        children: (0, r.jsx)(L.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: w.NYc.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: p,
            giftMessage: G,
            subscriptionTier: u,
            onClose: j,
            trialId: m,
            isGift: N,
            trialFooterMessageOverride: g,
            reviewWarningMessage: S,
            planGroup: A.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: P,
            postSuccessGuild: O,
            followupSKUInfo: I,
            renderHeader: v,
            applicationId: Z,
            guildId: M,
            referralTrialOfferId: B,
            skuId: T,
            shakeWhilePurchasing: !0,
            isDynamicModal: W,
            returnRef: U,
            skipConfirm: k,
            continueSessionToInitialStep: R,
        }),
    });
}
function H(e) {
    var n, t;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: C } = (0, f.JL)(),
        { isGift: d, claimableRewards: c } = (0, _.wD)(),
        u = (0, M.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: s,
        }),
        x = (0, O.Fv)(u),
        j = (0, p.id)(C, d, c);
    return (0, r.jsx)(
        m.J,
        ((n = U({}, e)),
        (t = t =
            {
                breadcrumbSteps: k,
                onReturn: () => {
                    let e = Object.values(a),
                        n = e.length < 1 && null == i ? h.h8.PLAN_SELECT : h.h8.REVIEW;
                    x && (n = h.h8.REVIEW),
                        j && e.length < 1 && (n = h.h8.SELECT_FREE_SKU),
                        l(n, { trackedFromStep: h.h8.PAYMENT_TYPE });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        n),
    );
}
let F = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(L.I, U({}, e)),
    },
    {
        key: h.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(v.q, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: h.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(Z.x, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: h.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(I.x, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : B.intl.string(B.t["r+SebW"])),
            sectionHeaderText: () => B.intl.string(B.t.UKbp1N),
        },
    },
    {
        key: h.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(H, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : B.intl.string(B.t.Sb6wIy)),
        },
    },
    {
        key: h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(S.Z, {}),
    },
    {
        key: h.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(g.Z, {}),
    },
    {
        key: h.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(y.l, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? B.intl.string(B.t.UKbp1N) : B.intl.string(B.t.QBnNHh)),
        },
    },
    {
        key: h.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(b.b, U({}, e)),
    },
    {
        key: h.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(P.S, U({}, e)),
        options: {
            bodyClassName: T.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function N(e) {
    let n = (0, l.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
        t = (0, d.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: p,
            giftMessage: c,
            giftRecipient: x,
            giftStyle: h,
            isGift: L,
            loadId: m,
            paymentModalBanner: g,
            referralCode: S,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, r.jsx)(C.Gt, {
        value: i,
        children: (0, r.jsx)(f.PaymentContextProvider, {
            loadId: m,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: F,
            skuIDs: [...A.YQ],
            isGift: L,
            defaultPlanId: null != t ? t : a,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(j.c1, {
                confirmationFooter: s,
                paymentModalBanner: g,
                children: (0, r.jsx)(_.KB, {
                    isGift: L,
                    giftRecipient: null == x ? void 0 : x,
                    giftMessage: c,
                    giftStyle: h,
                    giftingOrigin: p,
                    children: (0, r.jsx)(R, U({}, e)),
                }),
            }),
        }),
    });
}
