s.d(e, { default: () => N });
var r = s(627968),
    n = s(64700),
    o = s(110259),
    i = s(511815),
    a = s(158954),
    l = s(311907),
    d = s(139033),
    h = s(397927),
    c = s(830215),
    u = s(163050),
    p = s(139286),
    g = s(15552),
    f = s(854378),
    _ = s(952116),
    A = s(720353),
    m = s(557722),
    C = s(148864),
    w = s(146571),
    x = s(976860),
    b = s(544028),
    P = s(933924),
    E = s(293731),
    R = s(961350),
    y = s(650048),
    k = s(203982),
    S = s(723702),
    T = s(837921),
    F = s(652215),
    I = s(985018),
    L = s(31669),
    j = s(473169);
class M extends n.PureComponent {
    static defaultProps = { transitionTo: (t) => s.g.location.assign(t), replaceWith: (t) => s.g.location.replace(t) };
    loginRef;
    passwordRef;
    codeRef;
    constructor(t) {
        super(t),
            (this.state = {
                loginPrefix: "",
                login: "",
                password: "",
                code: "",
                smsCode: "",
                phoneVerifyError: null,
                resetPasswordPhoneToken: null,
                undelete: !1,
                errors: {},
                conditionalMediationAbortController: new AbortController(),
            });
    }
    componentDidMount() {
        window.addEventListener("keydown", this.handleTabOrEnter),
            (0, P.a)({ abortController: this.state.conditionalMediationAbortController, loginSource: "multi-account" });
    }
    componentDidUpdate(t, e) {
        let { authenticated: s, transitionTo: r } = this.props;
        s && !t.authenticated && (r(F.BVt.APP), this.state.conditionalMediationAbortController.abort()),
            e.errors !== this.state.errors &&
                (this.hasError("password")
                    ? this.passwordRef?.focus()
                    : this.hasError("email") || this.hasError("login")
                      ? this.loginRef?.focus()
                      : this.hasError("code") && this.codeRef?.focus());
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleTabOrEnter),
            this.state.conditionalMediationAbortController.abort();
    }
    handleAuthToken = async (t) => {
        this.setState({ errors: {} }), await c.A.loginToken(t, !1);
    };
    handleTabOrEnter = (t) => {
        "Tab" !== t.key ||
            t.shiftKey ||
            t.target !== this.loginRef ||
            (this.passwordRef?.focus(), t.stopPropagation(), t.preventDefault()),
            "Enter" === t.key &&
                (t.target === this.loginRef || t.target === this.passwordRef) &&
                (this.handleLogin(), t.stopPropagation(), t.preventDefault());
    };
    setLoginRef = (t) => {
        this.loginRef = t;
    };
    setPasswordRef = (t) => {
        this.passwordRef = t;
    };
    setCodeRef = (t) => {
        this.codeRef = t;
    };
    getFullLogin = () => {
        let { loginPrefix: t, login: e } = this.state;
        return t + e;
    };
    hasError(t) {
        return null != this.state.errors[t];
    }
    renderError = (t) => {
        let { errors: e } = this.state;
        if (this.hasError(t)) {
            let s = e[t];
            return Array.isArray(s) ? s[0] : s;
        }
        return null;
    };
    handleForgotPassword = async (t) => {
        t?.preventDefault(), this.loginRef?.focus();
        let e = this.getFullLogin();
        this.setState({ errors: {} });
        try {
            k._.dispatch(F.jej.WAVE_EMPHASIZE);
            let t = await c.A.forgotPassword(e);
            if (!1 === t) return;
            t === i.D.ONE_TIME_LOGIN
                ? (0, h.qfG)((t) => {
                      let e = [
                          { variant: "primary", text: I.intl.string(I.t.BddRzS), onClick: t.onClose, fullWidth: !0 },
                      ];
                      return (0, r.jsx)(a.Modal, {
                          title: I.intl.string(I.t["6Ecyts"]),
                          actions: e,
                          ...t,
                          children: (0, r.jsx)(h.Text, {
                              variant: "text-md/normal",
                              children: I.intl.string(I.t.iAcrqV),
                          }),
                      });
                  })
                : (0, d.A)({ title: I.intl.string(I.t.f5Pi7A), subtitle: I.intl.format(I.t["6u5hQ9"], { email: e }) });
        } catch (e) {
            let t = (0, g.p)(e);
            this.setState({ errors: t });
        }
    };
    renderDefaultForm() {
        let { country: t, isPasswordlessActive: e } = this.props,
            s = !this.hasError("email") && this.hasError("password");
        return (0, r.jsx)("div", {
            className: L.Eh,
            children: (0, r.jsxs)(f.eB, {
                children: [
                    (0, r.jsx)(w.A, {
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        className: j.SX,
                        label: I.intl.string(I.t.tUjnxr),
                        error: this.renderError("login") ?? this.renderError("email"),
                        onChange: (t, e) => this.setState({ login: t, loginPrefix: e }),
                        setRef: this.setLoginRef,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: this.state.login,
                        autoFocus: !s,
                        required: !0,
                    }),
                    (0, r.jsx)(f.pd, {
                        label: I.intl.string(I.t["CIGa+7"]),
                        error: this.renderError("password"),
                        onChange: (t) => this.setState({ password: t }),
                        name: "password",
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        autoFocus: s,
                        value: this.state.password,
                        required: !0,
                    }),
                    (0, r.jsxs)(h.ButtonGroup, {
                        direction: "horizontal",
                        className: j.a5,
                        children: [
                            (0, r.jsx)(h.QWc, { text: I.intl.string(I.t.wWIufs), onClick: this.handleForgotPassword }),
                            (0, r.jsx)(h.QWc, {
                                text: I.intl.string(I.t["/kpMDt"]),
                                onClick: () => {
                                    var t;
                                    let e;
                                    return (
                                        (t = this.state.conditionalMediationAbortController),
                                        (e =
                                            S.isPlatformEmbedded && T.Ay.supportsFeature(F.BYE.WEBAUTHN)
                                                ? T.Ay.webAuthnAuthenticate
                                                : E.J),
                                        void c.A.authenticatePasswordless({
                                            authenticateFunc: e,
                                            conditionalMediationAbortController: t,
                                        }).catch(() => {})
                                    );
                                },
                                disabled: e,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderDefault() {
        let { loginStatus: t, onBackPressed: e } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.rQ0, { title: I.intl.string(I.t.bPP34Q), subtitle: I.intl.string(I.t.rvx0T4) }),
                (0, r.jsx)(a.cwr, { children: this.renderDefaultForm() }),
                (0, r.jsx)(a.H7u, {
                    leading: (0, r.jsx)(h.QWc, {
                        variant: "secondary",
                        size: "md",
                        onClick: e,
                        text: I.intl.string(I.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: I.intl.string(I.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: t === F.aUe.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let t = { ticket: this.props.mfaTicket, methods: this.props.mfaMethods };
        return (0, r.jsx)(A.t, {
            mfaFinish: this.handleTokenSubmitMFA,
            mfaChallenge: t,
            onEarlyClose: () => {
                this.handleReset();
            },
            width: "100%",
            headerAlignStart: !0,
        });
    }
    renderDisabledAccount() {
        let t = this.props.loginStatus === F.aUe.ACCOUNT_DISABLED,
            e = t ? I.intl.string(I.t["j3rC+U"]) : I.intl.string(I.t.ZFWofo),
            s = t ? I.intl.string(I.t["6eNTWe"]) : I.intl.string(I.t["pCBti+"]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.rQ0, { title: e, subtitle: s }),
                (0, r.jsx)(a.H7u, {
                    leading: (0, r.jsx)(h.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: I.intl.format(I.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [{ variant: "primary", text: I.intl.string(I.t.JhDw5o), onClick: this.handleReset }],
                }),
            ],
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: t } = this.state;
        return (0, r.jsx)(u.A, {
            resetToken: t,
            onLoginSuccess: (t) => {
                this.setState({ errors: {} }), c.A.switchAccountToken(t);
            },
            width: "100%",
            ...this.props,
        });
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(a.cwr, {
            children: (0, r.jsx)(_.A, {
                title: I.intl.string(I.t["+xqy3d"]),
                subtitle: I.intl.format(I.t.ef4uZ7, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: void 0,
            }),
        });
    }
    render() {
        let { loginStatus: t } = this.props;
        if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
        switch (t) {
            case F.aUe.LOGGING_IN_MFA_SMS:
            case F.aUe.MFA_SMS_STEP:
            case F.aUe.LOGGING_IN_MFA:
            case F.aUe.MFA_STEP:
                return this.renderMFA();
            case F.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case F.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case F.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case F.aUe.LOGGING_IN:
            case F.aUe.NONE:
            default:
                return this.renderDefault();
        }
    }
    handleLogin = async (t) => {
        let { password: e, undelete: s } = this.state;
        t?.preventDefault(), this.setState({ errors: {} });
        try {
            await c.A.login({ login: this.getFullLogin(), password: e, undelete: s, isMultiAccount: !0 });
        } catch (e) {
            let t = (0, g.p)(e);
            this.setState({ errors: t });
        }
    };
    handlePasswordReset = async (t) => {
        this.setState({ phoneVerifyError: null, errors: {} });
        try {
            let { token: e } = await m.A.verifyPhone(this.getFullLogin(), t, !1, !0);
            this.setState({ resetPasswordPhoneToken: e });
        } catch (t) {
            null != t.body && null != t.body.message && this.setState({ phoneVerifyError: t.body.message });
        }
    };
    handleTokenSubmitMFA = (t) => {
        let { mfaType: e, data: s, ticket: r } = t;
        return c.A.loginMFAv2({ code: s, ticket: r, mfaType: e, isMultiAccount: !0 });
    };
    handleResendCode = () => {
        m.A.resendCode(this.getFullLogin());
    };
    handleReset = (t) => {
        t?.preventDefault(),
            c.A.loginReset(!0),
            this.setState({
                password: "",
                loginPrefix: "",
                login: "",
                code: "",
                smsCode: "",
                undelete: !1,
                resetPasswordPhoneToken: null,
                errors: {},
            });
    };
    handleCancelAccountDeletion = () => {
        this.setState({ undelete: !0 }, this.handleLogin);
    };
}
let N = function (t) {
    let { onClose: e, transitionState: s, onBackPressed: i, ...d } = t,
        h = (0, l.cf)([y.A, R.default, C.A, b.A], () => ({
            authenticated: R.default.isAuthenticated(),
            isPasswordlessActive: R.default.getIsPasswordlessActive(),
            loginStatus: R.default.getLoginStatus(),
            mfaTicket: R.default.getMFATicket(),
            mfaMethods: R.default.getMFAMethods(),
            defaultRoute: y.A.defaultRoute,
            country: C.A.getCountryCode(),
            theme: b.A.theme,
        }));
    (0, p.A)({ type: o.ImpressionTypes.MODAL, name: o.ImpressionNames.USER_LOGIN });
    let c = n.useCallback(() => {
        e(), i();
    }, [e, i]);
    return (0, r.jsx)(a.dWK, {
        size: "md",
        onClose: e,
        transitionState: s,
        children: (0, r.jsx)(M, {
            ...d,
            ...h,
            transitionTo: x.pX,
            replaceWith: x.bG,
            onBackPressed: c,
            authBoxClassName: L.Nr,
        }),
    });
};
