"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(732955),
    u = n(397927),
    c = n(384904),
    d = n(551262),
    _ = n(550238),
    f = n(405139),
    p = n(626584),
    h = n(812745),
    m = n(192087),
    g = n(615405),
    E = n(723702),
    A = n(652215),
    I = n(985018),
    T = n(577991),
    y = n(20976);
let S = new p.A("ChoosePaymentSourceType"),
    v = {
        [A.hes.CARD]: h.Ay.Types.UNKNOWN,
        [A.hes.PAYPAL]: h.Ay.Types.PAYPAL,
        [A.hes.SOFORT]: h.Ay.Types.SOFORT,
        [A.hes.GIROPAY]: h.Ay.Types.GIROPAY,
        [A.hes.PRZELEWY24]: h.Ay.Types.PRZELEWY24,
        [A.hes.PAYSAFE_CARD]: h.Ay.Types.PAYSAFECARD,
        [A.hes.GCASH]: h.Ay.Types.GCASH,
        [A.hes.GRABPAY_MY]: h.Ay.Types.GRABPAY,
        [A.hes.MOMO_WALLET]: h.Ay.Types.MOMO_WALLET,
        [A.hes.VENMO]: h.Ay.Types.VENMO,
        [A.hes.KAKAOPAY]: h.Ay.Types.KAKAOPAY,
        [A.hes.GOPAY_WALLET]: h.Ay.Types.GOPAY_WALLET,
        [A.hes.BANCONTACT]: h.Ay.Types.BANCONTACT,
        [A.hes.EPS]: h.Ay.Types.EPS,
        [A.hes.IDEAL]: h.Ay.Types.IDEAL,
        [A.hes.CASH_APP]: h.Ay.Types.CASH_APP,
    },
    C = 1e3,
    b = "40c266_1";
class N extends i.PureComponent {
    constructor(e) {
        super(e), (this.state = { showAllPaymentMethods: !1, applePayLoaded: !1, googlePayLoaded: !1 });
    }
    componentDidMount() {
        (0, c.xe)(),
            (this.props.paymentRequestWallets ?? []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, C);
    }
    considerPaymentRequestWalletsLoaded() {
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length || !this.arePaymentRequestWalletsLoading()) return;
        S.warn(`Payment request wallets failed to load in time: ${e.join(", ")}. Max time allowed: ${C} ms`);
        let t = e.reduce((e, t) => ({ ...e, [`${t}Loaded`]: !0 }), {});
        this.setState(t);
    }
    arePaymentRequestWalletsLoading() {
        if ((0, E.isDesktop)()) return !1;
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length) return !1;
        for (let t of e) if (!this.state[`${t}Loaded`]) return !0;
        return !1;
    }
    toggleAllPayments() {
        let { showAllPaymentMethods: e } = this.state;
        this.setState({ showAllPaymentMethods: !e });
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            let t = v[e],
                n = m.w[e](),
                i =
                    null == this.props.paymentSourceTypeRestrictions ||
                    this.props.paymentSourceTypeRestrictions?.includes(e);
            return (0, r.jsx)(
                l.$nd,
                {
                    onClick: () => this.props.onChooseType(e),
                    disabled: !i,
                    fullWidth: !0,
                    text: n,
                    icon: () => (0, r.jsx)(h.Ay, { className: T.iA, type: t }),
                },
                e,
            );
        });
    }
    render() {
        let { showAllPaymentMethods: e } = this.state,
            {
                onChooseType: t,
                className: n,
                onStripePaymentMethodReceived: i,
                ipCountryCode: a,
                ipCountryCodeHasError: o,
                paymentRequestPaymentContext: l,
                isEligibleForTrial: c = !1,
            } = this.props,
            p = this.props.paymentRequestWallets ?? [],
            h = {
                iconClassName: T.iA,
                paymentLabel: I.intl.string(I.t.ZURqX0),
                onStripePaymentMethodReceived: i,
                onChooseType: t,
                paymentRequestPaymentContext: l,
            },
            m = p.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    i = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    a = `${e}-${t}`;
                return "applePay" === e ? (0, r.jsx)(f.Mv, { ...h, ...i }, a) : (0, r.jsx)(f.dP, { ...h, ...i }, a);
            }),
            g = [],
            E = [],
            A = void 0 === a || this.arePaymentRequestWalletsLoading();
        if (o)
            g.push(...this.createPaymentButtons((0, _.J)({ ipCountryCode: "ALL", location: b }).countryPaymentMethods));
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = (0, _.J)({ ipCountryCode: a, location: b });
            g.push(...this.createPaymentButtons(e)), E.push(...this.createPaymentButtons(t));
        }
        let S = (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)("div", { className: s()(y.LV, y.xM, T.kL), children: [g, m] }),
                (0, r.jsx)("div", {
                    className: E.length > 0 ? y.Uu : T.R,
                    children: (0, r.jsxs)(u.DUT, {
                        onClick: () => this.toggleAllPayments(),
                        className: s()(y.Uu, T.pn),
                        children: [I.intl.string(I.t["4uiQmz"]), (0, r.jsx)(d.A, { open: e })],
                    }),
                }),
                e && (0, r.jsx)("div", { className: s()(y.LV, y.xM, T.eH, T.kL, { [y.Uu]: e }), children: E }),
            ],
        });
        return (
            A &&
                !o &&
                (S = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", { className: T.R, children: m }),
                        (0, r.jsx)(u.y$y, { type: u.y$y.Type.SPINNING_CIRCLE }),
                    ],
                })),
            (0, r.jsxs)("div", {
                children: [
                    c && (0, r.jsx)("hr", { className: T.cL }),
                    (0, r.jsx)("div", {
                        className: n,
                        children: (0, r.jsx)(u.D0$, {
                            label: c ? I.intl.string(I.t.tywMsW) : I.intl.string(I.t["8lqkf8"]),
                            children: S,
                        }),
                    }),
                    c && (0, r.jsx)("hr", { className: T.nD }),
                ],
            })
        );
    }
}
let R = o.Ay.connectStores([g.A], () => ({
    ipCountryCode: g.A.ipCountryCode,
    ipCountryCodeHasError: g.A.ipCountryCodeHasError,
}))(N);
