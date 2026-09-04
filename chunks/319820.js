t.d(s, { AO: () => L, r$: () => C, yh: () => f });
var n = t(477900);
t(582128);
var r = t(503698),
    a = t.n(r),
    i = t(284009),
    l = t.n(i),
    c = t(575593),
    u = t(17928),
    o = t(590180),
    d = t(14702);
t(735164), t(980094);
var m = t(366523);
t(773669), t(252424), t(580630);
var p = t(652215);
t(375708);
var x = t(799591);
function C(e) {
    let { sku: s, slayerProductPreviewClassName: t } = e,
        r = (0, u.bG)([o.A], () => o.A.getProduct(s.id));
    return null != r && s.productLine === p.EZt.COLLECTIBLES && r.type !== c.R.BUNDLE
        ? (0, n.jsx)(d.O, { sku: s })
        : s.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM
          ? (0, n.jsx)(m.e, { containerClassName: a()(x.oC, t), sku: s, shape: "square" })
          : null;
}
function L(e) {
    let s,
        t,
        { sku: n } = e,
        r = (0, u.bG)([o.A], () => o.A.getProduct(n.id));
    return {
        tableLayout:
            ((s = null != r && n.productLine === p.EZt.COLLECTIBLES && r.type !== c.R.BUNDLE),
            (t = n.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM),
            s || t ? "THREE_COLUMN" : "TWO_COLUMN"),
        isSocialLayerGameItem: n.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM,
        product: r,
    };
}
function f(e) {
    let { invoicePreview: s } = e;
    l()(null != s.total, "SKU must have a price set."),
        l()(null != s.invoiceItems && 1 === s.invoiceItems.length, "SKU preview must have single line item");
    let t = s.invoiceItems[0],
        n = t.unitPrice?.amount ?? t.amount,
        r = !s.taxInclusive && s.tax > 0,
        a = (function (e) {
            if (null == e.discounts || 0 === e.discounts.length) return null;
            let s = e.discounts[0];
            return 0 === s.amount ? null : s;
        })(t);
    return { showSeparateTotal: n !== s.total, discount: a, basePrice: n, showTaxes: r };
}
