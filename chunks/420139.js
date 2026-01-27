n.d(t, {
    A: () => N,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    d = n(397927),
    u = n(391048),
    _ = n(158032),
    p = n(362111),
    m = n(821189),
    g = n(637141),
    A = n(688810),
    f = n(160946),
    h = n(351906),
    b = n(295405),
    E = n(97352),
    x = n(927578),
    O = n(83617),
    C = n(615396),
    I = n(543767),
    T = n(652215),
    S = n(985018),
    j = n(752375),
    v = n(20976);

function N(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: l,
            dropdownClassName: a,
            analyticsLocation: N,
            currentInvoicePreview: P,
            disabled: R = !1,
        } = e,
        D = (0, c.bG)([h.A], () => h.A.hidePersonalInformation),
        [w, L] = (0, c.yK)([b.A], () => [b.A.paymentSources, b.A.hasFetchedPaymentSources]),
        M = (0, f.Y)((0, C.MP)(t)),
        { analyticsLocations: U } = (0, A.Ay)(),
        G = i.useMemo(() => Object.values(w).filter((e) => !e.invalid), [w]),
        [k, V] = i.useState(!1),
        [H, B] = i.useState(t.currency),
        F = async (e, n, r) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await _.r6(t, n, r, U, N) : await _.uK(t, e, n, r, U, N), V(!1), B(n);
        },
        Y = async (e, n, r) => {
            V(!0);
            let i = await (0, I.OQ)({
                    subscriptionId: t.id,
                    paymentSourceId: null == e ? void 0 : e.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: U,
                    analyticsLocation: N,
                }),
                l = {
                    amount: i.subtotal,
                    currency: i.currency,
                };
            P.currency !== i.currency || (P.currency === i.currency && P.total !== i.total)
                ? await y(
                      i,
                      () => {
                          r(e, n, l);
                      },
                      () => {
                          V(!1);
                      },
                  )
                : r(e, n, l);
        },
        W = (e) => {
            let n = E.A.get(t.planIdForCurrencies);
            o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
            let r = (0, O._w)(n.id, e.id, !1);
            return r.length > 0 ? r[0] : T.Yri.USD;
        },
        z = (e) => {
            (0, O.c_)(e.id, (0, C.MP)(t)).then(() => {
                Y(e, W(e), F);
            }),
                "function" == typeof n && n(e.id);
        },
        K = () => {
            (0, d.mMO)(
                async () => (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        p.default,
                        ((t = (function (e) {
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
                        })({}, e)),
                        (n = n =
                            {
                                onAddPaymentSource: z,
                                analyticsLocation: N,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    );
                },
                {
                    onCloseCallback: () => {
                        (0, u.ET)();
                    },
                    onCloseRequest: T.tEg,
                },
            );
        };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, x.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, r.jsx)(d.MzZ, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: j.uZ,
                children: (0, r.jsx)(d.Button, {
                    variant: "secondary",
                    text: S.intl.string(S.t.SgX7Ra),
                    fullWidth: !0,
                }),
            })
        );
    }
    if (!L || !M) return (0, r.jsx)(d.y$y, {});
    if (!(G.length > 0))
        return (0, r.jsx)(d.Button, {
            fullWidth: !0,
            variant: l ? "primary" : "secondary",
            onClick: K,
            text: S.intl.string(S.t.CpOiEO),
        });
    {
        let e,
            n = E.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let i = (0, O._w)(n, t.paymentSourceId, !1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                ((e = t.paymentSourceId),
                (0, r.jsx)(g.Ay, {
                    prependOption:
                        null == e
                            ? {
                                  label: S.intl.string(S.t.iA5vA1),
                                  value: null,
                              }
                            : null,
                    className: a,
                    paymentSources: G,
                    hidePersonalInformation: D,
                    selectedPaymentSourceId: e,
                    onChange: (e) => {
                        null != e && Y(e, W(e), F);
                    },
                    onPaymentSourceAdd: K,
                    dropdownLoading: k,
                    disabled: R,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                })),
                null != t.paymentSourceId
                    ? (0, r.jsx)(m.f, {
                          currencies: i,
                          children: (0, r.jsx)("div", {
                              className: s()(j.Gl, v.Uu, v.Hu),
                              children: (0, r.jsx)(m.A, {
                                  label: S.intl.string(S.t["0YjaXf"]),
                                  selectedCurrency: H,
                                  currencies: i,
                                  onChange: (e) => {
                                      Y(void 0, e, F);
                                  },
                              }),
                          }),
                      })
                    : null,
            ],
        });
    }
}
let y = async (e, t, i) => {
    let l = await (0, d.mMO)(
        async () => {
            let { default: l } = await n.e("49297").then(n.bind(n, 760941));
            return (n) =>
                (0, r.jsx)(l, {
                    newInvoice: e,
                    onConfirm: t,
                    onCancel: i,
                    modalProps: n,
                });
        },
        {
            onCloseRequest: () => {
                null != l && (0, d.OoC)(l), i();
            },
        },
    );
};
