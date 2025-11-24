n.d(t, {
    STEPS: () => K,
    default: () => z,
}),
    n(415506),
    n(388685);
var r = n(54381),
    l = n(473749),
    a = n(442837),
    i = n(570140),
    o = n(821849),
    s = n(100527),
    d = n(906732),
    c = n(367074),
    u = n(717401),
    p = n(164275),
    m = n(602733),
    h = n(509545),
    f = n(78839),
    b = n(669079),
    g = n(987209),
    v = n(563132),
    x = n(409813),
    P = n(107998),
    y = n(45572),
    j = n(791785),
    S = n(276442),
    _ = n(793541),
    w = n(380898),
    C = n(710094),
    O = n(518727),
    E = n(293858),
    k = n(183813),
    I = n(614223),
    T = n(174827),
    N = n(846464),
    R = n(184160),
    M = n(48175),
    A = n(981631),
    Z = n(474936),
    L = n(388032),
    B = n(867983);
function D(e) {
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
let F = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];
function H(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            onComplete: s,
            transitionState: c,
            initialPlanId: u,
            subscriptionTier: m,
            onClose: f,
            trialId: P,
            trialFooterMessageOverride: S,
            reviewWarningMessage: _,
            openInvoiceId: w,
            onSubscriptionConfirmation: C,
            renderPurchaseConfirmation: E,
            postSuccessGuild: k,
            followupSKUInfo: I,
            renderHeader: T,
            applicationId: N,
            guildId: R,
            referralTrialOfferId: M,
            skuId: L,
            returnRef: B,
            skipConfirm: D = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, d.ZP)();
    l.useEffect(() => {
        h.Z.isLoadedForPremiumSKUs() || i.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: G, wasTier2PremiumBeforePurchase: U, selectedSkuId: K, purchaseState: z } = (0, v.JL)(),
        { isGift: W, giftMessage: V, giftRecipient: Y } = (0, g.wD)(),
        q = W && (0, b.pO)(Y) && G === x.h8.PLAN_SELECT,
        J = (0, p.P)(W, !!U, K),
        Q = z === y.A.PURCHASING;
    return (0, r.jsx)(O.Z, {
        isConfirmationStep: G === x.h8.CONFIRM && null == F && null == E,
        isEligibleForWowMoment: J,
        shouldPrefetchWowMoment: Q,
        children: (0, r.jsx)(j.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: A.NYc.PREMIUM,
            onComplete: s,
            transitionState: c,
            initialPlanId: u,
            giftMessage: V,
            subscriptionTier: m,
            onClose: f,
            trialId: P,
            isGift: W,
            trialFooterMessageOverride: S,
            reviewWarningMessage: _,
            planGroup: Z.Y1,
            openInvoiceId: w,
            onSubscriptionConfirmation: C,
            renderPurchaseConfirmation: E,
            postSuccessGuild: k,
            followupSKUInfo: I,
            renderHeader: T,
            applicationId: N,
            guildId: R,
            referralTrialOfferId: M,
            skuId: L,
            shakeWhilePurchasing: !0,
            isDynamicModal: q,
            returnRef: B,
            skipConfirm: D,
            continueSessionToInitialStep: F,
        }),
    });
}
function G(e) {
    var t, n;
    let { initialPlanId: l, handleStepChange: a, referralTrialOfferId: i } = e,
        { paymentSources: o, selectedSkuId: s, selectedPlan: d } = (0, v.JL)(),
        { isGift: c, claimableRewards: p } = (0, g.wD)(),
        m = (0, M.Z)({
            isGift: c,
            skuId: s,
            referralTrialOfferId: i,
        }),
        h = (0, I.Fv)(m),
        f = (0, u.id)(d, c, p);
    return (0, r.jsx)(
        S.J,
        ((t = D({}, e)),
        (n = n =
            {
                breadcrumbSteps: F,
                onReturn: () => {
                    let e = Object.values(o),
                        t = e.length < 1 && null == l ? x.h8.PLAN_SELECT : x.h8.REVIEW;
                    h && (t = x.h8.REVIEW),
                        f && e.length < 1 && (t = x.h8.SELECT_FREE_SKU),
                        a(t, { trackedFromStep: x.h8.PAYMENT_TYPE });
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
let U = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, r.jsx)(j.I, D({}, e)),
            },
            {
                key: x.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(N.q, D({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: x.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(R.x, D({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: x.h8.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(T.x, D({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? null : L.intl.string(L.t["r+SebU"])),
                    sectionHeaderText: () => L.intl.string(L.t.UKbp1N),
                },
            },
            {
                key: x.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(G, D({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? null : L.intl.string(L.t.Sb6wI1)),
                },
            },
            {
                key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(w.Z, {}),
            },
            {
                key: x.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(_.Z, {}),
            },
            {
                key: x.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(C.l, D({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)),
                },
            },
            {
                key: x.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(E.b, D({}, e)),
            },
            {
                key: x.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(k.S, D({}, e)),
                options: {
                    bodyClassName: B.selectFreeSku,
                    isMediumModal: !0,
                },
            },
        ];
    },
    K = U();
function z(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? Z.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: l } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: i,
            defaultPlanId: o,
            giftingOrigin: u,
            giftMessage: p,
            giftRecipient: h,
            giftStyle: b,
            isGift: x,
            loadId: y,
            referralCode: j,
            subscriptionTier: S,
        } = e;
    if (null != S && !Object.values(Z.Si).includes(S)) throw Error("subscriptionTier must be a premium subscription");
    let _ = (0, m.ao)({
        location: "PremiumPaymentSelect",
        giftRecipient: h,
        isGift: null != x && x,
    });
    return (0, r.jsx)(d.Gt, {
        value: l,
        children: (0, r.jsx)(v.PaymentContextProvider, {
            loadId: y,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: U(_),
            skuIDs: [...Z.YQ],
            isGift: x,
            defaultPlanId: null != n ? n : o,
            referralCode: j,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(P.c1, {
                confirmationFooter: i,
                children: (0, r.jsx)(g.KB, {
                    isGift: x,
                    giftRecipient: null == h ? void 0 : h,
                    giftMessage: p,
                    giftStyle: b,
                    giftingOrigin: u,
                    children: (0, r.jsx)(H, D({}, e)),
                }),
            }),
        }),
    });
}
