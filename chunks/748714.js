n.d(t, {
    A3: () => L,
    f4: () => x,
    f9: () => M,
    gY: () => D,
});
var r = n(951288),
    i = n(28664),
    a = n(159691),
    o = n(481060),
    s = n(224550),
    l = n(672971),
    c = n(128069),
    u = n(445794),
    d = n(600164),
    f = n(612853),
    _ = n(658114),
    p = n(712297),
    h = n(982204),
    m = n(811334),
    g = n(152521),
    E = n(960919),
    b = n(981631),
    y = n(388032),
    O = n(815420);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(o.Text, {
            variant: "text-md/semibold",
            className: O.orbAmountTag,
            children: [
                (0, r.jsx)(E.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    R = (e) => {
        var { orbBalance: t, orbPriceAmount: n, loading: o, onClick: s } = e,
            l = A(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
        let c = I(
            {
                variant: "active",
                type: "submit",
                "data-testid": "submitButton",
                text: y.intl.string(y.t.wmcDyu),
            },
            l,
        );
        return null === n
            ? (0, r.jsx)(i.u, {
                  text: y.intl.string(y.t["c/rcUu"]),
                  asContainer: !0,
                  children: (0, r.jsx)(a.zxk, T(I({}, c), { disabled: !0 })),
              })
            : null === t || n > t
              ? (0, r.jsx)(i.u, {
                    text: y.intl.string(y.t.keFvXM),
                    asContainer: !0,
                    children: (0, r.jsx)(a.zxk, T(I({}, c), { disabled: !0 })),
                })
              : (0, r.jsx)(
                    a.zxk,
                    T(I({}, c), {
                        loading: o,
                        onClick: s,
                    }),
                );
    },
    P = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: i } = (0, p.Z)({
                applicationId: (0, g.Nb)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            a = i[n];
        return void 0 === a
            ? (0, r.jsx)(m.aO, {
                  children: (0, r.jsx)(o.$jN, {
                      type: o.$jN.Type.PULSING_ELLIPSIS,
                      className: O.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(h.E, {
                  sku: a,
                  value: (0, r.jsx)(N, { orbAmount: t }),
              });
    },
    w = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(o.gNt, {
            label: y.intl.string(y.t["mmDvV+"]),
            children: (0, r.jsxs)(o.UPk, {
                className: O.paymentSourceItem,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: O.displayFlex,
                        variant: "text-md/medium",
                        children: y.intl.string(y.t.y0WGqP),
                    }),
                    (0, r.jsx)(o.Text, {
                        className: O.displayFlex,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(N, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    D = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = "";
        return (
            (n =
                t.code === c.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                    ? y.intl.string(y.t.keFvXM)
                    : t.code === c.SM.ALREADY_PURCHASED
                      ? y.intl.string(y.t.m371Mx)
                      : y.intl.string(y.t.fqJZ11)),
            (0, r.jsx)(o.M14, {
                type: "critical",
                children: n,
            })
        );
    },
    x = (e) => {
        let { skuId: t } = e;
        return (0, u.N3)({
            skuId: t,
            isOrbsPurchase: !0,
        })
            ? (0, r.jsx)(_.Z, { message: y.intl.format(y.t.fsOXXO, {}) })
            : null;
    },
    L = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i } = e;
        return (0, r.jsxs)("div", {
            className: O.stepBody,
            children: [
                (0, r.jsx)(o.gNt, {
                    label: y.intl.string(y.t.sail9P),
                    children: (0, r.jsx)(P, {
                        skuId: t,
                        orbPriceAmount: n,
                    }),
                }),
                (0, r.jsx)(w, { orbBalance: i }),
                (0, r.jsx)(l.Z, {
                    forceShow: !0,
                    onChange: b.dG4,
                    finePrint: (0, r.jsx)(s.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: b.GZQ.ONE_TIME,
                    }),
                }),
            ],
        });
    },
    M = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: i, onClickCheckout: a } = e;
        return (0, r.jsxs)(o.mzw, {
            align: d.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(R, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    loading: i,
                    onClick: a,
                }),
                (0, r.jsx)(f.Z, {}),
            ],
        });
    };
