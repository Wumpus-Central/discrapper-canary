n.d(t, {
    Ch: () => A,
    Tr: () => C,
}),
    n(642613),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(159691),
    l = n(481060),
    c = n(710845),
    u = n(219929),
    d = n(857192),
    f = n(626135),
    p = n(358085),
    _ = n(622999),
    m = n(51144),
    h = n(981631),
    g = n(388032),
    E = n(930858);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = new c.Z("PaymentRequest"),
    I = Object.values({
        applePay: "applePay",
        googlePay: "googlePay",
        link: "link",
        browserCard: "browserCard",
    });
class T extends i.Component {
    componentDidMount() {
        (0, p.isDesktop)() ||
            ((this.disableWallets = I.filter((e) => e !== this.paymentRequestWallet).sort()),
            (0, _.d2)().then((e) => {
                this.initPaymentRequest(e);
            }));
    }
    logInfo(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        (this.isUserStaff || d.default.isLoggingAnalyticsEvents) &&
            S.info("[".concat(this.paymentRequestWalletName, "] ").concat(e), ...n);
    }
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = "Payment request is not ready";
            return (
                this.logInfo(e),
                {
                    available: !1,
                    errorMessage: e,
                }
            );
        }
        if (null == t) {
            let e = "Payment request is unavailable or has not been set up in this browser. ";
            return (
                this.logInfo(e, "Stripe canMakePaymentResult: ", t),
                {
                    available: !1,
                    errorMessage: e,
                }
            );
        }
        return {
            available: !0,
            errorMessage: null,
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
                activity_session_id: r,
            };
        f.default.track(e, i);
    }
    onValidPaymentRequest() {
        this.trackAnalyticsEvent(h.rMx.PAYMENT_REQUEST_LOADED),
            void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest();
    }
    renderButton(e) {
        var { iconType: t, buttonText: n } = e,
            i = O(e, ["iconType", "buttonText"]);
        return (0, r.jsx)(
            s.zxk,
            y(
                {
                    fullWidth: !0,
                    onClick: this.attemptPaymentRequest,
                    text: n,
                    loading: this.state.submitting,
                    icon: () => {
                        var e;
                        return (0, r.jsx)(u.ZP, {
                            className: null != (e = this.props.iconClassName) ? e : E.buttonIcon,
                            type: t,
                        });
                    },
                },
                i,
            ),
            h.HeQ.PAYMENT_REQUEST,
        );
    }
    renderConnectorView() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(u.ZP, {
                    type: u.ZP.Types.PAYMENT_REQUEST,
                    size: u.Uy.MEDIUM,
                    className: E.paymentRequestIcon,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    className: E.connectionInstructions,
                    children: g.intl.string(g.t.f19PPV),
                }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.PAYMENT_REQUEST,
                  buttonText: g.intl.string(g.t.f19PPV),
                  loading: !(0, p.isDesktop)() && this.state.submitting,
              });
    }
    render() {
        if ((0, p.isDesktop)()) return this.renderMain();
        if (this.state.submitting) return this.props.loadingComponent;
        let { available: e } = this.validatePaymentRequest();
        return e ? this.renderMain() : null;
    }
    constructor(...e) {
        super(...e),
            b(this, "initialState", {
                submitting: !0,
                paymentRequest: null,
                canMakePaymentResult: null,
            }),
            b(this, "state", y({}, this.initialState)),
            b(this, "disableWallets", []),
            b(this, "isUserStaff", (0, m.vP)()),
            b(this, "initPaymentRequest", async (e) => {
                if (null == e) return;
                this.setState({
                    submitting: !0,
                    paymentRequest: null,
                    canMakePaymentResult: null,
                });
                let t = e.paymentRequest({
                    country: "US",
                    currency: "usd",
                    total: {
                        label: this.props.paymentLabel,
                        amount: 0,
                        pending: !0,
                    },
                    disableWallets: this.disableWallets,
                    requestPayerName: !0,
                });
                null != this.props.paymentRequestRef && (this.props.paymentRequestRef.current = t);
                let { onStripePaymentMethodReceived: n } = this.props;
                t.on("paymentmethod", (e) => {
                    let { complete: t, paymentMethod: r, payerName: i } = e;
                    n(r, i), this.trackAnalyticsEvent(h.rMx.PAYMENT_REQUEST_COMPLETED), t("success");
                }),
                    t.on("cancel", () => {
                        n(null);
                    });
                let r = await t.canMakePayment();
                return (
                    this.logInfo("PaymentRequest availability check canMakePayment result: ", r),
                    this.setState(
                        {
                            submitting: !1,
                            paymentRequest: t,
                            canMakePaymentResult: r,
                        },
                        () => {
                            this.initPaymentRequestCallback(r);
                        },
                    ),
                    r
                );
            }),
            b(this, "attemptPaymentRequest", () => {
                if ((0, p.isDesktop)())
                    return void this.props.onChooseType(h.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet);
                let { available: e } = this.validatePaymentRequest();
                if (!e) return void this.onPaymentRequestFailure();
                let { paymentRequest: t } = this.state;
                e && null != t && (t.show(), this.props.onChooseType(h.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet));
            });
    }
}
class C extends T {
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = "Payment request is not ready";
            return (
                this.logInfo(e),
                {
                    available: !1,
                    errorMessage: e,
                }
            );
        }
        if (null == t || !t.googlePay) {
            let e = "Google Pay is unavailable or has not been set up in this browser. ";
            return (
                this.logInfo(e, "Stripe canMakePaymentResult: ", t),
                {
                    available: !1,
                    errorMessage: e,
                }
            );
        }
        return {
            available: !0,
            errorMessage: null,
        };
    }
    renderConnectorView() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(u.ZP, {
                    type: u.ZP.Types.G_PAY,
                    size: u.Uy.MEDIUM,
                    className: E.paymentRequestIcon,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    className: E.connectionInstructions,
                    children: g.intl.string(g.t.ueoGef),
                }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.G_PAY,
                  buttonText: g.intl.string(g.t.p2jr2E),
                  loading: !(0, p.isDesktop)() && this.state.submitting,
              });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", y({}, this.initialState)),
            b(this, "paymentRequestWallet", "googlePay"),
            b(this, "paymentRequestWalletName", "Google Pay");
    }
}
class A extends T {
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = "Payment request is not ready";
            return (
                this.logInfo(e),
                {
                    available: !1,
                    errorMessage: e,
                }
            );
        }
        if (null == t || !t.applePay) {
            let e = "Apple Pay is unavailable or has not been set up in this browser. ";
            return (
                this.logInfo(e, "Stripe canMakePaymentResult: ", t),
                {
                    available: !1,
                    errorMessage: e,
                }
            );
        }
        return {
            available: !0,
            errorMessage: null,
        };
    }
    renderConnectorView() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(u.ZP, {
                    type: u.ZP.Types.APPLE,
                    size: u.Uy.MEDIUM,
                    className: o()(E.paymentRequestIcon, E.appleConnectorIcon),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    className: E.connectionInstructions,
                    children: g.intl.string(g.t.iv8pQV),
                }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.ZP.Types.APPLE_LIGHT,
                  buttonText: g.intl.string(g.t.xdGS1o),
                  loading: !(0, p.isDesktop)() && this.state.submitting,
              });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", y({}, this.initialState)),
            b(this, "paymentRequestWallet", "applePay"),
            b(this, "paymentRequestWalletName", "Apple Pay");
    }
}
