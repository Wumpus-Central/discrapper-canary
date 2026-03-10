t.d(n, { E: () => F, STEPS: () => H, default: () => B });
var l = t(627968),
    i = t(64700),
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
    x = t(937008),
    S = t(156312),
    P = t(166532),
    T = t(491057),
    I = t(566980),
    h = t(546042),
    g = t(735305),
    A = t(343834),
    f = t(467122),
    j = t(623020),
    R = t(639289),
    M = t(838462),
    C = t(641819),
    y = t(800471),
    N = t(939665),
    O = t(957489),
    v = t(822426),
    b = t(169801),
    k = t(652215),
    w = t(788868),
    U = t(985018);
let G = [P.pn.PLAN_SELECT, P.pn.ADD_PAYMENT_STEPS, P.pn.REVIEW, P.pn.CONFIRM];
function D(e) {
    let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: m,
            onClose: _,
            trialId: T,
            trialFooterMessageOverride: g,
            reviewWarningMessage: A,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: M,
            postSuccessGuild: C,
            followupSKUInfo: y,
            renderHeader: N,
            applicationId: O,
            guildId: v,
            referralTrialOfferId: b,
            skuId: U,
            returnRef: G,
            skipConfirm: D = !1,
            continueSessionToInitialStep: L,
        } = e,
        { analyticsLocations: F } = (0, u.Ay)();
    i.useEffect(() => {
        E.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { step: H, selectedSkuId: B, purchaseState: W } = (0, S.P5)(),
        { isGift: K, giftMessage: V } = (0, x.Pv)(),
        z = (0, p.T)(K, B),
        q = W === I.h.PURCHASING;
    return (0, l.jsx)(R.A, {
        isConfirmationStep: H === P.pn.CONFIRM && null == L && null == M,
        isEligibleForWowMoment: z,
        shouldPrefetchWowMoment: q,
        children: (0, l.jsx)(h.PaymentModal, {
            analyticsLocations: F,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: k.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: m,
            onClose: _,
            trialId: T,
            isGift: K,
            trialFooterMessageOverride: g,
            reviewWarningMessage: A,
            planGroup: w.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: M,
            postSuccessGuild: C,
            followupSKUInfo: y,
            renderHeader: N,
            applicationId: O,
            guildId: v,
            referralTrialOfferId: b,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: G,
            skipConfirm: D,
            continueSessionToInitialStep: L,
        }),
    });
}
function L(e) {
    let { initialPlanId: n, handleStepChange: t, referralTrialOfferId: i } = e,
        { paymentSources: r, selectedSkuId: s, selectedPlan: a } = (0, S.P5)(),
        { isGift: o, claimableRewards: u } = (0, x.Pv)(),
        d = (0, b.A)({ isGift: o, skuId: s, referralTrialOfferId: i }),
        p = (0, y.lp)(d),
        m = (0, c.px)(a, o, u);
    return (0, l.jsx)(g.x, {
        ...e,
        breadcrumbSteps: G,
        onReturn: () => {
            let e = Object.values(r),
                l = e.length < 1 && null == n ? P.pn.PLAN_SELECT : P.pn.REVIEW;
            p && (l = P.pn.REVIEW),
                m && e.length < 1 && (l = P.pn.SELECT_FREE_SKU),
                t(l, { trackedFromStep: P.pn.PAYMENT_TYPE });
        },
    });
}
let F = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(h.I, { ...e }) },
            {
                key: P.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(O.F, { ...e }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    modalSizeGetter: (n) => {
                        let { canCurrentlyPurchasePremiumGroup: t } = n;
                        return e || t ? "xl" : "md";
                    },
                },
            },
            {
                key: P.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(v.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: P.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(N.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? null : U.intl.string(U.t["r+SebU"])),
                    sectionHeaderText: () => U.intl.string(U.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: n } = e;
                        return n ? "xl" : "md";
                    },
                },
            },
            {
                key: P.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(L, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? null : U.intl.string(U.t.Sb6wI1)),
                },
            },
            { key: P.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(f.A, {}) },
            { key: P.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(A.A, {}) },
            {
                key: P.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(j._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? U.intl.string(U.t.UKbp1N) : U.intl.string(U.t.QBnNHq)),
                },
            },
            {
                key: P.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(M._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: P.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(C.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    H = F();
function B(e) {
    let n = (0, r.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        t = (0, d.cg)() ? w.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: E,
            giftStyle: P,
            isGift: I,
            loadId: h,
            referralCode: g,
            subscriptionTier: A,
            referralTrialOfferId: f,
        } = e;
    if (null != A && !Object.values(w.pe).includes(A)) throw Error("subscriptionTier must be a premium subscription");
    let j = (0, m.tA)({ giftRecipient: E, isGift: I ?? !1 });
    return (0, l.jsx)(u.f5, {
        value: i,
        children: (0, l.jsx)(S.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: F(j),
            skuIDs: [...w.oz],
            isGift: I,
            defaultPlanId: t ?? a,
            referralCode: g,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: f,
            children: (0, l.jsx)(T.Qt, {
                confirmationFooter: s,
                children: (0, l.jsx)(x.dX, {
                    isGift: I,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: p,
                    giftStyle: P,
                    giftingOrigin: c,
                    children: (0, l.jsx)(D, { ...e }),
                }),
            }),
        }),
    });
}
