n.d(t, {
    A3: () => N,
    f4: () => A,
    f9: () => w,
    gY: () => S,
});
var r = n(951288),
    l = n(159691),
    a = n(481060),
    i = n(224550),
    o = n(672971),
    s = n(128069),
    c = n(445794),
    u = n(600164),
    d = n(612853),
    p = n(658114),
    f = n(712297),
    b = n(982204),
    y = n(811334),
    O = n(152521),
    v = n(960919),
    g = n(981631),
    m = n(388032),
    h = n(66360);
function j(e) {
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
function x(e, t) {
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
            className: h.orbAmountTag,
            children: [
                (0, r.jsx)(v.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    E = (e) => {
        var { orbBalance: t, orbPriceAmount: n, loading: i, onClick: o } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
        let c = j(
            {
                variant: "active",
                type: "submit",
                "data-testid": "submitButton",
                text: m.intl.string(m.t.wmcDyu),
            },
            s,
        );
        return null === n
            ? (0, r.jsx)(a.aML, {
                  "data-migration-pending": !0,
                  text: m.intl.string(m.t["c/rcUu"]),
                  children: (e) => (0, r.jsx)(l.zxk, x(j({}, e, c), { disabled: !0 })),
              })
            : null === t || n > t
              ? (0, r.jsx)(a.aML, {
                    text: m.intl.string(m.t.keFvXM),
                    children: (e) => (0, r.jsx)(l.zxk, x(j({}, e, c), { disabled: !0 })),
                })
              : (0, r.jsx)(
                    l.zxk,
                    x(j({}, c), {
                        loading: i,
                        onClick: o,
                    }),
                );
    },
    _ = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: l } = (0, f.Z)({
                applicationId: (0, O.N)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            i = l[n];
        return void 0 === i
            ? (0, r.jsx)(y.aO, {
                  children: (0, r.jsx)(a.$jN, {
                      type: a.$jN.Type.PULSING_ELLIPSIS,
                      className: h.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(b.E, {
                  sku: i,
                  value: (0, r.jsx)(P, { orbAmount: t }),
              });
    },
    C = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.gNt, {
            label: m.intl.string(m.t["mmDvV+"]),
            children: (0, r.jsxs)(a.UPk, {
                className: h.paymentSourceItem,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: h.displayFlex,
                        variant: "text-md/medium",
                        children: m.intl.string(m.t.y0WGqP),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: h.displayFlex,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(P, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    S = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = "";
        return (
            (n =
                t.code === s.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                    ? m.intl.string(m.t.keFvXM)
                    : t.code === s.SM.ALREADY_PURCHASED
                      ? m.intl.string(m.t.m371Mx)
                      : m.intl.string(m.t.fqJZ11)),
            (0, r.jsx)(a.M14, {
                type: "critical",
                children: n,
            })
        );
    },
    A = (e) => {
        let { skuId: t } = e;
        return (0, c.N3)({
            skuId: t,
            isOrbsPurchase: !0,
        })
            ? (0, r.jsx)(p.Z, { message: m.intl.format(m.t.fsOXXO, {}) })
            : null;
    },
    N = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: l } = e;
        return (0, r.jsxs)("div", {
            className: h.stepBody,
            children: [
                (0, r.jsx)(a.gNt, {
                    label: m.intl.string(m.t.sail9P),
                    children: (0, r.jsx)(_, {
                        skuId: t,
                        orbPriceAmount: n,
                    }),
                }),
                (0, r.jsx)(C, { orbBalance: l }),
                (0, r.jsx)(o.Z, {
                    forceShow: !0,
                    onChange: g.dG4,
                    finePrint: (0, r.jsx)(i.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: g.GZQ.ONE_TIME,
                    }),
                }),
            ],
        });
    },
    w = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: l, onClickCheckout: i } = e;
        return (0, r.jsxs)(a.mzw, {
            align: u.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(E, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    loading: l,
                    onClick: i,
                }),
                (0, r.jsx)(d.Z, {}),
            ],
        });
    };
