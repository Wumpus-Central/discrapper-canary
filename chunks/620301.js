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
            analyticsLocation: g,
            giftMessage: C,
            subscriptionTier: m,
            location: A,
        } = e,
        { enabled: b } = s.useConfig({ location: A }),
        { enabled: h } = u.useConfig({ location: A }),
        p = (0, a.tA)({ isGift: !0, giftRecipient: n }),
        I = b && null != n,
        T = h && null == n,
        k = p && null != n;
    return {
        openGiftModal: i.useCallback(() => {
            null != m
                ? (0, l.A)({
                      isGift: !0,
                      giftRecipient: n ?? void 0,
                      subscriptionTier: m,
                      analyticsLocations: t,
                      analyticsLocation: g,
                      analyticsObject: f ?? o,
                      giftMessage: C,
                  })
                : k
                  ? (0, r.A)({
                        giftRecipient: n,
                        analyticsLocations: t,
                        analyticsLocation: g,
                        analyticsObject: d ?? o,
                        giftMessage: C,
                    })
                  : (0, c.A)({
                        giftRecipient: n ?? void 0,
                        analyticsLocations: t,
                        analyticsLocation: g,
                        analyticsObject: d ?? o,
                        giftMessage: C,
                    });
        }, [k, n, t, g, o, d, f, C, m]),
        shouldShowWishlistModal: k,
        shouldShowGiftSelectionModal: I || T,
    };
}
