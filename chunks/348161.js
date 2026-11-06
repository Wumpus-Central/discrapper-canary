a.d(t, { playgroundConfig: () => j });
var o = a(34188),
    s = a(477900),
    r = a(582128),
    l = a(834730),
    n = a(262056);
let i = {
    title: "Promotions",
    stories: [
        {
            name: "Promotion Progress Ring",
            id: "promotion-progress-ring",
            component: function (e) {
                let { current: t, target: a, progressColor: o, segmentGap: r } = e;
                return (0, s.jsx)(n.A, {
                    current: t,
                    target: a,
                    progressColor: o,
                    segmentGap: r,
                    children: (0, s.jsxs)(l.E, { variant: "body-md/semibold", children: [t, "/", a] }),
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
var d = a(331322),
    c = a(857512),
    m = a(161918),
    u = a(682301),
    g = a(987421),
    h = a(484469),
    p = a(253782),
    b = a(758836),
    v = a(107481);
function x(e) {
    return e.split(/[\s,]+/).filter((e) => "" !== e);
}
var y = a(278416),
    f = a(534514),
    S = a(971458),
    C = a(703086);
let k = {
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
    w = a(793574),
    A = a(722258);
let j = {
    playgroundBaseUrl: "collectibles",
    collections: [
        {
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
                                    { state: o } = (0, u.IK)(a, { needsCategory: !0 });
                                return (0, s.jsxs)(d.B, {
                                    direction: "vertical",
                                    gap: 16,
                                    align: "start",
                                    children: [
                                        (0, s.jsx)(l.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children:
                                                "Enter a shop SKU ID in the controls, then open the product details modal. The loader resolves the product + category from the storefront APIs (store-first, single item).",
                                        }),
                                        (0, s.jsxs)(l.E, {
                                            variant: "body-sm/semibold",
                                            children: ["Resolver state: ", "" === a ? "idle (no skuId)" : o],
                                        }),
                                        (0, s.jsx)(E.$, {
                                            text: "Open product details",
                                            disabled: "" === a,
                                            onClick: () =>
                                                (0, A.B)({ skuId: a, analyticsLocations: [w.A.COLLECTIBLES_SHOP] }),
                                        }),
                                    ],
                                });
                            },
                            controls: { skuId: { label: "SKU ID", type: "text", defaultValue: "" } },
                        },
                    ],
                },
                {
                    title: "Shop Loading",
                    stories: [
                        {
                            name: "Batched SKU Loader",
                            id: "shop-batched-sku-loader",
                            component: function (e) {
                                let { skuIds: t } = e,
                                    a = r.useMemo(() => x(t), [t]),
                                    o = (0, u.hv)(a, { needsCategory: !1 });
                                return (0, s.jsxs)(d.B, {
                                    direction: "vertical",
                                    gap: 16,
                                    align: "start",
                                    children: [
                                        (0, s.jsx)(l.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children:
                                                "Comma- or space-separate shop SKU IDs in the controls. Each tile resolves via the storefront APIs through CollectiblesShopManager \u2014 all IDs entered here coalesce into one batched request. Tiles show the skeleton until the SKU resolves.",
                                        }),
                                        (0, s.jsx)("div", {
                                            className: v.Vg,
                                            children: a.map((e) => {
                                                let { state: t, product: a } = o[e] ?? {
                                                    state: "loading",
                                                    product: null,
                                                };
                                                return (0, s.jsx)(
                                                    "div",
                                                    {
                                                        className: v.Vs,
                                                        children:
                                                            "ready" === t && null != a
                                                                ? (0, s.jsxs)(s.Fragment, {
                                                                      children: [
                                                                          (0, s.jsx)(l.E, {
                                                                              variant: "body-sm/semibold",
                                                                              children: a.name,
                                                                          }),
                                                                          (0, s.jsx)(l.E, {
                                                                              variant: "body-xs/normal",
                                                                              color: "text-muted",
                                                                              children: e,
                                                                          }),
                                                                      ],
                                                                  })
                                                                : "error" === t
                                                                  ? (0, s.jsxs)(l.E, {
                                                                        variant: "body-sm/semibold",
                                                                        color: "text-feedback-critical",
                                                                        children: ["error: ", e],
                                                                    })
                                                                  : (0, s.jsx)(h.A, {}),
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
                                let { skuIds: t } = e,
                                    a = r.useMemo(() => x(t), [t]);
                                return (0, s.jsx)(m.iM, {
                                    tab: b.G2.HOME,
                                    children: (0, s.jsx)(c.R9, {
                                        newValue: { sessionId: "playground" },
                                        children: (0, s.jsxs)(d.B, {
                                            direction: "vertical",
                                            gap: 16,
                                            align: "start",
                                            children: [
                                                (0, s.jsx)(l.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    children:
                                                        "Renders real ProductCards. Each card resolves through CollectiblesShopManager and shows a skeleton until ready.",
                                                }),
                                                (0, s.jsx)("div", {
                                                    className: v.Vg,
                                                    children: a.map((e) => (0, s.jsx)(g.A, { skuId: e }, e)),
                                                }),
                                            ],
                                        }),
                                    }),
                                });
                            },
                            controls: { skuIds: { label: "SKU IDs", type: "text", defaultValue: "" } },
                        },
                        {
                            name: "Shop Home Feed",
                            id: "shop-home-feed",
                            component: function () {
                                return (0, s.jsx)(m.iM, {
                                    tab: b.G2.HOME,
                                    children: (0, s.jsx)(c.R9, {
                                        newValue: { sessionId: "playground" },
                                        children: (0, s.jsx)("div", {
                                            className: v.rO,
                                            children: (0, s.jsx)(p.A, {
                                                handleTransition: () => {},
                                                tab: b.G2.HOME,
                                                transitionState: b.Pf.VISIBLE,
                                            }),
                                        }),
                                    }),
                                });
                            },
                        },
                    ],
                },
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
                                    o = r.useMemo(
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
                                                        trailingIndicator: { type: "icon", icon: y.TagIcon },
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
                                return (0, s.jsxs)("div", {
                                    className: C.MY,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: C.jr,
                                            children: (0, s.jsx)(S.A, {
                                                "aria-label": "Playground Navigation",
                                                className: C.C$,
                                                options: o,
                                                selectedKey: e,
                                                overflowLabel: "More",
                                                overflowExpandLabel: "More navigation options",
                                            }),
                                        }),
                                        (0, s.jsx)("div", {
                                            className: C.Qs,
                                            children: (0, s.jsx)(f.D, {
                                                variant: "heading-lg/semibold",
                                                children: k[e] ?? e,
                                            }),
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
            IconComponent: o.ShopIcon,
        },
    ],
};
