n.d(t, { p: () => b });
var r = n(100527),
    i = n(717401),
    a = n(474936),
    o = n(981631),
    s = n(388032),
    l = n(59144),
    c = n(700366);
let u = {
        skuId: "1287835633485877369",
        assetId: "a_33656b7ed12cde00c1826b654cf65590",
    },
    d = {
        skuId: "1287835633515102228",
        assetId: "a_c4395b178205217ad09cae605ef11b1a",
    },
    f = {
        skuId: "1287835633615765524",
        assetId: "a_41445f736db3525135b6b9e1122f2254",
    },
    _ = {
        skuId: "1287835633645125653",
        assetId: "a_a78819f4d41900aa7698a1bafaf6af41",
    },
    p = {
        skuId: "1287835633674620949",
        assetId: "a_5e8abacc7a7454d6b08b5cc84cac1d80",
    },
    h = {
        skuId: "1287835633703845888",
        assetId: "a_a8c5af1848e53cc221d149442c03828f",
    },
    m = {
        skuId: "1287835633733341224",
        assetId: "a_4f2b75e5adff09709702613ea0e2cb70",
    },
    g = {
        skuId: "1287835633762701382",
        assetId: "a_604d1f0f336d41089acc3f82f458a99e",
    },
    E = {
        gradient: ["rgb(2, 25, 47)", "rgb(9, 95, 51)", "rgb(21, 209, 46)"],
    },
    b = {
        variants: [
            {
                listingId: "1303067552619958292",
                name: "Cat Ears",
                variants: [u, d],
            },
            {
                name: "Dark Hood",
                variants: [f, _],
            },
            {
                name: "Witch Hat",
                variants: [p, h],
            },
            {
                listingId: "1303072627061166090",
                name: "Zombie Food",
                variants: [m, g],
            },
        ],
        rewardAssetIdMap: (0, i.YV)([u, d, f, _, p, h, m, g]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => n(969666),
                getGlowAnimationData: () => n(90801),
            },
        },
        dismissibleContentVersion: 4,
        firstTimeNotice: {
            getImageUrl: () => c.Z,
            title: () => "Gift Nitro. Get a reward.",
            description: () => "Choose between 4 avatar decos in either a trick or treat theme.",
            cta: () => s.intl.string(s.t.RzWDqa),
            analyticsLocation: r.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        planSelection: {
            heading: () => "Free Reward for YOU!",
            subheading: () => "Choose one you love!",
            gradientConfig: E,
            getImageUrl: () => c.Z,
            getBackgroundImageUrl: () => "",
        },
        eligiblePlanIds: [a.Xh.PREMIUM_YEAR_TIER_2, a.Xh.PREMIUM_MONTH_TIER_2],
        planSelectionBanner: {
            desktopBannerText: () => "You will receive a free deco with this purchase. Choose in the next step.",
            mobileBannerText: () => s.intl.string(s.t.VBnNJS),
            getImageUrl: () => c.Z,
            gradientConfig: () => E,
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => l.Z,
            getStaticImageUrl: () => "",
            title: () => "Gift Nitro, Get Treated",
            body: () =>
                "All treat, no jumpscare. Gift Nitro this October and get this exclusive, spooky avatar decoration for free.",
            gradientConfig: E,
        },
    };
