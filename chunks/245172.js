n.d(t, { E5: () => X, default: () => Z });
var i = n(627968),
    r = n(64700),
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
    I = n(960851),
    f = n(380619),
    T = n(117945),
    m = n(344159),
    A = n(561794),
    b = n(97352),
    h = n(166403),
    C = n(937008),
    _ = n(166532),
    g = n(491057),
    x = n(566980),
    P = n(434574),
    y = n(829850),
    j = n(735305),
    k = n(343834),
    M = n(926795),
    N = n(630303),
    L = n(496142),
    R = n(818348);
function U(e) {
    return (0, E.t4)((e) => e.purchaseType) === R.VV.SUBSCRIPTION
        ? (0, i.jsx)(L.E, { ...e })
        : (0, i.jsx)(N.p, { ...e });
}
var G = n(615310),
    O = n(811656),
    H = n(394584),
    v = n(363373),
    w = n(800471),
    F = n(941796),
    W = n(957489),
    K = n(822426),
    z = n(169801),
    D = n(652215),
    B = n(788868),
    V = n(375708);
let Y = [_.pn.PLAN_SELECT, _.pn.ADD_PAYMENT_STEPS, _.pn.REVIEW, _.pn.CONFIRM];
function q(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            onComplete: a,
            transitionState: p,
            initialPlanId: u,
            subscriptionTier: c,
            onClose: S,
            trialId: I,
            reviewWarningMessage: f,
            openInvoiceId: m,
            onSubscriptionConfirmation: A,
            renderPurchaseConfirmation: h,
            postSuccessGuild: g,
            followupSKUInfo: P,
            renderHeader: j,
            applicationId: k,
            guildId: M,
            skuId: N,
            returnRef: L,
            skipConfirm: R = !1,
            continueSessionToInitialStep: U,
        } = e,
        { analyticsLocations: H } = (0, d.Ay)();
    r.useEffect(() => {
        b.A.isLoadedForPremiumSKUs() || l.h.wait(() => (0, o.zS)());
    }, []);
    let { selectedSkuId: v, purchaseState: w } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        F = (0, G.bB)(),
        {
            isGift: W,
            giftMessage: K,
            selectedGiftingPromotionReward: z,
            openGiftingBadgePostPurchaseModal: V,
        } = (0, C.Pv)(),
        Y = r.useCallback(
            (e, t) => {
                S(e, t), e && W && null == z && V();
            },
            [S, W, z, V],
        ),
        q = (0, T.T)(W, v),
        Q = w === x.h.PURCHASING;
    return (0, i.jsx)(O.A, {
        isConfirmationStep: F === _.pn.CONFIRM && null == U && null == h,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: Q,
        children: (0, i.jsx)(y.q, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: s,
            analyticsSubscriptionType: D.rzx.PREMIUM,
            onComplete: a,
            transitionState: p,
            initialPlanId: u,
            giftMessage: K,
            subscriptionTier: c,
            onClose: Y,
            trialId: I,
            isGift: W,
            reviewWarningMessage: f,
            planGroup: B.LE,
            openInvoiceId: m,
            onSubscriptionConfirmation: A,
            renderPurchaseConfirmation: h,
            postSuccessGuild: g,
            followupSKUInfo: P,
            renderHeader: j,
            applicationId: k,
            guildId: M,
            skuId: N,
            shakeWhilePurchasing: !0,
            returnRef: L,
            skipConfirm: R,
            continueSessionToInitialStep: U,
        }),
    });
}
function Q(e) {
    let { initialPlanId: t, handleStepChange: n } = e,
        r = (0, E.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, c.jm)(),
        l = (0, S.A)(),
        { isGift: o, claimableRewards: a } = (0, C.Pv)(),
        d = (0, z.A)({ isGift: o, skuId: r }),
        p = (0, w.lp)(d),
        u = (0, f.px)(l, o, a);
    return (0, i.jsx)(j.x, {
        ...e,
        breadcrumbSteps: Y,
        onReturn: () => {
            let e = Object.values(s),
                i = e.length < 1 && null == t ? _.pn.PLAN_SELECT : _.pn.REVIEW;
            p && (i = _.pn.REVIEW),
                u && e.length < 1 && (i = _.pn.SELECT_FREE_SKU),
                n(i, { trackedFromStep: _.pn.PAYMENT_TYPE });
        },
    });
}
let X = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        { key: null, renderStep: (e) => (0, i.jsx)(P.z, { ...e }) },
        {
            key: _.pn.SKU_SELECT,
            renderStep: (e) => (0, i.jsx)(W.F, { ...e }),
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
            renderStep: (e) => (0, i.jsx)(K.K, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: _.pn.PLAN_SELECT,
            renderStep: (e) => (0, i.jsx)(F.Z, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, w.lp)(e) ? null : V.intl.string(V.t["r+SebU"])),
                sectionHeaderText: () => V.intl.string(V.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: _.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, i.jsx)(Q, { ...e }),
            options: { renderHeader: !0, useBreadcrumbLabel: (e) => ((0, w.lp)(e) ? null : V.intl.string(V.t.Sb6wI1)) },
        },
        { key: _.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, i.jsx)(M.A, {}) },
        { key: _.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(k.A, {}) },
        {
            key: _.pn.REVIEW,
            renderStep: (e) => (0, i.jsx)(U, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, w.lp)(e) ? V.intl.string(V.t.UKbp1N) : V.intl.string(V.t.QBnNHq)),
            },
        },
        { key: _.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(H._, { ...e }), options: { modalSizeGetter: () => "md" } },
        {
            key: _.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, i.jsx)(v.j, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ];
};
function Z(e) {
    let t = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        n = null != e.subscription ? e.subscription : t,
        l = !e.isGift && null != n && n.isPurchasedExternally && null != n.paymentGateway;
    (0, m.s)(n, () => e.onClose(!1), e.isGift ?? !1);
    let o = (0, I.cg)() ? B.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: c } = (0, d.Ay)(e.analyticsLocations, a.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: S,
            defaultPlanId: E,
            giftingOrigin: f,
            giftMessage: T,
            giftRecipient: b,
            giftStyle: _,
            isGift: x,
            loadId: P,
            referralCode: y,
            subscriptionTier: j,
            referralTrialOfferId: k,
        } = e;
    if (null != j && !Object.values(B.pe).includes(j)) throw Error("subscriptionTier must be a premium subscription");
    let M = (0, A.tA)({ giftRecipient: b, isGift: x ?? !1 }),
        N = r.useMemo(() => X(M), [M]);
    return l
        ? null
        : (0, i.jsx)(d.f5, {
              value: c,
              children: (0, i.jsx)(u.M, {
                  loadId: P,
                  activeSubscription: n,
                  stepConfigs: N,
                  skuIDs: [...B.oz],
                  isGift: x,
                  defaultPlanId: o ?? E,
                  referralCode: y,
                  referralTrialOfferId: k,
                  unifiedCheckoutFlow: p.C.PREMIUM_CHECKOUT,
                  children: (0, i.jsx)(g.Qt, {
                      confirmationFooter: S,
                      children: (0, i.jsx)(C.dX, {
                          isGift: x,
                          giftRecipient: null == b ? void 0 : b,
                          giftMessage: T,
                          giftStyle: _,
                          giftingOrigin: f,
                          children: (0, i.jsx)(q, { ...e }),
                      }),
                  }),
              }),
          });
}
X();
