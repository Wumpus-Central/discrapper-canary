s.d(t, { AO: () => m, r$: () => x, yh: () => I });
var r = s(477900);
s(582128);
var n = s(503698),
    a = s.n(n),
    i = s(284009),
    l = s.n(i),
    c = s(575593);
s(118751);
var u = s(17928),
    o = s(590180),
    d = s(14702);
(s(735164), s(980094));
var p = s(366523);
(s(773669), s(580630));
var v = s(652215);
s(375708);
var g = s(799591);
function x(e) {
    let { sku: t, slayerProductPreviewClassName: s } = e,
        n = (0, u.bG)([o.A], () => o.A.getProduct(t.id));
    return null != n && t.productLine === v.EZt.COLLECTIBLES && n.type !== c.R.BUNDLE
        ? (0, r.jsx)(d.O, { sku: t })
        : t.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM
          ? (0, r.jsx)(p.e, { containerClassName: a()(g.oC, s), sku: t, shape: "square" })
          : null;
}
function m(e) {
    let t,
        s,
        { sku: r } = e,
        n = (0, u.bG)([o.A], () => o.A.getProduct(r.id));
    return {
        tableLayout:
            ((t = null != n && r.productLine === v.EZt.COLLECTIBLES && n.type !== c.R.BUNDLE),
            (s = r.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM),
            t || s ? "THREE_COLUMN" : "TWO_COLUMN"),
        isSocialLayerGameItem: r.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
        product: n,
    };
}
function I(e) {
    let { invoicePreview: t } = e;
    (l()(null != t.total, "SKU must have a price set."),
        l()(null != t.invoiceItems && 1 === t.invoiceItems.length, "SKU preview must have single line item"));
    let s = t.invoiceItems[0],
        r = s.unitPrice?.amount ?? s.amount,
        n = !t.taxInclusive && t.tax > 0,
        a = (function (e) {
            if (null == e.discounts || 0 === e.discounts.length) return null;
            let t = e.discounts[0];
            return 0 === t.amount ? null : t;
        })(s);
    return { showSeparateTotal: r !== t.total, discount: a, basePrice: r, showTaxes: n };
}
