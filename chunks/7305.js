n.d(t, {
    O: () => U,
    STEPS: () => z,
    default: () => K,
}),
    n(415506),
    n(388685);
var l = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(570140),
    s = n(821849),
    o = n(100527),
    u = n(906732),
    c = n(367074),
    d = n(717401),
    m = n(164275),
    p = n(602733),
    h = n(509545),
    f = n(78839),
    g = n(669079),
    v = n(987209),
    j = n(563132),
    y = n(409813),
    b = n(107998),
    S = n(45572),
    x = n(791785),
    P = n(276442),
    O = n(793541),
    E = n(380898),
    I = n(710094),
    w = n(518727),
    T = n(293858),
    k = n(183813),
    C = n(614223),
    N = n(174827),
    M = n(846464),
    R = n(184160),
    _ = n(48175),
    A = n(981631),
    L = n(474936),
    Z = n(388032),
    D = n(867983);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let B = [y.h8.PLAN_SELECT, y.h8.ADD_PAYMENT_STEPS, y.h8.REVIEW, y.h8.CONFIRM];
function G(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: i,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            subscriptionTier: p,
            onClose: f,
            trialId: b,
            trialFooterMessageOverride: P,
            reviewWarningMessage: O,
            openInvoiceId: E,
            onSubscriptionConfirmation: I,
            renderPurchaseConfirmation: T,
            postSuccessGuild: k,
            followupSKUInfo: C,
            renderHeader: N,
            applicationId: M,
            guildId: R,
            referralTrialOfferId: _,
            skuId: Z,
            returnRef: D,
            skipConfirm: F = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: G } = (0, u.ZP)();
    r.useEffect(() => {
        h.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)());
    }, []);
    let { step: H, wasTier2PremiumBeforePurchase: U, selectedSkuId: z, purchaseState: K } = (0, j.JL)(),
        { isGift: W, giftMessage: V, giftRecipient: Y } = (0, v.wD)(),
        q = W && (0, g.pO)(Y) && H === y.h8.PLAN_SELECT,
        J = (0, m.P)(W, !!U, z),
        Q = K === S.A.PURCHASING;
    return (0, l.jsx)(w.Z, {
        isConfirmationStep: H === y.h8.CONFIRM && null == B && null == T,
        isEligibleForWowMoment: J,
        shouldPrefetchWowMoment: Q,
        children: (0, l.jsx)(x.PaymentModal, {
            analyticsLocations: G,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: i,
            analyticsSubscriptionType: A.NYc.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            giftMessage: V,
            subscriptionTier: p,
            onClose: f,
            trialId: b,
            isGift: W,
            trialFooterMessageOverride: P,
            reviewWarningMessage: O,
            planGroup: L.Y1,
            openInvoiceId: E,
            onSubscriptionConfirmation: I,
            renderPurchaseConfirmation: T,
            postSuccessGuild: k,
            followupSKUInfo: C,
            renderHeader: N,
            applicationId: M,
            guildId: R,
            referralTrialOfferId: _,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: q,
            returnRef: D,
            skipConfirm: F,
            continueSessionToInitialStep: B,
        }),
    });
}
function H(e) {
    var t, n;
    let { initialPlanId: r, handleStepChange: i, referralTrialOfferId: a } = e,
        { paymentSources: s, selectedSkuId: o, selectedPlan: u } = (0, j.JL)(),
        { isGift: c, claimableRewards: m } = (0, v.wD)(),
        p = (0, _.Z)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: a,
        }),
        h = (0, C.Fv)(p),
        f = (0, d.id)(u, c, m);
    return (0, l.jsx)(
        P.J,
        ((t = F({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(s),
                        t = e.length < 1 && null == r ? y.h8.PLAN_SELECT : y.h8.REVIEW;
                    h && (t = y.h8.REVIEW),
                        f && e.length < 1 && (t = y.h8.SELECT_FREE_SKU),
                        i(t, { trackedFromStep: y.h8.PAYMENT_TYPE });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
let U = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, l.jsx)(x.I, F({}, e)),
            },
            {
                key: y.h8.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(M.q, F({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: y.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(R.x, F({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: y.h8.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(N.x, F({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, C.Fv)(e) ? null : Z.intl.string(Z.t["r+SebU"])),
                    sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                },
            },
            {
                key: y.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(H, F({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, C.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wI1)),
                },
            },
            {
                key: y.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, l.jsx)(E.Z, {}),
            },
            {
                key: y.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, l.jsx)(O.Z, {}),
            },
            {
                key: y.h8.REVIEW,
                renderStep: (e) => (0, l.jsx)(I.l, F({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, C.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHq)),
                },
            },
            {
                key: y.h8.CONFIRM,
                renderStep: (e) => (0, l.jsx)(T.b, F({}, e)),
            },
            {
                key: y.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(k.S, F({}, e)),
                options: {
                    bodyClassName: D.selectFreeSku,
                    isMediumModal: !0,
                },
            },
        ];
    },
    z = U();
function K(e) {
    let t = (0, i.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? L.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: r } = (0, u.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: s,
            giftingOrigin: d,
            giftMessage: m,
            giftRecipient: h,
            giftStyle: g,
            isGift: y,
            loadId: S,
            referralCode: x,
            subscriptionTier: P,
        } = e;
    if (null != P && !Object.values(L.Si).includes(P)) throw Error("subscriptionTier must be a premium subscription");
    let O = (0, p.ao)({
        location: "PremiumPaymentSelect",
        giftRecipient: h,
        isGift: null != y && y,
    });
    return (0, l.jsx)(u.Gt, {
        value: r,
        children: (0, l.jsx)(j.PaymentContextProvider, {
            loadId: S,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: U(O),
            skuIDs: [...L.YQ],
            isGift: y,
            defaultPlanId: null != n ? n : s,
            referralCode: x,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, l.jsx)(b.c1, {
                confirmationFooter: a,
                children: (0, l.jsx)(v.KB, {
                    isGift: y,
                    giftRecipient: null == h ? void 0 : h,
                    giftMessage: m,
                    giftStyle: g,
                    giftingOrigin: d,
                    children: (0, l.jsx)(G, F({}, e)),
                }),
            }),
        }),
    });
}
