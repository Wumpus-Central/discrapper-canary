"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(821609),
    d = n(289873),
    _ = n(452027),
    u = n(721101),
    c = n(405139),
    E = n(626584),
    h = n(812745),
    m = n(192087),
    f = n(723702),
    g = n(652215),
    p = n(985018),
    A = n(998460),
    I = n(653307);
let T = new E.A("ChoosePaymentSourceType"),
    S = {
        [g.hes.CARD]: h.Ay.Types.UNKNOWN,
        [g.hes.PAYPAL]: h.Ay.Types.PAYPAL,
        [g.hes.SOFORT]: h.Ay.Types.SOFORT,
        [g.hes.GIROPAY]: h.Ay.Types.GIROPAY,
        [g.hes.PRZELEWY24]: h.Ay.Types.PRZELEWY24,
        [g.hes.PAYSAFE_CARD]: h.Ay.Types.PAYSAFECARD,
        [g.hes.GCASH]: h.Ay.Types.GCASH,
        [g.hes.GRABPAY_MY]: h.Ay.Types.GRABPAY,
        [g.hes.MOMO_WALLET]: h.Ay.Types.MOMO_WALLET,
        [g.hes.VENMO]: h.Ay.Types.VENMO,
        [g.hes.KAKAOPAY]: h.Ay.Types.KAKAOPAY,
        [g.hes.GOPAY_WALLET]: h.Ay.Types.GOPAY_WALLET,
        [g.hes.BANCONTACT]: h.Ay.Types.BANCONTACT,
        [g.hes.EPS]: h.Ay.Types.EPS,
        [g.hes.IDEAL]: h.Ay.Types.IDEAL,
        [g.hes.CASH_APP]: h.Ay.Types.CASH_APP,
    };
class N extends r.PureComponent {
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
        if ((0, f.isDesktop)()) return !1;
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length) return !1;
        for (let t of e) if (!this.state[`${t}Loaded`]) return !0;
        return !1;
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            let t = S[e],
                n = m.w[e](),
                r =
                    null == this.props.paymentSourceTypeRestrictions ||
                    this.props.paymentSourceTypeRestrictions?.includes(e);
            return (0, i.jsx)(
                l.$,
                {
                    onClick: () => this.props.onChooseType(e),
                    disabled: !r,
                    fullWidth: !0,
                    text: n,
                    icon: () => (0, i.jsx)(h.Ay, { className: A.iA, type: t }),
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
                onStripePaymentMethodReceived: r,
                paymentRequestPaymentContext: s,
                isEligibleForTrial: o = !1,
                paymentSourceCreationContext: l,
            } = this.props,
            u = this.props.paymentRequestWallets ?? [],
            E = {
                iconClassName: A.iA,
                paymentLabel: p.intl.string(p.t.ZURqX0),
                onStripePaymentMethodReceived: r,
                onChooseType: t,
                paymentRequestPaymentContext: s,
            },
            h = u.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    r = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    s = `${e}-${t}`;
                return "applePay" === e ? (0, i.jsx)(c.Mv, { ...E, ...r }, s) : (0, i.jsx)(c.dP, { ...E, ...r }, s);
            }),
            m = this.arePaymentRequestWalletsLoading(),
            f = null == l || l.loading || m,
            g = null != l && !l.loading && null != l.error,
            T = null == l || l.loading || null == l.data ? null : l.data;
        if (f)
            e = (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)("div", { className: A.R, children: h }),
                    (0, i.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (g) e = (0, i.jsx)("div", { className: A.kL, children: p.intl.string(p.t["rTU7/z"]) });
        else if (null != T) {
            let t = this.createPaymentButtons(T.allowed_payment_source_types);
            e = (0, i.jsx)("div", {
                children: (0, i.jsxs)("div", { className: a()(I.LV, I.xM, A.kL), children: [t, h] }),
            });
        } else
            e = (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)("div", { className: A.R, children: h }),
                    (0, i.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
                ],
            });
        return (0, i.jsxs)("div", {
            children: [
                o && (0, i.jsx)("hr", { className: A.cL }),
                (0, i.jsx)("div", {
                    className: n,
                    children: (0, i.jsx)(_.D, {
                        label: o ? p.intl.string(p.t.tywMsW) : p.intl.string(p.t["8lqkf8"]),
                        children: e,
                    }),
                }),
                o && (0, i.jsx)("hr", { className: A.nD }),
            ],
        });
    }
}
let C = o.Ay.connectStores([u.A], () => {
    let e = u.A;
    return {
        paymentSourceCreationContext: e.loading
            ? { loading: !0, error: null, data: null }
            : null != e.error
              ? { loading: !1, error: e.error, data: null }
              : null != e.data
                ? { loading: !1, error: null, data: e.data }
                : { loading: !0, error: null, data: null },
    };
})(N);
