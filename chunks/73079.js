"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(821609),
    u = n(289873),
    c = n(452027),
    d = n(721101),
    _ = n(405139),
    f = n(626584),
    p = n(812745),
    h = n(192087),
    E = n(723702),
    m = n(652215),
    g = n(985018),
    A = n(998460),
    I = n(653307);
let T = new f.A("ChoosePaymentSourceType"),
    S = {
        [m.hes.CARD]: p.Ay.Types.UNKNOWN,
        [m.hes.PAYPAL]: p.Ay.Types.PAYPAL,
        [m.hes.SOFORT]: p.Ay.Types.SOFORT,
        [m.hes.GIROPAY]: p.Ay.Types.GIROPAY,
        [m.hes.PRZELEWY24]: p.Ay.Types.PRZELEWY24,
        [m.hes.PAYSAFE_CARD]: p.Ay.Types.PAYSAFECARD,
        [m.hes.GCASH]: p.Ay.Types.GCASH,
        [m.hes.GRABPAY_MY]: p.Ay.Types.GRABPAY,
        [m.hes.MOMO_WALLET]: p.Ay.Types.MOMO_WALLET,
        [m.hes.VENMO]: p.Ay.Types.VENMO,
        [m.hes.KAKAOPAY]: p.Ay.Types.KAKAOPAY,
        [m.hes.GOPAY_WALLET]: p.Ay.Types.GOPAY_WALLET,
        [m.hes.BANCONTACT]: p.Ay.Types.BANCONTACT,
        [m.hes.EPS]: p.Ay.Types.EPS,
        [m.hes.IDEAL]: p.Ay.Types.IDEAL,
        [m.hes.CASH_APP]: p.Ay.Types.CASH_APP,
    };
class y extends i.PureComponent {
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
        T.warn(`Payment request wallets failed to load in time: ${e.join(", ")}. Max time allowed: 1000 ms`);
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
        return e.map((e) => {
            let t = S[e],
                n = h.w[e](),
                i =
                    null == this.props.paymentSourceTypeRestrictions ||
                    this.props.paymentSourceTypeRestrictions?.includes(e);
            return (0, r.jsx)(
                l.$,
                {
                    onClick: () => this.props.onChooseType(e),
                    disabled: !i,
                    fullWidth: !0,
                    text: n,
                    icon: () => (0, r.jsx)(p.Ay, { className: A.iA, type: t }),
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
                paymentRequestPaymentContext: s,
                isEligibleForTrial: o = !1,
                paymentSourceCreationContext: l,
            } = this.props,
            d = this.props.paymentRequestWallets ?? [],
            f = {
                iconClassName: A.iA,
                paymentLabel: g.intl.string(g.t.ZURqX0),
                onStripePaymentMethodReceived: i,
                onChooseType: t,
                paymentRequestPaymentContext: s,
            },
            p = d.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    i = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    s = `${e}-${t}`;
                return "applePay" === e ? (0, r.jsx)(_.Mv, { ...f, ...i }, s) : (0, r.jsx)(_.dP, { ...f, ...i }, s);
            }),
            h = this.arePaymentRequestWalletsLoading(),
            E = null == l || l.loading || h,
            m = null != l && !l.loading && null != l.error,
            T = null == l || l.loading || null == l.data ? null : l.data;
        if (E)
            e = (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: A.R, children: p }),
                    (0, r.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (m) e = (0, r.jsx)("div", { className: A.kL, children: g.intl.string(g.t["rTU7/z"]) });
        else if (null != T) {
            let t = this.createPaymentButtons(T.allowed_payment_source_types);
            e = (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", { className: a()(I.LV, I.xM, A.kL), children: [t, p] }),
            });
        } else
            e = (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: A.R, children: p }),
                    (0, r.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE }),
                ],
            });
        return (0, r.jsxs)("div", {
            children: [
                o && (0, r.jsx)("hr", { className: A.cL }),
                (0, r.jsx)("div", {
                    className: n,
                    children: (0, r.jsx)(c.D, {
                        label: o ? g.intl.string(g.t.tywMsW) : g.intl.string(g.t["8lqkf8"]),
                        children: e,
                    }),
                }),
                o && (0, r.jsx)("hr", { className: A.nD }),
            ],
        });
    }
}
let N = o.Ay.connectStores([d.A], () => {
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
})(y);
