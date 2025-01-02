n.d(t, {
    Ch: function () {
        return P;
    },
    Tr: function () {
        return _;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    i = n(481060),
    o = n(710845),
    c = n(219929),
    u = n(526167),
    d = n(358085),
    p = n(622999),
    m = n(981631),
    h = n(388032),
    A = n(796953);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let N = new o.Z('PaymentRequest'),
    f = Object.values({
        applePay: 'applePay',
        googlePay: 'googlePay',
        link: 'link',
        browserCard: 'browserCard'
    });
class y extends r.Component {
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                N.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.googlePay) {
            let e = 'Payment request is unavailable or has not been set up in this browser. ';
            return (
                N.error(e, 'Stripe CanMakePaymentResult: ', t),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        return {
            available: !0,
            errorMessage: null
        };
    }
    initPaymentRequestCallback(e) {
        let { available: t } = this.validatePaymentRequest();
        t ? this.onValidPaymentRequest() : this.onPaymentRequestFailure();
    }
    onPaymentRequestFailure() {
        void 0 !== this.props.onPaymentRequestFailure && this.props.onPaymentRequestFailure();
    }
    onValidPaymentRequest() {
        void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest();
    }
    componentDidMount() {
        (this.disableWallets = f.filter((e) => e !== this.paymentRequestWallet).sort()),
            (0, p.d2)().then((e) => {
                this.initPaymentRequest(e);
            });
    }
    renderLoadingState() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Button.Colors.BRAND,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Button.Looks.FILLED;
        return null !== (t = this.props.loadingComponent) && void 0 !== t
            ? t
            : (0, a.jsx)(i.Button, {
                  color: n,
                  className: null !== (e = this.props.className) && void 0 !== e ? e : A.button,
                  submitting: !0,
                  look: r
              });
    }
    renderButton(e) {
        var t, n;
        let { iconType: r, buttonText: l, ...s } = e;
        return (0, a.jsx)(
            i.Button,
            {
                onClick: this.attemptPaymentRequest,
                className: null !== (t = this.props.className) && void 0 !== t ? t : A.button,
                submitting: this.state.submitting,
                ...s,
                children: (0, a.jsxs)('div', {
                    className: A.centerContainer,
                    children: [
                        (0, a.jsx)(c.ZP, {
                            className: null !== (n = this.props.iconClassName) && void 0 !== n ? n : A.buttonIcon,
                            type: r
                        }),
                        l
                    ]
                })
            },
            m.HeQ.PAYMENT_REQUEST
        );
    }
    renderConnectorView() {
        return (0, a.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, a.jsx)(c.ZP, {
                    type: c.ZP.Types.PAYMENT_REQUEST,
                    size: c.Uy.MEDIUM,
                    className: A.paymentRequestIcon
                }),
                (0, a.jsx)(i.Text, {
                    variant: 'text-md/medium',
                    className: A.connectionInstructions,
                    children: h.intl.string(h.t.f19PPT)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.ZP.Types.PAYMENT_REQUEST,
                  buttonText: h.intl.string(h.t.f19PPT),
                  submitting: !(0, d.isDesktop)() && this.state.submitting
              });
    }
    render() {
        if ((0, d.isDesktop)()) return this.renderMain();
        if (this.state.submitting) {
            var e;
            return null !== (e = this.props.loadingComponent) && void 0 !== e ? e : (0, a.jsx)(a.Fragment, {});
        }
        let { available: t } = this.validatePaymentRequest();
        return t ? this.renderMain() : (0, a.jsx)(a.Fragment, {});
    }
    constructor(...e) {
        super(...e),
            E(this, 'initialState', {
                submitting: !0,
                paymentRequest: null,
                canMakePayment: null,
                canMakePaymentResult: null
            }),
            E(this, 'state', { ...this.initialState }),
            E(this, 'disableWallets', []),
            E(this, 'initPaymentRequest', async (e) => {
                if (null == e) return;
                this.setState({
                    submitting: !0,
                    paymentRequest: null,
                    canMakePayment: null,
                    canMakePaymentResult: null
                });
                let t = e.paymentRequest({
                    country: 'US',
                    currency: 'usd',
                    total: {
                        label: this.props.paymentLabel,
                        amount: 0,
                        pending: !0
                    },
                    disableWallets: this.disableWallets,
                    requestPayerName: !0
                });
                null != this.props.paymentRequestRef && (this.props.paymentRequestRef.current = t);
                let { onStripePaymentMethodReceived: n } = this.props;
                t.on('paymentmethod', (e) => {
                    let { complete: t, paymentMethod: a } = e;
                    n(a), t('success');
                }),
                    t.on('cancel', () => {
                        n(null);
                    });
                let a = await t.canMakePayment();
                return (
                    N.info('PaymentRequest availablity check', a),
                    this.setState(
                        {
                            submitting: !1,
                            paymentRequest: t,
                            canMakePayment: !!a,
                            canMakePaymentResult: a
                        },
                        () => {
                            this.initPaymentRequestCallback(a);
                        }
                    ),
                    a
                );
            }),
            E(this, 'attemptPaymentRequest', () => {
                if ((0, d.isDesktop)()) {
                    this.props.onChooseType(m.HeQ.PAYMENT_REQUEST);
                    return;
                }
                let { available: e } = this.validatePaymentRequest();
                if (!e) {
                    this.onPaymentRequestFailure();
                    return;
                }
                let { paymentRequest: t } = this.state;
                e && null != t && (t.show(), this.props.onChooseType(m.HeQ.PAYMENT_REQUEST));
            });
    }
}
class _ extends y {
    isBrowserCompatible() {
        return (0, u.vu)() >= 61;
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Google Pay';
            return (
                N.warn(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                N.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.googlePay) {
            let e = 'Google Pay is unavailable or has not been set up in this browser. ';
            return (
                N.error(e, 'Stripe CanMakePaymentResult: ', t),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        return {
            available: !0,
            errorMessage: null
        };
    }
    renderConnectorView() {
        return (0, a.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, a.jsx)(c.ZP, {
                    type: c.ZP.Types.G_PAY,
                    size: c.Uy.MEDIUM,
                    className: A.paymentRequestIcon
                }),
                (0, a.jsx)(i.Text, {
                    variant: 'text-md/medium',
                    className: A.connectionInstructions,
                    children: h.intl.string(h.t.ueoGeX)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.ZP.Types.G_PAY,
                  buttonText: h.intl.string(h.t.p2jr2N),
                  submitting: !(0, d.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), E(this, 'state', { ...this.initialState }), E(this, 'paymentRequestWallet', 'googlePay');
    }
}
class P extends y {
    isBrowserCompatible() {
        return (0, u.G6)();
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Apple Pay';
            return (
                N.warn(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                N.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.applePay) {
            let e = 'Apple Pay is unavailable or has not been set up in this browser. ';
            return (
                N.error(e, 'Apple Pay Stripe CanMakePaymentResult: ', t),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        return {
            available: !0,
            errorMessage: null
        };
    }
    renderConnectorView() {
        return (0, a.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, a.jsx)(c.ZP, {
                    type: c.ZP.Types.APPLE,
                    size: c.Uy.MEDIUM,
                    className: s()(A.paymentRequestIcon, A.appleConnectorIcon)
                }),
                (0, a.jsx)(i.Text, {
                    variant: 'text-md/medium',
                    className: A.connectionInstructions,
                    children: h.intl.string(h.t.iv8pQU)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.ZP.Types.APPLE_LIGHT,
                  buttonText: h.intl.string(h.t.xdGS1t),
                  submitting: !(0, d.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), E(this, 'state', { ...this.initialState }), E(this, 'paymentRequestWallet', 'applePay');
    }
}
