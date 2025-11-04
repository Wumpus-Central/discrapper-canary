n.d(t, {
    A3: () => x,
    f4: () => D,
    f9: () => L,
    gY: () => w,
});
var r = n(951288),
    i = n(159691),
    a = n(481060),
    o = n(224550),
    s = n(672971),
    l = n(128069),
    c = n(445794),
    u = n(600164),
    d = n(612853),
    f = n(658114),
    _ = n(712297),
    p = n(982204),
    h = n(811334),
    m = n(152521),
    g = n(960919),
    E = n(981631),
    b = n(388032),
    y = n(66360);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(a.Text, {
            variant: "text-md/semibold",
            className: y.orbAmountTag,
            children: [
                (0, r.jsx)(g.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    N = (e) => {
        var { orbBalance: t, orbPriceAmount: n, loading: o, onClick: s } = e,
            l = S(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
        let c = v(
            {
                variant: "active",
                type: "submit",
                "data-testid": "submitButton",
                text: b.intl.string(b.t.wmcDyu),
            },
            l,
        );
        return null === n
            ? (0, r.jsx)(a.aML, {
                  "data-migration-pending": !0,
                  text: b.intl.string(b.t["c/rcUu"]),
                  children: (e) => (0, r.jsx)(i.zxk, T(v({}, e, c), { disabled: !0 })),
              })
            : null === t || n > t
              ? (0, r.jsx)(a.aML, {
                    text: b.intl.string(b.t.keFvXM),
                    children: (e) => (0, r.jsx)(i.zxk, T(v({}, e, c), { disabled: !0 })),
                })
              : (0, r.jsx)(
                    i.zxk,
                    T(v({}, c), {
                        loading: o,
                        onClick: s,
                    }),
                );
    },
    R = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: i } = (0, _.Z)({
                applicationId: (0, m.Nb)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            o = i[n];
        return void 0 === o
            ? (0, r.jsx)(h.aO, {
                  children: (0, r.jsx)(a.$jN, {
                      type: a.$jN.Type.PULSING_ELLIPSIS,
                      className: y.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(p.E, {
                  sku: o,
                  value: (0, r.jsx)(C, { orbAmount: t }),
              });
    },
    P = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.gNt, {
            label: b.intl.string(b.t["mmDvV+"]),
            children: (0, r.jsxs)(a.UPk, {
                className: y.paymentSourceItem,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: y.displayFlex,
                        variant: "text-md/medium",
                        children: b.intl.string(b.t.y0WGqP),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: y.displayFlex,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(C, { orbAmount: t }),
                    }),
                ],
            }),
        });
    },
    w = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = "";
        return (
            (n =
                t.code === l.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                    ? b.intl.string(b.t.keFvXM)
                    : t.code === l.SM.ALREADY_PURCHASED
                      ? b.intl.string(b.t.m371Mx)
                      : b.intl.string(b.t.fqJZ11)),
            (0, r.jsx)(a.M14, {
                type: "critical",
                children: n,
            })
        );
    },
    D = (e) => {
        let { skuId: t } = e;
        return (0, c.N3)({
            skuId: t,
            isOrbsPurchase: !0,
        })
            ? (0, r.jsx)(f.Z, { message: b.intl.format(b.t.fsOXXO, {}) })
            : null;
    },
    x = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i } = e;
        return (0, r.jsxs)("div", {
            className: y.stepBody,
            children: [
                (0, r.jsx)(a.gNt, {
                    label: b.intl.string(b.t.sail9P),
                    children: (0, r.jsx)(R, {
                        skuId: t,
                        orbPriceAmount: n,
                    }),
                }),
                (0, r.jsx)(P, { orbBalance: i }),
                (0, r.jsx)(s.Z, {
                    forceShow: !0,
                    onChange: E.dG4,
                    finePrint: (0, r.jsx)(o.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: E.GZQ.ONE_TIME,
                    }),
                }),
            ],
        });
    },
    L = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: i, onClickCheckout: o } = e;
        return (0, r.jsxs)(a.mzw, {
            align: u.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(N, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    loading: i,
                    onClick: o,
                }),
                (0, r.jsx)(d.Z, {}),
            ],
        });
    };
