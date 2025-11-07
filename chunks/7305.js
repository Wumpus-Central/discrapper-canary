n.d(t, {
    STEPS: () => G,
    default: () => D,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    o = n(821849),
    s = n(100527),
    C = n(906732),
    d = n(367074),
    c = n(717401),
    u = n(602733),
    p = n(509545),
    f = n(78839),
    h = n(669079),
    x = n(987209),
    m = n(563132),
    _ = n(409813),
    j = n(107998),
    g = n(791785),
    b = n(276442),
    y = n(793541),
    L = n(380898),
    v = n(710094),
    S = n(518727),
    O = n(293858),
    E = n(183813),
    P = n(614223),
    w = n(174827),
    k = n(846464),
    M = n(184160),
    I = n(48175),
    T = n(981631),
    A = n(474936),
    Z = n(388032),
    N = n(867983);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let B = [_.h8.PLAN_SELECT, _.h8.ADD_PAYMENT_STEPS, _.h8.REVIEW, _.h8.CONFIRM];
function H(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            onComplete: s,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: u,
            onClose: f,
            trialId: j,
            trialFooterMessageOverride: b,
            reviewWarningMessage: y,
            openInvoiceId: L,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: O,
            postSuccessGuild: E,
            followupSKUInfo: P,
            renderHeader: w,
            applicationId: k,
            guildId: M,
            referralTrialOfferId: I,
            skuId: Z,
            returnRef: N,
            skipConfirm: R = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: H } = (0, C.ZP)();
    i.useEffect(() => {
        p.Z.isLoadedForPremiumSKUs() || a.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: U } = (0, m.JL)(),
        { isGift: F, giftMessage: G, giftRecipient: D } = (0, x.wD)(),
        K = F && (0, h.pO)(D) && U === _.h8.PLAN_SELECT;
    return (0, r.jsx)(S.Z, {
        isConfirmationStep: U === _.h8.CONFIRM && null == B && null == O,
        children: (0, r.jsx)(g.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: l,
            analyticsSubscriptionType: T.NYc.PREMIUM,
            onComplete: s,
            transitionState: d,
            initialPlanId: c,
            giftMessage: G,
            subscriptionTier: u,
            onClose: f,
            trialId: j,
            isGift: F,
            trialFooterMessageOverride: b,
            reviewWarningMessage: y,
            planGroup: A.Y1,
            openInvoiceId: L,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: O,
            postSuccessGuild: E,
            followupSKUInfo: P,
            renderHeader: w,
            applicationId: k,
            guildId: M,
            referralTrialOfferId: I,
            skuId: Z,
            shakeWhilePurchasing: !0,
            isDynamicModal: K,
            returnRef: N,
            skipConfirm: R,
            continueSessionToInitialStep: B,
        }),
    });
}
function U(e) {
    var t, n;
    let { initialPlanId: i, handleStepChange: l, referralTrialOfferId: a } = e,
        { paymentSources: o, selectedSkuId: s, selectedPlan: C } = (0, m.JL)(),
        { isGift: d, claimableRewards: u } = (0, x.wD)(),
        p = (0, I.Z)({
            isGift: d,
            skuId: s,
            referralTrialOfferId: a,
        }),
        f = (0, P.Fv)(p),
        h = (0, c.id)(C, d, u);
    return (0, r.jsx)(
        b.J,
        ((t = R({}, e)),
        (n = n =
            {
                breadcrumbSteps: B,
                onReturn: () => {
                    let e = Object.values(o),
                        t = e.length < 1 && null == i ? _.h8.PLAN_SELECT : _.h8.REVIEW;
                    f && (t = _.h8.REVIEW),
                        h && e.length < 1 && (t = _.h8.SELECT_FREE_SKU),
                        l(t, { trackedFromStep: _.h8.PAYMENT_TYPE });
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
let F = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            {
                key: null,
                renderStep: (e) => (0, r.jsx)(g.I, R({}, e)),
            },
            {
                key: _.h8.SKU_SELECT,
                renderStep: (e) => (0, r.jsx)(k.q, R({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    isDynamicModal: !e,
                    isLargeModal: e,
                },
            },
            {
                key: _.h8.WHAT_YOU_LOSE,
                renderStep: (e) => (0, r.jsx)(M.x, R({}, e)),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                },
            },
            {
                key: _.h8.PLAN_SELECT,
                renderStep: (e) => (0, r.jsx)(w.x, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t["r+SebU"])),
                    sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                },
            },
            {
                key: _.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, r.jsx)(U, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? null : Z.intl.string(Z.t.Sb6wI1)),
                },
            },
            {
                key: _.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(L.Z, {}),
            },
            {
                key: _.h8.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(y.Z, {}),
            },
            {
                key: _.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(v.l, R({}, e)),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, P.Fv)(e) ? Z.intl.string(Z.t.UKbp1N) : Z.intl.string(Z.t.QBnNHq)),
                },
            },
            {
                key: _.h8.CONFIRM,
                renderStep: (e) => (0, r.jsx)(O.b, R({}, e)),
            },
            {
                key: _.h8.SELECT_FREE_SKU,
                renderStep: (e) => (0, r.jsx)(E.S, R({}, e)),
                options: {
                    bodyClassName: N.selectFreeSku,
                    isMediumModal: !0,
                },
            },
        ];
    },
    G = F();
function D(e) {
    let t = (0, l.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
        n = (0, d.Vi)() ? A.Xh.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: i } = (0, C.ZP)(e.analyticsLocations, s.Z.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: o,
            giftingOrigin: c,
            giftMessage: p,
            giftRecipient: h,
            giftStyle: _,
            isGift: g,
            loadId: b,
            paymentModalBanner: y,
            referralCode: L,
            subscriptionTier: v,
        } = e;
    if (null != v && !Object.values(A.Si).includes(v)) throw Error("subscriptionTier must be a premium subscription");
    let S = (0, u.ao)({
        location: "PremiumPaymentSelect",
        giftRecipient: h,
        isGift: null != g && g,
    });
    return (0, r.jsx)(C.Gt, {
        value: i,
        children: (0, r.jsx)(m.PaymentContextProvider, {
            loadId: b,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: F(S),
            skuIDs: [...A.YQ],
            isGift: g,
            defaultPlanId: null != n ? n : o,
            referralCode: L,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            children: (0, r.jsx)(j.c1, {
                confirmationFooter: a,
                paymentModalBanner: y,
                children: (0, r.jsx)(x.KB, {
                    isGift: g,
                    giftRecipient: null == h ? void 0 : h,
                    giftMessage: p,
                    giftStyle: _,
                    giftingOrigin: c,
                    children: (0, r.jsx)(H, R({}, e)),
                }),
            }),
        }),
    });
}
