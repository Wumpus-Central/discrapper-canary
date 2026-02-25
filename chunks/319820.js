"use strict";
n.d(t, { AO: () => w, Uw: () => D, hl: () => M, r$: () => R, yh: () => x });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    l = n(575593),
    u = n(311907),
    c = n(397927),
    d = n(590180),
    _ = n(14702),
    f = n(735164),
    p = n(980094),
    h = n(366523),
    m = n(773669),
    E = n(252424),
    g = n(580630),
    A = n(652215),
    I = n(985018),
    T = n(560120);
let S = (e, t) => {
        let n = null != t && e.productLine === A.EZt.COLLECTIBLES && t.type !== l.R.BUNDLE,
            r = e.productLine === A.EZt.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    y = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    v = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(T.ac, n), children: t });
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(T.KN, n), children: t });
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(T.cP, n), children: t });
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: n, children: t });
    },
    R = (e) => {
        let { sku: t, slayerProductPreviewClassName: n } = e,
            i = (0, u.bG)([d.A], () => d.A.getProduct(t.id));
        return null != i && t.productLine === A.EZt.COLLECTIBLES && i.type !== l.R.BUNDLE
            ? (0, r.jsx)(_.O, { sku: t, fallbackLabel: null })
            : t.productLine === A.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(h.e, { containerClassName: s()(T.oC, n), sku: t, shape: "square" })
              : null;
    },
    O = (e) => {
        let { discount: t } = e,
            n = (0, u.bG)([m.default], () => m.default.locale),
            i = null != t && null != t.percentage_amount ? (0, E.l9)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: T.d8,
            children: (0, r.jsx)(c.Text, { variant: "text-sm/semibold", color: "always-white", children: i }),
        });
    },
    D = (e) => {
        let { sku: t, value: n } = e,
            i = (0, u.bG)([d.A], () => d.A.getProduct(t.id)),
            s = S(t, i);
        return (0, r.jsx)(f.Yx, {
            className: T.S,
            children: (0, r.jsxs)(v, {
                children: [
                    "THREE_COLUMN" === s && (0, r.jsx)(N, { children: (0, r.jsx)(R, { sku: t }) }),
                    (0, r.jsx)(C, { className: T.Hi, children: t.name }),
                    (0, r.jsx)(b, { className: T.Hi, children: n }),
                ],
            }),
        });
    },
    L = (e) => (0, u.bG)([d.A], () => d.A.getProduct(e.id)),
    w = (e) => {
        let { sku: t } = e,
            n = L(t);
        return {
            tableLayout: S(t, n),
            isSocialLayerGameItem: t.productLine === A.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: n,
        };
    },
    x = (e) => {
        let { skuPricePreview: t } = e;
        o()(null != t.amount, "SKU must have a price set."),
            o()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let n = t.invoice_items[0],
            r = n.unit_price.amount,
            i = !t.tax_inclusive && t.tax > 0,
            s = y(n);
        return { showSeparateTotal: r !== t.amount, discount: s, basePrice: r, showTaxes: i };
    };
function M(e) {
    let { sku: t, skuPricePreview: n, application: i } = e,
        { tableLayout: s, isSocialLayerGameItem: a } = w({ sku: t }),
        { showSeparateTotal: o, discount: l, basePrice: u, showTaxes: d } = x({ skuPricePreview: n });
    return (0, r.jsxs)(f.Yx, {
        className: T.S,
        children: [
            (0, r.jsxs)(v, {
                children: [
                    "THREE_COLUMN" === s && (0, r.jsx)(N, { children: (0, r.jsx)(R, { sku: t }) }),
                    (0, r.jsxs)(C, {
                        className: T.Hi,
                        children: [
                            a && (0, r.jsx)(p.Q, { application: i }),
                            (0, r.jsx)(c.Text, { variant: "text-sm/semibold", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)(b, { className: T.Hi, children: (0, g.$g)(u, n.currency) }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(v, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(N, { children: (0, r.jsx)(O, { discount: l }) }),
                        (0, r.jsx)(C, { className: T.ys, children: l.description }),
                        (0, r.jsx)(b, { className: T.ys, children: (0, g.$g)(-1 * l.amount, n.currency) }),
                    ],
                }),
            d &&
                (0, r.jsxs)(v, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(N, {}),
                        (0, r.jsx)(C, { className: T.Hi, children: I.intl.string(I.t["/I8zmP"]) }),
                        (0, r.jsx)(b, { className: T.Hi, children: (0, g.$g)(n.tax, n.currency) }),
                    ],
                }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.pK, {}),
                        (0, r.jsxs)(v, {
                            className: T.V$,
                            children: [
                                (0, r.jsx)(N, { className: T.Hi, children: I.intl.format(I.t["+B5KfG"], {}) }),
                                "THREE_COLUMN" === s && (0, r.jsx)(C, {}),
                                (0, r.jsx)(b, { className: T.Hi, children: (0, g.$g)(n.amount, n.currency) }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
