"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(732955),
    u = n(397927),
    c = n(721101),
    d = n(405139),
    _ = n(626584),
    f = n(812745),
    p = n(192087),
    h = n(723702),
    m = n(652215),
    E = n(985018),
    g = n(460460),
    A = n(435115);
let I = new _.A("ChoosePaymentSourceType"),
    T = {
        [m.hes.CARD]: f.Ay.Types.UNKNOWN,
        [m.hes.PAYPAL]: f.Ay.Types.PAYPAL,
        [m.hes.SOFORT]: f.Ay.Types.SOFORT,
        [m.hes.GIROPAY]: f.Ay.Types.GIROPAY,
        [m.hes.PRZELEWY24]: f.Ay.Types.PRZELEWY24,
        [m.hes.PAYSAFE_CARD]: f.Ay.Types.PAYSAFECARD,
        [m.hes.GCASH]: f.Ay.Types.GCASH,
        [m.hes.GRABPAY_MY]: f.Ay.Types.GRABPAY,
        [m.hes.MOMO_WALLET]: f.Ay.Types.MOMO_WALLET,
        [m.hes.VENMO]: f.Ay.Types.VENMO,
        [m.hes.KAKAOPAY]: f.Ay.Types.KAKAOPAY,
        [m.hes.GOPAY_WALLET]: f.Ay.Types.GOPAY_WALLET,
        [m.hes.BANCONTACT]: f.Ay.Types.BANCONTACT,
        [m.hes.EPS]: f.Ay.Types.EPS,
        [m.hes.IDEAL]: f.Ay.Types.IDEAL,
        [m.hes.CASH_APP]: f.Ay.Types.CASH_APP,
    },
    S = 1e3;
class y extends i.PureComponent {
    constructor(e) {
        super(e), (this.state = { applePayLoaded: !1, googlePayLoaded: !1 });
    }
    componentDidMount() {
        (this.props.paymentRequestWallets ?? []).length > 0 &&
            setTimeout(() => {
                this.considerPaymentRequestWalletsLoaded();
            }, S);
    }
    considerPaymentRequestWalletsLoaded() {
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length || !this.arePaymentRequestWalletsLoading()) return;
        I.warn(`Payment request wallets failed to load in time: ${e.join(", ")}. Max time allowed: ${S} ms`);
        let t = e.reduce((e, t) => ({ ...e, [`${t}Loaded`]: !0 }), {});
        this.setState(t);
    }
    arePaymentRequestWalletsLoading() {
        if ((0, h.isDesktop)()) return !1;
        let e = this.props.paymentRequestWallets ?? [];
        if (0 === e.length) return !1;
        for (let t of e) if (!this.state[`${t}Loaded`]) return !0;
        return !1;
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            let t = T[e],
                n = p.w[e](),
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
                    icon: () => (0, r.jsx)(f.Ay, { className: g.iA, type: t }),
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
            c = this.props.paymentRequestWallets ?? [],
            _ = {
                iconClassName: g.iA,
                paymentLabel: E.intl.string(E.t.ZURqX0),
                onStripePaymentMethodReceived: i,
                onChooseType: t,
                paymentRequestPaymentContext: s,
            },
            f = c.map((e, t) => {
                let n = () => this.setState({ [`${e}Loaded`]: !0 }),
                    i = { onValidPaymentRequest: n, onPaymentRequestFailure: n },
                    s = `${e}-${t}`;
                return "applePay" === e ? (0, r.jsx)(d.Mv, { ..._, ...i }, s) : (0, r.jsx)(d.dP, { ..._, ...i }, s);
            }),
            p = this.arePaymentRequestWalletsLoading(),
            h = null == l || l.loading || p,
            m = null != l && !l.loading && null != l.error,
            I = null == l || l.loading || null == l.data ? null : l.data;
        if (h)
            e = (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: g.R, children: f }),
                    (0, r.jsx)(u.y$y, { type: u.y$y.Type.SPINNING_CIRCLE }),
                ],
            });
        else if (m) e = (0, r.jsx)("div", { className: g.kL, children: E.intl.string(E.t["rTU7/z"]) });
        else if (null != I) {
            let t = this.createPaymentButtons(I.allowed_payment_source_types);
            e = (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", { className: a()(A.LV, A.xM, g.kL), children: [t, f] }),
            });
        } else
            e = (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: g.R, children: f }),
                    (0, r.jsx)(u.y$y, { type: u.y$y.Type.SPINNING_CIRCLE }),
                ],
            });
        return (0, r.jsxs)("div", {
            children: [
                o && (0, r.jsx)("hr", { className: g.cL }),
                (0, r.jsx)("div", {
                    className: n,
                    children: (0, r.jsx)(u.D0$, {
                        label: o ? E.intl.string(E.t.tywMsW) : E.intl.string(E.t["8lqkf8"]),
                        children: e,
                    }),
                }),
                o && (0, r.jsx)("hr", { className: g.nD }),
            ],
        });
    }
}
let v = o.Ay.connectStores([c.A], () => {
    let e,
        t = c.A;
    return {
        paymentSourceCreationContext: (e = t.loading
            ? { loading: !0, error: null, data: null }
            : null != t.error
              ? { loading: !1, error: t.error, data: null }
              : null != t.data
                ? { loading: !1, error: null, data: t.data }
                : { loading: !0, error: null, data: null }),
    };
})(y);
