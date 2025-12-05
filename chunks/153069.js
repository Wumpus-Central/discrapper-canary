r.d(e, { default: () => Z }), r(49124), r(35282), r(704826);
var n,
    s = r(54381),
    o = r(473749),
    i = r(533126),
    a = r(990547),
    l = r(265489),
    u = r(793030),
    d = r(442837),
    h = r(885387),
    c = r(481060),
    p = r(893776),
    f = r(479495),
    g = r(213609),
    m = r(254942),
    b = r(388905),
    _ = r(379760),
    C = r(124860),
    y = r(144114),
    w = r(541692),
    P = r(952802),
    x = r(703656),
    O = r(210887),
    A = r(901375),
    S = r(314897),
    j = r(896797),
    E = r(585483),
    v = r(358085),
    R = r(998502),
    k = r(981631),
    T = r(388032),
    I = r(407791),
    F = r(197571);
function L(t, e, r) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = r),
        t
    );
}
function D(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                L(t, e, r[e]);
            });
    }
    return t;
}
function N(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(e)).forEach(function (r) {
                  Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              }),
        t
    );
}
class M extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener("keydown", this.handleTabOrEnter),
            (0, A.j)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
            });
    }
    componentDidUpdate(t, e) {
        let { authenticated: r, transitionTo: n } = this.props;
        if (
            (r && !t.authenticated && (n(k.Z5c.APP), this.state.conditionalMediationAbortController.abort()),
            e.errors !== this.state.errors)
        ) {
            var s, o, i;
            this.hasError("password")
                ? null == (s = this.passwordRef) || s.focus()
                : this.hasError("email") || this.hasError("login")
                  ? null == (o = this.loginRef) || o.focus()
                  : this.hasError("code") && (null == (i = this.codeRef) || i.focus());
        }
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleTabOrEnter),
            this.state.conditionalMediationAbortController.abort();
    }
    hasError(t) {
        return null != this.state.errors[t];
    }
    renderDefaultForm() {
        var t;
        let { country: e, isPasswordlessActive: r } = this.props,
            n = !this.hasError("email") && this.hasError("password");
        return (0, s.jsx)("div", {
            className: I.mainLoginContainer,
            children: (0, s.jsxs)(b.gO, {
                children: [
                    (0, s.jsx)(P.Z, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: F.marginBottom20,
                        label: T.intl.string(T.t.tUjnxr),
                        error: null != (t = this.renderError("login")) ? t : this.renderError("email"),
                        onChange: (t, e) =>
                            this.setState({
                                login: t,
                                loginPrefix: e,
                            }),
                        setRef: this.setLoginRef,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: this.state.login,
                        autoFocus: !n,
                        required: !0,
                    }),
                    (0, s.jsx)(b.II, {
                        label: T.intl.string(T.t["CIGa+7"]),
                        error: this.renderError("password"),
                        onChange: (t) => this.setState({ password: t }),
                        name: "password",
                        type: "password",
                        setRef: this.setPasswordRef,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        autoFocus: n,
                        value: this.state.password,
                        required: !0,
                    }),
                    (0, s.jsxs)(c.ButtonGroup, {
                        direction: "horizontal",
                        className: F.marginTop4,
                        children: [
                            (0, s.jsx)(c.Avr, {
                                text: T.intl.string(T.t.wWIufs),
                                onClick: this.handleForgotPassword,
                            }),
                            (0, s.jsx)(c.Avr, {
                                text: T.intl.string(T.t["/kpMDt"]),
                                onClick: () =>
                                    (function (t) {
                                        let e =
                                            v.isPlatformEmbedded && R.ZP.supportsFeature(k.eRX.WEBAUTHN)
                                                ? R.ZP.webAuthnAuthenticate
                                                : (t) => {
                                                      let e = (0, i.wz)(JSON.parse(t));
                                                      return (0, i.U2)(e).then((t) => JSON.stringify(t));
                                                  };
                                        p.Z.authenticatePasswordless({
                                            authenticateFunc: e,
                                            conditionalMediationAbortController: t,
                                        }).catch(() => {});
                                    })(this.state.conditionalMediationAbortController),
                                disabled: r,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderDefault() {
        let { loginStatus: t, onBackPressed: e } = this.props;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(u.xBx, {
                    title: T.intl.string(T.t.bPP34Q),
                    subtitle: T.intl.string(T.t.rvx0T4),
                }),
                (0, s.jsx)(u.fef, { children: this.renderDefaultForm() }),
                (0, s.jsx)(u.Go$, {
                    leading: (0, s.jsx)(c.Avr, {
                        variant: "secondary",
                        size: "md",
                        onClick: e,
                        text: T.intl.string(T.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: T.intl.string(T.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: t === k.u34.LOGGING_IN,
                        },
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let t = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, s.jsx)(C.Cd, {
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
        let t = this.props.loginStatus === k.u34.ACCOUNT_DISABLED,
            e = t ? T.intl.string(T.t["j3rC+U"]) : T.intl.string(T.t.ZFWofo),
            r = t ? T.intl.string(T.t["6eNTWe"]) : T.intl.string(T.t["pCBti+"]);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(u.xBx, {
                    title: e,
                    subtitle: r,
                }),
                (0, s.jsx)(u.Go$, {
                    leading: (0, s.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: T.intl.format(T.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
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
        let { resetPasswordPhoneToken: t } = this.state;
        return (0, s.jsx)(
            f.Z,
            D(
                {
                    resetToken: t,
                    onLoginSuccess: (t) => {
                        this.setState({ errors: {} }), p.Z.switchAccountToken(t);
                    },
                    width: "100%",
                },
                this.props,
            ),
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, s.jsx)(u.fef, {
            children: (0, s.jsx)(_.Z, {
                title: T.intl.string(T.t["+xqy3d"]),
                subtitle: T.intl.format(T.t.ef4uZ7, { onResendClick: this.handleResendCode }),
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
            case k.u34.LOGGING_IN_MFA_SMS:
            case k.u34.MFA_SMS_STEP:
            case k.u34.LOGGING_IN_MFA:
            case k.u34.MFA_STEP:
                return this.renderMFA();
            case k.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case k.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case k.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case k.u34.LOGGING_IN:
            case k.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(t) {
        super(t),
            L(this, "loginRef", void 0),
            L(this, "passwordRef", void 0),
            L(this, "codeRef", void 0),
            L(this, "handleAuthToken", async (t) => {
                this.setState({ errors: {} }), await p.Z.loginToken(t, !1);
            }),
            L(this, "handleTabOrEnter", (t) => {
                if ("Tab" === t.key && !t.shiftKey && t.target === this.loginRef) {
                    var e;
                    null == (e = this.passwordRef) || e.focus(), t.stopPropagation(), t.preventDefault();
                }
                "Enter" === t.key &&
                    (t.target === this.loginRef || t.target === this.passwordRef) &&
                    (this.handleLogin(), t.stopPropagation(), t.preventDefault());
            }),
            L(this, "setLoginRef", (t) => {
                this.loginRef = t;
            }),
            L(this, "setPasswordRef", (t) => {
                this.passwordRef = t;
            }),
            L(this, "setCodeRef", (t) => {
                this.codeRef = t;
            }),
            L(this, "getFullLogin", () => {
                let { loginPrefix: t, login: e } = this.state;
                return t + e;
            }),
            L(this, "renderError", (t) => {
                let { errors: e } = this.state;
                if (this.hasError(t)) {
                    let r = e[t];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }),
            L(this, "handleForgotPassword", async (t) => {
                var e;
                null == t || t.preventDefault(), null == (e = this.loginRef) || e.focus();
                let r = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    E.S.dispatch(k.CkL.WAVE_EMPHASIZE);
                    let t = await p.Z.forgotPassword(r);
                    if (!1 === t) return;
                    t === l.B.ONE_TIME_LOGIN
                        ? (0, c.h7j)((t) => {
                              let e = [
                                  {
                                      variant: "primary",
                                      text: T.intl.string(T.t.BddRzS),
                                      onClick: t.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, s.jsx)(
                                  u.Modal,
                                  N(
                                      D(
                                          {
                                              title: T.intl.string(T.t["6Ecyts"]),
                                              actions: e,
                                          },
                                          t,
                                      ),
                                      {
                                          children: (0, s.jsx)(c.Text, {
                                              variant: "text-md/normal",
                                              children: T.intl.string(T.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, h.Z)({
                              title: T.intl.string(T.t.f5Pi7A),
                              subtitle: T.intl.format(T.t["6u5hQ9"], { email: r }),
                          });
                } catch (e) {
                    let t = (0, m.p)(e);
                    this.setState({ errors: t });
                }
            }),
            L(this, "handleLogin", async (t) => {
                let { password: e, undelete: r } = this.state;
                null == t || t.preventDefault(), this.setState({ errors: {} });
                try {
                    await p.Z.login({
                        login: this.getFullLogin(),
                        password: e,
                        undelete: r,
                        isMultiAccount: !0,
                    });
                } catch (e) {
                    let t = (0, m.p)(e);
                    this.setState({ errors: t });
                }
            }),
            L(this, "handlePasswordReset", async (t) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {},
                });
                try {
                    let { token: e } = await y.Z.verifyPhone(this.getFullLogin(), t, !1, !0);
                    this.setState({ resetPasswordPhoneToken: e });
                } catch (t) {
                    null != t.body && null != t.body.message && this.setState({ phoneVerifyError: t.body.message });
                }
            }),
            L(this, "handleTokenSubmitMFA", (t) => {
                let { mfaType: e, data: r, ticket: n } = t;
                return p.Z.loginMFAv2({
                    code: r,
                    ticket: n,
                    mfaType: e,
                    isMultiAccount: !0,
                });
            }),
            L(this, "handleResendCode", () => {
                y.Z.resendCode(this.getFullLogin());
            }),
            L(this, "handleReset", (t) => {
                null == t || t.preventDefault(),
                    p.Z.loginReset(!0),
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
            L(this, "handleCancelAccountDeletion", () => {
                this.setState({ undelete: !0 }, this.handleLogin);
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
L(M, "defaultProps", {
    transitionTo: (t) => r.g.location.assign(t),
    replaceWith: (t) => r.g.location.replace(t),
});
let Z = function (t) {
    var { onClose: e, transitionState: r, onBackPressed: n } = t,
        i = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                s = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        s = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (s[r] = t[r]);
                    return s;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (s[r] = t[r]);
            }
            return s;
        })(t, ["onClose", "transitionState", "onBackPressed"]);
    let l = (0, d.cj)([j.Z, S.default, w.Z, O.Z], () => ({
        authenticated: S.default.isAuthenticated(),
        isPasswordlessActive: S.default.getIsPasswordlessActive(),
        loginStatus: S.default.getLoginStatus(),
        mfaTicket: S.default.getMFATicket(),
        mfaMethods: S.default.getMFAMethods(),
        defaultRoute: j.Z.defaultRoute,
        country: w.Z.getCountryCode(),
        theme: O.Z.theme,
    }));
    (0, g.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.USER_LOGIN,
    });
    let h = o.useCallback(() => {
        e(), n();
    }, [e, n]);
    return (0, s.jsx)(u.IX, {
        size: "md",
        onClose: e,
        transitionState: r,
        children: (0, s.jsx)(
            M,
            N(D({}, i, l), {
                transitionTo: x.uL,
                replaceWith: x.dL,
                onBackPressed: h,
                authBoxClassName: I.card,
            }),
        ),
    });
};
