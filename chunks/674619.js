t.d(n, { E: () => B, STEPS: () => W, default: () => K });
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
    g = t(166403),
    _ = t(45938),
    x = t(937008),
    T = t(156312),
    h = t(166532),
    P = t(491057),
    A = t(566980),
    S = t(546042),
    I = t(735305),
    j = t(343834),
    f = t(467122),
    R = t(623020),
    C = t(639289),
    M = t(838462),
    N = t(641819),
    y = t(800471),
    O = t(939665),
    b = t(957489),
    v = t(822426),
    k = t(169801),
    w = t(652215),
    U = t(788868),
    D = t(985018),
    L = t(982571);
let G = [h.pn.PLAN_SELECT, h.pn.ADD_PAYMENT_STEPS, h.pn.REVIEW, h.pn.CONFIRM];
function H(e) {
    let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: m,
            onClose: g,
            trialId: P,
            trialFooterMessageOverride: I,
            reviewWarningMessage: j,
            openInvoiceId: f,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: N,
            followupSKUInfo: y,
            renderHeader: O,
            applicationId: b,
            guildId: v,
            referralTrialOfferId: k,
            skuId: D,
            returnRef: L,
            skipConfirm: G = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: F } = (0, u.Ay)();
    l.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { step: B, selectedSkuId: W, purchaseState: K } = (0, T.P5)(),
        { isGift: V, giftMessage: Y, giftRecipient: z } = (0, x.Pv)(),
        q = V && (0, _.Ik)(z) && B === h.pn.PLAN_SELECT,
        Z = (0, p.T)(V, W),
        Q = K === A.h.PURCHASING;
    return (0, i.jsx)(C.A, {
        isConfirmationStep: B === h.pn.CONFIRM && null == H && null == M,
        isEligibleForWowMoment: Z,
        shouldPrefetchWowMoment: Q,
        children: (0, i.jsx)(S.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: w.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: Y,
            subscriptionTier: m,
            onClose: g,
            trialId: P,
            isGift: V,
            trialFooterMessageOverride: I,
            reviewWarningMessage: j,
            planGroup: U.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: N,
            followupSKUInfo: y,
            renderHeader: O,
            applicationId: b,
            guildId: v,
            referralTrialOfferId: k,
            skuId: D,
            shakeWhilePurchasing: !0,
            isDynamicModal: q,
            returnRef: L,
            skipConfirm: G,
            continueSessionToInitialStep: H,
        }),
    });
}
function F(e) {
    let { initialPlanId: n, handleStepChange: t, referralTrialOfferId: l } = e,
        { paymentSources: r, selectedSkuId: s, selectedPlan: a } = (0, T.P5)(),
        { isGift: o, claimableRewards: u } = (0, x.Pv)(),
        d = (0, k.A)({ isGift: o, skuId: s, referralTrialOfferId: l }),
        p = (0, y.lp)(d),
        m = (0, c.px)(a, o, u);
    return (0, i.jsx)(I.x, {
        ...e,
        breadcrumbSteps: G,
        onReturn: () => {
            let e = Object.values(r),
                i = e.length < 1 && null == n ? h.pn.PLAN_SELECT : h.pn.REVIEW;
            p && (i = h.pn.REVIEW),
                m && e.length < 1 && (i = h.pn.SELECT_FREE_SKU),
                t(i, { trackedFromStep: h.pn.PAYMENT_TYPE });
        },
    });
}
let B = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, i.jsx)(S.I, { ...e }) },
            {
                key: h.pn.SKU_SELECT,
                renderStep: (e) => (0, i.jsx)(b.F, { ...e }),
                options: { renderHeader: !1, hideSlider: !0, isDynamicModal: !e, isLargeModal: e },
            },
            {
                key: h.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, i.jsx)(v.K, { ...e }),
                options: { renderHeader: !1, hideSlider: !0 },
            },
            {
                key: h.pn.PLAN_SELECT,
                renderStep: (e) => (0, i.jsx)(O.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? null : D.intl.string(D.t["r+SebU"])),
                    sectionHeaderText: () => D.intl.string(D.t.UKbp1N),
                },
            },
            {
                key: h.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, i.jsx)(F, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? null : D.intl.string(D.t.Sb6wI1)),
                },
            },
            { key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, i.jsx)(f.A, {}) },
            { key: h.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(j.A, {}) },
            {
                key: h.pn.REVIEW,
                renderStep: (e) => (0, i.jsx)(R._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? D.intl.string(D.t.UKbp1N) : D.intl.string(D.t.QBnNHq)),
                },
            },
            { key: h.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(M._, { ...e }) },
            {
                key: h.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, i.jsx)(N.j, { ...e }),
                options: { bodyClassName: L.aw, isMediumModal: !0 },
            },
        ];
    },
    W = B();
function K(e) {
    let n = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        t = (0, d.cg)() ? U.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: l } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: _,
            isGift: h,
            loadId: A,
            referralCode: S,
            subscriptionTier: I,
            referralTrialOfferId: j,
        } = e;
    if (null != I && !Object.values(U.pe).includes(I)) throw Error("subscriptionTier must be a premium subscription");
    let f = (0, m.tA)({ location: "PremiumPaymentSelect", giftRecipient: E, isGift: h ?? !1 });
    return (0, i.jsx)(u.f5, {
        value: l,
        children: (0, i.jsx)(T.PaymentContextProvider, {
            loadId: A,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: B(f),
            skuIDs: [...U.oz],
            isGift: h,
            defaultPlanId: t ?? a,
            referralCode: S,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: j,
            children: (0, i.jsx)(P.Qt, {
                confirmationFooter: s,
                children: (0, i.jsx)(x.dX, {
                    isGift: h,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: _,
                    giftingOrigin: c,
                    children: (0, i.jsx)(H, { ...e }),
                }),
            }),
        }),
    });
}
