e.d(t, { q: () => l });
var a = e(391048),
    n = e(636099),
    i = e(529427);
function l(o) {
    let t = i.UnifiedCheckoutFlowManagerSingletons[i.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
        {
            applicationId: e,
            skuId: l,
            onClose: s,
            onComplete: d,
            analyticsLocations: r,
            analyticsLocationObject: u,
            contextKey: c,
            isGift: p = !1,
        } = o;
    return t.openCheckoutModal({
        modalAPIOptions: {
            modalKey: "premium-apps-otp-checkout-modal",
            contextKey: c,
            onCloseCallback() {
                (0, a.ET)(), (0, n.z)();
            },
        },
        checkoutConfiguration: { applicationId: e, skuId: l },
        unifiedCheckoutProviderProps: { analyticsLocations: r },
        forwardedPaymentModalProps: { analyticsObject: u },
        checkoutHandlers: { onClose: s, onComplete: d },
        giftContextProps: { isGift: p },
    });
}
