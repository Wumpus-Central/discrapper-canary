"use strict";
r.d(t, { AO: () => f, r$: () => m, yh: () => h });
var i = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    o = r(284009),
    s = r.n(o),
    _ = r(575593),
    c = r(17928),
    l = r(590180),
    u = r(14702);
r(735164), r(980094);
var d = r(366523);
r(773669), r(252424), r(580630);
var C = r(652215);
r(985018);
var p = r(251321);
let m = (e) => {
        let { sku: t, slayerProductPreviewClassName: r } = e,
            n = (0, c.bG)([l.A], () => l.A.getProduct(t.id));
        return null != n && t.productLine === C.EZt.COLLECTIBLES && n.type !== _.R.BUNDLE
            ? (0, i.jsx)(u.O, { sku: t })
            : t.productLine === C.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, i.jsx)(d.e, { containerClassName: a()(p.oC, r), sku: t, shape: "square" })
              : null;
    },
    f = (e) => {
        let t,
            r,
            { sku: i } = e,
            n = (0, c.bG)([l.A], () => l.A.getProduct(i.id));
        return {
            tableLayout:
                ((t = null != n && i.productLine === C.EZt.COLLECTIBLES && n.type !== _.R.BUNDLE),
                (r = i.productLine === C.EZt.SOCIAL_LAYER_GAME_ITEM),
                t || r ? "THREE_COLUMN" : "TWO_COLUMN"),
            isSocialLayerGameItem: i.productLine === C.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: n,
        };
    },
    h = (e) => {
        let { skuPricePreview: t } = e;
        s()(null != t.amount, "SKU must have a price set."),
            s()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let r = t.invoice_items[0],
            i = r.unit_price.amount,
            n = !t.tax_inclusive && t.tax > 0,
            a = ((e) => {
                if (null == e.discounts || 0 === e.discounts.length) return null;
                let t = e.discounts[0];
                return 0 === t.amount ? null : t;
            })(r);
        return { showSeparateTotal: i !== t.amount, discount: a, basePrice: i, showTaxes: n };
    };
