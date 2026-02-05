"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(296489),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    l = n(73153),
    u = n(391048),
    c = n(158032),
    d = n(636099),
    _ = n(573359),
    f = n(287809),
    p = n(954571),
    h = n(203982),
    m = n(927578),
    g = n(925847),
    E = n(639289),
    A = n(652215),
    I = n(788868);
function T(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: i,
            onClose: T,
            onComplete: y,
            onSubscriptionConfirmation: S,
            analyticsLocations: v,
            analyticsObject: C,
            analyticsLocation: b,
            analyticsSourceLocation: N,
            confirmationFooter: R,
            isGift: O = !1,
            giftMessage: D,
            giftStyle: L,
            giftingOrigin: w,
            subscriptionTier: x,
            trialId: P,
            postSuccessGuild: M,
            openInvoiceId: k,
            applicationId: U,
            referralTrialOfferId: G,
            giftRecipient: V,
            returnRef: F,
            subscription: B,
            skipConfirm: j,
        } = e ?? {},
        H = !1,
        Y = (0, g.A)() ?? (0, s.A)(),
        W = f.default.getCurrentUser(),
        K = (0, m.YE)(W, I.PremiumTypes.TIER_2),
        z = a()("payment-modal"),
        $ = (0, m.mH)(x),
        q = !1;
    return (0, o.mMO)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("62175"),
                n.e("2292"),
                n.e("14704"),
                n.e("29716"),
                n.e("2824"),
                n.e("28138"),
            ]).then(n.bind(n, 674619));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, r.jsx)(e, {
                    ...s,
                    loadId: Y,
                    subscriptionTier: x,
                    skuId: $,
                    isGift: O,
                    giftMessage: D,
                    giftStyle: L,
                    giftingOrigin: w,
                    giftRecipient: V,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e) => {
                        if (q) return;
                        (q = !0), h._.dispatch(A.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                        let t = () => {
                            a(),
                                T?.(e),
                                e && S?.(),
                                l.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e });
                        };
                        _.A.isDisplayingWowMomentConfirmation && _.A.isAnimated
                            ? setTimeout(() => {
                                  t();
                              }, E.K)
                            : t();
                    },
                    onComplete: () => {
                        (H = !0), y?.();
                    },
                    onSubscriptionConfirmation: S,
                    analyticsLocations: v,
                    analyticsObject: C,
                    analyticsLocation: b,
                    analyticsSourceLocation: N,
                    confirmationFooter: R,
                    trialId: P,
                    postSuccessGuild: M,
                    planGroup: I.LE,
                    openInvoiceId: k,
                    applicationId: U,
                    referralTrialOfferId: G,
                    returnRef: F,
                    subscription: B,
                    skipConfirm: !!j,
                    wasTier2PremiumBeforePurchase: K,
                });
            };
        },
        {
            onCloseRequest: () => {
                q ||
                    ((q = !0),
                    h._.dispatch(A.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                    _.A.isDisplayingWowMomentConfirmation && _.A.isAnimated
                        ? setTimeout(() => {
                              (0, o.OoC)(z);
                          }, E.K)
                        : (0, o.OoC)(z));
            },
            modalKey: z,
            onCloseCallback: () => {
                H ||
                    p.default.track(A.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: Y,
                        payment_type: A.frM[A.VVm.SUBSCRIPTION],
                        location: b ?? C,
                        source: N,
                        subscription_type: A.rzx.PREMIUM,
                        is_gift: O,
                        sku_id: $,
                        eligible_for_trial: null != P,
                        application_id: U,
                        location_stack: v,
                    }),
                    (0, c.ET)(),
                    (0, u.ET)(),
                    (0, d.z)(),
                    T?.(H),
                    H && S?.();
            },
        },
    );
}
