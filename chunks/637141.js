n.d(t, {
    A: () => x,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(827734),
    l = n(843282),
    c = n(732955),
    u = n(397927),
    d = n(887555),
    f = n(6151),
    p = n(826469),
    _ = n(812745),
    h = n(202613),
    m = n(975571),
    g = n(652215),
    E = n(818348),
    y = n(985018),
    b = n(101541);

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

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = I(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let S = "***@***.***",
    T = "****",
    C = "***",
    N = new h.YS({
        id: f.a,
        brand: _.Ay.Types.UNKNOWN,
        type: g.hes.CARD,
    });

function w(e, t) {
    if (e instanceof h.YS)
        return e.id === f.a
            ? {
                  brand: null,
                  label: y.intl.string(y.t.eQ2bLp),
              }
            : {
                  brand: t ? _.Ay.Types.UNKNOWN : e.brand,
                  label: y.intl.formatToPlainString(y.t.QvBAQk, {
                      last4: t ? T : e.last4,
                  }),
              };
    if (e instanceof h.SJ)
        return {
            brand: _.Ay.Types.PAYPAL,
            label: t ? S : e.email,
        };
    if (e instanceof h.A0)
        return {
            brand: _.Ay.Types.SOFORT,
            label: t ? S : e.email,
        };
    if (e instanceof h.Qh)
        return {
            brand: _.Ay.Types.GIROPAY,
            label: y.intl.string(y.t["y+0MQZ"]),
        };
    if (e instanceof h.Tu)
        return {
            brand: _.Ay.Types.PRZELEWY24,
            label: t ? S : e.email,
        };
    else if (e instanceof h.Ux)
        return {
            brand: _.Ay.Types.PAYSAFECARD,
            label: y.intl.string(y.t.e3APTT),
        };
    else if (e instanceof h.F_)
        return {
            brand: _.Ay.Types.GCASH,
            label: y.intl.string(y.t.PjehcF),
        };
    else if (e instanceof h.Xj)
        return {
            brand: _.Ay.Types.GRABPAY,
            label: y.intl.string(y.t.T5davE),
        };
    else if (e instanceof h.am)
        return {
            brand: _.Ay.Types.MOMO_WALLET,
            label: y.intl.string(y.t.J0A1Vk),
        };
    else if (e instanceof h._1)
        return {
            brand: _.Ay.Types.VENMO,
            label: t ? C : "@" + e.username,
        };
    else if (e instanceof h.i6)
        return {
            brand: _.Ay.Types.KAKAOPAY,
            label: y.intl.string(y.t.CSVexi),
        };
    else if (e instanceof h.cg)
        return {
            brand: _.Ay.Types.GOPAY_WALLET,
            label: y.intl.string(y.t["43J8JK"]),
        };
    else if (e instanceof h.UG)
        return {
            brand: _.Ay.Types.BANCONTACT,
            label: y.intl.string(y.t["1ITkfq"]),
        };
    else if (e instanceof h.rJ)
        return {
            brand: _.Ay.Types.EPS,
            label: y.intl.format(y.t.hSPoZw, {
                bank: (0, d.jK)(e.bank),
            }),
        };
    else if (e instanceof h.EE)
        return {
            brand: _.Ay.Types.IDEAL,
            label:
                null == e.bank
                    ? y.intl.string(y.t.nSbwqC)
                    : y.intl.format(y.t["9kUlRU"], {
                          bank: (0, d.o0)(e.bank),
                      }),
        };
    else if (e instanceof h.FQ)
        return {
            brand: _.Ay.Types.CASH_APP,
            label: t ? C : e.username,
        };
    throw Error("Invalid Payment Source");
}

function R(e, t, n) {
    if (t.value === f.a)
        return (0, r.jsx)("div", {
            className: b.wC,
            children: t.label,
        });
    if (null != e) {
        let t = e instanceof p.A ? e.source : e,
            { brand: i, label: a } = w(t, n);
        return (0, r.jsxs)("div", {
            className: b.IF,
            children: [
                null != i
                    ? (0, r.jsx)(_.Ay, {
                          type: _.Ay.getType(i),
                      })
                    : null,
                (0, r.jsx)("div", {
                    className: o()(b.wC, {
                        [b.z3]: t.invalid,
                    }),
                    children: a,
                }),
            ],
        });
    }
    return (0, r.jsx)("div", {
        className: b.wC,
        children: t.label,
    });
}

function P(e, t) {
    if (null == t) return null;
    let n = t instanceof p.A ? t.source : t,
        r = null;
    return (
        e && !n.canRedeemTrial()
            ? (r = y.intl.string(y.t.SvheW9))
            : e &&
              n.hasFlag(E.rI.NEW) &&
              (r = y.intl.format(y.t.d7ZLKA, {
                  helpDeskArticle: m.A.getArticleURL(g.MVz.PAYMENT_AUTHORIZATION_CHARGE),
              })),
        r
    );
}
let D = (e) => {
        let {
                selectedPaymentSourceId: t,
                paymentSources: n,
                prependOption: r,
                hidePersonalInformation: a,
                onChange: o,
                onPaymentSourceAdd: s,
                paymentGatewayRestrictions: l,
                includeNewPaymentSourceOption: c,
            } = e,
            u = 0 === n.length,
            d = (e) => {
                if (e === f.a) null != s && s();
                else {
                    let t = n.find((t) => t.id === e),
                        r = t instanceof p.A ? t.source : t;
                    null != o && o(r);
                }
            },
            _ = null != r ? [r] : [],
            m = [..._, ...n, ...(c ? [N] : [])].map((e, t) => {
                if (e instanceof p.A) {
                    let { brand: t, label: n } = w(e.source, a);
                    return {
                        value: e.id,
                        label: n,
                        brand: t,
                        disabled: !e.enabled,
                    };
                }
                if (e instanceof h.Ay) {
                    let t,
                        { brand: n, label: r } = w(e, a);
                    return (
                        (t = e === N || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                        {
                            value: e.id,
                            label: r,
                            brand: n,
                            disabled: !t,
                        }
                    );
                }
                return {
                    key: t,
                    value: e.value,
                    label: e.label,
                };
            }),
            g = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            E = t;
        if (null == E && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            E = 0 === e.length ? f.a : e[0].id;
        }
        return {
            hasNoPaymentSources: u,
            handleChange: d,
            prependOptions: _,
            paymentSourceOptions: m,
            paymentSource: g,
            selectedPaymentSourceId: E,
        };
    },
    L = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: a,
                handleChange: o,
                paymentSourceOptions: s,
                selectedPaymentSourceId: l,
                newPaymentMethodOptionLabel: c,
            } = e,
            u = i.useMemo(
                () =>
                    s.map((e) => {
                        let { label: t, brand: n } = e,
                            r = A(e, ["label", "brand"]);
                        return v(
                            {
                                id: null != r.key ? "".concat(r.key) : r.value,
                                label: null != t ? t : "",
                                icon: null != n ? n : void 0,
                            },
                            r,
                        );
                    }),
                [s],
            ),
            d = i.useMemo(
                () => ({
                    label: y.intl.string(y.t["u+Cw58"]),
                    value: null != l ? l : null,
                    options: u,
                    onChange: o,
                    onNew: null != t ? t : () => {},
                    disabled: a || n,
                    newPaymentMethodOptionLabel: c,
                }),
                [l, u, o, t, a, n, c],
            );
        return (0, r.jsx)(f.v, v({}, d));
    };

function x(e) {
    let {
            label: t,
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: d,
            hidePersonalInformation: f,
            onChange: p,
            onPaymentSourceAdd: _,
            isTrial: h = !1,
            disabled: m = !1,
            className: g,
            optionClassName: E,
            dropdownLoading: O,
            paymentGatewayRestrictions: v,
            shouldUseUnifiedCheckoutUI: A,
            newPaymentMethodOptionLabel: I,
        } = e,
        {
            hasNoPaymentSources: S,
            handleChange: T,
            paymentSource: C,
            paymentSourceOptions: N,
            selectedPaymentSourceId: w,
        } = D({
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: d,
            hidePersonalInformation: f,
            onChange: p,
            onPaymentSourceAdd: _,
            paymentGatewayRestrictions: v,
            includeNewPaymentSourceOption: !A,
        }),
        x = i.useMemo(() => new Map(a.map((e) => [e.id, e])), [a]),
        M = P(h, C),
        j = A
            ? (0, r.jsx)(L, {
                  onPaymentSourceAdd: _,
                  disabled: m,
                  handleChange: T,
                  paymentSourceOptions: N,
                  selectedPaymentSourceId: w,
                  newPaymentMethodOptionLabel: I,
              })
            : O
              ? (0, r.jsx)("div", {
                    className: b.hN,
                    children: (0, r.jsx)(u.y$y, {
                        type: u.y$y.Type.WANDERING_CUBES,
                    }),
                })
              : S
                ? (0, r.jsx)(c.$nd, {
                      variant: "primary",
                      fullWidth: !0,
                      onClick: _,
                      text: y.intl.string(y.t.eQ2bLp),
                  })
                : (0, r.jsx)(l.Te, {
                      options: N,
                      value: w,
                      label: t,
                      onChange: T,
                      isDisabled: m,
                      className: o()(
                          {
                              [b.uQ]: null != M,
                          },
                          g,
                      ),
                      optionClassName: E,
                      placeholder: y.intl.string(y.t["8lqkf8"]),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return O
                              ? (0, r.jsx)(u.y$y, {
                                    type: u.tVU.SPINNING_CIRCLE,
                                })
                              : R(null == t.value ? void 0 : x.get(t.value), t, f);
                      },
                      renderOptionLabel: (e) => R(null == e.value ? void 0 : x.get(e.value), e, f),
                      "data-migration-pending": !0,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            j,
            null != M
                ? (0, r.jsxs)("div", {
                      className: b.ot,
                      children: [
                          (0, r.jsx)(u.EpV, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: b.fT,
                              color: s.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/normal",
                              children: M,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
