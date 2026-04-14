n.d(t, { E: () => K, STEPS: () => z, default: () => V });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    d = n(120700),
    c = n(40185),
    p = n(810498),
    m = n(117945),
    E = n(594832),
    S = n(97352),
    _ = n(166403),
    I = n(413748),
    P = n(937008),
    x = n(156312),
    T = n(166532),
    A = n(491057),
    h = n(566980),
    g = n(546042),
    f = n(735305),
    j = n(343834),
    R = n(467122),
    M = n(623020),
    C = n(970077),
    N = n(615310),
    O = n(639289),
    k = n(838462),
    y = n(641819),
    b = n(800471),
    v = n(939665),
    U = n(957489),
    w = n(822426),
    G = n(169801),
    D = n(652215),
    L = n(788868),
    F = n(985018);
let H = [T.pn.PLAN_SELECT, T.pn.ADD_PAYMENT_STEPS, T.pn.REVIEW, T.pn.CONFIRM];
function B(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: E,
            trialId: _,
            trialFooterMessageOverride: A,
            reviewWarningMessage: f,
            openInvoiceId: j,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: C,
            followupSKUInfo: k,
            renderHeader: y,
            applicationId: b,
            guildId: v,
            referralTrialOfferId: U,
            skuId: w,
            returnRef: G,
            skipConfirm: F = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: B } = (0, u.Ay)();
    i.useEffect(() => {
        S.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let W = (0, I.t)((e) => e.selectedSkuId),
        { purchaseState: K } = (0, x.P5)(),
        z = (0, N.bB)(),
        { isGift: V, giftMessage: q } = (0, P.Pv)(),
        Y = (0, m.T)(V, W),
        Z = K === h.h.PURCHASING;
    return (0, l.jsx)(O.A, {
        isConfirmationStep: z === T.pn.CONFIRM && null == H && null == M,
        isEligibleForWowMoment: Y,
        shouldPrefetchWowMoment: Z,
        children: (0, l.jsx)(g.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: D.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: q,
            subscriptionTier: p,
            onClose: E,
            trialId: _,
            isGift: V,
            trialFooterMessageOverride: A,
            reviewWarningMessage: f,
            planGroup: L.LE,
            openInvoiceId: j,
            onSubscriptionConfirmation: R,
            renderPurchaseConfirmation: M,
            postSuccessGuild: C,
            followupSKUInfo: k,
            renderHeader: y,
            applicationId: b,
            guildId: v,
            referralTrialOfferId: U,
            skuId: w,
            shakeWhilePurchasing: !0,
            returnRef: G,
            skipConfirm: F,
            continueSessionToInitialStep: H,
        }),
    });
}
function W(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, I.t)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, x.P5)(),
        a = (0, C.A)(),
        { isGift: o, claimableRewards: u } = (0, P.Pv)(),
        d = (0, G.A)({ isGift: o, skuId: r, referralTrialOfferId: i }),
        c = (0, b.lp)(d),
        m = (0, p.px)(a, o, u);
    return (0, l.jsx)(f.x, {
        ...e,
        breadcrumbSteps: H,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? T.pn.PLAN_SELECT : T.pn.REVIEW;
            c && (l = T.pn.REVIEW),
                m && e.length < 1 && (l = T.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: T.pn.PAYMENT_TYPE });
        },
    });
}
let K = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(g.I, { ...e }) },
            {
                key: T.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(U.F, { ...e }),
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
                key: T.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(w.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: T.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(v.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, b.lp)(e) ? null : F.intl.string(F.t["r+SebU"])),
                    sectionHeaderText: () => F.intl.string(F.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: T.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(W, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, b.lp)(e) ? null : F.intl.string(F.t.Sb6wI1)),
                },
            },
            { key: T.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(R.A, {}) },
            { key: T.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(j.A, {}) },
            {
                key: T.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(M._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, b.lp)(e) ? F.intl.string(F.t.UKbp1N) : F.intl.string(F.t.QBnNHq)),
                },
            },
            {
                key: T.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(k._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: T.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(y.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    z = K();
function V(e) {
    let t = (0, r.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        n = (0, c.cg)() ? L.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: p,
            giftingOrigin: m,
            giftMessage: S,
            giftRecipient: I,
            giftStyle: T,
            isGift: h,
            loadId: g,
            referralCode: f,
            subscriptionTier: j,
            referralTrialOfferId: R,
        } = e;
    if (null != j && !Object.values(L.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, E.tA)({ giftRecipient: I, isGift: h ?? !1 }),
        C = i.useMemo(() => K(M), [M]);
    return (0, l.jsx)(u.f5, {
        value: s,
        children: (0, l.jsx)(x.PaymentContextProvider, {
            loadId: g,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: C,
            skuIDs: [...L.oz],
            isGift: h,
            defaultPlanId: n ?? p,
            referralCode: f,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(A.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(P.dX, {
                    isGift: h,
                    giftRecipient: null == I ? void 0 : I,
                    giftMessage: S,
                    giftStyle: T,
                    giftingOrigin: m,
                    children: (0, l.jsx)(B, { ...e }),
                }),
            }),
        }),
    });
}
