n.d(t, {
    O: () => H,
    STEPS: () => z,
    default: () => K,
}),
    n(415506),
    n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(570140),
    s = n(821849),
    o = n(100527),
    u = n(906732),
    c = n(367074),
    d = n(717401),
    p = n(164275),
    m = n(602733),
    h = n(509545),
    f = n(78839),
    g = n(669079),
    y = n(987209),
    j = n(563132),
    v = n(409813),
    b = n(107998),
    O = n(45572),
    S = n(791785),
    x = n(276442),
    P = n(793541),
    E = n(380898),
    w = n(710094),
    I = n(518727),
    T = n(293858),
    k = n(183813),
    C = n(614223),
    N = n(174827),
    M = n(846464),
    _ = n(184160),
    A = n(48175),
    R = n(981631),
    L = n(474936),
    Z = n(388032),
    D = n(400005);
function F(e) {
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
let G = [v.h8.PLAN_SELECT, v.h8.ADD_PAYMENT_STEPS, v.h8.REVIEW, v.h8.CONFIRM];
function B(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: i,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            subscriptionTier: m,
            onClose: f,
            trialId: b,
            trialFooterMessageOverride: x,
            reviewWarningMessage: P,
            openInvoiceId: E,
            onSubscriptionConfirmation: w,
            renderPurchaseConfirmation: T,
            postSuccessGuild: k,
            followupSKUInfo: C,
            renderHeader: N,
            applicationId: M,
            guildId: _,
            referralTrialOfferId: A,
            skuId: Z,
            returnRef: D,
            skipConfirm: F = !1,
            continueSessionToInitialStep: G,
        } = e,
        { analyticsLocations: B } = (0, u.ZP)();
    l.useEffect(() => {
        h.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)());
    }, []);
    let { step: U, selectedSkuId: H, purchaseState: z } = (0, j.JL)(),
        { isGift: K, giftMessage: W, giftRecipient: V } = (0, y.wD)(),
        Y = K && (0, g.pO)(V) && U === v.h8.PLAN_SELECT,
        q = (0, p.I)(K, H),
        J = z === O.A.PURCHASING;
    return (0, r.jsx)(I.Z, {
        isConfirmationStep: U === v.h8.CONFIRM && null == G && null == T,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: J,
        children: (0, r.jsx)(S.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: i,
            analyticsSubscriptionType: R.NYc.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            giftMessage: W,
            subscriptionTier: m,
            onClose: f,
            trialId: b,
            isGift: K,
            trialFooterMessageOverride: x,
            reviewWarningMessage: P,
            planGroup: L.Y1,
            openInvoiceId: E,
            onSubscriptionConfirmation: w,
            renderPurchaseConfirmation: T,
            postSuccessGuild: k,
            followupSKUInfo: C,
            renderHeader: N,
            applicationId: M,
            guildId: _,
            referralTrialOfferId: A,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: Y,
            returnRef: D,
            skipConfirm: F,
            continueSessionToInitialStep: G,
        }),
    });
}
function U(e) {
    var t, n;
    let { initialPlanId: l, handleStepChange: i, referralTrialOfferId: a } = e,
        { paymentSources: s, selectedSkuId: o, selectedPlan: u } = (0, j.JL)(),
        { isGift: c, claimableRewards: p } = (0, y.wD)(),
        m = (0, A.Z)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: a,
        }),
        h = (0, C.Fv)(m),
        f = (0, d.id)(u, c, p);
    return (0, r.jsx)(
        x.J,
        ((t = F({}, e)),
        (n = n =
            {
                breadcrumbSteps: G,
                onReturn: () => {
                    let e = Object.values(s),
                        t = e.length < 1 && null == l ? v.h8.PLAN_SELECT : v.h8.REVIEW;
                    h && (t = v.h8.REVIEW),
                        f && e.length < 1 && (t = v.h8.SELECT_FREE_SKU),
                        i(t, { trackedFromStep: v.h8.PAYMENT_TYPE });
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
let H = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, r.jsx)(S.I, F({}, e)),
            },
            {
                key: v.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(M.q, F({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: v.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(_.x, F({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: v.h8.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(N.x, F({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, C.Fv)(e) ? null : Z.intl.string(Z.t["r+SebU"])),
                    sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                },
            },
            {
                key: v.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(U, F({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, C.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wI1)),
                },
            },
            {
                key: v.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(E.Z, {}),
            },
            {
                key: v.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(P.Z, {}),
            },
            {
                key: v.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(w.lZ, F({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, C.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHq)),
                },
            },
            {
                key: v.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(T.b, F({}, e)),
            },
            {
                key: v.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(k.S, F({}, e)),
                options: {
                    bodyClassName: D.selectFreeSku,
                    isMediumModal: !0,
                },
            },
        ];
    },
    z = H();
function K(e) {
    let t = (0, i.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? L.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: l } = (0, u.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: s,
            giftingOrigin: d,
            giftMessage: p,
            giftRecipient: h,
            giftStyle: g,
            isGift: v,
            loadId: O,
            referralCode: S,
            subscriptionTier: x,
        } = e;
    if (null != x && !Object.values(L.Si).includes(x)) throw Error("subscriptionTier must be a premium subscription");
    let P = (0, m.ao)({
        location: "PremiumPaymentSelect",
        giftRecipient: h,
        isGift: null != v && v,
    });
    return (0, r.jsx)(u.Gt, {
        value: l,
        children: (0, r.jsx)(j.PaymentContextProvider, {
            loadId: O,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H(P),
            skuIDs: [...L.YQ],
            isGift: v,
            defaultPlanId: null != n ? n : s,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(b.c1, {
                confirmationFooter: a,
                children: (0, r.jsx)(y.KB, {
                    isGift: v,
                    giftRecipient: null == h ? void 0 : h,
                    giftMessage: p,
                    giftStyle: g,
                    giftingOrigin: d,
                    children: (0, r.jsx)(B, F({}, e)),
                }),
            }),
        }),
    });
}
