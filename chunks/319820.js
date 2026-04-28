t.d(e, { AO: () => _, r$: () => p, yh: () => v });
var i = t(627968);
t(64700);
var l = t(503698),
    n = t.n(l),
    s = t(284009),
    r = t.n(s),
    L = t(575593),
    c = t(17928),
    d = t(590180),
    u = t(14702);
t(735164), t(980094);
var o = t(366523);
t(773669), t(252424), t(580630);
var h = t(652215);
t(985018);
var a = t(251321);
let p = (C) => {
        let { sku: e, slayerProductPreviewClassName: t } = C,
            l = (0, c.bG)([d.A], () => d.A.getProduct(e.id));
        return null != l && e.productLine === h.EZt.COLLECTIBLES && l.type !== L.R.BUNDLE
            ? (0, i.jsx)(u.O, { sku: e })
            : e.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, i.jsx)(o.e, { containerClassName: n()(a.oC, t), sku: e, shape: "square" })
              : null;
    },
    _ = (C) => {
        let e,
            t,
            { sku: i } = C,
            l = (0, c.bG)([d.A], () => d.A.getProduct(i.id));
        return {
            tableLayout:
                ((e = null != l && i.productLine === h.EZt.COLLECTIBLES && l.type !== L.R.BUNDLE),
                (t = i.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM),
                e || t ? "THREE_COLUMN" : "TWO_COLUMN"),
            isSocialLayerGameItem: i.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: l,
        };
    },
    v = (C) => {
        let { skuPricePreview: e } = C;
        r()(null != e.amount, "SKU must have a price set."),
            r()(null != e.invoice_items && 1 === e.invoice_items.length, "SKU preview must have single line item");
        let t = e.invoice_items[0],
            i = t.unit_price.amount,
            l = !e.tax_inclusive && e.tax > 0,
            n = ((C) => {
                if (null == C.discounts || 0 === C.discounts.length) return null;
                let e = C.discounts[0];
                return 0 === e.amount ? null : e;
            })(t);
        return { showSeparateTotal: i !== e.amount, discount: n, basePrice: i, showTaxes: l };
    };
