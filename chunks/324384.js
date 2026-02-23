"use strict";
n.d(t, { GS: () => I, J6: () => E, cL: () => T });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(821891),
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
        return (0, r.jsxs)(s.Text, {
            variant: "text-md/semibold",
            className: h.Ay,
            children: [(0, r.jsx)(_.A, { shouldUseThemeColor: !0, customSize: 14 }), null === t ? "--" : t],
        });
    },
    E = (e) => {
        let { orbBalance: t, orbPriceAmount: n } = e,
            { disabled: r, tooltipText: s } = (0, i.useMemo)(
                () =>
                    null == n
                        ? { disabled: !0, tooltipText: p.intl.string(p.t["c/rcUu"]) }
                        : null == t || n > t
                          ? { disabled: !0, tooltipText: p.intl.string(p.t.keFvXM) }
                          : { disabled: !1, tooltipText: null },
                [n, t],
            );
        return { disabled: r, tooltipText: s, text: p.intl.string(p.t.wmcDyu) };
    },
    g = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: i } = (0, l.A)({
                applicationId: (0, d.p)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            a = i[n];
        return void 0 === a
            ? (0, r.jsx)(c.Yx, { children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS, className: h.nJ }) })
            : (0, r.jsx)(u.Uw, { sku: a, value: (0, r.jsx)(m, { orbAmount: t }) });
    },
    A = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(s.D0$, {
            label: p.intl.string(p.t["mmDvV+"]),
            children: (0, r.jsxs)(s.FON, {
                className: h.nQ,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: h.OL,
                        variant: "text-md/medium",
                        children: p.intl.string(p.t.y0WGqP),
                    }),
                    (0, r.jsx)(s.Text, {
                        className: h.OL,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(m, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    I = (e) => {
        let { skuId: t } = e;
        return (0, r.jsx)(o.A, {
            forceShow: !0,
            onChange: f.tEg,
            finePrint: (0, r.jsx)(a.A, { isOrbCheckout: !0, skuId: t, purchaseType: f.VVm.ONE_TIME }),
        });
    },
    T = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i, renderWithoutContainer: a } = e,
            o = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.D0$, {
                        label: p.intl.string(p.t.sail9P),
                        children: (0, r.jsx)(g, { skuId: t, orbPriceAmount: n }),
                    }),
                    (0, r.jsx)(A, { orbBalance: i }),
                    (0, r.jsx)(I, { skuId: t }),
                ],
            });
        return a ? o : (0, r.jsx)("div", { className: h.Du, children: o });
    };
