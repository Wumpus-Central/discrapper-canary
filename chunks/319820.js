s.d(t, { AO: () => C, r$: () => f, yh: () => h });
var n = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    i = s(284009),
    l = s.n(i),
    c = s(575593),
    u = s(17928),
    o = s(590180),
    d = s(456839);
(s(735164), s(980094));
var m = s(366523);
(s(773669), s(252424), s(580630));
var p = s(652215);
s(375708);
var x = s(799591);
function f(e) {
    let { sku: t, slayerProductPreviewClassName: s } = e,
        r = (0, u.bG)([o.A], () => o.A.getProduct(t.id));
    return null != r && t.productLine === p.EZt.COLLECTIBLES && r.type !== c.R.BUNDLE
        ? (0, n.jsx)(d.O, { sku: t })
        : t.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM
          ? (0, n.jsx)(m.e, { containerClassName: a()(x.oC, s), sku: t, shape: "square" })
          : null;
}
function C(e) {
    let t,
        s,
        { sku: n } = e,
        r = (0, u.bG)([o.A], () => o.A.getProduct(n.id));
    return {
        tableLayout:
            ((t = null != r && n.productLine === p.EZt.COLLECTIBLES && r.type !== c.R.BUNDLE),
            (s = n.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM),
            t || s ? "THREE_COLUMN" : "TWO_COLUMN"),
        isSocialLayerGameItem: n.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM,
        product: r,
    };
}
function h(e) {
    let { invoicePreview: t } = e;
    (l()(null != t.total, "SKU must have a price set."),
        l()(null != t.invoiceItems && 1 === t.invoiceItems.length, "SKU preview must have single line item"));
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
