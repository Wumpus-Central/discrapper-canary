n.d(t, {
    A3: () => P,
    f9: () => w,
    gY: () => R,
});
var r = n(951288),
    i = n(159691),
    a = n(481060),
    o = n(224550),
    s = n(672971),
    l = n(128069),
    c = n(600164),
    u = n(612853),
    d = n(712297),
    f = n(982204),
    _ = n(811334),
    p = n(152521),
    h = n(960919),
    m = n(981631),
    g = n(388032),
    E = n(56207);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(a.Text, {
            variant: "text-md/semibold",
            className: E.orbAmountTag,
            children: [
                (0, r.jsx)(h.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    A = (e) => {
        var { orbBalance: t, orbPriceAmount: n, loading: o, onClick: s } = e,
            l = I(e, ["orbBalance", "orbPriceAmount", "loading", "onClick"]);
        let c = y(
            {
                variant: "active",
                type: "submit",
                "data-testid": "submitButton",
                text: g.intl.string(g.t.wmcDys),
            },
            l,
        );
        return null === n
            ? (0, r.jsx)(a.ua7, {
                  text: g.intl.string(g.t["c/rcUl"]),
                  children: (e) => (0, r.jsx)(i.zx, v(y({}, e, c), { disabled: !0 })),
              })
            : null === t || n > t
              ? (0, r.jsx)(a.ua7, {
                    text: g.intl.string(g.t.keFvXF),
                    children: (e) => (0, r.jsx)(i.zx, v(y({}, e, c), { disabled: !0 })),
                })
              : (0, r.jsx)(
                    i.zx,
                    v(y({}, c), {
                        loading: o,
                        onClick: s,
                    }),
                );
    },
    C = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: i } = (0, d.Z)({
                applicationId: (0, p.N)(n),
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
                      className: E.purchaseDetailsSpinner,
                  }),
              })
            : (0, r.jsx)(f.E, {
                  sku: o,
                  value: (0, r.jsx)(S, { orbAmount: t }),
              });
    },
    N = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsxs)("div", {
            className: E.paymentSourceWrapper,
            children: [
                (0, r.jsx)(a.vwX, {
                    tag: a.RB0.H5,
                    children: g.intl.string(g.t.mmDvV1),
                }),
                (0, r.jsxs)("div", {
                    className: E.paymentSourceItem,
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: E.displayFlex,
                            variant: "text-md/medium",
                            children: g.intl.string(g.t.y0WGqK),
                        }),
                        (0, r.jsx)(a.Text, {
                            className: E.displayFlex,
                            variant: "text-md/medium",
                            children: (0, r.jsx)(S, { orbAmount: t }),
                        }),
                    ],
                }),
            ],
        });
    },
    R = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = "";
        return (
            (n =
                t.code === l.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                    ? g.intl.string(g.t.keFvXF)
                    : t.code === l.SM.ALREADY_PURCHASED
                      ? g.intl.string(g.t.m371Mz)
                      : g.intl.string(g.t.fqJZ19)),
            (0, r.jsx)("div", {
                className: E.formErrorContainer,
                children: (0, r.jsx)(a.kzN, { children: n }),
            })
        );
    },
    P = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i } = e;
        return (0, r.jsxs)("div", {
            className: E.stepBody,
            children: [
                (0, r.jsx)(a.vwX, {
                    tag: a.RB0.H5,
                    children: g.intl.string(g.t.sail9P),
                }),
                (0, r.jsx)(C, {
                    skuId: t,
                    orbPriceAmount: n,
                }),
                (0, r.jsx)(N, { orbBalance: i }),
                (0, r.jsx)(s.Z, {
                    forceShow: !0,
                    onChange: m.dG4,
                    finePrint: (0, r.jsx)(o.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: m.GZQ.ONE_TIME,
                    }),
                }),
            ],
        });
    },
    w = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: i, onClickCheckout: o } = e;
        return (0, r.jsxs)(a.mzw, {
            align: c.Z.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(A, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    loading: i,
                    onClick: o,
                }),
                (0, r.jsx)(u.Z, {}),
            ],
        });
    };
