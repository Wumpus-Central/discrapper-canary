a.d(t, { q: () => o });
var e = a(391048),
    n = a(636099),
    l = a(155506);
function o(i) {
    let t = l.oE[l.CL.PREMIUM_APPS_OTP_CHECKOUT].get(),
        {
            applicationId: a,
            skuId: o,
            onClose: s,
            onComplete: c,
            analyticsLocations: d,
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
        skuId: o,
        analyticsLocations: d,
        analyticsObject: r,
        onClose: s,
        onComplete: c,
        giftContextProps: { isGift: p },
    });
}
