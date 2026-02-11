"use strict";
n.d(t, { A: () => O }), n(321073);
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
    h = n(626584),
    p = n(812745),
    g = n(192087),
    E = n(615405),
    A = n(723702),
    I = n(652215),
    T = n(985018),
    y = n(867321),
    S = n(641254);
let v = new h.A("ChoosePaymentSourceType"),
    C = {
        [I.hes.CARD]: p.Ay.Types.UNKNOWN,
        [I.hes.PAYPAL]: p.Ay.Types.PAYPAL,
        [I.hes.SOFORT]: p.Ay.Types.SOFORT,
        [I.hes.GIROPAY]: p.Ay.Types.GIROPAY,
        [I.hes.PRZELEWY24]: p.Ay.Types.PRZELEWY24,
        [I.hes.PAYSAFE_CARD]: p.Ay.Types.PAYSAFECARD,
        [I.hes.GCASH]: p.Ay.Types.GCASH,
        [I.hes.GRABPAY_MY]: p.Ay.Types.GRABPAY,
        [I.hes.MOMO_WALLET]: p.Ay.Types.MOMO_WALLET,
        [I.hes.VENMO]: p.Ay.Types.VENMO,
        [I.hes.KAKAOPAY]: p.Ay.Types.KAKAOPAY,
        [I.hes.GOPAY_WALLET]: p.Ay.Types.GOPAY_WALLET,
        [I.hes.BANCONTACT]: p.Ay.Types.BANCONTACT,
        [I.hes.EPS]: p.Ay.Types.EPS,
        [I.hes.IDEAL]: p.Ay.Types.IDEAL,
        [I.hes.CASH_APP]: p.Ay.Types.CASH_APP,
    },
    b = 1e3,
    N = "40c266_1";
class R extends i.PureComponent {
    constructor(e) {
        super(e), (this.state = { showAllPaymentMethods: !1, applePayLoaded: !1, googlePayLoaded: !1 });
    }
    componentDidMount() {
        (0, c.xe)(),
            (this.props.paymentRequestWallets ?? []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, b);
    }
    considerPaymentRequestWalletsLoaded() {
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length || !this.arePaymentRequestWalletsLoading()) return;
        v.warn(`Payment request wallets failed to load in time: ${e.join(", ")}. Max time allowed: ${b} ms`);
        let t = e.reduce((e, t) => ({ ...e, [`${t}Loaded`]: !0 }), {});
        this.setState(t);
    }
    arePaymentRequestWalletsLoading() {
        if ((0, A.isDesktop)()) return !1;
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
            let t = C[e],
                n = g.w[e](),
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
                    icon: () => (0, r.jsx)(p.Ay, { className: y.iA, type: t }),
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
            h = this.props.paymentRequestWallets ?? [],
            p = {
                iconClassName: y.iA,
                paymentLabel: T.intl.string(T.t.ZURqX0),
                onStripePaymentMethodReceived: i,
                onChooseType: t,
                paymentRequestPaymentContext: l,
            },
            g = h.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    i = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    a = `${e}-${t}`;
                return "applePay" === e ? (0, r.jsx)(f.Mv, { ...p, ...i }, a) : (0, r.jsx)(f.dP, { ...p, ...i }, a);
            }),
            E = [],
            A = [],
            I = void 0 === a || this.arePaymentRequestWalletsLoading();
        if (o)
            E.push(...this.createPaymentButtons((0, _.J)({ ipCountryCode: "ALL", location: N }).countryPaymentMethods));
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = (0, _.J)({ ipCountryCode: a, location: N });
            E.push(...this.createPaymentButtons(e)), A.push(...this.createPaymentButtons(t));
        }
        let v = (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)("div", { className: s()(S.LV, S.xM, y.kL), children: [E, g] }),
                (0, r.jsx)("div", {
                    className: A.length > 0 ? S.Uu : y.R,
                    children: (0, r.jsxs)(u.DUT, {
                        onClick: () => this.toggleAllPayments(),
                        className: s()(S.Uu, y.pn),
                        children: [T.intl.string(T.t["4uiQmz"]), (0, r.jsx)(d.A, { open: e })],
                    }),
                }),
                e && (0, r.jsx)("div", { className: s()(S.LV, S.xM, y.eH, y.kL, { [S.Uu]: e }), children: A }),
            ],
        });
        return (
            I &&
                !o &&
                (v = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", { className: y.R, children: g }),
                        (0, r.jsx)(u.y$y, { type: u.y$y.Type.SPINNING_CIRCLE }),
                    ],
                })),
            (0, r.jsxs)("div", {
                children: [
                    c && (0, r.jsx)("hr", { className: y.cL }),
                    (0, r.jsx)("div", {
                        className: n,
                        children: (0, r.jsx)(u.D0$, {
                            label: c ? T.intl.string(T.t.tywMsW) : T.intl.string(T.t["8lqkf8"]),
                            children: v,
                        }),
                    }),
                    c && (0, r.jsx)("hr", { className: y.nD }),
                ],
            })
        );
    }
}
let O = o.Ay.connectStores([E.A], () => ({
    ipCountryCode: E.A.ipCountryCode,
    ipCountryCodeHasError: E.A.ipCountryCodeHasError,
}))(R);
