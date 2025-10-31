n.d(t, { p: () => R });
var r = n(242433),
    i = n(100527),
    a = n(717401),
    o = n(885472),
    s = n(474936),
    l = n(981631),
    c = n(388032),
    u = n(154658),
    d = n(362290),
    f = n(873048),
    _ = n(572472),
    p = n(235583),
    h = n(306225),
    m = n(28986),
    g = n(194950),
    E = n(103865),
    b = n(29653);
let y = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID,
        assetId: "a_dec0db5e1395a9d7df152d6981443cd8",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["6Zuivx"]),
                name: c.intl.string(c.t["9PzTtM"]),
            }),
    },
    O = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID,
        assetId: "a_8636994a8d0b1c5c8353ebce125c2cef",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["2UeOlY"]),
                name: c.intl.string(c.t["9PzTtM"]),
            }),
    },
    v = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID,
        assetId: "a_843b6925894c8fa530432ad197eb8dcd",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["6Zuivx"]),
                name: c.intl.string(c.t.sBk8mT),
            }),
    },
    I = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID,
        assetId: "a_3835acaf56f5b8cdfb7be072580e618d",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["2UeOlY"]),
                name: c.intl.string(c.t.sBk8mT),
            }),
    },
    T = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID,
        assetId: "a_6f0c33fb534c1a0a21c606b50683e9a9",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["6Zuivx"]),
                name: c.intl.string(c.t.RbkXxR),
            }),
    },
    S = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID,
        assetId: "a_46d01a1f046e4f58894f5b5361ab2e61",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["2UeOlY"]),
                name: c.intl.string(c.t.RbkXxR),
            }),
    },
    A = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID,
        assetId: "a_f6fbc6e9dedd53a1b70e5573499ddd11",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["6Zuivx"]),
                name: c.intl.string(c.t["FW3Qp/"]),
            }),
    },
    C = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID,
        assetId: "a_f8fdf29cd07f09487165818605cab1dd",
        a11yLabel: () =>
            c.intl.formatToPlainString(c.t.pDrI0m, {
                category: c.intl.string(c.t["2UeOlY"]),
                name: c.intl.string(c.t["FW3Qp/"]),
            }),
    },
    N = {
        gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"],
    },
    R = {
        variants: [
            {
                name: () => c.intl.string(c.t["9PzTtM"]),
                variants: [y, O],
            },
            {
                name: () => c.intl.string(c.t.sBk8mT),
                variants: [v, I],
            },
            {
                name: () => c.intl.string(c.t.RbkXxR),
                variants: [T, S],
            },
            {
                name: () => c.intl.string(c.t["FW3Qp/"]),
                variants: [A, C],
            },
        ],
        rewardAssetIdMap: (0, a.YV)([y, O, v, I, T, S, A, C]),
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
        dismissibleContentVersion: (0, o.m)(),
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? p.Z : _.Z),
            title: () => c.intl.string(c.t.MzahXU),
            description: () => c.intl.string(c.t["F/5kFJ"]),
            cta: () => c.intl.string(c.t.RzWDqY),
            analyticsLocation: i.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: l.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        eligiblePlanIds: [s.Xh.PREMIUM_YEAR_TIER_2, s.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => c.intl.string(c.t.ruVnPr),
            subheading: () => c.intl.string(c.t.q4BJSJ),
            mobileSubheading: (e) => c.intl.formatToPlainString(c.t.eDBuF8, { rewardCount: e }),
            gradientConfig: N,
            getImageUrl: (e, t) => (t ? g.Z : m.Z),
            getBannerImageUrl: () => b.Z,
            getBackgroundImageUrl: () => u.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => c.intl.string(c.t.mMgymV),
            mobileBannerText: () => c.intl.string(c.t.dAqTcI),
            getImageUrl: () => g.Z,
            gradientConfig: () => N,
            getBackgroundImageUrl: () => h.Z,
        },
        billingSettingsMarketingBanner: {
            getImageUrl: (e) => (e ? f.Z : d.Z),
            title: () => c.intl.string(c.t.CGgAyN),
            body: () => c.intl.string(c.t["9rInzW"]),
            getBackgroundImageUrl: () => E.Z,
        },
        giftPurchaseConfirmation: {
            yearGiftText: c.t["rSS+oo"],
            monthGiftText: c.t.gI6Yvv,
            collectRewardButtonText: () => c.intl.string(c.t.kMYVwv),
            rewardCollectedText: () => c.intl.string(c.t.eZrmtq),
        },
    };
