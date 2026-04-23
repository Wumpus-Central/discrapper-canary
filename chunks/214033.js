a.d(t, { t: () => m });
var l = a(627968);
a(64700);
var r = a(534514),
    n = a(834730),
    s = a(331322),
    i = a(939249),
    d = a(206845),
    o = a(604238),
    c = a(261225),
    u = a(282203),
    h = a(985018);
let m = {
    name: "SkuList",
    id: "skulist",
    component: (e) => {
        let { skuIds: t, sortPurchased: a, eagerLoad: m, showSkeleton: x } = e,
            b = (0, o.e)();
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(r.D, {
                    variant: "heading-lg/bold",
                    children: "The SkuList component takes a list of skus and maps them into a block",
                }),
                (0, l.jsx)(n.E, {
                    variant: "text-md/semibold",
                    children:
                        "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                }),
                (0, l.jsx)(n.E, {
                    variant: "text-md/semibold",
                    children:
                        "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                }),
                (0, l.jsx)("br", {}),
                (0, l.jsx)(c.A, {
                    columns: 3,
                    children: (0, l.jsx)(u.A, {
                        skuIds: t?.split(","),
                        skuBlock: "ShopProductCard",
                        sortPurchased: a,
                        eagerLoad: m,
                        showSkeleton: x,
                        componentMap: b,
                    }),
                }),
                (0, l.jsx)("hr", {}),
                (0, l.jsx)(n.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, l.jsxs)(s.B, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, l.jsx)(d.A, {
                            text: h.intl.string(h.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, l.jsx)(i.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(n.E, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(s.B, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, l.jsx)(d.A, {
                            text: h.intl.string(h.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, l.jsx)(i.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(n.E, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(s.B, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, l.jsx)(d.A, {
                            text: h.intl.string(h.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, l.jsx)(i.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(n.E, {
                                        variant: "text-sm/normal",
                                        children: "1458472704524156959",
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    },
    controls: {
        skuIds: {
            label: "SKU Ids",
            type: "text",
            defaultValue: "1458472704192811088,1458479739110166560,1458472704524156959",
        },
        sortPurchased: { label: "Sort Purchased to Back", type: "boolean", defaultValue: !1 },
        eagerLoad: { label: "Eager Load", type: "boolean", defaultValue: !1 },
        showSkeleton: { label: "Show Skeleton", type: "boolean", defaultValue: !1 },
    },
};
