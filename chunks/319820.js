n.d(t, { AO: () => g, r$: () => v, yh: () => I });
var r = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    l = n(284009),
    s = n.n(l),
    u = n(575593);
n(118751);
var c = n(17928),
    o = n(590180),
    d = n(14702);
(n(735164), n(980094));
var m = n(366523);
(n(773669), n(580630));
var p = n(652215);
n(660183);
var f = n(799591);
function v(e) {
    let { sku: t, slayerProductPreviewClassName: n } = e,
        i = (0, c.bG)([o.A], () => o.A.getProduct(t.id));
    return null != i && t.productLine === p.EZt.COLLECTIBLES && i.type !== u.R.BUNDLE
        ? (0, r.jsx)(d.O, { sku: t })
        : t.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM
          ? (0, r.jsx)(m.e, { containerClassName: a()(f.oC, n), sku: t, shape: "square" })
          : null;
}
function g(e) {
    let t,
        n,
        { sku: r } = e,
        i = (0, c.bG)([o.A], () => o.A.getProduct(r.id));
    return {
        tableLayout:
            ((t = null != i && r.productLine === p.EZt.COLLECTIBLES && i.type !== u.R.BUNDLE),
            (n = r.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM),
            t || n ? "THREE_COLUMN" : "TWO_COLUMN"),
        isSocialLayerGameItem: r.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM,
        product: i,
    };
}
function I(e) {
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
}
