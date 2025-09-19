n.d(t, {
    STEPS: () => F,
    default: () => G,
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
    d = n(538981),
    c = n(367074),
    u = n(717401),
    p = n(509545),
    x = n(78839),
    h = n(669079),
    f = n(987209),
    _ = n(563132),
    m = n(409813),
    j = n(107998),
    g = n(791785),
    b = n(276442),
    L = n(793541),
    y = n(380898),
    S = n(710094),
    v = n(518727),
    E = n(293858),
    O = n(183813),
    P = n(614223),
    k = n(174827),
    w = n(846464),
    M = n(184160),
    I = n(48175),
    T = n(981631),
    A = n(474936),
    Z = n(388032),
    N = n(867983);
function R(e) {
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
let B = [m.h8.PLAN_SELECT, m.h8.ADD_PAYMENT_STEPS, m.h8.REVIEW, m.h8.CONFIRM];
function U(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: u,
            onClose: x,
            trialId: j,
            trialFooterMessageOverride: b,
            reviewWarningMessage: L,
            openInvoiceId: y,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: E,
            postSuccessGuild: O,
            followupSKUInfo: P,
            renderHeader: k,
            applicationId: w,
            guildId: M,
            referralTrialOfferId: I,
            skuId: Z,
            returnRef: N,
            skipConfirm: R = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: U } = (0, C.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)());
    }, []);
    let { step: H } = (0, _.JL)(),
        { isGift: F, giftMessage: G, giftRecipient: D } = (0, f.wD)(),
        K = F && (0, h.pO)(D) && H === m.h8.PLAN_SELECT;
    return (0, r.jsx)(v.Z, {
        isConfirmationStep: H === m.h8.CONFIRM && null == B && null == E,
        children: (0, r.jsx)(g.PaymentModal, {
            analyticsLocations: U,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: T.NYc.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: u,
            onClose: x,
            trialId: j,
            isGift: F,
            trialFooterMessageOverride: b,
            reviewWarningMessage: L,
            planGroup: A.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: E,
            postSuccessGuild: O,
            followupSKUInfo: P,
            renderHeader: k,
            applicationId: w,
            guildId: M,
            referralTrialOfferId: I,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: K,
            returnRef: N,
            skipConfirm: R,
            continueSessionToInitialStep: B,
        }),
    });
}
function H(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: a } = e,
        { paymentSources: s, selectedSkuId: o, selectedPlan: C } = (0, _.JL)(),
        { isGift: d, claimableRewards: c } = (0, f.wD)(),
        p = (0, I.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: a,
        }),
        x = (0, P.Fv)(p),
        h = (0, u.id)(C, d, c);
    return (0, r.jsx)(
        b.J,
        ((t = R({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(s),
                        t = e.length < 1 && null == i ? m.h8.PLAN_SELECT : m.h8.REVIEW;
                    x && (t = m.h8.REVIEW),
                        h && e.length < 1 && (t = m.h8.SELECT_FREE_SKU),
                        l(t, { trackedFromStep: m.h8.PAYMENT_TYPE });
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
let F = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(g.I, R({}, e)),
    },
    {
        key: m.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(w.q, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: m.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(M.x, R({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: m.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(k.x, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t["r+SebW"])),
            sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
        },
    },
    {
        key: m.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(H, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wIy)),
        },
    },
    {
        key: m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(y.Z, {}),
    },
    {
        key: m.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(L.Z, {}),
    },
    {
        key: m.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(S.l, R({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHh)),
        },
    },
    {
        key: m.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(E.b, R({}, e)),
    },
    {
        key: m.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(O.S, R({}, e)),
        options: {
            bodyClassName: N.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function G(e) {
    let t = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        a = (0, d.r)(),
        {
            confirmationFooter: s,
            defaultPlanId: u,
            giftingOrigin: p,
            giftMessage: h,
            giftRecipient: m,
            giftStyle: g,
            isGift: b,
            loadId: L,
            paymentModalBanner: y,
            referralCode: S,
            subscriptionTier: v,
        } = e;
    if (null != v && !Object.values(A.Si).includes(v)) throw Error("subscriptionTier must be a premium subscription");
    return (0, r.jsx)(C.Gt, {
        value: i,
        children: (0, r.jsx)(_.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: F,
            skuIDs: [...A.YQ],
            isGift: b,
            defaultPlanId: null != n ? n : u,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(j.c1, {
                confirmationFooter: s,
                maybeOpenMarketingMomentRewardsModal: a,
                paymentModalBanner: y,
                children: (0, r.jsx)(f.KB, {
                    isGift: b,
                    giftRecipient: null == m ? void 0 : m,
                    giftMessage: h,
                    giftStyle: g,
                    giftingOrigin: p,
                    children: (0, r.jsx)(U, R({}, e)),
                }),
            }),
        }),
    });
}
