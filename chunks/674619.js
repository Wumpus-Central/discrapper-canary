t.d(n, { E: () => W, STEPS: () => K, default: () => z });
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
    T = t(156312),
    I = t(166532),
    P = t(491057),
    h = t(566980),
    A = t(546042),
    g = t(735305),
    f = t(343834),
    j = t(467122),
    R = t(623020),
    M = t(970077),
    C = t(615310),
    N = t(639289),
    O = t(838462),
    y = t(641819),
    v = t(800471),
    b = t(939665),
    k = t(957489),
    U = t(822426),
    w = t(169801),
    D = t(652215),
    G = t(788868),
    L = t(985018);
let F = [I.pn.PLAN_SELECT, I.pn.ADD_PAYMENT_STEPS, I.pn.REVIEW, I.pn.CONFIRM];
function H(e) {
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
            trialFooterMessageOverride: P,
            reviewWarningMessage: g,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: R,
            postSuccessGuild: M,
            followupSKUInfo: O,
            renderHeader: y,
            applicationId: v,
            guildId: b,
            referralTrialOfferId: k,
            skuId: U,
            returnRef: w,
            skipConfirm: L = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, u.Ay)();
    l.useEffect(() => {
        _.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: B, purchaseState: W } = (0, T.P5)(),
        K = (0, C.bB)(),
        { isGift: z, giftMessage: V } = (0, x.Pv)(),
        q = (0, m.T)(z, B),
        Y = W === h.h.PURCHASING;
    return (0, i.jsx)(N.A, {
        isConfirmationStep: K === I.pn.CONFIRM && null == F && null == R,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: Y,
        children: (0, i.jsx)(A.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: D.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            isGift: z,
            trialFooterMessageOverride: P,
            reviewWarningMessage: g,
            planGroup: G.LE,
            openInvoiceId: f,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: R,
            postSuccessGuild: M,
            followupSKUInfo: O,
            renderHeader: y,
            applicationId: v,
            guildId: b,
            referralTrialOfferId: k,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: w,
            skipConfirm: L,
            continueSessionToInitialStep: F,
        }),
    });
}
function B(e) {
    let { initialPlanId: n, handleStepChange: t, referralTrialOfferId: l } = e,
        { paymentSources: r, selectedSkuId: s } = (0, T.P5)(),
        a = (0, M.A)(),
        { isGift: o, claimableRewards: u } = (0, x.Pv)(),
        d = (0, w.A)({ isGift: o, skuId: s, referralTrialOfferId: l }),
        c = (0, v.lp)(d),
        m = (0, p.px)(a, o, u);
    return (0, i.jsx)(g.x, {
        ...e,
        breadcrumbSteps: F,
        onReturn: () => {
            let e = Object.values(r),
                i = e.length < 1 && null == n ? I.pn.PLAN_SELECT : I.pn.REVIEW;
            c && (i = I.pn.REVIEW),
                m && e.length < 1 && (i = I.pn.SELECT_FREE_SKU),
                t(i, { trackedFromStep: I.pn.PAYMENT_TYPE });
        },
    });
}
let W = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, i.jsx)(A.I, { ...e }) },
            {
                key: I.pn.SKU_SELECT,
                renderStep: (e) => (0, i.jsx)(k.F, { ...e }),
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
                key: I.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, i.jsx)(U.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: I.pn.PLAN_SELECT,
                renderStep: (e) => (0, i.jsx)(b.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? null : L.intl.string(L.t["r+SebU"])),
                    sectionHeaderText: () => L.intl.string(L.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: n } = e;
                        return n ? "xl" : "md";
                    },
                },
            },
            {
                key: I.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, i.jsx)(B, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)),
                },
            },
            { key: I.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, i.jsx)(j.A, {}) },
            { key: I.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(f.A, {}) },
            {
                key: I.pn.REVIEW,
                renderStep: (e) => (0, i.jsx)(R._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)),
                },
            },
            {
                key: I.pn.CONFIRM,
                renderStep: (e) => (0, i.jsx)(O._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: I.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, i.jsx)(y.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    K = W();
function z(e) {
    let n = (0, r.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        t = (0, c.cg)() ? G.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: p,
            giftingOrigin: m,
            giftMessage: _,
            giftRecipient: I,
            giftStyle: h,
            isGift: A,
            loadId: g,
            referralCode: f,
            subscriptionTier: j,
            referralTrialOfferId: R,
        } = e;
    if (null != j && !Object.values(G.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, E.tA)({ giftRecipient: I, isGift: A ?? !1 }),
        C = l.useMemo(() => W(M), [M]);
    return (0, i.jsx)(u.f5, {
        value: s,
        children: (0, i.jsx)(T.PaymentContextProvider, {
            loadId: g,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: C,
            skuIDs: [...G.oz],
            isGift: A,
            defaultPlanId: t ?? p,
            referralCode: f,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, i.jsx)(P.Qt, {
                confirmationFooter: a,
                children: (0, i.jsx)(x.dX, {
                    isGift: A,
                    giftRecipient: null == I ? void 0 : I,
                    giftMessage: _,
                    giftStyle: h,
                    giftingOrigin: m,
                    children: (0, i.jsx)(H, { ...e }),
                }),
            }),
        }),
    });
}
