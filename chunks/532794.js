"use strict";
n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var r = n(296489),
    s = n.n(r),
    a = n(132500),
    o = n(192308),
    l = n(228366),
    d = n(391048),
    _ = n(158032),
    u = n(636099),
    c = n(120700),
    E = n(742810),
    h = n(803375),
    m = n(590180),
    f = n(61750),
    g = n(573359),
    p = n(374200),
    A = n(287809),
    I = n(954571),
    T = n(625494),
    S = n(927578),
    N = n(925847),
    C = n(639289),
    R = n(652215),
    O = n(758836),
    y = n(788868);
function v(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: r,
            onClose: v,
            onComplete: D,
            onSubscriptionConfirmation: L,
            analyticsLocations: b,
            analyticsObject: w,
            analyticsLocation: P,
            analyticsSourceLocation: k,
            confirmationFooter: M,
            isGift: U = !1,
            giftMessage: x,
            giftStyle: G,
            giftingOrigin: V,
            subscriptionTier: F,
            trialId: B,
            postSuccessGuild: H,
            openInvoiceId: j,
            applicationId: W,
            referralTrialOfferId: Y,
            giftRecipient: K,
            returnRef: z,
            subscription: $,
            skipConfirm: q,
        } = e ?? {},
        X = !1,
        Z = (0, N.A)() ?? (0, a.A)(),
        Q = A.default.getCurrentUser(),
        J = (0, S.YE)(Q, y.PremiumTypes.TIER_2),
        ee = s()("payment-modal"),
        et = (0, S.mH)(F),
        en = U || et !== (0, S.mH)(y.pe.TIER_2) ? null : p.A.getMarketingMomentPromotion(),
        ei = en?.rewardSkuIds[0] ?? null,
        er = !1;
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("6159"),
                n.e("14875"),
                n.e("62175"),
                n.e("29716"),
                n.e("8739"),
                n.e("61402"),
                n.e("38117"),
            ]).then(n.bind(n, 864353));
            return (n) => {
                let { onClose: s, ...a } = n;
                return (0, i.jsx)(e, {
                    ...a,
                    loadId: Z,
                    subscriptionTier: F,
                    skuId: et,
                    isGift: U,
                    giftMessage: x,
                    giftStyle: G,
                    giftingOrigin: V,
                    giftRecipient: K,
                    initialPlanId: t,
                    followupSKUInfo: r,
                    onClose: (e) => {
                        if (er) return;
                        (er = !0), T._.dispatch(R.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                        let t = async () => {
                            if (
                                (s(),
                                v?.(e),
                                e && L?.(),
                                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e }),
                                e && null != ei && en.endDate >= new Date())
                            ) {
                                await (0, h.RE)(ei);
                                let e = m.A.getProduct(ei);
                                null != e &&
                                    (0, f.A)({
                                        product: e,
                                        analyticsLocations: b ?? [],
                                        purchaseType: O.gs.PROMOTIONAL,
                                        overrideGradientColor: "nitro-pink",
                                    });
                            }
                        };
                        g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated
                            ? setTimeout(() => {
                                  t();
                              }, C.K)
                            : t();
                    },
                    onComplete: () => {
                        (X = !0), D?.();
                    },
                    onSubscriptionConfirmation: L,
                    analyticsLocations: b,
                    analyticsObject: w,
                    analyticsLocation: P,
                    analyticsSourceLocation: k,
                    confirmationFooter: M,
                    trialId: B,
                    postSuccessGuild: H,
                    planGroup: y.LE,
                    openInvoiceId: j,
                    applicationId: W,
                    referralTrialOfferId: Y,
                    returnRef: z,
                    subscription: $,
                    skipConfirm: !!q,
                    wasTier2PremiumBeforePurchase: J,
                });
            };
        },
        {
            onCloseRequest: () => {
                er ||
                    ((er = !0),
                    T._.dispatch(R.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                    g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated
                        ? setTimeout(() => {
                              (0, o.closeModal)(ee);
                          }, C.K)
                        : (0, o.closeModal)(ee));
            },
            modalKey: ee,
            onCloseCallback: () => {
                if (!X) {
                    let e = (0, E.q1)({ location: "PremiumPaymentModal", unifiedCheckoutFlow: c.C.PREMIUM_CHECKOUT });
                    I.default.track(R.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: Z,
                        payment_type: R.frM[R.VVm.SUBSCRIPTION],
                        location: P ?? w,
                        source: k,
                        subscription_type: R.rzx.PREMIUM,
                        is_gift: U,
                        sku_id: et,
                        eligible_for_trial: null != B,
                        application_id: W,
                        location_stack: b,
                        checkout_design: e ? E.rS.UNIFIED : E.rS.LEGACY,
                        checkout_flow: c.C.PREMIUM_CHECKOUT,
                    });
                }
                (0, _.ET)(), (0, d.ET)(), (0, u.z)(), v?.(X), X && L?.();
            },
        },
    );
}
