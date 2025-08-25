n.d(t, { p: () => v });
var r = n(100527),
    i = n(717401),
    o = n(474936),
    a = n(981631),
    s = n(388032),
    l = n(59144),
    c = n(700366),
    u = n(306225),
    d = n(103865),
    f = n(29653);
let _ = {
        skuId: "1287835633485877369",
        assetId: "a_33656b7ed12cde00c1826b654cf65590",
    },
    p = {
        skuId: "1287835633515102228",
        assetId: "a_c4395b178205217ad09cae605ef11b1a",
    },
    h = {
        skuId: "1287835633615765524",
        assetId: "a_41445f736db3525135b6b9e1122f2254",
    },
    m = {
        skuId: "1287835633645125653",
        assetId: "a_a78819f4d41900aa7698a1bafaf6af41",
    },
    g = {
        skuId: "1287835633674620949",
        assetId: "a_5e8abacc7a7454d6b08b5cc84cac1d80",
    },
    E = {
        skuId: "1287835633703845888",
        assetId: "a_a8c5af1848e53cc221d149442c03828f",
    },
    b = {
        skuId: "1287835633733341224",
        assetId: "a_4f2b75e5adff09709702613ea0e2cb70",
    },
    y = {
        skuId: "1287835633762701382",
        assetId: "a_604d1f0f336d41089acc3f82f458a99e",
    },
    O = {
        gradient: ["rgb(2, 25, 47)", "rgb(9, 95, 51)", "rgb(21, 209, 46)"],
    },
    v = {
        variants: [
            {
                listingId: "1303067552619958292",
                name: "Cat Ears",
                variants: [_, p],
            },
            {
                name: "Dark Hood",
                variants: [h, m],
            },
            {
                name: "Witch Hat",
                variants: [g, E],
            },
            {
                listingId: "1303072627061166090",
                name: "Zombie Food",
                variants: [b, y],
            },
        ],
        rewardAssetIdMap: (0, i.YV)([_, p, h, m, g, E, b, y]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () =>
                    n
                        .e("2561")
                        .then(n.bind(n, 969666))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
                getGlowAnimationData: () =>
                    n
                        .e("51924")
                        .then(n.bind(n, 90801))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
            },
        },
        dismissibleContentVersion: 4,
        firstTimeNotice: {
            getImageUrl: () => c.Z,
            title: () => "Gift Nitro. Get a reward.",
            description: () => "Choose between 4 avatar decos in either a trick or treat theme.",
            cta: () => s.intl.string(s.t.RzWDqa),
            analyticsLocation: r.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: a.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        planSelection: {
            heading: () => "Choose a FREE reward",
            subheading: () => "Yours to keep if you dare...",
            gradientConfig: O,
            getImageUrl: () => c.Z,
            getBackgroundImageUrl: () => f.Z,
        },
        eligiblePlanIds: [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2],
        planSelectionBanner: {
            desktopBannerText: () => "Pick a free Halloween avatar decoration. Yours to keep with a gift purchase.",
            mobileBannerText: () => s.intl.string(s.t.VBnNJS),
            getImageUrl: () => c.Z,
            gradientConfig: () => O,
            getBackgroundImageUrl: () => u.Z,
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => l.Z,
            getStaticImageUrl: () => "",
            title: () => "Gift Nitro, Get Treated",
            body: () =>
                "All treat, no jumpscare. Gift Nitro this October and get this exclusive, spooky avatar decoration for free.",
            getBackgroundImageUrl: () => d.Z,
        },
    };
