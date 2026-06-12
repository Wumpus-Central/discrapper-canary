a.d(t, { q: () => l });
var e = a(391048),
    n = a(636099),
    o = a(529427);
function l(i) {
    let t = o.UnifiedCheckoutFlowManagerSingletons[o.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
        {
            applicationId: a,
            skuId: l,
            onClose: s,
            onComplete: d,
            analyticsLocations: c,
            analyticsLocationObject: r,
            contextKey: u,
            isGift: p = !1,
        } = i;
    return t.openCheckoutModal({
        modalAPIOptions: {
            modalKey: "premium-apps-otp-checkout-modal",
            contextKey: u,
            onCloseCallback() {
                (0, e.ET)(), (0, n.z)();
            },
        },
        applicationId: a,
        skuId: l,
        analyticsLocations: c,
        analyticsObject: r,
        onClose: s,
        onComplete: d,
        giftContextProps: { isGift: p },
    });
}
