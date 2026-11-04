var l = n(288106);
let i = new Set(["gift_customization", "sku_gift_badge"]);
n.d(
    t,
    {},
    {
        g: function (e) {
            return i.has(e) ? l.QK.GIFT : l.QK.SELF_PURCHASE;
        },
    },
);
