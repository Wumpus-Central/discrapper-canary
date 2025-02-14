s.d(t, { Z: () => S }), s(757143);
var n,
    r = s(200651),
    o = s(192379),
    i = s(120356),
    a = s.n(i),
    l = s(442837),
    d = s(481060),
    c = s(893776),
    h = s(479495),
    u = s(254942),
    m = s(388905),
    f = s(379760),
    p = s(124860),
    _ = s(144114),
    g = s(541692),
    x = s(952802),
    C = s(210887),
    b = s(314897),
    R = s(896797),
    k = s(585483),
    N = s(981631),
    A = s(388032),
    v = s(505947),
    w = s(483938);
function j(e, t, s) {
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
class I extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: n } = this.props;
        if ((s && !e.authenticated && n(N.Z5c.APP), t.errors !== this.state.errors)) {
            var r, o, i;
            this.hasError('password') ? null === (r = this.passwordRef) || void 0 === r || r.focus() : this.hasError('email') || this.hasError('login') ? null === (o = this.loginRef) || void 0 === o || o.focus() : this.hasError('code') && (null === (i = this.codeRef) || void 0 === i || i.focus());
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
                            className: a()(w.marginBottom8, v.title),
                            children: A.intl.string(A.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, r.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: v.subtitle,
                        children: A.intl.string(A.t.rvx0T0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: v.mainLoginContainer,
            children: [
                n,
                (0, r.jsxs)(m.gO, {
                    className: v.loginForm,
                    children: [
                        (0, r.jsx)(x.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: w.marginBottom20,
                            label: A.intl.string(A.t.tUjnxs),
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
                        (0, r.jsx)(m.II, {
                            label: A.intl.string(A.t['CIGa+/']),
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
                            look: d.zxk.Looks.LINK,
                            color: d.zxk.Colors.LINK,
                            className: a()(w.marginTop4),
                            children: A.intl.string(A.t.wWIufn)
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let { authBoxClassName: e, loginStatus: t, closeLogin: s, theme: n } = this.props;
        return (0, r.jsxs)('div', {
            className: v.__invalid_pageContainer,
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
                    children: (e) =>
                        (0, r.jsx)('div', {
                            'data-theme': n,
                            'data-disable-adaptive-theme': !0,
                            className: a()(e, v.navRow),
                            children: (0, r.jsx)(T, {
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
            n = s ? A.intl.string(A.t['j3rC+f']) : A.intl.string(A.t.ZFWofn),
            o = s ? A.intl.string(A.t['6eNTWV']) : A.intl.string(A.t.pCBti4);
        return (0, r.jsxs)(m.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, r.jsx)(m.Dx, {
                    className: w.marginBottom8,
                    children: n
                }),
                (0, r.jsx)(m.DK, {
                    className: w.marginBottom20,
                    children: o
                }),
                (0, r.jsxs)(m.gO, {
                    children: [
                        (0, r.jsx)(d.zxk, {
                            color: d.zxk.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: A.intl.string(A.t.JhDw5u)
                        }),
                        (0, r.jsx)('div', {
                            className: a()(w.marginTop8, v.needAccount),
                            children: A.intl.format(A.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, r.jsx)(h.Z, {
            resetToken: e,
            onLoginSuccess: (e) => {
                this.setState({ errors: {} }), c.Z.switchAccountToken(e);
            },
            ...this.props
        });
    }
    renderPhonePasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(m.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)('div', {
                className: w.marginTop20,
                children: (0, r.jsx)(f.Z, {
                    title: A.intl.string(A.t['+xqy3d']),
                    subtitle: A.intl.format(A.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
            j(this, 'loginRef', void 0),
            j(this, 'passwordRef', void 0),
            j(this, 'codeRef', void 0),
            j(this, 'handleAuthToken', async (e) => {
                this.setState({ errors: {} }), await c.Z.loginToken(e, !1);
            }),
            j(this, 'handleTabOrEnter', (e) => {
                if ('Tab' === e.key && !e.shiftKey && e.target === this.loginRef) {
                    var t;
                    null === (t = this.passwordRef) || void 0 === t || t.focus(), e.stopPropagation(), e.preventDefault();
                }
                'Enter' === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            j(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            j(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            j(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            j(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            j(this, 'renderError', (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            }),
            j(this, 'handleForgotPassword', async (e) => {
                var t;
                null == e || e.preventDefault(), null === (t = this.loginRef) || void 0 === t || t.focus();
                let s = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((k.S.dispatch(N.CkL.WAVE_EMPHASIZE), !(await c.Z.forgotPassword(s)))) return;
                    (0, d.h7j)((e) =>
                        (0, r.jsx)(d.ConfirmModal, {
                            header: A.intl.string(A.t.f5Pi7O),
                            confirmText: A.intl.string(A.t.BddRzc),
                            confirmButtonColor: d.zxk.Colors.BRAND,
                            ...e,
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                children: A.intl.format(A.t['6u5hQ0'], { email: s })
                            })
                        })
                    );
                } catch (t) {
                    let e = (0, u.p)(t);
                    this.setState({ errors: e });
                }
            }),
            j(this, 'handleLogin', async (e) => {
                let { password: t, undelete: s } = this.state;
                null == e || e.preventDefault(), this.setState({ errors: {} });
                try {
                    await c.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: s,
                        isMultiAccount: !0
                    });
                } catch (t) {
                    let e = (0, u.p)(t);
                    this.setState({ errors: e });
                }
            }),
            j(this, 'handlePasswordReset', async (e) => {
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
            j(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: n } = e;
                return c.Z.loginMFAv2({
                    code: s,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            j(this, 'handleResendCode', () => {
                _.Z.resendCode(this.getFullLogin());
            }),
            j(this, 'handleReset', (e) => {
                null == e || e.preventDefault(),
                    c.Z.loginReset(!0),
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
            j(this, 'handleCancelAccountDeletion', () => {
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
function T(e) {
    let { loginStatus: t, closeLogin: s, themeClass: n, handleLogin: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.zxk, {
                type: 'button',
                look: d.zxk.Looks.LINK,
                color: d.zxk.Colors.PRIMARY,
                onClick: s,
                size: d.zxk.Sizes.SMALL,
                className: a()(n, v.backButton),
                children: A.intl.string(A.t['13/7kZ'])
            }),
            (0, r.jsx)(d.zxk, {
                submitting: t === N.u34.LOGGING_IN,
                color: d.zxk.Colors.BRAND,
                onClick: o,
                className: v.continueButton,
                children: A.intl.string(A.t['3PatS0'])
            })
        ]
    });
}
j(I, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
let S = function (e) {
    let t = (0, l.cj)([R.Z, b.default, g.Z, C.Z], () => ({
        authenticated: b.default.isAuthenticated(),
        loginStatus: b.default.getLoginStatus(),
        mfaTicket: b.default.getMFATicket(),
        mfaMethods: b.default.getMFAMethods(),
        defaultRoute: R.Z.defaultRoute,
        country: g.Z.getCountryCode(),
        theme: C.Z.theme
    }));
    return (0, r.jsx)(I, {
        ...e,
        ...t
    });
};
