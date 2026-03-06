"use strict";
n.d(t, { AO: () => x, Uw: () => w, hl: () => k, r$: () => D, yh: () => P });
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
    E = n(328968),
    g = n(252424),
    A = n(580630),
    I = n(371794),
    T = n(652215),
    S = n(985018),
    y = n(560120);
let v = (e, t) => {
        let n = null != t && e.productLine === T.EZt.COLLECTIBLES && t.type !== l.R.BUNDLE,
            r = e.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    N = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(y.ac, n), children: t });
    },
    R = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(y.KN, n), children: t });
    },
    O = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(y.cP, n), children: t });
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: n, children: t });
    },
    D = (e) => {
        let { sku: t, slayerProductPreviewClassName: n } = e,
            i = (0, u.bG)([d.A], () => d.A.getProduct(t.id)),
            a = (0, u.bG)([E.A], () => E.A.getForSKU(t.id), [t.id]);
        return null != i && t.productLine === T.EZt.COLLECTIBLES && i.type !== l.R.BUNDLE
            ? (0, r.jsx)(_.O, { sku: t, fallbackLabel: null })
            : t.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(h.e, { containerClassName: s()(y.oC, n), sku: t, shape: "square" })
              : t.productLine === T.EZt.APPLICATION && a?.headerBackground != null
                ? (0, r.jsx)("img", {
                      alt: "",
                      src: (0, I.YE)(t.applicationId, a.headerBackground, 64),
                      className: y.e2,
                  })
                : null;
    },
    L = (e) => {
        let { discount: t } = e,
            n = (0, u.bG)([m.default], () => m.default.locale),
            i = null != t && null != t.percentage_amount ? (0, g.l9)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: y.d8,
            children: (0, r.jsx)(c.Text, { variant: "text-sm/semibold", color: "always-white", children: i }),
        });
    },
    w = (e) => {
        let { sku: t, value: n } = e,
            i = (0, u.bG)([d.A], () => d.A.getProduct(t.id)),
            s = v(t, i);
        return (0, r.jsx)(f.Yx, {
            className: y.S,
            children: (0, r.jsxs)(C, {
                children: [
                    "THREE_COLUMN" === s && (0, r.jsx)(R, { children: (0, r.jsx)(D, { sku: t }) }),
                    (0, r.jsx)(O, { className: y.Hi, children: t.name }),
                    (0, r.jsx)(b, { className: y.Hi, children: n }),
                ],
            }),
        });
    },
    M = (e) => (0, u.bG)([d.A], () => d.A.getProduct(e.id)),
    x = (e) => {
        let { sku: t } = e,
            n = M(t);
        return {
            tableLayout: v(t, n),
            isSocialLayerGameItem: t.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM,
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
            s = N(n);
        return { showSeparateTotal: r !== t.amount, discount: s, basePrice: r, showTaxes: i };
    };
function k(e) {
    let { sku: t, skuPricePreview: n, application: i } = e,
        { tableLayout: s, isSocialLayerGameItem: a } = x({ sku: t }),
        { showSeparateTotal: o, discount: l, basePrice: u, showTaxes: d } = P({ skuPricePreview: n });
    return (0, r.jsxs)(f.Yx, {
        className: y.S,
        children: [
            (0, r.jsxs)(C, {
                children: [
                    "THREE_COLUMN" === s && (0, r.jsx)(R, { children: (0, r.jsx)(D, { sku: t }) }),
                    (0, r.jsxs)(O, {
                        className: y.Hi,
                        children: [
                            a && (0, r.jsx)(p.Q, { application: i }),
                            (0, r.jsx)(c.Text, { variant: "text-sm/semibold", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)(b, { className: y.Hi, children: (0, A.$g)(u, n.currency) }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(C, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(R, { children: (0, r.jsx)(L, { discount: l }) }),
                        (0, r.jsx)(O, { className: y.ys, children: l.description }),
                        (0, r.jsx)(b, { className: y.ys, children: (0, A.$g)(-1 * l.amount, n.currency) }),
                    ],
                }),
            d &&
                (0, r.jsxs)(C, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(R, {}),
                        (0, r.jsx)(O, { className: y.Hi, children: S.intl.string(S.t["/I8zmP"]) }),
                        (0, r.jsx)(b, { className: y.Hi, children: (0, A.$g)(n.tax, n.currency) }),
                    ],
                }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.pK, {}),
                        (0, r.jsxs)(C, {
                            className: y.V$,
                            children: [
                                (0, r.jsx)(R, { className: y.Hi, children: S.intl.format(S.t["+B5KfG"], {}) }),
                                "THREE_COLUMN" === s && (0, r.jsx)(O, {}),
                                (0, r.jsx)(b, { className: y.Hi, children: (0, A.$g)(n.amount, n.currency) }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
