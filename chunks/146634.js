s.d(e, { A: () => u }), s(321073);
var n = s(627968),
    i = s(64700),
    a = s(451988),
    l = s(732955),
    r = s(397927),
    o = s(652215),
    h = s(650583),
    d = s(985018),
    g = s(31008);
class p extends i.PureComponent {
    static defaultProps = {
        canResend: !1,
        canChange: !0,
        onChangeEmailClick: o.tEg,
        onVerify: (t, e) => {},
        onResend: o.tEg,
        onClose: o.tEg,
    };
    _timeout = new a.Ep();
    state = { resent: !1, shouldClose: !1, email: "", password: "" };
    componentWillUnmount() {
        this._timeout.stop();
    }
    getActions() {
        let { canResend: t, canChange: e, submitting: s } = this.props,
            { email: n, password: i } = this.state;
        if (!t)
            return [
                {
                    text: d.intl.string(d.t.v740sh),
                    variant: "primary",
                    onClick: this.handleVerify,
                    loading: s,
                    disabled: 0 === n.length || 0 === i.length,
                },
            ];
        let a = [{ variant: "secondary", text: d.intl.string(d.t.WnX4J2), onClick: this.handleResendEmail }];
        return (
            e && a.push({ text: d.intl.string(d.t.Vm8akB), variant: "primary", onClick: this.handleChangeEmailClick }),
            a
        );
    }
    renderInputs() {
        let { emailError: t, passwordError: e } = this.props,
            { email: s, password: i } = this.state;
        return (0, n.jsx)(r.BJc, {
            gap: 40,
            padding: { bottom: 8 },
            children: (0, n.jsxs)(r.BJc, {
                gap: 20,
                children: [
                    (0, n.jsx)(r.ksK, {
                        label: d.intl.string(d.t.dI4d4S),
                        value: s,
                        error: t,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0,
                    }),
                    (0, n.jsx)(r.ksK, {
                        label: d.intl.string(d.t["CIGa+7"]),
                        type: "password",
                        value: i,
                        error: e,
                        onChange: this.handlePasswordChange,
                        onKeyPress: this.handleKeyPress,
                    }),
                ],
            }),
        });
    }
    render() {
        let t,
            { resent: e } = this.state,
            { email: s, canResend: i, transitionState: a } = this.props;
        return (
            (t =
                e && null != s
                    ? d.intl.format(d.t.JqLgQL, { email: s })
                    : i
                      ? d.intl.string(d.t.tSXg8O)
                      : d.intl.string(d.t.KW5DEh)),
            (0, n.jsx)(l.kpP, {
                transitionState: a,
                title: d.intl.string(d.t["1MPz27"]),
                subtitle: t,
                graphic: { type: "image", src: g.A },
                onClose: this.props.onClose,
                actions: this.getActions(),
                children: !i && this.renderInputs(),
            })
        );
    }
    handleVerify = () => {
        let { onVerify: t } = this.props;
        t(this.state.email, this.state.password);
    };
    handleResendEmail = () => {
        let { onResend: t, onClose: e } = this.props;
        t(),
            this.state.resent ||
                (this.setState({ resent: !0, shouldClose: !0 }),
                this._timeout.start(3e3, () => {
                    this.state.shouldClose && e();
                }));
    };
    handleChangeEmailClick = () => {
        let { onChangeEmailClick: t } = this.props;
        this.setState({ resent: !1, shouldClose: !1 }), t();
    };
    handleEmailChange = (t) => {
        this.setState({ email: t });
    };
    handlePasswordChange = (t) => {
        this.setState({ password: t });
    };
    handleKeyPress = (t) => {
        let { email: e, password: s } = this.state;
        t.key === h.dh.ENTER && e.length > 0 && s.length > 0 && (t.preventDefault(), this.handleVerify());
    };
}
let u = p;
