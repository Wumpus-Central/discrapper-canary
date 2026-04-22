n.d(t, { Mv: () => x, dP: () => S });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(821609),
    o = n(834730),
    u = n(626584),
    c = n(812745),
    d = n(111162),
    p = n(954571),
    m = n(723702),
    h = n(71532),
    A = n(427262),
    _ = n(652215),
    C = n(985018),
    E = n(608956);
let y = new u.A("PaymentRequest"),
    f = Object.values({ applePay: "applePay", googlePay: "googlePay", link: "link", browserCard: "browserCard" });
class P extends i.Component {
    initialState = { submitting: !0, paymentRequest: null, canMakePaymentResult: null };
    state = { ...this.initialState };
    disableWallets = [];
    isUserStaff = (0, A.Gn)();
    componentDidMount() {
        (0, m.isDesktop)() ||
            ((this.disableWallets = f.filter((e) => e !== this.paymentRequestWallet).sort()),
            (0, h.Cv)().then((e) => {
                this.initPaymentRequest(e);
            }));
    }
    logInfo(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) n[l - 1] = arguments[l];
        (this.isUserStaff || d.default.isLoggingAnalyticsEvents) &&
            y.info(`[${this.paymentRequestWalletName}] ${e}`, ...n);
    }
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = "Payment request is not ready";
            return this.logInfo(e), { available: !1, errorMessage: e };
        }
        if (null == t) {
            let e = "Payment request is unavailable or has not been set up in this browser. ";
            return this.logInfo(e, "Stripe canMakePaymentResult: ", t), { available: !1, errorMessage: e };
        }
        return { available: !0, errorMessage: null };
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
        let { contextMetadata: n, activitySessionId: l } = t,
            i = { load_id: n.loadId, payment_request_wallet: this.paymentRequestWallet, activity_session_id: l };
        p.default.track(e, i);
    }
    onValidPaymentRequest() {
        this.trackAnalyticsEvent(_.HAw.PAYMENT_REQUEST_LOADED),
            void 0 !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest();
    }
    initPaymentRequest = async (e) => {
        if (null == e) return;
        this.setState({ submitting: !0, paymentRequest: null, canMakePaymentResult: null });
        let t = e.paymentRequest({
            country: "US",
            currency: "usd",
            total: { label: this.props.paymentLabel, amount: 0, pending: !0 },
            disableWallets: this.disableWallets,
            requestPayerName: !0,
        });
        null != this.props.paymentRequestRef && (this.props.paymentRequestRef.current = t);
        let { onStripePaymentMethodReceived: n } = this.props;
        t.on("paymentmethod", (e) => {
            let { complete: t, paymentMethod: l, payerName: i } = e;
            n(l, i), this.trackAnalyticsEvent(_.HAw.PAYMENT_REQUEST_COMPLETED), t("success");
        }),
            t.on("cancel", () => {
                n(null);
            });
        let l = await t.canMakePayment();
        return (
            this.logInfo("PaymentRequest availability check canMakePayment result: ", l),
            this.setState({ submitting: !1, paymentRequest: t, canMakePaymentResult: l }, () => {
                this.initPaymentRequestCallback(l);
            }),
            l
        );
    };
    attemptPaymentRequest = () => {
        if ((0, m.isDesktop)()) return void this.props.onChooseType(_.hes.PAYMENT_REQUEST, this.paymentRequestWallet);
        let { available: e } = this.validatePaymentRequest();
        if (!e) return void this.onPaymentRequestFailure();
        let { paymentRequest: t } = this.state;
        null != t && (t.show(), this.props.onChooseType(_.hes.PAYMENT_REQUEST, this.paymentRequestWallet));
    };
    renderButton(e) {
        let { iconType: t, buttonText: n, ...i } = e;
        return (0, l.jsx)(
            s.$,
            {
                fullWidth: !0,
                onClick: this.attemptPaymentRequest,
                text: n,
                loading: this.state.submitting,
                icon: () => (0, l.jsx)(c.Ay, { className: this.props.iconClassName ?? E.iA, type: t }),
                ...i,
            },
            _.hes.PAYMENT_REQUEST,
        );
    }
    renderConnectorView() {
        return (0, l.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, l.jsx)(c.Ay, { type: c.Ay.Types.PAYMENT_REQUEST, size: c.y3.MEDIUM, className: E.rS }),
                (0, l.jsx)(o.E, { variant: "text-md/medium", className: E.yW, children: C.intl.string(C.t.f19PPV) }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.Ay.Types.PAYMENT_REQUEST,
                  buttonText: C.intl.string(C.t.f19PPV),
                  loading: !(0, m.isDesktop)() && this.state.submitting,
              });
    }
    render() {
        if ((0, m.isDesktop)()) return this.renderMain();
        if (this.state.submitting) return this.props.loadingComponent;
        let { available: e } = this.validatePaymentRequest();
        return e ? this.renderMain() : null;
    }
}
class S extends P {
    state = { ...this.initialState };
    paymentRequestWallet = "googlePay";
    paymentRequestWalletName = "Google Pay";
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = "Payment request is not ready";
            return this.logInfo(e), { available: !1, errorMessage: e };
        }
        if (null == t || !t.googlePay) {
            let e = "Google Pay is unavailable or has not been set up in this browser. ";
            return this.logInfo(e, "Stripe canMakePaymentResult: ", t), { available: !1, errorMessage: e };
        }
        return { available: !0, errorMessage: null };
    }
    renderConnectorView() {
        return (0, l.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, l.jsx)(c.Ay, { type: c.Ay.Types.G_PAY, size: c.y3.MEDIUM, className: E.rS }),
                (0, l.jsx)(o.E, { variant: "text-md/medium", className: E.yW, children: C.intl.string(C.t.ueoGef) }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.Ay.Types.G_PAY,
                  buttonText: C.intl.string(C.t.p2jr2E),
                  loading: !(0, m.isDesktop)() && this.state.submitting,
              });
    }
}
class x extends P {
    state = { ...this.initialState };
    paymentRequestWallet = "applePay";
    paymentRequestWalletName = "Apple Pay";
    validatePaymentRequest() {
        let { paymentRequest: e, canMakePaymentResult: t } = this.state;
        if (null == e) {
            let e = "Payment request is not ready";
            return this.logInfo(e), { available: !1, errorMessage: e };
        }
        if (null == t || !t.applePay) {
            let e = "Apple Pay is unavailable or has not been set up in this browser. ";
            return this.logInfo(e, "Stripe canMakePaymentResult: ", t), { available: !1, errorMessage: e };
        }
        return { available: !0, errorMessage: null };
    }
    renderConnectorView() {
        return (0, l.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, l.jsx)(c.Ay, { type: c.Ay.Types.APPLE, size: c.y3.MEDIUM, className: r()(E.rS, E.X6) }),
                (0, l.jsx)(o.E, { variant: "text-md/medium", className: E.yW, children: C.intl.string(C.t.iv8pQV) }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.Ay.Types.APPLE_LIGHT,
                  buttonText: C.intl.string(C.t.xdGS1o),
                  loading: !(0, m.isDesktop)() && this.state.submitting,
              });
    }
}
