s.d(t, { Z: () => I }), s(35282), s(704826);
var n,
    r = s(255367),
    o = s(73800),
    i = s(120356),
    a = s.n(i),
    l = s(442837),
    c = s(481060),
    d = s(893776),
    u = s(479495),
    h = s(254942),
    p = s(388905),
    f = s(379760),
    m = s(124860),
    g = s(144114),
    _ = s(541692),
    x = s(952802),
    b = s(210887),
    C = s(314897),
    j = s(896797),
    w = s(585483),
    k = s(981631),
    R = s(388032),
    P = s(472645),
    y = s(20493);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                N(e, t, s[t]);
            });
    }
    return e;
}
class v extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: n } = this.props;
        if ((s && !e.authenticated && n(k.Z5c.APP), t.errors !== this.state.errors)) {
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
                        p.Dx,
                        {
                            className: a()(y.marginBottom8, P.title),
                            children: R.intl.string(R.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: P.subtitle,
                        children: R.intl.string(R.t.rvx0T0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: P.mainLoginContainer,
            children: [
                n,
                (0, r.jsxs)(p.gO, {
                    className: P.loginForm,
                    children: [
                        (0, r.jsx)(x.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: y.marginBottom20,
                            label: R.intl.string(R.t.tUjnxs),
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
                        (0, r.jsx)(p.II, {
                            label: R.intl.string(R.t['CIGa+/']),
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
                        (0, r.jsx)(p.zx, {
                            onClick: this.handleForgotPassword,
                            look: c.zxk.Looks.LINK,
                            color: c.zxk.Colors.LINK,
                            className: y.marginTop4,
                            children: R.intl.string(R.t.wWIufn)
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let { authBoxClassName: e, loginStatus: t, closeLogin: s, theme: n } = this.props;
        return (0, r.jsxs)('div', {
            className: P.__invalid_pageContainer,
            children: [
                (0, r.jsx)(p.ZP, {
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    theme: n,
                    children: this.renderDefaultForm()
                }),
                (0, r.jsx)(c.f6W, {
                    theme: n,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            'data-theme': n,
                            'data-disable-adaptive-theme': !0,
                            className: a()(e, P.navRow),
                            children: (0, r.jsx)(S, {
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
        return (0, r.jsx)(p.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, r.jsx)(m.Cd, {
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
            s = this.props.loginStatus === k.u34.ACCOUNT_DISABLED,
            n = s ? R.intl.string(R.t['j3rC+f']) : R.intl.string(R.t.ZFWofn),
            o = s ? R.intl.string(R.t['6eNTWV']) : R.intl.string(R.t.pCBti4);
        return (0, r.jsxs)(p.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, r.jsx)(p.Dx, {
                    className: y.marginBottom8,
                    children: n
                }),
                (0, r.jsx)(p.DK, {
                    className: y.marginBottom20,
                    children: o
                }),
                (0, r.jsxs)(p.gO, {
                    children: [
                        (0, r.jsx)(c.zxk, {
                            color: c.zxk.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: R.intl.string(R.t.JhDw5u)
                        }),
                        (0, r.jsx)('div', {
                            className: a()(y.marginTop8, P.needAccount),
                            children: R.intl.format(R.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
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
            A(
                {
                    resetToken: e,
                    onLoginSuccess: (e) => {
                        this.setState({ errors: {} }), d.Z.switchAccountToken(e);
                    }
                },
                this.props
            )
        );
    }
    renderPhonePasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(p.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)('div', {
                className: y.marginTop20,
                children: (0, r.jsx)(f.Z, {
                    title: R.intl.string(R.t['+xqy3d']),
                    subtitle: R.intl.format(R.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
    constructor(e) {
        super(e),
            N(this, 'loginRef', void 0),
            N(this, 'passwordRef', void 0),
            N(this, 'codeRef', void 0),
            N(this, 'handleAuthToken', async (e) => {
                this.setState({ errors: {} }), await d.Z.loginToken(e, !1);
            }),
            N(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault();
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
                null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus();
                let s = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((w.S.dispatch(k.CkL.WAVE_EMPHASIZE), !(await d.Z.forgotPassword(s)))) return;
                    (0, c.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            c.ConfirmModal,
                            ((t = A(
                                {
                                    header: R.intl.string(R.t.f5Pi7O),
                                    confirmText: R.intl.string(R.t.BddRzc),
                                    confirmButtonColor: c.zxk.Colors.BRAND
                                },
                                e
                            )),
                            (n = {
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    children: R.intl.format(R.t['6u5hQ0'], { email: s })
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
                    let e = (0, h.p)(t);
                    this.setState({ errors: e });
                }
            }),
            N(this, 'handleLogin', async (e) => {
                let { password: t, undelete: s } = this.state;
                null == e || e.preventDefault(), this.setState({ errors: {} });
                try {
                    await d.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: s,
                        isMultiAccount: !0
                    });
                } catch (t) {
                    let e = (0, h.p)(t);
                    this.setState({ errors: e });
                }
            }),
            N(this, 'handlePasswordReset', async (e) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {}
                });
                try {
                    let { token: t } = await g.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
                    this.setState({ resetPasswordPhoneToken: t });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            N(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: n } = e;
                return d.Z.loginMFAv2({
                    code: s,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            N(this, 'handleResendCode', () => {
                g.Z.resendCode(this.getFullLogin());
            }),
            N(this, 'handleReset', (e) => {
                null == e || e.preventDefault(),
                    d.Z.loginReset(!0),
                    this.setState({
                        password: '',
                        loginPrefix: '',
                        login: '',
                        code: '',
                        smsCode: '',
                        undelete: !1,
                        resetPasswordPhoneToken: null,
                        errors: {}
                    });
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
            });
    }
}
function S(e) {
    let { loginStatus: t, closeLogin: s, themeClass: n, handleLogin: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.zxk, {
                type: 'button',
                look: c.zxk.Looks.LINK,
                color: c.zxk.Colors.PRIMARY,
                onClick: s,
                size: c.zxk.Sizes.SMALL,
                className: a()(n, P.backButton),
                children: R.intl.string(R.t['13/7kZ'])
            }),
            (0, r.jsx)(c.zxk, {
                submitting: t === k.u34.LOGGING_IN,
                color: c.zxk.Colors.BRAND,
                onClick: o,
                className: P.continueButton,
                children: R.intl.string(R.t['3PatS0'])
            })
        ]
    });
}
N(v, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
let I = function (e) {
    let t = (0, l.cj)([j.Z, C.default, _.Z, b.Z], () => ({
        authenticated: C.default.isAuthenticated(),
        loginStatus: C.default.getLoginStatus(),
        mfaTicket: C.default.getMFATicket(),
        mfaMethods: C.default.getMFAMethods(),
        defaultRoute: j.Z.defaultRoute,
        country: _.Z.getCountryCode(),
        theme: b.Z.theme
    }));
    return (0, r.jsx)(v, A({}, e, t));
};
