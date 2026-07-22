l.r(t), l.d(t, { slayerStorefrontPlaygroundConfig: () => ea, storefrontCollection: () => el });
var a = l(34188),
    o = l(627968),
    n = l(64700),
    i = l(331322),
    r = l(834730),
    s = l(821609),
    d = l(231723),
    u = l(971690),
    c = l(989349),
    p = l.n(c),
    m = l(122817),
    b = l(17928),
    g = l(228366),
    f = l(288106),
    h = l(95701),
    y = l(280450),
    S = l(652215),
    E = l(818348);
let v = "000000000000000100",
    x = "000000000000000200",
    I = "000000000000000300",
    C = "000000000000000400";
function A(e, t, l) {
    let {
            name: a,
            price: o,
            salePrice: n,
            salePercentage: i,
            exclusive: r,
            orbsReward: s,
            daysUntilExpiry: d,
            isEligible: u,
        } = t,
        c = `playground-pricing-result-${e}`,
        b = `playground-reward-result-${e}`,
        h = null != d ? p()().add(d, "days").toISOString() : void 0,
        y = {
            id: e,
            type: S.Puh.DURABLE_PRIMARY,
            application_id: x,
            product_line: S.EZt.SOCIAL_LAYER_GAME_ITEM,
            name: a,
            summary: "",
            description: "A playground preview item for testing storefront component states.",
            features: [],
            genres: [],
            dependent_sku_id: null,
            manifests: [],
            available_regions: [],
            access_type: null,
            legal_notice: "",
            price: { amount: o, currency: E.Yr.USD, sale_amount: n ?? void 0, sale_percentage: i ?? void 0 },
            price_tier: 0,
            premium: !1,
            show_age_gate: !1,
            restricted: !1,
            slug: "playground-item",
            exclusive: r,
            locales: ["en-US"],
            flags: m.d.AVAILABLE,
            deleted: !1,
            bundled_sku_ids: [],
            orbs_reward: s ?? 0,
            eligible_offers: [],
            tenant_metadata: { social_layer: { carousel_items: [], expires_at: h } },
        };
    if ((g.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: y }), null != n && null != i)) {
        let t = {
            skuPriceMap: { [e]: { pricingResultId: c, rewardResultIds: [b] } },
            pricingResultIdMap: {
                [c]: {
                    [f.QK.SELF_PURCHASE]: {
                        userPrice: [
                            { currency: E.Yr.USD, amount: n },
                            { currency: E.Yr.DISCORD_ORB, amount: n },
                        ],
                        prices: {
                            [S.FBC.BASE]: {
                                [f.v8.NORMAL]: [
                                    { currency: E.Yr.USD, amount: o },
                                    { currency: E.Yr.DISCORD_ORB, amount: o },
                                ],
                                [f.v8.DISCOUNTED]: [{ currency: E.Yr.USD, amount: n }],
                            },
                        },
                    },
                    [f.QK.GIFT]: {
                        userPrice: [{ currency: E.Yr.USD, amount: n }],
                        prices: {
                            [S.FBC.BASE]: {
                                [f.v8.NORMAL]: [{ currency: E.Yr.USD, amount: o }],
                                [f.v8.DISCOUNTED]: [{ currency: E.Yr.USD, amount: n }],
                            },
                        },
                    },
                },
            },
            rewardResultIdMap: {
                [b]: {
                    [f.QK.SELF_PURCHASE]: { type: f.Ns.DISCOUNT, amount: Number(i) },
                    [f.QK.GIFT]: { type: f.Ns.DISCOUNT, amount: Number(i) },
                },
            },
        };
        g.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: { type: "skus", skuIds: [e] }, data: t });
    } else
        g.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: [e] },
            data: {
                skuPriceMap: { [e]: { pricingResultId: c, rewardResultIds: [] } },
                pricingResultIdMap: {
                    [c]: {
                        [f.QK.SELF_PURCHASE]: {
                            userPrice: [
                                { currency: E.Yr.USD, amount: o },
                                { currency: E.Yr.DISCORD_ORB, amount: o },
                            ],
                            prices: {
                                [S.FBC.BASE]: {
                                    [f.v8.NORMAL]: [
                                        { currency: E.Yr.USD, amount: o },
                                        { currency: E.Yr.DISCORD_ORB, amount: o },
                                    ],
                                    [f.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                        [f.QK.GIFT]: {
                            userPrice: [{ currency: E.Yr.USD, amount: o }],
                            prices: {
                                [S.FBC.BASE]: {
                                    [f.v8.NORMAL]: [{ currency: E.Yr.USD, amount: o }],
                                    [f.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                    },
                },
                rewardResultIdMap: {},
            },
        });
    g.h.dispatch({
        type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
        interactionId: "playground-interaction",
        applicationId: x,
        skuId: e,
        recipientId: l,
        eligible: u,
    });
}
function _(e) {
    let t = (0, b.bG)([y.default], () => y.default.getId()),
        {
            name: l,
            price: a,
            salePrice: o,
            salePercentage: i,
            exclusive: r,
            orbsReward: s,
            daysUntilExpiry: d,
            isEligible: u,
        } = e;
    n.useEffect(() => {
        A(v, e, t);
    }, [l, a, o, i, r, s, d, u, t]);
}
let T = [
        {
            id: "000000000000000101",
            params: {
                name: "Legendary Dragon Armor",
                price: 1999,
                salePrice: null,
                salePercentage: null,
                exclusive: !0,
                orbsReward: 15e3,
                daysUntilExpiry: null,
                isEligible: !0,
            },
        },
        {
            id: "000000000000000102",
            params: {
                name: "Shadow Blade Skin",
                price: 999,
                salePrice: 749,
                salePercentage: "25",
                exclusive: !1,
                orbsReward: 15e3,
                daysUntilExpiry: null,
                isEligible: !0,
            },
        },
        {
            id: "000000000000000103",
            params: {
                name: "Galactic Wings",
                price: 1499,
                salePrice: null,
                salePercentage: null,
                exclusive: !1,
                orbsReward: 15e3,
                daysUntilExpiry: 2,
                isEligible: !0,
            },
        },
        {
            id: "000000000000000104",
            params: {
                name: "Phoenix Emote Bundle",
                price: 499,
                salePrice: null,
                salePercentage: null,
                exclusive: !1,
                orbsReward: 15e3,
                daysUntilExpiry: null,
                isEligible: !0,
            },
        },
    ],
    O = (0, h.createChannelRecord)({
        id: "000000000000000500",
        type: S.rbe.GUILD_TEXT,
        guild_id: I,
        name: "playground-channel",
    });
function R() {
    n.useEffect(() => {
        let e = {
            id: x,
            name: "Playground Game",
            description: "A playground preview application for testing storefront component states.",
            is_monetized: !0,
            is_verified: !0,
            is_discoverable: !0,
            flags_new: S.gfo.SOCIAL_LAYER_INTEGRATION.toString(),
        };
        g.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e });
    }, []);
}
function D() {
    n.useEffect(() => {
        g.h.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
            config: {
                promotionalSkuIds: [],
                promotionEndDatetime: null,
                storefronts: [
                    {
                        guildId: I,
                        applicationId: x,
                        gameId: C,
                        collectiblesShopNavigationEnabled: !1,
                        excludedPlatforms: [],
                        disableMobileAccountLinking: !1,
                        allowOrbsSpending: !1,
                        promotionEndDatetime: null,
                    },
                ],
                announcementModalConfig: null,
            },
        }),
            g.h.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                guildOrApplicationId: { type: "guild", guildId: I },
                storefront: {
                    id: x,
                    publishedAt: null,
                    applicationId: x,
                    title: "Playground Game",
                    logoAssetId: null,
                    lightThemeLogoAssetId: null,
                    pages: [{ title: "Shop", skuIds: [v], sections: [], leaderboard: null }],
                    assets: {},
                    promotions: {},
                },
            });
    }, []);
}
let P = "/assets/863cb535889630a2.svg";
var w = l(50777),
    V = l(467884);
