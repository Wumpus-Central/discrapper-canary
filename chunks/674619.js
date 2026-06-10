n.d(t, { E: () => B, STEPS: () => Y, default: () => V });
var r = n(627968),
    i = n(64700),
    s = n(17928),
    l = n(228366),
    o = n(73825),
    d = n(793574),
    a = n(688810),
    p = n(120700),
    u = n(197510),
    c = n(426398),
    S = n(558620),
    E = n(211159),
    I = n(960851),
    f = n(380619),
    T = n(117945),
    m = n(561794),
    A = n(97352),
    b = n(166403),
    h = n(937008),
    _ = n(166532),
    C = n(491057),
    P = n(566980),
    g = n(314671),
    k = n(735305),
    M = n(343834),
    x = n(926795),
    j = n(862241),
    y = n(615310),
    L = n(811656),
    N = n(394584),
    R = n(363373),
    U = n(800471),
    O = n(941796),
    G = n(957489),
    H = n(822426),
    v = n(169801),
    F = n(652215),
    W = n(788868),
    w = n(375708);
let K = [_.pn.PLAN_SELECT, _.pn.ADD_PAYMENT_STEPS, _.pn.REVIEW, _.pn.CONFIRM];
function z(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            onComplete: d,
            transitionState: p,
            initialPlanId: u,
            subscriptionTier: c,
            onClose: S,
            trialId: I,
            reviewWarningMessage: f,
            openInvoiceId: m,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: C,
            postSuccessGuild: k,
            followupSKUInfo: M,
            renderHeader: x,
            applicationId: j,
            guildId: N,
            referralTrialOfferId: R,
            skuId: U,
            returnRef: O,
            skipConfirm: G = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: v } = (0, a.Ay)();
    i.useEffect(() => {
        A.A.isLoadedForPremiumSKUs() || l.h.wait(() => (0, o.zS)());
    }, []);
    let { selectedSkuId: w, purchaseState: K } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        z = (0, y.bB)(),
        {
            isGift: D,
            giftMessage: B,
            selectedGiftingPromotionReward: Y,
            openGiftingBadgePostPurchaseModal: V,
        } = (0, h.Pv)(),
        Q = i.useCallback(
            (e, t) => {
                S(e, t), e && D && null == Y && V();
            },
            [S, D, Y, V],
        ),
        q = (0, T.T)(D, w),
        X = K === P.h.PURCHASING;
    return (0, r.jsx)(L.A, {
        isConfirmationStep: z === _.pn.CONFIRM && null == H && null == C,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: X,
        children: (0, r.jsx)(g.PaymentModal, {
            analyticsLocations: v,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            analyticsSubscriptionType: F.rzx.PREMIUM,
            onComplete: d,
            transitionState: p,
            initialPlanId: u,
            giftMessage: B,
            subscriptionTier: c,
            onClose: Q,
            trialId: I,
            isGift: D,
            reviewWarningMessage: f,
            planGroup: W.LE,
            openInvoiceId: m,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: C,
            postSuccessGuild: k,
            followupSKUInfo: M,
            renderHeader: x,
            applicationId: j,
            guildId: N,
            referralTrialOfferId: R,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: O,
            skipConfirm: G,
            continueSessionToInitialStep: H,
        }),
    });
}
function D(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        s = (0, E.t4)((e) => e.selectedSkuId),
        { paymentSources: l } = (0, c.jm)(),
        o = (0, S.A)(),
        { isGift: d, claimableRewards: a } = (0, h.Pv)(),
        p = (0, v.A)({ isGift: d, skuId: s, referralTrialOfferId: i }),
        u = (0, U.lp)(p),
        I = (0, f.px)(o, d, a);
    return (0, r.jsx)(k.x, {
        ...e,
        breadcrumbSteps: K,
        onReturn: () => {
            let e = Object.values(l),
                r = e.length < 1 && null == t ? _.pn.PLAN_SELECT : _.pn.REVIEW;
            u && (r = _.pn.REVIEW),
                I && e.length < 1 && (r = _.pn.SELECT_FREE_SKU),
                n(r, { trackedFromStep: _.pn.PAYMENT_TYPE });
        },
    });
}
let B = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, r.jsx)(g.I, { ...e }) },
            {
                key: _.pn.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(G.F, { ...e }),
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
                key: _.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(H.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: _.pn.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(O.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, U.lp)(e) ? null : w.intl.string(w.t["r+SebU"])),
                    sectionHeaderText: () => w.intl.string(w.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: _.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(D, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, U.lp)(e) ? null : w.intl.string(w.t.Sb6wI1)),
                },
            },
            { key: _.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(x.A, {}) },
            { key: _.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(M.A, {}) },
            {
                key: _.pn.REVIEW,
                renderStep: (e) => (0, r.jsx)(j._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, U.lp)(e) ? w.intl.string(w.t.UKbp1N) : w.intl.string(w.t.QBnNHq)),
                },
            },
            {
                key: _.pn.CONFIRM,
                renderStep: (e) => (0, r.jsx)(N._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: _.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(R.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    Y = B();
function V(e) {
    let t = (0, s.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        n = (0, I.cg)() ? W.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: l } = (0, a.Ay)(e.analyticsLocations, d.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: o,
            defaultPlanId: c,
            giftingOrigin: S,
            giftMessage: E,
            giftRecipient: f,
            giftStyle: T,
            isGift: A,
            loadId: _,
            referralCode: P,
            subscriptionTier: g,
            referralTrialOfferId: k,
        } = e;
    if (null != g && !Object.values(W.pe).includes(g)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, m.tA)({ giftRecipient: f, isGift: A ?? !1 }),
        x = i.useMemo(() => B(M), [M]);
    return (0, r.jsx)(a.f5, {
        value: l,
        children: (0, r.jsx)(u.CheckoutRootProvider, {
            loadId: _,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: x,
            skuIDs: [...W.oz],
            isGift: A,
            defaultPlanId: n ?? c,
            referralCode: P,
            referralTrialOfferId: k,
            unifiedCheckoutFlow: p.C.PREMIUM_CHECKOUT,
            children: (0, r.jsx)(C.Qt, {
                confirmationFooter: o,
                children: (0, r.jsx)(h.dX, {
                    isGift: A,
                    giftRecipient: null == f ? void 0 : f,
                    giftMessage: E,
                    giftStyle: T,
                    giftingOrigin: S,
                    children: (0, r.jsx)(z, { ...e }),
                }),
            }),
        }),
    });
}
