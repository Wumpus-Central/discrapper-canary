"use strict";
n.d(t, { Mv: () => y, dP: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(732955),
    l = n(397927),
    u = n(626584),
    c = n(812745),
    d = n(111162),
    _ = n(954571),
    f = n(723702),
    p = n(71532),
    h = n(427262),
    m = n(652215),
    E = n(985018),
    g = n(865964);
let A = new u.A("PaymentRequest"),
    I = Object.values({ applePay: "applePay", googlePay: "googlePay", link: "link", browserCard: "browserCard" });
class T extends i.Component {
    initialState = { submitting: !0, paymentRequest: null, canMakePaymentResult: null };
    state = { ...this.initialState };
    disableWallets = [];
    isUserStaff = (0, h.Gn)();
    componentDidMount() {
        (0, f.isDesktop)() ||
            ((this.disableWallets = I.filter((e) => e !== this.paymentRequestWallet).sort()),
            (0, p.Cv)().then((e) => {
                this.initPaymentRequest(e);
            }));
    }
    logInfo(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        (this.isUserStaff || d.default.isLoggingAnalyticsEvents) &&
            A.info(`[${this.paymentRequestWalletName}] ${e}`, ...n);
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
        let { contextMetadata: n, activitySessionId: r } = t,
            i = { load_id: n.loadId, payment_request_wallet: this.paymentRequestWallet, activity_session_id: r };
        _.default.track(e, i);
    }
    onValidPaymentRequest() {
        this.trackAnalyticsEvent(m.HAw.PAYMENT_REQUEST_LOADED),
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
            let { complete: t, paymentMethod: r, payerName: i } = e;
            n(r, i), this.trackAnalyticsEvent(m.HAw.PAYMENT_REQUEST_COMPLETED), t("success");
        }),
            t.on("cancel", () => {
                n(null);
            });
        let r = await t.canMakePayment();
        return (
            this.logInfo("PaymentRequest availability check canMakePayment result: ", r),
            this.setState({ submitting: !1, paymentRequest: t, canMakePaymentResult: r }, () => {
                this.initPaymentRequestCallback(r);
            }),
            r
        );
    };
    attemptPaymentRequest = () => {
        if ((0, f.isDesktop)()) return void this.props.onChooseType(m.hes.PAYMENT_REQUEST, this.paymentRequestWallet);
        let { available: e } = this.validatePaymentRequest();
        if (!e) return void this.onPaymentRequestFailure();
        let { paymentRequest: t } = this.state;
        null != t && (t.show(), this.props.onChooseType(m.hes.PAYMENT_REQUEST, this.paymentRequestWallet));
    };
    renderButton(e) {
        let { iconType: t, buttonText: n, ...i } = e;
        return (0, r.jsx)(
            o.$nd,
            {
                fullWidth: !0,
                onClick: this.attemptPaymentRequest,
                text: n,
                loading: this.state.submitting,
                icon: () => (0, r.jsx)(c.Ay, { className: this.props.iconClassName ?? g.iA, type: t }),
                ...i,
            },
            m.hes.PAYMENT_REQUEST,
        );
    }
    renderConnectorView() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(c.Ay, { type: c.Ay.Types.PAYMENT_REQUEST, size: c.y3.MEDIUM, className: g.rS }),
                (0, r.jsx)(l.Text, { variant: "text-md/medium", className: g.yW, children: E.intl.string(E.t.f19PPV) }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.Ay.Types.PAYMENT_REQUEST,
                  buttonText: E.intl.string(E.t.f19PPV),
                  loading: !(0, f.isDesktop)() && this.state.submitting,
              });
    }
    render() {
        if ((0, f.isDesktop)()) return this.renderMain();
        if (this.state.submitting) return this.props.loadingComponent;
        let { available: e } = this.validatePaymentRequest();
        return e ? this.renderMain() : null;
    }
}
class S extends T {
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
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(c.Ay, { type: c.Ay.Types.G_PAY, size: c.y3.MEDIUM, className: g.rS }),
                (0, r.jsx)(l.Text, { variant: "text-md/medium", className: g.yW, children: E.intl.string(E.t.ueoGef) }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.Ay.Types.G_PAY,
                  buttonText: E.intl.string(E.t.p2jr2E),
                  loading: !(0, f.isDesktop)() && this.state.submitting,
              });
    }
}
class y extends T {
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
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [
                (0, r.jsx)(c.Ay, { type: c.Ay.Types.APPLE, size: c.y3.MEDIUM, className: a()(g.rS, g.X6) }),
                (0, r.jsx)(l.Text, { variant: "text-md/medium", className: g.yW, children: E.intl.string(E.t.iv8pQV) }),
            ],
        });
    }
    renderMain() {
        return this.props.renderConnectorView
            ? this.renderConnectorView()
            : this.renderButton({
                  iconType: c.Ay.Types.APPLE_LIGHT,
                  buttonText: E.intl.string(E.t.xdGS1o),
                  loading: !(0, f.isDesktop)() && this.state.submitting,
              });
    }
}
