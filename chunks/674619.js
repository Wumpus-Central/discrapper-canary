n.d(t, { E: () => H, STEPS: () => B, default: () => W });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    d = n(40185),
    c = n(810498),
    p = n(117945),
    m = n(594832),
    E = n(97352),
    _ = n(166403),
    h = n(45938),
    x = n(937008),
    S = n(156312),
    P = n(166532),
    I = n(491057),
    T = n(566980),
    g = n(546042),
    A = n(735305),
    j = n(343834),
    f = n(467122),
    M = n(623020),
    R = n(639289),
    y = n(838462),
    C = n(641819),
    N = n(800471),
    v = n(939665),
    O = n(957489),
    b = n(822426),
    k = n(169801),
    w = n(652215),
    U = n(788868),
    D = n(985018);
let L = [P.pn.PLAN_SELECT, P.pn.ADD_PAYMENT_STEPS, P.pn.REVIEW, P.pn.CONFIRM];
function G(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: m,
            onClose: _,
            trialId: I,
            trialFooterMessageOverride: A,
            reviewWarningMessage: j,
            openInvoiceId: f,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: y,
            postSuccessGuild: C,
            followupSKUInfo: N,
            renderHeader: v,
            applicationId: O,
            guildId: b,
            referralTrialOfferId: k,
            skuId: D,
            returnRef: L,
            skipConfirm: G = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, u.Ay)();
    i.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || r.h.wait(() => (0, a.zS)());
    }, []);
    let { step: B, selectedSkuId: W, purchaseState: z } = (0, S.P5)(),
        { isGift: K, giftMessage: V, giftRecipient: Z } = (0, x.Pv)(),
        q = K && (0, h.Ik)(Z) && B === P.pn.PLAN_SELECT,
        Y = (0, p.T)(K, W),
        X = z === T.h.PURCHASING;
    return (0, l.jsx)(R.A, {
        isConfirmationStep: B === P.pn.CONFIRM && null == F && null == y,
        isEligibleForWowMoment: Y,
        shouldPrefetchWowMoment: X,
        children: (0, l.jsx)(g.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            analyticsSubscriptionType: w.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: m,
            onClose: _,
            trialId: I,
            isGift: K,
            trialFooterMessageOverride: A,
            reviewWarningMessage: j,
            planGroup: U.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: y,
            postSuccessGuild: C,
            followupSKUInfo: N,
            renderHeader: v,
            applicationId: O,
            guildId: b,
            referralTrialOfferId: k,
            skuId: D,
            shakeWhilePurchasing: !0,
            isDynamicModal: q,
            returnRef: L,
            skipConfirm: G,
            continueSessionToInitialStep: F,
        }),
    });
}
function F(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        { paymentSources: s, selectedSkuId: r, selectedPlan: a } = (0, S.P5)(),
        { isGift: o, claimableRewards: u } = (0, x.Pv)(),
        d = (0, k.A)({ isGift: o, skuId: r, referralTrialOfferId: i }),
        p = (0, N.lp)(d),
        m = (0, c.px)(a, o, u);
    return (0, l.jsx)(A.x, {
        ...e,
        breadcrumbSteps: L,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? P.pn.PLAN_SELECT : P.pn.REVIEW;
            p && (l = P.pn.REVIEW),
                m && e.length < 1 && (l = P.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: P.pn.PAYMENT_TYPE });
        },
    });
}
let H = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(g.I, { ...e }) },
            {
                key: P.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(O.F, { ...e }),
                options: { renderHeader: !1, hideSlider: !0, isDynamicModal: !e, isLargeModal: e },
            },
            {
                key: P.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(b.K, { ...e }),
                options: { isMediumModal: !0, renderHeader: !1, hideSlider: !0 },
            },
            {
                key: P.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(v.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, N.lp)(e) ? null : D.intl.string(D.t["r+SebU"])),
                    sectionHeaderText: () => D.intl.string(D.t.UKbp1N),
                },
            },
            {
                key: P.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(F, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, N.lp)(e) ? null : D.intl.string(D.t.Sb6wI1)),
                },
            },
            { key: P.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(f.A, {}) },
            { key: P.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(j.A, {}) },
            {
                key: P.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(M._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, N.lp)(e) ? D.intl.string(D.t.UKbp1N) : D.intl.string(D.t.QBnNHq)),
                },
            },
            { key: P.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(y._, { ...e }), options: { isMediumModal: !0 } },
            {
                key: P.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(C.j, { ...e }),
                options: { hideDefaultModalBody: !0 },
            },
        ];
    },
    B = H();
function W(e) {
    let t = (0, s.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        n = (0, d.cg)() ? U.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: r,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: h,
            isGift: P,
            loadId: T,
            referralCode: g,
            subscriptionTier: A,
            referralTrialOfferId: j,
        } = e;
    if (null != A && !Object.values(U.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let f = (0, m.tA)({ giftRecipient: E, isGift: P ?? !1 });
    return (0, l.jsx)(u.f5, {
        value: i,
        children: (0, l.jsx)(S.PaymentContextProvider, {
            loadId: T,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: H(f),
            skuIDs: [...U.oz],
            isGift: P,
            defaultPlanId: n ?? a,
            referralCode: g,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: j,
            children: (0, l.jsx)(I.Qt, {
                confirmationFooter: r,
                children: (0, l.jsx)(x.dX, {
                    isGift: P,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: h,
                    giftingOrigin: c,
                    children: (0, l.jsx)(G, { ...e }),
                }),
            }),
        }),
    });
}
