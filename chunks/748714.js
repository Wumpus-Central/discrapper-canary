n.d(t, {
    A3: () => T,
    Do: () => O,
    f4: () => I,
    f9: () => C,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(224550),
    s = n(672971),
    l = n(81088),
    c = n(600164),
    u = n(612853),
    d = n(658114),
    f = n(712297),
    p = n(982204),
    _ = n(811334),
    m = n(152521),
    h = n(960919),
    g = n(981631),
    E = n(388032),
    b = n(66360);
let y = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(a.Text, {
            variant: "text-md/semibold",
            className: b.orbAmountTag,
            children: [
                (0, r.jsx)(h.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    O = (e) => {
        let { orbBalance: t, orbPriceAmount: n, rentalDuration: r } = e,
            a = (0, i.useMemo)(
                () =>
                    3 === r
                        ? E.intl.string(E.t.lpAQT0)
                        : 7 === r
                          ? E.intl.string(E.t["8Nn0ZK"])
                          : null != r
                            ? E.intl.string(E.t["2n5l8j"])
                            : E.intl.string(E.t.wmcDyu),
                [r],
            ),
            { disabled: o, tooltipText: s } = (0, i.useMemo)(
                () =>
                    null == n
                        ? {
                              disabled: !0,
                              tooltipText: E.intl.string(E.t["c/rcUu"]),
                          }
                        : null == t || n > t
                          ? {
                                disabled: !0,
                                tooltipText: E.intl.string(E.t.keFvXM),
                            }
                          : {
                                disabled: !1,
                                tooltipText: null,
                            },
                [n, t],
            );
        return {
            disabled: o,
            tooltipText: s,
            text: a,
        };
    },
    v = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: i } = (0, f.Z)({
                applicationId: (0, m.Nb)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            o = i[n];
        return void 0 === o
            ? (0, r.jsx)(_.aO, {
                  children: (0, r.jsx)(a.$jN, {
                      type: a.$jN.Type.PULSING_ELLIPSIS,
                      className: b.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(p.E, {
                  sku: o,
                  value: (0, r.jsx)(y, { orbAmount: t }),
              });
    },
    S = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.gNt, {
            label: E.intl.string(E.t["mmDvV+"]),
            children: (0, r.jsxs)(a.UPk, {
                className: b.paymentSourceItem,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: b.displayFlex,
                        variant: "text-md/medium",
                        children: E.intl.string(E.t.y0WGqP),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: b.displayFlex,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(y, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    I = () => (0, r.jsx)(d.Z, { message: E.intl.format(E.t.fsOXXO, {}) }),
    T = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i, renderWithoutContainer: l, rentalDuration: c } = e,
            u = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.gNt, {
                        label: E.intl.string(E.t.sail9P),
                        children: (0, r.jsx)(v, {
                            skuId: t,
                            orbPriceAmount: n,
                        }),
                    }),
                    (0, r.jsx)(S, { orbBalance: i }),
                    (0, r.jsx)(s.Z, {
                        forceShow: !0,
                        onChange: g.dG4,
                        finePrint: (0, r.jsx)(o.Z, {
                            rentalDuration: c,
                            isOrbCheckout: !0,
                            skuId: t,
                            purchaseType: g.GZQ.ONE_TIME,
                        }),
                    }),
                ],
            });
        return l
            ? u
            : (0, r.jsx)("div", {
                  className: b.stepBody,
                  children: u,
              });
    },
    C = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: i, onClickCheckout: o, rentalDuration: s } = e,
            {
                disabled: d,
                tooltipText: f,
                text: p,
            } = O({
                orbBalance: n,
                orbPriceAmount: t,
                rentalDuration: s,
            });
        return (0, r.jsxs)(a.mzw, {
            align: c.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(l.Ko, {
                    onClick: o,
                    loading: i,
                    disabled: d,
                    tooltipText: f,
                    text: p,
                }),
                (0, r.jsx)(u.Z, {}),
            ],
        });
    };
