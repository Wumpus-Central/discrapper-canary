n.d(t, {
    U: () => P,
    h: () => D,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(575593),
    u = n(311907),
    d = n(397927),
    f = n(590180),
    p = n(14702),
    _ = n(735164),
    h = n(980094),
    m = n(366523),
    g = n(773669),
    E = n(252424),
    b = n(580630),
    y = n(652215),
    O = n(985018),
    A = n(991198);
let v = (e, t) => {
        let n = null != t && e.productLine === y.EZt.COLLECTIBLES && t.type !== c.R.BUNDLE,
            r = e.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    S = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    I = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: s()(A.ac, n),
            children: t,
        });
    },
    T = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: s()(A.KN, n),
            children: t,
        });
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: s()(A.cP, n),
            children: t,
        });
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: n,
            children: t,
        });
    },
    R = (e) => {
        let { sku: t } = e,
            n = (0, u.bG)([f.A], () => f.A.getProduct(t.id));
        return null != n && t.productLine === y.EZt.COLLECTIBLES && n.type !== c.R.BUNDLE
            ? (0, r.jsx)(p.O, {
                  sku: t,
                  fallbackLabel: null,
              })
            : t.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(m.e, {
                    containerClassName: A.oC,
                    sku: t,
                    shape: "square",
                })
              : null;
    },
    w = (e) => {
        let { discount: t } = e,
            n = (0, u.bG)([g.default], () => g.default.locale),
            i = null != t && null != t.percentage_amount ? (0, E.l9)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: A.d8,
            children: (0, r.jsx)(d.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: i,
            }),
        });
    },
    P = (e) => {
        let { sku: t, value: n, rentalDuration: a } = e,
            s = (0, u.bG)([f.A], () => f.A.getProduct(t.id)),
            o = (0, u.bG)([g.default], () => g.default.locale),
            l = v(t, s),
            c = i.useMemo(() => {
                if (null == a) return null;
                let e = new Date();
                return (
                    e.setDate(e.getDate() + a),
                    e.toLocaleDateString(o, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })
                );
            }, [a, o]);
        return (0, r.jsx)(_.Yx, {
            className: A.S,
            children: (0, r.jsxs)(I, {
                children: [
                    "THREE_COLUMN" === l &&
                        (0, r.jsx)(T, {
                            children: (0, r.jsx)(R, {
                                sku: t,
                            }),
                        }),
                    (0, r.jsxs)(C, {
                        className: A.Hi,
                        children: [
                            t.name,
                            null != c &&
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: A.TU,
                                    children: O.intl.format(O.t["es/G6j"], {
                                        date: c,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsx)(N, {
                        className: A.Hi,
                        children: n,
                    }),
                ],
            }),
        });
    };

function D(e) {
    let { sku: t, skuPricePreview: n, application: i } = e;
    l()(null != n.amount, "SKU must have a price set."),
        l()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
    let a = (0, u.bG)([f.A], () => f.A.getProduct(t.id)),
        s = v(t, a),
        o = n.invoice_items[0],
        c = o.unit_price.amount,
        p = !n.tax_inclusive && n.tax > 0,
        m = S(o),
        g = c !== n.amount,
        E = t.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM;
    return (0, r.jsxs)(_.Yx, {
        className: A.S,
        children: [
            (0, r.jsxs)(I, {
                children: [
                    "THREE_COLUMN" === s &&
                        (0, r.jsx)(T, {
                            children: (0, r.jsx)(R, {
                                sku: t,
                            }),
                        }),
                    (0, r.jsxs)(C, {
                        className: A.Hi,
                        children: [
                            E &&
                                (0, r.jsx)(h.Q, {
                                    application: i,
                                }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(N, {
                        className: A.Hi,
                        children: (0, b.$g)(c, n.currency),
                    }),
                ],
            }),
            null != m &&
                (0, r.jsxs)(I, {
                    children: [
                        "THREE_COLUMN" === s &&
                            (0, r.jsx)(T, {
                                children: (0, r.jsx)(w, {
                                    discount: m,
                                }),
                            }),
                        (0, r.jsx)(C, {
                            className: A.ys,
                            children: m.description,
                        }),
                        (0, r.jsx)(N, {
                            className: A.ys,
                            children: (0, b.$g)(-1 * m.amount, n.currency),
                        }),
                    ],
                }),
            p &&
                (0, r.jsxs)(I, {
                    children: [
                        "THREE_COLUMN" === s && (0, r.jsx)(T, {}),
                        (0, r.jsx)(C, {
                            className: A.Hi,
                            children: O.intl.string(O.t["/I8zmP"]),
                        }),
                        (0, r.jsx)(N, {
                            className: A.Hi,
                            children: (0, b.$g)(n.tax, n.currency),
                        }),
                    ],
                }),
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.pK, {}),
                        (0, r.jsxs)(I, {
                            className: A.V$,
                            children: [
                                (0, r.jsx)(T, {
                                    className: A.Hi,
                                    children: O.intl.format(O.t["+B5KfG"], {}),
                                }),
                                "THREE_COLUMN" === s && (0, r.jsx)(C, {}),
                                (0, r.jsx)(N, {
                                    className: A.Hi,
                                    children: (0, b.$g)(n.amount, n.currency),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
