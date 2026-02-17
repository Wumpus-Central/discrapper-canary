"use strict";
n.d(t, { zH: () => f });
var i = n(575593),
    a = n(517950),
    r = n(793574),
    s = n(810498),
    o = n(652215),
    l = n(985018),
    c = n(490111),
    _ = n(910026),
    d = n(380212),
    u = n(876318);
n(642827), n(669531);
var g = n(320306),
    m = n(516738),
    b = n(604156);
let I = {
        skuId: a.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: i.R.AVATAR_DECORATION,
        name: () => l.intl.string(l.t["R4q5+y"]),
        a11yLabel: () => l.intl.string(l.t.s1HWnQ),
    },
    A = {
        skuId: a.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: i.R.NAMEPLATE,
        palette: "sky",
        name: () => l.intl.string(l.t.OzB7sI),
        a11yLabel: () => l.intl.string(l.t.WX49A3),
    },
    h = {
        skuId: a.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: i.R.AVATAR_DECORATION,
        name: () => l.intl.string(l.t.ZK9IyY),
        a11yLabel: () => l.intl.string(l.t["m/y43M"]),
    },
    E = { gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"] },
    f = {
        rewards: [I, A, h],
        rewardAssetIdMap: (0, s.t8)([I, A, h]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () =>
                    n
                        .e("51463")
                        .then(n.bind(n, 347066))
                        .then((e) => {
                            let { default: t } = e;
                            return fetch(t).then((e) => e.json());
                        }),
                getGlowAnimationData: () => Promise.resolve(null),
            },
            gradientConfig: { gradient: ["rgba(88, 101, 242, 0)", "rgba(88, 101, 242, 1)"] },
        },
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? _.A : c.A),
            title: () => l.intl.string(l.t.Eeqjcv),
            description: () => l.intl.string(l.t["Wp+i/e"]),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        reminderNagbar: {
            description: () => l.intl.string(l.t.veQg0t),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: r.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        reminderNotice: {
            getImageUrl: (e, t) => (t ? _.A : c.A),
            title: () => l.intl.string(l.t.bLOiLM),
            description: () => l.intl.string(l.t["cE/UX7"]),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
        },
        planSelection: {
            heading: () => l.intl.string(l.t.OEtqpm),
            subheading: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return l.intl.formatToPlainString(l.t["2h5M+X"], { availableCount: e });
            },
            mobileSubheading: (e) => l.intl.formatToPlainString(l.t["2h5M+X"], { availableCount: e }),
            gradientConfig: E,
            getImageUrl: (e, t) => (t ? u.A : d.A),
            getBannerImageUrl: () => b.A,
            getBackgroundImageUrl: () => m.A,
        },
        planSelectionBanner: {
            desktopBannerText: () => l.intl.string(l.t.Abiuci),
            mobileBannerText: () => l.intl.string(l.t.cMiNit),
            getImageUrl: () => u.A,
            gradientConfig: () => E,
            getBackgroundImageUrl: () => b.A,
        },
        billingSettingsMarketingBanner: {
            getImageUrl: (e) => (e ? u.A : d.A),
            title: () => l.intl.string(l.t.Eeqjcv),
            body: () => l.intl.string(l.t.IuMZS3),
            getBackgroundImageUrl: () => g.A,
            gradientConfig: { gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"] },
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
