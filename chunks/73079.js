n.d(t, { A: () => T });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(821609),
    u = n(289873),
    c = n(452027),
    d = n(721101),
    p = n(405139),
    m = n(626584),
    C = n(812745),
    h = n(192087),
    E = n(723702),
    f = n(652215),
    A = n(375708),
    S = n(776356),
    y = n(582835);
let P = new m.A("ChoosePaymentSourceType"),
    I = {
        [f.hes.CARD]: C.Ay.Types.UNKNOWN,
        [f.hes.PAYPAL]: C.Ay.Types.PAYPAL,
        [f.hes.SOFORT]: C.Ay.Types.SOFORT,
        [f.hes.GIROPAY]: C.Ay.Types.GIROPAY,
        [f.hes.PRZELEWY24]: C.Ay.Types.PRZELEWY24,
        [f.hes.PAYSAFE_CARD]: C.Ay.Types.PAYSAFECARD,
        [f.hes.GCASH]: C.Ay.Types.GCASH,
        [f.hes.GRABPAY_MY]: C.Ay.Types.GRABPAY,
        [f.hes.MOMO_WALLET]: C.Ay.Types.MOMO_WALLET,
        [f.hes.VENMO]: C.Ay.Types.VENMO,
        [f.hes.KAKAOPAY]: C.Ay.Types.KAKAOPAY,
        [f.hes.GOPAY_WALLET]: C.Ay.Types.GOPAY_WALLET,
        [f.hes.BANCONTACT]: C.Ay.Types.BANCONTACT,
        [f.hes.EPS]: C.Ay.Types.EPS,
        [f.hes.IDEAL]: C.Ay.Types.IDEAL,
        [f.hes.CASH_APP]: C.Ay.Types.CASH_APP,
    };
class _ extends i.PureComponent {
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
                i = h.w[e](),
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
                    icon: () => (0, l.jsx)(C.Ay, { className: S.iA, type: n }),
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
                paymentLabel: A.intl.string(A.t.ZURqX0),
                onStripePaymentMethodReceived: i,
                onChooseType: t,
                paymentRequestPaymentContext: r,
            },
            C = d.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    i = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    r = `${e}-${t}`;
                return "applePay" === e ? (0, l.jsx)(p.Mv, { ...m, ...i }, r) : (0, l.jsx)(p.dP, { ...m, ...i }, r);
            }),
            h = this.arePaymentRequestWalletsLoading(),
            E = null == o || o.loading || h,
            f = null != o && !o.loading && null != o.error,
            P = null == o || o.loading || null == o.data ? null : o.data;
        if (E)
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: S.R, children: C }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (f) e = (0, l.jsx)("div", { className: S.kL, children: A.intl.string(A.t["rTU7/z"]) });
        else if (null != P) {
            let t = this.createPaymentButtons(P.allowed_payment_source_types);
            e = (0, l.jsx)("div", {
                children: (0, l.jsxs)("div", { className: a()(y.LV, y.xM, S.kL), children: [t, C] }),
            });
        } else
            e = (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", { className: S.R, children: C }),
                    (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        return (0, l.jsxs)("div", {
            children: [
                s && (0, l.jsx)("hr", { className: S.cL }),
                (0, l.jsx)("div", {
                    className: n,
                    children: (0, l.jsx)(c.D, {
                        label: s ? A.intl.string(A.t.tywMsW) : A.intl.string(A.t["8lqkf8"]),
                        children: e,
                    }),
                }),
                s && (0, l.jsx)("hr", { className: S.nD }),
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
})(_);
