s.d(e, { default: () => P });
var n = s(627968),
    i = s(64700),
    a = s(17928),
    r = s(691540),
    l = s(857250),
    o = s(97483),
    h = s(830215),
    d = s(631670);
s(321073);
var g = s(451988),
    c = s(772707),
    p = s(331322),
    u = s(292666),
    C = s(652215),
    m = s(650583),
    f = s(985018),
    E = s(31008);
class k extends i.PureComponent {
    static defaultProps = {
        canResend: !1,
        canChange: !0,
        onChangeEmailClick: C.tEg,
        onVerify: (t, e) => {},
        onResend: C.tEg,
        onClose: C.tEg,
    };
    _timeout = new g.Ep();
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
                    text: f.intl.string(f.t.v740sh),
                    variant: "primary",
                    onClick: this.handleVerify,
                    loading: s,
                    disabled: 0 === n.length || 0 === i.length,
                },
            ];
        let a = [{ variant: "secondary", text: f.intl.string(f.t.WnX4J2), onClick: this.handleResendEmail }];
        return (
            e && a.push({ text: f.intl.string(f.t.Vm8akB), variant: "primary", onClick: this.handleChangeEmailClick }),
            a
        );
    }
    renderInputs() {
        let { emailError: t, passwordError: e } = this.props,
            { email: s, password: i } = this.state;
        return (0, n.jsx)(p.B, {
            gap: 40,
            padding: { bottom: 8 },
            children: (0, n.jsxs)(p.B, {
                gap: 20,
                children: [
                    (0, n.jsx)(u.k, {
                        label: f.intl.string(f.t.dI4d4S),
                        value: s,
                        error: t,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0,
                    }),
                    (0, n.jsx)(u.k, {
                        label: f.intl.string(f.t["CIGa+7"]),
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
                    ? f.intl.format(f.t.JqLgQL, { email: s })
                    : i
                      ? f.intl.string(f.t.tSXg8O)
                      : f.intl.string(f.t.KW5DEh)),
            (0, n.jsx)(c.k, {
                transitionState: a,
                title: f.intl.string(f.t["1MPz27"]),
                subtitle: t,
                graphic: { type: "image", src: E.A },
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
        t.key === m.dh.ENTER && e.length > 0 && s.length > 0 && (t.preventDefault(), this.handleVerify());
    };
}
var y = s(836602),
    b = s(828578),
    v = s(870570),
    A = s(287809),
    R = s(446868);
let P = (t) => {
    let { transitionState: e, onClose: s } = t,
        { formState: g, errors: c } = (0, a.cf)([y.A], () => ({
            formState: y.A.getFormState(),
            errors: y.A.getErrors(),
        })),
        p = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        u = (0, a.bG)([v.A], () => v.A.getAction()),
        m = !R.A.isEmailReverification(u),
        [E, P] = i.useState(!0),
        S = g === C.XlH.SUBMITTING;
    function w(t) {
        return c?.[t]?.[0] ?? "";
    }
    let x = w("email"),
        I = w("password");
    return (0, n.jsx)(k, {
        transitionState: e,
        email: p?.email,
        emailError: x,
        passwordError: I,
        submitting: S,
        canResend: E && !S && p?.email != null && 0 === x.length && 0 === I.length,
        canChange: m,
        onChangeEmailClick: function () {
            P(!1);
        },
        onVerify: function (t, e) {
            (0, d._L)({ email: t, password: e }).then((t) => {
                t?.ok ||
                    (t?.body?.username != null
                        ? (0, b.E)()
                        : 0 === I.length &&
                          0 === x.length &&
                          (0, r.P0)((0, l.o)(f.intl.string(f.t.R0RpRX), o.Ck.FAILURE)));
            }),
                P(!0);
        },
        onResend: function () {
            h.A.verifyResend();
        },
        onClose: s,
    });
};
