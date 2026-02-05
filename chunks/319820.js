"use strict";
n.d(t, { U: () => L, h: () => w });
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
    p = n(735164),
    h = n(980094),
    m = n(366523),
    g = n(773669),
    E = n(252424),
    A = n(580630),
    I = n(652215),
    T = n(985018),
    y = n(991198);
let S = (e, t) => {
        let n = null != t && e.productLine === I.EZt.COLLECTIBLES && t.type !== u.R.BUNDLE,
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
        return (0, r.jsx)("div", { className: s()(y.ac, n), children: t });
    },
    b = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(y.KN, n), children: t });
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(y.cP, n), children: t });
    },
    R = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: n, children: t });
    },
    O = (e) => {
        let { sku: t } = e,
            n = (0, c.bG)([_.A], () => _.A.getProduct(t.id));
        return null != n && t.productLine === I.EZt.COLLECTIBLES && n.type !== u.R.BUNDLE
            ? (0, r.jsx)(f.O, { sku: t, fallbackLabel: null })
            : t.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(m.e, { containerClassName: y.oC, sku: t, shape: "square" })
              : null;
    },
    D = (e) => {
        let { discount: t } = e,
            n = (0, c.bG)([g.default], () => g.default.locale),
            i = null != t && null != t.percentage_amount ? (0, E.l9)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: y.d8,
            children: (0, r.jsx)(d.Text, { variant: "text-sm/semibold", color: "always-white", children: i }),
        });
    },
    L = (e) => {
        let { sku: t, value: n, rentalDuration: a } = e,
            s = (0, c.bG)([_.A], () => _.A.getProduct(t.id)),
            o = (0, c.bG)([g.default], () => g.default.locale),
            l = S(t, s),
            u = i.useMemo(() => {
                if (null == a) return null;
                let e = new Date();
                return (
                    e.setDate(e.getDate() + a),
                    e.toLocaleDateString(o, { day: "numeric", month: "long", year: "numeric" })
                );
            }, [a, o]);
        return (0, r.jsx)(p.Yx, {
            className: y.S,
            children: (0, r.jsxs)(C, {
                children: [
                    "THREE_COLUMN" === l && (0, r.jsx)(b, { children: (0, r.jsx)(O, { sku: t }) }),
                    (0, r.jsxs)(N, {
                        className: y.Hi,
                        children: [
                            t.name,
                            null != u &&
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: y.TU,
                                    children: T.intl.format(T.t["es/G6j"], { date: u }),
                                }),
                        ],
                    }),
                    (0, r.jsx)(R, { className: y.Hi, children: n }),
                ],
            }),
        });
    };
function w(e) {
    let { sku: t, skuPricePreview: n, application: i } = e;
    l()(null != n.amount, "SKU must have a price set."),
        l()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
    let a = (0, c.bG)([_.A], () => _.A.getProduct(t.id)),
        s = S(t, a),
        o = n.invoice_items[0],
        u = o.unit_price.amount,
        f = !n.tax_inclusive && n.tax > 0,
        m = v(o),
        g = u !== n.amount,
        E = t.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM;
    return (0, r.jsxs)(p.Yx, {
        className: y.S,
        children: [
            (0, r.jsxs)(C, {
                children: [
                    "THREE_COLUMN" === s && (0, r.jsx)(b, { children: (0, r.jsx)(O, { sku: t }) }),
                    (0, r.jsxs)(N, {
                        className: y.Hi,
                        children: [
                            E && (0, r.jsx)(h.Q, { application: i }),
                            (0, r.jsx)(d.Text, { variant: "text-sm/semibold", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)(R, { className: y.Hi, children: (0, A.$g)(u, n.currency) }),
                ],
            }),
            null != m &&
                (0, r.jsxs)(C, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(b, { children: (0, r.jsx)(D, { discount: m }) }),
                        (0, r.jsx)(N, { className: y.ys, children: m.description }),
                        (0, r.jsx)(R, { className: y.ys, children: (0, A.$g)(-1 * m.amount, n.currency) }),
                    ],
                }),
            f &&
                (0, r.jsxs)(C, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(b, {}),
                        (0, r.jsx)(N, { className: y.Hi, children: T.intl.string(T.t["/I8zmP"]) }),
                        (0, r.jsx)(R, { className: y.Hi, children: (0, A.$g)(n.tax, n.currency) }),
                    ],
                }),
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.pK, {}),
                        (0, r.jsxs)(C, {
                            className: y.V$,
                            children: [
                                (0, r.jsx)(b, { className: y.Hi, children: T.intl.format(T.t["+B5KfG"], {}) }),
                                "THREE_COLUMN" === s && (0, r.jsx)(N, {}),
                                (0, r.jsx)(R, { className: y.Hi, children: (0, A.$g)(n.amount, n.currency) }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
