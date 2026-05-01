s.d(e, { default: () => W });
var r = s(627968),
    n = s(64700),
    i = s(110259),
    o = s(511815),
    a = s(189213),
    l = s(20742),
    d = s(430993),
    h = s(696208),
    c = s(224640),
    u = s(17928),
    p = s(139033),
    g = s(192308),
    f = s(834730),
    A = s(825484),
    m = s(123292),
    C = s(830215),
    w = s(163050),
    E = s(139286),
    P = s(15552),
    R = s(854378),
    x = s(952116),
    y = s(572469),
    S = s(557722),
    b = s(148864),
    k = s(354948),
    T = s(976860),
    M = s(363195),
    j = s(933924),
    F = s(293731),
    v = s(495544),
    D = s(650048),
    N = s(625494),
    L = s(723702),
    _ = s(19575),
    I = s(652215),
    O = s(985018),
    U = s(14342),
    G = s(818050);
class B extends n.PureComponent {
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
            (0, j.a)({ abortController: this.state.conditionalMediationAbortController, loginSource: "multi-account" });
    }
    componentDidUpdate(t, e) {
        let { authenticated: s, transitionTo: r } = this.props;
        s && !t.authenticated && (r(I.BVt.APP), this.state.conditionalMediationAbortController.abort()),
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
        this.setState({ errors: {} }), await C.A.loginToken(t, !1);
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
            N._.dispatch(I.jej.WAVE_EMPHASIZE);
            let t = await C.A.forgotPassword(e);
            if (!1 === t) return;
            t === o.D.ONE_TIME_LOGIN
                ? (0, g.openModal)((t) => {
                      let e = [
                          { variant: "primary", text: O.intl.string(O.t.BddRzS), onClick: t.onClose, fullWidth: !0 },
                      ];
                      return (0, r.jsx)(a.Modal, {
                          title: O.intl.string(O.t["6Ecyts"]),
                          actions: e,
                          ...t,
                          children: (0, r.jsx)(f.E, { variant: "text-md/normal", children: O.intl.string(O.t.iAcrqV) }),
                      });
                  })
                : (0, p.A)({ title: O.intl.string(O.t.f5Pi7A), subtitle: O.intl.format(O.t["6u5hQ9"], { email: e }) });
        } catch (e) {
            let t = (0, P.p)(e);
            this.setState({ errors: t });
        }
    };
    renderDefaultForm() {
        let { country: t, isPasswordlessActive: e } = this.props,
            s = !this.hasError("email") && this.hasError("password");
        return (0, r.jsx)("div", {
            className: U.Eh,
            children: (0, r.jsxs)(R.eB, {
                children: [
                    (0, r.jsx)(k.A, {
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        className: G.SX,
                        label: O.intl.string(O.t.tUjnxr),
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
                    (0, r.jsx)(R.pd, {
                        label: O.intl.string(O.t["CIGa+7"]),
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
                    (0, r.jsxs)(A.e, {
                        direction: "horizontal",
                        className: G.a5,
                        children: [
                            (0, r.jsx)(m.Q, { text: O.intl.string(O.t.wWIufs), onClick: this.handleForgotPassword }),
                            (0, r.jsx)(m.Q, {
                                text: O.intl.string(O.t["/kpMDt"]),
                                onClick: () => {
                                    var t;
                                    let e;
                                    return (
                                        (t = this.state.conditionalMediationAbortController),
                                        (e =
                                            L.isPlatformEmbedded && _.Ay.supportsFeature(I.BYE.WEBAUTHN)
                                                ? _.Ay.webAuthnAuthenticate
                                                : F.J),
                                        void C.A.authenticatePasswordless({
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
                (0, r.jsx)(l.rQ, { title: O.intl.string(O.t.bPP34Q), subtitle: O.intl.string(O.t.rvx0T4) }),
                (0, r.jsx)(d.c, { children: this.renderDefaultForm() }),
                (0, r.jsx)(h.H, {
                    leading: (0, r.jsx)(m.Q, {
                        variant: "secondary",
                        size: "md",
                        onClick: e,
                        text: O.intl.string(O.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: O.intl.string(O.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: t === I.aUe.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let t = { ticket: this.props.mfaTicket, methods: this.props.mfaMethods };
        return (0, r.jsx)(y.t, {
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
        let t = this.props.loginStatus === I.aUe.ACCOUNT_DISABLED,
            e = t ? O.intl.string(O.t["j3rC+U"]) : O.intl.string(O.t.ZFWofo),
            s = t ? O.intl.string(O.t["6eNTWe"]) : O.intl.string(O.t["pCBti+"]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.rQ, { title: e, subtitle: s }),
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
        let { resetPasswordPhoneToken: t } = this.state;
        return (0, r.jsx)(w.A, {
            resetToken: t,
            onLoginSuccess: (t) => {
                this.setState({ errors: {} }), C.A.switchAccountToken(t);
            },
            width: "100%",
            ...this.props,
        });
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(d.c, {
            children: (0, r.jsx)(x.A, {
                title: O.intl.string(O.t["+xqy3d"]),
                subtitle: O.intl.format(O.t.ef4uZ7, { onResendClick: this.handleResendCode }),
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
            case I.aUe.LOGGING_IN_MFA_SMS:
            case I.aUe.MFA_SMS_STEP:
            case I.aUe.LOGGING_IN_MFA:
            case I.aUe.MFA_STEP:
                return this.renderMFA();
            case I.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case I.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case I.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case I.aUe.LOGGING_IN:
            case I.aUe.NONE:
            default:
                return this.renderDefault();
        }
    }
    handleLogin = async (t) => {
        let { password: e, undelete: s } = this.state;
        t?.preventDefault(), this.setState({ errors: {} });
        try {
            await C.A.login({ login: this.getFullLogin(), password: e, undelete: s, isMultiAccount: !0 });
        } catch (e) {
            let t = (0, P.p)(e);
            this.setState({ errors: t });
        }
    };
    handlePasswordReset = async (t) => {
        this.setState({ phoneVerifyError: null, errors: {} });
        try {
            let { token: e } = await S.A.verifyPhone(this.getFullLogin(), t, !1, !0);
            this.setState({ resetPasswordPhoneToken: e });
        } catch (t) {
            null != t.body && null != t.body.message && this.setState({ phoneVerifyError: t.body.message });
        }
    };
    handleTokenSubmitMFA = (t) => {
        let { mfaType: e, data: s, ticket: r } = t;
        return C.A.loginMFAv2({ code: s, ticket: r, mfaType: e, isMultiAccount: !0 });
    };
    handleResendCode = () => {
        S.A.resendCode(this.getFullLogin());
    };
    handleReset = (t) => {
        t?.preventDefault(),
            C.A.loginReset(!0),
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
let W = function (t) {
    let { onClose: e, transitionState: s, onBackPressed: o, ...a } = t,
        l = (0, u.cf)([D.A, v.default, b.A, M.A], () => ({
            authenticated: v.default.isAuthenticated(),
            isPasswordlessActive: v.default.getIsPasswordlessActive(),
            loginStatus: v.default.getLoginStatus(),
            mfaTicket: v.default.getMFATicket(),
            mfaMethods: v.default.getMFAMethods(),
            defaultRoute: D.A.defaultRoute,
            country: b.A.getCountryCode(),
            theme: M.A.theme,
        }));
    (0, E.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.USER_LOGIN });
    let d = n.useCallback(() => {
        e(), o();
    }, [e, o]);
    return (0, r.jsx)(c.d, {
        size: "md",
        onClose: e,
        transitionState: s,
        children: (0, r.jsx)(B, {
            ...a,
            ...l,
            transitionTo: T.pX,
            replaceWith: T.bG,
            onBackPressed: d,
            authBoxClassName: U.Nr,
        }),
    });
};
