n.d(t, {
    MG: () => a,
    xh: () => l,
});
let r = (0, n(427164).le)({
        name: "2025-09-collectibles-hero-button-text",
        kind: "user",
        defaultConfig: {
            showShopTheCollectionText: !0,
            showSeeMoreText: !1,
        },
        variations: {
            0: {
                showShopTheCollectionText: !1,
                showSeeMoreText: !1,
            },
            1: {
                showShopTheCollectionText: !1,
                showSeeMoreText: !0,
            },
            2: {
                showShopTheCollectionText: !0,
                showSeeMoreText: !1,
            },
        },
    }),
    l = (e) => r.useConfig({ location: e }).showSeeMoreText,
    a = (e) => {
        let t = r.useConfig({ location: e }).showShopTheCollectionText,
            n = l(e);
        return t || n;
    };
