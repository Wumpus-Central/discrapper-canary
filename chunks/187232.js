n.d(t, { p: () => D });
var r = n(242433),
    i = n(100527),
    a = n(717401),
    o = n(474936),
    s = n(981631),
    l = n(388032),
    c = n(796909),
    u = n(893410),
    d = n(878339),
    f = n(330529),
    _ = n(552365),
    p = n(492336),
    h = n(457686),
    m = n(516773),
    g = n(198026),
    E = n(543980);
let b = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID,
        assetId: "a_fe4a5080455bc20030589d3b930ebe7b",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["6Zuiv7"]),
            name: l.intl.string(l.t["9PzTtL"]),
        }),
    },
    y = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID,
        assetId: "a_ade36581b93e50a565541e1964d7eb6a",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["2UeOlZ"]),
            name: l.intl.string(l.t["9PzTtL"]),
        }),
    },
    O = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID,
        assetId: "a_9fb28bf1ed0bed681898f57df3acec5b",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["6Zuiv7"]),
            name: l.intl.string(l.t.sBk8mZ),
        }),
    },
    v = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID,
        assetId: "a_f43fa3efdeda7f7d50fed5f3e5c5cef5",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["2UeOlZ"]),
            name: l.intl.string(l.t.sBk8mZ),
        }),
    },
    I = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID,
        assetId: "a_0103146312bbffdb9a58ce4da3d901d1",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["6Zuiv7"]),
            name: l.intl.string(l.t.RbkXxc),
        }),
    },
    T = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID,
        assetId: "a_652117a3882f5ae4cc30e56d7ac013a7",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["2UeOlZ"]),
            name: l.intl.string(l.t.RbkXxc),
        }),
    },
    S = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID,
        assetId: "a_8655de5a2c086276231144432fefb8f0",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["6Zuiv7"]),
            name: l.intl.string(l.t.FW3Qp6),
        }),
    },
    A = {
        skuId: r.d.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID,
        assetId: "a_91bdfba540bf5f305f906e6588704ac6",
        a11yLabel: l.intl.formatToPlainString(l.t.pDrI0t, {
            category: l.intl.string(l.t["2UeOlZ"]),
            name: l.intl.string(l.t.FW3Qp6),
        }),
    },
    C = {
        name: l.intl.string(l.t["9PzTtL"]),
        variants: [b, y],
    },
    N = {
        name: l.intl.string(l.t.sBk8mZ),
        variants: [O, v],
    },
    R = {
        name: l.intl.string(l.t.RbkXxc),
        variants: [I, T],
    },
    P = {
        name: l.intl.string(l.t.FW3Qp6),
        variants: [S, A],
    },
    w = {
        gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"],
    },
    D = {
        variants: [C, N, R, P],
        rewardAssetIdMap: (0, a.YV)([b, y, O, v, I, T, S, A]),
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
            gradientConfig: w,
            getImageUrl: (e, t) => (t ? m.Z : h.Z),
            getBannerImageUrl: () => E.Z,
            getBackgroundImageUrl: () => c.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => l.intl.string(l.t.mMgymZ),
            mobileBannerText: () => l.intl.string(l.t.dAqTcH),
            getImageUrl: () => m.Z,
            gradientConfig: () => w,
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
