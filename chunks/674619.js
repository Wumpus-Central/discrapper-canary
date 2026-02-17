t.d(n, { E: () => H, STEPS: () => B, default: () => W });
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(73153),
    a = t(73825),
    o = t(793574),
    u = t(688810),
    d = t(40185),
    c = t(810498),
    p = t(117945),
    m = t(594832),
    E = t(97352),
    _ = t(166403),
    P = t(45938),
    T = t(937008),
    h = t(156312),
    x = t(166532),
    g = t(491057),
    I = t(566980),
    S = t(546042),
    A = t(735305),
    f = t(343834),
    j = t(467122),
    M = t(623020),
    R = t(639289),
    C = t(838462),
    y = t(641819),
    N = t(800471),
    O = t(939665),
    v = t(957489),
    b = t(822426),
    k = t(169801),
    U = t(652215),
    w = t(788868),
    D = t(985018);
let L = [x.pn.PLAN_SELECT, x.pn.ADD_PAYMENT_STEPS, x.pn.REVIEW, x.pn.CONFIRM];
function G(e) {
    let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: m,
            onClose: _,
            trialId: g,
            trialFooterMessageOverride: A,
            reviewWarningMessage: f,
            openInvoiceId: j,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: C,
            postSuccessGuild: y,
            followupSKUInfo: N,
            renderHeader: O,
            applicationId: v,
            guildId: b,
            referralTrialOfferId: k,
            skuId: D,
            returnRef: L,
            skipConfirm: G = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, u.Ay)();
    l.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { step: B, selectedSkuId: W, purchaseState: K } = (0, h.P5)(),
        { isGift: V, giftMessage: q, giftRecipient: z } = (0, T.Pv)(),
        Z = V && (0, P.Ik)(z) && B === x.pn.PLAN_SELECT,
        Y = (0, p.T)(V, W),
        X = K === I.h.PURCHASING;
    return (0, i.jsx)(R.A, {
        isConfirmationStep: B === x.pn.CONFIRM && null == F && null == C,
        isEligibleForWowMoment: Y,
        shouldPrefetchWowMoment: X,
        children: (0, i.jsx)(S.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: U.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: q,
            subscriptionTier: m,
            onClose: _,
            trialId: g,
            isGift: V,
            trialFooterMessageOverride: A,
            reviewWarningMessage: f,
            planGroup: w.LE,
            openInvoiceId: j,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: C,
            postSuccessGuild: y,
            followupSKUInfo: N,
            renderHeader: O,
            applicationId: v,
            guildId: b,
            referralTrialOfferId: k,
            skuId: D,
            shakeWhilePurchasing: !0,
            isDynamicModal: Z,
            returnRef: L,
            skipConfirm: G,
            continueSessionToInitialStep: F,
        }),
    });
}
function F(e) {
    let { initialPlanId: n, handleStepChange: t, referralTrialOfferId: l } = e,
        { paymentSources: r, selectedSkuId: s, selectedPlan: a } = (0, h.P5)(),
        { isGift: o, claimableRewards: u } = (0, T.Pv)(),
        d = (0, k.A)({ isGift: o, skuId: s, referralTrialOfferId: l }),
        p = (0, N.lp)(d),
        m = (0, c.px)(a, o, u);
    return (0, i.jsx)(A.x, {
        ...e,
        breadcrumbSteps: L,
        onReturn: () => {
            let e = Object.values(r),
                i = e.length < 1 && null == n ? x.pn.PLAN_SELECT : x.pn.REVIEW;
            p && (i = x.pn.REVIEW),
                m && e.length < 1 && (i = x.pn.SELECT_FREE_SKU),
                t(i, { trackedFromStep: x.pn.PAYMENT_TYPE });
        },
    });
}
let H = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, i.jsx)(S.I, { ...e }) },
            {
                key: x.pn.SKU_SELECT,
                renderStep: (e) => (0, i.jsx)(v.F, { ...e }),
                options: { renderHeader: !1, hideSlider: !0, isDynamicModal: !e, isLargeModal: e },
            },
            {
                key: x.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, i.jsx)(b.K, { ...e }),
                options: { isMediumModal: !0, renderHeader: !1, hideSlider: !0 },
            },
            {
                key: x.pn.PLAN_SELECT,
                renderStep: (e) => (0, i.jsx)(O.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, N.lp)(e) ? null : D.intl.string(D.t["r+SebU"])),
                    sectionHeaderText: () => D.intl.string(D.t.UKbp1N),
                },
            },
            {
                key: x.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, i.jsx)(F, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, N.lp)(e) ? null : D.intl.string(D.t.Sb6wI1)),
                },
            },
            { key: x.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, i.jsx)(j.A, {}) },
            { key: x.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(f.A, {}) },
            {
                key: x.pn.REVIEW,
                renderStep: (e) => (0, i.jsx)(M._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, N.lp)(e) ? D.intl.string(D.t.UKbp1N) : D.intl.string(D.t.QBnNHq)),
                },
            },
            { key: x.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(C._, { ...e }), options: { isMediumModal: !0 } },
            {
                key: x.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, i.jsx)(y.j, { ...e }),
                options: { hideDefaultModalBody: !0 },
            },
        ];
    },
    B = H();
function W(e) {
    let n = (0, r.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        t = (0, d.cg)() ? w.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: l } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: P,
            isGift: x,
            loadId: I,
            referralCode: S,
            subscriptionTier: A,
            referralTrialOfferId: f,
        } = e;
    if (null != A && !Object.values(w.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let j = (0, m.tA)({ location: "PremiumPaymentSelect", giftRecipient: E, isGift: x ?? !1 });
    return (0, i.jsx)(u.f5, {
        value: l,
        children: (0, i.jsx)(h.PaymentContextProvider, {
            loadId: I,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: H(j),
            skuIDs: [...w.oz],
            isGift: x,
            defaultPlanId: t ?? a,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: f,
            children: (0, i.jsx)(g.Qt, {
                confirmationFooter: s,
                children: (0, i.jsx)(T.dX, {
                    isGift: x,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: P,
                    giftingOrigin: c,
                    children: (0, i.jsx)(G, { ...e }),
                }),
            }),
        }),
    });
}
