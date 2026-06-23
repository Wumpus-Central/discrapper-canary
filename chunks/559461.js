o.r(t), o.d(t, { collectiblesCollection: () => p, playgroundConfig: () => u });
var l = o(34188),
    s = o(627968);
o(64700);
var a = o(331322),
    n = o(834730),
    r = o(821609),
    i = o(793574),
    c = o(494084),
    d = o(722258);
let p = {
        id: "collectibles",
        name: "Collectibles Shop",
        groups: [
            {
                title: "Single-SKU Surfaces",
                stories: [
                    {
                        name: "Standalone Product Details Modal",
                        id: "standalone-product-details-modal",
                        component: function (e) {
                            let { skuId: t } = e,
                                o = t.trim(),
                                { state: l } = (0, c.A)(o, { needsCategory: !0 });
                            return (0, s.jsxs)(a.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, s.jsx)(n.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Enter a shop SKU ID in the controls, then open the product details modal. The loader resolves the product + category from the storefront APIs (store-first, single item).",
                                    }),
                                    (0, s.jsxs)(n.E, {
                                        variant: "text-sm/semibold",
                                        children: ["Resolver state: ", "" === o ? "idle (no skuId)" : l],
                                    }),
                                    (0, s.jsx)(r.$, {
                                        text: "Open product details",
                                        disabled: "" === o,
                                        onClick: () =>
                                            (0, d.B)({ skuId: o, analyticsLocations: [i.A.COLLECTIBLES_SHOP] }),
                                    }),
                                ],
                            });
                        },
                        controls: { skuId: { label: "SKU ID", type: "text", defaultValue: "" } },
                    },
                ],
            },
        ],
        tags: ["Collectibles", "Shop", "Storefront"],
        IconComponent: l.U,
    },
    u = { playgroundBaseUrl: "collectibles", collections: [p] };
