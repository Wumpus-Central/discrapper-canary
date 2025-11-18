i.d(e, { Z: () => v }), i(388685);
var n,
    s = i(54381),
    a = i(473749),
    l = i(120356),
    r = i.n(l),
    o = i(772848),
    h = i(846519),
    d = i(481060),
    u = i(981631),
    c = i(388032),
    m = i(613881),
    p = i(465106),
    g = i(10198);
function f(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
class C extends (n = a.PureComponent) {
    async componentDidMount() {
        let [t, { default: e }] = await Promise.all([
            i.e("27526").then(i.t.bind(i, 555589, 19)),
            Promise.resolve().then(i.t.bind(i, 500923, 23)),
        ]);
        null != this._lottieRef &&
            (this._animItem = e.loadAnimation({
                container: this._lottieRef,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: t,
            }));
    }
    componentWillUnmount() {
        this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0));
    }
    renderInputs() {
        let { emailError: t, passwordError: e, submitting: i } = this.props,
            { email: n, password: a } = this.state;
        return (0, s.jsx)("div", {
            className: m.container,
            children: (0, s.jsxs)(d.Kqy, {
                gap: 40,
                children: [
                    (0, s.jsxs)(d.Kqy, {
                        gap: 20,
                        children: [
                            (0, s.jsx)(d.oil, {
                                label: c.intl.string(c.t.dI4d4S),
                                value: n,
                                error: t,
                                onChange: this.handleEmailChange,
                                onKeyPress: this.handleKeyPress,
                                autoFocus: !0,
                            }),
                            (0, s.jsx)(d.oil, {
                                label: c.intl.string(c.t["CIGa+7"]),
                                type: "password",
                                value: a,
                                error: e,
                                onChange: this.handlePasswordChange,
                                onKeyPress: this.handleKeyPress,
                            }),
                        ],
                    }),
                    (0, s.jsx)(d.Button, {
                        text: c.intl.string(c.t.v740sh),
                        variant: "primary",
                        fullWidth: !0,
                        onClick: this.handleVerify,
                        loading: i,
                        disabled: 0 === n.length || 0 === a.length,
                    }),
                ],
            }),
        });
    }
    renderActions() {
        let { canChange: t } = this.props;
        return (0, s.jsxs)("div", {
            className: m.container,
            children: [
                (0, s.jsx)("div", {
                    className: g.marginTop20,
                    children: (0, s.jsx)(d.Button, {
                        text: c.intl.string(c.t.LdUkO6),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: this.handleResendEmail,
                    }),
                }),
                t &&
                    (0, s.jsx)("div", {
                        className: g.marginTop20,
                        children: (0, s.jsx)(d.Button, {
                            text: c.intl.string(c.t.oP5zGA),
                            variant: "primary",
                            fullWidth: !0,
                            onClick: this.handleChangeEmailClick,
                        }),
                    }),
            ],
        });
    }
    render() {
        let t,
            { resent: e } = this.state,
            { email: i, canResend: n, transitionState: a } = this.props;
        return (
            (t =
                e && null != i
                    ? c.intl.format(c.t.JqLgQL, { email: i })
                    : n
                      ? c.intl.string(c.t.tSXg8O)
                      : c.intl.string(c.t.KW5DEh)),
            (0, s.jsxs)(d.Y0X, {
                transitionState: a,
                "aria-labelledby": this._headerId,
                className: r()(m.emailVerificationModal, p.vertical, p.alignCenter, p.justifyCenter, g.marginTop60),
                parentComponent: "EmailVerificationModal",
                children: [
                    (0, s.jsx)("div", {
                        className: m.animationContainer,
                        ref: this.setLottieRef,
                    }),
                    (0, s.jsx)("div", {
                        id: this._headerId,
                        className: r()(m.title, g.marginBottom8),
                        children: c.intl.string(c.t["1MPz27"]),
                    }),
                    (0, s.jsx)("div", {
                        className: r()(m.body, g.marginBottom20),
                        children: t,
                    }),
                    n ? this.renderActions() : this.renderInputs(),
                ],
            })
        );
    }
    constructor(...t) {
        super(...t),
            f(this, "_lottieRef", void 0),
            f(this, "_animItem", null),
            f(this, "_timeout", new h.V7()),
            f(this, "_headerId", (0, o.Z)()),
            f(this, "state", {
                resent: !1,
                shouldClose: !1,
                email: "",
                password: "",
            }),
            f(this, "setLottieRef", (t) => {
                this._lottieRef = t;
            }),
            f(this, "handleVerify", () => {
                let { onVerify: t } = this.props;
                t(this.state.email, this.state.password);
            }),
            f(this, "handleResendEmail", () => {
                let { onResend: t, onClose: e } = this.props;
                t(),
                    this.state.resent ||
                        (this.setState({
                            resent: !0,
                            shouldClose: !0,
                        }),
                        this._timeout.start(3000, () => {
                            this.state.shouldClose && e();
                        }));
            }),
            f(this, "handleChangeEmailClick", () => {
                let { onChangeEmailClick: t } = this.props;
                this.setState({
                    resent: !1,
                    shouldClose: !1,
                }),
                    t();
            }),
            f(this, "handleEmailChange", (t) => {
                this.setState({ email: t });
            }),
            f(this, "handlePasswordChange", (t) => {
                this.setState({ password: t });
            }),
            f(this, "handleKeyPress", (t) => {
                let { email: e, password: i } = this.state;
                13 === t.which && e.length > 0 && i.length > 0 && (t.preventDefault(), this.handleVerify());
            });
    }
}
f(C, "defaultProps", {
    canResend: !1,
    canChange: !0,
    onChangeEmailClick: u.dG4,
    onVerify: (t, e) => {},
    onResend: u.dG4,
    onClose: u.dG4,
});
let v = C;
