n.d(t, { A: () => I });
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
    C = n(192087),
    A = n(723702),
    y = n(652215),
    E = n(375708),
    P = n(998460),
    S = n(653307);
let f = new m.A("ChoosePaymentSourceType"),
    _ = {
        [y.hes.CARD]: h.Ay.Types.UNKNOWN,
        [y.hes.PAYPAL]: h.Ay.Types.PAYPAL,
        [y.hes.SOFORT]: h.Ay.Types.SOFORT,
        [y.hes.GIROPAY]: h.Ay.Types.GIROPAY,
        [y.hes.PRZELEWY24]: h.Ay.Types.PRZELEWY24,
        [y.hes.PAYSAFE_CARD]: h.Ay.Types.PAYSAFECARD,
        [y.hes.GCASH]: h.Ay.Types.GCASH,
        [y.hes.GRABPAY_MY]: h.Ay.Types.GRABPAY,
        [y.hes.MOMO_WALLET]: h.Ay.Types.MOMO_WALLET,
        [y.hes.VENMO]: h.Ay.Types.VENMO,
        [y.hes.KAKAOPAY]: h.Ay.Types.KAKAOPAY,
        [y.hes.GOPAY_WALLET]: h.Ay.Types.GOPAY_WALLET,
        [y.hes.BANCONTACT]: h.Ay.Types.BANCONTACT,
        [y.hes.EPS]: h.Ay.Types.EPS,
        [y.hes.IDEAL]: h.Ay.Types.IDEAL,
        [y.hes.CASH_APP]: h.Ay.Types.CASH_APP,
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
        f.warn(`Payment request wallets failed to load in time: ${e.join(", ")}. Max time allowed: 1000 ms`);
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
    createPaymentButtons(e) {
        return e.map((e, t) => {
            let n = _[e],
                a = C.w[e](),
                i =
                    null == this.props.paymentSourceTypeRestrictions ||
                    this.props.paymentSourceTypeRestrictions?.includes(e);
            return (0, l.jsx)(
                o.$,
                {
                    autoFocus: 0 === t && i,
                    onClick: () => this.props.onChooseType(e),
                    disabled: !i,
                    fullWidth: !0,
                    text: a,
                    icon: () => (0, l.jsx)(h.Ay, { className: P.iA, type: n }),
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
                iconClassName: P.iA,
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
            C = this.arePaymentRequestWalletsLoading(),
            A = null == o || o.loading || C,
            y = null != o && !o.loading && null != o.error,
            f = null == o || o.loading || null == o.data ? null : o.data;
        if (A)
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: P.R, children: h }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (y) e = (0, l.jsx)("div", { className: P.kL, children: E.intl.string(E.t["rTU7/z"]) });
        else if (null != f) {
            let t = this.createPaymentButtons(f.allowed_payment_source_types);
            e = (0, l.jsx)("div", {
                children: (0, l.jsxs)("div", { className: r()(S.LV, S.xM, P.kL), children: [t, h] }),
            });
        } else
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: P.R, children: h }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        return (0, l.jsxs)("div", {
            children: [
                s && (0, l.jsx)("hr", { className: P.cL }),
                (0, l.jsx)("div", {
                    className: n,
                    children: (0, l.jsx)(c.D, {
                        label: s ? E.intl.string(E.t.tywMsW) : E.intl.string(E.t["8lqkf8"]),
                        children: e,
                    }),
                }),
                s && (0, l.jsx)("hr", { className: P.nD }),
            ],
        });
    }
}
let I = s.Ay.connectStores([d.A], () => {
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
