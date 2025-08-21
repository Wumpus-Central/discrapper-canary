n.d(t, {
    STEPS: () => H,
    default: () => F,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    s = n(821849),
    o = n(100527),
    C = n(906732),
    d = n(367074),
    c = n(717401),
    p = n(509545),
    u = n(78839),
    x = n(669079),
    f = n(987209),
    h = n(563132),
    _ = n(409813),
    j = n(107998),
    m = n(791785),
    L = n(276442),
    b = n(793541),
    g = n(380898),
    y = n(710094),
    S = n(518727),
    v = n(293858),
    E = n(183813),
    O = n(614223),
    P = n(174827),
    w = n(846464),
    I = n(184160),
    Z = n(48175),
    M = n(981631),
    A = n(474936),
    k = n(388032),
    T = n(867983);
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
let R = [_.h8.PLAN_SELECT, _.h8.ADD_PAYMENT_STEPS, _.h8.REVIEW, _.h8.CONFIRM];
function U(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: u,
            onClose: j,
            trialId: L,
            trialFooterMessageOverride: b,
            reviewWarningMessage: g,
            openInvoiceId: y,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: E,
            postSuccessGuild: O,
            followupSKUInfo: P,
            renderHeader: w,
            applicationId: I,
            guildId: Z,
            referralTrialOfferId: k,
            skuId: T,
            returnRef: B,
            skipConfirm: R = !1,
            continueSessionToInitialStep: U,
        } = e,
        { analyticsLocations: N } = (0, C.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, s.Y2)());
    }, []);
    let { step: H } = (0, h.JL)(),
        { isGift: F, giftMessage: G, giftRecipient: D } = (0, f.wD)(),
        z = F && (0, x.pO)(D) && H === _.h8.PLAN_SELECT;
    return (0, r.jsx)(S.Z, {
        isConfirmationStep: H === _.h8.CONFIRM,
        children: (0, r.jsx)(m.PaymentModal, {
            analyticsLocations: N,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: M.NYc.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: u,
            onClose: j,
            trialId: L,
            isGift: F,
            trialFooterMessageOverride: b,
            reviewWarningMessage: g,
            planGroup: A.Y1,
            openInvoiceId: y,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: E,
            postSuccessGuild: O,
            followupSKUInfo: P,
            renderHeader: w,
            applicationId: I,
            guildId: Z,
            referralTrialOfferId: k,
            skuId: T,
            shakeWhilePurchasing: !0,
            isDynamicModal: z,
            returnRef: B,
            skipConfirm: R,
            continueSessionToInitialStep: U,
        }),
    });
}
function N(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: a } = e,
        { paymentSources: s, selectedSkuId: o, selectedPlan: C } = (0, h.JL)(),
        { isGift: d, claimableRewards: p } = (0, f.wD)(),
        u = (0, Z.Z)({
            isGift: d,
            skuId: o,
            referralTrialOfferId: a,
        }),
        x = (0, O.Fv)(u),
        j = (0, c.id)(C, d, p);
    return (0, r.jsx)(
        L.J,
        ((t = B({}, e)),
        (n = n =
            {
                breadcrumbSteps: R,
                onReturn: () => {
                    let e = Object.values(s),
                        t = e.length < 1 && null == i ? _.h8.PLAN_SELECT : _.h8.REVIEW;
                    x && (t = _.h8.REVIEW),
                        j && e.length < 1 && (t = _.h8.SELECT_FREE_SKU),
                        l(t, { trackedFromStep: _.h8.PAYMENT_TYPE });
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
let H = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(m.I, B({}, e)),
    },
    {
        key: _.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(w.q, B({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0,
        },
    },
    {
        key: _.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(I.x, B({}, e)),
        options: {
            renderHeader: !1,
            hideSlider: !0,
        },
    },
    {
        key: _.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(P.x, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : k.intl.string(k.t["r+SebW"])),
            sectionHeaderText: () => k.intl.string(k.t.UKbp1N),
        },
    },
    {
        key: _.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(N, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? null : k.intl.string(k.t.Sb6wIy)),
        },
    },
    {
        key: _.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(g.Z, {}),
    },
    {
        key: _.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(b.Z, {}),
    },
    {
        key: _.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(y.l, B({}, e)),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => ((0, O.Fv)(e) ? k.intl.string(k.t.UKbp1N) : k.intl.string(k.t.QBnNHh)),
        },
    },
    {
        key: _.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(v.b, B({}, e)),
    },
    {
        key: _.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, r.jsx)(E.S, B({}, e)),
        options: {
            bodyClassName: T.selectFreeSku,
            isDynamicModal: !0,
        },
    },
];
function F(e) {
    let t = (0, l.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
        n = (0, d.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: s,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: x,
            giftStyle: _,
            isGift: m,
            loadId: L,
            paymentModalBanner: b,
            referralCode: g,
            subscriptionTier: y,
        } = e;
    if (null != y && !Object.values(A.Si).includes(y)) throw Error("subscriptionTier must be a premium subscription");
    return (0, r.jsx)(C.Gt, {
        value: i,
        children: (0, r.jsx)(h.PaymentContextProvider, {
            loadId: L,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H,
            skuIDs: [...A.YQ],
            isGift: m,
            defaultPlanId: null != n ? n : s,
            referralCode: g,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(j.c1, {
                confirmationFooter: a,
                paymentModalBanner: b,
                children: (0, r.jsx)(f.KB, {
                    isGift: m,
                    giftRecipient: null == x ? void 0 : x,
                    giftMessage: p,
                    giftStyle: _,
                    giftingOrigin: c,
                    children: (0, r.jsx)(U, B({}, e)),
                }),
            }),
        }),
    });
}
