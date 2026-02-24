"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(615405),
    g = n(723702),
    A = n(652215),
    I = n(985018),
    T = n(867321),
    S = n(641254);
let y = new p.A("ChoosePaymentSourceType"),
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
    N = 1e3,
    C = "40c266_1";
class b extends i.PureComponent {
    constructor(e) {
        super(e), (this.state = { showAllPaymentMethods: !1, applePayLoaded: !1, googlePayLoaded: !1 });
    }
    componentDidMount() {
        (0, c.xe)(),
            (this.props.paymentRequestWallets ?? []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, N);
    }
    considerPaymentRequestWalletsLoaded() {
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length || !this.arePaymentRequestWalletsLoading()) return;
        y.warn(`Payment request wallets failed to load in time: ${e.join(", ")}. Max time allowed: ${N} ms`);
        let t = e.reduce((e, t) => ({ ...e, [`${t}Loaded`]: !0 }), {});
        this.setState(t);
    }
    arePaymentRequestWalletsLoading() {
        if ((0, g.isDesktop)()) return !1;
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
                ipCountryCode: s,
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
                    s = `${e}-${t}`;
                return "applePay" === e ? (0, r.jsx)(f.Mv, { ...h, ...i }, s) : (0, r.jsx)(f.dP, { ...h, ...i }, s);
            }),
            E = [],
            g = [],
            A = void 0 === s || this.arePaymentRequestWalletsLoading();
        if (o)
            E.push(...this.createPaymentButtons((0, _.J)({ ipCountryCode: "ALL", location: C }).countryPaymentMethods));
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = (0, _.J)({ ipCountryCode: s, location: C });
            E.push(...this.createPaymentButtons(e)), g.push(...this.createPaymentButtons(t));
        }
        let y = (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)("div", { className: a()(S.LV, S.xM, T.kL), children: [E, m] }),
                (0, r.jsx)("div", {
                    className: g.length > 0 ? S.Uu : T.R,
                    children: (0, r.jsxs)(u.DUT, {
                        onClick: () => this.toggleAllPayments(),
                        className: a()(S.Uu, T.pn),
                        children: [I.intl.string(I.t["4uiQmz"]), (0, r.jsx)(d.A, { open: e })],
                    }),
                }),
                e && (0, r.jsx)("div", { className: a()(S.LV, S.xM, T.eH, T.kL, { [S.Uu]: e }), children: g }),
            ],
        });
        return (
            A &&
                !o &&
                (y = (0, r.jsxs)("div", {
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
                            children: y,
                        }),
                    }),
                    c && (0, r.jsx)("hr", { className: T.nD }),
                ],
            })
        );
    }
}
let R = o.Ay.connectStores([E.A], () => ({
    ipCountryCode: E.A.ipCountryCode,
    ipCountryCodeHasError: E.A.ipCountryCodeHasError,
}))(b);
