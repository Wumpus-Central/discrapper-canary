"use strict";
n.d(t, { AO: () => P, Uw: () => M, hl: () => U, r$: () => L, yh: () => k });
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
    f = n(575926),
    p = n(735164),
    h = n(980094),
    m = n(366523),
    E = n(773669),
    g = n(328968),
    A = n(252424),
    I = n(580630),
    T = n(371794),
    S = n(652215),
    y = n(985018),
    v = n(560120);
let N = (e, t) => {
        let n = null != t && e.productLine === S.EZt.COLLECTIBLES && t.type !== l.R.BUNDLE,
            r = e.productLine === S.EZt.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    C = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    R = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(v.ac, n), children: t });
    },
    O = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(v.KN, n), children: t });
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(v.cP, n), children: t });
    },
    D = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: n, children: t });
    },
    L = (e) => {
        let { sku: t, slayerProductPreviewClassName: n } = e,
            i = (0, u.bG)([d.A], () => d.A.getProduct(t.id)),
            a = (0, u.bG)([g.A], () => g.A.getForSKU(t.id), [t.id]);
        return null != i && t.productLine === S.EZt.COLLECTIBLES && i.type !== l.R.BUNDLE
            ? (0, r.jsx)(_.O, { sku: t, fallbackLabel: null })
            : t.productLine === S.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(m.e, { containerClassName: s()(v.oC, n), sku: t, shape: "square" })
              : t.productLine === S.EZt.APPLICATION && a?.headerBackground != null
                ? (0, r.jsx)("img", {
                      alt: "",
                      src: (0, T.YE)(t.applicationId, a.headerBackground, 64),
                      className: v.go,
                  })
                : t.productLine === S.EZt.GUILD_PRODUCT
                  ? null != a && null != a.thumbnail
                      ? (0, r.jsx)("img", {
                            src: (0, T.YE)(t.applicationId, a.thumbnail, 64),
                            alt: "",
                            className: v.go,
                        })
                      : (0, r.jsx)(f.h, { width: 48, height: 48 })
                  : null;
    },
    w = (e) => {
        let { discount: t } = e,
            n = (0, u.bG)([E.default], () => E.default.locale),
            i = null != t && null != t.percentage_amount ? (0, A.l9)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: v.d8,
            children: (0, r.jsx)(c.Text, { variant: "text-sm/semibold", color: "always-white", children: i }),
        });
    },
    M = (e) => {
        let { sku: t, value: n } = e,
            i = (0, u.bG)([d.A], () => d.A.getProduct(t.id)),
            s = N(t, i);
        return (0, r.jsx)(p.Yx, {
            className: v.S,
            children: (0, r.jsxs)(R, {
                children: [
                    "THREE_COLUMN" === s && (0, r.jsx)(O, { children: (0, r.jsx)(L, { sku: t }) }),
                    (0, r.jsx)(b, { className: v.Hi, children: t.name }),
                    (0, r.jsx)(D, { className: v.Hi, children: n }),
                ],
            }),
        });
    },
    x = (e) => (0, u.bG)([d.A], () => d.A.getProduct(e.id)),
    P = (e) => {
        let { sku: t } = e,
            n = x(t);
        return {
            tableLayout: N(t, n),
            isSocialLayerGameItem: t.productLine === S.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: n,
        };
    },
    k = (e) => {
        let { skuPricePreview: t } = e;
        o()(null != t.amount, "SKU must have a price set."),
            o()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let n = t.invoice_items[0],
            r = n.unit_price.amount,
            i = !t.tax_inclusive && t.tax > 0,
            s = C(n);
        return { showSeparateTotal: r !== t.amount, discount: s, basePrice: r, showTaxes: i };
    };
function U(e) {
    let { sku: t, skuPricePreview: n, application: i } = e,
        { tableLayout: s, isSocialLayerGameItem: a } = P({ sku: t }),
        { showSeparateTotal: o, discount: l, basePrice: u, showTaxes: d } = k({ skuPricePreview: n });
    return (0, r.jsxs)(p.Yx, {
        className: v.S,
        children: [
            (0, r.jsxs)(R, {
                children: [
                    "THREE_COLUMN" === s && (0, r.jsx)(O, { children: (0, r.jsx)(L, { sku: t }) }),
                    (0, r.jsxs)(b, {
                        className: v.Hi,
                        children: [
                            a && (0, r.jsx)(h.Q, { application: i }),
                            (0, r.jsx)(c.Text, { variant: "text-sm/semibold", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)(D, { className: v.Hi, children: (0, I.$g)(u, n.currency) }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(R, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(O, { children: (0, r.jsx)(w, { discount: l }) }),
                        (0, r.jsx)(b, { className: v.ys, children: l.description }),
                        (0, r.jsx)(D, { className: v.ys, children: (0, I.$g)(-1 * l.amount, n.currency) }),
                    ],
                }),
            d &&
                (0, r.jsxs)(R, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(O, {}),
                        (0, r.jsx)(b, { className: v.Hi, children: y.intl.string(y.t["/I8zmP"]) }),
                        (0, r.jsx)(D, { className: v.Hi, children: (0, I.$g)(n.tax, n.currency) }),
                    ],
                }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.pK, {}),
                        (0, r.jsxs)(R, {
                            className: v.V$,
                            children: [
                                (0, r.jsx)(O, { className: v.Hi, children: y.intl.format(y.t["+B5KfG"], {}) }),
                                "THREE_COLUMN" === s && (0, r.jsx)(b, {}),
                                (0, r.jsx)(D, { className: v.Hi, children: (0, I.$g)(n.amount, n.currency) }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
