(a.r(t), a.d(t, { collectiblesCollection: () => M, playgroundConfig: () => _ }));
var r = a(34188),
    l = a(477900),
    n = a(582128),
    o = a(834730),
    s = a(262056);
let i = {
    title: "Promotions",
    stories: [
        {
            name: "Promotion Progress Ring",
            id: "promotion-progress-ring",
            component: function (e) {
                let { current: t, target: a, progressColor: r, segmentGap: n } = e;
                return (0, l.jsx)(s.A, {
                    current: t,
                    target: a,
                    progressColor: r,
                    segmentGap: n,
                    children: (0, l.jsxs)(o.E, { variant: "text-md/semibold", children: [t, "/", a] }),
                });
            },
            controls: {
                current: { label: "Current", type: "number", defaultValue: 1, minValue: 0 },
                target: { label: "Target", type: "number", defaultValue: 3, minValue: 0 },
                progressColor: { label: "Progress color", type: "color", defaultValue: void 0 },
                segmentGap: { label: "Segment gap", type: "number", defaultValue: 4, minValue: 0 },
            },
        },
    ],
};
var c = a(331322),
    d = a(440938),
    u = a(161918),
    m = a(395856),
    p = a(682301),
    g = a(258245),
    h = a(484469),
    v = a(628989),
    x = a(758836),
    f = a(107481);
function b(e) {
    return e.split(/[\s,]+/).filter((e) => "" !== e);
}
let y = {
    title: "Shop Loading",
    stories: [
        {
            name: "Batched SKU Loader",
            id: "shop-batched-sku-loader",
            component: function (e) {
                let { skuIds: t } = e,
                    a = n.useMemo(() => b(t), [t]),
                    r = (0, p.hv)(a, { needsCategory: !1 });
                return (0, l.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 16,
                    align: "start",
                    children: [
                        (0, l.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Comma- or space-separate shop SKU IDs in the controls. Each tile resolves via the storefront APIs through CollectiblesShopManager \u2014 all IDs entered here coalesce into one batched request. Tiles show the skeleton until the SKU resolves.",
                        }),
                        (0, l.jsx)("div", {
                            className: f.Vg,
                            children: a.map((e) => {
                                let { state: t, product: a } = r[e] ?? { state: "loading", product: null };
                                return (0, l.jsx)(
                                    "div",
                                    {
                                        className: f.Vs,
                                        children:
                                            "ready" === t && null != a
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          (0, l.jsx)(o.E, {
                                                              variant: "text-sm/semibold",
                                                              children: a.name,
                                                          }),
                                                          (0, l.jsx)(o.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: e,
                                                          }),
                                                      ],
                                                  })
                                                : "error" === t
                                                  ? (0, l.jsxs)(o.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-feedback-critical",
                                                        children: ["error: ", e],
                                                    })
                                                  : (0, l.jsx)(h.A, {}),
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
                    r = n.useMemo(() => b(t), [t]);
                return (0, l.jsx)(m.k, {
                    value: a,
                    children: (0, l.jsx)(u.iM, {
                        tab: x.G2.HOME,
                        children: (0, l.jsx)(d.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, l.jsxs)(c.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, l.jsx)(o.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Renders real ProductCards. With the experiment toggle on, each card resolves through CollectiblesShopManager and shows a skeleton until ready; with it off, cards use the legacy CollectiblesCategoryStore path (empty in the playground).",
                                    }),
                                    (0, l.jsx)("div", {
                                        className: f.Vg,
                                        children: r.map((e) => (0, l.jsx)(g.A, { skuId: e }, e)),
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
                return (0, l.jsx)(m.k, {
                    value: t,
                    children: (0, l.jsx)(u.iM, {
                        tab: x.G2.HOME,
                        children: (0, l.jsx)(d.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, l.jsx)("div", {
                                className: f.rO,
                                children: (0, l.jsx)(v.A, {
                                    handleTransition: () => {},
                                    tab: x.G2.HOME,
                                    transitionState: x.Pf.VISIBLE,
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
var S = a(278416),
    C = a(297264),
    w = a(173127),
    E = a(703086);
let A = {
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
var k = a(821609),
    I = a(793574),
    j = a(722258);
let M = {
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
                                { state: r } = (0, p.IK)(a, { needsCategory: !0 });
                            return (0, l.jsxs)(c.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, l.jsx)(o.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Enter a shop SKU ID in the controls, then open the product details modal. The loader resolves the product + category from the storefront APIs (store-first, single item).",
                                    }),
                                    (0, l.jsxs)(o.E, {
                                        variant: "text-sm/semibold",
                                        children: ["Resolver state: ", "" === a ? "idle (no skuId)" : r],
                                    }),
                                    (0, l.jsx)(k.$, {
                                        text: "Open product details",
                                        disabled: "" === a,
                                        onClick: () =>
                                            (0, j.B)({ skuId: a, analyticsLocations: [I.A.COLLECTIBLES_SHOP] }),
                                    }),
                                ],
                            });
                        },
                        controls: { skuId: { label: "SKU ID", type: "text", defaultValue: "" } },
                    },
                ],
            },
            y,
            {
                title: "Navigation",
                stories: [
                    {
                        name: "Navigation Menu",
                        id: "navigation-menu",
                        component: function () {
                            let [e, t] = n.useState("home"),
                                a = n.useCallback(
                                    (e, a) => () => {
                                        (window.history.pushState(null, "", a), t(e));
                                    },
                                    [],
                                ),
                                r = n.useMemo(
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
                                                    trailingIndicator: { type: "icon", icon: S.TagIcon },
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
                                            badge: { type: "beta", variant: "primary" },
                                            route: "#gameservers",
                                            onClick: a("game servers", "#gameservers"),
                                        },
                                    ],
                                    [a],
                                );
                            return (0, l.jsxs)("div", {
                                className: E.MY,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: E.jr,
                                        children: (0, l.jsx)(w.A, {
                                            "aria-label": "Playground Navigation",
                                            className: E.C$,
                                            options: r,
                                            selectedKey: e,
                                            overflowLabel: "More",
                                            overflowExpandLabel: "More navigation options",
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: E.Qs,
                                        children: (0, l.jsx)(C.D, { variant: "heading-lg/bold", children: A[e] ?? e }),
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
            i,
        ],
        tags: ["Collectibles", "Shop", "Storefront"],
        IconComponent: r.U,
    },
    _ = { playgroundBaseUrl: "collectibles", collections: [M] };
