n.d(t, { p: () => N });
var r = n(242433),
    i = n(100527),
    a = n(717401),
    o = n(474936),
    s = n(981631),
    l = n(388032),
    c = n(154658),
    u = n(362290),
    d = n(873048),
    f = n(572472),
    _ = n(235583),
    p = n(306225),
    h = n(28986),
    m = n(194950),
    g = n(103865),
    E = n(29653);
let b = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID,
        assetId: "a_dec0db5e1395a9d7df152d6981443cd8",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["6Zuiv7"]),
                name: l.intl.string(l.t["9PzTtL"]),
            }),
    },
    y = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID,
        assetId: "a_8636994a8d0b1c5c8353ebce125c2cef",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["2UeOlZ"]),
                name: l.intl.string(l.t["9PzTtL"]),
            }),
    },
    O = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID,
        assetId: "a_843b6925894c8fa530432ad197eb8dcd",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["6Zuiv7"]),
                name: l.intl.string(l.t.sBk8mZ),
            }),
    },
    v = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID,
        assetId: "a_3835acaf56f5b8cdfb7be072580e618d",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["2UeOlZ"]),
                name: l.intl.string(l.t.sBk8mZ),
            }),
    },
    I = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID,
        assetId: "a_6f0c33fb534c1a0a21c606b50683e9a9",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["6Zuiv7"]),
                name: l.intl.string(l.t.RbkXxc),
            }),
    },
    T = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID,
        assetId: "a_46d01a1f046e4f58894f5b5361ab2e61",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["2UeOlZ"]),
                name: l.intl.string(l.t.RbkXxc),
            }),
    },
    S = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID,
        assetId: "a_f6fbc6e9dedd53a1b70e5573499ddd11",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["6Zuiv7"]),
                name: l.intl.string(l.t.FW3Qp6),
            }),
    },
    A = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID,
        assetId: "a_f8fdf29cd07f09487165818605cab1dd",
        a11yLabel: () =>
            l.intl.formatToPlainString(l.t.pDrI0t, {
                category: l.intl.string(l.t["2UeOlZ"]),
                name: l.intl.string(l.t.FW3Qp6),
            }),
    },
    C = {
        gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"],
    },
    N = {
        variants: [
            {
                name: () => l.intl.string(l.t["9PzTtL"]),
                variants: [b, y],
            },
            {
                name: () => l.intl.string(l.t.sBk8mZ),
                variants: [O, v],
            },
            {
                name: () => l.intl.string(l.t.RbkXxc),
                variants: [I, T],
            },
            {
                name: () => l.intl.string(l.t.FW3Qp6),
                variants: [S, A],
            },
        ],
        rewardAssetIdMap: (0, a.YV)([b, y, O, v, I, T, S, A]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () =>
                    n
                        .e("21723")
                        .then(n.bind(n, 421344))
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
        segmentedControlAnimations: {
            trick: {
                getAnimationData: () =>
                    n
                        .e("44538")
                        .then(n.bind(n, 285517))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
            },
            treat: {
                getAnimationData: () =>
                    n
                        .e("35244")
                        .then(n.bind(n, 220628))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
            },
        },
        dismissibleContentVersion: 4,
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? _.Z : f.Z),
            title: () => l.intl.string(l.t.UPFiIi),
            description: () => l.intl.string(l.t["F/5kFB"]),
            cta: () => l.intl.string(l.t.RzWDqa),
            analyticsLocation: i.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: s.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        eligiblePlanIds: [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => l.intl.string(l.t.ruVnPj),
            subheading: () => l.intl.string(l.t.q4BJSE),
            mobileSubheading: (e) => l.intl.formatToPlainString(l.t.eDBuFx, { rewardCount: e }),
            gradientConfig: C,
            getImageUrl: (e, t) => (t ? m.Z : h.Z),
            getBannerImageUrl: () => E.Z,
            getBackgroundImageUrl: () => c.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => l.intl.string(l.t.mMgymZ),
            mobileBannerText: () => l.intl.string(l.t.dAqTcH),
            getImageUrl: () => m.Z,
            gradientConfig: () => C,
            getBackgroundImageUrl: () => p.Z,
        },
        billingSettingsMarketingBanner: {
            getImageUrl: (e) => (e ? d.Z : u.Z),
            title: () => l.intl.string(l.t.CGgAyM),
            body: () => l.intl.string(l.t["9rInzc"]),
            getBackgroundImageUrl: () => g.Z,
        },
        giftPurchaseConfirmation: {
            yearGiftText: l.t["rSS+oq"],
            monthGiftText: l.t.gI6Yvr,
            collectRewardButtonText: () => l.intl.string(l.t.kMYVws),
            rewardCollectedText: () => l.intl.string(l.t.eZrmtr),
        },
    };
