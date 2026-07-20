l.r(t), l.d(t, { slayerStorefrontPlaygroundConfig: () => ee, storefrontCollection: () => J });
var a = l(34188),
    o = l(627968),
    n = l(64700),
    i = l(50777),
    r = l(467884),
    s = l(989349),
    d = l.n(s),
    u = l(122817),
    c = l(17928),
    p = l(228366),
    m = l(288106),
    g = l(95701),
    b = l(280450),
    f = l(652215),
    h = l(818348);
let y = "000000000000000100",
    S = "000000000000000200",
    E = "000000000000000300",
    v = "000000000000000400";
function I(e, t, l) {
    let {
            name: a,
            price: o,
            salePrice: n,
            salePercentage: i,
            exclusive: r,
            orbsReward: s,
            daysUntilExpiry: c,
            isEligible: g,
        } = t,
        b = `playground-pricing-result-${e}`,
        y = `playground-reward-result-${e}`,
        E = null != c ? d()().add(c, "days").toISOString() : void 0,
        v = {
            id: e,
            type: f.Puh.DURABLE_PRIMARY,
            application_id: S,
            product_line: f.EZt.SOCIAL_LAYER_GAME_ITEM,
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
            price: { amount: o, currency: h.Yr.USD, sale_amount: n ?? void 0, sale_percentage: i ?? void 0 },
            price_tier: 0,
            premium: !1,
            show_age_gate: !1,
            restricted: !1,
            slug: "playground-item",
            exclusive: r,
            locales: ["en-US"],
            flags: u.d.AVAILABLE,
            deleted: !1,
            bundled_sku_ids: [],
            orbs_reward: s ?? 0,
            eligible_offers: [],
            tenant_metadata: { social_layer: { carousel_items: [], expires_at: E } },
        };
    if ((p.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: v }), null != n && null != i)) {
        let t = {
            skuPriceMap: { [e]: { pricingResultId: b, rewardResultIds: [y] } },
            pricingResultIdMap: {
                [b]: {
                    [m.QK.SELF_PURCHASE]: {
                        userPrice: [
                            { currency: h.Yr.USD, amount: n },
                            { currency: h.Yr.DISCORD_ORB, amount: n },
                        ],
                        prices: {
                            [f.FBC.BASE]: {
                                [m.v8.NORMAL]: [
                                    { currency: h.Yr.USD, amount: o },
                                    { currency: h.Yr.DISCORD_ORB, amount: o },
                                ],
                                [m.v8.DISCOUNTED]: [{ currency: h.Yr.USD, amount: n }],
                            },
                        },
                    },
                    [m.QK.GIFT]: {
                        userPrice: [{ currency: h.Yr.USD, amount: n }],
                        prices: {
                            [f.FBC.BASE]: {
                                [m.v8.NORMAL]: [{ currency: h.Yr.USD, amount: o }],
                                [m.v8.DISCOUNTED]: [{ currency: h.Yr.USD, amount: n }],
                            },
                        },
                    },
                },
            },
            rewardResultIdMap: {
                [y]: {
                    [m.QK.SELF_PURCHASE]: { type: m.Ns.DISCOUNT, amount: Number(i) },
                    [m.QK.GIFT]: { type: m.Ns.DISCOUNT, amount: Number(i) },
                },
            },
        };
        p.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: { type: "skus", skuIds: [e] }, data: t });
    } else
        p.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: [e] },
            data: {
                skuPriceMap: { [e]: { pricingResultId: b, rewardResultIds: [] } },
                pricingResultIdMap: {
                    [b]: {
                        [m.QK.SELF_PURCHASE]: {
                            userPrice: [
                                { currency: h.Yr.USD, amount: o },
                                { currency: h.Yr.DISCORD_ORB, amount: o },
                            ],
                            prices: {
                                [f.FBC.BASE]: {
                                    [m.v8.NORMAL]: [
                                        { currency: h.Yr.USD, amount: o },
                                        { currency: h.Yr.DISCORD_ORB, amount: o },
                                    ],
                                    [m.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                        [m.QK.GIFT]: {
                            userPrice: [{ currency: h.Yr.USD, amount: o }],
                            prices: {
                                [f.FBC.BASE]: {
                                    [m.v8.NORMAL]: [{ currency: h.Yr.USD, amount: o }],
                                    [m.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                    },
                },
                rewardResultIdMap: {},
            },
        });
    p.h.dispatch({
        type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
        interactionId: "playground-interaction",
        applicationId: S,
        skuId: e,
        recipientId: l,
        eligible: g,
    });
}
function x(e) {
    let t = (0, c.bG)([b.default], () => b.default.getId()),
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
        I(y, e, t);
    }, [l, a, o, i, r, s, d, u, t]);
}
let C = [
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
    A = (0, g.createChannelRecord)({
        id: "000000000000000500",
        type: f.rbe.GUILD_TEXT,
        guild_id: E,
        name: "playground-channel",
    });
function _() {
    n.useEffect(() => {
        let e = {
            id: S,
            name: "Playground Game",
            description: "A playground preview application for testing storefront component states.",
            is_monetized: !0,
            is_verified: !0,
            is_discoverable: !0,
            flags_new: f.gfo.SOCIAL_LAYER_INTEGRATION.toString(),
        };
        p.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e });
    }, []);
}
let O = {
    name: "Shop Card",
    id: "storefront-card",
    docs: 'Preview the SocialLayerStorefrontCard in various states. The card uses a fallback icon since no real asset images are loaded. The "Embedded" variant renders the full in-chat product details embed.',
    component: function (e) {
        let {
                variant: t,
                name: l,
                price: a,
                hasDiscount: s,
                discountPercent: d,
                isExclusive: u,
                hasOrbsReward: c,
                orbsRewardAmount: p,
                hasExpiry: m,
                daysUntilExpiry: g,
                isEligible: b,
            } = e,
            f = s ? String(d) : null,
            h = s ? Math.round(a * (1 - d / 100)) : null;
        x({
            name: l,
            price: a,
            salePrice: h,
            salePercentage: f,
            exclusive: u,
            orbsReward: c ? p : null,
            daysUntilExpiry: m ? g : null,
            isEligible: b,
        }),
            _();
        let v = n.useCallback((e) => {
            e.preventDefault();
        }, []);
        return t === r.s.EMBEDDED
            ? (0, o.jsx)("div", {
                  style: { padding: 16 },
                  children: (0, o.jsx)(i.A, { applicationId: S, guildId: E, skuId: y, channel: A }),
              })
            : (0, o.jsx)("div", {
                  style: { maxWidth: t === r.s.SMALL ? 220 : 300, padding: 16 },
                  children: (0, o.jsx)(r.A, { skuId: y, variant: t, onClick: v }),
              });
    },
    controls: {
        variant: {
            label: "Card Variant",
            type: "select",
            defaultValue: r.s.SMALL,
            options: [
                { label: "Small", value: r.s.SMALL },
                { label: "Medium", value: r.s.MEDIUM },
                { label: "Embedded", value: r.s.EMBEDDED },
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
var D = l(331322),
    P = l(834730),
    R = l(821609),
    T = l(231723),
    L = l(439325);
l(323874), l(14289), l(35956);
var N = l(366523);
let w = new URL("https://cdn.discordapp.com/embed/avatars/0.png"),
    V = new URL("https://cdn.discordapp.com/embed/avatars/1.png");
var U = l(263911),
    k = l(403581),
    M = l(873297),
    F = l(758836),
    B = l(375708);
function G() {}
let Y = {
    storefront: "linear-gradient(90deg, rgba(88, 101, 242, 0.4) 0%, rgba(157, 60, 178, 0.4) 100%)",
    nitro: "linear-gradient(90deg, rgba(179, 38, 156, 0.4) 0%, rgba(20, 20, 203, 0.4) 100%)",
    none: void 0,
};
var j = l(971146);
let H = "playground-nitro-promotion";
var K = l(849134);
function Q() {}
let W = {
    name: "Storefront Promo Popover",
    id: "social-layer-storefront-popover",
    docs: "The guild-sidebar storefront promo popover. Switch the graphic between the video slot (a VideoPopover, backed by `video_asset_fully_qualified_url`) and the static image slot (the standard Popover graphic) to compare.",
    component: function (e) {
        let { graphicKind: t, videoUrl: l, imageUrl: a, title: i, body: r, actionLabel: s } = e,
            d = n.useRef(null);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)("div", { ref: d }),
                (0, o.jsx)(K.A, {
                    targetElementRef: d,
                    onRequestClose: Q,
                    onActionClick: Q,
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
var q = l(760716),
    z = l(962299);
let $ = "playground-promotion";
var X = l(454491);
function Z() {}
let J = {
        id: "slayer-storefront",
        name: "Slayer Storefront",
        groups: [
            { title: "Shop Card", stories: [O] },
            {
                title: "Product Details",
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
                                    discountPercent: i,
                                    isExclusive: r,
                                    hasOrbsReward: s,
                                    orbsRewardAmount: d,
                                    hasExpiry: u,
                                    daysUntilExpiry: c,
                                    isEligible: m,
                                } = e,
                                g = a ? String(i) : null,
                                b = a ? Math.round(l * (1 - i / 100)) : null,
                                [f, h] = n.useState(!1),
                                I = n.useRef(null);
                            return (x({
                                name: t,
                                price: l,
                                salePrice: b,
                                salePercentage: g,
                                exclusive: r,
                                orbsReward: s ? d : null,
                                daysUntilExpiry: u ? c : null,
                                isEligible: m,
                            }),
                            n.useEffect(() => {
                                p.h.dispatch({
                                    type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                    config: {
                                        promotionalSkuIds: [],
                                        promotionEndDatetime: null,
                                        storefronts: [
                                            {
                                                guildId: E,
                                                applicationId: S,
                                                gameId: v,
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
                                    p.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                        guildOrApplicationId: { type: "guild", guildId: E },
                                        storefront: {
                                            id: S,
                                            publishedAt: null,
                                            applicationId: S,
                                            title: "Playground Game",
                                            logoAssetId: null,
                                            lightThemeLogoAssetId: null,
                                            pages: [{ title: "Shop", skuIds: [y], sections: [], leaderboard: null }],
                                            assets: {},
                                            promotions: {},
                                        },
                                    });
                            }, []),
                            f)
                                ? (0, o.jsx)(L.default, {
                                      transitionState: T.ip.ENTERED,
                                      returnRef: I,
                                      skuId: y,
                                      applicationId: S,
                                      isStorefront: !0,
                                      onClose: () => Promise.resolve(h(!1)),
                                  })
                                : (0, o.jsxs)(D.B, {
                                      gap: 12,
                                      style: { padding: 16 },
                                      children: [
                                          (0, o.jsx)(P.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children:
                                                  "Opens the redesigned PDP modal with the configured mock data. Close with the X button or Escape.",
                                          }),
                                          (0, o.jsx)("div", {
                                              children: (0, o.jsx)(R.$, {
                                                  variant: "primary",
                                                  onClick: () => h(!0),
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
                ],
            },
            {
                title: "Components",
                stories: [
                    {
                        name: "ExclusiveBadge",
                        id: "exclusive-badge",
                        component: function () {
                            return (0, o.jsxs)(D.B, {
                                gap: 16,
                                children: [
                                    (0, o.jsx)(P.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The exclusive badge shown on storefront cards and the PDP modal for exclusive items.",
                                    }),
                                    (0, o.jsx)(U.I, {}),
                                ],
                            });
                        },
                    },
                    {
                        name: "InGameItemTag",
                        id: "in-game-item-tag",
                        component: function (e) {
                            let { textColor: t } = e;
                            return (0, o.jsxs)(D.B, {
                                gap: 16,
                                children: [
                                    (0, o.jsx)(P.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The in-game item indicator tag shown on storefront cards and the PDP modal.",
                                    }),
                                    (0, o.jsx)(j.V, { textColor: t }),
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
                                children: (0, o.jsx)(N.A, {
                                    cardImage: w,
                                    cardBackgroundImage: l ? V : null,
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
                                    showTimeLeft: s,
                                    timeLeftText: d,
                                    showOrbsOnly: u,
                                    cardCount: m,
                                    gradientPreset: g,
                                } = e,
                                f =
                                    ((t = (0, c.bG)([b.default], () => b.default.getId())),
                                    (l = n.useMemo(
                                        () =>
                                            C.slice(0, m).map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            }),
                                        [m],
                                    )),
                                    n.useEffect(() => {
                                        for (let { id: e, params: l } of C.slice(0, m)) I(e, l, t);
                                        p.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                            config: {
                                                promotionalSkuIds: l,
                                                promotionEndDatetime: null,
                                                storefronts: [
                                                    {
                                                        guildId: E,
                                                        applicationId: S,
                                                        gameId: v,
                                                        collectiblesShopNavigationEnabled: !1,
                                                        excludedPlatforms: [],
                                                        disableMobileAccountLinking: !1,
                                                        allowOrbsSpending: u ?? !1,
                                                        promotionEndDatetime: new Date("2030-06-30T00:00:00Z"),
                                                    },
                                                ],
                                                announcementModalConfig: null,
                                            },
                                        }),
                                            p.h.dispatch({
                                                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                                guildOrApplicationId: { type: "guild", guildId: E },
                                                storefront: {
                                                    id: S,
                                                    publishedAt: null,
                                                    applicationId: S,
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
                                    }, [m, t, l, u]),
                                    l),
                                h = n.useMemo(
                                    () =>
                                        "nitro" === i
                                            ? {
                                                  kind: "custom",
                                                  node: (0, o.jsx)(R.$, {
                                                      variant: "expressive",
                                                      size: "sm",
                                                      icon: k.t,
                                                      text: B.intl.string(B.t.pj0XBN),
                                                      onClick: G,
                                                  }),
                                              }
                                            : { kind: "button", text: "Shop All", onClick: G },
                                    [i],
                                );
                            return (0, o.jsx)(M.A, {
                                onDismiss: G,
                                skuIds: f,
                                tab: F.G2.GAME_SHOPS,
                                applicationId: S,
                                headerText: a,
                                logoUrl: r
                                    ? "https://cdn.discordapp.com/app-assets/1346069614634864772/store/1461676971728572478.webp?size=128"
                                    : void 0,
                                cta: h,
                                timeLeftText: s && null != d && "" !== d ? d : void 0,
                                analyticsSection: "playground",
                                analyticsTileType: "PLAYGROUND_BANNER",
                                analyticsImpressionType: "playground_banner",
                                backgroundGradient: Y[g],
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
                            _();
                            let r = (0, q.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
                                s = (0, q.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront);
                            return (
                                n.useEffect(() => (r(!0), s(a), () => r(!1)), [r, s, a]),
                                n.useEffect(() => {
                                    p.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                        config: {
                                            promotionalSkuIds: [],
                                            promotionEndDatetime: null,
                                            storefronts: [
                                                {
                                                    guildId: E,
                                                    applicationId: S,
                                                    gameId: v,
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
                                        p.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                            guildOrApplicationId: { type: "guild", guildId: E },
                                            storefront: {
                                                id: S,
                                                publishedAt: null,
                                                applicationId: S,
                                                title: "Playground Game",
                                                logoAssetId: null,
                                                lightThemeLogoAssetId: null,
                                                pages: [{ title: "Shop", skuIds: [], sections: [], leaderboard: null }],
                                                assets: {},
                                                promotions: {
                                                    [$]: {
                                                        id: $,
                                                        endsAt: i > 0 ? d()().add(i, "days").toISOString() : null,
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
                                (0, o.jsx)(z.M, { applicationId: S, analyticsLocations: [] })
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
                                r = (0, q.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
                                s = (0, q.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront);
                            n.useEffect(() => (r(!0), s(a), () => r(!1)), [r, s, a]);
                            let u = {
                                Icon: void 0,
                                text: l,
                                tooltip: null,
                                endsAt: i > 0 ? d()().add(i, "days").toDate() : null,
                                flavor: t,
                                reward: null,
                            };
                            return (0, o.jsx)("div", {
                                style: { maxWidth: 400, padding: 16 },
                                children: (0, o.jsx)(X.e, {
                                    promotion: u,
                                    applicationId: S,
                                    analyticsLocations: [],
                                    onUpsellClick: Z,
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
                            x({
                                name: t,
                                price: l,
                                salePrice: Math.round(l * (1 - a / 100)),
                                salePercentage: String(a),
                                exclusive: !1,
                                orbsReward: null,
                                daysUntilExpiry: null,
                                isEligible: !0,
                            }),
                                _(),
                                n.useEffect(() => {
                                    p.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                        config: {
                                            promotionalSkuIds: [],
                                            promotionEndDatetime: null,
                                            storefronts: [
                                                {
                                                    guildId: E,
                                                    applicationId: S,
                                                    gameId: v,
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
                                        p.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                            guildOrApplicationId: { type: "guild", guildId: E },
                                            storefront: {
                                                id: S,
                                                publishedAt: null,
                                                applicationId: S,
                                                title: "Playground Game",
                                                logoAssetId: null,
                                                lightThemeLogoAssetId: null,
                                                pages: [
                                                    { title: "Shop", skuIds: [y], sections: [], leaderboard: null },
                                                ],
                                                assets: {},
                                                promotions: {
                                                    [H]: {
                                                        id: H,
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
                                children: (0, o.jsx)(r.A, { skuId: y, variant: r.s.MEDIUM, onClick: i }),
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
                    W,
                ],
            },
        ],
        tags: ["Slayer Storefront", "Social Layer", "Shop", "Storefront Playground"],
        IconComponent: a.U,
    },
    ee = { playgroundBaseUrl: "slayer-storefront", collections: [J] };
