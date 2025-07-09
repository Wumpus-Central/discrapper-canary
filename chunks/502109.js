(n.d(t, {
    Ch: () => C,
    Tr: () => N
}),
    n(642613),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(710845),
    u = n(219929),
    d = n(626135),
    f = n(526167),
    _ = n(358085),
    p = n(622999),
    h = n(981631),
    m = n(388032),
    g = n(844424);
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let T = new c.Z('PaymentRequest'),
    S = Object.values({
        applePay: 'applePay',
        googlePay: 'googlePay',
        link: 'link',
        browserCard: 'browserCard'
    });
class A extends i.Component {
    componentDidMount() {
        if (!(0, _.isDesktop)()) {
            if (!this.isBrowserCompatible()) return void this.onPaymentRequestFailure();
            ((this.disableWallets = S.filter((e) => e !== this.paymentRequestWallet).sort()),
                (0, p.d2)().then((e) => {
                    this.initPaymentRequest(e);
                }));
        }
    }
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = 'Payment request is not ready';
            return (
                T.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t) {
            let e = 'Payment request is unavailable or has not been set up in this browser. ';
            return (
                T.error(e, 'Stripe CanMakePaymentResult: ', t),
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
        let { contextMetadata: n, activitySessionId: r } = t,
            i = {
                load_id: n.loadId,
                payment_request_wallet: this.paymentRequestWallet,
                activity_session_id: r
            };
        d.default.track(e, i);
    }
    onValidPaymentRequest() {
        (this.trackAnalyticsEvent(h.rMx.PAYMENT_REQUEST_LOADED), void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest());
    }
    renderLoadingState() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.zx.Colors.BRAND,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.zx.Looks.FILLED;
        return null != (t = this.props.loadingComponent)
            ? t
            : (0, r.jsx)(s.zx, {
                  color: n,
                  className: null != (e = this.props.className) ? e : g.button,
                  submitting: !0,
                  look: i
              });
    }
    renderButton(e) {
        var t,
            n,
            { iconType: i, buttonText: a } = e,
            o = v(e, ['iconType', 'buttonText']);
        return (0, r.jsx)(
            s.zx,
            O(
                b(
                    {
                        onClick: this.attemptPaymentRequest,
                        className: null != (t = this.props.className) ? t : g.button,
                        submitting: this.state.submitting
                    },
                    o
                ),
                {
                    children: (0, r.jsxs)('div', {
                        className: g.centerContainer,
                        children: [
                            (0, r.jsx)(u.ZP, {
                                className: null != (n = this.props.iconClassName) ? n : g.buttonIcon,
                                type: i
                            }),
                            a
                        ]
                    })
                }
            ),
            h.HeQ.PAYMENT_REQUEST
        );
    }
    renderConnectorView() {
        return (0, r.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, r.jsx)(u.ZP, {
                    type: u.ZP.Types.PAYMENT_REQUEST,
                    size: u.Uy.MEDIUM,
                    className: g.paymentRequestIcon
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    className: g.connectionInstructions,
                    children: m.intl.string(m.t.f19PPT)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.PAYMENT_REQUEST,
                  buttonText: m.intl.string(m.t.f19PPT),
                  submitting: !(0, _.isDesktop)() && this.state.submitting
              });
    }
    render() {
        if ((0, _.isDesktop)()) return this.renderMain();
        if (this.state.submitting) return this.props.loadingComponent;
        let { available: e } = this.validatePaymentRequest();
        return e ? this.renderMain() : null;
    }
    constructor(...e) {
        (super(...e),
            E(this, 'initialState', {
                submitting: !0,
                paymentRequest: null,
                canMakePaymentResult: null
            }),
            E(this, 'state', b({}, this.initialState)),
            E(this, 'disableWallets', []),
            E(this, 'initPaymentRequest', async (e) => {
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
                (t.on('paymentmethod', (e) => {
                    let { complete: t, paymentMethod: r } = e;
                    (n(r), this.trackAnalyticsEvent(h.rMx.PAYMENT_REQUEST_COMPLETED), t('success'));
                }),
                    t.on('cancel', () => {
                        n(null);
                    }));
                let r = await t.canMakePayment();
                return (
                    T.info('PaymentRequest availablity check', r),
                    this.setState(
                        {
                            submitting: !1,
                            paymentRequest: t,
                            canMakePaymentResult: r
                        },
                        () => {
                            this.initPaymentRequestCallback(r);
                        }
                    ),
                    r
                );
            }),
            E(this, 'attemptPaymentRequest', () => {
                if ((0, _.isDesktop)()) return void this.props.onChooseType(h.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet);
                let { available: e } = this.validatePaymentRequest();
                if (!e) return void this.onPaymentRequestFailure();
                let { paymentRequest: t } = this.state;
                e && null != t && (t.show(), this.props.onChooseType(h.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet));
            }));
    }
}
class N extends A {
    isBrowserCompatible() {
        return (0, f.vu)() >= 61;
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Google Pay';
            return (
                T.warn(e),
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
                T.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.googlePay) {
            let e = 'Google Pay is unavailable or has not been set up in this browser. ';
            return (
                T.error(e, 'Stripe CanMakePaymentResult: ', t),
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
        return (0, r.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, r.jsx)(u.ZP, {
                    type: u.ZP.Types.G_PAY,
                    size: u.Uy.MEDIUM,
                    className: g.paymentRequestIcon
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    className: g.connectionInstructions,
                    children: m.intl.string(m.t.ueoGeX)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.G_PAY,
                  buttonText: m.intl.string(m.t.p2jr2N),
                  submitting: !(0, _.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        (super(...e), E(this, 'state', b({}, this.initialState)), E(this, 'paymentRequestWallet', 'googlePay'));
    }
}
class C extends A {
    isBrowserCompatible() {
        return (0, f.G6)();
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Apple Pay';
            return (
                T.warn(e),
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
                T.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.applePay) {
            let e = 'Apple Pay is unavailable or has not been set up in this browser. ';
            return (
                T.error(e, 'Apple Pay Stripe CanMakePaymentResult: ', t),
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
        return (0, r.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, r.jsx)(u.ZP, {
                    type: u.ZP.Types.APPLE,
                    size: u.Uy.MEDIUM,
                    className: o()(g.paymentRequestIcon, g.appleConnectorIcon)
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    className: g.connectionInstructions,
                    children: m.intl.string(m.t.iv8pQU)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.APPLE_LIGHT,
                  buttonText: m.intl.string(m.t.xdGS1t),
                  submitting: !(0, _.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        (super(...e), E(this, 'state', b({}, this.initialState)), E(this, 'paymentRequestWallet', 'applePay'));
    }
}
