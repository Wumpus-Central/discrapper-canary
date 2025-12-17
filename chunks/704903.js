n.d(e, { Z: () => c }), n(539854), n(388685);
var s,
    i = n(54381),
    l = n(473749),
    a = n(846519),
    r = n(159691),
    o = n(481060),
    h = n(981631),
    d = n(388032),
    u = n(213376);
function p(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
class g extends (s = l.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    getActions() {
        let { canResend: t, canChange: e, submitting: n } = this.props,
            { email: s, password: i } = this.state;
        if (!t)
            return [
                {
                    text: d.intl.string(d.t.v740sh),
                    variant: "primary",
                    onClick: this.handleVerify,
                    loading: n,
                    disabled: 0 === s.length || 0 === i.length,
                },
            ];
        let l = [
            {
                variant: "secondary",
                text: d.intl.string(d.t.WnX4J2),
                onClick: this.handleResendEmail,
            },
        ];
        return (
            e &&
                l.push({
                    text: d.intl.string(d.t.Vm8akB),
                    variant: "primary",
                    onClick: this.handleChangeEmailClick,
                }),
            l
        );
    }
    renderInputs() {
        let { emailError: t, passwordError: e } = this.props,
            { email: n, password: s } = this.state;
        return (0, i.jsx)(o.Kqy, {
            gap: 40,
            padding: { bottom: 8 },
            children: (0, i.jsxs)(o.Kqy, {
                gap: 20,
                children: [
                    (0, i.jsx)(o.oil, {
                        label: d.intl.string(d.t.dI4d4S),
                        value: n,
                        error: t,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0,
                    }),
                    (0, i.jsx)(o.oil, {
                        label: d.intl.string(d.t["CIGa+7"]),
                        type: "password",
                        value: s,
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
            { email: n, canResend: s, transitionState: l } = this.props;
        return (
            (t =
                e && null != n
                    ? d.intl.format(d.t.JqLgQL, { email: n })
                    : s
                      ? d.intl.string(d.t.tSXg8O)
                      : d.intl.string(d.t.KW5DEh)),
            (0, i.jsx)(r.Ioy, {
                transitionState: l,
                title: d.intl.string(d.t["1MPz27"]),
                subtitle: t,
                graphic: {
                    type: "image",
                    src: u.Z,
                },
                onClose: this.props.onClose,
                actions: this.getActions(),
                children: !s && this.renderInputs(),
            })
        );
    }
    constructor(...t) {
        super(...t),
            p(this, "_timeout", new a.V7()),
            p(this, "state", {
                resent: !1,
                shouldClose: !1,
                email: "",
                password: "",
            }),
            p(this, "handleVerify", () => {
                let { onVerify: t } = this.props;
                t(this.state.email, this.state.password);
            }),
            p(this, "handleResendEmail", () => {
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
            p(this, "handleChangeEmailClick", () => {
                let { onChangeEmailClick: t } = this.props;
                this.setState({
                    resent: !1,
                    shouldClose: !1,
                }),
                    t();
            }),
            p(this, "handleEmailChange", (t) => {
                this.setState({ email: t });
            }),
            p(this, "handlePasswordChange", (t) => {
                this.setState({ password: t });
            }),
            p(this, "handleKeyPress", (t) => {
                let { email: e, password: n } = this.state;
                13 === t.which && e.length > 0 && n.length > 0 && (t.preventDefault(), this.handleVerify());
            });
    }
}
p(g, "defaultProps", {
    canResend: !1,
    canChange: !0,
    onChangeEmailClick: h.dG4,
    onVerify: (t, e) => {},
    onResend: h.dG4,
    onClose: h.dG4,
});
let c = g;
