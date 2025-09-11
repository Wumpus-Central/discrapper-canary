n.d(t, { p: () => P });
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
        skuId: "1415079278911033421",
        assetId: "a_fe4a5080455bc20030589d3b930ebe7b",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["6Zuiv7"]),
            name: s.intl.string(s.t["9PzTtL"]),
        }),
    },
    E = {
        skuId: "1415079278911033417",
        assetId: "a_ade36581b93e50a565541e1964d7eb6a",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["2UeOlZ"]),
            name: s.intl.string(s.t["9PzTtL"]),
        }),
    },
    b = {
        skuId: "1415079278936064231",
        assetId: "a_9fb28bf1ed0bed681898f57df3acec5b",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["6Zuiv7"]),
            name: s.intl.string(s.t.sBk8mZ),
        }),
    },
    y = {
        skuId: "1415079278936064234",
        assetId: "a_f43fa3efdeda7f7d50fed5f3e5c5cef5",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["2UeOlZ"]),
            name: s.intl.string(s.t.sBk8mZ),
        }),
    },
    O = {
        skuId: "1415079278923743237",
        assetId: "a_0103146312bbffdb9a58ce4da3d901d1",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["6Zuiv7"]),
            name: s.intl.string(s.t.RbkXxc),
        }),
    },
    v = {
        skuId: "1415079278911033422",
        assetId: "a_652117a3882f5ae4cc30e56d7ac013a7",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["2UeOlZ"]),
            name: s.intl.string(s.t.RbkXxc),
        }),
    },
    I = {
        skuId: "1415079278911033420",
        assetId: "a_8655de5a2c086276231144432fefb8f0",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["6Zuiv7"]),
            name: s.intl.string(s.t.FW3Qp6),
        }),
    },
    T = {
        skuId: "1415079278923743238",
        assetId: "a_91bdfba540bf5f305f906e6588704ac6",
        a11yLabel: s.intl.formatToPlainString(s.t.pDrI0t, {
            category: s.intl.string(s.t["2UeOlZ"]),
            name: s.intl.string(s.t.FW3Qp6),
        }),
    },
    S = {
        name: s.intl.string(s.t["9PzTtL"]),
        variants: [g, E],
    },
    A = {
        name: s.intl.string(s.t.sBk8mZ),
        variants: [b, y],
    },
    C = {
        name: s.intl.string(s.t.RbkXxc),
        variants: [O, v],
    },
    N = {
        name: s.intl.string(s.t.FW3Qp6),
        variants: [I, T],
    },
    R = {
        gradient: ["rgb(35, 86, 53)", "rgb(3, 15, 40)"],
    },
    P = {
        variants: [S, A, C, N],
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
            gradientConfig: R,
            getImageUrl: () => _.Z,
            getBannerImageUrl: () => m.Z,
            getBackgroundImageUrl: () => l.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => s.intl.string(s.t.mMgymZ),
            mobileBannerText: () => s.intl.string(s.t.dAqTcH),
            getImageUrl: () => p.Z,
            gradientConfig: () => R,
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
