t.r(a), t.d(a, { slayerStorefrontPlaygroundConfig: () => O, storefrontCollection: () => L });
var l = t(34188),
    r = t(627968),
    n = t(64700),
    s = t(328100),
    o = t(989349),
    i = t.n(o),
    u = t(122817),
    d = t(17928),
    c = t(228366),
    p = t(288106),
    m = t(495544),
    y = t(652215),
    g = t(818348);
let S = "000000000000000100",
    b = "000000000000000200",
    h = "000000000000000300",
    E = "playground-pricing-result",
    f = "playground-reward-result";
function I(e) {
    let {
            name: a,
            price: t,
            salePrice: l,
            salePercentage: r,
            exclusive: s,
            orbsReward: o,
            daysUntilExpiry: h,
            isEligible: I,
        } = e,
        x = (0, d.bG)([m.default], () => m.default.getId());
    n.useEffect(() => {
        let e = null != h ? i()().add(h, "days").toISOString() : void 0,
            n = {
                id: S,
                type: y.Puh.DURABLE_PRIMARY,
                application_id: b,
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
                price: { amount: t, currency: g.Yr.USD, sale_amount: l ?? void 0, sale_percentage: r ?? void 0 },
                price_tier: 0,
                premium: !1,
                show_age_gate: !1,
                restricted: !1,
                slug: "playground-item",
                exclusive: s,
                locales: ["en-US"],
                flags: u.d.AVAILABLE,
                deleted: !1,
                bundled_sku_ids: [],
                orbs_reward: o ?? 0,
                eligible_offers: [],
                tenant_metadata: { social_layer: { carousel_items: [], expires_at: e } },
            };
        if ((c.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: n }), null != l && null != r)) {
            let e = {
                skuPriceMap: { [S]: { pricingResultId: E, rewardResultIds: [f] } },
                pricingResultIdMap: {
                    [E]: {
                        [p.QK.SELF_PURCHASE]: {
                            userPrice: [{ currency: g.Yr.USD, amount: l }],
                            prices: {
                                [y.FBC.BASE]: {
                                    [p.v8.NORMAL]: [{ currency: g.Yr.USD, amount: t }],
                                    [p.v8.DISCOUNTED]: [{ currency: g.Yr.USD, amount: l }],
                                },
                            },
                        },
                        [p.QK.GIFT]: {
                            userPrice: [{ currency: g.Yr.USD, amount: l }],
                            prices: {
                                [y.FBC.BASE]: {
                                    [p.v8.NORMAL]: [{ currency: g.Yr.USD, amount: t }],
                                    [p.v8.DISCOUNTED]: [{ currency: g.Yr.USD, amount: l }],
                                },
                            },
                        },
                    },
                },
                rewardResultIdMap: {
                    [f]: {
                        [p.QK.SELF_PURCHASE]: { type: p.Ns.DISCOUNT, amount: Number(r) },
                        [p.QK.GIFT]: { type: p.Ns.DISCOUNT, amount: Number(r) },
                    },
                },
            };
            c.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: { type: "skus", skuIds: [S] }, data: e });
        } else
            c.h.dispatch({
                type: "SKUS_PRICING_FETCH_SUCCESS",
                priceId: { type: "skus", skuIds: [S] },
                data: {
                    skuPriceMap: { [S]: { pricingResultId: E, rewardResultIds: [] } },
                    pricingResultIdMap: {
                        [E]: {
                            [p.QK.SELF_PURCHASE]: {
                                userPrice: [{ currency: g.Yr.USD, amount: t }],
                                prices: {
                                    [y.FBC.BASE]: {
                                        [p.v8.NORMAL]: [{ currency: g.Yr.USD, amount: t }],
                                        [p.v8.DISCOUNTED]: [],
                                    },
                                },
                            },
                            [p.QK.GIFT]: {
                                userPrice: [{ currency: g.Yr.USD, amount: t }],
                                prices: {
                                    [y.FBC.BASE]: {
                                        [p.v8.NORMAL]: [{ currency: g.Yr.USD, amount: t }],
                                        [p.v8.DISCOUNTED]: [],
                                    },
                                },
                            },
                        },
                    },
                    rewardResultIdMap: {},
                },
            });
        c.h.dispatch({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: "playground-interaction",
            applicationId: b,
            skuId: S,
            recipientId: x,
            eligible: I,
        });
    }, [a, t, l, r, s, o, h, I, x]);
}
let x = {
    name: "Shop Card",
    id: "storefront-card",
    docs: "Preview the SocialLayerStorefrontCard in various states. The card uses a fallback icon since no real asset images are loaded.",
    component: function (e) {
        let {
                variant: a,
                name: t,
                price: l,
                hasDiscount: o,
                discountPercent: i,
                isExclusive: u,
                hasOrbsReward: d,
                orbsRewardAmount: c,
                hasExpiry: p,
                daysUntilExpiry: m,
                isEligible: y,
            } = e,
            g = o ? String(i) : null,
            b = o ? Math.round(l * (1 - i / 100)) : null;
        I({
            name: t,
            price: l,
            salePrice: b,
            salePercentage: g,
            exclusive: u,
            orbsReward: d ? c : null,
            daysUntilExpiry: p ? m : null,
            isEligible: y,
        });
        let h = n.useCallback((e) => {
            e.preventDefault();
        }, []);
        return (0, r.jsx)("div", {
            style: { maxWidth: a === s.s.SMALL ? 220 : 300, padding: 16 },
            children: (0, r.jsx)(s.A, { skuId: S, variant: a, onClick: h }),
        });
    },
    controls: {
        variant: {
            label: "Card Variant",
            type: "select",
            defaultValue: s.s.SMALL,
            options: [
                { label: "Small", value: s.s.SMALL },
                { label: "Medium", value: s.s.MEDIUM },
                { label: "Embedded", value: s.s.EMBEDDED },
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
var C = t(331322),
    v = t(834730),
    _ = t(821609),
    D = t(231723),
    R = t(659696);
t(323874), t(14289), t(35956);
var P = t(366523);
let U = new URL("https://cdn.discordapp.com/embed/avatars/0.png"),
    A = new URL("https://cdn.discordapp.com/embed/avatars/1.png");
var V = t(263911),
    w = t(971146);
let L = {
        id: "slayer-storefront",
        name: "Slayer Storefront",
        groups: [
            { title: "Shop Card", stories: [x] },
            {
                title: "Product Details",
                stories: [
                    {
                        name: "PDP Modal",
                        id: "pdp-modal",
                        docs: "Preview the Product Details Page modal. Opens the real RedesignedProductDetailsModal with mock store data. Media carousel will be empty since no real assets are loaded.",
                        component: function (e) {
                            let {
                                    name: a,
                                    price: t,
                                    hasDiscount: l,
                                    discountPercent: s,
                                    isExclusive: o,
                                    hasOrbsReward: i,
                                    orbsRewardAmount: u,
                                    hasExpiry: d,
                                    daysUntilExpiry: p,
                                    isEligible: m,
                                } = e,
                                y = l ? String(s) : null,
                                g = l ? Math.round(t * (1 - s / 100)) : null,
                                [E, f] = n.useState(!1),
                                x = n.useRef(null);
                            return (I({
                                name: a,
                                price: t,
                                salePrice: g,
                                salePercentage: y,
                                exclusive: o,
                                orbsReward: i ? u : null,
                                daysUntilExpiry: d ? p : null,
                                isEligible: m,
                            }),
                            n.useEffect(() => {
                                c.h.dispatch({
                                    type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                    config: {
                                        promotionalSkuIds: [],
                                        promotionEndDatetime: null,
                                        storefronts: [
                                            {
                                                guildId: h,
                                                applicationId: b,
                                                gameId: "000000000000000400",
                                                collectiblesShopNavigationEnabled: !1,
                                                excludedPlatforms: [],
                                                disableMobileAccountLinking: !1,
                                            },
                                        ],
                                        announcementModalConfig: null,
                                    },
                                }),
                                    c.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                        guildOrApplicationId: { type: "guild", guildId: h },
                                        storefront: {
                                            applicationId: b,
                                            title: "Playground Game",
                                            logoAssetId: null,
                                            lightThemeLogoAssetId: null,
                                            pages: [{ title: "Shop", skuIds: [S], sections: [], leaderboard: null }],
                                            assets: {},
                                        },
                                    });
                            }, []),
                            E)
                                ? (0, r.jsx)(R.default, {
                                      transitionState: D.ip.ENTERED,
                                      returnRef: x,
                                      skuId: S,
                                      applicationId: b,
                                      isStorefront: !0,
                                      onClose: () => Promise.resolve(f(!1)),
                                  })
                                : (0, r.jsxs)(C.B, {
                                      gap: 12,
                                      style: { padding: 16 },
                                      children: [
                                          (0, r.jsx)(v.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children:
                                                  "Opens the redesigned PDP modal with the configured mock data. Close with the X button or Escape.",
                                          }),
                                          (0, r.jsx)("div", {
                                              children: (0, r.jsx)(_.$, {
                                                  variant: "primary",
                                                  onClick: () => f(!0),
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
                            return (0, r.jsxs)(C.B, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The exclusive badge shown on storefront cards and the PDP modal for exclusive items.",
                                    }),
                                    (0, r.jsx)(V.I, {}),
                                ],
                            });
                        },
                    },
                    {
                        name: "InGameItemTag",
                        id: "in-game-item-tag",
                        component: function (e) {
                            let { textColor: a } = e;
                            return (0, r.jsxs)(C.B, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The in-game item indicator tag shown on storefront cards and the PDP modal.",
                                    }),
                                    (0, r.jsx)(w.V, { textColor: a }),
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
                                    { label: "Always White", value: "always-white" },
                                ],
                            },
                        },
                    },
                    {
                        name: "CardImage",
                        id: "card-image",
                        docs: "The card image component with gradient background extraction. Uses placeholder avatar images for demo.",
                        component: function (e) {
                            let { shape: a, useBackgroundImage: t } = e;
                            return (0, r.jsx)("div", {
                                style: { width: 220, height: 220 },
                                children: (0, r.jsx)(P.A, {
                                    cardImage: U,
                                    cardBackgroundImage: t ? A : null,
                                    altText: "Playground preview",
                                    shape: a,
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
                ],
            },
        ],
        tags: ["Slayer Storefront", "Social Layer", "Shop", "Storefront Playground"],
        IconComponent: l.U,
    },
    O = { playgroundBaseUrl: "slayer-storefront", collections: [L] };
