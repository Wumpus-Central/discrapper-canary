n.d(t, { A: () => _ });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(821609),
    u = n(289873),
    c = n(452027),
    d = n(721101),
    p = n(405139),
    m = n(626584),
    h = n(812745),
    C = n(192087),
    E = n(723702),
    A = n(652215),
    f = n(375708),
    S = n(998460),
    y = n(653307);
let P = new m.A("ChoosePaymentSourceType"),
    I = {
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
    };
class T extends i.PureComponent {
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
        if ((0, E.isDesktop)()) return !1;
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length) return !1;
        for (let t of e) if (!this.state[`${t}Loaded`]) return !0;
        return !1;
    }
    createPaymentButtons(e) {
        return e.map((e, t) => {
            let n = I[e],
                i = C.w[e](),
                r =
                    null == this.props.paymentSourceTypeRestrictions ||
                    this.props.paymentSourceTypeRestrictions?.includes(e);
            return (0, l.jsx)(
                o.$,
                {
                    autoFocus: 0 === t && r,
                    onClick: () => this.props.onChooseType(e),
                    disabled: !r,
                    fullWidth: !0,
                    text: i,
                    icon: () => (0, l.jsx)(h.Ay, { className: S.iA, type: n }),
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
                paymentRequestPaymentContext: r,
                isEligibleForTrial: s = !1,
                paymentSourceCreationContext: o,
            } = this.props,
            d = this.props.paymentRequestWallets ?? [],
            m = {
                iconClassName: S.iA,
                paymentLabel: f.intl.string(f.t.ZURqX0),
                onStripePaymentMethodReceived: i,
                onChooseType: t,
                paymentRequestPaymentContext: r,
            },
            h = d.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    i = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    r = `${e}-${t}`;
                return "applePay" === e ? (0, l.jsx)(p.Mv, { ...m, ...i }, r) : (0, l.jsx)(p.dP, { ...m, ...i }, r);
            }),
            C = this.arePaymentRequestWalletsLoading(),
            E = null == o || o.loading || C,
            A = null != o && !o.loading && null != o.error,
            P = null == o || o.loading || null == o.data ? null : o.data;
        if (E)
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: S.R, children: h }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (A) e = (0, l.jsx)("div", { className: S.kL, children: f.intl.string(f.t["rTU7/z"]) });
        else if (null != P) {
            let t = this.createPaymentButtons(P.allowed_payment_source_types);
            e = (0, l.jsx)("div", {
                children: (0, l.jsxs)("div", { className: a()(y.LV, y.xM, S.kL), children: [t, h] }),
            });
        } else
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: S.R, children: h }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        return (0, l.jsxs)("div", {
            children: [
                s && (0, l.jsx)("hr", { className: S.cL }),
                (0, l.jsx)("div", {
                    className: n,
                    children: (0, l.jsx)(c.D, {
                        label: s ? f.intl.string(f.t.tywMsW) : f.intl.string(f.t["8lqkf8"]),
                        children: e,
                    }),
                }),
                s && (0, l.jsx)("hr", { className: S.nD }),
            ],
        });
    }
}
let _ = s.Ay.connectStores([d.A], () => {
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
