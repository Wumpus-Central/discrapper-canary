r.d(t, {
    A3: () => w,
    f4: () => I,
    f9: () => A,
    gY: () => S,
});
var n = r(951288),
    l = r(159691),
    i = r(481060),
    a = r(224550),
    o = r(672971),
    s = r(128069),
    c = r(445794),
    u = r(600164),
    d = r(612853),
    p = r(658114),
    f = r(712297),
    b = r(982204),
    h = r(811334),
    g = r(152521),
    O = r(960919),
    v = r(981631),
    y = r(388032),
    m = r(66360);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let _ = (e) => {
        let { orbAmount: t } = e;
        return (0, n.jsxs)(i.Text, {
            variant: "text-md/semibold",
            className: m.orbAmountTag,
            children: [
                (0, n.jsx)(O.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    E = (e) => {
        var { orbBalance: t, orbPriceAmount: r, loading: a, onClick: o } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
        let c = j(
            {
                variant: "active",
                type: "submit",
                "data-testid": "submitButton",
                text: y.intl.string(y.t.wmcDys),
            },
            s,
        );
        return null === r
            ? (0, n.jsx)(i.ua7, {
                  text: y.intl.string(y.t["c/rcUl"]),
                  children: (e) => (0, n.jsx)(l.zxk, P(j({}, e, c), { disabled: !0 })),
              })
            : null === t || r > t
              ? (0, n.jsx)(i.ua7, {
                    text: y.intl.string(y.t.keFvXF),
                    children: (e) => (0, n.jsx)(l.zxk, P(j({}, e, c), { disabled: !0 })),
                })
              : (0, n.jsx)(
                    l.zxk,
                    P(j({}, c), {
                        loading: a,
                        onClick: o,
                    }),
                );
    },
    x = (e) => {
        let { orbPriceAmount: t, skuId: r } = e,
            { skusById: l } = (0, f.Z)({
                applicationId: (0, g.N)(r),
                skuIDs: [r],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            a = l[r];
        return void 0 === a
            ? (0, n.jsx)(h.aO, {
                  children: (0, n.jsx)(i.$jN, {
                      type: i.$jN.Type.PULSING_ELLIPSIS,
                      className: m.purchaseDetailsSpinner,
                  }),
              })
            : (0, n.jsx)(b.E, {
                  sku: a,
                  value: (0, n.jsx)(_, { orbAmount: t }),
              });
    },
    C = (e) => {
        let { orbBalance: t } = e;
        return (0, n.jsxs)("div", {
            className: m.paymentSourceWrapper,
            children: [
                (0, n.jsx)(i.vwX, { children: y.intl.string(y.t.mmDvV1) }),
                (0, n.jsxs)("div", {
                    className: m.paymentSourceItem,
                    children: [
                        (0, n.jsx)(i.Text, {
                            className: m.displayFlex,
                            variant: "text-md/medium",
                            children: y.intl.string(y.t.y0WGqK),
                        }),
                        (0, n.jsx)(i.Text, {
                            className: m.displayFlex,
                            variant: "text-md/medium",
                            children: (0, n.jsx)(_, { orbAmount: t }),
                        }),
                    ],
                }),
            ],
        });
    },
    S = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let r = "";
        return (
            (r =
                t.code === s.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                    ? y.intl.string(y.t.keFvXF)
                    : t.code === s.SM.ALREADY_PURCHASED
                      ? y.intl.string(y.t.m371Mz)
                      : y.intl.string(y.t.fqJZ19)),
            (0, n.jsx)(i.kzN, { children: r })
        );
    },
    I = (e) => {
        let { skuId: t } = e;
        return (0, c.N3)({
            skuId: t,
            isOrbsPurchase: !0,
        })
            ? (0, n.jsx)(p.Z, { message: y.intl.format(y.t.fsOXXF, {}) })
            : null;
    },
    w = (e) => {
        let { skuId: t, orbPriceAmount: r, orbBalance: l } = e;
        return (0, n.jsxs)("div", {
            className: m.stepBody,
            children: [
                (0, n.jsx)(i.vwX, { children: y.intl.string(y.t.sail9P) }),
                (0, n.jsx)(x, {
                    skuId: t,
                    orbPriceAmount: r,
                }),
                (0, n.jsx)(C, { orbBalance: l }),
                (0, n.jsx)(o.Z, {
                    forceShow: !0,
                    onChange: v.dG4,
                    finePrint: (0, n.jsx)(a.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: v.GZQ.ONE_TIME,
                    }),
                }),
            ],
        });
    },
    A = (e) => {
        let { orbPriceAmount: t, orbBalance: r, isSubmitting: l, onClickCheckout: a } = e;
        return (0, n.jsxs)(i.mzw, {
            align: u.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, n.jsx)(E, {
                    orbBalance: r,
                    orbPriceAmount: t,
                    loading: l,
                    onClick: a,
                }),
                (0, n.jsx)(d.Z, {}),
            ],
        });
    };
