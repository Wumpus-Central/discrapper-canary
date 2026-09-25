s.d(t, { default: () => B });
var r = s(477900),
    n = s(582128),
    o = s(562708),
    i = s(511815),
    a = s(17928),
    l = s(139033),
    d = s(189213),
    h = s(192308),
    c = s(834730),
    u = s(123292),
    g = s(20742),
    p = s(430993),
    f = s(331322),
    A = s(696208),
    C = s(224640),
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
    T = s(976860),
    M = s(363195),
    j = s(933924),
    F = s(280450),
    L = s(650048),
    D = s(174459),
    N = s(625494),
    v = s(652215),
    U = s(375708),
    I = s(14107),
    O = s(221851);
class G extends n.PureComponent {
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
    componentDidMount() {
        (window.addEventListener("keydown", this.handleTabOrEnter),
            (0, j.a)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
                isMultiAccount: !0,
            }));
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: r } = this.props;
        (s && !e.authenticated && (r(v.BVt.APP), this.state.conditionalMediationAbortController.abort()),
            t.errors !== this.state.errors &&
                (this.hasError("password")
                    ? this.passwordRef?.focus()
                    : this.hasError("email") || this.hasError("login")
                      ? this.loginRef?.focus()
                      : this.hasError("code") && this.codeRef?.focus()));
    }
    componentWillUnmount() {
        (window.removeEventListener("keydown", this.handleTabOrEnter),
            this.state.conditionalMediationAbortController.abort());
    }
    handleQRAuthSuccess = (e) => {
        D.default.track(v.HAw.LOGIN_SUCCESSFUL, {
            source: v.mdB.QR_CODE,
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
            N._.dispatch(v.jej.WAVE_EMPHASIZE);
            let e = await m.A.forgotPassword(t);
            if (!1 === e) return;
            e === i.D.ONE_TIME_LOGIN
                ? (0, h.openModal)((e) => {
                      let t = [
                          { variant: "primary", text: U.intl.string(U.t.BddRzS), onClick: e.onClose, fullWidth: !0 },
                      ];
                      return (0, r.jsx)(d.a, {
                          title: U.intl.string(U.t["6Ecyts"]),
                          actions: t,
                          ...e,
                          children: (0, r.jsx)(c.E, { variant: "text-md/normal", children: U.intl.string(U.t.iAcrqV) }),
                      });
                  })
                : (0, l.A)({ title: U.intl.string(U.t.f5Pi7A), subtitle: U.intl.format(U.t["6u5hQ9"], { email: t }) });
        } catch (t) {
            let e = (0, S.p)(t);
            this.setState({ errors: e });
        }
    };
    renderDefaultForm() {
        let { country: e } = this.props,
            t = !this.hasError("email") && this.hasError("password");
        return (0, r.jsx)("div", {
            className: I.Eh,
            children: (0, r.jsxs)(P.eB, {
                children: [
                    (0, r.jsx)(b.A, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: O.SX,
                        label: U.intl.string(U.t.tUjnxr),
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
                    (0, r.jsx)(P.pd, {
                        label: U.intl.string(U.t["CIGa+7"]),
                        error: this.renderError("password"),
                        onChange: (e) => this.setState({ password: e }),
                        name: "password",
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        autoFocus: t,
                        value: this.state.password,
                        required: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: O.a5,
                        children: (0, r.jsx)(u.Q, {
                            text: U.intl.string(U.t.wWIufs),
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
                (0, r.jsx)(g.rQ, { title: U.intl.string(U.t.bPP34Q), subtitle: U.intl.string(U.t.rvx0T4) }),
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
                    leading: (0, r.jsx)(u.Q, {
                        variant: "secondary",
                        size: "md",
                        onClick: t,
                        text: U.intl.string(U.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: U.intl.string(U.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: e === v.aUe.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let e = { ticket: this.props.mfaTicket, methods: this.props.mfaMethods };
        return (0, r.jsx)(k.t, {
            mfaFinish: this.handleTokenSubmitMFA,
            mfaChallenge: e,
            onEarlyClose: () => {
                this.handleReset();
            },
        });
    }
    renderDisabledAccount() {
        let e = this.props.loginStatus === v.aUe.ACCOUNT_DISABLED,
            t = e ? U.intl.string(U.t["j3rC+U"]) : U.intl.string(U.t.ZFWofo),
            s = e ? U.intl.string(U.t["6eNTWe"]) : U.intl.string(U.t["pCBti+"]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.rQ, { title: t, subtitle: s }),
                (0, r.jsx)(A.H, {
                    leading: (0, r.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: U.intl.format(U.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [{ variant: "primary", text: U.intl.string(U.t.JhDw5o), onClick: this.handleReset }],
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
            ...this.props,
        });
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: e } = this.state;
        return (0, r.jsx)(p.c, {
            children: (0, r.jsx)(x.A, {
                title: U.intl.string(U.t["+xqy3d"]),
                subtitle: U.intl.format(U.t.ef4uZ7, { onResendClick: this.handleResendCode }),
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
    handleLogin = async (e) => {
        let { password: t, undelete: s } = this.state;
        (e?.preventDefault(), this.setState({ errors: {} }));
        try {
            await m.A.login({ login: this.getFullLogin(), password: t, undelete: s, isMultiAccount: !0 });
        } catch (t) {
            let e = (0, S.p)(t);
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
let B = function (e) {
    let { onClose: t, transitionState: s, onBackPressed: i, ...l } = e,
        { suspendedUserToken: d, ...h } = (0, a.cf)([L.A, F.default, _.A, M.A], () => ({
            authenticated: F.default.isAuthenticated(),
            loginStatus: F.default.getLoginStatus(),
            mfaTicket: F.default.getMFATicket(),
            mfaMethods: F.default.getMFAMethods(),
            defaultRoute: L.A.defaultRoute,
            country: _.A.getCountryCode(),
            theme: M.A.theme,
            suspendedUserToken: F.default.getSuspendedUserToken(),
        }));
    (0, R.A)({ type: o.ImpressionTypes.MODAL, name: o.ImpressionNames.USER_LOGIN });
    let c = n.useCallback(() => {
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
            children: (0, r.jsx)(G, {
                ...l,
                ...h,
                transitionTo: T.pX,
                replaceWith: T.bG,
                onBackPressed: c,
                authBoxClassName: I.Nr,
            }),
        })
    );
};
