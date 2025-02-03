n.d(t, {
    Ch: () => b,
    Tr: () => I
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(710845),
    u = n(219929),
    c = n(626135),
    d = n(526167),
    f = n(358085),
    _ = n(622999),
    p = n(981631),
    h = n(388032),
    m = n(796953);
function g(e, t, n) {
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
let E = new l.Z('PaymentRequest'),
    v = Object.values({
        applePay: 'applePay',
        googlePay: 'googlePay',
        link: 'link',
        browserCard: 'browserCard'
    });
class y extends r.Component {
    componentDidMount() {
        if (!(0, f.isDesktop)()) {
            if (!this.isBrowserCompatible()) {
                this.onPaymentRequestFailure();
                return;
            }
            (this.disableWallets = v.filter((e) => e !== this.paymentRequestWallet).sort()),
                (0, _.d2)().then((e) => {
                    this.initPaymentRequest(e);
                });
        }
    }
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                E.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t) {
            let e = 'Payment request is unavailable or has not been set up in this browser. ';
            return (
                E.error(e, 'Stripe CanMakePaymentResult: ', t),
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
    trackAnalyticsEvent(e) {
        let { paymentRequestPaymentContext: t } = this.props;
        if (void 0 === t) return null;
        let { contextMetadata: n, activitySessionId: i } = t,
            r = {
                load_id: n.loadId,
                payment_request_wallet: this.paymentRequestWallet,
                activity_session_id: i
            };
        c.default.track(e, r);
    }
    onValidPaymentRequest() {
        this.trackAnalyticsEvent(p.rMx.PAYMENT_REQUEST_LOADED), void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest();
    }
    renderLoadingState() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.zxk.Colors.BRAND,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.zxk.Looks.FILLED;
        return null !== (t = this.props.loadingComponent) && void 0 !== t
            ? t
            : (0, i.jsx)(o.zxk, {
                  color: n,
                  className: null !== (e = this.props.className) && void 0 !== e ? e : m.button,
                  submitting: !0,
                  look: r
              });
    }
    renderButton(e) {
        var t, n;
        let { iconType: r, buttonText: a, ...s } = e;
        return (0, i.jsx)(
            o.zxk,
            {
                onClick: this.attemptPaymentRequest,
                className: null !== (t = this.props.className) && void 0 !== t ? t : m.button,
                submitting: this.state.submitting,
                ...s,
                children: (0, i.jsxs)('div', {
                    className: m.centerContainer,
                    children: [
                        (0, i.jsx)(u.ZP, {
                            className: null !== (n = this.props.iconClassName) && void 0 !== n ? n : m.buttonIcon,
                            type: r
                        }),
                        a
                    ]
                })
            },
            p.HeQ.PAYMENT_REQUEST
        );
    }
    renderConnectorView() {
        return (0, i.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, i.jsx)(u.ZP, {
                    type: u.ZP.Types.PAYMENT_REQUEST,
                    size: u.Uy.MEDIUM,
                    className: m.paymentRequestIcon
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    className: m.connectionInstructions,
                    children: h.intl.string(h.t.f19PPT)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.PAYMENT_REQUEST,
                  buttonText: h.intl.string(h.t.f19PPT),
                  submitting: !(0, f.isDesktop)() && this.state.submitting
              });
    }
    render() {
        if ((0, f.isDesktop)()) return this.renderMain();
        if (this.state.submitting) {
            var e;
            return null !== (e = this.props.loadingComponent) && void 0 !== e ? e : (0, i.jsx)(i.Fragment, {});
        }
        let { available: t } = this.validatePaymentRequest();
        return t ? this.renderMain() : (0, i.jsx)(i.Fragment, {});
    }
    constructor(...e) {
        super(...e),
            g(this, 'initialState', {
                submitting: !0,
                paymentRequest: null,
                canMakePaymentResult: null
            }),
            g(this, 'state', { ...this.initialState }),
            g(this, 'disableWallets', []),
            g(this, 'initPaymentRequest', async (e) => {
                if (null == e) return;
                this.setState({
                    submitting: !0,
                    paymentRequest: null,
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
                    let { complete: t, paymentMethod: i } = e;
                    n(i), this.trackAnalyticsEvent(p.rMx.PAYMENT_REQUEST_COMPLETED), t('success');
                }),
                    t.on('cancel', () => {
                        n(null);
                    });
                let i = await t.canMakePayment();
                return (
                    E.info('PaymentRequest availablity check', i),
                    this.setState(
                        {
                            submitting: !1,
                            paymentRequest: t,
                            canMakePaymentResult: i
                        },
                        () => {
                            this.initPaymentRequestCallback(i);
                        }
                    ),
                    i
                );
            }),
            g(this, 'attemptPaymentRequest', () => {
                if ((0, f.isDesktop)()) {
                    this.props.onChooseType(p.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet);
                    return;
                }
                let { available: e } = this.validatePaymentRequest();
                if (!e) {
                    this.onPaymentRequestFailure();
                    return;
                }
                let { paymentRequest: t } = this.state;
                e && null != t && (t.show(), this.props.onChooseType(p.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet));
            });
    }
}
class I extends y {
    isBrowserCompatible() {
        return (0, d.vu)() >= 61;
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Google Pay';
            return (
                E.warn(e),
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
                E.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.googlePay) {
            let e = 'Google Pay is unavailable or has not been set up in this browser. ';
            return (
                E.error(e, 'Stripe CanMakePaymentResult: ', t),
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
        return (0, i.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, i.jsx)(u.ZP, {
                    type: u.ZP.Types.G_PAY,
                    size: u.Uy.MEDIUM,
                    className: m.paymentRequestIcon
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    className: m.connectionInstructions,
                    children: h.intl.string(h.t.ueoGeX)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.G_PAY,
                  buttonText: h.intl.string(h.t.p2jr2N),
                  submitting: !(0, f.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), g(this, 'state', { ...this.initialState }), g(this, 'paymentRequestWallet', 'googlePay');
    }
}
class b extends y {
    isBrowserCompatible() {
        return (0, d.G6)();
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Apple Pay';
            return (
                E.warn(e),
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
                E.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.applePay) {
            let e = 'Apple Pay is unavailable or has not been set up in this browser. ';
            return (
                E.error(e, 'Apple Pay Stripe CanMakePaymentResult: ', t),
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
        return (0, i.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, i.jsx)(u.ZP, {
                    type: u.ZP.Types.APPLE,
                    size: u.Uy.MEDIUM,
                    className: s()(m.paymentRequestIcon, m.appleConnectorIcon)
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    className: m.connectionInstructions,
                    children: h.intl.string(h.t.iv8pQU)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.APPLE_LIGHT,
                  buttonText: h.intl.string(h.t.xdGS1t),
                  submitting: !(0, f.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), g(this, 'state', { ...this.initialState }), g(this, 'paymentRequestWallet', 'applePay');
    }
}
