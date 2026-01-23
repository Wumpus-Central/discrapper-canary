n.d(t, {
    l: () => a,
});
var r = n(627968);
n(64700);
var i = n(244190);
let a = {
    title: "Shop Product Card",
    stories: [
        {
            name: "ShopProductCard",
            id: "shopProduct-card",
            component: (e) => {
                let { skuId: t } = e;
                return (0, r.jsx)("div", {
                    children: (0, r.jsx)(i.A, {
                        skuId: t,
                    }),
                });
            },
            controls: {
                skuId: {
                    label: "SKU Id",
                    type: "text",
                    defaultValue: "1458472704192811088",
                },
            },
        },
    ],
};
