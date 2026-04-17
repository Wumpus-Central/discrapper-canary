"use strict";
n.d(t, { AO: () => A, r$: () => E, yh: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    l = n(575593),
    u = n(311907);
n(397927);
var c = n(590180),
    d = n(14702);
n(735164), n(980094);
var _ = n(366523);
n(773669), n(252424), n(580630);
var f = n(652215);
n(985018);
var p = n(251321);
let h = (e, t) => {
        let n = null != t && e.productLine === f.EZt.COLLECTIBLES && t.type !== l.R.BUNDLE,
            r = e.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    m = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    E = (e) => {
        let { sku: t, slayerProductPreviewClassName: n } = e,
            i = (0, u.bG)([c.A], () => c.A.getProduct(t.id));
        return null != i && t.productLine === f.EZt.COLLECTIBLES && i.type !== l.R.BUNDLE
            ? (0, r.jsx)(d.O, { sku: t, fallbackLabel: null })
            : t.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(_.e, { containerClassName: s()(p.oC, n), sku: t, shape: "square" })
              : null;
    },
    g = (e) => (0, u.bG)([c.A], () => c.A.getProduct(e.id)),
    A = (e) => {
        let { sku: t } = e,
            n = g(t);
        return {
            tableLayout: h(t, n),
            isSocialLayerGameItem: t.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: n,
        };
    },
    I = (e) => {
        let { skuPricePreview: t } = e;
        o()(null != t.amount, "SKU must have a price set."),
            o()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let n = t.invoice_items[0],
            r = n.unit_price.amount,
            i = !t.tax_inclusive && t.tax > 0,
            s = m(n);
        return { showSeparateTotal: r !== t.amount, discount: s, basePrice: r, showTaxes: i };
    };
