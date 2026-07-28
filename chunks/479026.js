o.d(i, { e: () => r });
var n = o(582128),
    e = o(793574),
    u = o(722258);
function r(t) {
    let {
        sku: i,
        analyticsLocations: o,
        analyticsSource: r = e.A.USER_PROFILE_WISHLIST,
        giftRecipient: c,
        giftingOrigin: s,
    } = t;
    return n.useCallback(() => {
        (0, u.B)({
            skuId: i.id,
            analyticsLocations: o ?? [],
            analyticsSource: r,
            returnRef: void 0,
            tab: void 0,
            giftRecipient: c,
            giftingOrigin: s,
        });
    }, [o, r, c, s, i.id]);
}
