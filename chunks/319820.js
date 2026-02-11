"use strict";
n.d(t, { Uw: () => w, hl: () => k });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(575593),
    c = n(311907),
    d = n(397927),
    _ = n(590180),
    f = n(14702),
    h = n(735164),
    p = n(980094),
    g = n(366523),
    E = n(773669),
    A = n(252424),
    I = n(580630),
    T = n(652215),
    y = n(985018),
    S = n(991198);
let v = (e, t) => {
        let n = null != t && e.productLine === T.EZt.COLLECTIBLES && t.type !== u.R.BUNDLE,
            r = e.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    C = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(S.ac, n), children: t });
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(S.KN, n), children: t });
    },
    R = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(S.cP, n), children: t });
    },
    O = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: n, children: t });
    },
    D = (e) => {
        let { sku: t } = e,
            n = (0, c.bG)([_.A], () => _.A.getProduct(t.id));
        return null != n && t.productLine === T.EZt.COLLECTIBLES && n.type !== u.R.BUNDLE
            ? (0, r.jsx)(f.O, { sku: t, fallbackLabel: null })
            : t.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(g.e, { containerClassName: S.oC, sku: t, shape: "square" })
              : null;
    },
    L = (e) => {
        let { discount: t } = e,
            n = (0, c.bG)([E.default], () => E.default.locale),
            i = null != t && null != t.percentage_amount ? (0, A.l9)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: S.d8,
            children: (0, r.jsx)(d.Text, { variant: "text-sm/semibold", color: "always-white", children: i }),
        });
    },
    w = (e) => {
        let { sku: t, value: n, rentalDuration: a } = e,
            s = (0, c.bG)([_.A], () => _.A.getProduct(t.id)),
            o = (0, c.bG)([E.default], () => E.default.locale),
            l = v(t, s),
            u = i.useMemo(() => {
                if (null == a) return null;
                let e = new Date();
                return (
                    e.setDate(e.getDate() + a),
                    e.toLocaleDateString(o, { day: "numeric", month: "long", year: "numeric" })
                );
            }, [a, o]);
        return (0, r.jsx)(h.Yx, {
            className: S.S,
            children: (0, r.jsxs)(b, {
                children: [
                    "THREE_COLUMN" === l && (0, r.jsx)(N, { children: (0, r.jsx)(D, { sku: t }) }),
                    (0, r.jsxs)(R, {
                        className: S.Hi,
                        children: [
                            t.name,
                            null != u &&
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: S.TU,
                                    children: y.intl.format(y.t["es/G6j"], { date: u }),
                                }),
                        ],
                    }),
                    (0, r.jsx)(O, { className: S.Hi, children: n }),
                ],
            }),
        });
    },
    x = (e) => (0, c.bG)([_.A], () => _.A.getProduct(e.id)),
    P = (e) => {
        let { sku: t } = e,
            n = x(t);
        return {
            tableLayout: v(t, n),
            isSocialLayerGameItem: t.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM,
            product: n,
        };
    },
    M = (e) => {
        let { skuPricePreview: t } = e;
        l()(null != t.amount, "SKU must have a price set."),
            l()(null != t.invoice_items && 1 === t.invoice_items.length, "SKU preview must have single line item");
        let n = t.invoice_items[0],
            r = n.unit_price.amount,
            i = !t.tax_inclusive && t.tax > 0,
            a = C(n);
        return { showSeparateTotal: r !== t.amount, discount: a, basePrice: r, showTaxes: i };
    };
function k(e) {
    let { sku: t, skuPricePreview: n, application: i } = e,
        { tableLayout: a, isSocialLayerGameItem: s } = P({ sku: t }),
        { showSeparateTotal: o, discount: l, basePrice: u, showTaxes: c } = M({ skuPricePreview: n });
    return (0, r.jsxs)(h.Yx, {
        className: S.S,
        children: [
            (0, r.jsxs)(b, {
                children: [
                    "THREE_COLUMN" === a && (0, r.jsx)(N, { children: (0, r.jsx)(D, { sku: t }) }),
                    (0, r.jsxs)(R, {
                        className: S.Hi,
                        children: [
                            s && (0, r.jsx)(p.Q, { application: i }),
                            (0, r.jsx)(d.Text, { variant: "text-sm/semibold", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)(O, { className: S.Hi, children: (0, I.$g)(u, n.currency) }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(b, {
                    children: [
                        "THREE_COLUMN" === a && (0, r.jsx)(N, { children: (0, r.jsx)(L, { discount: l }) }),
                        (0, r.jsx)(R, { className: S.ys, children: l.description }),
                        (0, r.jsx)(O, { className: S.ys, children: (0, I.$g)(-1 * l.amount, n.currency) }),
                    ],
                }),
            c &&
                (0, r.jsxs)(b, {
                    children: [
                        "THREE_COLUMN" === a && (0, r.jsx)(N, {}),
                        (0, r.jsx)(R, { className: S.Hi, children: y.intl.string(y.t["/I8zmP"]) }),
                        (0, r.jsx)(O, { className: S.Hi, children: (0, I.$g)(n.tax, n.currency) }),
                    ],
                }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.pK, {}),
                        (0, r.jsxs)(b, {
                            className: S.V$,
                            children: [
                                (0, r.jsx)(N, { className: S.Hi, children: y.intl.format(y.t["+B5KfG"], {}) }),
                                "THREE_COLUMN" === a && (0, r.jsx)(R, {}),
                                (0, r.jsx)(O, { className: S.Hi, children: (0, I.$g)(n.amount, n.currency) }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
