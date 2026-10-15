s.d(e, { default: () => S });
var n = s(477900),
    i = s(582128),
    a = s(17928),
    r = s(858899),
    l = s(830215),
    o = s(631670);
s(321073);
var h = s(451988),
    d = s(772707),
    g = s(331322),
    p = s(95477),
    u = s(652215),
    c = s(650583),
    m = s(105292),
    C = s(31008);
class f extends i.PureComponent {
    static defaultProps = {
        canResend: !1,
        canChange: !0,
        onChangeEmailClick: u.tEg,
        onVerify: (t, e) => {},
        onResend: u.tEg,
        onClose: u.tEg,
    };
    _timeout = new h.Ep();
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
                    text: m.intl.string(m.t.v740sh),
                    variant: "primary",
                    onClick: this.handleVerify,
                    loading: s,
                    disabled: 0 === n.length || 0 === i.length,
                },
            ];
        let a = [{ variant: "secondary", text: m.intl.string(m.t.WnX4J2), onClick: this.handleResendEmail }];
        return (
            e && a.push({ text: m.intl.string(m.t.Vm8akB), variant: "primary", onClick: this.handleChangeEmailClick }),
            a
        );
    }
    renderInputs() {
        let { emailError: t, passwordError: e } = this.props,
            { email: s, password: i } = this.state;
        return (0, n.jsx)(g.B, {
            gap: 40,
            padding: { bottom: 8 },
            children: (0, n.jsxs)(g.B, {
                gap: 20,
                children: [
                    (0, n.jsx)(p.k, {
                        label: m.intl.string(m.t.dI4d4S),
                        value: s,
                        error: t,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0,
                    }),
                    (0, n.jsx)(p.k, {
                        label: m.intl.string(m.t["CIGa+7"]),
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
                    ? m.intl.format(m.t.JqLgQL, { email: s })
                    : i
                      ? m.intl.string(m.t.tSXg8O)
                      : m.intl.string(m.t.KW5DEh)),
            (0, n.jsx)(d.k, {
                transitionState: a,
                title: m.intl.string(m.t["1MPz27"]),
                subtitle: t,
                graphic: { type: "image", src: C.A },
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
        (t(),
            this.state.resent ||
                (this.setState({ resent: !0, shouldClose: !0 }),
                this._timeout.start(3e3, () => {
                    this.state.shouldClose && e();
                })));
    };
    handleChangeEmailClick = () => {
        let { onChangeEmailClick: t } = this.props;
        (this.setState({ resent: !1, shouldClose: !1 }), t());
    };
    handleEmailChange = (t) => {
        this.setState({ email: t });
    };
    handlePasswordChange = (t) => {
        this.setState({ password: t });
    };
    handleKeyPress = (t) => {
        let { email: e, password: s } = this.state;
        t.key === c.dh.ENTER && e.length > 0 && s.length > 0 && (t.preventDefault(), this.handleVerify());
    };
}
var E = s(836602),
    y = s(774914),
    k = s(870570),
    v = s(287809),
    R = s(446868);
let S = function (t) {
    let { transitionState: e, onClose: s } = t,
        { formState: h, errors: d } = (0, a.cf)([E.A], () => ({
            formState: E.A.getFormState(),
            errors: E.A.getErrors(),
        })),
        g = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        p = (0, a.bG)([k.A], () => k.A.getAction()),
        c = !R.A.isEmailReverification(p),
        [C, S] = i.useState(!0),
        b = h === u.XlH.SUBMITTING;
    function x(t) {
        return d?.[t]?.[0] ?? "";
    }
    let A = x("email"),
        P = x("password");
    return (0, n.jsx)(f, {
        transitionState: e,
        email: g?.email,
        emailError: A,
        passwordError: P,
        submitting: b,
        canResend: C && !b && g?.email != null && 0 === A.length && 0 === P.length,
        canChange: c,
        onChangeEmailClick: function () {
            S(!1);
        },
        onVerify: function (t, e) {
            ((0, o._L)({ email: t, password: e }).then((t) => {
                t?.ok ||
                    (t?.body?.username != null
                        ? (0, y.E)()
                        : 0 === P.length &&
                          0 === A.length &&
                          (0, r.P0)({ text: m.intl.string(m.t.R0RpRX), variant: "critical" }));
            }),
                S(!0));
        },
        onResend: function () {
            l.A.verifyResend();
        },
        onClose: s,
    });
};
