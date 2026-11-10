var a = e(391048),
    n = e(589078);
e.d(
    t,
    {},
    {
        q: function (o) {
            let t = n.UnifiedCheckoutFlowManagerSingletons[n.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
                {
                    applicationId: e,
                    skuId: i,
                    onClose: l,
                    onComplete: s,
                    analyticsLocations: d,
                    analyticsLocationObject: r,
                    contextKey: u,
                    isGift: c = !1,
                } = o;
            return t.openCheckoutModal({
                modalAPIOptions: {
                    modalKey: "premium-apps-otp-checkout-modal",
                    contextKey: u,
                    onCloseCallback() {
                        (0, a.ET)();
                    },
                },
                checkoutConfiguration: { applicationId: e, skuId: i },
                unifiedCheckoutProviderProps: { analyticsLocations: d },
                forwardedPaymentModalProps: { analyticsObject: r },
                checkoutHandlers: { onClose: l, onComplete: s },
                giftContextProps: { isGift: c },
            });
        },
    },
);
