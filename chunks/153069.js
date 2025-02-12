s.d(t, { Z: () => I }), s(757143);
var n,
    r = s(200651),
    o = s(192379),
    i = s(120356),
    a = s.n(i),
    l = s(442837),
    c = s(481060),
    u = s(893776),
    d = s(479495),
    h = s(254942),
    p = s(388905),
    f = s(379760),
    m = s(124860),
    g = s(144114),
    _ = s(541692),
    x = s(952802),
    C = s(210887),
    y = s(314897),
    b = s(896797),
    w = s(585483),
    v = s(981631),
    k = s(388032),
    N = s(505947),
    R = s(483938);
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
class A extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e, t) {
        let { authenticated: s, transitionTo: n } = this.props;
        if ((s && !e.authenticated && n(v.Z5c.APP), t.errors !== this.state.errors)) {
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
                        p.Dx,
                        {
                            className: a()(R.marginBottom8, N.title),
                            children: k.intl.string(k.t.bPP34e)
                        },
                        'title'
                    ),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: N.subtitle,
                        children: k.intl.string(k.t.rvx0T0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: N.mainLoginContainer,
            children: [
                n,
                (0, r.jsxs)(p.gO, {
                    className: N.loginForm,
                    children: [
                        (0, r.jsx)(x.Z, {
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            className: R.marginBottom20,
                            label: k.intl.string(k.t.tUjnxs),
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
                        (0, r.jsx)(p.II, {
                            label: k.intl.string(k.t['CIGa+/']),
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
                            className: a()(R.marginTop4),
                            children: k.intl.string(k.t.wWIufn)
                        })
                    ]
                })
            ]
        });
    }
    renderDefault() {
        let { authBoxClassName: e, loginStatus: t, closeLogin: s, theme: n } = this.props;
        return (0, r.jsxs)('div', {
            className: N.__invalid_pageContainer,
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
                            className: a()(e, N.navRow),
                            children: (0, r.jsx)(E, {
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
            s = this.props.loginStatus === v.u34.ACCOUNT_DISABLED,
            n = s ? k.intl.string(k.t['j3rC+f']) : k.intl.string(k.t.ZFWofn),
            o = s ? k.intl.string(k.t['6eNTWV']) : k.intl.string(k.t.pCBti4);
        return (0, r.jsxs)(p.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
                (0, r.jsx)(p.Dx, {
                    className: R.marginBottom8,
                    children: n
                }),
                (0, r.jsx)(p.DK, {
                    className: R.marginBottom20,
                    children: o
                }),
                (0, r.jsxs)(p.gO, {
                    children: [
                        (0, r.jsx)(c.zxk, {
                            color: c.zxk.Colors.BRAND,
                            type: 'submit',
                            fullWidth: !0,
                            children: k.intl.string(k.t.JhDw5u)
                        }),
                        (0, r.jsx)('div', {
                            className: a()(R.marginTop8, N.needAccount),
                            children: k.intl.format(k.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                        })
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, r.jsx)(d.Z, {
            resetToken: e,
            onLoginSuccess: (e) => {
                this.setState({ errors: {} }), u.Z.switchAccountToken(e);
            },
            ...this.props
        });
    }
    renderPhonePasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(p.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)('div', {
                className: R.marginTop20,
                children: (0, r.jsx)(f.Z, {
                    title: k.intl.string(k.t['+xqy3d']),
                    subtitle: k.intl.format(k.t.ef4uZ2, { onResendClick: this.handleResendCode }),
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
        super(e),
            j(this, 'loginRef', void 0),
            j(this, 'passwordRef', void 0),
            j(this, 'codeRef', void 0),
            j(this, 'handleAuthToken', async (e) => {
                this.setState({ errors: {} }), await u.Z.loginToken(e, !1);
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
                    if ((w.S.dispatch(v.CkL.WAVE_EMPHASIZE), !(await u.Z.forgotPassword(s)))) return;
                    (0, c.h7j)((e) =>
                        (0, r.jsx)(c.ConfirmModal, {
                            header: k.intl.string(k.t.f5Pi7O),
                            confirmText: k.intl.string(k.t.BddRzc),
                            confirmButtonColor: c.zxk.Colors.BRAND,
                            ...e,
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: k.intl.format(k.t['6u5hQ0'], { email: s })
                            })
                        })
                    );
                } catch (t) {
                    let e = (0, h.p)(t);
                    this.setState({ errors: e });
                }
            }),
            j(this, 'handleLogin', async (e) => {
                let { password: t, undelete: s } = this.state;
                null == e || e.preventDefault(), this.setState({ errors: {} });
                try {
                    await u.Z.login({
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
            j(this, 'handlePasswordReset', async (e) => {
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
            j(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: s, ticket: n } = e;
                return u.Z.loginMFAv2({
                    code: s,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            j(this, 'handleResendCode', () => {
                g.Z.resendCode(this.getFullLogin());
            }),
            j(this, 'handleReset', (e) => {
                null == e || e.preventDefault(),
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
function E(e) {
    let { loginStatus: t, closeLogin: s, themeClass: n, handleLogin: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.zxk, {
                type: 'button',
                look: c.zxk.Looks.LINK,
                color: c.zxk.Colors.PRIMARY,
                onClick: s,
                size: c.zxk.Sizes.SMALL,
                className: a()(n, N.backButton),
                children: k.intl.string(k.t['13/7kZ'])
            }),
            (0, r.jsx)(c.zxk, {
                submitting: t === v.u34.LOGGING_IN,
                color: c.zxk.Colors.BRAND,
                onClick: o,
                className: N.continueButton,
                children: k.intl.string(k.t['3PatS0'])
            })
        ]
    });
}
j(A, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
let I = function (e) {
    let t = (0, l.cj)([b.Z, y.default, _.Z, C.Z], () => ({
        authenticated: y.default.isAuthenticated(),
        loginStatus: y.default.getLoginStatus(),
        mfaTicket: y.default.getMFATicket(),
        mfaMethods: y.default.getMFAMethods(),
        defaultRoute: b.Z.defaultRoute,
        country: _.Z.getCountryCode(),
        theme: C.Z.theme
    }));
    return (0, r.jsx)(A, {
        ...e,
        ...t
    });
};
