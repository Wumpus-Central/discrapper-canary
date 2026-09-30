s.d(t, { AO: () => E, r$: () => m, yh: () => g });
var n = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    l = s(284009),
    i = s.n(l),
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
var I = s(799591);
function m(e) {
    let { sku: t, slayerProductPreviewClassName: s } = e,
        r = (0, u.bG)([o.A], () => o.A.getProduct(t.id));
    return null != r && t.productLine === v.EZt.COLLECTIBLES && r.type !== c.R.BUNDLE
        ? (0, n.jsx)(d.O, { sku: t })
        : t.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM
          ? (0, n.jsx)(p.e, { containerClassName: a()(I.oC, s), sku: t, shape: "square" })
          : null;
}
function E(e) {
    let t,
        s,
        { sku: n } = e,
        r = (0, u.bG)([o.A], () => o.A.getProduct(n.id));
    return {
        tableLayout:
            ((t = null != r && n.productLine === v.EZt.COLLECTIBLES && r.type !== c.R.BUNDLE),
            (s = n.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM),
            t || s ? "THREE_COLUMN" : "TWO_COLUMN"),
        isSocialLayerGameItem: n.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM,
        product: r,
    };
}
function g(e) {
    let { invoicePreview: t } = e;
    (i()(null != t.total, "SKU must have a price set."),
        i()(null != t.invoiceItems && 1 === t.invoiceItems.length, "SKU preview must have single line item"));
    let s = t.invoiceItems[0],
        n = s.unitPrice?.amount ?? s.amount,
        r = !t.taxInclusive && t.tax > 0,
        a = (function (e) {
            if (null == e.discounts || 0 === e.discounts.length) return null;
            let t = e.discounts[0];
            return 0 === t.amount ? null : t;
        })(s);
    return { showSeparateTotal: n !== t.total, discount: a, basePrice: n, showTaxes: r };
}
