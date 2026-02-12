"use strict";
n.d(t, { AO: () => x, Uw: () => L, hl: () => M, r$: () => O, yh: () => P });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    l = n(575593),
    u = n(311907),
    c = n(397927),
    d = n(590180),
    _ = n(14702),
    f = n(735164),
    h = n(980094),
    p = n(366523),
    g = n(773669),
    E = n(252424),
    A = n(580630),
    I = n(652215),
    T = n(985018),
    y = n(991198);
let S = (e, t) => {
        let n = null != t && e.productLine === I.EZt.COLLECTIBLES && t.type !== l.R.BUNDLE,
            r = e.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    v = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: a()(y.ac, n), children: t });
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: a()(y.KN, n), children: t });
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: a()(y.cP, n), children: t });
    },
    R = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: n, children: t });
    },
    O = (e) => {
        let { sku: t } = e,
            n = (0, u.bG)([d.A], () => d.A.getProduct(t.id));
        return null != n && t.productLine === I.EZt.COLLECTIBLES && n.type !== l.R.BUNDLE
            ? (0, r.jsx)(_.O, { sku: t, fallbackLabel: null })
            : t.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(p.e, { containerClassName: y.oC, sku: t, shape: "square" })
              : null;
    },
    D = (e) => {
        let { discount: t } = e,
            n = (0, u.bG)([g.default], () => g.default.locale),
            i = null != t && null != t.percentage_amount ? (0, E.l9)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: y.d8,
            children: (0, r.jsx)(c.Text, { variant: "text-sm/semibold", color: "always-white", children: i }),
        });
    },
    L = (e) => {
        let { sku: t, value: n } = e,
            i = (0, u.bG)([d.A], () => d.A.getProduct(t.id)),
            a = S(t, i);
        return (0, r.jsx)(f.Yx, {
            className: y.S,
            children: (0, r.jsxs)(C, {
                children: [
                    "THREE_COLUMN" === a && (0, r.jsx)(b, { children: (0, r.jsx)(O, { sku: t }) }),
                    (0, r.jsx)(N, { className: y.Hi, children: t.name }),
                    (0, r.jsx)(R, { className: y.Hi, children: n }),
                ],
            }),
        });
    },
    w = (e) => (0, u.bG)([d.A], () => d.A.getProduct(e.id)),
    x = (e) => {
        let { sku: t } = e,
            n = w(t);
        return {
            tableLayout: S(t, n),
            isSocialLayerGameItem: t.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: n,
        };
    },
    P = (e) => {
        let { skuPricePreview: t } = e;
        o()(null != t.amount, "SKU must have a price set."),
            o()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let n = t.invoice_items[0],
            r = n.unit_price.amount,
            i = !t.tax_inclusive && t.tax > 0,
            a = v(n);
        return { showSeparateTotal: r !== t.amount, discount: a, basePrice: r, showTaxes: i };
    };
function M(e) {
    let { sku: t, skuPricePreview: n, application: i } = e,
        { tableLayout: a, isSocialLayerGameItem: s } = x({ sku: t }),
        { showSeparateTotal: o, discount: l, basePrice: u, showTaxes: d } = P({ skuPricePreview: n });
    return (0, r.jsxs)(f.Yx, {
        className: y.S,
        children: [
            (0, r.jsxs)(C, {
                children: [
                    "THREE_COLUMN" === a && (0, r.jsx)(b, { children: (0, r.jsx)(O, { sku: t }) }),
                    (0, r.jsxs)(N, {
                        className: y.Hi,
                        children: [
                            s && (0, r.jsx)(h.Q, { application: i }),
                            (0, r.jsx)(c.Text, { variant: "text-sm/semibold", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)(R, { className: y.Hi, children: (0, A.$g)(u, n.currency) }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(C, {
                    children: [
                        "THREE_COLUMN" === a && (0, r.jsx)(b, { children: (0, r.jsx)(D, { discount: l }) }),
                        (0, r.jsx)(N, { className: y.ys, children: l.description }),
                        (0, r.jsx)(R, { className: y.ys, children: (0, A.$g)(-1 * l.amount, n.currency) }),
                    ],
                }),
            d &&
                (0, r.jsxs)(C, {
                    children: [
                        "THREE_COLUMN" === a && (0, r.jsx)(b, {}),
                        (0, r.jsx)(N, { className: y.Hi, children: T.intl.string(T.t["/I8zmP"]) }),
                        (0, r.jsx)(R, { className: y.Hi, children: (0, A.$g)(n.tax, n.currency) }),
                    ],
                }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.pK, {}),
                        (0, r.jsxs)(C, {
                            className: y.V$,
                            children: [
                                (0, r.jsx)(b, { className: y.Hi, children: T.intl.format(T.t["+B5KfG"], {}) }),
                                "THREE_COLUMN" === a && (0, r.jsx)(N, {}),
                                (0, r.jsx)(R, { className: y.Hi, children: (0, A.$g)(n.amount, n.currency) }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
