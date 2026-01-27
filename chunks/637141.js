n.d(t, {
    A: () => L,
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
    p = n(812745),
    _ = n(202613),
    h = n(975571),
    m = n(652215),
    g = n(818348),
    E = n(985018),
    y = n(101541);

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
                b(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
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
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let I = "***@***.***",
    S = "****",
    T = "***",
    C = new _.YS({
        id: f.a,
        brand: p.Ay.Types.UNKNOWN,
        type: m.hes.CARD,
    });

function N(e, t) {
    if (e instanceof _.YS)
        return e.id === f.a
            ? {
                  brand: null,
                  label: E.intl.string(E.t.eQ2bLp),
              }
            : {
                  brand: t ? p.Ay.Types.UNKNOWN : e.brand,
                  label: E.intl.formatToPlainString(E.t.QvBAQk, {
                      last4: t ? S : e.last4,
                  }),
              };
    if (e instanceof _.SJ)
        return {
            brand: p.Ay.Types.PAYPAL,
            label: t ? I : e.email,
        };
    if (e instanceof _.A0)
        return {
            brand: p.Ay.Types.SOFORT,
            label: t ? I : e.email,
        };
    if (e instanceof _.Qh)
        return {
            brand: p.Ay.Types.GIROPAY,
            label: E.intl.string(E.t["y+0MQZ"]),
        };
    if (e instanceof _.Tu)
        return {
            brand: p.Ay.Types.PRZELEWY24,
            label: t ? I : e.email,
        };
    else if (e instanceof _.Ux)
        return {
            brand: p.Ay.Types.PAYSAFECARD,
            label: E.intl.string(E.t.e3APTT),
        };
    else if (e instanceof _.F_)
        return {
            brand: p.Ay.Types.GCASH,
            label: E.intl.string(E.t.PjehcF),
        };
    else if (e instanceof _.Xj)
        return {
            brand: p.Ay.Types.GRABPAY,
            label: E.intl.string(E.t.T5davE),
        };
    else if (e instanceof _.am)
        return {
            brand: p.Ay.Types.MOMO_WALLET,
            label: E.intl.string(E.t.J0A1Vk),
        };
    else if (e instanceof _._1)
        return {
            brand: p.Ay.Types.VENMO,
            label: t ? T : "@" + e.username,
        };
    else if (e instanceof _.i6)
        return {
            brand: p.Ay.Types.KAKAOPAY,
            label: E.intl.string(E.t.CSVexi),
        };
    else if (e instanceof _.cg)
        return {
            brand: p.Ay.Types.GOPAY_WALLET,
            label: E.intl.string(E.t["43J8JK"]),
        };
    else if (e instanceof _.UG)
        return {
            brand: p.Ay.Types.BANCONTACT,
            label: E.intl.string(E.t["1ITkfq"]),
        };
    else if (e instanceof _.rJ)
        return {
            brand: p.Ay.Types.EPS,
            label: E.intl.format(E.t.hSPoZw, {
                bank: (0, d.jK)(e.bank),
            }),
        };
    else if (e instanceof _.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank
                    ? E.intl.string(E.t.nSbwqC)
                    : E.intl.format(E.t["9kUlRU"], {
                          bank: (0, d.o0)(e.bank),
                      }),
        };
    else if (e instanceof _.FQ)
        return {
            brand: p.Ay.Types.CASH_APP,
            label: t ? T : e.username,
        };
    throw Error("Invalid Payment Source");
}

function w(e, t, n) {
    if (t.value === f.a)
        return (0, r.jsx)("div", {
            className: y.wC,
            children: t.label,
        });
    if (null != e) {
        let { brand: t, label: i } = N(e, n);
        return (0, r.jsxs)("div", {
            className: y.IF,
            children: [
                null != t
                    ? (0, r.jsx)(p.Ay, {
                          type: p.Ay.getType(t),
                      })
                    : null,
                (0, r.jsx)("div", {
                    className: o()(y.wC, {
                        [y.z3]: e.invalid,
                    }),
                    children: i,
                }),
            ],
        });
    }
    return (0, r.jsx)("div", {
        className: y.wC,
        children: t.label,
    });
}

function R(e, t) {
    let n = null;
    return (
        e && null != t && !t.canRedeemTrial()
            ? (n = E.intl.string(E.t.SvheW9))
            : e &&
              null != t &&
              t.hasFlag(g.rI.NEW) &&
              (n = E.intl.format(E.t.d7ZLKA, {
                  helpDeskArticle: h.A.getArticleURL(m.MVz.PAYMENT_AUTHORIZATION_CHARGE),
              })),
        n
    );
}
let P = (e) => {
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
                    let t = n.find((t) => t.id === e);
                    null != o && o(t);
                }
            },
            p = null != r ? [r] : [],
            h = [...p, ...n, ...(c ? [C] : [])].map((e, t) => {
                if (e instanceof _.Ay) {
                    let { brand: t, label: n } = N(e, a),
                        r = e === C || null == l || (null == l ? void 0 : l.includes(e.paymentGateway));
                    return {
                        value: e.id,
                        label: n,
                        brand: t,
                        disabled: !r,
                    };
                }
                return {
                    key: t,
                    value: e.value,
                    label: e.label,
                };
            }),
            m = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            g = t;
        if (null == g && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            g = 0 === e.length ? f.a : e[0].id;
        }
        return {
            hasNoPaymentSources: u,
            handleChange: d,
            prependOptions: p,
            paymentSourceOptions: h,
            paymentSource: m,
            selectedPaymentSourceId: g,
        };
    },
    D = (e) => {
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
                            r = v(e, ["label", "brand"]);
                        return O(
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
                    label: E.intl.string(E.t["u+Cw58"]),
                    value: null != l ? l : null,
                    options: u,
                    onChange: o,
                    onNew: null != t ? t : () => {},
                    disabled: a || n,
                    newPaymentMethodOptionLabel: c,
                }),
                [l, u, o, t, a, n, c],
            );
        return (0, r.jsx)(f.v, O({}, d));
    };

function L(e) {
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
            optionClassName: b,
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
            selectedPaymentSourceId: L,
        } = P({
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
        M = R(h, C),
        j = A
            ? (0, r.jsx)(D, {
                  onPaymentSourceAdd: _,
                  disabled: m,
                  handleChange: T,
                  paymentSourceOptions: N,
                  selectedPaymentSourceId: L,
                  newPaymentMethodOptionLabel: I,
              })
            : S
              ? (0, r.jsx)(c.$nd, {
                    variant: "primary",
                    fullWidth: !0,
                    onClick: _,
                    text: E.intl.string(E.t.eQ2bLp),
                })
              : (0, r.jsx)(l.Te, {
                    options: N,
                    value: L,
                    label: t,
                    onChange: T,
                    isDisabled: m,
                    className: o()(
                        {
                            [y.uQ]: null != M,
                        },
                        g,
                    ),
                    optionClassName: b,
                    placeholder: E.intl.string(E.t["8lqkf8"]),
                    renderOptionValue: (e) => {
                        let [t] = e;
                        return O
                            ? (0, r.jsx)(u.y$y, {
                                  type: u.tVU.SPINNING_CIRCLE,
                              })
                            : w(null == t.value ? void 0 : x.get(t.value), t, f);
                    },
                    renderOptionLabel: (e) => w(null == e.value ? void 0 : x.get(e.value), e, f),
                    "data-migration-pending": !0,
                });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            j,
            null != M
                ? (0, r.jsxs)("div", {
                      className: y.ot,
                      children: [
                          (0, r.jsx)(u.EpV, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: y.fT,
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
