"use strict";
n.d(t, { A: () => O });
var r = n(627968);
n(64700);
var i = n(296489),
    s = n.n(i),
    a = n(835245),
    o = n(397927),
    l = n(73153),
    u = n(391048),
    c = n(158032),
    d = n(636099),
    _ = n(120700),
    f = n(742810),
    p = n(979286),
    h = n(590180),
    m = n(61750),
    E = n(573359),
    g = n(412260),
    A = n(287809),
    I = n(954571),
    T = n(203982),
    S = n(927578),
    y = n(925847),
    v = n(639289),
    N = n(652215),
    C = n(758836),
    R = n(788868);
function O(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: i,
            onClose: O,
            onComplete: b,
            onSubscriptionConfirmation: D,
            analyticsLocations: L,
            analyticsObject: w,
            analyticsLocation: M,
            analyticsSourceLocation: x,
            confirmationFooter: P,
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
        Z = !1,
        X = (0, y.A)() ?? (0, a.A)(),
        Q = A.default.getCurrentUser(),
        J = (0, S.YE)(Q, R.PremiumTypes.TIER_2),
        ee = s()("payment-modal"),
        et = (0, S.mH)(V),
        en = k || et !== (0, S.mH)(R.pe.TIER_2) ? null : g.A.getMarketingMomentPromotion(),
        er = en?.rewardSkuIds[0] ?? null,
        ei = !1;
    return (0, o.mMO)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("41353"),
                n.e("62175"),
                n.e("94212"),
                n.e("29716"),
                n.e("14704"),
                n.e("2824"),
                n.e("65027"),
            ]).then(n.bind(n, 674619));
            return (n) => {
                let { onClose: s, ...a } = n;
                return (0, r.jsx)(e, {
                    ...a,
                    loadId: X,
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
                        (ei = !0), T._.dispatch(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                        let t = async () => {
                            if (
                                (s(),
                                O?.(e),
                                e && D?.(),
                                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e }),
                                e && null != er && en.endDate >= new Date())
                            ) {
                                await (0, p.RE)(er);
                                let e = h.A.getProduct(er);
                                null != e &&
                                    (0, m.A)({
                                        product: e,
                                        analyticsLocations: L ?? [],
                                        purchaseType: C.gs.PROMOTIONAL,
                                        overrideGradientColor: "nitro-pink",
                                    });
                            }
                        };
                        E.A.isDisplayingWowMomentConfirmation && E.A.isAnimated
                            ? setTimeout(() => {
                                  t();
                              }, v.K)
                            : t();
                    },
                    onComplete: () => {
                        (Z = !0), b?.();
                    },
                    onSubscriptionConfirmation: D,
                    analyticsLocations: L,
                    analyticsObject: w,
                    analyticsLocation: M,
                    analyticsSourceLocation: x,
                    confirmationFooter: P,
                    trialId: B,
                    postSuccessGuild: H,
                    planGroup: R.LE,
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
                    T._.dispatch(N.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                    E.A.isDisplayingWowMomentConfirmation && E.A.isAnimated
                        ? setTimeout(() => {
                              (0, o.OoC)(ee);
                          }, v.K)
                        : (0, o.OoC)(ee));
            },
            modalKey: ee,
            onCloseCallback: () => {
                if (!Z) {
                    let e = (0, f.q1)({ location: "PremiumPaymentModal", unifiedCheckoutFlow: _.C.PREMIUM_CHECKOUT });
                    I.default.track(N.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: X,
                        payment_type: N.frM[N.VVm.SUBSCRIPTION],
                        location: M ?? w,
                        source: x,
                        subscription_type: N.rzx.PREMIUM,
                        is_gift: k,
                        sku_id: et,
                        eligible_for_trial: null != B,
                        application_id: Y,
                        location_stack: L,
                        checkout_design: e ? f.rS.UNIFIED : f.rS.LEGACY,
                        checkout_flow: _.C.PREMIUM_CHECKOUT,
                    });
                }
                (0, c.ET)(), (0, u.ET)(), (0, d.z)(), O?.(Z), Z && D?.();
            },
        },
    );
}
