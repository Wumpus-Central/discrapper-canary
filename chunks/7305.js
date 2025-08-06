t.d(r, {
    STEPS: () => G,
    default: () => H,
}),
    t(415506),
    t(388685);
var n = t(255367),
    i = t(73800),
    l = t(442837),
    o = t(570140),
    a = t(821849),
    s = t(100527),
    d = t(906732),
    C = t(367074),
    c = t(619067),
    u = t(717401),
    p = t(509545),
    _ = t(78839),
    f = t(669079),
    m = t(987209),
    x = t(563132),
    h = t(409813),
    j = t(107998),
    L = t(791785),
    b = t(276442),
    g = t(793541),
    y = t(380898),
    S = t(710094),
    E = t(518727),
    v = t(293858),
    I = t(183813),
    w = t(614223),
    O = t(174827),
    M = t(846464),
    P = t(184160),
    T = t(48175),
    Z = t(981631),
    A = t(474936),
    R = t(388032),
    N = t(236691);
function U(e) {
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
let k = [h.h8.PLAN_SELECT, h.h8.ADD_PAYMENT_STEPS, h.h8.REVIEW, h.h8.CONFIRM];
function B(e) {
    let {
            analyticsLocation: r,
            analyticsObject: t,
            analyticsSourceLocation: l,
            onComplete: s,
            transitionState: C,
            initialPlanId: u,
            subscriptionTier: _,
            onClose: j,
            trialId: b,
            trialFooterMessageOverride: g,
            reviewWarningMessage: y,
            openInvoiceId: S,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: O,
            renderHeader: M,
            applicationId: P,
            guildId: T,
            referralTrialOfferId: R,
            skuId: N,
            returnRef: U,
            skipConfirm: k = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: F } = (0, d.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || o.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: G, selectedSkuId: H } = (0, x.JL)(),
        { isGift: D, giftMessage: W, giftRecipient: Y } = (0, m.wD)(),
        z = D && (0, f.pO)(Y) && G === h.h8.PLAN_SELECT,
        K = (0, c.a)(D, !1, H);
    return (0, n.jsx)(E.Z, {
        isWowMomentConfirmationEligible: K,
        isConfirmationStep: G === h.h8.CONFIRM,
        children: (0, n.jsx)(L.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: r,
            analyticsObject: t,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: Z.NYc.PREMIUM,
            onComplete: s,
            transitionState: C,
            initialPlanId: u,
            giftMessage: W,
            subscriptionTier: _,
            onClose: j,
            trialId: b,
            isGift: D,
            trialFooterMessageOverride: g,
            reviewWarningMessage: y,
            planGroup: A.Y1,
            openInvoiceId: S,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: O,
            renderHeader: M,
            applicationId: P,
            guildId: T,
            referralTrialOfferId: R,
            skuId: N,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: U,
            skipConfirm: k,
            continueSessionToInitialStep: B,
        }),
    });
}
function F(e) {
    var r, t;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: o } = e,
        { paymentSources: a, selectedSkuId: s, selectedPlan: d } = (0, x.JL)(),
        { isGift: C, claimableRewards: c } = (0, m.wD)(),
        p = (0, T.Z)({
            isGift: C,
            skuId: s,
            referralTrialOfferId: o,
        }),
        _ = (0, w.Fv)(p),
        f = (0, u.id)(d, C, c);
    return (0, n.jsx)(
        b.J,
        ((r = U({}, e)),
        (t = t =
            {
                breadcrumbSteps: k,
                onReturn: () => {
                    let e = Object.values(a),
                        r = e.length < 1 && null == i ? h.h8.PLAN_SELECT : h.h8.REVIEW;
                    _ && (r = h.h8.REVIEW),
                        f && e.length < 1 && (r = h.h8.SELECT_FREE_SKU),
                        l(r, { trackedFromStep: h.h8.PAYMENT_TYPE });
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
let G = [
    {
        key: null,
        renderStep: (e) => (0, n.jsx)(L.I, U({}, e)),
    },
    {
        key: h.h8.SKU_SELECT,
        renderStep: (e) => (0, n.jsx)(M.q, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: h.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, n.jsx)(P.x, U({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: h.h8.PLAN_SELECT,
        renderStep: (e) => (0, n.jsx)(O.x, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? null : R.intl.string(R.t["r+SebW"])),
            sectionHeaderText: () => R.intl.string(R.t.UKbp1N),
        },
    },
    {
        key: h.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, n.jsx)(F, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? null : R.intl.string(R.t.Sb6wIy)),
        },
    },
    {
        key: h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, n.jsx)(y.Z, {}),
    },
    {
        key: h.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, n.jsx)(g.Z, {}),
    },
    {
        key: h.h8.REVIEW,
        renderStep: (e) => (0, n.jsx)(S.l, U({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? R.intl.string(R.t.UKbp1N) : R.intl.string(R.t.QBnNHh)),
        },
    },
    {
        key: h.h8.CONFIRM,
        renderStep: (e) => (0, n.jsx)(v.b, U({}, e)),
    },
    {
        key: h.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, n.jsx)(I.S, U({}, e)),
        options: {
            bodyClassName: N.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function H(e) {
    let r = (0, l.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        t = (0, C.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: o,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: u,
            giftRecipient: p,
            giftStyle: f,
            isGift: h,
            loadId: L,
            paymentModalBanner: b,
            referralCode: g,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, n.jsx)(d.Gt, {
        value: i,
        children: (0, n.jsx)(x.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : r,
            stepConfigs: G,
            skuIDs: [...A.YQ],
            isGift: h,
            defaultPlanId: null != t ? t : a,
            referralCode: g,
            children: (0, n.jsx)(j.c1, {
                confirmationFooter: o,
                paymentModalBanner: b,
                children: (0, n.jsx)(m.KB, {
                    isGift: h,
                    giftRecipient: null == p ? void 0 : p,
                    giftMessage: u,
                    giftStyle: f,
                    giftingOrigin: c,
                    children: (0, n.jsx)(B, U({}, e)),
                }),
            }),
        }),
    });
}
