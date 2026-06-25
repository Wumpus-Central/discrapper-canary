"use strict";
n.d(t, { A: () => S });
var i = n(296489),
    r = n.n(i),
    s = n(192308),
    a = n(228366),
    o = n(391048),
    l = n(158032),
    u = n(636099),
    c = n(120700),
    d = n(662388),
    _ = n(590180),
    h = n(61750),
    f = n(573359),
    p = n(374200),
    E = n(625494),
    m = n(428262),
    g = n(811656),
    A = n(652215),
    I = n(758836),
    T = n(788868);
function S(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: i,
            onClose: S,
            onComplete: y,
            onSubscriptionConfirmation: C,
            analyticsLocations: N,
            analyticsObject: v,
            analyticsLocation: R,
            analyticsSourceLocation: O,
            confirmationFooter: b,
            isGift: D = !1,
            giftMessage: L,
            giftStyle: w,
            giftingOrigin: M,
            subscriptionTier: P,
            trialId: x,
            postSuccessGuild: k,
            openInvoiceId: U,
            applicationId: G,
            referralTrialOfferId: F,
            giftRecipient: V,
            returnRef: B,
            subscription: j,
            skipConfirm: H,
        } = e ?? {},
        Y = r()("payment-modal"),
        W = (0, m.mH)(P),
        K = D || W !== (0, m.mH)(T.pe.TIER_2) ? null : p.A.getMarketingMomentPromotion(),
        $ = K?.rewardSkuIds[0] ?? null,
        z = !1;
    function q() {
        z ||
            ((z = !0),
            E._.dispatch(A.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
            f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                ? setTimeout(() => {
                      (0, s.closeModal)(Y);
                  }, g.K)
                : (0, s.closeModal)(Y));
    }
    let Z = (e) => {
        (0, l.ET)(), (0, o.ET)(), (0, u.z)(), e && null != C && C();
    };
    function X() {
        return (0, s.closeModal)(Y);
    }
    return Promise.resolve()
        .then(n.bind(n, 529427))
        .then((e) => {
            let { UnifiedCheckoutFlowManagerSingletons: n } = e;
            return n[c.C.PREMIUM_CHECKOUT].get().openCheckoutModal({
                checkoutConfiguration: { applicationId: G, skuId: W ?? null },
                forwardedPaymentModalProps: {
                    analyticsObject: v,
                    initialPlanId: t,
                    analyticsLocation: R,
                    followupSKUInfo: i,
                    onSubscriptionConfirmation: C,
                    postSuccessGuild: k,
                    trialId: x,
                    planGroup: T.LE,
                    openInvoiceId: U,
                    returnRef: B,
                    subscriptionTier: P,
                    skipConfirm: !!H,
                    paymentModalOnClose: (e) =>
                        ((e, t) => {
                            if (z) return;
                            (z = !0), E._.dispatch(A.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                            let n = async () => {
                                if (
                                    (null != t && t(),
                                    a.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e }),
                                    e && null != $ && K.endDate >= new Date())
                                ) {
                                    await (0, d.RE)($);
                                    let e = _.A.getProduct($);
                                    null != e &&
                                        (0, h.A)({
                                            product: e,
                                            analyticsLocations: N ?? [],
                                            purchaseType: I.gs.PROMOTIONAL,
                                            overrideGradientColor: "nitro-pink",
                                        });
                                }
                            };
                            f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                                ? setTimeout(() => {
                                      n();
                                  }, g.K)
                                : n();
                        })(e, X),
                },
                unifiedCheckoutProviderProps: { analyticsSourceLocation: O, analyticsLocations: N },
                checkoutHandlers: { onClose: S, onComplete: y },
                giftContextProps: { isGift: D, giftMessage: L, giftStyle: w, giftingOrigin: M, giftRecipient: V },
                tenantParams: {
                    confirmationFooter: b,
                    defaultPlanId: void 0,
                    referralCode: null,
                    referralTrialOfferId: F,
                    subscriptionTier: P,
                    subscription: j,
                },
                modalAPIOptions: {
                    modalKey: Y,
                    skipCloseModalOnCloseRequest: !0,
                    onCloseRequest: q,
                    onCloseCallback: Z,
                },
            });
        });
}
