n.d(t, { E: () => q, default: () => Z, STEPS: () => X });
var r = n(627968),
    i = n(64700),
    s = n(17928),
    l = n(228366),
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
    x = n(314671),
    y = n(735305),
    k = n(343834),
    j = n(926795),
    M = n(630303),
    N = n(496142),
    R = n(818348);
function L(e) {
    return (0, E.t4)((e) => e.purchaseType) === R.VV.SUBSCRIPTION
        ? (0, r.jsx)(N.E, { ...e })
        : (0, r.jsx)(M.p, { ...e });
}
var U = n(615310),
    G = n(811656),
    O = n(394584),
    H = n(363373),
    v = n(800471),
    w = n(941796),
    F = n(957489),
    W = n(822426),
    K = n(169801),
    z = n(652215),
    D = n(788868),
    B = n(375708);
let V = [P.pn.PLAN_SELECT, P.pn.ADD_PAYMENT_STEPS, P.pn.REVIEW, P.pn.CONFIRM];
function Y(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
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
            renderHeader: k,
            applicationId: j,
            guildId: M,
            referralTrialOfferId: N,
            skuId: R,
            returnRef: L,
            skipConfirm: O = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: v } = (0, d.Ay)();
    i.useEffect(() => {
        b.A.isLoadedForPremiumSKUs() || l.h.wait(() => (0, o.zS)());
    }, []);
    let { selectedSkuId: w, purchaseState: F } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        W = (0, U.bB)(),
        {
            isGift: K,
            giftMessage: B,
            selectedGiftingPromotionReward: V,
            openGiftingBadgePostPurchaseModal: Y,
        } = (0, C.Pv)(),
        Q = i.useCallback(
            (e, t) => {
                S(e, t), e && K && null == V && Y();
            },
            [S, K, V, Y],
        ),
        q = (0, T.T)(K, w),
        X = F === g.h.PURCHASING;
    return (0, r.jsx)(G.A, {
        isConfirmationStep: W === P.pn.CONFIRM && null == H && null == h,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: X,
        children: (0, r.jsx)(x.PaymentModal, {
            analyticsLocations: v,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            analyticsSubscriptionType: z.rzx.PREMIUM,
            onComplete: a,
            transitionState: p,
            initialPlanId: u,
            giftMessage: B,
            subscriptionTier: c,
            onClose: Q,
            trialId: f,
            isGift: K,
            reviewWarningMessage: I,
            planGroup: D.LE,
            openInvoiceId: m,
            onSubscriptionConfirmation: A,
            renderPurchaseConfirmation: h,
            postSuccessGuild: _,
            followupSKUInfo: y,
            renderHeader: k,
            applicationId: j,
            guildId: M,
            referralTrialOfferId: N,
            skuId: R,
            shakeWhilePurchasing: !0,
            returnRef: L,
            skipConfirm: O,
            continueSessionToInitialStep: H,
        }),
    });
}
function Q(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        s = (0, E.t4)((e) => e.selectedSkuId),
        { paymentSources: l } = (0, c.jm)(),
        o = (0, S.A)(),
        { isGift: a, claimableRewards: d } = (0, C.Pv)(),
        p = (0, K.A)({ isGift: a, skuId: s, referralTrialOfferId: i }),
        u = (0, v.lp)(p),
        f = (0, I.px)(o, a, d);
    return (0, r.jsx)(y.x, {
        ...e,
        breadcrumbSteps: V,
        onReturn: () => {
            let e = Object.values(l),
                r = e.length < 1 && null == t ? P.pn.PLAN_SELECT : P.pn.REVIEW;
            u && (r = P.pn.REVIEW),
                f && e.length < 1 && (r = P.pn.SELECT_FREE_SKU),
                n(r, { trackedFromStep: P.pn.PAYMENT_TYPE });
        },
    });
}
let q = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, r.jsx)(x.I, { ...e }) },
            {
                key: P.pn.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(F.F, { ...e }),
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
                renderStep: (e) => (0, r.jsx)(W.K, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: P.pn.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(w.Z, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? null : B.intl.string(B.t["r+SebU"])),
                    sectionHeaderText: () => B.intl.string(B.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: P.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(Q, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? null : B.intl.string(B.t.Sb6wI1)),
                },
            },
            { key: P.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(j.A, {}) },
            { key: P.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(k.A, {}) },
            {
                key: P.pn.REVIEW,
                renderStep: (e) => (0, r.jsx)(L, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? B.intl.string(B.t.UKbp1N) : B.intl.string(B.t.QBnNHq)),
                },
            },
            {
                key: P.pn.CONFIRM,
                renderStep: (e) => (0, r.jsx)(O._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: P.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(H.j, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    X = q();
function Z(e) {
    let t = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        n = null != e.subscription ? e.subscription : t,
        l = !e.isGift && null != n && n.isPurchasedExternally && null != n.paymentGateway;
    (0, m.s)(n, () => e.onClose(!1), e.isGift ?? !1);
    let o = (0, f.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: c } = (0, d.Ay)(e.analyticsLocations, a.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: S,
            defaultPlanId: E,
            giftingOrigin: I,
            giftMessage: T,
            giftRecipient: b,
            giftStyle: P,
            isGift: g,
            loadId: x,
            referralCode: y,
            subscriptionTier: k,
            referralTrialOfferId: j,
        } = e;
    if (null != k && !Object.values(D.pe).includes(k)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, A.tA)({ giftRecipient: b, isGift: g ?? !1 }),
        N = i.useMemo(() => q(M), [M]);
    return l
        ? null
        : (0, r.jsx)(d.f5, {
              value: c,
              children: (0, r.jsx)(u.CheckoutRootProvider, {
                  loadId: x,
                  activeSubscription: n,
                  stepConfigs: N,
                  skuIDs: [...D.oz],
                  isGift: g,
                  defaultPlanId: o ?? E,
                  referralCode: y,
                  referralTrialOfferId: j,
                  unifiedCheckoutFlow: p.C.PREMIUM_CHECKOUT,
                  children: (0, r.jsx)(_.Qt, {
                      confirmationFooter: S,
                      children: (0, r.jsx)(C.dX, {
                          isGift: g,
                          giftRecipient: null == b ? void 0 : b,
                          giftMessage: T,
                          giftStyle: P,
                          giftingOrigin: I,
                          children: (0, r.jsx)(Y, { ...e }),
                      }),
                  }),
              }),
          });
}
