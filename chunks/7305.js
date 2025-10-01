n.d(t, {
    STEPS: () => U,
    default: () => H,
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
    c = n(717401),
    u = n(509545),
    p = n(78839),
    _ = n(669079),
    f = n(987209),
    h = n(563132),
    m = n(409813),
    x = n(107998),
    j = n(791785),
    g = n(276442),
    b = n(793541),
    L = n(380898),
    y = n(710094),
    v = n(518727),
    S = n(293858),
    O = n(183813),
    E = n(614223),
    I = n(174827),
    P = n(846464),
    w = n(184160),
    k = n(48175),
    T = n(981631),
    A = n(474936),
    M = n(388032),
    Z = n(729005);
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
let R = [m.h8.PLAN_SELECT, m.h8.ADD_PAYMENT_STEPS, m.h8.REVIEW, m.h8.CONFIRM];
function F(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            onComplete: s,
            transitionState: C,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: x,
            trialId: g,
            trialFooterMessageOverride: b,
            reviewWarningMessage: L,
            openInvoiceId: y,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: O,
            postSuccessGuild: E,
            followupSKUInfo: I,
            renderHeader: P,
            applicationId: w,
            guildId: k,
            referralTrialOfferId: M,
            skuId: Z,
            returnRef: N,
            skipConfirm: R = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: B } = (0, d.ZP)();
    i.useEffect(() => {
        u.Z.isLoadedForPremiumSKUs() || o.Z.wait(() => (0, l.Y2)());
    }, []);
    let { step: U } = (0, h.JL)(),
        { isGift: H, giftMessage: G, giftRecipient: D } = (0, f.wD)(),
        z = H && (0, _.pO)(D) && U === m.h8.PLAN_SELECT;
    return (0, r.jsx)(v.Z, {
        isConfirmationStep: U === m.h8.CONFIRM && null == F && null == O,
        children: (0, r.jsx)(j.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: a,
            analyticsSubscriptionType: T.NYc.PREMIUM,
            onComplete: s,
            transitionState: C,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: p,
            onClose: x,
            trialId: g,
            isGift: H,
            trialFooterMessageOverride: b,
            reviewWarningMessage: L,
            planGroup: A.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: S,
            renderPurchaseConfirmation: O,
            postSuccessGuild: E,
            followupSKUInfo: I,
            renderHeader: P,
            applicationId: w,
            guildId: k,
            referralTrialOfferId: M,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: N,
            skipConfirm: R,
            continueSessionToInitialStep: F,
        }),
    });
}
function B(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: a, referralTrialOfferId: o } = e,
        { paymentSources: l, selectedSkuId: s, selectedPlan: d } = (0, h.JL)(),
        { isGift: C, claimableRewards: u } = (0, f.wD)(),
        p = (0, k.Z)({
            isGift: C,
            skuId: s,
            referralTrialOfferId: o,
        }),
        _ = (0, E.Fv)(p),
        x = (0, c.id)(d, C, u);
    return (0, r.jsx)(
        g.J,
        ((t = N({}, e)),
        (n = n =
            {
                breadcrumbSteps: R,
                onReturn: () => {
                    let e = Object.values(l),
                        t = e.length < 1 && null == i ? m.h8.PLAN_SELECT : m.h8.REVIEW;
                    _ && (t = m.h8.REVIEW),
                        x && e.length < 1 && (t = m.h8.SELECT_FREE_SKU),
                        a(t, { trackedFromStep: m.h8.PAYMENT_TYPE });
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
let U = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(j.I, N({}, e)),
    },
    {
        key: m.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(P.q, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: m.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(w.x, N({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: m.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(I.x, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, E.Fv)(e) ? null : M.intl.string(M.t["r+SebW"])),
            sectionHeaderText: () => M.intl.string(M.t.UKbp1N),
        },
    },
    {
        key: m.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(B, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, E.Fv)(e) ? null : M.intl.string(M.t.Sb6wIy)),
        },
    },
    {
        key: m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(L.Z, {}),
    },
    {
        key: m.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(b.Z, {}),
    },
    {
        key: m.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(y.l, N({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, E.Fv)(e) ? M.intl.string(M.t.UKbp1N) : M.intl.string(M.t.QBnNHh)),
        },
    },
    {
        key: m.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(S.b, N({}, e)),
    },
    {
        key: m.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(O.S, N({}, e)),
        options: {
            bodyClassName: Z.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function H(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.getPremiumTypeSubscription()),
        n = (0, C.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, d.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: o,
            defaultPlanId: l,
            giftingOrigin: c,
            giftMessage: u,
            giftRecipient: _,
            giftStyle: m,
            isGift: j,
            loadId: g,
            paymentModalBanner: b,
            referralCode: L,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, r.jsx)(d.Gt, {
        value: i,
        children: (0, r.jsx)(h.PaymentContextProvider, {
            loadId: g,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: U,
            skuIDs: [...A.YQ],
            isGift: j,
            defaultPlanId: null != n ? n : l,
            referralCode: L,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(x.c1, {
                confirmationFooter: o,
                paymentModalBanner: b,
                children: (0, r.jsx)(f.KB, {
                    isGift: j,
                    giftRecipient: null == _ ? void 0 : _,
                    giftMessage: u,
                    giftStyle: m,
                    giftingOrigin: c,
                    children: (0, r.jsx)(F, N({}, e)),
                }),
            }),
        }),
    });
}
