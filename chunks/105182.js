(a.r(t), a.d(t, { collectiblesCollection: () => I, playgroundConfig: () => j }));
var l = a(34188),
    n = a(477900),
    r = a(582128),
    o = a(331322),
    s = a(834730),
    i = a(440938),
    c = a(161918),
    d = a(395856),
    u = a(682301),
    m = a(258245),
    p = a(484469),
    h = a(109210),
    g = a(758836),
    v = a(107481);
function x(e) {
    return e.split(/[\s,]+/).filter((e) => "" !== e);
}
let f = {
    title: "Shop Loading",
    stories: [
        {
            name: "Batched SKU Loader",
            id: "shop-batched-sku-loader",
            component: function (e) {
                let { skuIds: t } = e,
                    a = r.useMemo(() => x(t), [t]),
                    l = (0, u.hv)(a, { needsCategory: !1 });
                return (0, n.jsxs)(o.B, {
                    direction: "vertical",
                    gap: 16,
                    align: "start",
                    children: [
                        (0, n.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Comma- or space-separate shop SKU IDs in the controls. Each tile resolves via the storefront APIs through CollectiblesShopManager \u2014 all IDs entered here coalesce into one batched request. Tiles show the skeleton until the SKU resolves.",
                        }),
                        (0, n.jsx)("div", {
                            className: v.Vg,
                            children: a.map((e) => {
                                let { state: t, product: a } = l[e] ?? { state: "loading", product: null };
                                return (0, n.jsx)(
                                    "div",
                                    {
                                        className: v.Vs,
                                        children:
                                            "ready" === t && null != a
                                                ? (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                          (0, n.jsx)(s.E, {
                                                              variant: "text-sm/semibold",
                                                              children: a.name,
                                                          }),
                                                          (0, n.jsx)(s.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: e,
                                                          }),
                                                      ],
                                                  })
                                                : "error" === t
                                                  ? (0, n.jsxs)(s.E, {
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
                let { skuIds: t, improvedLoading: a } = e,
                    l = r.useMemo(() => x(t), [t]);
                return (0, n.jsx)(d.k, {
                    value: a,
                    children: (0, n.jsx)(c.iM, {
                        tab: g.G2.HOME,
                        children: (0, n.jsx)(i.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, n.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, n.jsx)(s.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Renders real ProductCards. With the experiment toggle on, each card resolves through CollectiblesShopManager and shows a skeleton until ready; with it off, cards use the legacy CollectiblesCategoryStore path (empty in the playground).",
                                    }),
                                    (0, n.jsx)("div", {
                                        className: v.Vg,
                                        children: l.map((e) => (0, n.jsx)(m.A, { skuId: e }, e)),
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
                return (0, n.jsx)(d.k, {
                    value: t,
                    children: (0, n.jsx)(c.iM, {
                        tab: g.G2.HOME,
                        children: (0, n.jsx)(i.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, n.jsx)("div", {
                                className: v.rO,
                                children: (0, n.jsx)(h.A, {
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
var b = a(278416),
    y = a(297264),
    S = a(173127),
    C = a(703086);
let w = {
    home: "Home",
    catalog: "Catalog",
    browse: "Browse",
    "offer eligible": "Offer Eligible",
    "avatar decorations": "Avatar Decorations",
    nameplates: "Nameplates",
    "game shops": "Game Shops",
    "games-a": "Game A",
    "games-b": "Game B",
    "game servers": "Game Servers",
};
var E = a(821609),
    k = a(793574),
    A = a(722258);
let I = {
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
                                a = t.trim(),
                                { state: l } = (0, u.IK)(a, { needsCategory: !0 });
                            return (0, n.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, n.jsx)(s.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Enter a shop SKU ID in the controls, then open the product details modal. The loader resolves the product + category from the storefront APIs (store-first, single item).",
                                    }),
                                    (0, n.jsxs)(s.E, {
                                        variant: "text-sm/semibold",
                                        children: ["Resolver state: ", "" === a ? "idle (no skuId)" : l],
                                    }),
                                    (0, n.jsx)(E.$, {
                                        text: "Open product details",
                                        disabled: "" === a,
                                        onClick: () =>
                                            (0, A.B)({ skuId: a, analyticsLocations: [k.A.COLLECTIBLES_SHOP] }),
                                    }),
                                ],
                            });
                        },
                        controls: { skuId: { label: "SKU ID", type: "text", defaultValue: "" } },
                    },
                ],
            },
            f,
            {
                title: "Navigation",
                stories: [
                    {
                        name: "Navigation Menu",
                        id: "navigation-menu",
                        component: function () {
                            let [e, t] = r.useState("home"),
                                a = r.useCallback(
                                    (e, a) => () => {
                                        (window.history.pushState(null, "", a), t(e));
                                    },
                                    [],
                                ),
                                l = r.useMemo(
                                    () => [
                                        {
                                            type: "page",
                                            key: "home",
                                            text: "Home",
                                            route: "#home",
                                            onClick: a("home", "#home"),
                                        },
                                        {
                                            type: "page",
                                            key: "catalog",
                                            text: "Catalog",
                                            route: "#catalog",
                                            onClick: a("catalog", "#catalog"),
                                        },
                                        {
                                            type: "menu",
                                            key: "browse",
                                            text: "Browse",
                                            expandLabel: "Browse Submenu",
                                            route: "#browse",
                                            onClick: a("browse", "#browse"),
                                            options: [
                                                {
                                                    type: "page",
                                                    key: "offer eligible",
                                                    text: "Offer Eligible",
                                                    trailingIndicator: { type: "icon", icon: b.TagIcon },
                                                    onClick: a("offer eligible", "#offereligible"),
                                                },
                                                {
                                                    type: "page",
                                                    key: "avatar decorations",
                                                    text: "Avatar Decorations",
                                                    onClick: a("avatar decorations", "#avatardecorations"),
                                                },
                                                {
                                                    type: "page",
                                                    key: "nameplates",
                                                    text: "Nameplates",
                                                    badge: "new",
                                                    onClick: a("nameplates", "#nameplates"),
                                                },
                                            ],
                                        },
                                        {
                                            type: "menu",
                                            key: "game shops",
                                            text: "Game Shops",
                                            expandLabel: "Game Shops submenu",
                                            options: [
                                                {
                                                    type: "page",
                                                    key: "games-a",
                                                    text: "Game A",
                                                    iconSrc:
                                                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' rx='6' fill='%235865F2'/%3E%3C/svg%3E",
                                                    onClick: a("games-a", "#game-a"),
                                                },
                                                {
                                                    type: "page",
                                                    key: "games-b",
                                                    text: "Game B",
                                                    iconSrc:
                                                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' rx='6' fill='%2323A55A'/%3E%3C/svg%3E",
                                                    onClick: a("games-b", "#game-b"),
                                                },
                                            ],
                                        },
                                        {
                                            type: "page",
                                            key: "game servers",
                                            text: "Game Servers",
                                            badge: { type: "beta", variant: "brand" },
                                            route: "#gameservers",
                                            onClick: a("game servers", "#gameservers"),
                                        },
                                    ],
                                    [a],
                                );
                            return (0, n.jsxs)("div", {
                                className: C.MY,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: C.jr,
                                        children: (0, n.jsx)(S.A, {
                                            "aria-label": "Playground Navigation",
                                            className: C.C$,
                                            options: l,
                                            selectedKey: e,
                                            overflowLabel: "More",
                                            overflowExpandLabel: "More navigation options",
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: C.Qs,
                                        children: (0, n.jsx)(y.D, { variant: "heading-lg/bold", children: w[e] ?? e }),
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
        ],
        tags: ["Collectibles", "Shop", "Storefront"],
        IconComponent: l.U,
    },
    j = { playgroundBaseUrl: "collectibles", collections: [I] };
