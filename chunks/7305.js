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
    s = n(821849),
    o = n(100527),
    d = n(906732),
    c = n(367074),
    C = n(717401),
    u = n(602733),
    p = n(509545),
    h = n(78839),
    _ = n(669079),
    m = n(987209),
    f = n(563132),
    x = n(409813),
    g = n(107998),
    j = n(791785),
    b = n(276442),
    v = n(793541),
    S = n(380898),
    L = n(710094),
    y = n(518727),
    I = n(293858),
    w = n(183813),
    P = n(614223),
    E = n(174827),
    O = n(846464),
    T = n(184160),
    k = n(48175),
    N = n(981631),
    A = n(474936),
    Z = n(388032),
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
            onComplete: o,
            transitionState: c,
            initialPlanId: C,
            subscriptionTier: u,
            onClose: h,
            trialId: g,
            trialFooterMessageOverride: b,
            reviewWarningMessage: v,
            openInvoiceId: S,
            onSubscriptionConfirmation: L,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: P,
            renderHeader: E,
            applicationId: O,
            guildId: T,
            referralTrialOfferId: k,
            skuId: Z,
            returnRef: M,
            skipConfirm: R = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: F } = (0, d.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || l.Z.wait(() => (0, s.Y2)());
    }, []);
    let { step: H } = (0, f.JL)(),
        { isGift: G, giftMessage: U, giftRecipient: D } = (0, m.wD)(),
        z = G && (0, _.pO)(D) && H === x.h8.PLAN_SELECT;
    return (0, r.jsx)(y.Z, {
        isConfirmationStep: H === x.h8.CONFIRM && null == B && null == I,
        children: (0, r.jsx)(j.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: N.NYc.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: C,
            giftMessage: U,
            subscriptionTier: u,
            onClose: h,
            trialId: g,
            isGift: G,
            trialFooterMessageOverride: b,
            reviewWarningMessage: v,
            planGroup: A.Y1,
            openInvoiceId: S,
            onSubscriptionConfirmation: L,
            renderPurchaseConfirmation: I,
            postSuccessGuild: w,
            followupSKUInfo: P,
            renderHeader: E,
            applicationId: O,
            guildId: T,
            referralTrialOfferId: k,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: M,
            skipConfirm: R,
            continueSessionToInitialStep: B,
        }),
    });
}
function H(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: a, referralTrialOfferId: l } = e,
        { paymentSources: s, selectedSkuId: o, selectedPlan: d } = (0, f.JL)(),
        { isGift: c, claimableRewards: u } = (0, m.wD)(),
        p = (0, k.Z)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: l,
        }),
        h = (0, P.Fv)(p),
        _ = (0, C.id)(d, c, u);
    return (0, r.jsx)(
        b.J,
        ((t = R({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(s),
                        t = e.length < 1 && null == i ? x.h8.PLAN_SELECT : x.h8.REVIEW;
                    h && (t = x.h8.REVIEW),
                        _ && e.length < 1 && (t = x.h8.SELECT_FREE_SKU),
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
                renderStep: (e) => (0, r.jsx)(O.q, R({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: x.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(T.x, R({}, e)),
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
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t["r+SebW"])),
                    sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                },
            },
            {
                key: x.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(H, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wIy)),
                },
            },
            {
                key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(S.Z, {}),
            },
            {
                key: x.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(v.Z, {}),
            },
            {
                key: x.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(L.l, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHh)),
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
    U = G();
function D(e) {
    let t = (0, a.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        n = (0, c.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: l,
            defaultPlanId: s,
            giftingOrigin: C,
            giftMessage: p,
            giftRecipient: _,
            giftStyle: x,
            isGift: j,
            loadId: b,
            paymentModalBanner: v,
            referralCode: S,
            subscriptionTier: L,
        } = e;
    if (null != L && !Object.values(A.Si).includes(L)) throw Error("subscriptionTier must be a premium subscription");
    let y = (0, u.ao)({
        location: "PremiumPaymentSelect",
        giftRecipient: _,
        isGift: null != j && j,
    });
    return (0, r.jsx)(d.Gt, {
        value: i,
        children: (0, r.jsx)(f.PaymentContextProvider, {
            loadId: b,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: G(y),
            skuIDs: [...A.YQ],
            isGift: j,
            defaultPlanId: null != n ? n : s,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(g.c1, {
                confirmationFooter: l,
                paymentModalBanner: v,
                children: (0, r.jsx)(m.KB, {
                    isGift: j,
                    giftRecipient: null == _ ? void 0 : _,
                    giftMessage: p,
                    giftStyle: x,
                    giftingOrigin: C,
                    children: (0, r.jsx)(F, R({}, e)),
                }),
            }),
        }),
    });
}
