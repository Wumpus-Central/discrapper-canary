n.d(t, {
    A3: () => P,
    Do: () => T,
    f4: () => N,
    f9: () => w,
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
    h = n(152521),
    m = n(960919),
    g = n(981631),
    E = n(388032),
    b = n(564087);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(a.Text, {
            variant: "text-md/semibold",
            className: b.orbAmountTag,
            children: [
                (0, r.jsx)(m.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    T = (e) => {
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
    C = (e) => {
        let { orbPriceAmount: t, skuId: n, rentalDuration: i } = e,
            { skusById: o } = (0, f.Z)({
                applicationId: (0, h.N)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            s = o[n];
        return void 0 === s
            ? (0, r.jsx)(_.aO, {
                  children: (0, r.jsx)(a.$jN, {
                      type: a.$jN.Type.PULSING_ELLIPSIS,
                      className: b.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(p.E, {
                  sku: s,
                  value: (0, r.jsx)(I, { orbAmount: t }),
                  rentalDuration: i,
              });
    },
    A = (e) => {
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
                        children: (0, r.jsx)(I, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    N = () => (0, r.jsx)(d.Z, { message: E.intl.format(E.t.fsOXXO, {}) }),
    P = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i, renderWithoutContainer: l, rentalDuration: c } = e,
            u = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.gNt, {
                        label: E.intl.string(E.t.sail9P),
                        children: (0, r.jsx)(C, {
                            skuId: t,
                            orbPriceAmount: n,
                            rentalDuration: c,
                        }),
                    }),
                    (0, r.jsx)(A, { orbBalance: i }),
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
    w = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: o, onClickCheckout: s, rentalDuration: d } = e,
            {
                disabled: f,
                tooltipText: p,
                text: _,
            } = T({
                orbBalance: n,
                orbPriceAmount: t,
                rentalDuration: d,
            }),
            h = (0, i.useMemo)(
                () => ({
                    variant: "active",
                    type: "submit",
                    "data-testid": "submitButton",
                }),
                [],
            );
        return (0, r.jsxs)(a.mzw, {
            align: c.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(
                    l.Ko,
                    S(O({}, h), {
                        onClick: s,
                        loading: o,
                        disabled: f,
                        tooltipText: p,
                        text: _,
                    }),
                ),
                (0, r.jsx)(u.Z, {}),
            ],
        });
    };
