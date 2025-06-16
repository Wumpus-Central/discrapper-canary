n.d(t, {
    D_: () => h,
    cU: () => g
});
var r = n(674746),
    i = n(242433),
    a = n(100527),
    o = n(717401),
    s = n(474936),
    l = n(981631),
    c = n(388032),
    u = n(941098),
    d = n(683951);
n(801236);
var f = n(335677),
    _ = n(518914);
let p = [
        {
            skuId: i.d.SUMMER_2025_GIFTING_REWARD_SKU_ID,
            assetId: 'a_f6d7905998db3f6f57671b4ea70fa272'
        }
    ],
    h = 3,
    m = {
        gradient: ['rgba(218, 237, 137, 1)', 'rgba(121, 199, 223, 1)', 'rgba(177, 176, 234, 1)']
    },
    g = {
        rewards: p,
        rewardAssetIdMap: (0, o.YV)(p),
        dismissibleContentVersion: h,
        eligiblePlanIds: [s.Xh.PREMIUM_YEAR_TIER_2, s.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => c.intl.string(c.t.ymgFZW),
            gradientConfig: m,
            getImageUrl: () => u.Z,
            getBackgroundImageUrl: () => d.Z,
            getCardImageUrl: () => _.Z
        },
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => n(119452),
                getGlowAnimationData: () => n(431947)
            }
        },
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? u.Z : f.Z),
            title: () => c.intl.string(c.t.PWaKU1),
            description: () => c.intl.string(c.t.EWn7kZ),
            cta: () => c.intl.string(c.t.RzWDqa),
            analyticsLocation: a.Z.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: l.ZY5.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        planSelectionBanner: {
            desktopBannerText: () => c.intl.string(c.t.Q0VMqK),
            mobileBannerText: () => c.intl.string(c.t.VBnNJS),
            getImageUrl: () => '',
            gradientConfig: () => m
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => f.Z,
            getStaticImageUrl: () => u.Z,
            title: () => c.intl.string(c.t.ydPofH),
            body: () => c.intl.string(c.t.iI74ho),
            additionalTerm: () => c.intl.string(c.t.lapGDw),
            gradientConfig: m,
            textColor: r.Z.NEUTRAL_71
        },
        giftPurchaseConfirmation: {
            yearGiftText: c.t.xFKdb2,
            monthGiftText: c.t.GnL3Gh,
            collectRewardButtonText: () => c.intl.string(c.t.kMYVws),
            rewardCollectedText: () => c.intl.string(c.t.eZrmtr)
        }
    };
