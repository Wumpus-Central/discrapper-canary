r.d(t, {
    default: () => U,
}),
    r(457529),
    r(747238),
    r(812715);
var s,
    n = r(627968),
    o = r(64700),
    i = r(430370),
    a = r(110259),
    l = r(511815),
    d = r(158954),
    c = r(311907),
    h = r(139033),
    u = r(397927),
    f = r(830215),
    p = r(163050),
    g = r(139286),
    b = r(15552),
    w = r(854378),
    y = r(952116),
    m = r(720353),
    A = r(557722),
    P = r(148864),
    C = r(146571),
    O = r(976860),
    x = r(544028),
    E = r(933924),
    j = r(961350),
    S = r(650048),
    R = r(203982),
    k = r(723702),
    v = r(837921),
    _ = r(652215),
    T = r(985018),
    D = r(31669),
    F = r(473169);

function N(e, t, r) {
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
                N(e, t, r[t]);
            });
    }
    return e;
}

function M(e, t) {
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
class I extends (s = o.PureComponent) {
    componentDidMount() {
        window.addEventListener("keydown", this.handleTabOrEnter),
            (0, E.a)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
            });
    }
    componentDidUpdate(e, t) {
        let { authenticated: r, transitionTo: s } = this.props;
        if (
            (r && !e.authenticated && (s(_.BVt.APP), this.state.conditionalMediationAbortController.abort()),
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
            className: D.Eh,
            children: (0, n.jsxs)(w.eB, {
                children: [
                    (0, n.jsx)(C.A, {
                        alpha2: t.alpha2,
                        countryCode: t.code.split(" ")[0],
                        className: F.SX,
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
                    (0, n.jsx)(w.pd, {
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
                    (0, n.jsxs)(u.ButtonGroup, {
                        direction: "horizontal",
                        className: F.a5,
                        children: [
                            (0, n.jsx)(u.QWc, {
                                text: T.intl.string(T.t.wWIufs),
                                onClick: this.handleForgotPassword,
                            }),
                            (0, n.jsx)(u.QWc, {
                                text: T.intl.string(T.t["/kpMDt"]),
                                onClick: () => {
                                    var e;
                                    let t;
                                    return (
                                        (e = this.state.conditionalMediationAbortController),
                                        (t =
                                            k.isPlatformEmbedded && v.Ay.supportsFeature(_.BYE.WEBAUTHN)
                                                ? v.Ay.webAuthnAuthenticate
                                                : (e) => {
                                                      let t = (0, i.d5)(JSON.parse(e));
                                                      return (0, i.Jt)(t).then((e) => JSON.stringify(e));
                                                  }),
                                        void f.A.authenticatePasswordless({
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
                (0, n.jsx)(d.rQ0, {
                    title: T.intl.string(T.t.bPP34Q),
                    subtitle: T.intl.string(T.t.rvx0T4),
                }),
                (0, n.jsx)(d.cwr, {
                    children: this.renderDefaultForm(),
                }),
                (0, n.jsx)(d.H7u, {
                    leading: (0, n.jsx)(u.QWc, {
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
                            loading: e === _.aUe.LOGGING_IN,
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
        let e = this.props.loginStatus === _.aUe.ACCOUNT_DISABLED,
            t = e ? T.intl.string(T.t["j3rC+U"]) : T.intl.string(T.t.ZFWofo),
            r = e ? T.intl.string(T.t["6eNTWe"]) : T.intl.string(T.t["pCBti+"]);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(d.rQ0, {
                    title: t,
                    subtitle: r,
                }),
                (0, n.jsx)(d.H7u, {
                    leading: (0, n.jsx)(u.Text, {
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
                            f.A.switchAccountToken(e);
                    },
                    width: "100%",
                },
                this.props,
            ),
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: e } = this.state;
        return (0, n.jsx)(d.cwr, {
            children: (0, n.jsx)(y.A, {
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
            case _.aUe.LOGGING_IN_MFA_SMS:
            case _.aUe.MFA_SMS_STEP:
            case _.aUe.LOGGING_IN_MFA:
            case _.aUe.MFA_STEP:
                return this.renderMFA();
            case _.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case _.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case _.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case _.aUe.LOGGING_IN:
            case _.aUe.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(e) {
        super(e),
            N(this, "loginRef", void 0),
            N(this, "passwordRef", void 0),
            N(this, "codeRef", void 0),
            N(this, "handleAuthToken", async (e) => {
                this.setState({
                    errors: {},
                }),
                    await f.A.loginToken(e, !1);
            }),
            N(this, "handleTabOrEnter", (e) => {
                if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault();
                }
                "Enter" === e.key &&
                    (e.target === this.loginRef || e.target === this.passwordRef) &&
                    (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            N(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            N(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            N(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            N(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            N(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let r = t[e];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }),
            N(this, "handleForgotPassword", async (e) => {
                var t;
                null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus();
                let r = this.getFullLogin();
                this.setState({
                    errors: {},
                });
                try {
                    R._.dispatch(_.jej.WAVE_EMPHASIZE);
                    let e = await f.A.forgotPassword(r);
                    if (!1 === e) return;
                    e === l.D.ONE_TIME_LOGIN
                        ? (0, u.qfG)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: T.intl.string(T.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, n.jsx)(
                                  d.Modal,
                                  M(
                                      L(
                                          {
                                              title: T.intl.string(T.t["6Ecyts"]),
                                              actions: t,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, n.jsx)(u.Text, {
                                              variant: "text-md/normal",
                                              children: T.intl.string(T.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, h.A)({
                              title: T.intl.string(T.t.f5Pi7A),
                              subtitle: T.intl.format(T.t["6u5hQ9"], {
                                  email: r,
                              }),
                          });
                } catch (t) {
                    let e = (0, b.p)(t);
                    this.setState({
                        errors: e,
                    });
                }
            }),
            N(this, "handleLogin", async (e) => {
                let { password: t, undelete: r } = this.state;
                null == e || e.preventDefault(),
                    this.setState({
                        errors: {},
                    });
                try {
                    await f.A.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: r,
                        isMultiAccount: !0,
                    });
                } catch (t) {
                    let e = (0, b.p)(t);
                    this.setState({
                        errors: e,
                    });
                }
            }),
            N(this, "handlePasswordReset", async (e) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {},
                });
                try {
                    let { token: t } = await A.A.verifyPhone(this.getFullLogin(), e, !1, !0);
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
            N(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: r, ticket: s } = e;
                return f.A.loginMFAv2({
                    code: r,
                    ticket: s,
                    mfaType: t,
                    isMultiAccount: !0,
                });
            }),
            N(this, "handleResendCode", () => {
                A.A.resendCode(this.getFullLogin());
            }),
            N(this, "handleReset", (e) => {
                null == e || e.preventDefault(),
                    f.A.loginReset(!0),
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
            N(this, "handleCancelAccountDeletion", () => {
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
N(I, "defaultProps", {
    transitionTo: (e) => r.g.location.assign(e),
    replaceWith: (e) => r.g.location.replace(e),
});
let U = function (e) {
    let { onClose: t, transitionState: r, onBackPressed: s } = e,
        i = (function (e, t) {
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
        l = (0, c.cf)([S.A, j.default, P.A, x.A], () => ({
            authenticated: j.default.isAuthenticated(),
            isPasswordlessActive: j.default.getIsPasswordlessActive(),
            loginStatus: j.default.getLoginStatus(),
            mfaTicket: j.default.getMFATicket(),
            mfaMethods: j.default.getMFAMethods(),
            defaultRoute: S.A.defaultRoute,
            country: P.A.getCountryCode(),
            theme: x.A.theme,
        }));
    (0, g.A)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.USER_LOGIN,
    });
    let h = o.useCallback(() => {
        t(), s();
    }, [t, s]);
    return (0, n.jsx)(d.dWK, {
        size: "md",
        onClose: t,
        transitionState: r,
        children: (0, n.jsx)(
            I,
            M(L({}, i, l), {
                transitionTo: O.pX,
                replaceWith: O.bG,
                onBackPressed: h,
                authBoxClassName: D.Nr,
            }),
        ),
    });
};
