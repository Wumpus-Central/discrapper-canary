n.d(t, { A: () => T });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(821609),
    u = n(289873),
    c = n(452027),
    d = n(721101),
    p = n(405139),
    m = n(626584),
    h = n(812745),
    A = n(192087),
    _ = n(723702),
    C = n(652215),
    E = n(985018),
    y = n(998460),
    f = n(653307);
let P = new m.A("ChoosePaymentSourceType"),
    S = {
        [C.hes.CARD]: h.Ay.Types.UNKNOWN,
        [C.hes.PAYPAL]: h.Ay.Types.PAYPAL,
        [C.hes.SOFORT]: h.Ay.Types.SOFORT,
        [C.hes.GIROPAY]: h.Ay.Types.GIROPAY,
        [C.hes.PRZELEWY24]: h.Ay.Types.PRZELEWY24,
        [C.hes.PAYSAFE_CARD]: h.Ay.Types.PAYSAFECARD,
        [C.hes.GCASH]: h.Ay.Types.GCASH,
        [C.hes.GRABPAY_MY]: h.Ay.Types.GRABPAY,
        [C.hes.MOMO_WALLET]: h.Ay.Types.MOMO_WALLET,
        [C.hes.VENMO]: h.Ay.Types.VENMO,
        [C.hes.KAKAOPAY]: h.Ay.Types.KAKAOPAY,
        [C.hes.GOPAY_WALLET]: h.Ay.Types.GOPAY_WALLET,
        [C.hes.BANCONTACT]: h.Ay.Types.BANCONTACT,
        [C.hes.EPS]: h.Ay.Types.EPS,
        [C.hes.IDEAL]: h.Ay.Types.IDEAL,
        [C.hes.CASH_APP]: h.Ay.Types.CASH_APP,
    };
class x extends i.PureComponent {
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
        if ((0, _.isDesktop)()) return !1;
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length) return !1;
        for (let t of e) if (!this.state[`${t}Loaded`]) return !0;
        return !1;
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            let t = S[e],
                n = A.w[e](),
                i =
                    null == this.props.paymentSourceTypeRestrictions ||
                    this.props.paymentSourceTypeRestrictions?.includes(e);
            return (0, l.jsx)(
                o.$,
                {
                    onClick: () => this.props.onChooseType(e),
                    disabled: !i,
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
                onStripePaymentMethodReceived: i,
                paymentRequestPaymentContext: a,
                isEligibleForTrial: s = !1,
                paymentSourceCreationContext: o,
            } = this.props,
            d = this.props.paymentRequestWallets ?? [],
            m = {
                iconClassName: y.iA,
                paymentLabel: E.intl.string(E.t.ZURqX0),
                onStripePaymentMethodReceived: i,
                onChooseType: t,
                paymentRequestPaymentContext: a,
            },
            h = d.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    i = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    a = `${e}-${t}`;
                return "applePay" === e ? (0, l.jsx)(p.Mv, { ...m, ...i }, a) : (0, l.jsx)(p.dP, { ...m, ...i }, a);
            }),
            A = this.arePaymentRequestWalletsLoading(),
            _ = null == o || o.loading || A,
            C = null != o && !o.loading && null != o.error,
            P = null == o || o.loading || null == o.data ? null : o.data;
        if (_)
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: y.R, children: h }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (C) e = (0, l.jsx)("div", { className: y.kL, children: E.intl.string(E.t["rTU7/z"]) });
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
let T = s.Ay.connectStores([d.A], () => {
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
})(x);
