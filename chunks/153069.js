s(757143);
var n,
    r = s(200651),
    o = s(192379),
    i = s(120356),
    a = s.n(i),
    l = s(442837),
    d = s(481060),
    c = s(893776),
    u = s(479495),
    h = s(388905),
    f = s(379760),
    p = s(124860),
    m = s(144114),
    g = s(541692),
    x = s(952802),
    C = s(210887),
    _ = s(314897),
    b = s(896797),
    A = s(585483),
    N = s(981631),
    R = s(388032),
    T = s(83281),
    v = s(232186);
function w(e, t, s) {
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
class E extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e) {
        let { authenticated: t, transitionTo: s } = this.props;
        if ((t && !e.authenticated && s(N.Z5c.APP), e.errors !== this.props.errors)) {
            var n, r, o;
            this.hasError('password') ? null === (n = this.passwordRef) || void 0 === n || n.focus() : this.hasError('email') || this.hasError('login') ? null === (r = this.loginRef) || void 0 === r || r.focus() : this.hasError('code') && (null === (o = this.codeRef) || void 0 === o || o.focus());
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
            n = (0, r.jsxs)(o.Fragment, {
                children: [
                    (0, r.jsx)(
                        h.Dx,
                        {
                            className: a()(v.marginBottom8, T.title),
                            children: R.intl.string(R.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, r.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: T.subtitle,
                        children: R.intl.string(R.t.rvx0T0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: T.mainLoginContainer,
            children: [
                n,
                (0, r.jsxs)(h.gO, {
                    className: T.loginForm,
                    children: [
                        (0, r.jsx)(x.Z, {
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
                        (0, r.jsx)(h.II, {
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
                        (0, r.jsx)(h.zx, {
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
        return (0, r.jsxs)('div', {
            className: T.__invalid_pageContainer,
            children: [
                (0, r.jsx)(h.ZP, {
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    theme: n,
                    children: this.renderDefaultForm()
                }),
                (0, r.jsx)(d.ThemeProvider, {
                    theme: n,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            'data-theme': n,
                            'data-disable-adaptive-theme': !0,
                            className: a()(e, T.navRow),
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
        return (0, r.jsx)(h.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, r.jsx)(p.Cd, {
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
            s = this.props.loginStatus === N.u34.ACCOUNT_DISABLED,
            n = s ? R.intl.string(R.t['j3rC+f']) : R.intl.string(R.t.ZFWofn),
            o = s ? R.intl.string(R.t['6eNTWV']) : R.intl.string(R.t.pCBti4);
        return (0, r.jsxs)(h.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, r.jsx)(h.Dx, {
                    className: v.marginBottom8,
                    children: n
                }),
                (0, r.jsx)(h.DK, {
                    className: v.marginBottom20,
                    children: o
                }),
                (0, r.jsxs)(h.gO, {
                    children: [
                        (0, r.jsx)(d.Button, {
                            color: d.Button.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: R.intl.string(R.t.JhDw5u)
                        }),
                        (0, r.jsx)('div', {
                            className: a()(v.marginTop8, T.needAccount),
                            children: R.intl.format(R.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, r.jsx)(u.Z, {
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
        return (0, r.jsx)(h.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)('div', {
                className: v.marginTop20,
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
            case N.u34.LOGGING_IN_MFA_SMS:
            case N.u34.MFA_SMS_STEP:
            case N.u34.LOGGING_IN_MFA:
            case N.u34.MFA_STEP:
                return this.renderMFA();
            case N.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case N.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case N.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPhonePasswordRecovery();
            case N.u34.LOGGING_IN:
            case N.u34.NONE:
            default:
                return this.renderDefault();
        }
    }
    constructor(e) {
        super(e),
            w(this, 'loginRef', void 0),
            w(this, 'passwordRef', void 0),
            w(this, 'codeRef', void 0),
            w(this, 'handleAuthToken', async (e) => {
                await c.Z.loginToken(e, !1);
            }),
            w(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault();
                }
                'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            w(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            w(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            w(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            w(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            w(this, 'renderError', (e) => {
                let { errors: t } = this.props;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            }),
            w(this, 'handleForgotPassword', async (e) => {
                var t;
                null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
                let s = this.getFullLogin();
                try {
                    A.S.dispatch(N.CkL.WAVE_EMPHASIZE),
                        await c.Z.forgotPassword(s),
                        (0, d.openModal)((e) =>
                            (0, r.jsx)(d.ConfirmModal, {
                                header: R.intl.string(R.t.f5Pi7O),
                                confirmText: R.intl.string(R.t.BddRzc),
                                confirmButtonColor: d.Button.Colors.BRAND,
                                ...e,
                                children: (0, r.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    children: R.intl.format(R.t['6u5hQ0'], { email: s })
                                })
                            })
                        );
                } catch {}
            }),
            w(this, 'handleLogin', (e) => {
                let { password: t, undelete: s } = this.state;
                null != e && e.preventDefault(),
                    c.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: s,
                        isMultiAccount: !0
                    });
            }),
            w(this, 'handlePasswordReset', async (e) => {
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: t } = await m.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
                    this.setState({ resetPasswordPhoneToken: t });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            w(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: n } = e;
                return c.Z.loginMFAv2({
                    code: s,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            w(this, 'handleResendCode', () => {
                m.Z.resendCode(this.getFullLogin());
            }),
            w(this, 'handleReset', (e) => {
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
            w(this, 'handleCancelAccountDeletion', () => {
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
function I(e) {
    let { loginStatus: t, closeLogin: s, themeClass: n, handleLogin: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Button, {
                type: 'button',
                look: d.Button.Looks.LINK,
                'aria-label': 'back',
                onClick: s,
                size: d.Button.Sizes.SMALL,
                className: a()(n, T.backButton),
                children: R.intl.string(R.t['13/7kZ'])
            }),
            (0, r.jsx)(d.Button, {
                'aria-label': 'continue',
                submitting: t === N.u34.LOGGING_IN,
                color: d.Button.Colors.BRAND,
                onClick: o,
                className: T.continueButton,
                children: R.intl.string(R.t['3PatS0'])
            })
        ]
    });
}
w(E, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
t.Z = function (e) {
    let t = (0, l.cj)([b.Z, _.default, g.Z, C.Z], () => ({
        authenticated: _.default.isAuthenticated(),
        loginStatus: _.default.getLoginStatus(),
        mfaTicket: _.default.getMFATicket(),
        maskedPhone: _.default.getMaskedPhone(),
        mfaMethods: _.default.getMFAMethods(),
        errors: _.default.getErrors(),
        defaultRoute: b.Z.defaultRoute,
        country: g.Z.getCountryCode(),
        theme: C.Z.theme
    }));
    return (0, r.jsx)(E, {
        ...e,
        ...t
    });
};
