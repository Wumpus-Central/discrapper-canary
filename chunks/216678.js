t.d(e, { q: () => o });
var a = t(391048),
    n = t(636099),
    l = t(407001);
function o(i) {
    let e = l.UnifiedCheckoutFlowManagerSingletons[l.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
        {
            applicationId: t,
            skuId: o,
            onClose: s,
            onComplete: c,
            analyticsLocations: d,
            analyticsLocationObject: r,
            contextKey: u,
            isGift: p = !1,
        } = i;
    return e.openCheckoutModal({
        modalAPIOptions: {
            modalKey: "premium-apps-otp-checkout-modal",
            contextKey: u,
            onCloseCallback() {
                (0, a.ET)(), (0, n.z)();
            },
        },
        applicationId: t,
        skuId: o,
        analyticsLocations: d,
        analyticsObject: r,
        onClose: s,
        onComplete: c,
        giftContextProps: { isGift: p },
    });
}
