l.r(t), l.d(t, { collectiblesCollection: () => j, playgroundConfig: () => y });
var o = l(34188),
    n = l(477900),
    s = l(582128),
    r = l(331322),
    a = l(834730),
    i = l(440938),
    d = l(161918),
    c = l(395856),
    u = l(682301),
    h = l(258245),
    p = l(484469),
    m = l(73870),
    g = l(758836),
    x = l(107481);
function f(e) {
    return e.split(/[\s,]+/).filter((e) => "" !== e);
}
let v = {
    title: "Shop Loading",
    stories: [
        {
            name: "Batched SKU Loader",
            id: "shop-batched-sku-loader",
            component: function (e) {
                let { skuIds: t } = e,
                    l = s.useMemo(() => f(t), [t]),
                    o = (0, u.hv)(l, { needsCategory: !1 });
                return (0, n.jsxs)(r.B, {
                    direction: "vertical",
                    gap: 16,
                    align: "start",
                    children: [
                        (0, n.jsx)(a.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Comma- or space-separate shop SKU IDs in the controls. Each tile resolves via the storefront APIs through CollectiblesShopManager \u2014 all IDs entered here coalesce into one batched request. Tiles show the skeleton until the SKU resolves.",
                        }),
                        (0, n.jsx)("div", {
                            className: x.Vg,
                            children: l.map((e) => {
                                let { state: t, product: l } = o[e] ?? { state: "loading", product: null };
                                return (0, n.jsx)(
                                    "div",
                                    {
                                        className: x.Vs,
                                        children:
                                            "ready" === t && null != l
                                                ? (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                          (0, n.jsx)(a.E, {
                                                              variant: "text-sm/semibold",
                                                              children: l.name,
                                                          }),
                                                          (0, n.jsx)(a.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: e,
                                                          }),
                                                      ],
                                                  })
                                                : "error" === t
                                                  ? (0, n.jsxs)(a.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-feedback-critical",
                                                        children: ["error: ", e],
                                                    })
                                                  : (0, n.jsx)(p.A, {}),
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
            component: function (e) {
                let { skuIds: t, improvedLoading: l } = e,
                    o = s.useMemo(() => f(t), [t]);
                return (0, n.jsx)(c.k, {
                    value: l,
                    children: (0, n.jsx)(d.iM, {
                        tab: g.G2.HOME,
                        children: (0, n.jsx)(i.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, n.jsxs)(r.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, n.jsx)(a.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Renders real ProductCards. With the experiment toggle on, each card resolves through CollectiblesShopManager and shows a skeleton until ready; with it off, cards use the legacy CollectiblesCategoryStore path (empty in the playground).",
                                    }),
                                    (0, n.jsx)("div", {
                                        className: x.Vg,
                                        children: o.map((e) => (0, n.jsx)(h.A, { skuId: e }, e)),
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
        {
            name: "Shop Home Feed",
            id: "shop-home-feed",
            component: function (e) {
                let { improvedLoading: t } = e;
                return (0, n.jsx)(c.k, {
                    value: t,
                    children: (0, n.jsx)(d.iM, {
                        tab: g.G2.HOME,
                        children: (0, n.jsx)(i.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, n.jsx)("div", {
                                className: x.rO,
                                children: (0, n.jsx)(m.A, {
                                    handleTransition: () => {},
                                    tab: g.G2.HOME,
                                    transitionState: g.Pf.VISIBLE,
                                }),
                            }),
                        }),
                    }),
                });
            },
            controls: {
                improvedLoading: { label: "ImprovedShopLoading experiment", type: "boolean", defaultValue: !0 },
            },
        },
    ],
};
var S = l(821609),
    b = l(793574),
    I = l(722258);
let j = {
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
                                { state: o } = (0, u.IK)(l, { needsCategory: !0 });
                            return (0, n.jsxs)(r.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, n.jsx)(a.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Enter a shop SKU ID in the controls, then open the product details modal. The loader resolves the product + category from the storefront APIs (store-first, single item).",
                                    }),
                                    (0, n.jsxs)(a.E, {
                                        variant: "text-sm/semibold",
                                        children: ["Resolver state: ", "" === l ? "idle (no skuId)" : o],
                                    }),
                                    (0, n.jsx)(S.$, {
                                        text: "Open product details",
                                        disabled: "" === l,
                                        onClick: () =>
                                            (0, I.B)({ skuId: l, analyticsLocations: [b.A.COLLECTIBLES_SHOP] }),
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
        IconComponent: o.U,
    },
    y = { playgroundBaseUrl: "collectibles", collections: [j] };
