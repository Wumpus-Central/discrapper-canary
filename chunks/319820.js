var r = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    l = n(284009),
    s = n.n(l),
    u = n(575593);
n(118751);
var o = n(855986),
    c = n(590180),
    d = n(14702);
(n(735164), n(980094));
var m = n(366523);
(n(773669), n(580630));
var f = n(652215);
n(792996);
var p = n(799591);
n.d(
    t,
    {},
    {
        AO: function (e) {
            let t,
                n,
                { sku: r } = e,
                i = (0, o.bG)([c.A], () => c.A.getProduct(r.id));
            return {
                tableLayout:
                    ((t = null != i && r.productLine === f.EZt.COLLECTIBLES && i.type !== u.R.BUNDLE),
                    (n = r.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM),
                    t || n ? "THREE_COLUMN" : "TWO_COLUMN"),
                isSocialLayerGameItem: r.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM,
                product: i,
            };
        },
        r$: function (e) {
            let { sku: t, slayerProductPreviewClassName: n } = e,
                i = (0, o.bG)([c.A], () => c.A.getProduct(t.id));
            return null != i && t.productLine === f.EZt.COLLECTIBLES && i.type !== u.R.BUNDLE
                ? (0, r.jsx)(d.O, { sku: t })
                : t.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM
                  ? (0, r.jsx)(m.e, { containerClassName: a()(p.oC, n), sku: t, shape: "square" })
                  : null;
        },
        yh: function (e) {
            let { invoicePreview: t } = e;
            (s()(null != t.total, "SKU must have a price set."),
                s()(null != t.invoiceItems && 1 === t.invoiceItems.length, "SKU preview must have single line item"));
            let n = t.invoiceItems[0],
                r = n.unitPrice?.amount ?? n.amount,
                i = !t.taxInclusive && t.tax > 0,
                a = (function (e) {
                    if (null == e.discounts || 0 === e.discounts.length) return null;
                    let t = e.discounts[0];
                    return 0 === t.amount ? null : t;
                })(n);
            return { showSeparateTotal: r !== t.total, discount: a, basePrice: r, showTaxes: i };
        },
    },
);