let L = {
    name: "Shop Card",
    id: "storefront-card",
    docs: 'Preview the SocialLayerStorefrontCard in various states. The card uses a fallback icon since no real asset images are loaded. The "Embedded" variant renders the full in-chat product details embed.',
    component: function (e) {
        let {
                variant: t,
                name: l,
                price: a,
                hasDiscount: i,
                discountPercent: r,
                isExclusive: s,
                hasOrbsReward: d,
                orbsRewardAmount: u,
                hasExpiry: c,
                daysUntilExpiry: p,
                isEligible: m,
            } = e,
            b = i ? String(r) : null,
            g = i ? Math.round(a * (1 - r / 100)) : null;
        _({
            name: l,
            price: a,
            salePrice: g,
            salePercentage: b,
            exclusive: s,
            orbsReward: d ? u : null,
            daysUntilExpiry: c ? p : null,
            isEligible: m,
        }),
            R();
        let f = n.useCallback((e) => {
            e.preventDefault();
        }, []);
        return t === V.s.EMBEDDED
            ? (0, o.jsx)("div", {
                  style: { padding: 16 },
                  children: (0, o.jsx)(w.A, { applicationId: x, guildId: I, skuId: v, channel: O }),
              })
            : (0, o.jsx)("div", {
                  style: { maxWidth: t === V.s.SMALL ? 220 : 300, padding: 16 },
                  children: (0, o.jsx)(V.A, { skuId: v, variant: t, onClick: f }),
              });
    },
    controls: {
        variant: {
            label: "Card Variant",
            type: "select",
            defaultValue: V.s.SMALL,
            options: [
                { label: "Small", value: V.s.SMALL },
                { label: "Medium", value: V.s.MEDIUM },
                { label: "Embedded", value: V.s.EMBEDDED },
            ],
        },
        name: { label: "Product Name", type: "text", defaultValue: "Legendary Dragon Armor" },
        price: { label: "Price (cents)", type: "number", defaultValue: 999, minValue: 0 },
        hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !1 },
        discountPercent: { label: "Discount %", type: "slider", defaultValue: 25, minValue: 1, maxValue: 90 },
        isExclusive: { label: "Exclusive Badge", type: "boolean", defaultValue: !1 },
        hasOrbsReward: { label: "Has Orbs Reward", type: "boolean", defaultValue: !1 },
        orbsRewardAmount: { label: "Orbs Reward Amount", type: "number", defaultValue: 50, minValue: 1 },
        hasExpiry: { label: "Has Expiry Badge", type: "boolean", defaultValue: !1 },
        daysUntilExpiry: { label: "Days Until Expiry", type: "slider", defaultValue: 2, minValue: 1, maxValue: 3 },
        isEligible: { label: "Purchase Eligible", type: "boolean", defaultValue: !0 },
    },
};
var N = l(439325);
l(323874), l(14289), l(35956);
var U = l(366523);
let k = new URL("https://cdn.discordapp.com/embed/avatars/0.png"),
    M = new URL("https://cdn.discordapp.com/embed/avatars/1.png");
