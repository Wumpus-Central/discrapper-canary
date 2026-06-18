s.d(e, { default: () => B });
var r = s(627968),
    n = s(64700),
    i = s(562708),
    o = s(511815),
    a = s(189213),
    l = s(20742),
    d = s(430993),
    h = s(331322),
    c = s(696208),
    u = s(224640),
    g = s(17928),
    p = s(139033),
    f = s(192308),
    A = s(834730),
    C = s(123292),
    m = s(830215),
    w = s(275538),
    E = s(163050),
    R = s(139286),
    S = s(15552),
    P = s(854378),
    x = s(952116),
    k = s(572469),
    y = s(557722),
    _ = s(148864),
    b = s(354948),
    M = s(976860),
    T = s(363195),
    j = s(933924),
    F = s(495544),
    L = s(650048),
    D = s(174459),
    N = s(625494),
    v = s(652215),
    I = s(375708),
    O = s(14342),
    U = s(818050);
class G extends n.PureComponent {
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
            (0, j.a)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
                isMultiAccount: !0,
            });
    }
    componentDidUpdate(t, e) {
        let { authenticated: s, transitionTo: r } = this.props;
        s && !t.authenticated && (r(v.BVt.APP), this.state.conditionalMediationAbortController.abort()),
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
    handleQRAuthSuccess = (t) => {
        D.default.track(v.HAw.LOGIN_SUCCESSFUL, {
            source: v.mdB.QR_CODE,
            login_source: "multi-account",
            gift_code_sku_id: null,
            is_new_user: !1,
            login_method: "remote_auth",
            login_instance_id: t ?? null,
        });
    };
    handleAuthToken = async (t) => {
        this.setState({ errors: {} }), await m.A.loginToken(t, !1);
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
            N._.dispatch(v.jej.WAVE_EMPHASIZE);
            let t = await m.A.forgotPassword(e);
            if (!1 === t) return;
            t === o.D.ONE_TIME_LOGIN
                ? (0, f.openModal)((t) => {
                      let e = [
                          { variant: "primary", text: I.intl.string(I.t.BddRzS), onClick: t.onClose, fullWidth: !0 },
                      ];
                      return (0, r.jsx)(a.Modal, {
                          title: I.intl.string(I.t["6Ecyts"]),
                          actions: e,
                          ...t,
                          children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: I.intl.string(I.t.iAcrqV) }),
                      });
                  })
                : (0, p.A)({ title: I.intl.string(I.t.f5Pi7A), subtitle: I.intl.format(I.t["6u5hQ9"], { email: e }) });
        } catch (e) {
            let t = (0, S.p)(e);
            this.setState({ errors: t });
        }
    };
    renderDefaultForm() {
        let { country: t } = this.props,
            e = !this.hasError("email") && this.hasError("password");
        return (0, r.jsx)("div", {
            className: O.Eh,
            children: (0, r.jsxs)(P.eB, {
                children: [
                    (0, r.jsx)(b.A, {
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        className: U.SX,
                        label: I.intl.string(I.t.tUjnxr),
                        error: this.renderError("login") ?? this.renderError("email"),
                        onChange: (t, e) => this.setState({ login: t, loginPrefix: e }),
                        setRef: this.setLoginRef,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: this.state.login,
                        autoFocus: !e,
                        required: !0,
                    }),
                    (0, r.jsx)(P.pd, {
                        label: I.intl.string(I.t["CIGa+7"]),
                        error: this.renderError("password"),
                        onChange: (t) => this.setState({ password: t }),
                        name: "password",
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        autoFocus: e,
                        value: this.state.password,
                        required: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: U.a5,
                        children: (0, r.jsx)(C.Q, {
                            text: I.intl.string(I.t.wWIufs),
                            onClick: this.handleForgotPassword,
                        }),
                    }),
                ],
            }),
        });
    }
    renderDefault() {
        let { loginStatus: t, onBackPressed: e } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.rQ, { title: I.intl.string(I.t.bPP34Q), subtitle: I.intl.string(I.t.rvx0T4) }),
                (0, r.jsx)(d.c, {
                    children: (0, r.jsxs)(h.B, {
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
                (0, r.jsx)(c.H, {
                    leading: (0, r.jsx)(C.Q, {
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
                            loading: t === v.aUe.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let t = { ticket: this.props.mfaTicket, methods: this.props.mfaMethods };
        return (0, r.jsx)(k.t, {
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
        let t = this.props.loginStatus === v.aUe.ACCOUNT_DISABLED,
            e = t ? I.intl.string(I.t["j3rC+U"]) : I.intl.string(I.t.ZFWofo),
            s = t ? I.intl.string(I.t["6eNTWe"]) : I.intl.string(I.t["pCBti+"]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.rQ, { title: e, subtitle: s }),
                (0, r.jsx)(c.H, {
                    leading: (0, r.jsx)(A.E, {
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
        return (0, r.jsx)(E.A, {
            resetToken: t,
            onLoginSuccess: (t) => {
                this.setState({ errors: {} }), m.A.switchAccountToken(t);
            },
            width: "100%",
            ...this.props,
        });
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(d.c, {
            children: (0, r.jsx)(x.A, {
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
            case v.aUe.LOGGING_IN_MFA_SMS:
            case v.aUe.MFA_SMS_STEP:
            case v.aUe.LOGGING_IN_MFA:
            case v.aUe.MFA_STEP:
                return this.renderMFA();
            case v.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case v.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case v.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case v.aUe.LOGGING_IN:
            case v.aUe.NONE:
            default:
                return this.renderDefault();
        }
    }
    handleLogin = async (t) => {
        let { password: e, undelete: s } = this.state;
        t?.preventDefault(), this.setState({ errors: {} });
        try {
            await m.A.login({ login: this.getFullLogin(), password: e, undelete: s, isMultiAccount: !0 });
        } catch (e) {
            let t = (0, S.p)(e);
            this.setState({ errors: t });
        }
    };
    handlePasswordReset = async (t) => {
        this.setState({ phoneVerifyError: null, errors: {} });
        try {
            let { token: e } = await y.A.verifyPhone(this.getFullLogin(), t, !1, !0);
            this.setState({ resetPasswordPhoneToken: e });
        } catch (t) {
            null != t.body && null != t.body.message && this.setState({ phoneVerifyError: t.body.message });
        }
    };
    handleTokenSubmitMFA = (t) => {
        let { mfaType: e, data: s, ticket: r } = t;
        return m.A.loginMFAv2({ code: s, ticket: r, mfaType: e, isMultiAccount: !0 });
    };
    handleResendCode = () => {
        y.A.resendCode(this.getFullLogin());
    };
    handleReset = (t) => {
        t?.preventDefault(),
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
let B = function (t) {
    let { onClose: e, transitionState: s, onBackPressed: o, ...a } = t,
        l = (0, g.cf)([L.A, F.default, _.A, T.A], () => ({
            authenticated: F.default.isAuthenticated(),
            loginStatus: F.default.getLoginStatus(),
            mfaTicket: F.default.getMFATicket(),
            mfaMethods: F.default.getMFAMethods(),
            defaultRoute: L.A.defaultRoute,
            country: _.A.getCountryCode(),
            theme: T.A.theme,
        }));
    (0, R.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.USER_LOGIN });
    let d = n.useCallback(() => {
        e(), o();
    }, [e, o]);
    return (0, r.jsx)(u.d, {
        size: "lg",
        onClose: e,
        transitionState: s,
        children: (0, r.jsx)(G, {
            ...a,
            ...l,
            transitionTo: M.pX,
            replaceWith: M.bG,
            onBackPressed: d,
            authBoxClassName: O.Nr,
        }),
    });
};
