"use strict";
n.d(t, { A: () => C });
var r = n(627968);
n(64700);
var i = n(296489),
    s = n.n(i),
    a = n(835245),
    o = n(192308),
    l = n(73153),
    u = n(391048),
    d = n(158032),
    c = n(636099),
    _ = n(120700),
    f = n(742810),
    E = n(979286),
    h = n(590180),
    p = n(61750),
    m = n(573359),
    g = n(412260),
    A = n(287809),
    I = n(954571),
    T = n(203982),
    S = n(927578),
    y = n(925847),
    N = n(639289),
    O = n(652215),
    R = n(758836),
    v = n(788868);
function C(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: i,
            onClose: C,
            onComplete: b,
            onSubscriptionConfirmation: D,
            analyticsLocations: L,
            analyticsObject: w,
            analyticsLocation: M,
            analyticsSourceLocation: P,
            confirmationFooter: U,
            isGift: k = !1,
            giftMessage: x,
            giftStyle: G,
            giftingOrigin: V,
            subscriptionTier: F,
            trialId: B,
            postSuccessGuild: H,
            openInvoiceId: Y,
            applicationId: W,
            referralTrialOfferId: j,
            giftRecipient: K,
            returnRef: $,
            subscription: z,
            skipConfirm: q,
        } = e ?? {},
        X = !1,
        Q = (0, y.A)() ?? (0, a.A)(),
        J = A.default.getCurrentUser(),
        Z = (0, S.YE)(J, v.PremiumTypes.TIER_2),
        ee = s()("payment-modal"),
        et = (0, S.mH)(F),
        en = k || et !== (0, S.mH)(v.pe.TIER_2) ? null : g.A.getMarketingMomentPromotion(),
        er = en?.rewardSkuIds[0] ?? null,
        ei = !1;
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("24199"),
                n.e("57036"),
                n.e("70474"),
                n.e("61943"),
                n.e("76640"),
                n.e("7175"),
                n.e("55202"),
                n.e("23353"),
                n.e("73667"),
                n.e("11250"),
                n.e("14138"),
                n.e("3442"),
                n.e("85071"),
                n.e("88017"),
                n.e("70994"),
                n.e("17239"),
                n.e("24267"),
                n.e("51793"),
                n.e("58164"),
                n.e("81645"),
                n.e("36682"),
                n.e("63070"),
                n.e("25370"),
                n.e("28367"),
                n.e("96313"),
                n.e("49318"),
                n.e("12721"),
                n.e("58283"),
                n.e("8087"),
                n.e("55057"),
                n.e("60471"),
                n.e("67876"),
                n.e("41353"),
                n.e("94212"),
                n.e("62175"),
                n.e("29716"),
                n.e("14704"),
                n.e("2824"),
                n.e("69150"),
            ]).then(n.bind(n, 674619));
            return (n) => {
                let { onClose: s, ...a } = n;
                return (0, r.jsx)(e, {
                    ...a,
                    loadId: Q,
                    subscriptionTier: F,
                    skuId: et,
                    isGift: k,
                    giftMessage: x,
                    giftStyle: G,
                    giftingOrigin: V,
                    giftRecipient: K,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e) => {
                        if (ei) return;
                        (ei = !0), T._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                        let t = async () => {
                            if (
                                (s(),
                                C?.(e),
                                e && D?.(),
                                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e }),
                                e && null != er && en.endDate >= new Date())
                            ) {
                                await (0, E.RE)(er);
                                let e = h.A.getProduct(er);
                                null != e &&
                                    (0, p.A)({
                                        product: e,
                                        analyticsLocations: L ?? [],
                                        purchaseType: R.gs.PROMOTIONAL,
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
                    confirmationFooter: U,
                    trialId: B,
                    postSuccessGuild: H,
                    planGroup: v.LE,
                    openInvoiceId: Y,
                    applicationId: W,
                    referralTrialOfferId: j,
                    returnRef: $,
                    subscription: z,
                    skipConfirm: !!q,
                    wasTier2PremiumBeforePurchase: Z,
                });
            };
        },
        {
            onCloseRequest: () => {
                ei ||
                    ((ei = !0),
                    T._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
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
                    I.default.track(O.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: Q,
                        payment_type: O.frM[O.VVm.SUBSCRIPTION],
                        location: M ?? w,
                        source: P,
                        subscription_type: O.rzx.PREMIUM,
                        is_gift: k,
                        sku_id: et,
                        eligible_for_trial: null != B,
                        application_id: W,
                        location_stack: L,
                        checkout_design: e ? f.rS.UNIFIED : f.rS.LEGACY,
                        checkout_flow: _.C.PREMIUM_CHECKOUT,
                    });
                }
                (0, d.ET)(), (0, u.ET)(), (0, c.z)(), C?.(X), X && D?.();
            },
        },
    );
}
