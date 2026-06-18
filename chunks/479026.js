s.d(a, { e: () => e });
var t = s(64700),
    d = s(793574),
    c = s(722258);
function e(i) {
    let {
        sku: a,
        analyticsLocations: s,
        analyticsSource: e = d.A.USER_PROFILE_WISHLIST,
        giftRecipient: u,
        giftingOrigin: n,
    } = i;
    return t.useCallback(() => {
        (0, c.B)({
            skuId: a.id,
            analyticsLocations: s ?? [],
            analyticsSource: e,
            returnRef: void 0,
            tab: void 0,
            giftRecipient: u,
            giftingOrigin: n,
        });
    }, [s, e, u, n, a.id]);
}
