l.r(t), l.d(t, { slayerStorefrontPlaygroundConfig: () => z, storefrontCollection: () => $ });
var a = l(34188),
    o = l(627968),
    n = l(64700),
    r = l(50777),
    i = l(467884),
    s = l(989349),
    d = l.n(s),
    u = l(122817),
    c = l(17928),
    p = l(228366),
    m = l(288106),
    g = l(95701),
    b = l(280450),
    y = l(652215),
    S = l(818348);
let f = "000000000000000100",
    h = "000000000000000200",
    E = "000000000000000300",
    I = "000000000000000400";
function C(e, t, l) {
    let {
            name: a,
            price: o,
            salePrice: n,
            salePercentage: r,
            exclusive: i,
            orbsReward: s,
            daysUntilExpiry: c,
            isEligible: g,
        } = t,
        b = `playground-pricing-result-${e}`,
        f = `playground-reward-result-${e}`,
        E = null != c ? d()().add(c, "days").toISOString() : void 0,
        I = {
            id: e,
            type: y.Puh.DURABLE_PRIMARY,
            application_id: h,
            product_line: y.EZt.SOCIAL_LAYER_GAME_ITEM,
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
            price: { amount: o, currency: S.Yr.USD, sale_amount: n ?? void 0, sale_percentage: r ?? void 0 },
            price_tier: 0,
            premium: !1,
            show_age_gate: !1,
            restricted: !1,
            slug: "playground-item",
            exclusive: i,
            locales: ["en-US"],
            flags: u.d.AVAILABLE,
            deleted: !1,
            bundled_sku_ids: [],
            orbs_reward: s ?? 0,
            eligible_offers: [],
            tenant_metadata: { social_layer: { carousel_items: [], expires_at: E } },
        };
    if ((p.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: I }), null != n && null != r)) {
        let t = {
            skuPriceMap: { [e]: { pricingResultId: b, rewardResultIds: [f] } },
            pricingResultIdMap: {
                [b]: {
                    [m.QK.SELF_PURCHASE]: {
                        userPrice: [
                            { currency: S.Yr.USD, amount: n },
                            { currency: S.Yr.DISCORD_ORB, amount: n },
                        ],
                        prices: {
                            [y.FBC.BASE]: {
                                [m.v8.NORMAL]: [
                                    { currency: S.Yr.USD, amount: o },
                                    { currency: S.Yr.DISCORD_ORB, amount: o },
                                ],
                                [m.v8.DISCOUNTED]: [{ currency: S.Yr.USD, amount: n }],
                            },
                        },
                    },
                    [m.QK.GIFT]: {
                        userPrice: [{ currency: S.Yr.USD, amount: n }],
                        prices: {
                            [y.FBC.BASE]: {
                                [m.v8.NORMAL]: [{ currency: S.Yr.USD, amount: o }],
                                [m.v8.DISCOUNTED]: [{ currency: S.Yr.USD, amount: n }],
                            },
                        },
                    },
                },
            },
            rewardResultIdMap: {
                [f]: {
                    [m.QK.SELF_PURCHASE]: { type: m.Ns.DISCOUNT, amount: Number(r) },
                    [m.QK.GIFT]: { type: m.Ns.DISCOUNT, amount: Number(r) },
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
                                { currency: S.Yr.USD, amount: o },
                                { currency: S.Yr.DISCORD_ORB, amount: o },
                            ],
                            prices: {
                                [y.FBC.BASE]: {
                                    [m.v8.NORMAL]: [
                                        { currency: S.Yr.USD, amount: o },
                                        { currency: S.Yr.DISCORD_ORB, amount: o },
                                    ],
                                    [m.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                        [m.QK.GIFT]: {
                            userPrice: [{ currency: S.Yr.USD, amount: o }],
                            prices: {
                                [y.FBC.BASE]: {
                                    [m.v8.NORMAL]: [{ currency: S.Yr.USD, amount: o }],
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
        applicationId: h,
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
            salePercentage: r,
            exclusive: i,
            orbsReward: s,
            daysUntilExpiry: d,
            isEligible: u,
        } = e;
    n.useEffect(() => {
        C(f, e, t);
    }, [l, a, o, r, i, s, d, u, t]);
}
let v = [
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
        type: y.rbe.GUILD_TEXT,
        guild_id: E,
        name: "playground-channel",
    });
function _() {
    n.useEffect(() => {
        let e = {
            id: h,
            name: "Playground Game",
            description: "A playground preview application for testing storefront component states.",
            is_monetized: !0,
            is_verified: !0,
            is_discoverable: !0,
            flags_new: y.gfo.SOCIAL_LAYER_INTEGRATION.toString(),
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
            y = s ? String(d) : null,
            S = s ? Math.round(a * (1 - d / 100)) : null;
        x({
            name: l,
            price: a,
            salePrice: S,
            salePercentage: y,
            exclusive: u,
            orbsReward: c ? p : null,
            daysUntilExpiry: m ? g : null,
            isEligible: b,
        }),
            _();
        let I = n.useCallback((e) => {
            e.preventDefault();
        }, []);
        return t === i.s.EMBEDDED
            ? (0, o.jsx)("div", {
                  style: { padding: 16 },
                  children: (0, o.jsx)(r.A, { applicationId: h, guildId: E, skuId: f, channel: A }),
              })
            : (0, o.jsx)("div", {
                  style: { maxWidth: t === i.s.SMALL ? 220 : 300, padding: 16 },
                  children: (0, o.jsx)(i.A, { skuId: f, variant: t, onClick: I }),
              });
    },
    controls: {
        variant: {
            label: "Card Variant",
            type: "select",
            defaultValue: i.s.SMALL,
            options: [
                { label: "Small", value: i.s.SMALL },
                { label: "Medium", value: i.s.MEDIUM },
                { label: "Embedded", value: i.s.EMBEDDED },
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
var R = l(331322),
    D = l(834730),
    T = l(821609),
    P = l(231723),
    L = l(439325);
l(323874), l(14289), l(35956);
var w = l(366523);
let U = new URL("https://cdn.discordapp.com/embed/avatars/0.png"),
    N = new URL("https://cdn.discordapp.com/embed/avatars/1.png");
var V = l(263911),
    k = l(403581),
    M = l(873297),
    B = l(758836),
    G = l(375708);
function F() {}
let Y = {
    storefront: "linear-gradient(90deg, rgba(88, 101, 242, 0.4) 0%, rgba(157, 60, 178, 0.4) 100%)",
    nitro: "linear-gradient(90deg, rgba(179, 38, 156, 0.4) 0%, rgba(20, 20, 203, 0.4) 100%)",
    none: void 0,
};
var j = l(971146),
    H = l(760716),
    K = l(962299);
let Q = "playground-promotion",
    $ = {
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
                                    discountPercent: r,
                                    isExclusive: i,
                                    hasOrbsReward: s,
                                    orbsRewardAmount: d,
                                    hasExpiry: u,
                                    daysUntilExpiry: c,
                                    isEligible: m,
                                } = e,
                                g = a ? String(r) : null,
                                b = a ? Math.round(l * (1 - r / 100)) : null,
                                [y, S] = n.useState(!1),
                                C = n.useRef(null);
                            return (x({
                                name: t,
                                price: l,
                                salePrice: b,
                                salePercentage: g,
                                exclusive: i,
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
                                                applicationId: h,
                                                gameId: I,
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
                                            id: h,
                                            publishedAt: null,
                                            applicationId: h,
                                            title: "Playground Game",
                                            logoAssetId: null,
                                            lightThemeLogoAssetId: null,
                                            pages: [{ title: "Shop", skuIds: [f], sections: [], leaderboard: null }],
                                            assets: {},
                                            promotions: {},
                                        },
                                    });
                            }, []),
                            y)
                                ? (0, o.jsx)(L.default, {
                                      transitionState: P.ip.ENTERED,
                                      returnRef: C,
                                      skuId: f,
                                      applicationId: h,
                                      isStorefront: !0,
                                      onClose: () => Promise.resolve(S(!1)),
                                  })
                                : (0, o.jsxs)(R.B, {
                                      gap: 12,
                                      style: { padding: 16 },
                                      children: [
                                          (0, o.jsx)(D.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children:
                                                  "Opens the redesigned PDP modal with the configured mock data. Close with the X button or Escape.",
                                          }),
                                          (0, o.jsx)("div", {
                                              children: (0, o.jsx)(T.$, {
                                                  variant: "primary",
                                                  onClick: () => S(!0),
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
                            return (0, o.jsxs)(R.B, {
                                gap: 16,
                                children: [
                                    (0, o.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The exclusive badge shown on storefront cards and the PDP modal for exclusive items.",
                                    }),
                                    (0, o.jsx)(V.I, {}),
                                ],
                            });
                        },
                    },
                    {
                        name: "InGameItemTag",
                        id: "in-game-item-tag",
                        component: function (e) {
                            let { textColor: t } = e;
                            return (0, o.jsxs)(R.B, {
                                gap: 16,
                                children: [
                                    (0, o.jsx)(D.E, {
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
                                children: (0, o.jsx)(w.A, {
                                    cardImage: U,
                                    cardBackgroundImage: l ? N : null,
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
                                    ctaPreset: r,
                                    showLogo: i,
                                    showTimeLeft: s,
                                    timeLeftText: d,
                                    showOrbsOnly: u,
                                    cardCount: m,
                                    gradientPreset: g,
                                } = e,
                                y =
                                    ((t = (0, c.bG)([b.default], () => b.default.getId())),
                                    (l = n.useMemo(
                                        () =>
                                            v.slice(0, m).map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            }),
                                        [m],
                                    )),
                                    n.useEffect(() => {
                                        for (let { id: e, params: l } of v.slice(0, m)) C(e, l, t);
                                        p.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                            config: {
                                                promotionalSkuIds: l,
                                                promotionEndDatetime: null,
                                                storefronts: [
                                                    {
                                                        guildId: E,
                                                        applicationId: h,
                                                        gameId: I,
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
                                                    id: h,
                                                    publishedAt: null,
                                                    applicationId: h,
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
                                S = n.useMemo(
                                    () =>
                                        "nitro" === r
                                            ? {
                                                  kind: "custom",
                                                  node: (0, o.jsx)(T.$, {
                                                      variant: "expressive",
                                                      size: "sm",
                                                      icon: k.t,
                                                      text: G.intl.string(G.t.pj0XBN),
                                                      onClick: F,
                                                  }),
                                              }
                                            : { kind: "button", text: "Shop All", onClick: F },
                                    [r],
                                );
                            return (0, o.jsx)(M.A, {
                                onDismiss: F,
                                skuIds: y,
                                tab: B.G2.GAME_SHOPS,
                                applicationId: h,
                                headerText: a,
                                logoUrl: i
                                    ? "https://cdn.discordapp.com/app-assets/1346069614634864772/store/1461676971728572478.webp?size=128"
                                    : void 0,
                                cta: S,
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
                            let { flavor: t, headerText: l, isNitroEligible: a, daysUntilEnd: r } = e;
                            _();
                            let i = (0, H.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
                                s = (0, H.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront);
                            return (
                                n.useEffect(() => (i(!0), s(a), () => i(!1)), [i, s, a]),
                                n.useEffect(() => {
                                    p.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                        config: {
                                            promotionalSkuIds: [],
                                            promotionEndDatetime: null,
                                            storefronts: [
                                                {
                                                    guildId: E,
                                                    applicationId: h,
                                                    gameId: I,
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
                                                id: h,
                                                publishedAt: null,
                                                applicationId: h,
                                                title: "Playground Game",
                                                logoAssetId: null,
                                                lightThemeLogoAssetId: null,
                                                pages: [{ title: "Shop", skuIds: [], sections: [], leaderboard: null }],
                                                assets: {},
                                                promotions: {
                                                    [Q]: {
                                                        id: Q,
                                                        endsAt: r > 0 ? d()().add(r, "days").toISOString() : null,
                                                        flavor: t,
                                                        pdp: { label: null, tooltip: null, icon: "ORBS" },
                                                        storefront: { headerText: l },
                                                        checkout: null,
                                                        vcStream: null,
                                                    },
                                                },
                                            },
                                        });
                                }, [t, l, r]),
                                (0, o.jsx)(K.M, { applicationId: h, analyticsLocations: [] })
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
                ],
            },
        ],
        tags: ["Slayer Storefront", "Social Layer", "Shop", "Storefront Playground"],
        IconComponent: a.U,
    },
    z = { playgroundBaseUrl: "slayer-storefront", collections: [$] };
