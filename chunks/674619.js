t.d(n, { E: () => B, STEPS: () => W, default: () => K });
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(73153),
    a = t(73825),
    o = t(793574),
    u = t(688810),
    d = t(120700),
    c = t(40185),
    p = t(810498),
    m = t(117945),
    E = t(594832),
    _ = t(97352),
    S = t(166403),
    x = t(937008),
    P = t(156312),
    T = t(166532),
    I = t(491057),
    h = t(566980),
    g = t(546042),
    A = t(735305),
    f = t(343834),
    j = t(467122),
    R = t(623020),
    M = t(615310),
    C = t(639289),
    N = t(838462),
    O = t(641819),
    y = t(800471),
    v = t(939665),
    b = t(957489),
    k = t(822426),
    U = t(169801),
    w = t(652215),
    D = t(788868),
    G = t(985018);
let L = [T.pn.PLAN_SELECT, T.pn.ADD_PAYMENT_STEPS, T.pn.REVIEW, T.pn.CONFIRM];
function F(e) {
    let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            trialFooterMessageOverride: I,
            reviewWarningMessage: A,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: R,
            postSuccessGuild: N,
            followupSKUInfo: O,
            renderHeader: y,
            applicationId: v,
            guildId: b,
            referralTrialOfferId: k,
            skuId: U,
            returnRef: G,
            skipConfirm: L = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, u.Ay)();
    l.useEffect(() => {
        _.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: B, purchaseState: W } = (0, P.P5)(),
        K = (0, M.bB)(),
        { isGift: z, giftMessage: V } = (0, x.Pv)(),
        q = (0, m.T)(z, B),
        Y = W === h.h.PURCHASING;
    return (0, i.jsx)(C.A, {
        isConfirmationStep: K === T.pn.CONFIRM && null == F && null == R,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: Y,
        children: (0, i.jsx)(g.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: w.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            isGift: z,
            trialFooterMessageOverride: I,
            reviewWarningMessage: A,
            planGroup: D.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: R,
            postSuccessGuild: N,
            followupSKUInfo: O,
            renderHeader: y,
            applicationId: v,
            guildId: b,
            referralTrialOfferId: k,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: G,
            skipConfirm: L,
            continueSessionToInitialStep: F,
        }),
    });
}
function H(e) {
    let { initialPlanId: n, handleStepChange: t, referralTrialOfferId: l } = e,
        { paymentSources: r, selectedSkuId: s, selectedPlan: a } = (0, P.P5)(),
        { isGift: o, claimableRewards: u } = (0, x.Pv)(),
        d = (0, U.A)({ isGift: o, skuId: s, referralTrialOfferId: l }),
        c = (0, y.lp)(d),
        m = (0, p.px)(a, o, u);
    return (0, i.jsx)(A.x, {
        ...e,
        breadcrumbSteps: L,
        onReturn: () => {
            let e = Object.values(r),
                i = e.length < 1 && null == n ? T.pn.PLAN_SELECT : T.pn.REVIEW;
            c && (i = T.pn.REVIEW),
                m && e.length < 1 && (i = T.pn.SELECT_FREE_SKU),
                t(i, { trackedFromStep: T.pn.PAYMENT_TYPE });
        },
    });
}
let B = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, i.jsx)(g.I, { ...e }) },
            {
                key: T.pn.SKU_SELECT,
                renderStep: (e) => (0, i.jsx)(b.F, { ...e }),
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
                key: T.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, i.jsx)(k.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: T.pn.PLAN_SELECT,
                renderStep: (e) => (0, i.jsx)(v.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? null : G.intl.string(G.t["r+SebU"])),
                    sectionHeaderText: () => G.intl.string(G.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: n } = e;
                        return n ? "xl" : "md";
                    },
                },
            },
            {
                key: T.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, i.jsx)(H, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? null : G.intl.string(G.t.Sb6wI1)),
                },
            },
            { key: T.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, i.jsx)(j.A, {}) },
            { key: T.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(f.A, {}) },
            {
                key: T.pn.REVIEW,
                renderStep: (e) => (0, i.jsx)(R._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, y.lp)(e) ? G.intl.string(G.t.UKbp1N) : G.intl.string(G.t.QBnNHq)),
                },
            },
            {
                key: T.pn.CONFIRM,
                renderStep: (e) => (0, i.jsx)(N._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: T.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, i.jsx)(O.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    W = B();
function K(e) {
    let n = (0, r.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        t = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: p,
            giftingOrigin: m,
            giftMessage: _,
            giftRecipient: T,
            giftStyle: h,
            isGift: g,
            loadId: A,
            referralCode: f,
            subscriptionTier: j,
            referralTrialOfferId: R,
        } = e;
    if (null != j && !Object.values(D.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, E.tA)({ giftRecipient: T, isGift: g ?? !1 }),
        C = l.useMemo(() => B(M), [M]);
    return (0, i.jsx)(u.f5, {
        value: s,
        children: (0, i.jsx)(P.PaymentContextProvider, {
            loadId: A,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: C,
            skuIDs: [...D.oz],
            isGift: g,
            defaultPlanId: t ?? p,
            referralCode: f,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, i.jsx)(I.Qt, {
                confirmationFooter: a,
                children: (0, i.jsx)(x.dX, {
                    isGift: g,
                    giftRecipient: null == T ? void 0 : T,
                    giftMessage: _,
                    giftStyle: h,
                    giftingOrigin: m,
                    children: (0, i.jsx)(F, { ...e }),
                }),
            }),
        }),
    });
}
