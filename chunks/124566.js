n.d(t, { D9: () => O });
var r = n(979554),
    i = n(242433),
    a = n(100527),
    o = n(717401),
    s = n(981631),
    l = n(388032),
    c = n(12901),
    u = n(868592),
    d = n(815301),
    f = n(233634);
n(337357), n(349927);
var _ = n(191333),
    p = n(81932),
    h = n(770476);
let m = {
        skuId: i.d.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: r.Z.AVATAR_DECORATION,
        name: () => l.intl.string(l.t["R4q5+y"]),
        a11yLabel: () => l.intl.string(l.t.s1HWnQ),
    },
    g = {
        skuId: i.d.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: r.Z.NAMEPLATE,
        palette: "sky",
        name: () => l.intl.string(l.t.OzB7sI),
        a11yLabel: () => l.intl.string(l.t.WX49A3),
    },
    E = {
        skuId: i.d.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: r.Z.AVATAR_DECORATION,
        name: () => l.intl.string(l.t.ZK9IyY),
        a11yLabel: () => l.intl.string(l.t["m/y43M"]),
    },
    b = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"],
    },
    y = {
        gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"],
    },
    O = {
        rewards: [m, g, E],
        rewardAssetIdMap: (0, o.YV)([m, g, E]),
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
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? u.Z : c.Z),
            title: () => l.intl.string(l.t.Eeqjcv),
            description: () => l.intl.string(l.t["Wp+i/e"]),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: a.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: s.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        reminderNagbar: {
            description: () => l.intl.string(l.t.veQg0t),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: a.Z.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: s.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        reminderNotice: {
            getImageUrl: (e, t) => (t ? u.Z : c.Z),
            title: () => l.intl.string(l.t.bLOiLM),
            description: () => l.intl.string(l.t["cE/UX7"]),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: a.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: s.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        planSelection: {
            heading: () => l.intl.string(l.t.OEtqpm),
            subheading: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return l.intl.formatToPlainString(l.t["2h5M+X"], { availableCount: e });
            },
            mobileSubheading: (e) => l.intl.formatToPlainString(l.t["2h5M+X"], { availableCount: e }),
            gradientConfig: b,
            getImageUrl: (e, t) => (t ? f.Z : d.Z),
            getBannerImageUrl: () => h.Z,
            getBackgroundImageUrl: () => p.Z,
        },
        planSelectionBanner: {
            desktopBannerText: () => l.intl.string(l.t.Abiuci),
            mobileBannerText: () => l.intl.string(l.t.cMiNit),
            getImageUrl: () => f.Z,
            gradientConfig: () => b,
            getBackgroundImageUrl: () => h.Z,
        },
        billingSettingsMarketingBanner: {
            getImageUrl: (e) => (e ? f.Z : d.Z),
            title: () => l.intl.string(l.t.Eeqjcv),
            body: () => l.intl.string(l.t.IuMZS3),
            getBackgroundImageUrl: () => _.Z,
            gradientConfig: y,
        },
        giftPurchaseConfirmation: {
            yearGiftText: l.t["0Z0G7m"],
            monthGiftText: l.t.qyhlUP,
            collectRewardButtonText: () => l.intl.string(l.t.kMYVwv),
            rewardCollectedText: () => l.intl.string(l.t.eZrmtq),
        },
        rewardSelection: {
            heading: () => l.intl.string(l.t["3JCuX1"]),
            primarySubtitle: () => l.intl.string(l.t.h2nMp0),
            secondarySubtitle: () => l.intl.string(l.t.y5wftM),
        },
    };
