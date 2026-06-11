n.d(t, { E: () => Y, STEPS: () => V, default: () => Q });
var i = n(627968),
    r = n(64700),
    l = n(17928),
    s = n(228366),
    o = n(73825),
    a = n(793574),
    d = n(688810),
    p = n(120700),
    u = n(197510),
    c = n(426398),
    S = n(558620),
    E = n(211159),
    f = n(960851),
    I = n(380619),
    T = n(117945),
    m = n(344159),
    A = n(561794),
    b = n(97352),
    h = n(166403),
    C = n(937008),
    P = n(166532),
    _ = n(491057),
    g = n(566980),
    k = n(314671),
    y = n(735305),
    M = n(343834),
    x = n(926795),
    j = n(862241),
    L = n(615310),
    N = n(811656),
    R = n(394584),
    G = n(363373),
    U = n(800471),
    O = n(941796),
    H = n(957489),
    v = n(822426),
    w = n(169801),
    F = n(652215),
    W = n(788868),
    K = n(375708);
let z = [P.pn.PLAN_SELECT, P.pn.ADD_PAYMENT_STEPS, P.pn.REVIEW, P.pn.CONFIRM];
function D(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            onComplete: a,
            transitionState: p,
            initialPlanId: u,
            subscriptionTier: c,
            onClose: S,
            trialId: f,
            reviewWarningMessage: I,
            openInvoiceId: m,
            onSubscriptionConfirmation: A,
            renderPurchaseConfirmation: h,
            postSuccessGuild: _,
            followupSKUInfo: y,
            renderHeader: M,
            applicationId: x,
            guildId: j,
            referralTrialOfferId: R,
            skuId: G,
            returnRef: U,
            skipConfirm: O = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: v } = (0, d.Ay)();
    r.useEffect(() => {
        b.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, o.zS)());
    }, []);
    let { selectedSkuId: w, purchaseState: K } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        z = (0, L.bB)(),
        {
            isGift: D,
            giftMessage: B,
            selectedGiftingPromotionReward: Y,
            openGiftingBadgePostPurchaseModal: V,
        } = (0, C.Pv)(),
        Q = r.useCallback(
            (e, t) => {
                S(e, t), e && D && null == Y && V();
            },
            [S, D, Y, V],
        ),
        q = (0, T.T)(D, w),
        X = K === g.h.PURCHASING;
    return (0, i.jsx)(N.A, {
        isConfirmationStep: z === P.pn.CONFIRM && null == H && null == h,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: X,
        children: (0, i.jsx)(k.PaymentModal, {
            analyticsLocations: v,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: F.rzx.PREMIUM,
            onComplete: a,
            transitionState: p,
            initialPlanId: u,
            giftMessage: B,
            subscriptionTier: c,
            onClose: Q,
            trialId: f,
            isGift: D,
            reviewWarningMessage: I,
            planGroup: W.LE,
            openInvoiceId: m,
            onSubscriptionConfirmation: A,
            renderPurchaseConfirmation: h,
            postSuccessGuild: _,
            followupSKUInfo: y,
            renderHeader: M,
            applicationId: x,
            guildId: j,
            referralTrialOfferId: R,
            skuId: G,
            shakeWhilePurchasing: !0,
            returnRef: U,
            skipConfirm: O,
            continueSessionToInitialStep: H,
        }),
    });
}
function B(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: r } = e,
        l = (0, E.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, c.jm)(),
        o = (0, S.A)(),
        { isGift: a, claimableRewards: d } = (0, C.Pv)(),
        p = (0, w.A)({ isGift: a, skuId: l, referralTrialOfferId: r }),
        u = (0, U.lp)(p),
        f = (0, I.px)(o, a, d);
    return (0, i.jsx)(y.x, {
        ...e,
        breadcrumbSteps: z,
        onReturn: () => {
            let e = Object.values(s),
                i = e.length < 1 && null == t ? P.pn.PLAN_SELECT : P.pn.REVIEW;
            u && (i = P.pn.REVIEW),
                f && e.length < 1 && (i = P.pn.SELECT_FREE_SKU),
                n(i, { trackedFromStep: P.pn.PAYMENT_TYPE });
        },
    });
}
let Y = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, i.jsx)(k.I, { ...e }) },
            {
                key: P.pn.SKU_SELECT,
                renderStep: (e) => (0, i.jsx)(H.F, { ...e }),
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
                key: P.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, i.jsx)(v.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: P.pn.PLAN_SELECT,
                renderStep: (e) => (0, i.jsx)(O.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, U.lp)(e) ? null : K.intl.string(K.t["r+SebU"])),
                    sectionHeaderText: () => K.intl.string(K.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: P.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, i.jsx)(B, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, U.lp)(e) ? null : K.intl.string(K.t.Sb6wI1)),
                },
            },
            { key: P.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, i.jsx)(x.A, {}) },
            { key: P.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(M.A, {}) },
            {
                key: P.pn.REVIEW,
                renderStep: (e) => (0, i.jsx)(j._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, U.lp)(e) ? K.intl.string(K.t.UKbp1N) : K.intl.string(K.t.QBnNHq)),
                },
            },
            {
                key: P.pn.CONFIRM,
                renderStep: (e) => (0, i.jsx)(R._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: P.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, i.jsx)(G.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    V = Y();
function Q(e) {
    let t = (0, l.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        n = null != e.subscription ? e.subscription : t,
        s = !e.isGift && null != n && n.isPurchasedExternally && null != n.paymentGateway;
    (0, m.s)(n, () => e.onClose(!1), e.isGift ?? !1);
    let o = (0, f.cg)() ? W.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: c } = (0, d.Ay)(e.analyticsLocations, a.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: S,
            defaultPlanId: E,
            giftingOrigin: I,
            giftMessage: T,
            giftRecipient: b,
            giftStyle: P,
            isGift: g,
            loadId: k,
            referralCode: y,
            subscriptionTier: M,
            referralTrialOfferId: x,
        } = e;
    if (null != M && !Object.values(W.pe).includes(M)) throw Error("subscriptionTier must be a premium subscription");
    let j = (0, A.tA)({ giftRecipient: b, isGift: g ?? !1 }),
        L = r.useMemo(() => Y(j), [j]);
    return s
        ? null
        : (0, i.jsx)(d.f5, {
              value: c,
              children: (0, i.jsx)(u.CheckoutRootProvider, {
                  loadId: k,
                  activeSubscription: n,
                  stepConfigs: L,
                  skuIDs: [...W.oz],
                  isGift: g,
                  defaultPlanId: o ?? E,
                  referralCode: y,
                  referralTrialOfferId: x,
                  unifiedCheckoutFlow: p.C.PREMIUM_CHECKOUT,
                  children: (0, i.jsx)(_.Qt, {
                      confirmationFooter: S,
                      children: (0, i.jsx)(C.dX, {
                          isGift: g,
                          giftRecipient: null == b ? void 0 : b,
                          giftMessage: T,
                          giftStyle: P,
                          giftingOrigin: I,
                          children: (0, i.jsx)(D, { ...e }),
                      }),
                  }),
              }),
          });
}
