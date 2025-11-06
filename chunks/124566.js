n.d(t, { D: () => O });
var r = n(979554),
    i = n(242433),
    a = n(100527),
    o = n(717401),
    s = n(885472),
    l = n(981631),
    c = n(388032),
    u = n(440071),
    d = n(414525),
    f = n(815301),
    _ = n(233634),
    p = n(191333),
    h = n(81932),
    m = n(770476);
let g = {
        skuId: i.d.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: r.Z.AVATAR_DECORATION,
        name: () => c.intl.string(c.t["R4q5+y"]),
        a11yLabel: () => c.intl.string(c.t.s1HWnQ),
    },
    E = {
        skuId: i.d.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: r.Z.NAMEPLATE,
        name: () => c.intl.string(c.t.OzB7sI),
        a11yLabel: () => c.intl.string(c.t.WX49A3),
    },
    b = {
        skuId: i.d.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: r.Z.AVATAR_DECORATION,
        name: () => c.intl.string(c.t.ZK9IyY),
        a11yLabel: () => c.intl.string(c.t["m/y43M"]),
    },
    y = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"],
    },
    O = {
        rewards: [g, E, b],
        rewardAssetIdMap: (0, o.YV)([g, E, b]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () =>
                    n
                        .e("31675")
                        .then(n.bind(n, 177648))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
                getGlowAnimationData: () => Promise.resolve(null),
            },
        },
        dismissibleContentVersion: (0, s.m)(),
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? d.Z : u.Z),
            title: () => c.intl.string(c.t.Eeqjcv),
            description: () => c.intl.string(c.t["Wp+i/e"]),
            cta: () => c.intl.string(c.t.RzWDqY),
            analyticsLocation: a.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: l.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        planSelection: {
            heading: () => c.intl.string(c.t.OEtqpm),
            subheading: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return c.intl.formatToPlainString(c.t["2h5M+X"], { availableCount: e });
            },
            mobileSubheading: (e) => c.intl.formatToPlainString(c.t["2h5M+X"], { availableCount: e }),
            gradientConfig: y,
            getImageUrl: (e, t) => (t ? _.Z : f.Z),
            getBannerImageUrl: () => m.Z,
            getBackgroundImageUrl: () => h.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => c.intl.string(c.t.Abiuci),
            mobileBannerText: () => c.intl.string(c.t.cMiNit),
            getImageUrl: () => _.Z,
            gradientConfig: () => y,
            getBackgroundImageUrl: () => m.Z,
        },
        billingSettingsMarketingBanner: {
            getImageUrl: (e) => (e ? _.Z : f.Z),
            title: () => c.intl.string(c.t.Eeqjcv),
            body: () => c.intl.string(c.t.IuMZS3),
            getBackgroundImageUrl: () => p.Z,
        },
        giftPurchaseConfirmation: {
            yearGiftText: c.t["0Z0G7m"],
            monthGiftText: c.t.qyhlUP,
            collectRewardButtonText: () => c.intl.string(c.t["3d0Nmb"]),
            rewardCollectedText: () => c.intl.string(c.t.eZrmtq),
        },
    };
