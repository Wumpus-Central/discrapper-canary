n.d(t, {
    Ch: () => A,
    Tr: () => N
}),
    n(230036),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(710845),
    c = n(219929),
    u = n(626135),
    d = n(526167),
    f = n(358085),
    _ = n(622999),
    p = n(981631),
    h = n(388032),
    m = n(844424);
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = new l.Z('PaymentRequest'),
    S = Object.values({
        applePay: 'applePay',
        googlePay: 'googlePay',
        link: 'link',
        browserCard: 'browserCard'
    });
class T extends i.Component {
    componentDidMount() {
        if (!(0, f.isDesktop)()) {
            if (!this.isBrowserCompatible()) return void this.onPaymentRequestFailure();
            (this.disableWallets = S.filter((e) => e !== this.paymentRequestWallet).sort()),
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
                I.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t) {
            let e = 'Payment request is unavailable or has not been set up in this browser. ';
            return (
                I.error(e, 'Stripe CanMakePaymentResult: ', t),
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
        u.default.track(e, i);
    }
    onValidPaymentRequest() {
        this.trackAnalyticsEvent(p.rMx.PAYMENT_REQUEST_LOADED), void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest();
    }
    renderLoadingState() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.zxk.Colors.BRAND,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.zxk.Looks.FILLED;
        return null != (t = this.props.loadingComponent)
            ? t
            : (0, r.jsx)(s.zxk, {
                  color: n,
                  className: null != (e = this.props.className) ? e : m.button,
                  submitting: !0,
                  look: i
              });
    }
    renderButton(e) {
        var t,
            n,
            { iconType: i, buttonText: o } = e,
            a = v(e, ['iconType', 'buttonText']);
        return (0, r.jsx)(
            s.zxk,
            y(
                E(
                    {
                        onClick: this.attemptPaymentRequest,
                        className: null != (t = this.props.className) ? t : m.button,
                        submitting: this.state.submitting
                    },
                    a
                ),
                {
                    children: (0, r.jsxs)('div', {
                        className: m.centerContainer,
                        children: [
                            (0, r.jsx)(c.ZP, {
                                className: null != (n = this.props.iconClassName) ? n : m.buttonIcon,
                                type: i
                            }),
                            o
                        ]
                    })
                }
            ),
            p.HeQ.PAYMENT_REQUEST
        );
    }
    renderConnectorView() {
        return (0, r.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, r.jsx)(c.ZP, {
                    type: c.ZP.Types.PAYMENT_REQUEST,
                    size: c.Uy.MEDIUM,
                    className: m.paymentRequestIcon
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    className: m.connectionInstructions,
                    children: h.NW.string(h.t.f19PPT)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.ZP.Types.PAYMENT_REQUEST,
                  buttonText: h.NW.string(h.t.f19PPT),
                  submitting: !(0, f.isDesktop)() && this.state.submitting
              });
    }
    render() {
        if ((0, f.isDesktop)()) return this.renderMain();
        if (this.state.submitting) return this.props.loadingComponent;
        let { available: e } = this.validatePaymentRequest();
        return e ? this.renderMain() : null;
    }
    constructor(...e) {
        super(...e),
            g(this, 'initialState', {
                submitting: !0,
                paymentRequest: null,
                canMakePaymentResult: null
            }),
            g(this, 'state', E({}, this.initialState)),
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
                    let { complete: t, paymentMethod: r } = e;
                    n(r), this.trackAnalyticsEvent(p.rMx.PAYMENT_REQUEST_COMPLETED), t('success');
                }),
                    t.on('cancel', () => {
                        n(null);
                    });
                let r = await t.canMakePayment();
                return (
                    I.info('PaymentRequest availablity check', r),
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
            g(this, 'attemptPaymentRequest', () => {
                if ((0, f.isDesktop)()) return void this.props.onChooseType(p.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet);
                let { available: e } = this.validatePaymentRequest();
                if (!e) return void this.onPaymentRequestFailure();
                let { paymentRequest: t } = this.state;
                e && null != t && (t.show(), this.props.onChooseType(p.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet));
            });
    }
}
class N extends T {
    isBrowserCompatible() {
        return (0, d.vu)() >= 61;
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Google Pay';
            return (
                I.warn(e),
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
                I.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.googlePay) {
            let e = 'Google Pay is unavailable or has not been set up in this browser. ';
            return (
                I.error(e, 'Stripe CanMakePaymentResult: ', t),
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
                (0, r.jsx)(c.ZP, {
                    type: c.ZP.Types.G_PAY,
                    size: c.Uy.MEDIUM,
                    className: m.paymentRequestIcon
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    className: m.connectionInstructions,
                    children: h.NW.string(h.t.ueoGeX)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.ZP.Types.G_PAY,
                  buttonText: h.NW.string(h.t.p2jr2N),
                  submitting: !(0, f.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), g(this, 'state', E({}, this.initialState)), g(this, 'paymentRequestWallet', 'googlePay');
    }
}
class A extends T {
    isBrowserCompatible() {
        return (0, d.G6)();
    }
    validatePaymentRequest() {
        if (!this.isBrowserCompatible()) {
            let e = 'Browser does not support Apple Pay';
            return (
                I.warn(e),
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
                I.error(e),
                {
                    available: !1,
                    errorMessage: e
                }
            );
        }
        if (null == t || !t.applePay) {
            let e = 'Apple Pay is unavailable or has not been set up in this browser. ';
            return (
                I.error(e, 'Apple Pay Stripe CanMakePaymentResult: ', t),
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
                (0, r.jsx)(c.ZP, {
                    type: c.ZP.Types.APPLE,
                    size: c.Uy.MEDIUM,
                    className: a()(m.paymentRequestIcon, m.appleConnectorIcon)
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    className: m.connectionInstructions,
                    children: h.NW.string(h.t.iv8pQU)
                })
            ]
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.ZP.Types.APPLE_LIGHT,
                  buttonText: h.NW.string(h.t.xdGS1t),
                  submitting: !(0, f.isDesktop)() && this.state.submitting
              });
    }
    constructor(...e) {
        super(...e), g(this, 'state', E({}, this.initialState)), g(this, 'paymentRequestWallet', 'applePay');
    }
}
