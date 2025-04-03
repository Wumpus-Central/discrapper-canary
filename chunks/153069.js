s.d(t, { Z: () => I }), s(301563), s(757143);
var r,
    n = s(200651),
    o = s(192379),
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
    N = s(314897),
    C = s(896797),
    j = s(585483),
    w = s(981631),
    k = s(388032),
    R = s(472645),
    P = s(20493);
function y(e, t, s) {
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
            r = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, s[t]);
            });
    }
    return e;
}
class v extends (r = o.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: r } = this.props;
        if ((s && !e.authenticated && r(w.Z5c.APP), t.errors !== this.state.errors)) {
            var n, o, i;
            this.hasError('password') ? null == (n = this.passwordRef) || n.focus() : this.hasError('email') || this.hasError('login') ? null == (o = this.loginRef) || o.focus() : this.hasError('code') && (null == (i = this.codeRef) || i.focus());
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
            r = (0, n.jsxs)(o.Fragment, {
                children: [
                    (0, n.jsx)(
                        p.Dx,
                        {
                            className: a()(P.marginBottom8, R.title),
                            children: k.NW.string(k.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, n.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: R.subtitle,
                        children: k.NW.string(k.t.rvx0T0)
                    })
                ]
            });
        return (0, n.jsxs)('div', {
            className: R.mainLoginContainer,
            children: [
                r,
                (0, n.jsxs)(p.gO, {
                    className: R.loginForm,
                    children: [
                        (0, n.jsx)(x.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: P.marginBottom20,
                            label: k.NW.string(k.t.tUjnxs),
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
                        (0, n.jsx)(p.II, {
                            label: k.NW.string(k.t['CIGa+/']),
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
                        (0, n.jsx)(p.zx, {
                            onClick: this.handleForgotPassword,
                            look: c.zxk.Looks.LINK,
                            color: c.zxk.Colors.LINK,
                            className: P.marginTop4,
                            children: k.NW.string(k.t.wWIufn)
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let { authBoxClassName: e, loginStatus: t, closeLogin: s, theme: r } = this.props;
        return (0, n.jsxs)('div', {
            className: R.__invalid_pageContainer,
            children: [
                (0, n.jsx)(p.ZP, {
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    theme: r,
                    children: this.renderDefaultForm()
                }),
                (0, n.jsx)(c.f6W, {
                    theme: r,
                    children: (e) =>
                        (0, n.jsx)('div', {
                            'data-theme': r,
                            'data-disable-adaptive-theme': !0,
                            className: a()(e, R.navRow),
                            children: (0, n.jsx)(S, {
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
        return (0, n.jsx)(p.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, n.jsx)(m.Cd, {
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
            s = this.props.loginStatus === w.u34.ACCOUNT_DISABLED,
            r = s ? k.NW.string(k.t['j3rC+f']) : k.NW.string(k.t.ZFWofn),
            o = s ? k.NW.string(k.t['6eNTWV']) : k.NW.string(k.t.pCBti4);
        return (0, n.jsxs)(p.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, n.jsx)(p.Dx, {
                    className: P.marginBottom8,
                    children: r
                }),
                (0, n.jsx)(p.DK, {
                    className: P.marginBottom20,
                    children: o
                }),
                (0, n.jsxs)(p.gO, {
                    children: [
                        (0, n.jsx)(c.zxk, {
                            color: c.zxk.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: k.NW.string(k.t.JhDw5u)
                        }),
                        (0, n.jsx)('div', {
                            className: a()(P.marginTop8, R.needAccount),
                            children: k.NW.format(k.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, n.jsx)(
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
        return (0, n.jsx)(p.ZP, {
            tag: 'form',
            className: e,
            children: (0, n.jsx)('div', {
                className: P.marginTop20,
                children: (0, n.jsx)(f.Z, {
                    title: k.NW.string(k.t['+xqy3d']),
                    subtitle: k.NW.format(k.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
            case w.u34.LOGGING_IN_MFA_SMS:
            case w.u34.MFA_SMS_STEP:
            case w.u34.LOGGING_IN_MFA:
            case w.u34.MFA_STEP:
                return this.renderMFA();
            case w.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case w.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case w.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case w.u34.LOGGING_IN:
            case w.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(e) {
        super(e),
            y(this, 'loginRef', void 0),
            y(this, 'passwordRef', void 0),
            y(this, 'codeRef', void 0),
            y(this, 'handleAuthToken', async (e) => {
                this.setState({ errors: {} }), await d.Z.loginToken(e, !1);
            }),
            y(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null == (t = this.passwordRef) || t.focus(), e.stopPropagation(), e.preventDefault();
                }
                'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            y(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            y(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            y(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            y(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            y(this, 'renderError', (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            }),
            y(this, 'handleForgotPassword', async (e) => {
                var t;
                null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus();
                let s = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((j.S.dispatch(w.CkL.WAVE_EMPHASIZE), !(await d.Z.forgotPassword(s)))) return;
                    (0, c.h7j)((e) => {
                        var t, r;
                        return (0, n.jsx)(
                            c.ConfirmModal,
                            ((t = A(
                                {
                                    header: k.NW.string(k.t.f5Pi7O),
                                    confirmText: k.NW.string(k.t.BddRzc),
                                    confirmButtonColor: c.zxk.Colors.BRAND
                                },
                                e
                            )),
                            (r = {
                                children: (0, n.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    children: k.NW.format(k.t['6u5hQ0'], { email: s })
                                })
                            }),
                            (r = null != r ? r : {}),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var s = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          s.push.apply(s, r);
                                      }
                                      return s;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            t)
                        );
                    });
                } catch (t) {
                    let e = (0, h.p)(t);
                    this.setState({ errors: e });
                }
            }),
            y(this, 'handleLogin', async (e) => {
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
            y(this, 'handlePasswordReset', async (e) => {
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
            y(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: r } = e;
                return d.Z.loginMFAv2({
                    code: s,
                    ticket: r,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            y(this, 'handleResendCode', () => {
                g.Z.resendCode(this.getFullLogin());
            }),
            y(this, 'handleReset', (e) => {
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
            y(this, 'handleCancelAccountDeletion', () => {
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
    let { loginStatus: t, closeLogin: s, themeClass: r, handleLogin: o } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.zxk, {
                type: 'button',
                look: c.zxk.Looks.LINK,
                color: c.zxk.Colors.PRIMARY,
                onClick: s,
                size: c.zxk.Sizes.SMALL,
                className: a()(r, R.backButton),
                children: k.NW.string(k.t['13/7kZ'])
            }),
            (0, n.jsx)(c.zxk, {
                submitting: t === w.u34.LOGGING_IN,
                color: c.zxk.Colors.BRAND,
                onClick: o,
                className: R.continueButton,
                children: k.NW.string(k.t['3PatS0'])
            })
        ]
    });
}
y(v, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
let I = function (e) {
    let t = (0, l.cj)([C.Z, N.default, _.Z, b.Z], () => ({
        authenticated: N.default.isAuthenticated(),
        loginStatus: N.default.getLoginStatus(),
        mfaTicket: N.default.getMFATicket(),
        mfaMethods: N.default.getMFAMethods(),
        defaultRoute: C.Z.defaultRoute,
        country: _.Z.getCountryCode(),
        theme: b.Z.theme
    }));
    return (0, n.jsx)(v, A({}, e, t));
};