var B = l(263911),
    F = l(403581),
    G = l(873297),
    j = l(758836),
    Y = l(375708);
function H() {}
let K = {
    storefront: "linear-gradient(90deg, rgba(88, 101, 242, 0.4) 0%, rgba(157, 60, 178, 0.4) 100%)",
    nitro: "linear-gradient(90deg, rgba(179, 38, 156, 0.4) 0%, rgba(20, 20, 203, 0.4) 100%)",
    none: void 0,
};
var Q = l(971146);
let z = "playground-nitro-promotion";
var W = l(849134);
function $() {}
let q = {
    name: "Storefront Promo Popover",
    id: "social-layer-storefront-popover",
    docs: "The guild-sidebar storefront promo popover. Switch the graphic between the video slot (a VideoPopover, backed by `video_asset_fully_qualified_url`) and the static image slot (the standard Popover graphic) to compare.",
    component: function (e) {
        let { graphicKind: t, videoUrl: l, imageUrl: a, title: i, body: r, actionLabel: s } = e,
            d = n.useRef(null);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)("div", { ref: d }),
                (0, o.jsx)(W.A, {
                    targetElementRef: d,
                    onRequestClose: $,
                    onActionClick: $,
                    position: "bottom",
                    align: "center",
                    graphicSource: "video" === t ? { type: "video", src: l } : { type: "asset", src: a },
                    title: i,
                    body: r,
                    actionLabel: s,
                }),
            ],
        });
    },
    controls: {
        graphicKind: {
            label: "Graphic",
            type: "select",
            defaultValue: "video",
            options: [
                { label: "Video slot", value: "video" },
                { label: "Image slot", value: "image" },
            ],
        },
        videoUrl: { label: "Video URL", type: "text", defaultValue: l(371822).A },
        imageUrl: {
            label: "Image URL",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/app-assets/1346069614634864772/store/1461676971728572478.webp?size=240",
        },
        title: { label: "Title", type: "text", defaultValue: "Orbs are back!" },
        body: {
            label: "Body",
            type: "text",
            defaultValue: "Spend your Orbs on exclusive in-game items in the Test Shop.",
        },
        actionLabel: { label: "Action Label", type: "text", defaultValue: "Check it out" },
    },
};
var X = l(760716),
    Z = l(962299);
