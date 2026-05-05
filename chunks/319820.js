l.d(t, { AO: () => p, r$: () => f, yh: () => g });
var n = l(627968);
l(64700);
var r = l(503698),
    a = l.n(r),
    i = l(284009),
    s = l.n(i),
    u = l(575593),
    c = l(17928),
    o = l(590180),
    d = l(14702);
l(735164), l(980094);
var m = l(366523);
l(773669), l(252424), l(580630);
var x = l(652215);
l(375708);
var h = l(251321);
let f = (e) => {
        let { sku: t, slayerProductPreviewClassName: l } = e,
            r = (0, c.bG)([o.A], () => o.A.getProduct(t.id));
        return null != r && t.productLine === x.EZt.COLLECTIBLES && r.type !== u.R.BUNDLE
            ? (0, n.jsx)(d.O, { sku: t })
            : t.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, n.jsx)(m.e, { containerClassName: a()(h.oC, l), sku: t, shape: "square" })
              : null;
    },
    p = (e) => {
        let t,
            l,
            { sku: n } = e,
            r = (0, c.bG)([o.A], () => o.A.getProduct(n.id));
        return {
            tableLayout:
                ((t = null != r && n.productLine === x.EZt.COLLECTIBLES && r.type !== u.R.BUNDLE),
                (l = n.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM),
                t || l ? "THREE_COLUMN" : "TWO_COLUMN"),
            isSocialLayerGameItem: n.productLine === x.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: r,
        };
    },
    g = (e) => {
        let { invoicePreview: t } = e;
        s()(null != t.total, "SKU must have a price set."),
            s()(null != t.invoiceItems && 1 === t.invoiceItems.length, "SKU preview must have single line item");
        let l = t.invoiceItems[0],
            n = l.unitPrice?.amount ?? l.amount,
            r = !t.taxInclusive && t.tax > 0,
            a = ((e) => {
                if (null == e.discounts || 0 === e.discounts.length) return null;
                let t = e.discounts[0];
                return 0 === t.amount ? null : t;
            })(l);
        return { showSeparateTotal: n !== t.total, discount: a, basePrice: n, showTaxes: r };
    };
