r.d(e, { default: () => G }), r(49124), r(35282), r(704826);
var n,
    o = r(951288),
    s = r(647438),
    i = r(533126),
    a = r(120356),
    l = r.n(a),
    d = r(990547),
    u = r(265489),
    c = r(793030),
    h = r(442837),
    p = r(755721),
    f = r(481060),
    g = r(893776),
    m = r(479495),
    _ = r(213609),
    b = r(254942),
    C = r(388905),
    y = r(379760),
    w = r(124860),
    x = r(144114),
    P = r(541692),
    O = r(952802),
    j = r(703656),
    A = r(210887),
    S = r(901375),
    E = r(314897),
    k = r(896797),
    R = r(585483),
    v = r(358085),
    I = r(998502),
    T = r(981631),
    L = r(388032),
    F = r(407791),
    N = r(197571);
function D(t, e, r) {
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
function M(t) {
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
                D(t, e, r[e]);
            });
    }
    return t;
}
function Z(t, e) {
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
class B extends (n = s.PureComponent) {
    componentDidMount() {
        window.addEventListener("keydown", this.handleTabOrEnter),
            (0, S.j)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
            });
    }
    componentDidUpdate(t, e) {
        let { authenticated: r, transitionTo: n } = this.props;
        if (
            (r && !t.authenticated && (n(T.Z5c.APP), this.state.conditionalMediationAbortController.abort()),
            e.errors !== this.state.errors)
        ) {
            var o, s, i;
            this.hasError("password")
                ? null == (o = this.passwordRef) || o.focus()
                : this.hasError("email") || this.hasError("login")
                  ? null == (s = this.loginRef) || s.focus()
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
        return (0, o.jsx)("div", {
            className: F.mainLoginContainer,
            children: (0, o.jsxs)(C.gO, {
                children: [
                    (0, o.jsx)(O.Z, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: N.marginBottom20,
                        label: L.intl.string(L.t.tUjnxr),
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
                    (0, o.jsx)(C.II, {
                        label: L.intl.string(L.t["CIGa+7"]),
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
                    (0, o.jsxs)("div", {
                        className: l()(N.marginTop4, F.buttonsContainer),
                        children: [
                            (0, o.jsx)(C.zx, {
                                onClick: this.handleForgotPassword,
                                look: p.zx.Looks.LINK,
                                color: p.zx.Colors.LINK,
                                children: L.intl.string(L.t.wWIufs),
                            }),
                            (0, o.jsx)(C.zx, {
                                onClick: () =>
                                    (function (t) {
                                        let e =
                                            v.isPlatformEmbedded && I.ZP.supportsFeature(T.eRX.WEBAUTHN)
                                                ? I.ZP.webAuthnAuthenticate
                                                : (t) => {
                                                      let e = (0, i.wz)(JSON.parse(t));
                                                      return (0, i.U2)(e).then((t) => JSON.stringify(t));
                                                  };
                                        g.Z.authenticatePasswordless({
                                            authenticateFunc: e,
                                            conditionalMediationAbortController: t,
                                        }).catch(() => {});
                                    })(this.state.conditionalMediationAbortController),
                                look: p.zx.Looks.LINK,
                                color: p.zx.Colors.LINK,
                                disabled: r,
                                children: L.intl.string(L.t["/kpMDt"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderDefault() {
        let { loginStatus: t, onBackPressed: e } = this.props;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.xBx, {
                    title: L.intl.string(L.t.bPP34Q),
                    subtitle: L.intl.string(L.t.rvx0T4),
                }),
                (0, o.jsx)(c.fef, { children: this.renderDefaultForm() }),
                (0, o.jsx)(c.Go$, {
                    leading: (0, o.jsx)(f.Avr, {
                        variant: "secondary",
                        size: "md",
                        onClick: e,
                        text: L.intl.string(L.t["13/7kX"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: L.intl.string(L.t["3PatSz"]),
                            onClick: this.handleLogin,
                            loading: t === T.u34.LOGGING_IN,
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
        return (0, o.jsx)(w.Cd, {
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
        let t = this.props.loginStatus === T.u34.ACCOUNT_DISABLED,
            e = t ? L.intl.string(L.t["j3rC+U"]) : L.intl.string(L.t.ZFWofo),
            r = t ? L.intl.string(L.t["6eNTWe"]) : L.intl.string(L.t["pCBti+"]);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.xBx, {
                    title: e,
                    subtitle: r,
                }),
                (0, o.jsx)(c.Go$, {
                    leading: (0, o.jsx)(f.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: L.intl.format(L.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: L.intl.string(L.t.JhDw5o),
                            onClick: this.handleReset,
                        },
                    ],
                }),
            ],
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: t } = this.state;
        return (0, o.jsx)(
            m.Z,
            M(
                {
                    resetToken: t,
                    onLoginSuccess: (t) => {
                        this.setState({ errors: {} }), g.Z.switchAccountToken(t);
                    },
                    width: "100%",
                },
                this.props,
            ),
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, o.jsx)(c.fef, {
            children: (0, o.jsx)(y.Z, {
                title: L.intl.string(L.t["+xqy3d"]),
                subtitle: L.intl.format(L.t.ef4uZ7, { onResendClick: this.handleResendCode }),
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
            case T.u34.LOGGING_IN_MFA_SMS:
            case T.u34.MFA_SMS_STEP:
            case T.u34.LOGGING_IN_MFA:
            case T.u34.MFA_STEP:
                return this.renderMFA();
            case T.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case T.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case T.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case T.u34.LOGGING_IN:
            case T.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(t) {
        super(t),
            D(this, "loginRef", void 0),
            D(this, "passwordRef", void 0),
            D(this, "codeRef", void 0),
            D(this, "handleAuthToken", async (t) => {
                this.setState({ errors: {} }), await g.Z.loginToken(t, !1);
            }),
            D(this, "handleTabOrEnter", (t) => {
                if ("Tab" === t.key && !t.shiftKey && t.target === this.loginRef) {
                    var e;
                    null == (e = this.passwordRef) || e.focus(), t.stopPropagation(), t.preventDefault();
                }
                "Enter" === t.key &&
                    (t.target === this.loginRef || t.target === this.passwordRef) &&
                    (this.handleLogin(), t.stopPropagation(), t.preventDefault());
            }),
            D(this, "setLoginRef", (t) => {
                this.loginRef = t;
            }),
            D(this, "setPasswordRef", (t) => {
                this.passwordRef = t;
            }),
            D(this, "setCodeRef", (t) => {
                this.codeRef = t;
            }),
            D(this, "getFullLogin", () => {
                let { loginPrefix: t, login: e } = this.state;
                return t + e;
            }),
            D(this, "renderError", (t) => {
                let { errors: e } = this.state;
                if (this.hasError(t)) {
                    let r = e[t];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }),
            D(this, "handleForgotPassword", async (t) => {
                var e;
                null == t || t.preventDefault(), null == (e = this.loginRef) || e.focus();
                let r = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    R.S.dispatch(T.CkL.WAVE_EMPHASIZE);
                    let t = await g.Z.forgotPassword(r);
                    if (!1 === t) return;
                    t === u.B.ONE_TIME_LOGIN
                        ? (0, f.h7j)((t) => {
                              let e = [
                                  {
                                      variant: "primary",
                                      text: L.intl.string(L.t.BddRzS),
                                      onClick: t.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, o.jsx)(
                                  c.Modal,
                                  Z(
                                      M(
                                          {
                                              title: L.intl.string(L.t["6Ecyts"]),
                                              actions: e,
                                          },
                                          t,
                                      ),
                                      {
                                          children: (0, o.jsx)(f.Text, {
                                              variant: "text-md/normal",
                                              children: L.intl.string(L.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, f.h7j)((t) =>
                              (0, o.jsx)(
                                  f.ConfirmModal,
                                  Z(
                                      M(
                                          {
                                              header: L.intl.string(L.t.f5Pi7A),
                                              confirmText: L.intl.string(L.t.BddRzS),
                                              confirmButtonColor: p.zx.Colors.BRAND,
                                          },
                                          t,
                                      ),
                                      {
                                          children: (0, o.jsx)(f.Text, {
                                              variant: "text-md/normal",
                                              children: L.intl.format(L.t["6u5hQ9"], { email: r }),
                                          }),
                                      },
                                  ),
                              ),
                          );
                } catch (e) {
                    let t = (0, b.p)(e);
                    this.setState({ errors: t });
                }
            }),
            D(this, "handleLogin", async (t) => {
                let { password: e, undelete: r } = this.state;
                null == t || t.preventDefault(), this.setState({ errors: {} });
                try {
                    await g.Z.login({
                        login: this.getFullLogin(),
                        password: e,
                        undelete: r,
                        isMultiAccount: !0,
                    });
                } catch (e) {
                    let t = (0, b.p)(e);
                    this.setState({ errors: t });
                }
            }),
            D(this, "handlePasswordReset", async (t) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {},
                });
                try {
                    let { token: e } = await x.Z.verifyPhone(this.getFullLogin(), t, !1, !0);
                    this.setState({ resetPasswordPhoneToken: e });
                } catch (t) {
                    null != t.body && null != t.body.message && this.setState({ phoneVerifyError: t.body.message });
                }
            }),
            D(this, "handleTokenSubmitMFA", (t) => {
                let { mfaType: e, data: r, ticket: n } = t;
                return g.Z.loginMFAv2({
                    code: r,
                    ticket: n,
                    mfaType: e,
                    isMultiAccount: !0,
                });
            }),
            D(this, "handleResendCode", () => {
                x.Z.resendCode(this.getFullLogin());
            }),
            D(this, "handleReset", (t) => {
                null == t || t.preventDefault(),
                    g.Z.loginReset(!0),
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
D(B, "defaultProps", {
    transitionTo: (t) => r.g.location.assign(t),
    replaceWith: (t) => r.g.location.replace(t),
});
let G = function (t) {
    var { onClose: e, transitionState: r, onBackPressed: n } = t,
        i = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        s = Object.keys(t);
                    for (n = 0; n < s.length; n++) (r = s[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++)
                    (r = s[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["onClose", "transitionState", "onBackPressed"]);
    let a = (0, h.cj)([k.Z, E.default, P.Z, A.Z], () => ({
        authenticated: E.default.isAuthenticated(),
        isPasswordlessActive: E.default.getIsPasswordlessActive(),
        loginStatus: E.default.getLoginStatus(),
        mfaTicket: E.default.getMFATicket(),
        mfaMethods: E.default.getMFAMethods(),
        defaultRoute: k.Z.defaultRoute,
        country: P.Z.getCountryCode(),
        theme: A.Z.theme,
    }));
    (0, _.Z)({
        type: d.ImpressionTypes.MODAL,
        name: d.ImpressionNames.USER_LOGIN,
    });
    let l = s.useCallback(() => {
        e(), n();
    }, [e, n]);
    return (0, o.jsx)(c.IX, {
        size: "md",
        onClose: e,
        transitionState: r,
        children: (0, o.jsx)(
            B,
            Z(M({}, i, a), {
                transitionTo: j.uL,
                replaceWith: j.dL,
                onBackPressed: l,
                authBoxClassName: F.card,
            }),
        ),
    });
};
