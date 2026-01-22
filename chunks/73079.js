n.d(t, {
    A: () => D,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(732955),
    c = n(397927),
    u = n(384904),
    d = n(551262),
    f = n(550238),
    p = n(405139),
    _ = n(626584),
    h = n(812745),
    m = n(192087),
    g = n(615405),
    E = n(723702),
    b = n(652215),
    y = n(985018),
    O = n(577991),
    A = n(20976);

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

function S(e) {
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
let C = new _.A("ChoosePaymentSourceType"),
    N = {
        [b.hes.CARD]: h.Ay.Types.UNKNOWN,
        [b.hes.PAYPAL]: h.Ay.Types.PAYPAL,
        [b.hes.SOFORT]: h.Ay.Types.SOFORT,
        [b.hes.GIROPAY]: h.Ay.Types.GIROPAY,
        [b.hes.PRZELEWY24]: h.Ay.Types.PRZELEWY24,
        [b.hes.PAYSAFE_CARD]: h.Ay.Types.PAYSAFECARD,
        [b.hes.GCASH]: h.Ay.Types.GCASH,
        [b.hes.GRABPAY_MY]: h.Ay.Types.GRABPAY,
        [b.hes.MOMO_WALLET]: h.Ay.Types.MOMO_WALLET,
        [b.hes.VENMO]: h.Ay.Types.VENMO,
        [b.hes.KAKAOPAY]: h.Ay.Types.KAKAOPAY,
        [b.hes.GOPAY_WALLET]: h.Ay.Types.GOPAY_WALLET,
        [b.hes.BANCONTACT]: h.Ay.Types.BANCONTACT,
        [b.hes.EPS]: h.Ay.Types.EPS,
        [b.hes.IDEAL]: h.Ay.Types.IDEAL,
        [b.hes.CASH_APP]: h.Ay.Types.CASH_APP,
    },
    R = 1e3,
    w = "40c266_1";
class P extends i.PureComponent {
    componentDidMount() {
        var e;
        (0, u.xe)(),
            (null != (e = this.props.paymentRequestWallets) ? e : []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, R);
    }
    considerPaymentRequestWalletsLoaded() {
        var e;
        let t = null != (e = this.props.paymentRequestWallets) ? e : [];
        if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
        C.warn(
            "Payment request wallets failed to load in time: "
                .concat(t.join(", "), ". Max time allowed: ")
                .concat(R, " ms"),
        );
        let n = t.reduce(
            (e, t) =>
                T(S({}, e), {
                    ["".concat(t, "Loaded")]: !0,
                }),
            {},
        );
        this.setState(n);
    }
    arePaymentRequestWalletsLoading() {
        var e;
        if ((0, E.isDesktop)()) return !1;
        let t = null != (e = this.props.paymentRequestWallets) ? e : [];
        if (0 === t.length) return !1;
        for (let e of t) if (!this.state["".concat(e, "Loaded")]) return !0;
        return !1;
    }
    toggleAllPayments() {
        let { showAllPaymentMethods: e } = this.state;
        this.setState({
            showAllPaymentMethods: !e,
        });
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            var t;
            let n = N[e],
                i = m.w[e](),
                a =
                    null == this.props.paymentSourceTypeRestrictions ||
                    (null == (t = this.props.paymentSourceTypeRestrictions) ? void 0 : t.includes(e));
            return (0, r.jsx)(
                l.$nd,
                {
                    onClick: () => this.props.onChooseType(e),
                    disabled: !a,
                    fullWidth: !0,
                    text: i,
                    icon: () =>
                        (0, r.jsx)(h.Ay, {
                            className: O.iA,
                            type: n,
                        }),
                },
                e,
            );
        });
    }
    render() {
        var e;
        let { showAllPaymentMethods: t } = this.state,
            {
                onChooseType: n,
                className: i,
                onStripePaymentMethodReceived: a,
                ipCountryCode: o,
                ipCountryCodeHasError: l,
                paymentRequestPaymentContext: u,
                isEligibleForTrial: _ = !1,
            } = this.props,
            h = null != (e = this.props.paymentRequestWallets) ? e : [],
            m = {
                iconClassName: O.iA,
                paymentLabel: y.intl.string(y.t.ZURqX0),
                onStripePaymentMethodReceived: a,
                onChooseType: n,
                paymentRequestPaymentContext: u,
            },
            g = h.map((e, t) => {
                let n = () =>
                        this.setState({
                            ["".concat(e, "Loaded")]: !0,
                        }),
                    i = {
                        onValidPaymentRequest: n,
                        onPaymentRequestFailure: n,
                    },
                    a = "".concat(e, "-").concat(t);
                return "applePay" === e ? (0, r.jsx)(p.Mv, S({}, m, i), a) : (0, r.jsx)(p.dP, S({}, m, i), a);
            }),
            E = [],
            b = [],
            v = void 0 === o || this.arePaymentRequestWalletsLoading();
        if (l)
            E.push(
                ...this.createPaymentButtons(
                    (0, f.J)({
                        ipCountryCode: "ALL",
                        location: w,
                    }).countryPaymentMethods,
                ),
            );
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = (0, f.J)({
                ipCountryCode: o,
                location: w,
            });
            E.push(...this.createPaymentButtons(e)), b.push(...this.createPaymentButtons(t));
        }
        let I = (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)("div", {
                    className: s()(A.LV, A.xM, O.kL),
                    children: [E, g],
                }),
                (0, r.jsx)("div", {
                    className: b.length > 0 ? A.Uu : O.R,
                    children: (0, r.jsxs)(c.DUT, {
                        onClick: () => this.toggleAllPayments(),
                        className: s()(A.Uu, O.pn),
                        children: [
                            y.intl.string(y.t["4uiQmz"]),
                            (0, r.jsx)(d.A, {
                                open: t,
                            }),
                        ],
                    }),
                }),
                t &&
                    (0, r.jsx)("div", {
                        className: s()(A.LV, A.xM, O.eH, O.kL, {
                            [A.Uu]: t,
                        }),
                        children: b,
                    }),
            ],
        });
        return (
            v &&
                !l &&
                (I = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            className: O.R,
                            children: g,
                        }),
                        (0, r.jsx)(c.y$y, {
                            type: c.y$y.Type.SPINNING_CIRCLE,
                        }),
                    ],
                })),
            (0, r.jsxs)("div", {
                children: [
                    _ &&
                        (0, r.jsx)("hr", {
                            className: O.cL,
                        }),
                    (0, r.jsx)("div", {
                        className: i,
                        children: (0, r.jsx)(c.D0$, {
                            label: _ ? y.intl.string(y.t.tywMsW) : y.intl.string(y.t["8lqkf8"]),
                            children: I,
                        }),
                    }),
                    _ &&
                        (0, r.jsx)("hr", {
                            className: O.nD,
                        }),
                ],
            })
        );
    }
    constructor(e) {
        super(e),
            (this.state = {
                showAllPaymentMethods: !1,
                applePayLoaded: !1,
                googlePayLoaded: !1,
            });
    }
}
let D = o.Ay.connectStores([g.A], () => ({
    ipCountryCode: g.A.ipCountryCode,
    ipCountryCodeHasError: g.A.ipCountryCodeHasError,
}))(P);
