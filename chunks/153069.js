(s.d(t, { Z: () => O }), s(35282), s(704826));
var n,
    r = s(255367),
    i = s(73800),
    o = s(120356),
    a = s.n(o),
    l = s(442837),
    c = s(755721),
    d = s(481060),
    h = s(893776),
    u = s(479495),
    p = s(254942),
    m = s(388905),
    f = s(379760),
    g = s(124860),
    _ = s(144114),
    x = s(541692),
    b = s(952802),
    C = s(210887),
    j = s(314897),
    w = s(896797),
    y = s(585483),
    v = s(981631),
    P = s(388032),
    R = s(472645),
    A = s(20493);
function T(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                T(e, t, s[t]);
            }));
    }
    return e;
}
class S extends (n = i.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: n } = this.props;
        if ((s && !e.authenticated && n(v.Z5c.APP), t.errors !== this.state.errors)) {
            var r, i, o;
            this.hasError('password') ? null == (r = this.passwordRef) || r.focus() : this.hasError('email') || this.hasError('login') ? null == (i = this.loginRef) || i.focus() : this.hasError('code') && (null == (o = this.codeRef) || o.focus());
        }
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleTabOrEnter);
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderDefaultForm() {
        var e;
        let { country: t } = this.props,
            s = !this.hasError('email') && this.hasError('password'),
            n = (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(
                        m.Dx,
                        {
                            className: a()(A.marginBottom8, R.title),
                            children: P.intl.string(P.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, r.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: R.subtitle,
                        children: P.intl.string(P.t.rvx0T0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: R.mainLoginContainer,
            children: [
                n,
                (0, r.jsxs)(m.gO, {
                    className: R.loginForm,
                    children: [
                        (0, r.jsx)(b.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: A.marginBottom20,
                            label: P.intl.string(P.t.tUjnxs),
                            error: null != (e = this.renderError('login')) ? e : this.renderError('email'),
                            onChange: (e, t) =>
                                this.setState({
                                    login: e,
                                    loginPrefix: t
                                }),
                            setRef: this.setLoginRef,
                            autoCapitalize: 'none',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            spellCheck: 'false',
                            value: this.state.login,
                            autoFocus: !s,
                            required: !0
                        }),
                        (0, r.jsx)(m.II, {
                            label: P.intl.string(P.t['CIGa+/']),
                            error: this.renderError('password'),
                            onChange: (e) => this.setState({ password: e }),
                            name: 'password',
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            autoFocus: s,
                            value: this.state.password,
                            required: !0
                        }),
                        (0, r.jsx)(m.zx, {
                            onClick: this.handleForgotPassword,
                            look: c.zx.Looks.LINK,
                            color: c.zx.Colors.LINK,
                            className: A.marginTop4,
                            children: P.intl.string(P.t.wWIufn)
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let { authBoxClassName: e, loginStatus: t, closeLogin: s, theme: n } = this.props;
        return (0, r.jsxs)('div', {
            className: R.__invalid_pageContainer,
            children: [
                (0, r.jsx)(m.ZP, {
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    theme: n,
                    children: this.renderDefaultForm()
                }),
                (0, r.jsx)(d.f6W, {
                    theme: n,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            'data-theme': n,
                            className: a()(e, R.navRow),
                            children: (0, r.jsx)(E, {
                                loginStatus: t,
                                closeLogin: s,
                                handleLogin: this.handleLogin
                            })
                        })
                })
            ]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, r.jsx)(m.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, r.jsx)(g.Cd, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    this.handleReset();
                },
                width: 480
            })
        });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e, theme: t } = this.props,
            s = this.props.loginStatus === v.u34.ACCOUNT_DISABLED,
            n = s ? P.intl.string(P.t['j3rC+f']) : P.intl.string(P.t.ZFWofn),
            i = s ? P.intl.string(P.t['6eNTWV']) : P.intl.string(P.t.pCBti4);
        return (0, r.jsxs)(m.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, r.jsx)(m.Dx, {
                    className: A.marginBottom8,
                    children: n
                }),
                (0, r.jsx)(m.DK, {
                    className: A.marginBottom20,
                    children: i
                }),
                (0, r.jsxs)(m.gO, {
                    children: [
                        (0, r.jsx)(d.zxk, {
                            variant: 'primary',
                            text: P.intl.string(P.t.JhDw5u),
                            type: 'submit',
                            fullWidth: !0
                        }),
                        (0, r.jsx)('div', {
                            className: a()(A.marginTop8, R.needAccount),
                            children: P.intl.format(P.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, r.jsx)(
            u.Z,
            N(
                {
                    resetToken: e,
                    onLoginSuccess: (e) => {
                        (this.setState({ errors: {} }), h.Z.switchAccountToken(e));
                    }
                },
                this.props
            )
        );
    }
    renderPhonePasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(m.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)('div', {
                className: A.marginTop20,
                children: (0, r.jsx)(f.Z, {
                    title: P.intl.string(P.t['+xqy3d']),
                    subtitle: P.intl.format(P.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                    error: t,
                    onSubmit: this.handlePasswordReset,
                    onCancel: void 0
                })
            })
        });
    }
    render() {
        let { loginStatus: e } = this.props;
        if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
        switch (e) {
            case v.u34.LOGGING_IN_MFA_SMS:
            case v.u34.MFA_SMS_STEP:
            case v.u34.LOGGING_IN_MFA:
            case v.u34.MFA_STEP:
                return this.renderMFA();
            case v.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case v.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case v.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case v.u34.LOGGING_IN:
            case v.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(e) {
        (super(e),
            T(this, 'loginRef', void 0),
            T(this, 'passwordRef', void 0),
            T(this, 'codeRef', void 0),
            T(this, 'handleAuthToken', async (e) => {
                (this.setState({ errors: {} }), await h.Z.loginToken(e, !1));
            }),
            T(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    (null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault());
                }
                'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            T(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            T(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            T(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            T(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            T(this, 'renderError', (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            }),
            T(this, 'handleForgotPassword', async (e) => {
                var t;
                (null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus());
                let s = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((y.S.dispatch(v.CkL.WAVE_EMPHASIZE), !(await h.Z.forgotPassword(s)))) return;
                    (0, d.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            d.ConfirmModal,
                            ((t = N(
                                {
                                    header: P.intl.string(P.t.f5Pi7O),
                                    confirmText: P.intl.string(P.t.BddRzc),
                                    confirmButtonColor: c.zx.Colors.BRAND
                                },
                                e
                            )),
                            (n = {
                                children: (0, r.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    children: P.intl.format(P.t['6u5hQ0'], { email: s })
                                })
                            }),
                            (n = null != n ? n : {}),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var s = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          s.push.apply(s, n);
                                      }
                                      return s;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    });
                } catch (t) {
                    let e = (0, p.p)(t);
                    this.setState({ errors: e });
                }
            }),
            T(this, 'handleLogin', async (e) => {
                let { password: t, undelete: s } = this.state;
                (null == e || e.preventDefault(), this.setState({ errors: {} }));
                try {
                    await h.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: s,
                        isMultiAccount: !0
                    });
                } catch (t) {
                    let e = (0, p.p)(t);
                    this.setState({ errors: e });
                }
            }),
            T(this, 'handlePasswordReset', async (e) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {}
                });
                try {
                    let { token: t } = await _.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
                    this.setState({ resetPasswordPhoneToken: t });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            T(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: n } = e;
                return h.Z.loginMFAv2({
                    code: s,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            T(this, 'handleResendCode', () => {
                _.Z.resendCode(this.getFullLogin());
            }),
            T(this, 'handleReset', (e) => {
                (null == e || e.preventDefault(),
                    h.Z.loginReset(!0),
                    this.setState({
                        password: '',
                        loginPrefix: '',
                        login: '',
                        code: '',
                        smsCode: '',
                        undelete: !1,
                        resetPasswordPhoneToken: null,
                        errors: {}
                    }));
            }),
            T(this, 'handleCancelAccountDeletion', () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            (this.state = {
                loginPrefix: '',
                login: '',
                password: '',
                code: '',
                smsCode: '',
                phoneVerifyError: null,
                resetPasswordPhoneToken: null,
                undelete: !1,
                errors: {}
            }));
    }
}
function E(e) {
    let { loginStatus: t, closeLogin: s, handleLogin: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Avr, {
                variant: 'secondary',
                size: 'md',
                onClick: s,
                text: P.intl.string(P.t['13/7kZ'])
            }),
            (0, r.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: R.continueButton,
                children: (0, r.jsx)(d.zxk, {
                    variant: 'primary',
                    text: P.intl.string(P.t['3PatS0']),
                    loading: t === v.u34.LOGGING_IN,
                    onClick: n
                })
            })
        ]
    });
}
T(S, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
let O = function (e) {
    let t = (0, l.cj)([w.Z, j.default, x.Z, C.Z], () => ({
        authenticated: j.default.isAuthenticated(),
        loginStatus: j.default.getLoginStatus(),
        mfaTicket: j.default.getMFATicket(),
        mfaMethods: j.default.getMFAMethods(),
        defaultRoute: w.Z.defaultRoute,
        country: x.Z.getCountryCode(),
        theme: C.Z.theme
    }));
    return (0, r.jsx)(S, N({}, e, t));
};
