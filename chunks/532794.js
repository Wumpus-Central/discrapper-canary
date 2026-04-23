"use strict";
n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(296489),
    s = n.n(i),
    a = n(835245),
    o = n(192308),
    l = n(73153),
    u = n(391048),
    c = n(158032),
    d = n(636099),
    _ = n(120700),
    f = n(742810),
    p = n(979286),
    h = n(590180),
    E = n(61750),
    m = n(573359),
    g = n(412260),
    A = n(287809),
    I = n(954571),
    T = n(203982),
    S = n(927578),
    y = n(925847),
    N = n(639289),
    v = n(652215),
    C = n(758836),
    O = n(788868);
function R(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: i,
            onClose: R,
            onComplete: b,
            onSubscriptionConfirmation: D,
            analyticsLocations: L,
            analyticsObject: w,
            analyticsLocation: M,
            analyticsSourceLocation: P,
            confirmationFooter: x,
            isGift: k = !1,
            giftMessage: U,
            giftStyle: G,
            giftingOrigin: F,
            subscriptionTier: V,
            trialId: B,
            postSuccessGuild: H,
            openInvoiceId: j,
            applicationId: Y,
            referralTrialOfferId: W,
            giftRecipient: K,
            returnRef: $,
            subscription: z,
            skipConfirm: q,
        } = e ?? {},
        X = !1,
        Q = (0, y.A)() ?? (0, a.A)(),
        Z = A.default.getCurrentUser(),
        J = (0, S.YE)(Z, O.PremiumTypes.TIER_2),
        ee = s()("payment-modal"),
        et = (0, S.mH)(V),
        en = k || et !== (0, S.mH)(O.pe.TIER_2) ? null : g.A.getMarketingMomentPromotion(),
        er = en?.rewardSkuIds[0] ?? null,
        ei = !1;
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("41353"),
                n.e("94212"),
                n.e("62175"),
                n.e("29716"),
                n.e("14704"),
                n.e("2824"),
                n.e("29665"),
            ]).then(n.bind(n, 674619));
            return (n) => {
                let { onClose: s, ...a } = n;
                return (0, r.jsx)(e, {
                    ...a,
                    loadId: Q,
                    subscriptionTier: V,
                    skuId: et,
                    isGift: k,
                    giftMessage: U,
                    giftStyle: G,
                    giftingOrigin: F,
                    giftRecipient: K,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e) => {
                        if (ei) return;
                        (ei = !0), T._.dispatch(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                        let t = async () => {
                            if (
                                (s(),
                                R?.(e),
                                e && D?.(),
                                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e }),
                                e && null != er && en.endDate >= new Date())
                            ) {
                                await (0, p.RE)(er);
                                let e = h.A.getProduct(er);
                                null != e &&
                                    (0, E.A)({
                                        product: e,
                                        analyticsLocations: L ?? [],
                                        purchaseType: C.gs.PROMOTIONAL,
                                        overrideGradientColor: "nitro-pink",
                                    });
                            }
                        };
                        m.A.isDisplayingWowMomentConfirmation && m.A.isAnimated
                            ? setTimeout(() => {
                                  t();
                              }, N.K)
                            : t();
                    },
                    onComplete: () => {
                        (X = !0), b?.();
                    },
                    onSubscriptionConfirmation: D,
                    analyticsLocations: L,
                    analyticsObject: w,
                    analyticsLocation: M,
                    analyticsSourceLocation: P,
                    confirmationFooter: x,
                    trialId: B,
                    postSuccessGuild: H,
                    planGroup: O.LE,
                    openInvoiceId: j,
                    applicationId: Y,
                    referralTrialOfferId: W,
                    returnRef: $,
                    subscription: z,
                    skipConfirm: !!q,
                    wasTier2PremiumBeforePurchase: J,
                });
            };
        },
        {
            onCloseRequest: () => {
                ei ||
                    ((ei = !0),
                    T._.dispatch(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                    m.A.isDisplayingWowMomentConfirmation && m.A.isAnimated
                        ? setTimeout(() => {
                              (0, o.closeModal)(ee);
                          }, N.K)
                        : (0, o.closeModal)(ee));
            },
            modalKey: ee,
            onCloseCallback: () => {
                if (!X) {
                    let e = (0, f.q1)({ location: "PremiumPaymentModal", unifiedCheckoutFlow: _.C.PREMIUM_CHECKOUT });
                    I.default.track(v.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: Q,
                        payment_type: v.frM[v.VVm.SUBSCRIPTION],
                        location: M ?? w,
                        source: P,
                        subscription_type: v.rzx.PREMIUM,
                        is_gift: k,
                        sku_id: et,
                        eligible_for_trial: null != B,
                        application_id: Y,
                        location_stack: L,
                        checkout_design: e ? f.rS.UNIFIED : f.rS.LEGACY,
                        checkout_flow: _.C.PREMIUM_CHECKOUT,
                    });
                }
                (0, c.ET)(), (0, u.ET)(), (0, d.z)(), R?.(X), X && D?.();
            },
        },
    );
}
