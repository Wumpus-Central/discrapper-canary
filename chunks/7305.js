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
    C = n(367074),
    c = n(998030),
    u = n(717401),
    p = n(509545),
    _ = n(78839),
    f = n(669079),
    h = n(987209),
    m = n(563132),
    x = n(409813),
    g = n(107998),
    j = n(791785),
    b = n(276442),
    y = n(793541),
    L = n(380898),
    v = n(710094),
    S = n(518727),
    w = n(293858),
    I = n(183813),
    P = n(614223),
    O = n(174827),
    E = n(846464),
    k = n(184160),
    T = n(48175),
    M = n(981631),
    A = n(474936),
    Z = n(388032),
    B = n(867983);
function N(e) {
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
let R = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];
function G(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            onComplete: s,
            transitionState: C,
            initialPlanId: c,
            subscriptionTier: u,
            onClose: _,
            trialId: g,
            trialFooterMessageOverride: b,
            reviewWarningMessage: y,
            openInvoiceId: L,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: w,
            postSuccessGuild: I,
            followupSKUInfo: P,
            renderHeader: O,
            applicationId: E,
            guildId: k,
            referralTrialOfferId: T,
            skuId: Z,
            returnRef: B,
            skipConfirm: N = !1,
            continueSessionToInitialStep: R,
        } = e,
        { analyticsLocations: G } = (0, d.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || l.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: F } = (0, m.JL)(),
        { isGift: H, giftMessage: U, giftRecipient: D } = (0, h.wD)(),
        z = H && (0, f.pO)(D) && F === x.h8.PLAN_SELECT;
    return (0, r.jsx)(S.Z, {
        isConfirmationStep: F === x.h8.CONFIRM && null == R && null == w,
        children: (0, r.jsx)(j.PaymentModal, {
            analyticsLocations: G,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: M.NYc.PREMIUM,
            onComplete: s,
            transitionState: C,
            initialPlanId: c,
            giftMessage: U,
            subscriptionTier: u,
            onClose: _,
            trialId: g,
            isGift: H,
            trialFooterMessageOverride: b,
            reviewWarningMessage: y,
            planGroup: A.Y1,
            openInvoiceId: L,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: w,
            postSuccessGuild: I,
            followupSKUInfo: P,
            renderHeader: O,
            applicationId: E,
            guildId: k,
            referralTrialOfferId: T,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: B,
            skipConfirm: N,
            continueSessionToInitialStep: R,
        }),
    });
}
function F(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: a, referralTrialOfferId: l } = e,
        { paymentSources: o, selectedSkuId: s, selectedPlan: d } = (0, m.JL)(),
        { isGift: C, claimableRewards: c } = (0, h.wD)(),
        p = (0, T.Z)({
            isGift: C,
            skuId: s,
            referralTrialOfferId: l,
        }),
        _ = (0, P.Fv)(p),
        f = (0, u.id)(d, C, c);
    return (0, r.jsx)(
        b.J,
        ((t = N({}, e)),
        (n = n =
            {
                breadcrumbSteps: R,
                onReturn: () => {
                    let e = Object.values(o),
                        t = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
                    _ && (t = x.h8.REVIEW),
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
let H = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, r.jsx)(j.I, N({}, e)),
            },
            {
                key: x.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(E.q, N({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: x.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(k.x, N({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: x.h8.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(O.x, N({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t["r+SebW"])),
                    sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                },
            },
            {
                key: x.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(F, N({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wIy)),
                },
            },
            {
                key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(L.Z, {}),
            },
            {
                key: x.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(y.Z, {}),
            },
            {
                key: x.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(v.l, N({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHh)),
                },
            },
            {
                key: x.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(w.b, N({}, e)),
            },
            {
                key: x.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(I.S, N({}, e)),
                options: {
                    bodyClassName: B.selectFreeSku,
                    isDynamicModal: !0,
                },
            },
        ];
    },
    U = H();
function D(e) {
    let t = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        n = (0, C.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: l,
            defaultPlanId: o,
            giftingOrigin: u,
            giftMessage: p,
            giftRecipient: f,
            giftStyle: x,
            isGift: j,
            loadId: b,
            paymentModalBanner: y,
            referralCode: L,
            subscriptionTier: v,
        } = e;
    if (null != v && !Object.values(A.Si).includes(v)) throw Error("subscriptionTier must be a premium subscription");
    let S = (0, c.y)({ location: "PremiumPaymentSelect" }) && null != f && j;
    return (0, r.jsx)(d.Gt, {
        value: i,
        children: (0, r.jsx)(m.PaymentContextProvider, {
            loadId: b,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H(S),
            skuIDs: [...A.YQ],
            isGift: j,
            defaultPlanId: null != n ? n : o,
            referralCode: L,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(g.c1, {
                confirmationFooter: l,
                paymentModalBanner: y,
                children: (0, r.jsx)(h.KB, {
                    isGift: j,
                    giftRecipient: null == f ? void 0 : f,
                    giftMessage: p,
                    giftStyle: x,
                    giftingOrigin: u,
                    children: (0, r.jsx)(G, N({}, e)),
                }),
            }),
        }),
    });
}
