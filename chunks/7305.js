n.d(t, {
    STEPS: () => G,
    default: () => U,
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
    p = n(602733),
    m = n(509545),
    h = n(78839),
    f = n(669079),
    b = n(987209),
    g = n(563132),
    v = n(409813),
    x = n(107998),
    y = n(791785),
    P = n(276442),
    S = n(793541),
    j = n(380898),
    _ = n(710094),
    w = n(518727),
    O = n(293858),
    C = n(183813),
    k = n(614223),
    E = n(174827),
    I = n(846464),
    T = n(184160),
    N = n(48175),
    R = n(981631),
    M = n(474936),
    A = n(388032),
    Z = n(867983);
function L(e) {
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
let B = [v.h8.PLAN_SELECT, v.h8.ADD_PAYMENT_STEPS, v.h8.REVIEW, v.h8.CONFIRM];
function D(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            onComplete: s,
            transitionState: c,
            initialPlanId: u,
            subscriptionTier: p,
            onClose: h,
            trialId: x,
            trialFooterMessageOverride: P,
            reviewWarningMessage: S,
            openInvoiceId: j,
            onSubscriptionConfirmation: _,
            renderPurchaseConfirmation: O,
            postSuccessGuild: C,
            followupSKUInfo: k,
            renderHeader: E,
            applicationId: I,
            guildId: T,
            referralTrialOfferId: N,
            skuId: A,
            returnRef: Z,
            skipConfirm: L = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: D } = (0, d.ZP)();
    l.useEffect(() => {
        m.Z.isLoadedForPremiumSKUs() || i.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: F } = (0, g.JL)(),
        { isGift: H, giftMessage: G, giftRecipient: U } = (0, b.wD)(),
        z = H && (0, f.pO)(U) && F === v.h8.PLAN_SELECT;
    return (0, r.jsx)(w.Z, {
        isConfirmationStep: F === v.h8.CONFIRM && null == B && null == O,
        children: (0, r.jsx)(y.PaymentModal, {
            analyticsLocations: D,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: R.NYc.PREMIUM,
            onComplete: s,
            transitionState: c,
            initialPlanId: u,
            giftMessage: G,
            subscriptionTier: p,
            onClose: h,
            trialId: x,
            isGift: H,
            trialFooterMessageOverride: P,
            reviewWarningMessage: S,
            planGroup: M.Y1,
            openInvoiceId: j,
            onSubscriptionConfirmation: _,
            renderPurchaseConfirmation: O,
            postSuccessGuild: C,
            followupSKUInfo: k,
            renderHeader: E,
            applicationId: I,
            guildId: T,
            referralTrialOfferId: N,
            skuId: A,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: Z,
            skipConfirm: L,
            continueSessionToInitialStep: B,
        }),
    });
}
function F(e) {
    var t, n;
    let { initialPlanId: l, handleStepChange: a, referralTrialOfferId: i } = e,
        { paymentSources: o, selectedSkuId: s, selectedPlan: d } = (0, g.JL)(),
        { isGift: c, claimableRewards: p } = (0, b.wD)(),
        m = (0, N.Z)({
            isGift: c,
            skuId: s,
            referralTrialOfferId: i,
        }),
        h = (0, k.Fv)(m),
        f = (0, u.id)(d, c, p);
    return (0, r.jsx)(
        P.J,
        ((t = L({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(o),
                        t = e.length < 1 && null == l ? v.h8.PLAN_SELECT : v.h8.REVIEW;
                    h && (t = v.h8.REVIEW),
                        f && e.length < 1 && (t = v.h8.SELECT_FREE_SKU),
                        a(t, { trackedFromStep: v.h8.PAYMENT_TYPE });
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
                renderStep: (e) => (0, r.jsx)(y.I, L({}, e)),
            },
            {
                key: v.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(I.q, L({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: v.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(T.x, L({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: v.h8.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(E.x, L({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, k.Fv)(e) ? null : A.intl.string(A.t["r+SebU"])),
                    sectionHeaderText: () => A.intl.string(A.t.UKbp1N),
                },
            },
            {
                key: v.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(F, L({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, k.Fv)(e) ? null : A.intl.string(A.t.Sb6wI1)),
                },
            },
            {
                key: v.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(j.Z, {}),
            },
            {
                key: v.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(S.Z, {}),
            },
            {
                key: v.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(_.l, L({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, k.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHq)),
                },
            },
            {
                key: v.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(O.b, L({}, e)),
            },
            {
                key: v.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(C.S, L({}, e)),
                options: {
                    bodyClassName: Z.selectFreeSku,
                    isMediumModal: !0,
                },
            },
        ];
    },
    G = H();
function U(e) {
    let t = (0, a.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? M.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: l } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: i,
            defaultPlanId: o,
            giftingOrigin: u,
            giftMessage: m,
            giftRecipient: f,
            giftStyle: v,
            isGift: y,
            loadId: P,
            referralCode: S,
            subscriptionTier: j,
        } = e;
    if (null != j && !Object.values(M.Si).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let _ = (0, p.ao)({
        location: "PremiumPaymentSelect",
        giftRecipient: f,
        isGift: null != y && y,
    });
    return (0, r.jsx)(d.Gt, {
        value: l,
        children: (0, r.jsx)(g.PaymentContextProvider, {
            loadId: P,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H(_),
            skuIDs: [...M.YQ],
            isGift: y,
            defaultPlanId: null != n ? n : o,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(x.c1, {
                confirmationFooter: i,
                children: (0, r.jsx)(b.KB, {
                    isGift: y,
                    giftRecipient: null == f ? void 0 : f,
                    giftMessage: m,
                    giftStyle: v,
                    giftingOrigin: u,
                    children: (0, r.jsx)(D, L({}, e)),
                }),
            }),
        }),
    });
}
