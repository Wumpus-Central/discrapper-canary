n.d(t, { p: () => S });
var r = n(100527),
    i = n(717401),
    a = n(474936),
    o = n(981631),
    s = n(388032),
    l = n(59144),
    c = n(700366),
    u = n(154658),
    d = n(306225),
    f = n(103865),
    _ = n(29653),
    p = n(955604),
    h = n(692557);
let m = {
        skuId: "1287835633485877369",
        assetId: "a_33656b7ed12cde00c1826b654cf65590",
    },
    g = {
        skuId: "1287835633515102228",
        assetId: "a_c4395b178205217ad09cae605ef11b1a",
    },
    E = {
        skuId: "1287835633615765524",
        assetId: "a_41445f736db3525135b6b9e1122f2254",
    },
    b = {
        skuId: "1287835633645125653",
        assetId: "a_a78819f4d41900aa7698a1bafaf6af41",
    },
    y = {
        skuId: "1287835633674620949",
        assetId: "a_5e8abacc7a7454d6b08b5cc84cac1d80",
    },
    O = {
        skuId: "1287835633703845888",
        assetId: "a_a8c5af1848e53cc221d149442c03828f",
    },
    v = {
        skuId: "1287835633733341224",
        assetId: "a_4f2b75e5adff09709702613ea0e2cb70",
    },
    I = {
        skuId: "1287835633762701382",
        assetId: "a_604d1f0f336d41089acc3f82f458a99e",
    },
    T = {
        gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"],
    },
    S = {
        variants: [
            {
                listingId: "1303067552619958292",
                name: "Cat Ears",
                variants: [m, g],
            },
            {
                name: "Dark Hood",
                variants: [E, b],
            },
            {
                name: "Witch Hat",
                variants: [y, O],
            },
            {
                listingId: "1303072627061166090",
                name: "Zombie Food",
                variants: [v, I],
            },
        ],
        rewardAssetIdMap: (0, i.YV)([m, g, E, b, y, O, v, I]),
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
            analyticsPage: o.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        eligiblePlanIds: [a.Xh.PREMIUM_YEAR_TIER_2, a.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => "Choose a FREE reward",
            subheading: () => "Yours to keep if you dare...",
            gradientConfig: T,
            getImageUrl: () => p.Z,
            getBannerImageUrl: () => _.Z,
            getBackgroundImageUrl: () => u.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => "Pick a free Halloween avatar decoration. Yours to keep with a gift purchase.",
            mobileBannerText: () => "Free reward for YOU! Choose one you love!",
            getImageUrl: () => h.Z,
            gradientConfig: () => T,
            getBackgroundImageUrl: () => d.Z,
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => l.Z,
            getStaticImageUrl: () => "",
            title: () => "Gift Nitro, Get Treated",
            body: () =>
                "All treat, no jumpscare. Gift Nitro this October and get this exclusive, spooky avatar decoration for free.",
            getBackgroundImageUrl: () => f.Z,
        },
    };
