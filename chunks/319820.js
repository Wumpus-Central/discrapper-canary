n.d(t, { AO: () => b, r$: () => g, yh: () => v });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(284009),
    s = n.n(i),
    u = n(575593),
    o = n(17928),
    c = n(590180),
    d = n(456839);
n(735164), n(980094);
var m = n(366523);
n(773669), n(252424), n(580630);
var f = n(652215);
n(375708);
var p = n(251321);
let g = (e) => {
        let { sku: t, slayerProductPreviewClassName: n } = e,
            r = (0, o.bG)([c.A], () => c.A.getProduct(t.id));
        return null != r && t.productLine === f.EZt.COLLECTIBLES && r.type !== u.R.BUNDLE
            ? (0, a.jsx)(d.O, { sku: t })
            : t.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, a.jsx)(m.e, { containerClassName: l()(p.oC, n), sku: t, shape: "square" })
              : null;
    },
    b = (e) => {
        let t,
            n,
            { sku: a } = e,
            r = (0, o.bG)([c.A], () => c.A.getProduct(a.id));
        return {
            tableLayout:
                ((t = null != r && a.productLine === f.EZt.COLLECTIBLES && r.type !== u.R.BUNDLE),
                (n = a.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM),
                t || n ? "THREE_COLUMN" : "TWO_COLUMN"),
            isSocialLayerGameItem: a.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: r,
        };
    },
    v = (e) => {
        let { invoicePreview: t } = e;
        s()(null != t.total, "SKU must have a price set."),
            s()(null != t.invoiceItems && 1 === t.invoiceItems.length, "SKU preview must have single line item");
        let n = t.invoiceItems[0],
            a = n.unitPrice?.amount ?? n.amount,
            r = !t.taxInclusive && t.tax > 0,
            l = ((e) => {
                if (null == e.discounts || 0 === e.discounts.length) return null;
                let t = e.discounts[0];
                return 0 === t.amount ? null : t;
            })(n);
        return { showSeparateTotal: a !== t.total, discount: l, basePrice: a, showTaxes: r };
    };
