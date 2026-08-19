n.d(t, { q: () => l });
var e = n(391048),
    a = n(636099),
    i = n(529427);
function l(o) {
    let t = i.UnifiedCheckoutFlowManagerSingletons[i.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
        {
            applicationId: n,
            skuId: l,
            onClose: d,
            onComplete: s,
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
                (0, e.ET)(), (0, a.z)();
            },
        },
        checkoutConfiguration: { applicationId: n, skuId: l },
        unifiedCheckoutProviderProps: { analyticsLocations: r },
        forwardedPaymentModalProps: { analyticsObject: u },
        checkoutHandlers: { onClose: d, onComplete: s },
        giftContextProps: { isGift: p },
    });
}
