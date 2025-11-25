n.d(t, {
    A3: () => C,
    f4: () => v,
    f9: () => S,
});
var r = n(54381),
    l = n(473749),
    i = n(481060),
    s = n(224550),
    o = n(672971),
    a = n(81088),
    c = n(600164),
    u = n(612853),
    d = n(658114),
    p = n(712297),
    b = n(982204),
    x = n(811334),
    y = n(152521),
    f = n(960919),
    m = n(981631),
    j = n(388032),
    O = n(66360);
let g = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(i.Text, {
            variant: "text-md/semibold",
            className: O.orbAmountTag,
            children: [
                (0, r.jsx)(f.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    h = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: l } = (0, p.Z)({
                applicationId: (0, y.Nb)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            s = l[n];
        return void 0 === s
            ? (0, r.jsx)(x.aO, {
                  children: (0, r.jsx)(i.$jN, {
                      type: i.$jN.Type.PULSING_ELLIPSIS,
                      className: O.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(b.E, {
                  sku: s,
                  value: (0, r.jsx)(g, { orbAmount: t }),
              });
    },
    P = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(i.gNt, {
            label: j.intl.string(j.t["mmDvV+"]),
            children: (0, r.jsxs)(i.UPk, {
                className: O.paymentSourceItem,
                children: [
                    (0, r.jsx)(i.Text, {
                        className: O.displayFlex,
                        variant: "text-md/medium",
                        children: j.intl.string(j.t.y0WGqP),
                    }),
                    (0, r.jsx)(i.Text, {
                        className: O.displayFlex,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(g, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    v = () => (0, r.jsx)(d.Z, { message: j.intl.format(j.t.fsOXXO, {}) }),
    C = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: l, renderWithoutContainer: a } = e,
            c = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.gNt, {
                        label: j.intl.string(j.t.sail9P),
                        children: (0, r.jsx)(h, {
                            skuId: t,
                            orbPriceAmount: n,
                        }),
                    }),
                    (0, r.jsx)(P, { orbBalance: l }),
                    (0, r.jsx)(o.Z, {
                        forceShow: !0,
                        onChange: m.dG4,
                        finePrint: (0, r.jsx)(s.Z, {
                            isOrbCheckout: !0,
                            skuId: t,
                            purchaseType: m.GZQ.ONE_TIME,
                        }),
                    }),
                ],
            });
        return a
            ? c
            : (0, r.jsx)("div", {
                  className: O.stepBody,
                  children: c,
              });
    },
    S = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: s, onClickCheckout: o, isRental: d } = e,
            {
                disabled: p,
                tooltipText: b,
                text: x,
            } = ((e) => {
                let { orbBalance: t, orbPriceAmount: n, isRental: r } = e,
                    i = r ? j.intl.string(j.t["2n5l8j"]) : j.intl.string(j.t.wmcDyu),
                    { disabled: s, tooltipText: o } = (0, l.useMemo)(
                        () =>
                            null == n
                                ? {
                                      disabled: !0,
                                      tooltipText: j.intl.string(j.t["c/rcUu"]),
                                  }
                                : null == t || n > t
                                  ? {
                                        disabled: !0,
                                        tooltipText: j.intl.string(j.t.keFvXM),
                                    }
                                  : {
                                        disabled: !1,
                                        tooltipText: null,
                                    },
                        [n, t],
                    );
                return {
                    disabled: s,
                    tooltipText: o,
                    text: i,
                };
            })({
                orbBalance: n,
                orbPriceAmount: t,
                isRental: d,
            });
        return (0, r.jsxs)(i.mzw, {
            align: c.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(a.Ko, {
                    onClick: o,
                    loading: s,
                    disabled: p,
                    tooltipText: b,
                    text: x,
                }),
                (0, r.jsx)(u.Z, {}),
            ],
        });
    };
