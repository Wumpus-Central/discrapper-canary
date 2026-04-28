s.d(t, { AO: () => m, r$: () => g, yh: () => v });
var l = s(627968);
s(64700);
var n = s(503698),
    i = s.n(n),
    a = s(284009),
    r = s.n(a),
    c = s(575593),
    u = s(17928),
    d = s(590180),
    o = s(14702);
s(735164), s(980094);
var A = s(366523);
s(773669), s(252424), s(580630);
var h = s(652215);
s(985018);
var p = s(251321);
let g = (e) => {
        let { sku: t, slayerProductPreviewClassName: s } = e,
            n = (0, u.bG)([d.A], () => d.A.getProduct(t.id));
        return null != n && t.productLine === h.EZt.COLLECTIBLES && n.type !== c.R.BUNDLE
            ? (0, l.jsx)(o.O, { sku: t })
            : t.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, l.jsx)(A.e, { containerClassName: i()(p.oC, s), sku: t, shape: "square" })
              : null;
    },
    m = (e) => {
        let t,
            s,
            { sku: l } = e,
            n = (0, u.bG)([d.A], () => d.A.getProduct(l.id));
        return {
            tableLayout:
                ((t = null != n && l.productLine === h.EZt.COLLECTIBLES && n.type !== c.R.BUNDLE),
                (s = l.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM),
                t || s ? "THREE_COLUMN" : "TWO_COLUMN"),
            isSocialLayerGameItem: l.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: n,
        };
    },
    v = (e) => {
        let { skuPricePreview: t } = e;
        r()(null != t.amount, "SKU must have a price set."),
            r()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let s = t.invoice_items[0],
            l = s.unit_price.amount,
            n = !t.tax_inclusive && t.tax > 0,
            i = ((e) => {
                if (null == e.discounts || 0 === e.discounts.length) return null;
                let t = e.discounts[0];
                return 0 === t.amount ? null : t;
            })(s);
        return { showSeparateTotal: l !== t.amount, discount: i, basePrice: l, showTaxes: n };
    };
