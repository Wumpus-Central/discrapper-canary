n.d(t, {
    STEPS: () => H,
    default: () => D,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(570140),
    l = n(821849),
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
    O = n(293858),
    P = n(183813),
    w = n(614223),
    E = n(174827),
    I = n(846464),
    k = n(184160),
    T = n(48175),
    A = n(981631),
    M = n(474936),
    Z = n(388032),
    N = n(729005);
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
            transitionState: C,
            initialPlanId: c,
            subscriptionTier: u,
            onClose: _,
            trialId: g,
            trialFooterMessageOverride: b,
            reviewWarningMessage: y,
            openInvoiceId: L,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: O,
            postSuccessGuild: P,
            followupSKUInfo: w,
            renderHeader: E,
            applicationId: I,
            guildId: k,
            referralTrialOfferId: T,
            skuId: Z,
            returnRef: N,
            skipConfirm: R = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: F } = (0, d.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || o.Z.wait(() => (0, l.Y2)());
    }, []);
    let { step: U } = (0, m.JL)(),
        { isGift: G, giftMessage: H, giftRecipient: D } = (0, h.wD)(),
        z = G && (0, f.pO)(D) && U === x.h8.PLAN_SELECT;
    return (0, r.jsx)(S.Z, {
        isConfirmationStep: U === x.h8.CONFIRM && null == B && null == O,
        children: (0, r.jsx)(j.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: A.NYc.PREMIUM,
            onComplete: s,
            transitionState: C,
            initialPlanId: c,
            giftMessage: H,
            subscriptionTier: u,
            onClose: _,
            trialId: g,
            isGift: G,
            trialFooterMessageOverride: b,
            reviewWarningMessage: y,
            planGroup: M.Y1,
            openInvoiceId: L,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: O,
            postSuccessGuild: P,
            followupSKUInfo: w,
            renderHeader: E,
            applicationId: I,
            guildId: k,
            referralTrialOfferId: T,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: N,
            skipConfirm: R,
            continueSessionToInitialStep: B,
        }),
    });
}
function U(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: a, referralTrialOfferId: o } = e,
        { paymentSources: l, selectedSkuId: s, selectedPlan: d } = (0, m.JL)(),
        { isGift: C, claimableRewards: c } = (0, h.wD)(),
        p = (0, T.Z)({
            isGift: C,
            skuId: s,
            referralTrialOfferId: o,
        }),
        _ = (0, w.Fv)(p),
        f = (0, u.id)(d, C, c);
    return (0, r.jsx)(
        b.J,
        ((t = R({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(l),
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
let G = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, r.jsx)(j.I, R({}, e)),
            },
            {
                key: x.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(I.q, R({}, e)),
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
                renderStep: (e) => (0, r.jsx)(E.x, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? null : Z.intl.string(Z.t["r+SebW"])),
                    sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                },
            },
            {
                key: x.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(U, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wIy)),
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
                renderStep: (e) => (0, r.jsx)(v.l, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, w.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHh)),
                },
            },
            {
                key: x.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(O.b, R({}, e)),
            },
            {
                key: x.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(P.S, R({}, e)),
                options: {
                    bodyClassName: N.selectFreeSku,
                    isDynamicModal: !0,
                },
            },
        ];
    },
    H = G();
function D(e) {
    let t = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        n = (0, C.Vi)() ? M.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: o,
            defaultPlanId: l,
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
    if (null != v && !Object.values(M.Si).includes(v)) throw Error("subscriptionTier must be a premium subscription");
    let S = (0, c.y)({ location: "PremiumPaymentSelect" }) && null != f && j;
    return (0, r.jsx)(d.Gt, {
        value: i,
        children: (0, r.jsx)(m.PaymentContextProvider, {
            loadId: b,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: G(S),
            skuIDs: [...M.YQ],
            isGift: j,
            defaultPlanId: null != n ? n : l,
            referralCode: L,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(g.c1, {
                confirmationFooter: o,
                paymentModalBanner: y,
                children: (0, r.jsx)(h.KB, {
                    isGift: j,
                    giftRecipient: null == f ? void 0 : f,
                    giftMessage: p,
                    giftStyle: x,
                    giftingOrigin: u,
                    children: (0, r.jsx)(F, R({}, e)),
                }),
            }),
        }),
    });
}
