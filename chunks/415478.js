s.d(e, { default: () => A });
var n = s(477900),
    i = s(582128),
    a = s(17928),
    r = s(376357),
    l = s(830215),
    o = s(631670);
s(321073);
var h = s(451988),
    d = s(772707),
    g = s(331322),
    p = s(95477),
    u = s(652215),
    c = s(650583),
    C = s(660183),
    m = s(31008);
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
                    text: C.intl.string(C.t.v740sh),
                    variant: "primary",
                    onClick: this.handleVerify,
                    loading: s,
                    disabled: 0 === n.length || 0 === i.length,
                },
            ];
        let a = [{ variant: "secondary", text: C.intl.string(C.t.WnX4J2), onClick: this.handleResendEmail }];
        return (
            e && a.push({ text: C.intl.string(C.t.Vm8akB), variant: "primary", onClick: this.handleChangeEmailClick }),
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
                        label: C.intl.string(C.t.dI4d4S),
                        value: s,
                        error: t,
                        onChange: this.handleEmailChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0,
                    }),
                    (0, n.jsx)(p.k, {
                        label: C.intl.string(C.t["CIGa+7"]),
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
                    ? C.intl.format(C.t.JqLgQL, { email: s })
                    : i
                      ? C.intl.string(C.t.tSXg8O)
                      : C.intl.string(C.t.KW5DEh)),
            (0, n.jsx)(d.k, {
                transitionState: a,
                title: C.intl.string(C.t["1MPz27"]),
                subtitle: t,
                graphic: { type: "image", src: m.A },
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
    k = s(774914),
    y = s(870570),
    R = s(287809),
    v = s(446868);
let A = function (t) {
    let { transitionState: e, onClose: s } = t,
        { formState: h, errors: d } = (0, a.cf)([E.A], () => ({
            formState: E.A.getFormState(),
            errors: E.A.getErrors(),
        })),
        g = (0, a.bG)([R.default], () => R.default.getCurrentUser()),
        p = (0, a.bG)([y.A], () => y.A.getAction()),
        c = !v.A.isEmailReverification(p),
        [m, A] = i.useState(!0),
        S = h === u.XlH.SUBMITTING;
    function b(t) {
        return d?.[t]?.[0] ?? "";
    }
    let x = b("email"),
        P = b("password");
    return (0, n.jsx)(f, {
        transitionState: e,
        email: g?.email,
        emailError: x,
        passwordError: P,
        submitting: S,
        canResend: m && !S && g?.email != null && 0 === x.length && 0 === P.length,
        canChange: c,
        onChangeEmailClick: function () {
            A(!1);
        },
        onVerify: function (t, e) {
            ((0, o._L)({ email: t, password: e }).then((t) => {
                t?.ok ||
                    (t?.body?.username != null
                        ? (0, k.E)()
                        : 0 === P.length &&
                          0 === x.length &&
                          (0, r.P0)((0, r.ox)(C.intl.string(C.t.R0RpRX), r.Ck.FAILURE)));
            }),
                A(!0));
        },
        onResend: function () {
            l.A.verifyResend();
        },
        onClose: s,
    });
};
