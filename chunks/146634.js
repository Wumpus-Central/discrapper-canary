s.d(e, {
    A: () => c,
}),
    s(321073),
    s(896048);
var n,
    i = s(627968),
    l = s(64700),
    a = s(451988),
    r = s(732955),
    o = s(397927),
    h = s(652215),
    d = s(985018),
    u = s(31008);

function g(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = s),
        t
    );
}
class p extends (n = l.PureComponent) {
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
            { email: s, password: n } = this.state;
        return (0, i.jsx)(o.BJc, {
            gap: 40,
            padding: {
                bottom: 8,
            },
            children: (0, i.jsxs)(o.BJc, {
                gap: 20,
                children: [
                    (0, i.jsx)(o.ksK, {
                        label: d.intl.string(d.t.dI4d4S),
                        value: s,
                        error: t,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0,
                    }),
                    (0, i.jsx)(o.ksK, {
                        label: d.intl.string(d.t["CIGa+7"]),
                        type: "password",
                        value: n,
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
            { email: s, canResend: n, transitionState: l } = this.props;
        return (
            (t =
                e && null != s
                    ? d.intl.format(d.t.JqLgQL, {
                          email: s,
                      })
                    : n
                      ? d.intl.string(d.t.tSXg8O)
                      : d.intl.string(d.t.KW5DEh)),
            (0, i.jsx)(r.kpP, {
                transitionState: l,
                title: d.intl.string(d.t["1MPz27"]),
                subtitle: t,
                graphic: {
                    type: "image",
                    src: u.A,
                },
                onClose: this.props.onClose,
                actions: this.getActions(),
                children: !n && this.renderInputs(),
            })
        );
    }
    constructor(...t) {
        super(...t),
            g(this, "_timeout", new a.Ep()),
            g(this, "state", {
                resent: !1,
                shouldClose: !1,
                email: "",
                password: "",
            }),
            g(this, "handleVerify", () => {
                let { onVerify: t } = this.props;
                t(this.state.email, this.state.password);
            }),
            g(this, "handleResendEmail", () => {
                let { onResend: t, onClose: e } = this.props;
                t(),
                    this.state.resent ||
                        (this.setState({
                            resent: !0,
                            shouldClose: !0,
                        }),
                        this._timeout.start(3e3, () => {
                            this.state.shouldClose && e();
                        }));
            }),
            g(this, "handleChangeEmailClick", () => {
                let { onChangeEmailClick: t } = this.props;
                this.setState({
                    resent: !1,
                    shouldClose: !1,
                }),
                    t();
            }),
            g(this, "handleEmailChange", (t) => {
                this.setState({
                    email: t,
                });
            }),
            g(this, "handlePasswordChange", (t) => {
                this.setState({
                    password: t,
                });
            }),
            g(this, "handleKeyPress", (t) => {
                let { email: e, password: s } = this.state;
                13 === t.which && e.length > 0 && s.length > 0 && (t.preventDefault(), this.handleVerify());
            });
    }
}
g(p, "defaultProps", {
    canResend: !1,
    canChange: !0,
    onChangeEmailClick: h.tEg,
    onVerify: (t, e) => {},
    onResend: h.tEg,
    onClose: h.tEg,
});
let c = p;
