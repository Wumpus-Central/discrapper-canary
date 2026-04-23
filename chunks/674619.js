n.d(t, { E: () => K, STEPS: () => z, default: () => V });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    d = n(120700),
    c = n(558620),
    p = n(94420),
    m = n(40185),
    E = n(810498),
    S = n(117945),
    _ = n(594832),
    I = n(97352),
    P = n(166403),
    A = n(937008),
    x = n(156312),
    h = n(166532),
    T = n(491057),
    g = n(566980),
    f = n(546042),
    j = n(735305),
    R = n(343834),
    M = n(467122),
    C = n(623020),
    y = n(615310),
    N = n(639289),
    k = n(838462),
    b = n(641819),
    O = n(800471),
    v = n(939665),
    w = n(957489),
    U = n(822426),
    D = n(169801),
    G = n(652215),
    L = n(788868),
    F = n(985018);
let H = [h.pn.PLAN_SELECT, h.pn.ADD_PAYMENT_STEPS, h.pn.REVIEW, h.pn.CONFIRM];
function B(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: m,
            onClose: E,
            trialId: _,
            trialFooterMessageOverride: P,
            reviewWarningMessage: T,
            openInvoiceId: j,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: C,
            followupSKUInfo: k,
            renderHeader: b,
            applicationId: O,
            guildId: v,
            referralTrialOfferId: w,
            skuId: U,
            returnRef: D,
            skipConfirm: F = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: B } = (0, u.Ay)();
    i.useEffect(() => {
        I.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let W = (0, p.t4)((e) => e.selectedSkuId),
        { purchaseState: K } = (0, x.P5)(),
        z = (0, y.bB)(),
        { isGift: V, giftMessage: q } = (0, A.Pv)(),
        Z = (0, S.T)(V, W),
        Y = K === g.h.PURCHASING;
    return (0, l.jsx)(N.A, {
        isConfirmationStep: z === h.pn.CONFIRM && null == H && null == M,
        isEligibleForWowMoment: Z,
        shouldPrefetchWowMoment: Y,
        children: (0, l.jsx)(f.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: G.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: q,
            subscriptionTier: m,
            onClose: E,
            trialId: _,
            isGift: V,
            trialFooterMessageOverride: P,
            reviewWarningMessage: T,
            planGroup: L.LE,
            openInvoiceId: j,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: C,
            followupSKUInfo: k,
            renderHeader: b,
            applicationId: O,
            guildId: v,
            referralTrialOfferId: w,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: D,
            skipConfirm: F,
            continueSessionToInitialStep: H,
        }),
    });
}
function W(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, p.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, x.P5)(),
        a = (0, c.A)(),
        { isGift: o, claimableRewards: u } = (0, A.Pv)(),
        d = (0, D.A)({ isGift: o, skuId: r, referralTrialOfferId: i }),
        m = (0, O.lp)(d),
        S = (0, E.px)(a, o, u);
    return (0, l.jsx)(j.x, {
        ...e,
        breadcrumbSteps: H,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? h.pn.PLAN_SELECT : h.pn.REVIEW;
            m && (l = h.pn.REVIEW),
                S && e.length < 1 && (l = h.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: h.pn.PAYMENT_TYPE });
        },
    });
}
let K = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(f.I, { ...e }) },
            {
                key: h.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(w.F, { ...e }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    modalSizeGetter: (t) => {
                        let { canCurrentlyPurchasePremiumGroup: n } = t;
                        return e || n ? "xl" : "md";
                    },
                },
            },
            {
                key: h.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(U.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: h.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(v.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, O.lp)(e) ? null : F.intl.string(F.t["r+SebU"])),
                    sectionHeaderText: () => F.intl.string(F.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: h.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(W, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, O.lp)(e) ? null : F.intl.string(F.t.Sb6wI1)),
                },
            },
            { key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(M.A, {}) },
            { key: h.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(R.A, {}) },
            {
                key: h.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(C._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, O.lp)(e) ? F.intl.string(F.t.UKbp1N) : F.intl.string(F.t.QBnNHq)),
                },
            },
            {
                key: h.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(k._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: h.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(b.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    z = K();
function V(e) {
    let t = (0, r.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        n = (0, m.cg)() ? L.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: c,
            giftingOrigin: p,
            giftMessage: E,
            giftRecipient: S,
            giftStyle: I,
            isGift: h,
            loadId: g,
            referralCode: f,
            subscriptionTier: j,
            referralTrialOfferId: R,
        } = e;
    if (null != j && !Object.values(L.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, _.tA)({ giftRecipient: S, isGift: h ?? !1 }),
        C = i.useMemo(() => K(M), [M]);
    return (0, l.jsx)(u.f5, {
        value: s,
        children: (0, l.jsx)(x.PaymentContextProvider, {
            loadId: g,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: C,
            skuIDs: [...L.oz],
            isGift: h,
            defaultPlanId: n ?? c,
            referralCode: f,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(T.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(A.dX, {
                    isGift: h,
                    giftRecipient: null == S ? void 0 : S,
                    giftMessage: E,
                    giftStyle: I,
                    giftingOrigin: p,
                    children: (0, l.jsx)(B, { ...e }),
                }),
            }),
        }),
    });
}
