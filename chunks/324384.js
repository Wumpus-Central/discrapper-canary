"use strict";
n.d(t, { J: () => g, c: () => I });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(821891),
    o = n(953689),
    l = n(252293),
    u = n(319820),
    c = n(735164),
    d = n(310829),
    _ = n(106799),
    f = n(652215),
    p = n(985018),
    h = n(725682);
let m = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(a.Text, {
            variant: "text-md/semibold",
            className: h.Ay,
            children: [(0, r.jsx)(_.A, { shouldUseThemeColor: !0, customSize: 14 }), null === t ? "--" : t],
        });
    },
    g = (e) => {
        let { orbBalance: t, orbPriceAmount: n, rentalDuration: r } = e,
            a = (0, i.useMemo)(
                () =>
                    3 === r
                        ? p.intl.string(p.t.lpAQT0)
                        : 7 === r
                          ? p.intl.string(p.t["8Nn0ZK"])
                          : null != r
                            ? p.intl.string(p.t["2n5l8j"])
                            : p.intl.string(p.t.wmcDyu),
                [r],
            ),
            { disabled: s, tooltipText: o } = (0, i.useMemo)(
                () =>
                    null == n
                        ? { disabled: !0, tooltipText: p.intl.string(p.t["c/rcUu"]) }
                        : null == t || n > t
                          ? { disabled: !0, tooltipText: p.intl.string(p.t.keFvXM) }
                          : { disabled: !1, tooltipText: null },
                [n, t],
            );
        return { disabled: s, tooltipText: o, text: a };
    },
    E = (e) => {
        let { orbPriceAmount: t, skuId: n, rentalDuration: i } = e,
            { skusById: s } = (0, l.A)({
                applicationId: (0, d.p)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            o = s[n];
        return void 0 === o
            ? (0, r.jsx)(c.Yx, { children: (0, r.jsx)(a.y$y, { type: a.y$y.Type.PULSING_ELLIPSIS, className: h.nJ }) })
            : (0, r.jsx)(u.U, { sku: o, value: (0, r.jsx)(m, { orbAmount: t }), rentalDuration: i });
    },
    A = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.D0$, {
            label: p.intl.string(p.t["mmDvV+"]),
            children: (0, r.jsxs)(a.FON, {
                className: h.nQ,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: h.OL,
                        variant: "text-md/medium",
                        children: p.intl.string(p.t.y0WGqP),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: h.OL,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(m, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    I = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i, renderWithoutContainer: l, rentalDuration: u } = e,
            c = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.D0$, {
                        label: p.intl.string(p.t.sail9P),
                        children: (0, r.jsx)(E, { skuId: t, orbPriceAmount: n, rentalDuration: u }),
                    }),
                    (0, r.jsx)(A, { orbBalance: i }),
                    (0, r.jsx)(o.A, {
                        forceShow: !0,
                        onChange: f.tEg,
                        finePrint: (0, r.jsx)(s.A, {
                            rentalDuration: u,
                            isOrbCheckout: !0,
                            skuId: t,
                            purchaseType: f.VVm.ONE_TIME,
                        }),
                    }),
                ],
            });
        return l ? c : (0, r.jsx)("div", { className: h.Du, children: c });
    };
