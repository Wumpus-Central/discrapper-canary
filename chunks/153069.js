(s.d(t, { Z: () => E }), s(35282), s(704826));
var n,
    r = s(255367),
    o = s(73800),
    i = s(120356),
    a = s.n(i),
    l = s(442837),
    c = s(755721),
    d = s(481060),
    u = s(893776),
    h = s(479495),
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
    P = s(981631),
    v = s(388032),
    R = s(472645),
    A = s(20493);
function N(e, t, s) {
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
function S(e) {
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
                N(e, t, s[t]);
            }));
    }
    return e;
}
class T extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: n } = this.props;
        if ((s && !e.authenticated && n(P.Z5c.APP), t.errors !== this.state.errors)) {
            var r, o, i;
            this.hasError('password') ? null == (r = this.passwordRef) || r.focus() : this.hasError('email') || this.hasError('login') ? null == (o = this.loginRef) || o.focus() : this.hasError('code') && (null == (i = this.codeRef) || i.focus());
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
            n = (0, r.jsxs)(o.Fragment, {
                children: [
                    (0, r.jsx)(
                        m.Dx,
                        {
                            className: a()(A.marginBottom8, R.title),
                            children: v.intl.string(v.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, r.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: R.subtitle,
                        children: v.intl.string(v.t.rvx0T0)
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
                            label: v.intl.string(v.t.tUjnxs),
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
                            label: v.intl.string(v.t['CIGa+/']),
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
                            children: v.intl.string(v.t.wWIufn)
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
                            children: (0, r.jsx)(I, {
                                loginStatus: t,
                                closeLogin: s,
                                themeClass: e,
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
            s = this.props.loginStatus === P.u34.ACCOUNT_DISABLED,
            n = s ? v.intl.string(v.t['j3rC+f']) : v.intl.string(v.t.ZFWofn),
            o = s ? v.intl.string(v.t['6eNTWV']) : v.intl.string(v.t.pCBti4);
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
                    children: o
                }),
                (0, r.jsxs)(m.gO, {
                    children: [
                        (0, r.jsx)(d.zxk, {
                            variant: 'primary',
                            text: v.intl.string(v.t.JhDw5u),
                            type: 'submit',
                            fullWidth: !0
                        }),
                        (0, r.jsx)('div', {
                            className: a()(A.marginTop8, R.needAccount),
                            children: v.intl.format(v.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, r.jsx)(
            h.Z,
            S(
                {
                    resetToken: e,
                    onLoginSuccess: (e) => {
                        (this.setState({ errors: {} }), u.Z.switchAccountToken(e));
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
                    title: v.intl.string(v.t['+xqy3d']),
                    subtitle: v.intl.format(v.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
            case P.u34.LOGGING_IN_MFA_SMS:
            case P.u34.MFA_SMS_STEP:
            case P.u34.LOGGING_IN_MFA:
            case P.u34.MFA_STEP:
                return this.renderMFA();
            case P.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case P.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case P.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case P.u34.LOGGING_IN:
            case P.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(e) {
        (super(e),
            N(this, 'loginRef', void 0),
            N(this, 'passwordRef', void 0),
            N(this, 'codeRef', void 0),
            N(this, 'handleAuthToken', async (e) => {
                (this.setState({ errors: {} }), await u.Z.loginToken(e, !1));
            }),
            N(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    (null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault());
                }
                'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            N(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            N(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            N(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            N(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            N(this, 'renderError', (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            }),
            N(this, 'handleForgotPassword', async (e) => {
                var t;
                (null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus());
                let s = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((y.S.dispatch(P.CkL.WAVE_EMPHASIZE), !(await u.Z.forgotPassword(s)))) return;
                    (0, d.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            d.ConfirmModal,
                            ((t = S(
                                {
                                    header: v.intl.string(v.t.f5Pi7O),
                                    confirmText: v.intl.string(v.t.BddRzc),
                                    confirmButtonColor: c.zx.Colors.BRAND
                                },
                                e
                            )),
                            (n = {
                                children: (0, r.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    children: v.intl.format(v.t['6u5hQ0'], { email: s })
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
            N(this, 'handleLogin', async (e) => {
                let { password: t, undelete: s } = this.state;
                (null == e || e.preventDefault(), this.setState({ errors: {} }));
                try {
                    await u.Z.login({
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
            N(this, 'handlePasswordReset', async (e) => {
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
            N(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: n } = e;
                return u.Z.loginMFAv2({
                    code: s,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            N(this, 'handleResendCode', () => {
                _.Z.resendCode(this.getFullLogin());
            }),
            N(this, 'handleReset', (e) => {
                (null == e || e.preventDefault(),
                    u.Z.loginReset(!0),
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
            N(this, 'handleCancelAccountDeletion', () => {
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
function I(e) {
    let { loginStatus: t, closeLogin: s, themeClass: n, handleLogin: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.zx, {
                type: 'button',
                look: c.zx.Looks.LINK,
                color: c.zx.Colors.PRIMARY,
                onClick: s,
                size: c.zx.Sizes.SMALL,
                className: a()(n, R.backButton),
                children: v.intl.string(v.t['13/7kZ'])
            }),
            (0, r.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: R.continueButton,
                children: (0, r.jsx)(d.zxk, {
                    variant: 'primary',
                    text: v.intl.string(v.t['3PatS0']),
                    loading: t === P.u34.LOGGING_IN,
                    onClick: o
                })
            })
        ]
    });
}
N(T, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
let E = function (e) {
    let t = (0, l.cj)([w.Z, j.default, x.Z, C.Z], () => ({
        authenticated: j.default.isAuthenticated(),
        loginStatus: j.default.getLoginStatus(),
        mfaTicket: j.default.getMFATicket(),
        mfaMethods: j.default.getMFAMethods(),
        defaultRoute: w.Z.defaultRoute,
        country: x.Z.getCountryCode(),
        theme: C.Z.theme
    }));
    return (0, r.jsx)(T, S({}, e, t));
};
