n.d(t, {
    G: () => a,
    d: () => o,
});
var r = n(964268),
    i = n(981631),
    a = (function (e) {
        return (
            (e.ORB_CHECKOUT = "orb_checkout"),
            (e.PREMIUM_CHECKOUT = "premium_checkout"),
            (e.COLLECTIBLES_CHECKOUT = "collectibles_checkout"),
            e
        );
    })({});
let o = {
    orb_checkout: {
        implemented: !0,
        flowType: "orb_checkout",
        UnifiedCheckoutContextProvider: r.XF,
        UnifiedCheckoutCustomHeader: r.Pv,
        purchaseType: i.GZQ.ONE_TIME,
    },
    premium_checkout: {
        implemented: !1,
        flowType: "premium_checkout",
    },
    collectibles_checkout: {
        implemented: !1,
        flowType: "collectibles_checkout",
    },
};
