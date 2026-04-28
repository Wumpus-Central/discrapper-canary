"use strict";
n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var r = n(296489),
    s = n.n(r),
    a = n(132500),
    o = n(192308),
    l = n(228366),
    _ = n(391048),
    d = n(158032),
    u = n(636099),
    c = n(120700),
    E = n(742810),
    h = n(693477),
    m = n(590180),
    f = n(61750),
    g = n(573359),
    I = n(374200),
    A = n(287809),
    p = n(954571),
    T = n(625494),
    S = n(927578),
    N = n(925847),
    O = n(639289),
    R = n(652215),
    C = n(758836),
    y = n(788868);
function D(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: r,
            onClose: D,
            onComplete: L,
            onSubscriptionConfirmation: v,
            analyticsLocations: w,
            analyticsObject: P,
            analyticsLocation: b,
            analyticsSourceLocation: k,
            confirmationFooter: U,
            isGift: M = !1,
            giftMessage: G,
            giftStyle: x,
            giftingOrigin: V,
            subscriptionTier: F,
            trialId: B,
            postSuccessGuild: H,
            openInvoiceId: Y,
            applicationId: W,
            referralTrialOfferId: K,
            giftRecipient: j,
            returnRef: $,
            subscription: z,
            skipConfirm: q,
        } = e ?? {},
        X = !1,
        Q = (0, N.A)() ?? (0, a.A)(),
        J = A.default.getCurrentUser(),
        Z = (0, S.YE)(J, y.PremiumTypes.TIER_2),
        ee = s()("payment-modal"),
        et = (0, S.mH)(F),
        en = M || et !== (0, S.mH)(y.pe.TIER_2) ? null : I.A.getMarketingMomentPromotion(),
        ei = en?.rewardSkuIds[0] ?? null,
        er = !1;
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("32292"),
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("80527"),
                n.e("58710"),
                n.e("31825"),
                n.e("23353"),
                n.e("7175"),
                n.e("37249"),
                n.e("14138"),
                n.e("8971"),
                n.e("85071"),
                n.e("88017"),
                n.e("1040"),
                n.e("64615"),
                n.e("17239"),
                n.e("66950"),
                n.e("58164"),
                n.e("38229"),
                n.e("20861"),
                n.e("36682"),
                n.e("45723"),
                n.e("56871"),
                n.e("69601"),
                n.e("47511"),
                n.e("51444"),
                n.e("62290"),
                n.e("80973"),
                n.e("82731"),
                n.e("20735"),
                n.e("10567"),
                n.e("12542"),
                n.e("84317"),
                n.e("6159"),
                n.e("14875"),
                n.e("62175"),
                n.e("29716"),
                n.e("8739"),
                n.e("61402"),
                n.e("84285"),
            ]).then(n.bind(n, 864353));
            return (n) => {
                let { onClose: s, ...a } = n;
                return (0, i.jsx)(e, {
                    ...a,
                    loadId: Q,
                    subscriptionTier: F,
                    skuId: et,
                    isGift: M,
                    giftMessage: G,
                    giftStyle: x,
                    giftingOrigin: V,
                    giftRecipient: j,
                    initialPlanId: t,
                    followupSKUInfo: r,
                    onClose: (e) => {
                        if (er) return;
                        (er = !0), T._.dispatch(R.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                        let t = async () => {
                            if (
                                (s(),
                                D?.(e),
                                e && v?.(),
                                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e }),
                                e && null != ei && en.endDate >= new Date())
                            ) {
                                await (0, h.RE)(ei);
                                let e = m.A.getProduct(ei);
                                null != e &&
                                    (0, f.A)({
                                        product: e,
                                        analyticsLocations: w ?? [],
                                        purchaseType: C.gs.PROMOTIONAL,
                                        overrideGradientColor: "nitro-pink",
                                    });
                            }
                        };
                        g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated
                            ? setTimeout(() => {
                                  t();
                              }, O.K)
                            : t();
                    },
                    onComplete: () => {
                        (X = !0), L?.();
                    },
                    onSubscriptionConfirmation: v,
                    analyticsLocations: w,
                    analyticsObject: P,
                    analyticsLocation: b,
                    analyticsSourceLocation: k,
                    confirmationFooter: U,
                    trialId: B,
                    postSuccessGuild: H,
                    planGroup: y.LE,
                    openInvoiceId: Y,
                    applicationId: W,
                    referralTrialOfferId: K,
                    returnRef: $,
                    subscription: z,
                    skipConfirm: !!q,
                    wasTier2PremiumBeforePurchase: Z,
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
                          }, O.K)
                        : (0, o.closeModal)(ee));
            },
            modalKey: ee,
            onCloseCallback: () => {
                if (!X) {
                    let e = (0, E.q1)({ location: "PremiumPaymentModal", unifiedCheckoutFlow: c.C.PREMIUM_CHECKOUT });
                    p.default.track(R.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: Q,
                        payment_type: R.frM[R.VVm.SUBSCRIPTION],
                        location: b ?? P,
                        source: k,
                        subscription_type: R.rzx.PREMIUM,
                        is_gift: M,
                        sku_id: et,
                        eligible_for_trial: null != B,
                        application_id: W,
                        location_stack: w,
                        checkout_design: e ? E.rS.UNIFIED : E.rS.LEGACY,
                        checkout_flow: c.C.PREMIUM_CHECKOUT,
                    });
                }
                (0, d.ET)(), (0, _.ET)(), (0, u.z)(), D?.(X), X && v?.();
            },
        },
    );
}
