n.d(t, {
    I$: () => w,
    J6: () => I,
    cL: () => R,
    l7: () => N,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(821891),
    o = n(953689),
    l = n(981036),
    c = n(235986),
    u = n(999784),
    d = n(516248),
    f = n(252293),
    p = n(319820),
    _ = n(735164),
    h = n(310829),
    m = n(106799),
    g = n(652215),
    E = n(985018),
    b = n(725682);

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

function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(a.Text, {
            variant: "text-md/semibold",
            className: b.Ay,
            children: [
                (0, r.jsx)(m.A, {
                    shouldUseThemeColor: !0,
                    customSize: 14,
                }),
                null === t ? "--" : t,
            ],
        });
    },
    I = (e) => {
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
            { disabled: s, tooltipText: o } = (0, i.useMemo)(
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
            disabled: s,
            tooltipText: o,
            text: a,
        };
    },
    T = (e) => {
        let { orbPriceAmount: t, skuId: n, rentalDuration: i } = e,
            { skusById: s } = (0, f.A)({
                applicationId: (0, h.p)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0,
            }),
            o = s[n];
        return void 0 === o
            ? (0, r.jsx)(_.Yx, {
                  children: (0, r.jsx)(a.y$y, {
                      type: a.y$y.Type.PULSING_ELLIPSIS,
                      className: b.nJ,
                  }),
              })
            : (0, r.jsx)(p.U, {
                  sku: o,
                  value: (0, r.jsx)(S, {
                      orbAmount: t,
                  }),
                  rentalDuration: i,
              });
    },
    C = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(a.D0$, {
            label: E.intl.string(E.t["mmDvV+"]),
            children: (0, r.jsxs)(a.FON, {
                className: b.nQ,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: b.OL,
                        variant: "text-md/medium",
                        children: E.intl.string(E.t.y0WGqP),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: b.OL,
                        variant: "text-md/medium",
                        children: (0, r.jsx)(S, {
                            orbAmount: t,
                        }),
                    }),
                ],
            }),
        });
    },
    N = () =>
        (0, r.jsx)(d.A, {
            message: E.intl.format(E.t.fsOXXO, {}),
        }),
    R = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i, renderWithoutContainer: l, rentalDuration: c } = e,
            u = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.D0$, {
                        label: E.intl.string(E.t.sail9P),
                        children: (0, r.jsx)(T, {
                            skuId: t,
                            orbPriceAmount: n,
                            rentalDuration: c,
                        }),
                    }),
                    (0, r.jsx)(C, {
                        orbBalance: i,
                    }),
                    (0, r.jsx)(o.A, {
                        forceShow: !0,
                        onChange: g.tEg,
                        finePrint: (0, r.jsx)(s.A, {
                            rentalDuration: c,
                            isOrbCheckout: !0,
                            skuId: t,
                            purchaseType: g.VVm.ONE_TIME,
                        }),
                    }),
                ],
            });
        return l
            ? u
            : (0, r.jsx)("div", {
                  className: b.Du,
                  children: u,
              });
    },
    w = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: s, onClickCheckout: o, rentalDuration: d } = e,
            {
                disabled: f,
                tooltipText: p,
                text: _,
            } = I({
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
        return (0, r.jsxs)(a.jlY, {
            align: c.A.Align.CENTER,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(
                    l.p,
                    v(O({}, h), {
                        onClick: o,
                        loading: s,
                        disabled: f,
                        tooltipText: p,
                        text: _,
                    }),
                ),
                (0, r.jsx)(u.A, {}),
            ],
        });
    };
