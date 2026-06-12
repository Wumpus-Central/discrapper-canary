n.d(t, { E5: () => Q, default: () => X });
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
    _ = n(166532),
    g = n(491057),
    x = n(566980),
    P = n(314671),
    y = n(735305),
    j = n(343834),
    k = n(926795),
    M = n(630303),
    N = n(496142),
    L = n(818348);
function R(e) {
    return (0, E.t4)((e) => e.purchaseType) === L.VV.SUBSCRIPTION
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
let V = [_.pn.PLAN_SELECT, _.pn.ADD_PAYMENT_STEPS, _.pn.REVIEW, _.pn.CONFIRM];
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
            postSuccessGuild: g,
            followupSKUInfo: y,
            renderHeader: j,
            applicationId: k,
            guildId: M,
            referralTrialOfferId: N,
            skuId: L,
            returnRef: R,
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
        q = i.useCallback(
            (e, t) => {
                S(e, t), e && K && null == V && Y();
            },
            [S, K, V, Y],
        ),
        Q = (0, T.T)(K, w),
        X = F === x.h.PURCHASING;
    return (0, r.jsx)(G.A, {
        isConfirmationStep: W === _.pn.CONFIRM && null == H && null == h,
        isEligibleForWowMoment: Q,
        shouldPrefetchWowMoment: X,
        children: (0, r.jsx)(P.q, {
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
            onClose: q,
            trialId: f,
            isGift: K,
            reviewWarningMessage: I,
            planGroup: D.LE,
            openInvoiceId: m,
            onSubscriptionConfirmation: A,
            renderPurchaseConfirmation: h,
            postSuccessGuild: g,
            followupSKUInfo: y,
            renderHeader: j,
            applicationId: k,
            guildId: M,
            referralTrialOfferId: N,
            skuId: L,
            shakeWhilePurchasing: !0,
            returnRef: R,
            skipConfirm: O,
            continueSessionToInitialStep: H,
        }),
    });
}
function q(e) {
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
                r = e.length < 1 && null == t ? _.pn.PLAN_SELECT : _.pn.REVIEW;
            u && (r = _.pn.REVIEW),
                f && e.length < 1 && (r = _.pn.SELECT_FREE_SKU),
                n(r, { trackedFromStep: _.pn.PAYMENT_TYPE });
        },
    });
}
let Q = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        { key: null, renderStep: (e) => (0, r.jsx)(P.I, { ...e }) },
        {
            key: _.pn.SKU_SELECT,
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
            key: _.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, r.jsx)(W.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: _.pn.PLAN_SELECT,
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
            key: _.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, r.jsx)(q, { ...e }),
            options: { renderHeader: !0, useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? null : B.intl.string(B.t.Sb6wI1)) },
        },
        { key: _.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(k.A, {}) },
        { key: _.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(j.A, {}) },
        {
            key: _.pn.REVIEW,
            renderStep: (e) => (0, r.jsx)(R, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, v.lp)(e) ? B.intl.string(B.t.UKbp1N) : B.intl.string(B.t.QBnNHq)),
            },
        },
        { key: _.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(O._, { ...e }), options: { modalSizeGetter: () => "md" } },
        {
            key: _.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(H.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ];
};
function X(e) {
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
            giftStyle: _,
            isGift: x,
            loadId: P,
            referralCode: y,
            subscriptionTier: j,
            referralTrialOfferId: k,
        } = e;
    if (null != j && !Object.values(D.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, A.tA)({ giftRecipient: b, isGift: x ?? !1 }),
        N = i.useMemo(() => Q(M), [M]);
    return l
        ? null
        : (0, r.jsx)(d.f5, {
              value: c,
              children: (0, r.jsx)(u.M, {
                  loadId: P,
                  activeSubscription: n,
                  stepConfigs: N,
                  skuIDs: [...D.oz],
                  isGift: x,
                  defaultPlanId: o ?? E,
                  referralCode: y,
                  referralTrialOfferId: k,
                  unifiedCheckoutFlow: p.C.PREMIUM_CHECKOUT,
                  children: (0, r.jsx)(g.Qt, {
                      confirmationFooter: S,
                      children: (0, r.jsx)(C.dX, {
                          isGift: x,
                          giftRecipient: null == b ? void 0 : b,
                          giftMessage: T,
                          giftStyle: _,
                          giftingOrigin: I,
                          children: (0, r.jsx)(Y, { ...e }),
                      }),
                  }),
              }),
          });
}
Q();
