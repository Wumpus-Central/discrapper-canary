s(757143);
var n,
    o = s(200651),
    r = s(192379),
    i = s(120356),
    a = s.n(i),
    l = s(442837),
    d = s(481060),
    c = s(893776),
    u = s(479495),
    h = s(388905),
    f = s(379760),
    p = s(540059),
    m = s(124860),
    g = s(144114),
    x = s(541692),
    _ = s(952802),
    C = s(210887),
    b = s(314897),
    A = s(896797),
    N = s(585483),
    T = s(981631),
    R = s(388032),
    I = s(83281),
    v = s(232186);
function S(e, t, s) {
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
class E extends (n = r.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e) {
        let { authenticated: t, transitionTo: s } = this.props;
        if ((t && !e.authenticated && s(T.Z5c.APP), e.errors !== this.props.errors)) {
            var n, o, r;
            this.hasError('password') ? null === (n = this.passwordRef) || void 0 === n || n.focus() : this.hasError('email') || this.hasError('login') ? null === (o = this.loginRef) || void 0 === o || o.focus() : this.hasError('code') && (null === (r = this.codeRef) || void 0 === r || r.focus());
        }
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleTabOrEnter);
    }
    hasError(e) {
        return null != this.props.errors[e];
    }
    renderDefaultForm() {
        var e;
        let { country: t } = this.props,
            s = !this.hasError('email') && this.hasError('password'),
            n = (0, o.jsxs)(r.Fragment, {
                children: [
                    (0, o.jsx)(
                        h.Dx,
                        {
                            className: a()(v.marginBottom8, I.title),
                            children: R.intl.string(R.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, o.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: I.subtitle,
                        children: R.intl.string(R.t.rvx0T0)
                    })
                ]
            });
        return (0, o.jsxs)('div', {
            className: I.mainLoginContainer,
            children: [
                n,
                (0, o.jsxs)(h.gO, {
                    className: I.loginForm,
                    children: [
                        (0, o.jsx)(_.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: v.marginBottom20,
                            label: R.intl.string(R.t.tUjnxs),
                            error: null !== (e = this.renderError('login')) && void 0 !== e ? e : this.renderError('email'),
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
                        (0, o.jsx)(h.II, {
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
                        (0, o.jsx)(h.zx, {
                            onClick: this.handleForgotPassword,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.LINK,
                            className: a()(v.marginTop4),
                            children: R.intl.string(R.t.wWIufn)
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let { authBoxClassName: e, loginStatus: t, closeLogin: s, theme: n } = this.props;
        return (0, o.jsxs)('div', {
            className: I.__invalid_pageContainer,
            children: [
                (0, o.jsx)(h.ZP, {
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    theme: n,
                    children: this.renderDefaultForm()
                }),
                (0, o.jsx)(d.ThemeProvider, {
                    theme: n,
                    children: (e) =>
                        (0, o.jsx)('div', {
                            'data-theme': n,
                            'data-disable-adaptive-theme': !0,
                            className: a()(e, I.navRow),
                            children: (0, o.jsx)(M, {
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
        return (0, o.jsx)(h.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, o.jsx)(m.Cd, {
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
            s = this.props.loginStatus === T.u34.ACCOUNT_DISABLED,
            n = s ? R.intl.string(R.t['j3rC+f']) : R.intl.string(R.t.ZFWofn),
            r = s ? R.intl.string(R.t['6eNTWV']) : R.intl.string(R.t.pCBti4);
        return (0, o.jsxs)(h.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, o.jsx)(h.Dx, {
                    className: v.marginBottom8,
                    children: n
                }),
                (0, o.jsx)(h.DK, {
                    className: v.marginBottom20,
                    children: r
                }),
                (0, o.jsxs)(h.gO, {
                    children: [
                        (0, o.jsx)(d.Button, {
                            color: d.Button.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: R.intl.string(R.t.JhDw5u)
                        }),
                        (0, o.jsx)('div', {
                            className: a()(v.marginTop8, I.needAccount),
                            children: R.intl.format(R.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, o.jsx)(u.Z, {
            resetToken: e,
            onLoginSuccess: (e) => {
                c.Z.switchAccountToken(e);
            },
            ...this.props
        });
    }
    renderPhonePasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, o.jsx)(h.ZP, {
            tag: 'form',
            className: e,
            children: (0, o.jsx)('div', {
                className: v.marginTop20,
                children: (0, o.jsx)(f.Z, {
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
    constructor(e) {
        super(e),
            S(this, 'loginRef', void 0),
            S(this, 'passwordRef', void 0),
            S(this, 'codeRef', void 0),
            S(this, 'handleAuthToken', async (e) => {
                await c.Z.loginToken(e, !1);
            }),
            S(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault();
                }
                'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            S(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            S(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            S(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            S(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            S(this, 'renderError', (e) => {
                let { errors: t } = this.props;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            }),
            S(this, 'handleForgotPassword', async (e) => {
                var t;
                null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
                let s = this.getFullLogin();
                try {
                    N.S.dispatch(T.CkL.WAVE_EMPHASIZE),
                        await c.Z.forgotPassword(s),
                        (0, d.openModal)((e) =>
                            (0, o.jsx)(d.ConfirmModal, {
                                header: R.intl.string(R.t.f5Pi7O),
                                confirmText: R.intl.string(R.t.BddRzc),
                                confirmButtonColor: d.Button.Colors.BRAND,
                                ...e,
                                children: (0, o.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    children: R.intl.format(R.t['6u5hQ0'], { email: s })
                                })
                            })
                        );
                } catch {}
            }),
            S(this, 'handleLogin', (e) => {
                let { password: t, undelete: s } = this.state;
                null != e && e.preventDefault(),
                    c.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: s,
                        isMultiAccount: !0
                    });
            }),
            S(this, 'handlePasswordReset', async (e) => {
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: t } = await g.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
                    this.setState({ resetPasswordPhoneToken: t });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            S(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: n } = e;
                return c.Z.loginMFAv2({
                    code: s,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            S(this, 'handleResendCode', () => {
                g.Z.resendCode(this.getFullLogin());
            }),
            S(this, 'handleReset', (e) => {
                null != e && e.preventDefault(),
                    c.Z.loginReset(!0),
                    this.setState({
                        password: '',
                        loginPrefix: '',
                        login: '',
                        code: '',
                        smsCode: '',
                        undelete: !1,
                        resetPasswordPhoneToken: null
                    });
            }),
            S(this, 'handleCancelAccountDeletion', () => {
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
                undelete: !1
            });
    }
}
function M(e) {
    let { loginStatus: t, closeLogin: s, themeClass: n, handleLogin: r } = e,
        i = (0, p.Q3)('MultiAccountLogin:ActionButtons');
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(d.Button, {
                type: 'button',
                look: d.Button.Looks.LINK,
                'aria-label': 'back',
                onClick: s,
                size: d.Button.Sizes.SMALL,
                color: i ? d.Button.Colors.WHITE : void 0,
                className: a()(n, I.backButton),
                children: R.intl.string(R.t['13/7kZ'])
            }),
            (0, o.jsx)(d.Button, {
                'aria-label': 'continue',
                submitting: t === T.u34.LOGGING_IN,
                color: d.Button.Colors.BRAND,
                onClick: r,
                className: I.continueButton,
                children: R.intl.string(R.t['3PatS0'])
            })
        ]
    });
}
S(E, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
t.Z = function (e) {
    let t = (0, l.cj)([A.Z, b.default, x.Z, C.Z], () => ({
        authenticated: b.default.isAuthenticated(),
        loginStatus: b.default.getLoginStatus(),
        mfaTicket: b.default.getMFATicket(),
        mfaSMS: b.default.getMFASMS(),
        maskedPhone: b.default.getMaskedPhone(),
        mfaMethods: b.default.getMFAMethods(),
        errors: b.default.getErrors(),
        defaultRoute: A.Z.defaultRoute,
        country: x.Z.getCountryCode(),
        theme: C.Z.theme
    }));
    return (0, o.jsx)(E, {
        ...e,
        ...t
    });
};
