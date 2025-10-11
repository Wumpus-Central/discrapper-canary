r.d(e, { default: () => G }), r(49124), r(35282), r(704826);
var n,
    o = r(951288),
    s = r(647438),
    i = r(533126),
    a = r(120356),
    l = r.n(a),
    u = r(990547),
    d = r(793030),
    c = r(442837),
    h = r(755721),
    p = r(481060),
    f = r(893776),
    g = r(479495),
    m = r(213609),
    b = r(254942),
    _ = r(388905),
    C = r(379760),
    y = r(124860),
    w = r(144114),
    P = r(541692),
    x = r(952802),
    O = r(703656),
    A = r(210887),
    S = r(901375),
    j = r(314897),
    k = r(896797),
    R = r(585483),
    E = r(358085),
    v = r(998502),
    I = r(981631),
    T = r(388032),
    L = r(407791),
    F = r(197571);
function N(t, e, r) {
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
                N(t, e, r[e]);
            });
    }
    return t;
}
function M(t, e) {
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
class Z extends (n = s.PureComponent) {
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
            (r && !t.authenticated && (n(I.Z5c.APP), this.state.conditionalMediationAbortController.abort()),
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
            className: L.mainLoginContainer,
            children: (0, o.jsxs)(_.gO, {
                children: [
                    (0, o.jsx)(x.Z, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: F.marginBottom20,
                        label: T.intl.string(T.t.tUjnxs),
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
                    (0, o.jsx)(_.II, {
                        label: T.intl.string(T.t["CIGa+/"]),
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
                        className: l()(F.marginTop4, L.buttonsContainer),
                        children: [
                            (0, o.jsx)(_.zx, {
                                onClick: this.handleForgotPassword,
                                look: h.zx.Looks.LINK,
                                color: h.zx.Colors.LINK,
                                children: T.intl.string(T.t.wWIufn),
                            }),
                            (0, o.jsx)(_.zx, {
                                onClick: () =>
                                    (function (t) {
                                        let e =
                                            E.isPlatformEmbedded && v.ZP.supportsFeature(I.eRX.WEBAUTHN)
                                                ? v.ZP.webAuthnAuthenticate
                                                : (t) => {
                                                      let e = (0, i.wz)(JSON.parse(t));
                                                      return (0, i.U2)(e).then((t) => JSON.stringify(t));
                                                  };
                                        f.Z.authenticatePasswordless({
                                            authenticateFunc: e,
                                            conditionalMediationAbortController: t,
                                        }).catch(() => {});
                                    })(this.state.conditionalMediationAbortController),
                                look: h.zx.Looks.LINK,
                                color: h.zx.Colors.LINK,
                                disabled: r,
                                children: T.intl.string(T.t["/kpMDg"]),
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
                (0, o.jsx)(d.xBx, {
                    title: T.intl.string(T.t.bPP34e),
                    subtitle: T.intl.string(T.t.rvx0T0),
                }),
                (0, o.jsx)(d.fef, { children: this.renderDefaultForm() }),
                (0, o.jsx)(d.Go$, {
                    leading: (0, o.jsx)(p.Avr, {
                        variant: "secondary",
                        size: "md",
                        onClick: e,
                        text: T.intl.string(T.t["13/7kZ"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: T.intl.string(T.t["3PatS0"]),
                            onClick: this.handleLogin,
                            loading: t === I.u34.LOGGING_IN,
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
        return (0, o.jsx)(y.Cd, {
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
        let t = this.props.loginStatus === I.u34.ACCOUNT_DISABLED,
            e = t ? T.intl.string(T.t["j3rC+f"]) : T.intl.string(T.t.ZFWofn),
            r = t ? T.intl.string(T.t["6eNTWV"]) : T.intl.string(T.t.pCBti4);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(d.xBx, {
                    title: e,
                    subtitle: r,
                }),
                (0, o.jsx)(d.Go$, {
                    leading: (0, o.jsx)(p.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: T.intl.format(T.t.js2rr6, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: T.intl.string(T.t.JhDw5u),
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
            g.Z,
            D(
                {
                    resetToken: t,
                    onLoginSuccess: (t) => {
                        this.setState({ errors: {} }), f.Z.switchAccountToken(t);
                    },
                    width: "100%",
                },
                this.props,
            ),
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, o.jsx)(d.fef, {
            children: (0, o.jsx)(C.Z, {
                title: T.intl.string(T.t["+xqy3d"]),
                subtitle: T.intl.format(T.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
            case I.u34.LOGGING_IN_MFA_SMS:
            case I.u34.MFA_SMS_STEP:
            case I.u34.LOGGING_IN_MFA:
            case I.u34.MFA_STEP:
                return this.renderMFA();
            case I.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case I.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case I.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case I.u34.LOGGING_IN:
            case I.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(t) {
        super(t),
            N(this, "loginRef", void 0),
            N(this, "passwordRef", void 0),
            N(this, "codeRef", void 0),
            N(this, "handleAuthToken", async (t) => {
                this.setState({ errors: {} }), await f.Z.loginToken(t, !1);
            }),
            N(this, "handleTabOrEnter", (t) => {
                if ("Tab" === t.key && !t.shiftKey && t.target === this.loginRef) {
                    var e;
                    null == (e = this.passwordRef) || e.focus(), t.stopPropagation(), t.preventDefault();
                }
                "Enter" === t.key &&
                    (t.target === this.loginRef || t.target === this.passwordRef) &&
                    (this.handleLogin(), t.stopPropagation(), t.preventDefault());
            }),
            N(this, "setLoginRef", (t) => {
                this.loginRef = t;
            }),
            N(this, "setPasswordRef", (t) => {
                this.passwordRef = t;
            }),
            N(this, "setCodeRef", (t) => {
                this.codeRef = t;
            }),
            N(this, "getFullLogin", () => {
                let { loginPrefix: t, login: e } = this.state;
                return t + e;
            }),
            N(this, "renderError", (t) => {
                let { errors: e } = this.state;
                if (this.hasError(t)) {
                    let r = e[t];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }),
            N(this, "handleForgotPassword", async (t) => {
                var e;
                null == t || t.preventDefault(), null == (e = this.loginRef) || e.focus();
                let r = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((R.S.dispatch(I.CkL.WAVE_EMPHASIZE), !(await f.Z.forgotPassword(r)))) return;
                    (0, p.h7j)((t) =>
                        (0, o.jsx)(
                            p.ConfirmModal,
                            M(
                                D(
                                    {
                                        header: T.intl.string(T.t.f5Pi7O),
                                        confirmText: T.intl.string(T.t.BddRzc),
                                        confirmButtonColor: h.zx.Colors.BRAND,
                                    },
                                    t,
                                ),
                                {
                                    children: (0, o.jsx)(p.Text, {
                                        variant: "text-md/normal",
                                        children: T.intl.format(T.t["6u5hQ0"], { email: r }),
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
            N(this, "handleLogin", async (t) => {
                let { password: e, undelete: r } = this.state;
                null == t || t.preventDefault(), this.setState({ errors: {} });
                try {
                    await f.Z.login({
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
            N(this, "handlePasswordReset", async (t) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {},
                });
                try {
                    let { token: e } = await w.Z.verifyPhone(this.getFullLogin(), t, !1, !0);
                    this.setState({ resetPasswordPhoneToken: e });
                } catch (t) {
                    null != t.body && null != t.body.message && this.setState({ phoneVerifyError: t.body.message });
                }
            }),
            N(this, "handleTokenSubmitMFA", (t) => {
                let { mfaType: e, data: r, ticket: n } = t;
                return f.Z.loginMFAv2({
                    code: r,
                    ticket: n,
                    mfaType: e,
                    isMultiAccount: !0,
                });
            }),
            N(this, "handleResendCode", () => {
                w.Z.resendCode(this.getFullLogin());
            }),
            N(this, "handleReset", (t) => {
                null == t || t.preventDefault(),
                    f.Z.loginReset(!0),
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
N(Z, "defaultProps", {
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
    let a = (0, c.cj)([k.Z, j.default, P.Z, A.Z], () => ({
        authenticated: j.default.isAuthenticated(),
        isPasswordlessActive: j.default.getIsPasswordlessActive(),
        loginStatus: j.default.getLoginStatus(),
        mfaTicket: j.default.getMFATicket(),
        mfaMethods: j.default.getMFAMethods(),
        defaultRoute: k.Z.defaultRoute,
        country: P.Z.getCountryCode(),
        theme: A.Z.theme,
    }));
    (0, m.Z)({
        type: u.ImpressionTypes.MODAL,
        name: u.ImpressionNames.USER_LOGIN,
    });
    let l = s.useCallback(() => {
        e(), n();
    }, [e, n]);
    return (0, o.jsx)(d.IX, {
        size: "md",
        onClose: e,
        transitionState: r,
        children: (0, o.jsx)(
            Z,
            M(D({}, i, a), {
                transitionTo: O.uL,
                replaceWith: O.dL,
                onBackPressed: l,
                authBoxClassName: L.card,
            }),
        ),
    });
};
