r.d(n, {
    Ch: function () {
        return S;
    },
    Tr: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(710845),
    d = r(219929),
    f = r(626135),
    p = r(526167),
    h = r(358085),
    _ = r(622999),
    m = r(981631),
    g = r(388032),
    E = r(796953);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let y = new c.Z('PaymentRequest'),
    b = Object.values({
        applePay: 'applePay',
        googlePay: 'googlePay',
        link: 'link',
        browserCard: 'browserCard'
    });
class I extends o.Component {
    componentDidMount() {
        if (!(0, h.isDesktop)()) {
            if (!this.isBrowserCompatible()) {
                this.onPaymentRequestFailure();
                return;
            }
            (this.disableWallets = b.filter((e) => e !== this.paymentRequestWallet).sort()),
                (0, _.d2)().then((e) => {
                    this.initPaymentRequest(e);
                });
        }
    }
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: n } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                y.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == n) {
            let e = 'Payment request is unavailable or has not been set up in this browser. ';
            return (
                y.error(e, 'Stripe CanMakePaymentResult: ', n),
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
        let { available: n } = this.validatePaymentRequest();
        n ? this.onValidPaymentRequest() : this.onPaymentRequestFailure();
    }
    onPaymentRequestFailure() {
        void 0 !== this.props.onPaymentRequestFailure && this.props.onPaymentRequestFailure();
    }
    trackAnalyticsEvent(e) {
        let { paymentRequestPaymentContext: n } = this.props;
        if (void 0 === n) return null;
        let { contextMetadata: r, activitySessionId: i } = n,
            a = {
                load_id: r.loadId,
                payment_request_wallet: this.paymentRequestWallet,
                activity_session_id: i
            };
        f.default.track(e, a);
    }
    onValidPaymentRequest() {
        this.trackAnalyticsEvent(m.rMx.PAYMENT_REQUEST_LOADED), void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest();
    }
    renderLoadingState() {
        var e, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Button.Colors.BRAND,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Button.Looks.FILLED;
        return null !== (n = this.props.loadingComponent) && void 0 !== n
            ? n
            : (0, a.jsx)(u.Button, {
                  color: r,
                  className: null !== (e = this.props.className) && void 0 !== e ? e : E.button,
                  submitting: !0,
                  look: i
              });
    }
    renderButton(e) {
        var n, r;
        let { iconType: i, buttonText: o, ...s } = e;
        return (0, a.jsx)(
            u.Button,
            {
                onClick: this.attemptPaymentRequest,
                className: null !== (n = this.props.className) && void 0 !== n ? n : E.button,
                submitting: this.state.submitting,
                ...s,
                children: (0, a.jsxs)('div', {
                    className: E.centerContainer,
                    children: [
                        (0, a.jsx)(d.ZP, {
                            className: null !== (r = this.props.iconClassName) && void 0 !== r ? r : E.buttonIcon,
                            type: i
                        }),
                        o
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
                (0, a.jsx)(d.ZP, {
                    type: d.ZP.Types.PAYMENT_REQUEST,
                    size: d.Uy.MEDIUM,
                    className: E.paymentRequestIcon
                }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-md/medium',
                    className: E.connectionInstructions,
                    children: g.intl.string(g.t.f19PPT)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: d.ZP.Types.PAYMENT_REQUEST,
                  buttonText: g.intl.string(g.t.f19PPT),
                  submitting: !(0, h.isDesktop)() && this.state.submitting
              });
    }
    render() {
        if ((0, h.isDesktop)()) return this.renderMain();
        if (this.state.submitting) {
            var e;
            return null !== (e = this.props.loadingComponent) && void 0 !== e ? e : (0, a.jsx)(a.Fragment, {});
        }
        let { available: n } = this.validatePaymentRequest();
        return n ? this.renderMain() : (0, a.jsx)(a.Fragment, {});
    }
    constructor(...e) {
        super(...e),
            v(this, 'initialState', {
                submitting: !0,
                paymentRequest: null,
                canMakePaymentResult: null
            }),
            v(this, 'state', { ...this.initialState }),
            v(this, 'disableWallets', []),
            v(this, 'initPaymentRequest', async (e) => {
                if (null == e) return;
                this.setState({
                    submitting: !0,
                    paymentRequest: null,
                    canMakePaymentResult: null
                });
                let n = e.paymentRequest({
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
                null != this.props.paymentRequestRef && (this.props.paymentRequestRef.current = n);
                let { onStripePaymentMethodReceived: r } = this.props;
                n.on('paymentmethod', (e) => {
                    let { complete: n, paymentMethod: i } = e;
                    r(i), this.trackAnalyticsEvent(m.rMx.PAYMENT_REQUEST_COMPLETED), n('success');
                }),
                    n.on('cancel', () => {
                        r(null);
                    });
                let i = await n.canMakePayment();
                return (
                    y.info('PaymentRequest availablity check', i),
                    this.setState(
                        {
                            submitting: !1,
                            paymentRequest: n,
                            canMakePaymentResult: i
                        },
                        () => {
                            this.initPaymentRequestCallback(i);
                        }
                    ),
                    i
                );
            }),
            v(this, 'attemptPaymentRequest', () => {
                if ((0, h.isDesktop)()) {
                    this.props.onChooseType(m.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet);
                    return;
                }
                let { available: e } = this.validatePaymentRequest();
                if (!e) {
                    this.onPaymentRequestFailure();
                    return;
                }
                let { paymentRequest: n } = this.state;
                e && null != n && (n.show(), this.props.onChooseType(m.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet));
            });
    }
}
class T extends I {
    isBrowserCompatible() {
        return (0, p.vu)() >= 61;
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Google Pay';
            return (
                y.warn(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        let { paymentRequest: e, canMakePaymentResult: n } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                y.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == n || !n.googlePay) {
            let e = 'Google Pay is unavailable or has not been set up in this browser. ';
            return (
                y.error(e, 'Stripe CanMakePaymentResult: ', n),
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
                (0, a.jsx)(d.ZP, {
                    type: d.ZP.Types.G_PAY,
                    size: d.Uy.MEDIUM,
                    className: E.paymentRequestIcon
                }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-md/medium',
                    className: E.connectionInstructions,
                    children: g.intl.string(g.t.ueoGeX)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: d.ZP.Types.G_PAY,
                  buttonText: g.intl.string(g.t.p2jr2N),
                  submitting: !(0, h.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), v(this, 'state', { ...this.initialState }), v(this, 'paymentRequestWallet', 'googlePay');
    }
}
class S extends I {
    isBrowserCompatible() {
        return (0, p.G6)();
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Apple Pay';
            return (
                y.warn(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        let { paymentRequest: e, canMakePaymentResult: n } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                y.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == n || !n.applePay) {
            let e = 'Apple Pay is unavailable or has not been set up in this browser. ';
            return (
                y.error(e, 'Apple Pay Stripe CanMakePaymentResult: ', n),
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
                (0, a.jsx)(d.ZP, {
                    type: d.ZP.Types.APPLE,
                    size: d.Uy.MEDIUM,
                    className: l()(E.paymentRequestIcon, E.appleConnectorIcon)
                }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-md/medium',
                    className: E.connectionInstructions,
                    children: g.intl.string(g.t.iv8pQU)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: d.ZP.Types.APPLE_LIGHT,
                  buttonText: g.intl.string(g.t.xdGS1t),
                  submitting: !(0, h.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), v(this, 'state', { ...this.initialState }), v(this, 'paymentRequestWallet', 'applePay');
    }
}
