var r = n(582128),
    i = n(793574),
    o = n(722258);
n.d(
    e,
    {},
    {
        e: function (t) {
            let {
                sku: e,
                analyticsLocations: n,
                analyticsSource: u = i.A.USER_PROFILE_WISHLIST,
                giftRecipient: a,
                giftingOrigin: c,
            } = t;
            return r.useCallback(() => {
                (0, o.B)({
                    skuId: e.id,
                    analyticsLocations: n ?? [],
                    analyticsSource: u,
                    returnRef: void 0,
                    tab: void 0,
                    giftRecipient: a,
                    giftingOrigin: c,
                });
            }, [n, u, a, c, e.id]);
        },
    },
);
