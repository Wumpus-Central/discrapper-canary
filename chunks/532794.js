"use strict";
n.d(t, { A: () => y });
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
    _ = n(608805),
    f = n(120700),
    p = n(573359),
    h = n(287809),
    m = n(954571),
    E = n(203982),
    g = n(927578),
    A = n(925847),
    I = n(639289),
    T = n(652215),
    S = n(788868);
function y(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: i,
            onClose: y,
            onComplete: v,
            onSubscriptionConfirmation: N,
            analyticsLocations: C,
            analyticsObject: b,
            analyticsLocation: R,
            analyticsSourceLocation: O,
            confirmationFooter: D,
            isGift: L = !1,
            giftMessage: w,
            giftStyle: x,
            giftingOrigin: M,
            subscriptionTier: P,
            trialId: k,
            postSuccessGuild: U,
            openInvoiceId: G,
            applicationId: F,
            referralTrialOfferId: V,
            giftRecipient: B,
            returnRef: H,
            subscription: j,
            skipConfirm: Y,
        } = e ?? {},
        W = !1,
        K = (0, A.A)() ?? (0, a.A)(),
        z = h.default.getCurrentUser(),
        $ = (0, g.YE)(z, S.PremiumTypes.TIER_2),
        q = s()("payment-modal"),
        Z = (0, g.mH)(P),
        X = !1;
    return (0, o.mMO)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("41353"),
                n.e("62175"),
                n.e("2292"),
                n.e("29716"),
                n.e("14704"),
                n.e("2824"),
                n.e("21775"),
            ]).then(n.bind(n, 674619));
            return (n) => {
                let { onClose: s, ...a } = n;
                return (0, r.jsx)(e, {
                    ...a,
                    loadId: K,
                    subscriptionTier: P,
                    skuId: Z,
                    isGift: L,
                    giftMessage: w,
                    giftStyle: x,
                    giftingOrigin: M,
                    giftRecipient: B,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e) => {
                        if (X) return;
                        (X = !0), E._.dispatch(T.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                        let t = () => {
                            s(),
                                y?.(e),
                                e && N?.(),
                                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e });
                        };
                        p.A.isDisplayingWowMomentConfirmation && p.A.isAnimated
                            ? setTimeout(() => {
                                  t();
                              }, I.K)
                            : t();
                    },
                    onComplete: () => {
                        (W = !0), v?.();
                    },
                    onSubscriptionConfirmation: N,
                    analyticsLocations: C,
                    analyticsObject: b,
                    analyticsLocation: R,
                    analyticsSourceLocation: O,
                    confirmationFooter: D,
                    trialId: k,
                    postSuccessGuild: U,
                    planGroup: S.LE,
                    openInvoiceId: G,
                    applicationId: F,
                    referralTrialOfferId: V,
                    returnRef: H,
                    subscription: j,
                    skipConfirm: !!Y,
                    wasTier2PremiumBeforePurchase: $,
                });
            };
        },
        {
            onCloseRequest: () => {
                X ||
                    ((X = !0),
                    E._.dispatch(T.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                    p.A.isDisplayingWowMomentConfirmation && p.A.isAnimated
                        ? setTimeout(() => {
                              (0, o.OoC)(q);
                          }, I.K)
                        : (0, o.OoC)(q));
            },
            modalKey: q,
            onCloseCallback: () => {
                if (!W) {
                    let e = (0, _.q1)({ location: "PremiumPaymentModal", unifiedCheckoutFlow: f.C.PREMIUM_CHECKOUT });
                    m.default.track(T.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: K,
                        payment_type: T.frM[T.VVm.SUBSCRIPTION],
                        location: R ?? b,
                        source: O,
                        subscription_type: T.rzx.PREMIUM,
                        is_gift: L,
                        sku_id: Z,
                        eligible_for_trial: null != k,
                        application_id: F,
                        location_stack: C,
                        checkout_design: e ? _.rS.UNIFIED : _.rS.LEGACY,
                    });
                }
                (0, c.ET)(), (0, u.ET)(), (0, d.z)(), y?.(W), W && N?.();
            },
        },
    );
}
