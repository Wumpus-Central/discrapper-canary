n.d(t, {
    E: () => W,
    STEPS: () => z,
    default: () => V,
}),
    n(65821),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    c = n(40185),
    d = n(810498),
    p = n(117945),
    m = n(594832),
    f = n(97352),
    g = n(166403),
    j = n(45938),
    y = n(937008),
    h = n(156312),
    v = n(166532),
    b = n(491057),
    O = n(566980),
    x = n(546042),
    P = n(735305),
    S = n(343834),
    E = n(467122),
    T = n(623020),
    I = n(639289),
    A = n(838462),
    k = n(641819),
    w = n(800471),
    _ = n(939665),
    C = n(957489),
    M = n(822426),
    N = n(169801),
    R = n(652215),
    D = n(788868),
    L = n(985018),
    U = n(982571);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let H = [v.pn.PLAN_SELECT, v.pn.ADD_PAYMENT_STEPS, v.pn.REVIEW, v.pn.CONFIRM];
function B(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: i,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            subscriptionTier: m,
            onClose: g,
            trialId: b,
            trialFooterMessageOverride: P,
            reviewWarningMessage: S,
            openInvoiceId: E,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: A,
            postSuccessGuild: k,
            followupSKUInfo: w,
            renderHeader: _,
            applicationId: C,
            guildId: M,
            referralTrialOfferId: N,
            skuId: L,
            returnRef: U,
            skipConfirm: G = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: B } = (0, u.Ay)();
    r.useEffect(() => {
        f.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { step: F, selectedSkuId: W, purchaseState: z } = (0, h.P5)(),
        { isGift: V, giftMessage: K, giftRecipient: Y } = (0, y.Pv)(),
        Z = V && (0, j.Ik)(Y) && F === v.pn.PLAN_SELECT,
        Q = (0, p.T)(V, W),
        q = z === O.h.PURCHASING;
    return (0, l.jsx)(I.A, {
        isConfirmationStep: F === v.pn.CONFIRM && null == H && null == A,
        isEligibleForWowMoment: Q,
        shouldPrefetchWowMoment: q,
        children: (0, l.jsx)(x.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: i,
            analyticsSubscriptionType: R.rzx.PREMIUM,
            onComplete: o,
            transitionState: c,
            initialPlanId: d,
            giftMessage: K,
            subscriptionTier: m,
            onClose: g,
            trialId: b,
            isGift: V,
            trialFooterMessageOverride: P,
            reviewWarningMessage: S,
            planGroup: D.LE,
            openInvoiceId: E,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: A,
            postSuccessGuild: k,
            followupSKUInfo: w,
            renderHeader: _,
            applicationId: C,
            guildId: M,
            referralTrialOfferId: N,
            skuId: L,
            shakeWhilePurchasing: !0,
            isDynamicModal: Z,
            returnRef: U,
            skipConfirm: G,
            continueSessionToInitialStep: H,
        }),
    });
}
function F(e) {
    var t, n;
    let { initialPlanId: r, handleStepChange: i, referralTrialOfferId: s } = e,
        { paymentSources: a, selectedSkuId: o, selectedPlan: u } = (0, h.P5)(),
        { isGift: c, claimableRewards: p } = (0, y.Pv)(),
        m = (0, N.A)({
            isGift: c,
            skuId: o,
            referralTrialOfferId: s,
        }),
        f = (0, w.lp)(m),
        g = (0, d.px)(u, c, p);
    return (0, l.jsx)(
        P.x,
        ((t = G({}, e)),
        (n = n =
            {
                breadcrumbSteps: H,
                onReturn: () => {
                    let e = Object.values(a),
                        t = e.length < 1 && null == r ? v.pn.PLAN_SELECT : v.pn.REVIEW;
                    f && (t = v.pn.REVIEW),
                        g && e.length < 1 && (t = v.pn.SELECT_FREE_SKU),
                        i(t, { trackedFromStep: v.pn.PAYMENT_TYPE });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
let W = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, l.jsx)(x.I, G({}, e)),
            },
            {
                key: v.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(C.F, G({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: v.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(M.K, G({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: v.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(_.Z, G({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, w.lp)(e) ? null : L.intl.string(L.t["r+SebU"])),
                    sectionHeaderText: () => L.intl.string(L.t.UKbp1N),
                },
            },
            {
                key: v.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(F, G({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, w.lp)(e) ? null : L.intl.string(L.t.Sb6wI1)),
                },
            },
            {
                key: v.pn.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, l.jsx)(E.A, {}),
            },
            {
                key: v.pn.AWAITING_AUTHENTICATION,
                renderStep: () => (0, l.jsx)(S.A, {}),
            },
            {
                key: v.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(T._M, G({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, w.lp)(e) ? L.intl.string(L.t.UKbp1N) : L.intl.string(L.t.QBnNHq)),
                },
            },
            {
                key: v.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(A._, G({}, e)),
            },
            {
                key: v.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(k.j, G({}, e)),
                options: {
                    bodyClassName: U.aw,
                    isMediumModal: !0,
                },
            },
        ];
    },
    z = W();
function V(e) {
    let t = (0, i.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        n = (0, c.cg)() ? D.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: r } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: s,
            defaultPlanId: a,
            giftingOrigin: d,
            giftMessage: p,
            giftRecipient: f,
            giftStyle: j,
            isGift: v,
            loadId: O,
            referralCode: x,
            subscriptionTier: P,
            referralTrialOfferId: S,
        } = e;
    if (null != P && !Object.values(D.pe).includes(P)) throw Error("subscriptionTier must be a premium subscription");
    let E = (0, m.tA)({
        location: "PremiumPaymentSelect",
        giftRecipient: f,
        isGift: null != v && v,
    });
    return (0, l.jsx)(u.f5, {
        value: r,
        children: (0, l.jsx)(h.PaymentContextProvider, {
            loadId: O,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: W(E),
            skuIDs: [...D.oz],
            isGift: v,
            defaultPlanId: null != n ? n : a,
            referralCode: x,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: S,
            children: (0, l.jsx)(b.Qt, {
                confirmationFooter: s,
                children: (0, l.jsx)(y.dX, {
                    isGift: v,
                    giftRecipient: null == f ? void 0 : f,
                    giftMessage: p,
                    giftStyle: j,
                    giftingOrigin: d,
                    children: (0, l.jsx)(B, G({}, e)),
                }),
            }),
        }),
    });
}
