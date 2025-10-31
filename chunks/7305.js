n.d(t, {
    STEPS: () => G,
    default: () => D,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    s = n(821849),
    o = n(100527),
    d = n(906732),
    c = n(367074),
    C = n(717401),
    u = n(602733),
    p = n(509545),
    h = n(78839),
    m = n(669079),
    _ = n(987209),
    f = n(563132),
    x = n(409813),
    j = n(107998),
    g = n(791785),
    b = n(276442),
    L = n(793541),
    v = n(380898),
    y = n(710094),
    S = n(518727),
    I = n(293858),
    w = n(183813),
    O = n(614223),
    P = n(174827),
    E = n(846464),
    k = n(184160),
    M = n(48175),
    T = n(981631),
    A = n(474936),
    N = n(388032),
    Z = n(867983);
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
let R = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];
function H(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            onComplete: o,
            transitionState: c,
            initialPlanId: C,
            subscriptionTier: u,
            onClose: h,
            trialId: j,
            trialFooterMessageOverride: b,
            reviewWarningMessage: L,
            openInvoiceId: v,
            onSubscriptionConfirmation: y,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: O,
            renderHeader: P,
            applicationId: E,
            guildId: k,
            referralTrialOfferId: M,
            skuId: N,
            returnRef: Z,
            skipConfirm: B = !1,
            continueSessionToInitialStep: R,
        } = e,
        { analyticsLocations: H } = (0, d.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)());
    }, []);
    let { step: U } = (0, f.JL)(),
        { isGift: F, giftMessage: G, giftRecipient: D } = (0, _.wD)(),
        W = F && (0, m.pO)(D) && U === x.h8.PLAN_SELECT;
    return (0, r.jsx)(S.Z, {
        isConfirmationStep: U === x.h8.CONFIRM && null == R && null == I,
        children: (0, r.jsx)(g.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: T.NYc.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: C,
            giftMessage: G,
            subscriptionTier: u,
            onClose: h,
            trialId: j,
            isGift: F,
            trialFooterMessageOverride: b,
            reviewWarningMessage: L,
            planGroup: A.Y1,
            openInvoiceId: v,
            onSubscriptionConfirmation: y,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: O,
            renderHeader: P,
            applicationId: E,
            guildId: k,
            referralTrialOfferId: M,
            skuId: N,
            shakeWhilePurchasing: !0,
            isDynamicModal: W,
            returnRef: Z,
            skipConfirm: B,
            continueSessionToInitialStep: R,
        }),
    });
}
function U(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: a } = e,
        { paymentSources: s, selectedSkuId: o, selectedPlan: d } = (0, f.JL)(),
        { isGift: c, claimableRewards: u } = (0, _.wD)(),
        p = (0, M.Z)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: a,
        }),
        h = (0, O.Fv)(p),
        m = (0, C.id)(d, c, u);
    return (0, r.jsx)(
        b.J,
        ((t = B({}, e)),
        (n = n =
            {
                breadcrumbSteps: R,
                onReturn: () => {
                    let e = Object.values(s),
                        t = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
                    h && (t = x.h8.REVIEW),
                        m && e.length < 1 && (t = x.h8.SELECT_FREE_SKU),
                        l(t, { trackedFromStep: x.h8.PAYMENT_TYPE });
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
let F = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, r.jsx)(g.I, B({}, e)),
            },
            {
                key: x.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(E.q, B({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: x.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(k.x, B({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: x.h8.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(P.x, B({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : N.intl.string(N.t["r+SebU"])),
                    sectionHeaderText: () => N.intl.string(N.t.UKbp1N),
                },
            },
            {
                key: x.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(U, B({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : N.intl.string(N.t.Sb6wI1)),
                },
            },
            {
                key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(v.Z, {}),
            },
            {
                key: x.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(L.Z, {}),
            },
            {
                key: x.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(y.l, B({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? N.intl.string(N.t.UKbp1N) : N.intl.string(N.t.QBnNHq)),
                },
            },
            {
                key: x.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(I.b, B({}, e)),
            },
            {
                key: x.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(w.S, B({}, e)),
                options: {
                    bodyClassName: Z.selectFreeSku,
                    isDynamicModal: !0,
                },
            },
        ];
    },
    G = F();
function D(e) {
    let t = (0, l.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: s,
            giftingOrigin: C,
            giftMessage: p,
            giftRecipient: m,
            giftStyle: x,
            isGift: g,
            loadId: b,
            paymentModalBanner: L,
            referralCode: v,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    let S = (0, u.ao)({
        location: "PremiumPaymentSelect",
        giftRecipient: m,
        isGift: null != g && g,
    });
    return (0, r.jsx)(d.Gt, {
        value: i,
        children: (0, r.jsx)(f.PaymentContextProvider, {
            loadId: b,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: F(S),
            skuIDs: [...A.YQ],
            isGift: g,
            defaultPlanId: null != n ? n : s,
            referralCode: v,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(j.c1, {
                confirmationFooter: a,
                paymentModalBanner: L,
                children: (0, r.jsx)(_.KB, {
                    isGift: g,
                    giftRecipient: null == m ? void 0 : m,
                    giftMessage: p,
                    giftStyle: x,
                    giftingOrigin: C,
                    children: (0, r.jsx)(H, B({}, e)),
                }),
            }),
        }),
    });
}
