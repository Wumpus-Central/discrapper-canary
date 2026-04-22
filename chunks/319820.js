n.d(t, { AO: () => A, r$: () => m, yh: () => f });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(284009),
    s = n.n(a),
    o = n(575593),
    u = n(311907),
    c = n(590180),
    d = n(14702);
n(735164), n(980094);
var _ = n(366523);
n(773669), n(252424), n(580630);
var p = n(652215);
n(985018);
var h = n(251321);
let m = (e) => {
        let { sku: t, slayerProductPreviewClassName: n } = e,
            l = (0, u.bG)([c.A], () => c.A.getProduct(t.id));
        return null != l && t.productLine === p.EZt.COLLECTIBLES && l.type !== o.R.BUNDLE
            ? (0, r.jsx)(d.O, { sku: t, fallbackLabel: null })
            : t.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(_.e, { containerClassName: i()(h.oC, n), sku: t, shape: "square" })
              : null;
    },
    A = (e) => {
        let t,
            n,
            { sku: r } = e,
            l = (0, u.bG)([c.A], () => c.A.getProduct(r.id));
        return {
            tableLayout:
                ((t = null != l && r.productLine === p.EZt.COLLECTIBLES && l.type !== o.R.BUNDLE),
                (n = r.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM),
                t || n ? "THREE_COLUMN" : "TWO_COLUMN"),
            isSocialLayerGameItem: r.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: l,
        };
    },
    f = (e) => {
        let { skuPricePreview: t } = e;
        s()(null != t.amount, "SKU must have a price set."),
            s()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let n = t.invoice_items[0],
            r = n.unit_price.amount,
            l = !t.tax_inclusive && t.tax > 0,
            i = ((e) => {
                if (null == e.discounts || 0 === e.discounts.length) return null;
                let t = e.discounts[0];
                return 0 === t.amount ? null : t;
            })(n);
        return { showSeparateTotal: r !== t.amount, discount: i, basePrice: r, showTaxes: l };
    };