let J = "playground-promotion";
var ee = l(454491);
function et() {}
let el = {
        id: "slayer-storefront",
        name: "Slayer Storefront",
        groups: [
            { title: "Shop Card", stories: [L] },
            {
                title: "Modals",
                stories: [
                    {
                        name: "PDP Modal",
                        id: "pdp-modal",
                        docs: "Preview the Product Details Page modal. Opens the real RedesignedProductDetailsModal with mock store data. Media carousel will be empty since no real assets are loaded.",
                        component: function (e) {
                            let {
                                    name: t,
                                    price: l,
                                    hasDiscount: a,
                                    discountPercent: u,
                                    isExclusive: c,
                                    hasOrbsReward: p,
                                    orbsRewardAmount: m,
                                    hasExpiry: b,
                                    daysUntilExpiry: g,
                                    isEligible: f,
                                } = e,
                                h = a ? String(u) : null,
                                y = a ? Math.round(l * (1 - u / 100)) : null,
                                [S, E] = n.useState(!1),
                                I = n.useRef(null);
                            return (_({
                                name: t,
                                price: l,
                                salePrice: y,
                                salePercentage: h,
                                exclusive: c,
                                orbsReward: p ? m : null,
                                daysUntilExpiry: b ? g : null,
                                isEligible: f,
                            }),
                            D(),
                            S)
                                ? (0, o.jsx)(N.default, {
                                      transitionState: d.ip.ENTERED,
                                      returnRef: I,
                                      skuId: v,
                                      applicationId: x,
                                      isStorefront: !0,
                                      onClose: () => Promise.resolve(E(!1)),
                                  })
                                : (0, o.jsxs)(i.B, {
                                      gap: 12,
                                      style: { padding: 16 },
                                      children: [
                                          (0, o.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children:
                                                  "Opens the redesigned PDP modal with the configured mock data. Close with the X button or Escape.",
                                          }),
                                          (0, o.jsx)("div", {
                                              children: (0, o.jsx)(s.$, {
                                                  variant: "primary",
                                                  onClick: () => E(!0),
                                                  text: "Open PDP Modal",
                                              }),
                                          }),
                                      ],
                                  });
                        },
                        controls: {
                            name: { label: "Product Name", type: "text", defaultValue: "Legendary Dragon Armor" },
                            price: { label: "Price (cents)", type: "number", defaultValue: 999, minValue: 0 },
                            hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !1 },
                            discountPercent: {
                                label: "Discount %",
                                type: "slider",
                                defaultValue: 25,
                                minValue: 1,
                                maxValue: 90,
                            },
                            isExclusive: { label: "Exclusive Badge", type: "boolean", defaultValue: !1 },
                            hasOrbsReward: { label: "Has Orbs Reward", type: "boolean", defaultValue: !1 },
                            orbsRewardAmount: {
                                label: "Orbs Reward Amount",
                                type: "number",
                                defaultValue: 50,
                                minValue: 1,
                            },
                            hasExpiry: { label: "Has Expiry Badge", type: "boolean", defaultValue: !1 },
                            daysUntilExpiry: {
                                label: "Days Until Expiry",
                                type: "slider",
                                defaultValue: 2,
                                minValue: 1,
                                maxValue: 3,
                            },
                            isEligible: { label: "Purchase Eligible", type: "boolean", defaultValue: !0 },
                        },
                    },
                    {
                        name: "Announcement Modal",
                        id: "storefront-announcement-modal",
                        docs: "Preview the SocialLayerStorefrontAnnouncementModalBase. Images are blank in the playground since no real CDN assets are loaded. Use the controls to adjust copy.",
                        component: function (e) {
                            let {
                                title1: t,
                                title2: l,
                                subtitle: a,
                                feature1Title: c,
                                feature1Subtitle: p,
                                feature2Title: m,
                                feature2Subtitle: b,
                                buttonText: g,
                            } = e;
                            D();
                            let [f, h] = n.useState(!1),
                                y = n.useRef(null),
                                S = [t, l].filter((e) => "" !== e);
                            return f
                                ? (0, o.jsx)(u.A, {
                                      version: 0,
                                      transitionState: d.ip.ENTERED,
                                      returnRef: y,
                                      applicationId: x,
                                      logo: "https://cdn.discordapp.com/app-assets/1346069614634864772/store/1461676971728572478.webp?size=128",
                                      backgroundImage:
                                          "https://cdn.discordapp.com/assets/content/1d7af7dacdba453b6fa4a773c5c3ff829f2eff26bde9f036ef61cb3c2f984ba9.png",
                                      titles: S,
                                      subtitle: a,
                                      features: [
                                          { assetUrl: P, title: c, subtitle: p },
                                          { assetUrl: P, title: m, subtitle: b },
                                      ],
                                      buttonText: g,
                                      onClose: () => Promise.resolve(h(!1)),
                                  })
                                : (0, o.jsxs)(i.B, {
                                      gap: 12,
                                      style: { padding: 16 },
                                      children: [
                                          (0, o.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children:
                                                  "Opens the announcement modal with the configured mock data. Close with the X button or Escape.",
                                          }),
                                          (0, o.jsx)("div", {
                                              children: (0, o.jsx)(s.$, {
                                                  variant: "primary",
                                                  text: "Open Announcement Modal",
                                                  onClick: () => h(!0),
                                              }),
                                          }),
                                      ],
                                  });
                        },
                        controls: {
                            title1: { label: "Title Line 1", type: "text", defaultValue: "Shop Now in" },
                            title2: { label: "Title Line 2", type: "text", defaultValue: "Bloons TD6" },
                            subtitle: {
                                label: "Subtitle",
                                type: "text",
                                defaultValue: "Exclusive items available for Discord members",
                            },
                            feature1Title: { label: "Feature 1 Title", type: "text", defaultValue: "Exclusive Items" },
                            feature1Subtitle: {
                                label: "Feature 1 Subtitle",
                                type: "text",
                                defaultValue: "Members-only cosmetics and gear",
                            },
                            feature2Title: { label: "Feature 2 Title", type: "text", defaultValue: "Earn Rewards" },
                            feature2Subtitle: {
                                label: "Feature 2 Subtitle",
                                type: "text",
                                defaultValue: "Get Orbs with every purchase",
                            },
                            buttonText: { label: "Button Text", type: "text", defaultValue: "Browse Shop" },
                        },
                    },
                ],
            },
            {
                title: "Components",
                stories: [
                    {
                        name: "ExclusiveBadge",
                        id: "exclusive-badge",
                        component: function () {
                            return (0, o.jsxs)(i.B, {
                                gap: 16,
                                children: [
                                    (0, o.jsx)(r.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The exclusive badge shown on storefront cards and the PDP modal for exclusive items.",
                                    }),
                                    (0, o.jsx)(B.I, {}),
                                ],
                            });
                        },
                    },
                    {
                        name: "InGameItemTag",
                        id: "in-game-item-tag",
                        component: function (e) {
                            let { textColor: t } = e;
                            return (0, o.jsxs)(i.B, {
                                gap: 16,
                                children: [
                                    (0, o.jsx)(r.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The in-game item indicator tag shown on storefront cards and the PDP modal.",
                                    }),
                                    (0, o.jsx)(Q.V, { textColor: t }),
                                ],
                            });
                        },
                        controls: {
                            textColor: {
                                label: "Text Color",
                                type: "select",
                                defaultValue: "text-muted",
                                options: [
                                    { label: "Muted", value: "text-muted" },
                                    { label: "Always White", value: "text-overlay-light" },
                                ],
                            },
                        },
                    },
                    {
                        name: "CardImage",
                        id: "card-image",
                        docs: "The card image component with gradient background extraction. Uses placeholder avatar images for demo.",
                        component: function (e) {
                            let { shape: t, useBackgroundImage: l } = e;
                            return (0, o.jsx)("div", {
                                style: { width: 220, height: 220 },
                                children: (0, o.jsx)(U.A, {
                                    cardImage: k,
                                    cardBackgroundImage: l ? M : null,
                                    altText: "Playground preview",
                                    shape: t,
                                }),
                            });
                        },
                        controls: {
                            shape: {
                                label: "Shape",
                                type: "select",
                                defaultValue: "custom",
                                options: [
                                    { label: "Custom", value: "custom" },
                                    { label: "Square", value: "square" },
                                ],
                            },
                            useBackgroundImage: { label: "Use Background Image", type: "boolean", defaultValue: !1 },
                        },
                    },
                    {
                        name: "Game Promotion Banner",
                        id: "game-promotion-banner",
                        docs: 'The social-layer storefront promotional banner. Switch the CTA preset to preview the storefront ("Shop All") vs. the Nitro reuse (the canonical "Get Nitro" subscribe button), and toggle the optional time-left badge and logo.',
                        component: function (e) {
                            let t,
                                l,
                                {
                                    headerText: a,
                                    ctaPreset: i,
                                    showLogo: r,
                                    showTimeLeft: d,
                                    timeLeftText: u,
                                    showOrbsOnly: c,
                                    cardCount: p,
                                    gradientPreset: m,
                                } = e,
                                f =
                                    ((t = (0, b.bG)([y.default], () => y.default.getId())),
                                    (l = n.useMemo(
                                        () =>
                                            T.slice(0, p).map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            }),
                                        [p],
                                    )),
                                    n.useEffect(() => {
                                        for (let { id: e, params: l } of T.slice(0, p)) A(e, l, t);
                                        g.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                            config: {
                                                promotionalSkuIds: l,
                                                promotionEndDatetime: null,
                                                storefronts: [
                                                    {
                                                        guildId: I,
                                                        applicationId: x,
                                                        gameId: C,
                                                        collectiblesShopNavigationEnabled: !1,
                                                        excludedPlatforms: [],
                                                        disableMobileAccountLinking: !1,
                                                        allowOrbsSpending: c ?? !1,
                                                        promotionEndDatetime: new Date("2030-06-30T00:00:00Z"),
                                                    },
                                                ],
                                                announcementModalConfig: null,
                                            },
                                        }),
                                            g.h.dispatch({
                                                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                                guildOrApplicationId: { type: "guild", guildId: I },
                                                storefront: {
                                                    id: x,
                                                    publishedAt: null,
                                                    applicationId: x,
                                                    title: "Playground Game",
                                                    logoAssetId: null,
                                                    lightThemeLogoAssetId: null,
                                                    pages: [
                                                        { title: "Shop", skuIds: l, sections: [], leaderboard: null },
                                                    ],
                                                    assets: {},
                                                    promotions: {},
                                                },
                                            });
                                    }, [p, t, l, c]),
                                    l),
                                h = n.useMemo(
                                    () =>
                                        "nitro" === i
                                            ? {
                                                  kind: "custom",
                                                  node: (0, o.jsx)(s.$, {
                                                      variant: "expressive",
                                                      size: "sm",
                                                      icon: F.t,
                                                      text: Y.intl.string(Y.t.pj0XBN),
                                                      onClick: H,
                                                  }),
                                              }
                                            : { kind: "button", text: "Shop All", onClick: H },
                                    [i],
                                );
                            return (0, o.jsx)(G.A, {
                                onDismiss: H,
                                skuIds: f,
                                tab: j.G2.GAME_SHOPS,
                                applicationId: x,
                                headerText: a,
                                logoUrl: r
                                    ? "https://cdn.discordapp.com/app-assets/1346069614634864772/store/1461676971728572478.webp?size=128"
                                    : void 0,
                                cta: h,
                                timeLeftText: d && null != u && "" !== u ? u : void 0,
                                analyticsSection: "playground",
                                analyticsTileType: "PLAYGROUND_BANNER",
                                analyticsImpressionType: "playground_banner",
                                backgroundGradient: K[m],
                            });
                        },
                        controls: {
                            headerText: {
                                label: "Header Text",
                                type: "text",
                                defaultValue: "Get Orbs on every in-game item purchase",
                            },
                            ctaPreset: {
                                label: "CTA",
                                type: "select",
                                defaultValue: "storefront",
                                options: [
                                    { label: "Storefront \u2014 Shop All", value: "storefront" },
                                    { label: "Nitro \u2014 Get Nitro", value: "nitro" },
                                ],
                            },
                            showLogo: { label: "Show Logo", type: "boolean", defaultValue: !0 },
                            showTimeLeft: { label: "Show Time Left", type: "boolean", defaultValue: !0 },
                            timeLeftText: { label: "Time Left Text", type: "text", defaultValue: "33d left" },
                            showOrbsOnly: { label: "Show Orbs Only", type: "boolean", defaultValue: !1 },
                            cardCount: {
                                label: "Card Count",
                                type: "slider",
                                defaultValue: 4,
                                minValue: 1,
                                maxValue: 4,
                            },
                            gradientPreset: {
                                label: "Background Gradient",
                                type: "select",
                                defaultValue: "storefront",
                                options: [
                                    { label: "Storefront", value: "storefront" },
                                    { label: "Nitro", value: "nitro" },
                                    { label: "None", value: "none" },
                                ],
                            },
                        },
                    },
                    {
                        name: "Storefront Promotion Banner",
                        id: "slayer-storefront-promotion-banner",
                        docs: 'The promotion banner pinned to the top of the storefront page. Switch the flavor to Nitro to preview the Nitro gradient, Nitro icon, and "Get Nitro" CTA. The CTA only shows to non-Nitro viewers; toggle "Nitro Eligible" to preview the subscribed state (branded banner with countdown, no CTA).',
                        component: function (e) {
                            let { flavor: t, headerText: l, isNitroEligible: a, daysUntilEnd: i } = e;
                            R();
                            let r = (0, X.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
                                s = (0, X.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront);
                            return (
                                n.useEffect(() => (r(!0), s(a), () => r(!1)), [r, s, a]),
                                n.useEffect(() => {
                                    g.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                        config: {
                                            promotionalSkuIds: [],
                                            promotionEndDatetime: null,
                                            storefronts: [
                                                {
                                                    guildId: I,
                                                    applicationId: x,
                                                    gameId: C,
                                                    collectiblesShopNavigationEnabled: !1,
                                                    excludedPlatforms: [],
                                                    disableMobileAccountLinking: !1,
                                                    allowOrbsSpending: !1,
                                                    promotionEndDatetime: null,
                                                },
                                            ],
                                            announcementModalConfig: null,
                                        },
                                    }),
                                        g.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                            guildOrApplicationId: { type: "guild", guildId: I },
                                            storefront: {
                                                id: x,
                                                publishedAt: null,
                                                applicationId: x,
                                                title: "Playground Game",
                                                logoAssetId: null,
                                                lightThemeLogoAssetId: null,
                                                pages: [{ title: "Shop", skuIds: [], sections: [], leaderboard: null }],
                                                assets: {},
                                                promotions: {
                                                    [J]: {
                                                        id: J,
                                                        endsAt: i > 0 ? p()().add(i, "days").toISOString() : null,
                                                        flavor: t,
                                                        pdp: { label: null, tooltip: null, icon: "ORBS" },
                                                        storefront: { headerText: l },
                                                        checkout: null,
                                                        vcStream: null,
                                                    },
                                                },
                                            },
                                        });
                                }, [t, l, i]),
                                (0, o.jsx)(Z.M, { applicationId: x, analyticsLocations: [] })
                            );
                        },
                        controls: {
                            flavor: {
                                label: "Flavor",
                                type: "select",
                                defaultValue: "nitro",
                                options: [
                                    { label: "Default", value: "default" },
                                    { label: "Nitro", value: "nitro" },
                                ],
                            },
                            headerText: {
                                label: "Header Text",
                                type: "text",
                                defaultValue:
                                    "**Nitro Exclusive:** Get your first official in-game item free. Ends Aug 20.",
                            },
                            isNitroEligible: { label: "Nitro Eligible", type: "boolean", defaultValue: !1 },
                            daysUntilEnd: {
                                label: "Days Until End",
                                type: "slider",
                                defaultValue: 0,
                                minValue: 0,
                                maxValue: 60,
                            },
                        },
                    },
                    {
                        name: "PDP Promotion Banner",
                        id: "slayer-storefront-pdp-promotion-banner",
                        docs: 'The promotion notice shown on the storefront PDP. Set flavor to Nitro to preview the nitro-pink branding. For the Nitro flavor, toggle "Nitro Eligible": subscribers see the countdown, everyone else sees the tappable upsell chevron.',
                        component: function (e) {
                            let { flavor: t, text: l, isNitroEligible: a, daysUntilEnd: i } = e,
                                r = (0, X.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
                                s = (0, X.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront);
                            n.useEffect(() => (r(!0), s(a), () => r(!1)), [r, s, a]);
                            let d = {
                                Icon: void 0,
                                text: l,
                                tooltip: null,
                                endsAt: i > 0 ? p()().add(i, "days").toDate() : null,
                                flavor: t,
                                reward: null,
                            };
                            return (0, o.jsx)("div", {
                                style: { maxWidth: 400, padding: 16 },
                                children: (0, o.jsx)(ee.e, {
                                    promotion: d,
                                    applicationId: x,
                                    analyticsLocations: [],
                                    onUpsellClick: et,
                                }),
                            });
                        },
                        controls: {
                            flavor: {
                                label: "Flavor",
                                type: "select",
                                defaultValue: "nitro",
                                options: [
                                    { label: "Default", value: "default" },
                                    { label: "Nitro", value: "nitro" },
                                ],
                            },
                            text: {
                                label: "Text",
                                type: "text",
                                defaultValue: "Your first purchase is free with Nitro.",
                            },
                            isNitroEligible: { label: "Nitro Eligible", type: "boolean", defaultValue: !1 },
                            daysUntilEnd: {
                                label: "Days Until End",
                                type: "slider",
                                defaultValue: 14,
                                minValue: 0,
                                maxValue: 60,
                            },
                        },
                    },
                    {
                        name: "Nitro Shop Card",
                        id: "slayer-storefront-nitro-card",
                        docs: "The shop card under a Nitro-flavored promotion: the price row shows the Nitro wheel, the discounted (Nitro) price in the positive color, and the struck-through original price. This is the same price treatment used on the PDP for subscribed users.",
                        component: function (e) {
                            let { name: t, price: l, nitroDiscountPercent: a } = e;
                            _({
                                name: t,
                                price: l,
                                salePrice: Math.round(l * (1 - a / 100)),
                                salePercentage: String(a),
                                exclusive: !1,
                                orbsReward: null,
                                daysUntilExpiry: null,
                                isEligible: !0,
                            }),
                                R(),
                                n.useEffect(() => {
                                    g.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                        config: {
                                            promotionalSkuIds: [],
                                            promotionEndDatetime: null,
                                            storefronts: [
                                                {
                                                    guildId: I,
                                                    applicationId: x,
                                                    gameId: C,
                                                    collectiblesShopNavigationEnabled: !1,
                                                    excludedPlatforms: [],
                                                    disableMobileAccountLinking: !1,
                                                    allowOrbsSpending: !1,
                                                    promotionEndDatetime: null,
                                                },
                                            ],
                                            announcementModalConfig: null,
                                        },
                                    }),
                                        g.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                            guildOrApplicationId: { type: "guild", guildId: I },
                                            storefront: {
                                                id: x,
                                                publishedAt: null,
                                                applicationId: x,
                                                title: "Playground Game",
                                                logoAssetId: null,
                                                lightThemeLogoAssetId: null,
                                                pages: [
                                                    { title: "Shop", skuIds: [v], sections: [], leaderboard: null },
                                                ],
                                                assets: {},
                                                promotions: {
                                                    [z]: {
                                                        id: z,
                                                        endsAt: null,
                                                        flavor: "nitro",
                                                        pdp: { label: "Free with Nitro", tooltip: null, icon: null },
                                                        storefront: { headerText: "Free with Nitro" },
                                                        checkout: null,
                                                        vcStream: null,
                                                    },
                                                },
                                            },
                                        });
                                }, []);
                            let i = n.useCallback((e) => {
                                e.preventDefault();
                            }, []);
                            return (0, o.jsx)("div", {
                                style: { maxWidth: 300, padding: 16 },
                                children: (0, o.jsx)(V.A, { skuId: v, variant: V.s.MEDIUM, onClick: i }),
                            });
                        },
                        controls: {
                            name: { label: "Product Name", type: "text", defaultValue: "Abyss Pack" },
                            price: { label: "Price (cents)", type: "number", defaultValue: 1599, minValue: 0 },
                            nitroDiscountPercent: {
                                label: "Nitro Discount %",
                                type: "slider",
                                defaultValue: 100,
                                minValue: 1,
                                maxValue: 100,
                            },
                        },
                    },
                    q,
                ],
            },
        ],
        tags: ["Slayer Storefront", "Social Layer", "Shop", "Storefront Playground"],
        IconComponent: a.U,
    },
    ea = { playgroundBaseUrl: "slayer-storefront", collections: [el] };
