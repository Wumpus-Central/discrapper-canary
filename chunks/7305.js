n.r(t),
    n.d(t, {
        PremiumPaymentModal: function () {
            return R;
        },
        STEPS: function () {
            return B;
        },
        default: function () {
            return H;
        }
    }),
    n(411104),
    n(47120);
var i = n(200651),
    l = n(192379),
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
    S = n(710094),
    g = n(213264),
    E = n(92594),
    I = n(293858),
    M = n(183813),
    v = n(614223),
    y = n(174827),
    T = n(846464),
    N = n(184160),
    P = n(48175),
    Z = n(981631),
    A = n(474936),
    U = n(388032),
    k = n(809186);
let O = [_.h8.PLAN_SELECT, _.h8.ADD_PAYMENT_STEPS, _.h8.REVIEW, _.h8.CONFIRM];
function R(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: c, subscriptionTier: j, onClose: m, trialId: L, trialFooterMessageOverride: S, reviewWarningMessage: g, openInvoiceId: E, onSubscriptionConfirmation: I, renderPurchaseConfirmation: M, postSuccessGuild: v, followupSKUInfo: y, renderHeader: T, applicationId: N, guildId: P, referralTrialOfferId: U, skuId: k, returnRef: O, skipConfirm: R = !1, continueSessionToInitialStep: b } = e,
        { analyticsLocations: w } = (0, C.ZP)();
    l.useEffect(() => {
        !u.Z.isLoadedForPremiumSKUs() && r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: B } = (0, h.usePaymentContext)(),
        { isGift: H, giftMessage: F, giftRecipient: G } = (0, x.wD)(),
        D = H && (0, p.pO)(G) && B === _.h8.PLAN_SELECT;
    return (0, i.jsx)(f.PaymentModal, {
        analyticsLocations: w,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: Z.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        giftMessage: F,
        subscriptionTier: j,
        onClose: m,
        trialId: L,
        isGift: H,
        trialFooterMessageOverride: S,
        reviewWarningMessage: g,
        planGroup: A.Y1,
        openInvoiceId: E,
        onSubscriptionConfirmation: I,
        renderPurchaseConfirmation: M,
        postSuccessGuild: v,
        followupSKUInfo: y,
        renderHeader: T,
        applicationId: N,
        guildId: P,
        referralTrialOfferId: U,
        skuId: k,
        shakeWhilePurchasing: !0,
        isLargeModal: D,
        returnRef: O,
        skipConfirm: R,
        continueSessionToInitialStep: b
    });
}
function b(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, h.usePaymentContext)(),
        { isGift: i } = (0, x.wD)();
    return (0, v.Kp)({
        isTrial: null != e && e,
        isGift: i,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function w(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: l } = e,
        { paymentSources: s, selectedSkuId: r, selectedPlan: a } = (0, h.usePaymentContext)(),
        { isGift: o, claimableRewards: C } = (0, x.wD)(),
        u = b(
            (0, P.Z)({
                isGift: o,
                skuId: r,
                referralTrialOfferId: l
            })
        ),
        c = (0, d.id)(a, o, C);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(j.J, {
            ...e,
            breadcrumbSteps: O,
            onReturn: () => {
                let e = Object.values(s),
                    i = e.length < 1 && null == t ? _.h8.PLAN_SELECT : _.h8.REVIEW;
                u && (i = _.h8.REVIEW), c && e.length < 1 && (i = _.h8.SELECT_FREE_SKU), n(i, { trackedFromStep: _.h8.PAYMENT_TYPE });
            }
        })
    });
}
let B = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(f.PaymentPredicateStep, { ...e })
    },
    {
        key: _.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(T.q, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: _.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(N.x, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: _.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(y.x, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (b(e) ? null : U.intl.string(U.t['r+SebW']))
        }
    },
    {
        key: _.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(w, { ...e }) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (b(e) ? null : U.intl.string(U.t.Sb6wIy))
        }
    },
    {
        key: _.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(L.Z, {})
    },
    {
        key: _.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(m.Z, {})
    },
    {
        key: _.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(S.l, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (b(e) ? U.intl.string(U.t.UKbp1N) : U.intl.string(U.t.QBnNHh))
        }
    },
    {
        key: _.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(I.b, { ...e })
    },
    {
        key: _.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(M.S, { ...e }),
        options: {
            bodyClassName: k.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function H(e) {
    let t = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        l = (0, g.s)('premiumPaymentModal'),
        { subscriptionTier: r, isGift: a, giftRecipient: d, giftMessage: u, giftStyle: p, giftingOrigin: _, loadId: f, defaultPlanId: j, referralCode: m, repeatPurchase: L } = e;
    if (null != r && !Object.values(A.Si).includes(r)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: n,
        children: (0, i.jsx)(h.PaymentContextProvider, {
            loadId: f,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: B,
            skuIDs: [...A.YQ],
            isGift: a,
            defaultPlanId: j,
            referralCode: m,
            repeatPurchase: L,
            children: (0, i.jsxs)(x.KB, {
                isGift: a,
                giftRecipient: null == d ? void 0 : d,
                giftMessage: u,
                giftStyle: p,
                giftingOrigin: _,
                children: [(0, i.jsx)(R, { ...e }), l && (0, i.jsx)(E.t, {})]
            })
        })
    });
}
