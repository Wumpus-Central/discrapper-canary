n.d(t, { A: () => x });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(17928),
    o = n(821609),
    u = n(289873),
    c = n(452027),
    d = n(721101),
    p = n(405139),
    m = n(626584),
    h = n(812745),
    A = n(192087),
    C = n(723702),
    _ = n(652215),
    E = n(985018),
    y = n(998460),
    f = n(653307);
let P = new m.A("ChoosePaymentSourceType"),
    S = {
        [_.hes.CARD]: h.Ay.Types.UNKNOWN,
        [_.hes.PAYPAL]: h.Ay.Types.PAYPAL,
        [_.hes.SOFORT]: h.Ay.Types.SOFORT,
        [_.hes.GIROPAY]: h.Ay.Types.GIROPAY,
        [_.hes.PRZELEWY24]: h.Ay.Types.PRZELEWY24,
        [_.hes.PAYSAFE_CARD]: h.Ay.Types.PAYSAFECARD,
        [_.hes.GCASH]: h.Ay.Types.GCASH,
        [_.hes.GRABPAY_MY]: h.Ay.Types.GRABPAY,
        [_.hes.MOMO_WALLET]: h.Ay.Types.MOMO_WALLET,
        [_.hes.VENMO]: h.Ay.Types.VENMO,
        [_.hes.KAKAOPAY]: h.Ay.Types.KAKAOPAY,
        [_.hes.GOPAY_WALLET]: h.Ay.Types.GOPAY_WALLET,
        [_.hes.BANCONTACT]: h.Ay.Types.BANCONTACT,
        [_.hes.EPS]: h.Ay.Types.EPS,
        [_.hes.IDEAL]: h.Ay.Types.IDEAL,
        [_.hes.CASH_APP]: h.Ay.Types.CASH_APP,
    };
class T extends a.PureComponent {
    constructor(e) {
        super(e), (this.state = { applePayLoaded: !1, googlePayLoaded: !1 });
    }
    componentDidMount() {
        (this.props.paymentRequestWallets ?? []).length > 0 &&
            setTimeout(() => {
                this.considerPaymentRequestWalletsLoaded();
            }, 1e3);
    }
    considerPaymentRequestWalletsLoaded() {
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length || !this.arePaymentRequestWalletsLoading()) return;
        P.warn(`Payment request wallets failed to load in time: ${e.join(", ")}. Max time allowed: 1000 ms`);
        let t = e.reduce((e, t) => ({ ...e, [`${t}Loaded`]: !0 }), {});
        this.setState(t);
    }
    arePaymentRequestWalletsLoading() {
        if ((0, C.isDesktop)()) return !1;
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length) return !1;
        for (let t of e) if (!this.state[`${t}Loaded`]) return !0;
        return !1;
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            let t = S[e],
                n = A.w[e](),
                a =
                    null == this.props.paymentSourceTypeRestrictions ||
                    this.props.paymentSourceTypeRestrictions?.includes(e);
            return (0, l.jsx)(
                o.$,
                {
                    onClick: () => this.props.onChooseType(e),
                    disabled: !a,
                    fullWidth: !0,
                    text: n,
                    icon: () => (0, l.jsx)(h.Ay, { className: y.iA, type: t }),
                },
                e,
            );
        });
    }
    render() {
        let e,
            {
                onChooseType: t,
                className: n,
                onStripePaymentMethodReceived: a,
                paymentRequestPaymentContext: i,
                isEligibleForTrial: s = !1,
                paymentSourceCreationContext: o,
            } = this.props,
            d = this.props.paymentRequestWallets ?? [],
            m = {
                iconClassName: y.iA,
                paymentLabel: E.intl.string(E.t.ZURqX0),
                onStripePaymentMethodReceived: a,
                onChooseType: t,
                paymentRequestPaymentContext: i,
            },
            h = d.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    a = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    i = `${e}-${t}`;
                return "applePay" === e ? (0, l.jsx)(p.Mv, { ...m, ...a }, i) : (0, l.jsx)(p.dP, { ...m, ...a }, i);
            }),
            A = this.arePaymentRequestWalletsLoading(),
            C = null == o || o.loading || A,
            _ = null != o && !o.loading && null != o.error,
            P = null == o || o.loading || null == o.data ? null : o.data;
        if (C)
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: y.R, children: h }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (_) e = (0, l.jsx)("div", { className: y.kL, children: E.intl.string(E.t["rTU7/z"]) });
        else if (null != P) {
            let t = this.createPaymentButtons(P.allowed_payment_source_types);
            e = (0, l.jsx)("div", {
                children: (0, l.jsxs)("div", { className: r()(f.LV, f.xM, y.kL), children: [t, h] }),
            });
        } else
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: y.R, children: h }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        return (0, l.jsxs)("div", {
            children: [
                s && (0, l.jsx)("hr", { className: y.cL }),
                (0, l.jsx)("div", {
                    className: n,
                    children: (0, l.jsx)(c.D, {
                        label: s ? E.intl.string(E.t.tywMsW) : E.intl.string(E.t["8lqkf8"]),
                        children: e,
                    }),
                }),
                s && (0, l.jsx)("hr", { className: y.nD }),
            ],
        });
    }
}
let x = s.Ay.connectStores([d.A], () => {
    let e = d.A;
    return {
        paymentSourceCreationContext: e.loading
            ? { loading: !0, error: null, data: null }
            : null != e.error
              ? { loading: !1, error: e.error, data: null }
              : null != e.data
                ? { loading: !1, error: null, data: e.data }
                : { loading: !0, error: null, data: null },
    };
})(T);
