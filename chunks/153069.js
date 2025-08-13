r.d(e, { default: () => W }), r(49124), r(35282), r(704826);
var n,
    s = r(255367),
    o = r(73800),
    i = r(533126),
    a = r(120356),
    l = r.n(a),
    u = r(990547),
    d = r(442837),
    h = r(257465),
    c = r(369585),
    p = r(103866),
    f = r(37148),
    g = r(755721),
    m = r(481060),
    b = r(893776),
    C = r(479495),
    _ = r(213609),
    w = r(254942),
    y = r(388905),
    P = r(379760),
    x = r(124860),
    O = r(144114),
    A = r(541692),
    j = r(952802),
    S = r(703656),
    k = r(210887),
    R = r(901375),
    E = r(314897),
    v = r(896797),
    I = r(585483),
    T = r(358085),
    L = r(998502),
    D = r(981631),
    F = r(388032),
    N = r(726656),
    M = r(881488);
function Z(t, e, r) {
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
function G(t) {
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
                Z(t, e, r[e]);
            });
    }
    return t;
}
function B(t, e) {
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
class z extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener("keydown", this.handleTabOrEnter),
            (0, R.j)({
                abortController: this.state.conditionalMediationAbortController,
                loginSource: "multi-account",
            });
    }
    componentDidUpdate(t, e) {
        let { authenticated: r, transitionTo: n } = this.props;
        if (
            (r && !t.authenticated && (n(D.Z5c.APP), this.state.conditionalMediationAbortController.abort()),
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
            className: N.mainLoginContainer,
            children: (0, s.jsxs)(y.gO, {
                children: [
                    (0, s.jsx)(j.Z, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: M.marginBottom20,
                        label: F.intl.string(F.t.tUjnxs),
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
                    (0, s.jsx)(y.II, {
                        label: F.intl.string(F.t["CIGa+/"]),
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
                    (0, s.jsxs)("div", {
                        className: l()(M.marginTop4, N.buttonsContainer),
                        children: [
                            (0, s.jsx)(y.zx, {
                                onClick: this.handleForgotPassword,
                                look: g.zx.Looks.LINK,
                                color: g.zx.Colors.LINK,
                                children: F.intl.string(F.t.wWIufn),
                            }),
                            (0, s.jsx)(y.zx, {
                                onClick: () =>
                                    (function (t) {
                                        let e =
                                            T.isPlatformEmbedded && L.ZP.supportsFeature(D.eRX.WEBAUTHN)
                                                ? L.ZP.webAuthnAuthenticate
                                                : (t) => {
                                                      let e = (0, i.wz)(JSON.parse(t));
                                                      return (0, i.U2)(e).then((t) => JSON.stringify(t));
                                                  };
                                        b.Z.authenticatePasswordless({
                                            authenticateFunc: e,
                                            conditionalMediationAbortController: t,
                                        }).catch(() => {});
                                    })(this.state.conditionalMediationAbortController),
                                look: g.zx.Looks.LINK,
                                color: g.zx.Colors.LINK,
                                disabled: r,
                                children: F.intl.string(F.t["/kpMDg"]),
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
                (0, s.jsx)(f.x, {
                    title: F.intl.string(F.t.bPP34e),
                    subtitle: F.intl.string(F.t.rvx0T0),
                }),
                (0, s.jsx)(p.f, { children: this.renderDefaultForm() }),
                (0, s.jsx)(c.G, {
                    leading: (0, s.jsx)(m.Avr, {
                        variant: "secondary",
                        size: "md",
                        onClick: e,
                        text: F.intl.string(F.t["13/7kZ"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: F.intl.string(F.t["3PatS0"]),
                            onClick: this.handleLogin,
                            loading: t === D.u34.LOGGING_IN,
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
        return (0, s.jsx)(x.Cd, {
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
        let t = this.props.loginStatus === D.u34.ACCOUNT_DISABLED,
            e = t ? F.intl.string(F.t["j3rC+f"]) : F.intl.string(F.t.ZFWofn),
            r = t ? F.intl.string(F.t["6eNTWV"]) : F.intl.string(F.t.pCBti4);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(f.x, {
                    title: e,
                    subtitle: r,
                }),
                (0, s.jsx)(c.G, {
                    leading: (0, s.jsx)(m.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: F.intl.format(F.t.js2rr6, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: F.intl.string(F.t.JhDw5u),
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
            C.Z,
            G(
                {
                    resetToken: t,
                    onLoginSuccess: (t) => {
                        this.setState({ errors: {} }), b.Z.switchAccountToken(t);
                    },
                    width: "100%",
                },
                this.props,
            ),
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, s.jsx)(p.f, {
            children: (0, s.jsx)(P.Z, {
                title: F.intl.string(F.t["+xqy3d"]),
                subtitle: F.intl.format(F.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
            case D.u34.LOGGING_IN_MFA_SMS:
            case D.u34.MFA_SMS_STEP:
            case D.u34.LOGGING_IN_MFA:
            case D.u34.MFA_STEP:
                return this.renderMFA();
            case D.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case D.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case D.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case D.u34.LOGGING_IN:
            case D.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(t) {
        super(t),
            Z(this, "loginRef", void 0),
            Z(this, "passwordRef", void 0),
            Z(this, "codeRef", void 0),
            Z(this, "handleAuthToken", async (t) => {
                this.setState({ errors: {} }), await b.Z.loginToken(t, !1);
            }),
            Z(this, "handleTabOrEnter", (t) => {
                if ("Tab" === t.key && !t.shiftKey && t.target === this.loginRef) {
                    var e;
                    null == (e = this.passwordRef) || e.focus(), t.stopPropagation(), t.preventDefault();
                }
                "Enter" === t.key &&
                    (t.target === this.loginRef || t.target === this.passwordRef) &&
                    (this.handleLogin(), t.stopPropagation(), t.preventDefault());
            }),
            Z(this, "setLoginRef", (t) => {
                this.loginRef = t;
            }),
            Z(this, "setPasswordRef", (t) => {
                this.passwordRef = t;
            }),
            Z(this, "setCodeRef", (t) => {
                this.codeRef = t;
            }),
            Z(this, "getFullLogin", () => {
                let { loginPrefix: t, login: e } = this.state;
                return t + e;
            }),
            Z(this, "renderError", (t) => {
                let { errors: e } = this.state;
                if (this.hasError(t)) {
                    let r = e[t];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }),
            Z(this, "handleForgotPassword", async (t) => {
                var e;
                null == t || t.preventDefault(), null == (e = this.loginRef) || e.focus();
                let r = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((I.S.dispatch(D.CkL.WAVE_EMPHASIZE), !(await b.Z.forgotPassword(r)))) return;
                    (0, m.h7j)((t) =>
                        (0, s.jsx)(
                            m.ConfirmModal,
                            B(
                                G(
                                    {
                                        header: F.intl.string(F.t.f5Pi7O),
                                        confirmText: F.intl.string(F.t.BddRzc),
                                        confirmButtonColor: g.zx.Colors.BRAND,
                                    },
                                    t,
                                ),
                                {
                                    children: (0, s.jsx)(m.Text, {
                                        variant: "text-md/normal",
                                        children: F.intl.format(F.t["6u5hQ0"], { email: r }),
                                    }),
                                },
                            ),
                        ),
                    );
                } catch (e) {
                    let t = (0, w.p)(e);
                    this.setState({ errors: t });
                }
            }),
            Z(this, "handleLogin", async (t) => {
                let { password: e, undelete: r } = this.state;
                null == t || t.preventDefault(), this.setState({ errors: {} });
                try {
                    await b.Z.login({
                        login: this.getFullLogin(),
                        password: e,
                        undelete: r,
                        isMultiAccount: !0,
                    });
                } catch (e) {
                    let t = (0, w.p)(e);
                    this.setState({ errors: t });
                }
            }),
            Z(this, "handlePasswordReset", async (t) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {},
                });
                try {
                    let { token: e } = await O.Z.verifyPhone(this.getFullLogin(), t, !1, !0);
                    this.setState({ resetPasswordPhoneToken: e });
                } catch (t) {
                    null != t.body && null != t.body.message && this.setState({ phoneVerifyError: t.body.message });
                }
            }),
            Z(this, "handleTokenSubmitMFA", (t) => {
                let { mfaType: e, data: r, ticket: n } = t;
                return b.Z.loginMFAv2({
                    code: r,
                    ticket: n,
                    mfaType: e,
                    isMultiAccount: !0,
                });
            }),
            Z(this, "handleResendCode", () => {
                O.Z.resendCode(this.getFullLogin());
            }),
            Z(this, "handleReset", (t) => {
                null == t || t.preventDefault(),
                    b.Z.loginReset(!0),
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
            Z(this, "handleCancelAccountDeletion", () => {
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
Z(z, "defaultProps", {
    transitionTo: (t) => r.g.location.assign(t),
    replaceWith: (t) => r.g.location.replace(t),
});
let W = function (t) {
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
    let a = (0, d.cj)([v.Z, E.default, A.Z, k.Z], () => ({
        authenticated: E.default.isAuthenticated(),
        isPasswordlessActive: E.default.getIsPasswordlessActive(),
        loginStatus: E.default.getLoginStatus(),
        mfaTicket: E.default.getMFATicket(),
        mfaMethods: E.default.getMFAMethods(),
        defaultRoute: v.Z.defaultRoute,
        country: A.Z.getCountryCode(),
        theme: k.Z.theme,
    }));
    (0, _.Z)({
        type: u.ImpressionTypes.MODAL,
        name: u.ImpressionNames.USER_LOGIN,
    });
    let l = o.useCallback(() => {
        e(), n();
    }, [e, n]);
    return (0, s.jsx)(h.I, {
        size: "md",
        onClose: e,
        transitionState: r,
        children: (0, s.jsx)(
            z,
            B(G({}, i, a), {
                transitionTo: S.uL,
                replaceWith: S.dL,
                onBackPressed: l,
                authBoxClassName: N.card,
            }),
        ),
    });
};
