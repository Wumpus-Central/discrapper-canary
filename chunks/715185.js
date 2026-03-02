"use strict";
a.d(t, { H: () => d, M: () => o });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(41770),
    s = a(785330);
let i = {
        id: "dummy-show-of-skeletons",
        children: [
            {
                block: "ContainedHero",
                bannerSrc: {
                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                },
                logoSrc: {
                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                },
                backgroundColor: "rgb(25, 32, 86)",
                children: [
                    {
                        block: "SubLayout",
                        tenantId: "dummy-tenant",
                        layoutId: "dummy-skeleton",
                        skeleton: [
                            {
                                block: "InteractiveHScroll",
                                children: [
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704079434020" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704167379109" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704192811088" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704222171347" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704272498709" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704306053202" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704087818312" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704096075816" }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    o = {
        name: "SubLayout",
        id: "sub-layout-basic",
        component: () =>
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        children: 'The SubLayout component accepts a layout id and "get or fetch"es the layout',
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-md/semibold",
                        children:
                            "When resolved, the layout trees are merged into one layout. This allows for the asynchronous resolution of layouts, for faster first paints",
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-md/semibold",
                        children:
                            "Here, the \"popular picks\" are actually a sub layout with the id 'dummy-popular-picks'",
                    }),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)("hr", {}),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)(s.Ay, { layout: n.uG }),
                ],
            }),
        controls: {},
    },
    d = {
        name: "SubLayout - Loading State",
        id: "sub-layout-skeleton",
        component: () =>
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        children:
                            'The SubLayout can take a "Skeleton" property which is just `children` to display if the layout is being fetched from the api',
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: "text-md/semibold",
                        children:
                            "Here we use the `Skeleton` component to show the shop cards loading while the (dummy) Shop Cards SubLayout are resolving (it will never stop loading for demonstration purposes)",
                    }),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)("hr", {}),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)(s.Ay, { layout: i }),
                ],
            }),
        controls: {},
    };
