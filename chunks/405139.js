n.d(t, {
    Mv: () => C,
    dP: () => T,
}),
    n(638769),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(732955),
    l = n(397927),
    c = n(626584),
    u = n(812745),
    d = n(111162),
    f = n(954571),
    p = n(723702),
    _ = n(71532),
    h = n(427262),
    m = n(652215),
    g = n(985018),
    E = n(205207);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let v = new c.A("PaymentRequest"),
    S = Object.values({
        applePay: "applePay",
        googlePay: "googlePay",
        link: "link",
        browserCard: "browserCard",
    });
class I extends i.Component {
    componentDidMount() {
        (0, p.isDesktop)() ||
            ((this.disableWallets = S.filter((e) => e !== this.paymentRequestWallet).sort()),
            (0, _.Cv)().then((e) => {
                this.initPaymentRequest(e);
            }));
    }
    logInfo(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        (this.isUserStaff || d.default.isLoggingAnalyticsEvents) &&
            v.info("[".concat(this.paymentRequestWalletName, "] ").concat(e), ...n);
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
        this.trackAnalyticsEvent(m.HAw.PAYMENT_REQUEST_LOADED),
            void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest();
    }
    renderButton(e) {
        let { iconType: t, buttonText: n } = e,
            i = O(e, ["iconType", "buttonText"]);
        return (0, r.jsx)(
            o.$nd,
            y(
                {
                    fullWidth: !0,
                    onClick: this.attemptPaymentRequest,
                    text: n,
                    loading: this.state.submitting,
                    icon: () => {
                        var e;
                        return (0, r.jsx)(u.Ay, {
                            className: null != (e = this.props.iconClassName) ? e : E.iA,
                            type: t,
                        });
                    },
                },
                i,
            ),
            m.hes.PAYMENT_REQUEST,
        );
    }
    renderConnectorView() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(u.Ay, {
                    type: u.Ay.Types.PAYMENT_REQUEST,
                    size: u.y3.MEDIUM,
                    className: E.rS,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    className: E.yW,
                    children: g.intl.string(g.t.f19PPV),
                }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.Ay.Types.PAYMENT_REQUEST,
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
            b(this, "isUserStaff", (0, h.Gn)()),
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
                    n(r, i), this.trackAnalyticsEvent(m.HAw.PAYMENT_REQUEST_COMPLETED), t("success");
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
                    return void this.props.onChooseType(m.hes.PAYMENT_REQUEST, this.paymentRequestWallet);
                let { available: e } = this.validatePaymentRequest();
                if (!e) return void this.onPaymentRequestFailure();
                let { paymentRequest: t } = this.state;
                e && null != t && (t.show(), this.props.onChooseType(m.hes.PAYMENT_REQUEST, this.paymentRequestWallet));
            });
    }
}
class T extends I {
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
                (0, r.jsx)(u.Ay, {
                    type: u.Ay.Types.G_PAY,
                    size: u.y3.MEDIUM,
                    className: E.rS,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    className: E.yW,
                    children: g.intl.string(g.t.ueoGef),
                }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.Ay.Types.G_PAY,
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
class C extends I {
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
                (0, r.jsx)(u.Ay, {
                    type: u.Ay.Types.APPLE,
                    size: u.y3.MEDIUM,
                    className: s()(E.rS, E.X6),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    className: E.yW,
                    children: g.intl.string(g.t.iv8pQV),
                }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: u.Ay.Types.APPLE_LIGHT,
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
