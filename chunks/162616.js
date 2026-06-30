l.r(t), l.d(t, { collectiblesCollection: () => C, playgroundConfig: () => I });
var s = l(34188),
    o = l(627968),
    r = l(64700),
    a = l(331322),
    n = l(834730),
    i = l(440938),
    d = l(161918),
    c = l(395856),
    h = l(642160),
    u = l(828614),
    p = l(484469),
    m = l(758836),
    x = l(724316);
let g = (e) => e.split(/[\s,]+/).filter((e) => "" !== e),
    v = {
        title: "Shop Loading",
        stories: [
            {
                name: "Batched SKU Loader",
                id: "shop-batched-sku-loader",
                component: (e) => {
                    let { skuIds: t } = e,
                        l = r.useMemo(() => g(t), [t]),
                        s = (0, h.h)(l, { needsCategory: !1 });
                    return (0, o.jsxs)(a.B, {
                        direction: "vertical",
                        gap: 16,
                        align: "start",
                        children: [
                            (0, o.jsx)(n.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    "Comma- or space-separate shop SKU IDs in the controls. Each tile resolves via the storefront APIs through CollectiblesShopManager \u2014 all IDs entered here coalesce into one batched request. Tiles show the skeleton until the SKU resolves.",
                            }),
                            (0, o.jsx)("div", {
                                className: x.V,
                                children: l.map((e) => {
                                    let { state: t, product: l } = s[e] ?? { state: "loading", product: null };
                                    return (0, o.jsx)(
                                        "div",
                                        {
                                            className: x.m,
                                            children:
                                                "ready" === t && null != l
                                                    ? (0, o.jsxs)(o.Fragment, {
                                                          children: [
                                                              (0, o.jsx)(n.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: l.name,
                                                              }),
                                                              (0, o.jsx)(n.E, {
                                                                  variant: "text-xs/normal",
                                                                  color: "text-muted",
                                                                  children: e,
                                                              }),
                                                          ],
                                                      })
                                                    : "error" === t
                                                      ? (0, o.jsxs)(n.E, {
                                                            variant: "text-sm/semibold",
                                                            color: "text-feedback-critical",
                                                            children: ["error: ", e],
                                                        })
                                                      : (0, o.jsx)(p.A, {}),
                                        },
                                        e,
                                    );
                                }),
                            }),
                        ],
                    });
                },
                controls: { skuIds: { label: "SKU IDs", type: "text", defaultValue: "" } },
            },
            {
                name: "Product Card",
                id: "shop-product-card",
                component: (e) => {
                    let { skuIds: t, improvedLoading: l } = e,
                        s = r.useMemo(() => g(t), [t]);
                    return (0, o.jsx)(c.k, {
                        value: l,
                        children: (0, o.jsx)(d.iM, {
                            tab: m.G2.HOME,
                            children: (0, o.jsx)(i.R9, {
                                newValue: { sessionId: "playground" },
                                children: (0, o.jsxs)(a.B, {
                                    direction: "vertical",
                                    gap: 16,
                                    align: "start",
                                    children: [
                                        (0, o.jsx)(n.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children:
                                                "Renders real ProductCards. With the experiment toggle on, each card resolves through CollectiblesShopManager and shows a skeleton until ready; with it off, cards use the legacy CollectiblesCategoryStore path (empty in the playground).",
                                        }),
                                        (0, o.jsx)("div", {
                                            className: x.V,
                                            children: s.map((e) => (0, o.jsx)(u.A, { skuId: e }, e)),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    });
                },
                controls: {
                    skuIds: { label: "SKU IDs", type: "text", defaultValue: "" },
                    improvedLoading: { label: "ImprovedShopLoading experiment", type: "boolean", defaultValue: !0 },
                },
            },
        ],
    };
var b = l(821609),
    S = l(793574),
    j = l(722258);
let C = {
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
                                l = t.trim(),
                                { state: s } = (0, h.I)(l, { needsCategory: !0 });
                            return (0, o.jsxs)(a.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, o.jsx)(n.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Enter a shop SKU ID in the controls, then open the product details modal. The loader resolves the product + category from the storefront APIs (store-first, single item).",
                                    }),
                                    (0, o.jsxs)(n.E, {
                                        variant: "text-sm/semibold",
                                        children: ["Resolver state: ", "" === l ? "idle (no skuId)" : s],
                                    }),
                                    (0, o.jsx)(b.$, {
                                        text: "Open product details",
                                        disabled: "" === l,
                                        onClick: () =>
                                            (0, j.B)({ skuId: l, analyticsLocations: [S.A.COLLECTIBLES_SHOP] }),
                                    }),
                                ],
                            });
                        },
                        controls: { skuId: { label: "SKU ID", type: "text", defaultValue: "" } },
                    },
                ],
            },
            v,
        ],
        tags: ["Collectibles", "Shop", "Storefront"],
        IconComponent: s.U,
    },
    I = { playgroundBaseUrl: "collectibles", collections: [C] };
