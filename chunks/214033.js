"use strict";
a.d(t, { t: () => p });
var r = a(627968);
a(64700);
var l = a(534514),
    n = a(834730),
    i = a(331322),
    s = a(939249),
    o = a(206845),
    d = a(604238),
    c = a(261225),
    u = a(282203),
    h = a(985018);
let p = {
    name: "SkuList",
    id: "skulist",
    component: (e) => {
        let { skuIds: t, sortPurchased: a, eagerLoad: p, showSkeleton: _ } = e,
            m = (0, d.e)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.D, {
                    variant: "heading-lg/bold",
                    children: "The SkuList component takes a list of skus and maps them into a block",
                }),
                (0, r.jsx)(n.E, {
                    variant: "text-md/semibold",
                    children:
                        "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                }),
                (0, r.jsx)(n.E, {
                    variant: "text-md/semibold",
                    children:
                        "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                }),
                (0, r.jsx)("br", {}),
                (0, r.jsx)(c.A, {
                    columns: 3,
                    children: (0, r.jsx)(u.A, {
                        skuIds: t?.split(","),
                        skuBlock: "ShopProductCard",
                        sortPurchased: a,
                        eagerLoad: p,
                        showSkeleton: _,
                        componentMap: m,
                    }),
                }),
                (0, r.jsx)("hr", {}),
                (0, r.jsx)(n.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, r.jsxs)(i.B, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(n.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, r.jsx)(o.A, {
                            text: h.intl.string(h.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, r.jsx)(s.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(n.E, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(i.B, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(n.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, r.jsx)(o.A, {
                            text: h.intl.string(h.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, r.jsx)(s.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(n.E, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(i.B, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(n.E, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, r.jsx)(o.A, {
                            text: h.intl.string(h.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, r.jsx)(s.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(n.E, {
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
