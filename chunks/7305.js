n.d(t, {
    STEPS: () => U,
    default: () => D,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    l = n(570140),
    o = n(821849),
    s = n(100527),
    d = n(906732),
    c = n(367074),
    C = n(998030),
    u = n(717401),
    p = n(509545),
    _ = n(78839),
    h = n(669079),
    f = n(987209),
    m = n(563132),
    x = n(409813),
    g = n(107998),
    j = n(791785),
    b = n(276442),
    v = n(793541),
    y = n(380898),
    S = n(710094),
    L = n(518727),
    I = n(293858),
    w = n(183813),
    P = n(614223),
    O = n(174827),
    E = n(846464),
    k = n(184160),
    T = n(48175),
    Z = n(981631),
    A = n(474936),
    N = n(388032),
    M = n(867983);
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
let B = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];
function F(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            onComplete: s,
            transitionState: c,
            initialPlanId: C,
            subscriptionTier: u,
            onClose: _,
            trialId: g,
            trialFooterMessageOverride: b,
            reviewWarningMessage: v,
            openInvoiceId: y,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: P,
            renderHeader: O,
            applicationId: E,
            guildId: k,
            referralTrialOfferId: T,
            skuId: N,
            returnRef: M,
            skipConfirm: R = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: F } = (0, d.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || l.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: G } = (0, m.JL)(),
        { isGift: H, giftMessage: U, giftRecipient: D } = (0, f.wD)(),
        z = H && (0, h.pO)(D) && G === x.h8.PLAN_SELECT;
    return (0, r.jsx)(L.Z, {
        isConfirmationStep: G === x.h8.CONFIRM && null == B && null == I,
        children: (0, r.jsx)(j.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: Z.NYc.PREMIUM,
            onComplete: s,
            transitionState: c,
            initialPlanId: C,
            giftMessage: U,
            subscriptionTier: u,
            onClose: _,
            trialId: g,
            isGift: H,
            trialFooterMessageOverride: b,
            reviewWarningMessage: v,
            planGroup: A.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: P,
            renderHeader: O,
            applicationId: E,
            guildId: k,
            referralTrialOfferId: T,
            skuId: N,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: M,
            skipConfirm: R,
            continueSessionToInitialStep: B,
        }),
    });
}
function G(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: a, referralTrialOfferId: l } = e,
        { paymentSources: o, selectedSkuId: s, selectedPlan: d } = (0, m.JL)(),
        { isGift: c, claimableRewards: C } = (0, f.wD)(),
        p = (0, T.Z)({
            isGift: c,
            skuId: s,
            referralTrialOfferId: l,
        }),
        _ = (0, P.Fv)(p),
        h = (0, u.id)(d, c, C);
    return (0, r.jsx)(
        b.J,
        ((t = R({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(o),
                        t = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
                    _ && (t = x.h8.REVIEW),
                        h && e.length < 1 && (t = x.h8.SELECT_FREE_SKU),
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
let H = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, r.jsx)(j.I, R({}, e)),
            },
            {
                key: x.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(E.q, R({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: x.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(k.x, R({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: x.h8.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(O.x, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : N.intl.string(N.t["r+SebW"])),
                    sectionHeaderText: () => N.intl.string(N.t.UKbp1N),
                },
            },
            {
                key: x.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(G, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : N.intl.string(N.t.Sb6wIy)),
                },
            },
            {
                key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(y.Z, {}),
            },
            {
                key: x.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(v.Z, {}),
            },
            {
                key: x.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(S.l, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? N.intl.string(N.t.UKbp1N) : N.intl.string(N.t.QBnNHh)),
                },
            },
            {
                key: x.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(I.b, R({}, e)),
            },
            {
                key: x.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(w.S, R({}, e)),
                options: {
                    bodyClassName: M.selectFreeSku,
                    isDynamicModal: !0,
                },
            },
        ];
    },
    U = H();
function D(e) {
    let t = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: l,
            defaultPlanId: o,
            giftingOrigin: u,
            giftMessage: p,
            giftRecipient: h,
            giftStyle: x,
            isGift: j,
            loadId: b,
            paymentModalBanner: v,
            referralCode: y,
            subscriptionTier: S,
        } = e;
    if (null != S && !Object.values(A.Si).includes(S)) throw Error("subscriptionTier must be a premium subscription");
    let L = (0, C.y)({ location: "PremiumPaymentSelect" }) && null != h && j;
    return (0, r.jsx)(d.Gt, {
        value: i,
        children: (0, r.jsx)(m.PaymentContextProvider, {
            loadId: b,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H(L),
            skuIDs: [...A.YQ],
            isGift: j,
            defaultPlanId: null != n ? n : o,
            referralCode: y,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(g.c1, {
                confirmationFooter: l,
                paymentModalBanner: v,
                children: (0, r.jsx)(f.KB, {
                    isGift: j,
                    giftRecipient: null == h ? void 0 : h,
                    giftMessage: p,
                    giftStyle: x,
                    giftingOrigin: u,
                    children: (0, r.jsx)(F, R({}, e)),
                }),
            }),
        }),
    });
}
