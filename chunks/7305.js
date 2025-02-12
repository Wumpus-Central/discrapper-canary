n.d(t, {
    STEPS: () => H,
    default: () => B
}),
    n(411104),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    r = n(570140),
    a = n(821849),
    o = n(100527),
    C = n(906732),
    d = n(717401),
    u = n(509545),
    c = n(78839),
    p = n(669079),
    x = n(987209),
    h = n(563132),
    _ = n(409813),
    f = n(791785),
    j = n(276442),
    m = n(793541),
    L = n(380898),
    E = n(710094),
    g = n(213264),
    S = n(92594),
    I = n(293858),
    N = n(183813),
    T = n(614223),
    M = n(174827),
    v = n(846464),
    y = n(184160),
    Z = n(48175),
    P = n(981631),
    k = n(474936),
    U = n(388032),
    A = n(987434);
let O = [_.h8.PLAN_SELECT, _.h8.ADD_PAYMENT_STEPS, _.h8.REVIEW, _.h8.CONFIRM];
function R(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: c, subscriptionTier: j, onClose: m, trialId: L, trialFooterMessageOverride: E, reviewWarningMessage: g, openInvoiceId: S, onSubscriptionConfirmation: I, renderPurchaseConfirmation: N, postSuccessGuild: T, followupSKUInfo: M, renderHeader: v, applicationId: y, guildId: Z, referralTrialOfferId: U, skuId: A, returnRef: O, skipConfirm: R = !1, continueSessionToInitialStep: w } = e,
        { analyticsLocations: b } = (0, C.ZP)();
    i.useEffect(() => {
        u.Z.isLoadedForPremiumSKUs() || r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: H } = (0, h.JL)(),
        { isGift: B, giftMessage: F, giftRecipient: G } = (0, x.wD)(),
        D = B && (0, p.pO)(G) && H === _.h8.PLAN_SELECT;
    return (0, l.jsx)(f.PaymentModal, {
        analyticsLocations: b,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: P.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        giftMessage: F,
        subscriptionTier: j,
        onClose: m,
        trialId: L,
        isGift: B,
        trialFooterMessageOverride: E,
        reviewWarningMessage: g,
        planGroup: k.Y1,
        openInvoiceId: S,
        onSubscriptionConfirmation: I,
        renderPurchaseConfirmation: N,
        postSuccessGuild: T,
        followupSKUInfo: M,
        renderHeader: v,
        applicationId: y,
        guildId: Z,
        referralTrialOfferId: U,
        skuId: A,
        shakeWhilePurchasing: !0,
        isDynamicModal: D,
        returnRef: O,
        skipConfirm: R,
        continueSessionToInitialStep: w
    });
}
function w(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, h.JL)(),
        { isGift: l } = (0, x.wD)();
    return (0, T.Kp)({
        isTrial: null != e && e,
        isGift: l,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function b(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        { paymentSources: s, selectedSkuId: r, selectedPlan: a } = (0, h.JL)(),
        { isGift: o, claimableRewards: C } = (0, x.wD)(),
        u = w(
            (0, Z.Z)({
                isGift: o,
                skuId: r,
                referralTrialOfferId: i
            })
        ),
        c = (0, d.id)(a, o, C);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(j.J, {
            ...e,
            breadcrumbSteps: O,
            onReturn: () => {
                let e = Object.values(s),
                    l = e.length < 1 && null == t ? _.h8.PLAN_SELECT : _.h8.REVIEW;
                u && (l = _.h8.REVIEW), c && e.length < 1 && (l = _.h8.SELECT_FREE_SKU), n(l, { trackedFromStep: _.h8.PAYMENT_TYPE });
            }
        })
    });
}
let H = [
    {
        key: null,
        renderStep: (e) => (0, l.jsx)(f.I, { ...e })
    },
    {
        key: _.h8.SKU_SELECT,
        renderStep: (e) => (0, l.jsx)(v.q, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0,
            isDynamicModal: !0
        }
    },
    {
        key: _.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, l.jsx)(y.x, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: _.h8.PLAN_SELECT,
        renderStep: (e) => (0, l.jsx)(M.x, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (w(e) ? null : U.intl.string(U.t['r+SebW']))
        }
    },
    {
        key: _.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(b, { ...e }) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (w(e) ? null : U.intl.string(U.t.Sb6wIy))
        }
    },
    {
        key: _.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, l.jsx)(L.Z, {})
    },
    {
        key: _.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, l.jsx)(m.Z, {})
    },
    {
        key: _.h8.REVIEW,
        renderStep: (e) => (0, l.jsx)(E.l, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (w(e) ? U.intl.string(U.t.UKbp1N) : U.intl.string(U.t.QBnNHh))
        }
    },
    {
        key: _.h8.CONFIRM,
        renderStep: (e) => (0, l.jsx)(I.b, { ...e })
    },
    {
        key: _.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, l.jsx)(N.S, { ...e }),
        options: {
            bodyClassName: A.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function B(e) {
    let t = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        i = (0, g.s)('premiumPaymentModal'),
        { subscriptionTier: r, isGift: a, giftRecipient: d, giftMessage: u, giftStyle: p, giftingOrigin: _, loadId: f, defaultPlanId: j, referralCode: m, repeatPurchase: L } = e;
    if (null != r && !Object.values(k.Si).includes(r)) throw Error('subscriptionTier must be a premium subscription');
    return (0, l.jsx)(C.Gt, {
        value: n,
        children: (0, l.jsx)(h.PaymentContextProvider, {
            loadId: f,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H,
            skuIDs: [...k.YQ],
            isGift: a,
            defaultPlanId: j,
            referralCode: m,
            repeatPurchase: L,
            children: (0, l.jsxs)(x.KB, {
                isGift: a,
                giftRecipient: null == d ? void 0 : d,
                giftMessage: u,
                giftStyle: p,
                giftingOrigin: _,
                children: [(0, l.jsx)(R, { ...e }), i && (0, l.jsx)(S.t, {})]
            })
        })
    });
}
