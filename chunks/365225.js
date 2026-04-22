s.d(t, { default: () => B });
var r = s(627968),
    n = s(64700),
    o = s(110259),
    i = s(511815),
    a = s(189213),
    l = s(20742),
    d = s(430993),
    h = s(696208),
    c = s(224640),
    u = s(311907),
    p = s(139033),
    _ = s(192308),
    f = s(834730),
    g = s(825484),
    A = s(123292),
    m = s(830215),
    C = s(163050),
    w = s(139286),
    b = s(15552),
    x = s(854378),
    E = s(952116),
    P = s(720353),
    y = s(557722),
    R = s(148864),
    k = s(146571),
    S = s(976860),
    F = s(544028),
    T = s(933924),
    I = s(293731),
    L = s(961350),
    j = s(650048),
    M = s(203982),
    v = s(723702),
    N = s(837921),
    D = s(652215),
    O = s(985018),
    U = s(416646),
    G = s(373378);
class W extends n.PureComponent {
    static defaultProps = { transitionTo: (e) => s.g.location.assign(e), replaceWith: (e) => s.g.location.replace(e) };
    loginRef;
    passwordRef;
    codeRef;
    constructor(e) {
        super(e),
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
            (0, T.a)({ abortController: this.state.conditionalMediationAbortController, loginSource: "multi-account" });
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: r } = this.props;
        s && !e.authenticated && (r(D.BVt.APP), this.state.conditionalMediationAbortController.abort()),
            t.errors !== this.state.errors &&
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
    handleAuthToken = async (e) => {
        this.setState({ errors: {} }), await m.A.loginToken(e, !1);
    };
    handleTabOrEnter = (e) => {
        "Tab" !== e.key ||
            e.shiftKey ||
            e.target !== this.loginRef ||
            (this.passwordRef?.focus(), e.stopPropagation(), e.preventDefault()),
            "Enter" === e.key &&
                (e.target === this.loginRef || e.target === this.passwordRef) &&
                (this.handleLogin(), e.stopPropagation(), e.preventDefault());
    };
    setLoginRef = (e) => {
        this.loginRef = e;
    };
    setPasswordRef = (e) => {
        this.passwordRef = e;
    };
    setCodeRef = (e) => {
        this.codeRef = e;
    };
    getFullLogin = () => {
        let { loginPrefix: e, login: t } = this.state;
        return e + t;
    };
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderError = (e) => {
        let { errors: t } = this.state;
        if (this.hasError(e)) {
            let s = t[e];
            return Array.isArray(s) ? s[0] : s;
        }
        return null;
    };
    handleForgotPassword = async (e) => {
        e?.preventDefault(), this.loginRef?.focus();
        let t = this.getFullLogin();
        this.setState({ errors: {} });
        try {
            M._.dispatch(D.jej.WAVE_EMPHASIZE);
            let e = await m.A.forgotPassword(t);
            if (!1 === e) return;
            e === i.D.ONE_TIME_LOGIN
                ? (0, _.openModal)((e) => {
                      let t = [
                          { variant: "primary", text: O.intl.string(O.t.BddRzS), onClick: e.onClose, fullWidth: !0 },
                      ];
                      return (0, r.jsx)(a.Modal, {
                          title: O.intl.string(O.t["6Ecyts"]),
                          actions: t,
                          ...e,
                          children: (0, r.jsx)(f.E, { variant: "text-md/normal", children: O.intl.string(O.t.iAcrqV) }),
                      });
                  })
                : (0, p.A)({ title: O.intl.string(O.t.f5Pi7A), subtitle: O.intl.format(O.t["6u5hQ9"], { email: t }) });
        } catch (t) {
            let e = (0, b.p)(t);
            this.setState({ errors: e });
        }
    };
    renderDefaultForm() {
        let { country: e, isPasswordlessActive: t } = this.props,
            s = !this.hasError("email") && this.hasError("password");
        return (0, r.jsx)("div", {
            className: U.Eh,
            children: (0, r.jsxs)(x.eB, {
                children: [
                    (0, r.jsx)(k.A, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: G.SX,
                        label: O.intl.string(O.t.tUjnxr),
                        error: this.renderError("login") ?? this.renderError("email"),
                        onChange: (e, t) => this.setState({ login: e, loginPrefix: t }),
                        setRef: this.setLoginRef,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: this.state.login,
                        autoFocus: !s,
                        required: !0,
                    }),
                    (0, r.jsx)(x.pd, {
                        label: O.intl.string(O.t["CIGa+7"]),
                        error: this.renderError("password"),
                        onChange: (e) => this.setState({ password: e }),
                        name: "password",
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        autoFocus: s,
                        value: this.state.password,
                        required: !0,
                    }),
                    (0, r.jsxs)(g.e, {
                        direction: "horizontal",
                        className: G.a5,
                        children: [
                            (0, r.jsx)(A.Q, { text: O.intl.string(O.t.wWIufs), onClick: this.handleForgotPassword }),
                            (0, r.jsx)(A.Q, {
                                text: O.intl.string(O.t["/kpMDt"]),
                                onClick: () => {
                                    var e;
                                    let t;
                                    return (
                                        (e = this.state.conditionalMediationAbortController),
                                        (t =
                                            v.isPlatformEmbedded && N.Ay.supportsFeature(D.BYE.WEBAUTHN)
                                                ? N.Ay.webAuthnAuthenticate
                                                : I.J),
                                        void m.A.authenticatePasswordless({
                                            authenticateFunc: t,
                                            conditionalMediationAbortController: e,
                                        }).catch(() => {})
                                    );
                                },
                                disabled: t,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderDefault() {
        let { loginStatus: e, onBackPressed: t } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.rQ, { title: O.intl.string(O.t.bPP34Q), subtitle: O.intl.string(O.t.rvx0T4) }),
                (0, r.jsx)(d.c, { children: this.renderDefaultForm() }),
                (0, r.jsx)(h.H, {
                    leading: (0, r.jsx)(A.Q, {
                        variant: "secondary",
                        size: "md",
                        onClick: t,
                        text: O.intl.string(O.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: O.intl.string(O.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: e === D.aUe.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let e = { ticket: this.props.mfaTicket, methods: this.props.mfaMethods };
        return (0, r.jsx)(P.t, {
            mfaFinish: this.handleTokenSubmitMFA,
            mfaChallenge: e,
            onEarlyClose: () => {
                this.handleReset();
            },
            width: "100%",
            headerAlignStart: !0,
        });
    }
    renderDisabledAccount() {
        let e = this.props.loginStatus === D.aUe.ACCOUNT_DISABLED,
            t = e ? O.intl.string(O.t["j3rC+U"]) : O.intl.string(O.t.ZFWofo),
            s = e ? O.intl.string(O.t["6eNTWe"]) : O.intl.string(O.t["pCBti+"]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.rQ, { title: t, subtitle: s }),
                (0, r.jsx)(h.H, {
                    leading: (0, r.jsx)(f.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: O.intl.format(O.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [{ variant: "primary", text: O.intl.string(O.t.JhDw5o), onClick: this.handleReset }],
                }),
            ],
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, r.jsx)(C.A, {
            resetToken: e,
            onLoginSuccess: (e) => {
                this.setState({ errors: {} }), m.A.switchAccountToken(e);
            },
            width: "100%",
            ...this.props,
        });
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: e } = this.state;
        return (0, r.jsx)(d.c, {
            children: (0, r.jsx)(E.A, {
                title: O.intl.string(O.t["+xqy3d"]),
                subtitle: O.intl.format(O.t.ef4uZ7, { onResendClick: this.handleResendCode }),
                error: e,
                onSubmit: this.handlePasswordReset,
                onCancel: void 0,
            }),
        });
    }
    render() {
        let { loginStatus: e } = this.props;
        if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
        switch (e) {
            case D.aUe.LOGGING_IN_MFA_SMS:
            case D.aUe.MFA_SMS_STEP:
            case D.aUe.LOGGING_IN_MFA:
            case D.aUe.MFA_STEP:
                return this.renderMFA();
            case D.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case D.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case D.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case D.aUe.LOGGING_IN:
            case D.aUe.NONE:
            default:
                return this.renderDefault();
        }
    }
    handleLogin = async (e) => {
        let { password: t, undelete: s } = this.state;
        e?.preventDefault(), this.setState({ errors: {} });
        try {
            await m.A.login({ login: this.getFullLogin(), password: t, undelete: s, isMultiAccount: !0 });
        } catch (t) {
            let e = (0, b.p)(t);
            this.setState({ errors: e });
        }
    };
    handlePasswordReset = async (e) => {
        this.setState({ phoneVerifyError: null, errors: {} });
        try {
            let { token: t } = await y.A.verifyPhone(this.getFullLogin(), e, !1, !0);
            this.setState({ resetPasswordPhoneToken: t });
        } catch (e) {
            null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
        }
    };
    handleTokenSubmitMFA = (e) => {
        let { mfaType: t, data: s, ticket: r } = e;
        return m.A.loginMFAv2({ code: s, ticket: r, mfaType: t, isMultiAccount: !0 });
    };
    handleResendCode = () => {
        y.A.resendCode(this.getFullLogin());
    };
    handleReset = (e) => {
        e?.preventDefault(),
            m.A.loginReset(!0),
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
let B = function (e) {
    let { onClose: t, transitionState: s, onBackPressed: i, ...a } = e,
        l = (0, u.cf)([j.A, L.default, R.A, F.A], () => ({
            authenticated: L.default.isAuthenticated(),
            isPasswordlessActive: L.default.getIsPasswordlessActive(),
            loginStatus: L.default.getLoginStatus(),
            mfaTicket: L.default.getMFATicket(),
            mfaMethods: L.default.getMFAMethods(),
            defaultRoute: j.A.defaultRoute,
            country: R.A.getCountryCode(),
            theme: F.A.theme,
        }));
    (0, w.A)({ type: o.ImpressionTypes.MODAL, name: o.ImpressionNames.USER_LOGIN });
    let d = n.useCallback(() => {
        t(), i();
    }, [t, i]);
    return (0, r.jsx)(c.d, {
        size: "md",
        onClose: t,
        transitionState: s,
        children: (0, r.jsx)(W, {
            ...a,
            ...l,
            transitionTo: S.pX,
            replaceWith: S.bG,
            onBackPressed: d,
            authBoxClassName: U.Nr,
        }),
    });
};
