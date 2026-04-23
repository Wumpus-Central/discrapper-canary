s.d(t, { default: () => B });
var r = s(627968),
    n = s(64700),
    i = s(110259),
    o = s(511815),
    a = s(189213),
    l = s(20742),
    h = s(430993),
    d = s(696208),
    c = s(224640),
    u = s(17928),
    p = s(139033),
    g = s(192308),
    f = s(834730),
    _ = s(825484),
    A = s(123292),
    m = s(830215),
    C = s(163050),
    w = s(139286),
    E = s(15552),
    S = s(854378),
    x = s(952116),
    y = s(572469),
    b = s(557722),
    P = s(148864),
    k = s(354948),
    T = s(976860),
    R = s(363195),
    N = s(933924),
    j = s(293731),
    F = s(495544),
    v = s(650048),
    M = s(625494),
    I = s(723702),
    L = s(19575),
    O = s(652215),
    D = s(985018),
    G = s(14342),
    U = s(818050);
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
            (0, N.a)({ abortController: this.state.conditionalMediationAbortController, loginSource: "multi-account" });
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: r } = this.props;
        s && !e.authenticated && (r(O.BVt.APP), this.state.conditionalMediationAbortController.abort()),
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
            M._.dispatch(O.jej.WAVE_EMPHASIZE);
            let e = await m.A.forgotPassword(t);
            if (!1 === e) return;
            e === o.D.ONE_TIME_LOGIN
                ? (0, g.openModal)((e) => {
                      let t = [
                          { variant: "primary", text: D.intl.string(D.t.BddRzS), onClick: e.onClose, fullWidth: !0 },
                      ];
                      return (0, r.jsx)(a.Modal, {
                          title: D.intl.string(D.t["6Ecyts"]),
                          actions: t,
                          ...e,
                          children: (0, r.jsx)(f.E, { variant: "text-md/normal", children: D.intl.string(D.t.iAcrqV) }),
                      });
                  })
                : (0, p.A)({ title: D.intl.string(D.t.f5Pi7A), subtitle: D.intl.format(D.t["6u5hQ9"], { email: t }) });
        } catch (t) {
            let e = (0, E.p)(t);
            this.setState({ errors: e });
        }
    };
    renderDefaultForm() {
        let { country: e, isPasswordlessActive: t } = this.props,
            s = !this.hasError("email") && this.hasError("password");
        return (0, r.jsx)("div", {
            className: G.Eh,
            children: (0, r.jsxs)(S.eB, {
                children: [
                    (0, r.jsx)(k.A, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: U.SX,
                        label: D.intl.string(D.t.tUjnxr),
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
                    (0, r.jsx)(S.pd, {
                        label: D.intl.string(D.t["CIGa+7"]),
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
                    (0, r.jsxs)(_.e, {
                        direction: "horizontal",
                        className: U.a5,
                        children: [
                            (0, r.jsx)(A.Q, { text: D.intl.string(D.t.wWIufs), onClick: this.handleForgotPassword }),
                            (0, r.jsx)(A.Q, {
                                text: D.intl.string(D.t["/kpMDt"]),
                                onClick: () => {
                                    var e;
                                    let t;
                                    return (
                                        (e = this.state.conditionalMediationAbortController),
                                        (t =
                                            I.isPlatformEmbedded && L.Ay.supportsFeature(O.BYE.WEBAUTHN)
                                                ? L.Ay.webAuthnAuthenticate
                                                : j.J),
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
                (0, r.jsx)(l.rQ, { title: D.intl.string(D.t.bPP34Q), subtitle: D.intl.string(D.t.rvx0T4) }),
                (0, r.jsx)(h.c, { children: this.renderDefaultForm() }),
                (0, r.jsx)(d.H, {
                    leading: (0, r.jsx)(A.Q, {
                        variant: "secondary",
                        size: "md",
                        onClick: t,
                        text: D.intl.string(D.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: D.intl.string(D.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: e === O.aUe.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let e = { ticket: this.props.mfaTicket, methods: this.props.mfaMethods };
        return (0, r.jsx)(y.t, {
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
        let e = this.props.loginStatus === O.aUe.ACCOUNT_DISABLED,
            t = e ? D.intl.string(D.t["j3rC+U"]) : D.intl.string(D.t.ZFWofo),
            s = e ? D.intl.string(D.t["6eNTWe"]) : D.intl.string(D.t["pCBti+"]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.rQ, { title: t, subtitle: s }),
                (0, r.jsx)(d.H, {
                    leading: (0, r.jsx)(f.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: D.intl.format(D.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [{ variant: "primary", text: D.intl.string(D.t.JhDw5o), onClick: this.handleReset }],
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
        return (0, r.jsx)(h.c, {
            children: (0, r.jsx)(x.A, {
                title: D.intl.string(D.t["+xqy3d"]),
                subtitle: D.intl.format(D.t.ef4uZ7, { onResendClick: this.handleResendCode }),
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
            case O.aUe.LOGGING_IN_MFA_SMS:
            case O.aUe.MFA_SMS_STEP:
            case O.aUe.LOGGING_IN_MFA:
            case O.aUe.MFA_STEP:
                return this.renderMFA();
            case O.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case O.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case O.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case O.aUe.LOGGING_IN:
            case O.aUe.NONE:
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
            let e = (0, E.p)(t);
            this.setState({ errors: e });
        }
    };
    handlePasswordReset = async (e) => {
        this.setState({ phoneVerifyError: null, errors: {} });
        try {
            let { token: t } = await b.A.verifyPhone(this.getFullLogin(), e, !1, !0);
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
        b.A.resendCode(this.getFullLogin());
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
    let { onClose: t, transitionState: s, onBackPressed: o, ...a } = e,
        l = (0, u.cf)([v.A, F.default, P.A, R.A], () => ({
            authenticated: F.default.isAuthenticated(),
            isPasswordlessActive: F.default.getIsPasswordlessActive(),
            loginStatus: F.default.getLoginStatus(),
            mfaTicket: F.default.getMFATicket(),
            mfaMethods: F.default.getMFAMethods(),
            defaultRoute: v.A.defaultRoute,
            country: P.A.getCountryCode(),
            theme: R.A.theme,
        }));
    (0, w.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.USER_LOGIN });
    let h = n.useCallback(() => {
        t(), o();
    }, [t, o]);
    return (0, r.jsx)(c.d, {
        size: "md",
        onClose: t,
        transitionState: s,
        children: (0, r.jsx)(W, {
            ...a,
            ...l,
            transitionTo: T.pX,
            replaceWith: T.bG,
            onBackPressed: h,
            authBoxClassName: G.Nr,
        }),
    });
};
