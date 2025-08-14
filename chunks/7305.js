n.d(r, {
    STEPS: () => U,
    default: () => H,
}),
    n(415506),
    n(388685);
var t = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(570140),
    l = n(821849),
    s = n(100527),
    C = n(906732),
    d = n(367074),
    c = n(717401),
    p = n(509545),
    u = n(78839),
    _ = n(669079),
    x = n(987209),
    f = n(563132),
    m = n(409813),
    h = n(107998),
    j = n(791785),
    L = n(276442),
    g = n(793541),
    b = n(380898),
    y = n(710094),
    S = n(518727),
    v = n(293858),
    E = n(183813),
    I = n(614223),
    P = n(174827),
    T = n(846464),
    O = n(184160),
    w = n(48175),
    Z = n(981631),
    M = n(474936),
    A = n(388032),
    R = n(867983);
function B(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            t.forEach(function (r) {
                var t;
                (t = n[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = t);
            });
    }
    return e;
}
let N = [m.h8.PLAN_SELECT, m.h8.ADD_PAYMENT_STEPS, m.h8.REVIEW, m.h8.CONFIRM];
function k(e) {
    let {
            analyticsLocation: r,
            analyticsObject: n,
            analyticsSourceLocation: o,
            onComplete: s,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: u,
            onClose: h,
            trialId: L,
            trialFooterMessageOverride: g,
            reviewWarningMessage: b,
            openInvoiceId: y,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: E,
            postSuccessGuild: I,
            followupSKUInfo: P,
            renderHeader: T,
            applicationId: O,
            guildId: w,
            referralTrialOfferId: A,
            skuId: R,
            returnRef: B,
            skipConfirm: N = !1,
            continueSessionToInitialStep: k,
        } = e,
        { analyticsLocations: F } = (0, C.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, l.Y2)());
    }, []);
    let { step: U } = (0, f.JL)(),
        { isGift: H, giftMessage: G, giftRecipient: D } = (0, x.wD)(),
        z = H && (0, _.pO)(D) && U === m.h8.PLAN_SELECT;
    return (0, t.jsx)(S.Z, {
        isConfirmationStep: U === m.h8.CONFIRM,
        children: (0, t.jsx)(j.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: r,
            analyticsObject: n,
            analyticsSourceLocation: o,
            analyticsSubscriptionType: Z.NYc.PREMIUM,
            onComplete: s,
            transitionState: d,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: u,
            onClose: h,
            trialId: L,
            isGift: H,
            trialFooterMessageOverride: g,
            reviewWarningMessage: b,
            planGroup: M.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: E,
            postSuccessGuild: I,
            followupSKUInfo: P,
            renderHeader: T,
            applicationId: O,
            guildId: w,
            referralTrialOfferId: A,
            skuId: R,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: B,
            skipConfirm: N,
            continueSessionToInitialStep: k,
        }),
    });
}
function F(e) {
    var r, n;
    let { initialPlanId: i, handleStepChange: o, referralTrialOfferId: a } = e,
        { paymentSources: l, selectedSkuId: s, selectedPlan: C } = (0, f.JL)(),
        { isGift: d, claimableRewards: p } = (0, x.wD)(),
        u = (0, w.Z)({
            isGift: d,
            skuId: s,
            referralTrialOfferId: a,
        }),
        _ = (0, I.Fv)(u),
        h = (0, c.id)(C, d, p);
    return (0, t.jsx)(
        L.J,
        ((r = B({}, e)),
        (n = n =
            {
                breadcrumbSteps: N,
                onReturn: () => {
                    let e = Object.values(l),
                        r = e.length < 1 && null == i ? m.h8.PLAN_SELECT : m.h8.REVIEW;
                    _ && (r = m.h8.REVIEW),
                        h && e.length < 1 && (r = m.h8.SELECT_FREE_SKU),
                        o(r, { trackedFromStep: m.h8.PAYMENT_TYPE });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : (function (e, r) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, t);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        r),
    );
}
let U = [
    {
        key: null,
        renderStep: (e) => (0, t.jsx)(j.I, B({}, e)),
    },
    {
        key: m.h8.SKU_SELECT,
        renderStep: (e) => (0, t.jsx)(T.q, B({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: m.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, t.jsx)(O.x, B({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: m.h8.PLAN_SELECT,
        renderStep: (e) => (0, t.jsx)(P.x, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? null : A.intl.string(A.t["r+SebW"])),
            sectionHeaderText: () => A.intl.string(A.t.UKbp1N),
        },
    },
    {
        key: m.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, t.jsx)(F, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? null : A.intl.string(A.t.Sb6wIy)),
        },
    },
    {
        key: m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, t.jsx)(b.Z, {}),
    },
    {
        key: m.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, t.jsx)(g.Z, {}),
    },
    {
        key: m.h8.REVIEW,
        renderStep: (e) => (0, t.jsx)(y.l, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, I.Fv)(e) ? A.intl.string(A.t.UKbp1N) : A.intl.string(A.t.QBnNHh)),
        },
    },
    {
        key: m.h8.CONFIRM,
        renderStep: (e) => (0, t.jsx)(v.b, B({}, e)),
    },
    {
        key: m.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, t.jsx)(E.S, B({}, e)),
        options: {
            bodyClassName: R.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function H(e) {
    let r = (0, o.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
        n = (0, d.Vi)() ? M.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, C.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: l,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: _,
            giftStyle: m,
            isGift: j,
            loadId: L,
            paymentModalBanner: g,
            referralCode: b,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(M.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, t.jsx)(C.Gt, {
        value: i,
        children: (0, t.jsx)(f.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : r,
            stepConfigs: U,
            skuIDs: [...M.YQ],
            isGift: j,
            defaultPlanId: null != n ? n : l,
            referralCode: b,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, t.jsx)(h.c1, {
                confirmationFooter: a,
                paymentModalBanner: g,
                children: (0, t.jsx)(x.KB, {
                    isGift: j,
                    giftRecipient: null == _ ? void 0 : _,
                    giftMessage: p,
                    giftStyle: m,
                    giftingOrigin: c,
                    children: (0, t.jsx)(k, B({}, e)),
                }),
            }),
        }),
    });
}
