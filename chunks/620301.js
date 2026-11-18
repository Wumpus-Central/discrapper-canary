t.d(n, { $: () => d });
var i = t(582128),
    l = t(778705),
    a = t(634110),
    r = t(95369),
    o = t(945810);
let s = (0, o.mj)({
        name: "2026-02-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, o.mj)({
        name: "2026-02-non-dm-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var c = t(990820);
function d(e) {
    let {
            giftRecipient: n,
            analyticsLocations: t,
            analyticsObject: o,
            wishlistAnalyticsObject: d,
            premiumAnalyticsObject: f,
            analyticsLocation: C,
            giftMessage: g,
            subscriptionTier: m,
            location: A,
        } = e,
        { enabled: b } = s.useConfig({ location: A }),
        { enabled: h } = u.useConfig({ location: A }),
        p = (0, a.tA)({ isGift: !0, giftRecipient: n }),
        I = b && null != n,
        k = h && null == n,
        T = p && null != n;
    return {
        openGiftModal: i.useCallback(() => {
            null != m
                ? (0, l.A)({
                      isGift: !0,
                      giftRecipient: n ?? void 0,
                      subscriptionTier: m,
                      analyticsLocations: t,
                      analyticsLocation: C,
                      analyticsObject: f ?? o,
                      giftMessage: g,
                  })
                : T
                  ? (0, r.A)({
                        giftRecipient: n,
                        analyticsLocations: t,
                        analyticsLocation: C,
                        analyticsObject: d ?? o,
                        giftMessage: g,
                    })
                  : (0, c.A)({
                        giftRecipient: n ?? void 0,
                        analyticsLocations: t,
                        analyticsLocation: C,
                        analyticsObject: d ?? o,
                        giftMessage: g,
                    });
        }, [T, n, t, C, o, d, f, g, m]),
        shouldShowWishlistModal: T,
        shouldShowGiftSelectionModal: I || k,
    };
}
