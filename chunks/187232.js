n.d(t, { p: () => A });
var r = n(100527),
    i = n(717401),
    a = n(474936),
    o = n(981631),
    s = n(388032),
    l = n(796909),
    c = n(893410),
    u = n(878339),
    d = n(733366),
    f = n(492336),
    _ = n(457686),
    p = n(516773),
    h = n(198026),
    m = n(543980);
let g = {
        skuId: "1287835633485877369",
        assetId: "a_33656b7ed12cde00c1826b654cf65590",
    },
    E = {
        skuId: "1287835633515102228",
        assetId: "a_c4395b178205217ad09cae605ef11b1a",
    },
    b = {
        skuId: "1287835633615765524",
        assetId: "a_41445f736db3525135b6b9e1122f2254",
    },
    y = {
        skuId: "1287835633645125653",
        assetId: "a_a78819f4d41900aa7698a1bafaf6af41",
    },
    O = {
        skuId: "1287835633674620949",
        assetId: "a_5e8abacc7a7454d6b08b5cc84cac1d80",
    },
    v = {
        skuId: "1287835633703845888",
        assetId: "a_a8c5af1848e53cc221d149442c03828f",
    },
    I = {
        skuId: "1287835633733341224",
        assetId: "a_4f2b75e5adff09709702613ea0e2cb70",
    },
    T = {
        skuId: "1287835633762701382",
        assetId: "a_604d1f0f336d41089acc3f82f458a99e",
    },
    S = {
        gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"],
    },
    A = {
        variants: [
            {
                listingId: "1303067552619958292",
                name: "Cat Ears",
                variants: [g, E],
            },
            {
                name: "Dark Hood",
                variants: [b, y],
            },
            {
                name: "Witch Hat",
                variants: [O, v],
            },
            {
                listingId: "1303072627061166090",
                name: "Zombie Food",
                variants: [I, T],
            },
        ],
        rewardAssetIdMap: (0, i.YV)([g, E, b, y, O, v, I, T]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () =>
                    n
                        .e("19511")
                        .then(n.bind(n, 322980))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
                getGlowAnimationData: () =>
                    n
                        .e("37079")
                        .then(n.bind(n, 474))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
            },
        },
        segmentedControlAnimations: {
            trick: {
                getAnimationData: () =>
                    n
                        .e("87983")
                        .then(n.bind(n, 913493))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
            },
            treat: {
                getAnimationData: () =>
                    n
                        .e("33472")
                        .then(n.bind(n, 795420))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
            },
        },
        dismissibleContentVersion: 4,
        firstTimeNotice: {
            getImageUrl: () => d.Z,
            title: () => s.intl.string(s.t.UPFiIi),
            description: () => s.intl.string(s.t["F/5kFB"]),
            cta: () => s.intl.string(s.t.RzWDqa),
            analyticsLocation: r.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        eligiblePlanIds: [a.Xh.PREMIUM_YEAR_TIER_2, a.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => s.intl.string(s.t.ruVnPj),
            subheading: () => s.intl.string(s.t.q4BJSE),
            mobileSubheading: (e) => s.intl.formatToPlainString(s.t.eDBuFx, { rewardCount: e }),
            gradientConfig: S,
            getImageUrl: () => _.Z,
            getBannerImageUrl: () => m.Z,
            getBackgroundImageUrl: () => l.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => s.intl.string(s.t.mMgymZ),
            mobileBannerText: () => s.intl.string(s.t.dAqTcH),
            getImageUrl: () => p.Z,
            gradientConfig: () => S,
            getBackgroundImageUrl: () => f.Z,
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => c.Z,
            getStaticImageUrl: () => u.Z,
            title: () => s.intl.string(s.t.CGgAyM),
            body: () => s.intl.string(s.t["9rInzc"]),
            getBackgroundImageUrl: () => h.Z,
        },
    };
