n.d(t, {
    A3: () => I,
    f4: () => N,
    f9: () => L,
    gY: () => A,
});
var r = n(951288),
    l = n(74655),
    i = n(159691),
    a = n(481060),
    o = n(224550),
    s = n(672971),
    c = n(128069),
    u = n(445794),
    d = n(600164),
    p = n(612853),
    f = n(658114),
    b = n(712297),
    y = n(982204),
    m = n(811334),
    O = n(152521),
    g = n(960919),
    j = n(981631),
    h = n(388032),
    v = n(66360);
function x(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(a.Text, {
            variant: "text-md/semibold",
            className: v.orbAmountTag,
            children: [
                (0, r.jsx)(g.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    _ = (e) => {
        var { orbBalance: t, orbPriceAmount: n, loading: l, onClick: o } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
        let c = x(
            {
                variant: "active",
                type: "submit",
                "data-testid": "submitButton",
                text: h.intl.string(h.t.wmcDys),
            },
            s,
        );
        return null === n
            ? (0, r.jsx)(a.aML, {
                  "data-migration-pending": !0,
                  text: h.intl.string(h.t["c/rcUl"]),
                  children: (e) => (0, r.jsx)(i.zxk, E(x({}, e, c), { disabled: !0 })),
              })
            : null === t || n > t
              ? (0, r.jsx)(a.aML, {
                    text: h.intl.string(h.t.keFvXF),
                    children: (e) => (0, r.jsx)(i.zxk, E(x({}, e, c), { disabled: !0 })),
                })
              : (0, r.jsx)(
                    i.zxk,
                    E(x({}, c), {
                        loading: l,
                        onClick: o,
                    }),
                );
    },
    C = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: l } = (0, b.Z)({
                applicationId: (0, O.N)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            i = l[n];
        return void 0 === i
            ? (0, r.jsx)(m.aO, {
                  children: (0, r.jsx)(a.$jN, {
                      type: a.$jN.Type.PULSING_ELLIPSIS,
                      className: v.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(y.E, {
                  sku: i,
                  value: (0, r.jsx)(P, { orbAmount: t }),
              });
    },
    S = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.gNt, {
            label: h.intl.string(h.t.mmDvV1),
            children: (0, r.jsxs)(l.U, {
                className: v.paymentSourceItem,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: v.displayFlex,
                        variant: "text-md/medium",
                        children: h.intl.string(h.t.y0WGqK),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: v.displayFlex,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(P, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    A = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = "";
        return (
            (n =
                t.code === c.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                    ? h.intl.string(h.t.keFvXF)
                    : t.code === c.SM.ALREADY_PURCHASED
                      ? h.intl.string(h.t.m371Mz)
                      : h.intl.string(h.t.fqJZ19)),
            (0, r.jsx)(a.M14, {
                type: "critical",
                children: n,
            })
        );
    },
    N = (e) => {
        let { skuId: t } = e;
        return (0, u.N3)({
            skuId: t,
            isOrbsPurchase: !0,
        })
            ? (0, r.jsx)(f.Z, { message: h.intl.format(h.t.fsOXXF, {}) })
            : null;
    },
    I = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: l } = e;
        return (0, r.jsxs)("div", {
            className: v.stepBody,
            children: [
                (0, r.jsx)(a.gNt, {
                    label: h.intl.string(h.t.sail9P),
                    children: (0, r.jsx)(C, {
                        skuId: t,
                        orbPriceAmount: n,
                    }),
                }),
                (0, r.jsx)(S, { orbBalance: l }),
                (0, r.jsx)(s.Z, {
                    forceShow: !0,
                    onChange: j.dG4,
                    finePrint: (0, r.jsx)(o.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: j.GZQ.ONE_TIME,
                    }),
                }),
            ],
        });
    },
    L = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: l, onClickCheckout: i } = e;
        return (0, r.jsxs)(a.mzw, {
            align: d.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(_, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    loading: l,
                    onClick: i,
                }),
                (0, r.jsx)(p.Z, {}),
            ],
        });
    };
