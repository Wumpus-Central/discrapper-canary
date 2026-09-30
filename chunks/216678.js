n.d(t, { q: () => i });
var e = n(391048),
    a = n(589078);
function i(o) {
    let t = a.UnifiedCheckoutFlowManagerSingletons[a.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
        {
            applicationId: n,
            skuId: i,
            onClose: l,
            onComplete: d,
            analyticsLocations: s,
            analyticsLocationObject: r,
            contextKey: u,
            isGift: c = !1,
        } = o;
    return t.openCheckoutModal({
        modalAPIOptions: {
            modalKey: "premium-apps-otp-checkout-modal",
            contextKey: u,
            onCloseCallback() {
                (0, e.ET)();
            },
        },
        checkoutConfiguration: { applicationId: n, skuId: i },
        unifiedCheckoutProviderProps: { analyticsLocations: s },
        forwardedPaymentModalProps: { analyticsObject: r },
        checkoutHandlers: { onClose: l, onComplete: d },
        giftContextProps: { isGift: c },
    });
}
