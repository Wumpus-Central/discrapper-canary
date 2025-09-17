r.d(e, { default: () => W }), r(49124), r(35282), r(704826);
var n,
    o = r(951288),
    s = r(647438),
    i = r(533126),
    a = r(120356),
    l = r.n(a),
    u = r(990547),
    d = r(442837),
    c = r(257465),
    h = r(369585),
    p = r(103866),
    f = r(37148),
    g = r(755721),
    m = r(481060),
    _ = r(893776),
    b = r(479495),
    C = r(213609),
    y = r(254942),
    w = r(388905),
    P = r(379760),
    x = r(124860),
    O = r(144114),
    A = r(541692),
    S = r(952802),
    j = r(703656),
    k = r(210887),
    R = r(901375),
    E = r(314897),
    v = r(896797),
    I = r(585483),
    T = r(358085),
    L = r(998502),
    F = r(981631),
    N = r(388032),
    D = r(407791),
    M = r(197571);
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
class z extends (n = s.PureComponent) {
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
            (r && !t.authenticated && (n(F.Z5c.APP), this.state.conditionalMediationAbortController.abort()),
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
            className: D.mainLoginContainer,
            children: (0, o.jsxs)(w.gO, {
                children: [
                    (0, o.jsx)(S.Z, {
                        alpha2: e.alpha2,
                        countryCode: e.code.split(" ")[0],
                        className: M.marginBottom20,
                        label: N.intl.string(N.t.tUjnxs),
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
                    (0, o.jsx)(w.II, {
                        label: N.intl.string(N.t["CIGa+/"]),
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
                        className: l()(M.marginTop4, D.buttonsContainer),
                        children: [
                            (0, o.jsx)(w.zx, {
                                onClick: this.handleForgotPassword,
                                look: g.zx.Looks.LINK,
                                color: g.zx.Colors.LINK,
                                children: N.intl.string(N.t.wWIufn),
                            }),
                            (0, o.jsx)(w.zx, {
                                onClick: () =>
                                    (function (t) {
                                        let e =
                                            T.isPlatformEmbedded && L.ZP.supportsFeature(F.eRX.WEBAUTHN)
                                                ? L.ZP.webAuthnAuthenticate
                                                : (t) => {
                                                      let e = (0, i.wz)(JSON.parse(t));
                                                      return (0, i.U2)(e).then((t) => JSON.stringify(t));
                                                  };
                                        _.Z.authenticatePasswordless({
                                            authenticateFunc: e,
                                            conditionalMediationAbortController: t,
                                        }).catch(() => {});
                                    })(this.state.conditionalMediationAbortController),
                                look: g.zx.Looks.LINK,
                                color: g.zx.Colors.LINK,
                                disabled: r,
                                children: N.intl.string(N.t["/kpMDg"]),
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
                (0, o.jsx)(f.x, {
                    title: N.intl.string(N.t.bPP34e),
                    subtitle: N.intl.string(N.t.rvx0T0),
                }),
                (0, o.jsx)(p.f, { children: this.renderDefaultForm() }),
                (0, o.jsx)(h.G, {
                    leading: (0, o.jsx)(m.Avr, {
                        variant: "secondary",
                        size: "md",
                        onClick: e,
                        text: N.intl.string(N.t["13/7kZ"]),
                        type: "button",
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: N.intl.string(N.t["3PatS0"]),
                            onClick: this.handleLogin,
                            loading: t === F.u34.LOGGING_IN,
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
        return (0, o.jsx)(x.Cd, {
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
        let t = this.props.loginStatus === F.u34.ACCOUNT_DISABLED,
            e = t ? N.intl.string(N.t["j3rC+f"]) : N.intl.string(N.t.ZFWofn),
            r = t ? N.intl.string(N.t["6eNTWV"]) : N.intl.string(N.t.pCBti4);
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(f.x, {
                    title: e,
                    subtitle: r,
                }),
                (0, o.jsx)(h.G, {
                    leading: (0, o.jsx)(m.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: N.intl.format(N.t.js2rr6, { onClick: this.handleCancelAccountDeletion }),
                    }),
                    actions: [
                        {
                            variant: "primary",
                            text: N.intl.string(N.t.JhDw5u),
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
            b.Z,
            G(
                {
                    resetToken: t,
                    onLoginSuccess: (t) => {
                        this.setState({ errors: {} }), _.Z.switchAccountToken(t);
                    },
                    width: "100%",
                },
                this.props,
            ),
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: t } = this.state;
        return (0, o.jsx)(p.f, {
            children: (0, o.jsx)(P.Z, {
                title: N.intl.string(N.t["+xqy3d"]),
                subtitle: N.intl.format(N.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
            case F.u34.LOGGING_IN_MFA_SMS:
            case F.u34.MFA_SMS_STEP:
            case F.u34.LOGGING_IN_MFA:
            case F.u34.MFA_STEP:
                return this.renderMFA();
            case F.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case F.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case F.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case F.u34.LOGGING_IN:
            case F.u34.NONE:
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
                this.setState({ errors: {} }), await _.Z.loginToken(t, !1);
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
                    if ((I.S.dispatch(F.CkL.WAVE_EMPHASIZE), !(await _.Z.forgotPassword(r)))) return;
                    (0, m.h7j)((t) =>
                        (0, o.jsx)(
                            m.ConfirmModal,
                            B(
                                G(
                                    {
                                        header: N.intl.string(N.t.f5Pi7O),
                                        confirmText: N.intl.string(N.t.BddRzc),
                                        confirmButtonColor: g.zx.Colors.BRAND,
                                    },
                                    t,
                                ),
                                {
                                    children: (0, o.jsx)(m.Text, {
                                        variant: "text-md/normal",
                                        children: N.intl.format(N.t["6u5hQ0"], { email: r }),
                                    }),
                                },
                            ),
                        ),
                    );
                } catch (e) {
                    let t = (0, y.p)(e);
                    this.setState({ errors: t });
                }
            }),
            Z(this, "handleLogin", async (t) => {
                let { password: e, undelete: r } = this.state;
                null == t || t.preventDefault(), this.setState({ errors: {} });
                try {
                    await _.Z.login({
                        login: this.getFullLogin(),
                        password: e,
                        undelete: r,
                        isMultiAccount: !0,
                    });
                } catch (e) {
                    let t = (0, y.p)(e);
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
                return _.Z.loginMFAv2({
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
                    _.Z.loginReset(!0),
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
    (0, C.Z)({
        type: u.ImpressionTypes.MODAL,
        name: u.ImpressionNames.USER_LOGIN,
    });
    let l = s.useCallback(() => {
        e(), n();
    }, [e, n]);
    return (0, o.jsx)(c.I, {
        size: "md",
        onClose: e,
        transitionState: r,
        children: (0, o.jsx)(
            z,
            B(G({}, i, a), {
                transitionTo: j.uL,
                replaceWith: j.dL,
                onBackPressed: l,
                authBoxClassName: D.card,
            }),
        ),
    });
};
