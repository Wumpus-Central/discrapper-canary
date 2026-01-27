r.d(t, {
    default: () => U,
}),
    r(747238),
    r(812715);
var s,
    n = r(627968),
    o = r(64700),
    i = r(110259),
    a = r(511815),
    l = r(158954),
    h = r(311907),
    d = r(139033),
    c = r(397927),
    u = r(830215),
    p = r(163050),
    f = r(139286),
    g = r(15552),
    b = r(854378),
    _ = r(952116),
    m = r(720353),
    y = r(557722),
    w = r(148864),
    A = r(146571),
    P = r(976860),
    C = r(544028),
    x = r(933924),
    O = r(293731),
    E = r(961350),
    j = r(650048),
    R = r(203982),
    S = r(723702),
    k = r(837921),
    v = r(652215),
    T = r(985018),
    F = r(31669),
    I = r(473169);

function D(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                D(e, t, r[t]);
            });
    }
    return e;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, s);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
class M extends (s = o.PureComponent) {
    componentDidMount() {
        window.addEventListener("keydown", this.handleTabOrEnter),
            (0, x.a)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
            });
    }
    componentDidUpdate(e, t) {
        let { authenticated: r, transitionTo: s } = this.props;
        if (
            (r && !e.authenticated && (s(v.BVt.APP), this.state.conditionalMediationAbortController.abort()),
            t.errors !== this.state.errors)
        ) {
            var n, o, i;
            this.hasError("password")
                ? null == (n = this.passwordRef) || n.focus()
                : this.hasError("email") || this.hasError("login")
                  ? null == (o = this.loginRef) || o.focus()
                  : this.hasError("code") && (null == (i = this.codeRef) || i.focus());
        }
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleTabOrEnter),
            this.state.conditionalMediationAbortController.abort();
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderDefaultForm() {
        var e;
        let { country: t, isPasswordlessActive: r } = this.props,
            s = !this.hasError("email") && this.hasError("password");
        return (0, n.jsx)("div", {
            className: F.Eh,
            children: (0, n.jsxs)(b.eB, {
                children: [
                    (0, n.jsx)(A.A, {
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        className: I.SX,
                        label: T.intl.string(T.t.tUjnxr),
                        error: null != (e = this.renderError("login")) ? e : this.renderError("email"),
                        onChange: (e, t) =>
                            this.setState({
                                login: e,
                                loginPrefix: t,
                            }),
                        setRef: this.setLoginRef,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: this.state.login,
                        autoFocus: !s,
                        required: !0,
                    }),
                    (0, n.jsx)(b.pd, {
                        label: T.intl.string(T.t["CIGa+7"]),
                        error: this.renderError("password"),
                        onChange: (e) =>
                            this.setState({
                                password: e,
                            }),
                        name: "password",
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        autoFocus: s,
                        value: this.state.password,
                        required: !0,
                    }),
                    (0, n.jsxs)(c.ButtonGroup, {
                        direction: "horizontal",
                        className: I.a5,
                        children: [
                            (0, n.jsx)(c.QWc, {
                                text: T.intl.string(T.t.wWIufs),
                                onClick: this.handleForgotPassword,
                            }),
                            (0, n.jsx)(c.QWc, {
                                text: T.intl.string(T.t["/kpMDt"]),
                                onClick: () => {
                                    var e;
                                    let t;
                                    return (
                                        (e = this.state.conditionalMediationAbortController),
                                        (t =
                                            S.isPlatformEmbedded && k.Ay.supportsFeature(v.BYE.WEBAUTHN)
                                                ? k.Ay.webAuthnAuthenticate
                                                : O.J),
                                        void u.A.authenticatePasswordless({
                                            authenticateFunc: t,
                                            conditionalMediationAbortController: e,
                                        }).catch(() => {})
                                    );
                                },
                                disabled: r,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderDefault() {
        let { loginStatus: e, onBackPressed: t } = this.props;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.rQ0, {
                    title: T.intl.string(T.t.bPP34Q),
                    subtitle: T.intl.string(T.t.rvx0T4),
                }),
                (0, n.jsx)(l.cwr, {
                    children: this.renderDefaultForm(),
                }),
                (0, n.jsx)(l.H7u, {
                    leading: (0, n.jsx)(c.QWc, {
                        variant: "secondary",
                        size: "md",
                        onClick: t,
                        text: T.intl.string(T.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: T.intl.string(T.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: e === v.aUe.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, n.jsx)(m.t, {
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
        let e = this.props.loginStatus === v.aUe.ACCOUNT_DISABLED,
            t = e ? T.intl.string(T.t["j3rC+U"]) : T.intl.string(T.t.ZFWofo),
            r = e ? T.intl.string(T.t["6eNTWe"]) : T.intl.string(T.t["pCBti+"]);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.rQ0, {
                    title: t,
                    subtitle: r,
                }),
                (0, n.jsx)(l.H7u, {
                    leading: (0, n.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: T.intl.format(T.t.js2rr5, {
                            onClick: this.handleCancelAccountDeletion,
                        }),
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: T.intl.string(T.t.JhDw5o),
                            onClick: this.handleReset,
                        },
                    ],
                }),
            ],
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, n.jsx)(
            p.A,
            L(
                {
                    resetToken: e,
                    onLoginSuccess: (e) => {
                        this.setState({
                            errors: {},
                        }),
                            u.A.switchAccountToken(e);
                    },
                    width: "100%",
                },
                this.props,
            ),
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: e } = this.state;
        return (0, n.jsx)(l.cwr, {
            children: (0, n.jsx)(_.A, {
                title: T.intl.string(T.t["+xqy3d"]),
                subtitle: T.intl.format(T.t.ef4uZ7, {
                    onResendClick: this.handleResendCode,
                }),
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
    constructor(e) {
        super(e),
            D(this, "loginRef", void 0),
            D(this, "passwordRef", void 0),
            D(this, "codeRef", void 0),
            D(this, "handleAuthToken", async (e) => {
                this.setState({
                    errors: {},
                }),
                    await u.A.loginToken(e, !1);
            }),
            D(this, "handleTabOrEnter", (e) => {
                if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault();
                }
                "Enter" === e.key &&
                    (e.target === this.loginRef || e.target === this.passwordRef) &&
                    (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            D(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            D(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            D(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            D(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            D(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let r = t[e];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }),
            D(this, "handleForgotPassword", async (e) => {
                var t;
                null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus();
                let r = this.getFullLogin();
                this.setState({
                    errors: {},
                });
                try {
                    R._.dispatch(v.jej.WAVE_EMPHASIZE);
                    let e = await u.A.forgotPassword(r);
                    if (!1 === e) return;
                    e === a.D.ONE_TIME_LOGIN
                        ? (0, c.qfG)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: T.intl.string(T.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, n.jsx)(
                                  l.Modal,
                                  N(
                                      L(
                                          {
                                              title: T.intl.string(T.t["6Ecyts"]),
                                              actions: t,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, n.jsx)(c.Text, {
                                              variant: "text-md/normal",
                                              children: T.intl.string(T.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, d.A)({
                              title: T.intl.string(T.t.f5Pi7A),
                              subtitle: T.intl.format(T.t["6u5hQ9"], {
                                  email: r,
                              }),
                          });
                } catch (t) {
                    let e = (0, g.p)(t);
                    this.setState({
                        errors: e,
                    });
                }
            }),
            D(this, "handleLogin", async (e) => {
                let { password: t, undelete: r } = this.state;
                null == e || e.preventDefault(),
                    this.setState({
                        errors: {},
                    });
                try {
                    await u.A.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: r,
                        isMultiAccount: !0,
                    });
                } catch (t) {
                    let e = (0, g.p)(t);
                    this.setState({
                        errors: e,
                    });
                }
            }),
            D(this, "handlePasswordReset", async (e) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {},
                });
                try {
                    let { token: t } = await y.A.verifyPhone(this.getFullLogin(), e, !1, !0);
                    this.setState({
                        resetPasswordPhoneToken: t,
                    });
                } catch (e) {
                    null != e.body &&
                        null != e.body.message &&
                        this.setState({
                            phoneVerifyError: e.body.message,
                        });
                }
            }),
            D(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: r, ticket: s } = e;
                return u.A.loginMFAv2({
                    code: r,
                    ticket: s,
                    mfaType: t,
                    isMultiAccount: !0,
                });
            }),
            D(this, "handleResendCode", () => {
                y.A.resendCode(this.getFullLogin());
            }),
            D(this, "handleReset", (e) => {
                null == e || e.preventDefault(),
                    u.A.loginReset(!0),
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
            }),
            D(this, "handleCancelAccountDeletion", () => {
                this.setState(
                    {
                        undelete: !0,
                    },
                    this.handleLogin,
                );
            }),
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
}
D(M, "defaultProps", {
    transitionTo: (e) => r.g.location.assign(e),
    replaceWith: (e) => r.g.location.replace(e),
});
let U = function (e) {
    let { onClose: t, transitionState: r, onBackPressed: s } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                s,
                n,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++)
                    (s = r[n]),
                        !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s]);
                return o;
            }
            if (
                ((o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        s,
                        n = {},
                        o = Object.getOwnPropertyNames(e);
                    for (s = 0; s < o.length; s++)
                        (r = o[s]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                    return n;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                    (s = r[n]),
                        !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s]);
            return o;
        })(e, ["onClose", "transitionState", "onBackPressed"]),
        d = (0, h.cf)([j.A, E.default, w.A, C.A], () => ({
            authenticated: E.default.isAuthenticated(),
            isPasswordlessActive: E.default.getIsPasswordlessActive(),
            loginStatus: E.default.getLoginStatus(),
            mfaTicket: E.default.getMFATicket(),
            mfaMethods: E.default.getMFAMethods(),
            defaultRoute: j.A.defaultRoute,
            country: w.A.getCountryCode(),
            theme: C.A.theme,
        }));
    (0, f.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.USER_LOGIN,
    });
    let c = o.useCallback(() => {
        t(), s();
    }, [t, s]);
    return (0, n.jsx)(l.dWK, {
        size: "md",
        onClose: t,
        transitionState: r,
        children: (0, n.jsx)(
            M,
            N(L({}, a, d), {
                transitionTo: P.pX,
                replaceWith: P.bG,
                onBackPressed: c,
                authBoxClassName: F.Nr,
            }),
        ),
    });
};
