"use strict";
n.d(t, { AO: () => E, r$: () => p, yh: () => m });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    l = n(575593),
    u = n(17928),
    c = n(590180),
    d = n(456839);
n(735164), n(980094);
var _ = n(366523);
n(773669), n(252424), n(580630);
var h = n(652215);
n(375708);
var f = n(251321);
let p = (e) => {
        let { sku: t, slayerProductPreviewClassName: n } = e,
            r = (0, u.bG)([c.A], () => c.A.getProduct(t.id));
        return null != r && t.productLine === h.EZt.COLLECTIBLES && r.type !== l.R.BUNDLE
            ? (0, i.jsx)(d.O, { sku: t })
            : t.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, i.jsx)(_.e, { containerClassName: s()(f.oC, n), sku: t, shape: "square" })
              : null;
    },
    E = (e) => {
        let t,
            n,
            { sku: i } = e,
            r = (0, u.bG)([c.A], () => c.A.getProduct(i.id));
        return {
            tableLayout:
                ((t = null != r && i.productLine === h.EZt.COLLECTIBLES && r.type !== l.R.BUNDLE),
                (n = i.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM),
                t || n ? "THREE_COLUMN" : "TWO_COLUMN"),
            isSocialLayerGameItem: i.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: r,
        };
    },
    m = (e) => {
        let { invoicePreview: t } = e;
        o()(null != t.total, "SKU must have a price set."),
            o()(null != t.invoiceItems && 1 === t.invoiceItems.length, "SKU preview must have single line item");
        let n = t.invoiceItems[0],
            i = n.unitPrice?.amount ?? n.amount,
            r = !t.taxInclusive && t.tax > 0,
            s = ((e) => {
                if (null == e.discounts || 0 === e.discounts.length) return null;
                let t = e.discounts[0];
                return 0 === t.amount ? null : t;
            })(n);
        return { showSeparateTotal: i !== t.total, discount: s, basePrice: i, showTaxes: r };
    };
