var r = s(477900),
    n = s(582128),
    o = s(613412),
    i = s(511815),
    a = s(855986),
    l = s(139033),
    d = s(189213),
    h = s(192308),
    u = s(834730),
    c = s(123292),
    g = s(20742),
    p = s(430993),
    f = s(331322),
    A = s(696208),
    C = s(224640),
    m = s(830215),
    w = s(785161),
    E = s(163050),
    R = s(139286),
    P = s(15552),
    S = s(884529),
    b = s(854378),
    k = s(952116),
    y = s(397404),
    x = s(557722),
    _ = s(148864),
    T = s(916226),
    j = s(976860),
    M = s(413599),
    F = s(933924),
    L = s(46653),
    D = s(650048),
    N = s(129230),
    v = s(188567),
    U = s(652215),
    I = s(792996),
    O = s(14107),
    G = s(221851);
class B extends n.PureComponent {
    static defaultProps = { transitionTo: (e) => s.g.location.assign(e), replaceWith: (e) => s.g.location.replace(e) };
    loginRef;
    passwordRef;
    codeRef;
    constructor(e) {
        (super(e),
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
            }));
    }
    unsubscribePasswordlessErrors;
    componentDidMount() {
        ((this.unsubscribePasswordlessErrors = (0, S.K)((e) => this.setState({ errors: e }))),
            window.addEventListener("keydown", this.handleTabOrEnter),
            (0, F.a)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
                isMultiAccount: !0,
            }));
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: r } = this.props;
        (s && !e.authenticated && (r(U.BVt.APP), this.state.conditionalMediationAbortController.abort()),
            t.errors !== this.state.errors &&
                (this.hasError("password")
                    ? this.passwordRef?.focus()
                    : this.hasError("email") || this.hasError("login")
                      ? this.loginRef?.focus()
                      : this.hasError("code") && this.codeRef?.focus()));
    }
    componentWillUnmount() {
        (this.unsubscribePasswordlessErrors?.(),
            window.removeEventListener("keydown", this.handleTabOrEnter),
            this.state.conditionalMediationAbortController.abort());
    }
    handleQRAuthSuccess = (e) => {
        N.default.track(U.HAw.LOGIN_SUCCESSFUL, {
            source: U.mdB.QR_CODE,
            login_source: "multi-account",
            gift_code_sku_id: null,
            is_new_user: !1,
            login_method: "remote_auth",
            login_instance_id: e ?? null,
        });
    };
    handleAuthToken = async (e) => {
        (this.setState({ errors: {} }), await m.A.loginToken(e, !1));
    };
    handleTabOrEnter = (e) => {
        ("Tab" !== e.key ||
            e.shiftKey ||
            e.target !== this.loginRef ||
            (this.passwordRef?.focus(), e.stopPropagation(), e.preventDefault()),
            "Enter" === e.key &&
                (e.target === this.loginRef || e.target === this.passwordRef) &&
                (this.handleLogin(), e.stopPropagation(), e.preventDefault()));
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
        (e?.preventDefault(), this.loginRef?.focus());
        let t = this.getFullLogin();
        this.setState({ errors: {} });
        try {
            v._.dispatch(U.jej.WAVE_EMPHASIZE);
            let e = await m.A.forgotPassword(t);
            if (!1 === e) return;
            e === i.D.ONE_TIME_LOGIN
                ? (0, h.qf)((e) => {
                      let t = [
                          { variant: "primary", text: I.intl.string(I.t.BddRzS), onClick: e.onClose, fullWidth: !0 },
                      ];
                      return (0, r.jsx)(d.a, {
                          title: I.intl.string(I.t["6Ecyts"]),
                          actions: t,
                          ...e,
                          children: (0, r.jsx)(u.E, { variant: "body-md/normal", children: I.intl.string(I.t.iAcrqV) }),
                      });
                  })
                : (0, l.A)({ title: I.intl.string(I.t.f5Pi7A), subtitle: I.intl.format(I.t["6u5hQ9"], { email: t }) });
        } catch (t) {
            let e = (0, P.p)(t);
            this.setState({ errors: e });
        }
    };
    renderDefaultForm() {
        let { country: e } = this.props,
            t = !this.hasError("email") && this.hasError("password");
        return (0, r.jsx)("div", {
            className: O.Eh,
            children: (0, r.jsxs)(b.eB, {
                children: [
                    (0, r.jsx)(T.A, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: G.SX,
                        label: I.intl.string(I.t.tUjnxr),
                        error: this.renderError("login") ?? this.renderError("email"),
                        onChange: (e, t) => this.setState({ login: e, loginPrefix: t }),
                        setRef: this.setLoginRef,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: this.state.login,
                        autoFocus: !t,
                        required: !0,
                    }),
                    (0, r.jsx)(b.pd, {
                        label: I.intl.string(I.t["CIGa+7"]),
                        error: this.renderError("password"),
                        onChange: (e) => this.setState({ password: e }),
                        name: "password",
                        type: "password",
                        revealable: !0,
                        setRef: this.setPasswordRef,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        autoFocus: t,
                        value: this.state.password,
                        required: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: G.a5,
                        children: (0, r.jsx)(c.Q, {
                            text: I.intl.string(I.t.wWIufs),
                            onClick: this.handleForgotPassword,
                        }),
                    }),
                ],
            }),
        });
    }
    renderDefault() {
        let { loginStatus: e, onBackPressed: t } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.rQ, { title: I.intl.string(I.t.bPP34Q), subtitle: I.intl.string(I.t.rvx0T4) }),
                (0, r.jsx)(p.c, {
                    children: (0, r.jsxs)(f.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 32,
                        children: [
                            this.renderDefaultForm(),
                            (0, r.jsx)(w.A, {
                                onAuthenticateSuccess: this.handleQRAuthSuccess,
                                conditionalMediationAbortController: this.state.conditionalMediationAbortController,
                                isMultiAccount: !0,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(A.H, {
                    leading: (0, r.jsx)(c.Q, {
                        variant: "secondary",
                        size: "md",
                        onClick: t,
                        text: I.intl.string(I.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: I.intl.string(I.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: e === U.aUe.LOGGING_IN,
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
        });
    }
    renderDisabledAccount() {
        let e = this.props.loginStatus === U.aUe.ACCOUNT_DISABLED,
            t = e ? I.intl.string(I.t["j3rC+U"]) : I.intl.string(I.t.ZFWofo),
            s = e ? I.intl.string(I.t["6eNTWe"]) : I.intl.string(I.t["pCBti+"]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.rQ, { title: t, subtitle: s }),
                (0, r.jsx)(A.H, {
                    leading: (0, r.jsx)(u.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: I.intl.format(I.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [{ variant: "primary", text: I.intl.string(I.t.JhDw5o), onClick: this.handleReset }],
                }),
            ],
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, r.jsx)(E.A, {
            resetToken: e,
            onLoginSuccess: (e) => {
                (this.setState({ errors: {} }), m.A.switchAccountToken(e));
            },
            onLoginRequired: this.handleReset,
            ...this.props,
        });
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: e } = this.state;
        return (0, r.jsx)(p.c, {
            children: (0, r.jsx)(k.A, {
                title: I.intl.string(I.t["+xqy3d"]),
                subtitle: I.intl.format(I.t.ef4uZ7, { onResendClick: this.handleResendCode }),
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
            case U.aUe.LOGGING_IN_MFA_SMS:
            case U.aUe.MFA_SMS_STEP:
            case U.aUe.LOGGING_IN_MFA:
            case U.aUe.MFA_STEP:
                return this.renderMFA();
            case U.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case U.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case U.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case U.aUe.LOGGING_IN:
            case U.aUe.NONE:
            default:
                return this.renderDefault();
        }
    }
    handleLogin = async (e) => {
        let { password: t, undelete: s } = this.state;
        (e?.preventDefault(), this.setState({ errors: {} }));
        try {
            await m.A.login({ login: this.getFullLogin(), password: t, undelete: s, isMultiAccount: !0 });
        } catch (t) {
            let e = (0, P.p)(t);
            this.setState({ errors: e });
        }
    };
    handlePasswordReset = async (e) => {
        this.setState({ phoneVerifyError: null, errors: {} });
        try {
            let { token: t } = await x.A.verifyPhone(this.getFullLogin(), e, !1, !0);
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
        x.A.resendCode(this.getFullLogin());
    };
    handleReset = (e) => {
        (e?.preventDefault(),
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
            }));
    };
    handleCancelAccountDeletion = () => {
        this.setState({ undelete: !0 }, this.handleLogin);
    };
}
s.d(
    t,
    {},
    {
        default: function (e) {
            let { onClose: t, transitionState: s, onBackPressed: i, ...l } = e,
                { suspendedUserToken: d, ...h } = (0, a.cf)([D.A, L.default, _.A, M.A], () => ({
                    authenticated: L.default.isAuthenticated(),
                    loginStatus: L.default.getLoginStatus(),
                    mfaTicket: L.default.getMFATicket(),
                    mfaMethods: L.default.getMFAMethods(),
                    defaultRoute: D.A.defaultRoute,
                    country: _.A.getCountryCode(),
                    theme: M.A.theme,
                    suspendedUserToken: L.default.getSuspendedUserToken(),
                }));
            (0, R.A)({ type: o.ImpressionTypes.MODAL, name: o.ImpressionNames.USER_LOGIN });
            let u = n.useCallback(() => {
                (t(), i());
            }, [t, i]);
            return (
                n.useEffect(() => {
                    null != d && t();
                }, [d, t]),
                (0, r.jsx)(C.d, {
                    size: "lg",
                    onClose: t,
                    transitionState: s,
                    children: (0, r.jsx)(B, {
                        ...l,
                        ...h,
                        transitionTo: j.pX,
                        replaceWith: j.bG,
                        onBackPressed: u,
                        authBoxClassName: O.Nr,
                    }),
                })
            );
        },
    },
);
