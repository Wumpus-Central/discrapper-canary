a.d(t, { t: () => c });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(206845),
    o = a(604238),
    s = a(261225),
    d = a(282203),
    i = a(985018);
let c = {
    name: "SkuList",
    id: "skulist",
    component: (e) => {
        let { skuIds: t, sortPurchased: a, eagerLoad: c, showSkeleton: x } = e,
            u = (0, o.e)();
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(r.Heading, {
                    variant: "heading-lg/bold",
                    children: "The SkuList component takes a list of skus and maps them into a block",
                }),
                (0, l.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    children:
                        "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                }),
                (0, l.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    children:
                        "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                }),
                (0, l.jsx)("br", {}),
                (0, l.jsx)(s.A, {
                    columns: 3,
                    children: (0, l.jsx)(d.A, {
                        skuIds: t?.split(","),
                        skuBlock: "ShopProductCard",
                        sortPurchased: a,
                        eagerLoad: c,
                        showSkeleton: x,
                        componentMap: u,
                    }),
                }),
                (0, l.jsx)("hr", {}),
                (0, l.jsx)(r.Text, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, l.jsxs)(r.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, l.jsx)(n.A, {
                            text: i.intl.string(i.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, l.jsx)(r.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(r.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, l.jsx)(n.A, {
                            text: i.intl.string(i.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, l.jsx)(r.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(r.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, l.jsx)(n.A, {
                            text: i.intl.string(i.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, l.jsx)(r.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.Text, {
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
