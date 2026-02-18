i.d(t, { zH: () => A });
var n = i(575593),
    s = i(517950),
    r = i(793574),
    l = i(810498),
    a = i(652215),
    o = i(985018),
    d = i(490111),
    c = i(910026),
    u = i(380212),
    _ = i(876318);
i(642827), i(669531);
var m = i(320306),
    I = i(516738),
    f = i(604156);
let p = {
        skuId: s.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: n.R.AVATAR_DECORATION,
        name: () => o.intl.string(o.t["R4q5+y"]),
        a11yLabel: () => o.intl.string(o.t.s1HWnQ),
    },
    g = {
        skuId: s.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: n.R.NAMEPLATE,
        palette: "sky",
        name: () => o.intl.string(o.t.OzB7sI),
        a11yLabel: () => o.intl.string(o.t.WX49A3),
    },
    h = {
        skuId: s.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: n.R.AVATAR_DECORATION,
        name: () => o.intl.string(o.t.ZK9IyY),
        a11yLabel: () => o.intl.string(o.t["m/y43M"]),
    },
    S = { gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"] },
    A = {
        rewards: [p, g, h],
        rewardAssetIdMap: (0, l.t8)([p, g, h]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () =>
                    i
                        .e("51463")
                        .then(i.bind(i, 347066))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
                getGlowAnimationData: () => Promise.resolve(null),
            },
            gradientConfig: { gradient: ["rgba(88, 101, 242, 0)", "rgba(88, 101, 242, 1)"] },
        },
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? c.A : d.A),
            title: () => o.intl.string(o.t.Eeqjcv),
            description: () => o.intl.string(o.t["Wp+i/e"]),
            cta: () => o.intl.string(o.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: a.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        reminderNagbar: {
            description: () => o.intl.string(o.t.veQg0t),
            cta: () => o.intl.string(o.t.RzWDqY),
            analyticsLocation: r.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: a.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        reminderNotice: {
            getImageUrl: (e, t) => (t ? c.A : d.A),
            title: () => o.intl.string(o.t.bLOiLM),
            description: () => o.intl.string(o.t["cE/UX7"]),
            cta: () => o.intl.string(o.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: a.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        planSelection: {
            heading: () => o.intl.string(o.t.OEtqpm),
            subheading: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return o.intl.formatToPlainString(o.t["2h5M+X"], { availableCount: e });
            },
            mobileSubheading: (e) => o.intl.formatToPlainString(o.t["2h5M+X"], { availableCount: e }),
            gradientConfig: S,
            getImageUrl: (e, t) => (t ? _.A : u.A),
            getBannerImageUrl: () => f.A,
            getBackgroundImageUrl: () => I.A,
        },
        planSelectionBanner: {
            desktopBannerText: () => o.intl.string(o.t.Abiuci),
            mobileBannerText: () => o.intl.string(o.t.cMiNit),
            getImageUrl: () => _.A,
            gradientConfig: () => S,
            getBackgroundImageUrl: () => f.A,
        },
        billingSettingsMarketingBanner: {
            getImageUrl: (e) => (e ? _.A : u.A),
            title: () => o.intl.string(o.t.Eeqjcv),
            body: () => o.intl.string(o.t.IuMZS3),
            getBackgroundImageUrl: () => m.A,
            gradientConfig: { gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"] },
        },
        giftPurchaseConfirmation: {
            yearGiftText: o.t["0Z0G7m"],
            monthGiftText: o.t.qyhlUP,
            collectRewardButtonText: () => o.intl.string(o.t.kMYVwv),
            rewardCollectedText: () => o.intl.string(o.t.eZrmtq),
        },
        rewardSelection: {
            heading: () => o.intl.string(o.t["3JCuX1"]),
            primarySubtitle: () => o.intl.string(o.t.h2nMp0),
            secondarySubtitle: () => o.intl.string(o.t.y5wftM),
        },
    };
