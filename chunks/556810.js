"use strict";
n.d(t, { l: () => a });
var r = n(627968);
n(64700);
var i = n(954644);
let a = {
    name: "ShopProductCard",
    id: "shopProduct-card",
    component: (e) => {
        let { skuId: t } = e;
        return (0, r.jsx)("div", { children: (0, r.jsx)(i.A, { skuId: t }) });
    },
    controls: { skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" } },
};
