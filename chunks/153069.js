(r.d(t, { default: () => N }), r(35282), r(704826));
var n,
    s = r(255367),
    o = r(73800),
    i = r(990547),
    a = r(442837),
    l = r(257465),
    u = r(369585),
    h = r(103866),
    d = r(37148),
    c = r(755721),
    p = r(481060),
    f = r(893776),
    g = r(479495),
    m = r(213609),
    _ = r(254942),
    C = r(388905),
    b = r(379760),
    y = r(124860),
    w = r(144114),
    P = r(541692),
    x = r(952802),
    O = r(703656),
    j = r(210887),
    R = r(314897),
    S = r(896797),
    E = r(585483),
    k = r(981631),
    v = r(388032),
    A = r(472645),
    I = r(20493);
function T(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                T(e, t, r[t]);
            }));
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
class F extends (n = o.PureComponent) {
    componentDidMount() {
        window.addEventListener('keydown', this.handleTabOrEnter);
    }
    componentDidUpdate(e, t) {
        let { authenticated: r, transitionTo: n } = this.props;
        if ((r && !e.authenticated && n(k.Z5c.APP), t.errors !== this.state.errors)) {
            var s, o, i;
            this.hasError('password') ? null == (s = this.passwordRef) || s.focus() : this.hasError('email') || this.hasError('login') ? null == (o = this.loginRef) || o.focus() : this.hasError('code') && (null == (i = this.codeRef) || i.focus());
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
            r = !this.hasError('email') && this.hasError('password');
        return (0, s.jsx)('div', {
            className: A.mainLoginContainer,
            children: (0, s.jsxs)(C.gO, {
                children: [
                    (0, s.jsx)(x.Z, {
                        alpha2: t.alpha2,
                        countryCode: t.code.split(' ')[0],
                        className: I.marginBottom20,
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
                        autoFocus: !r,
                        required: !0
                    }),
                    (0, s.jsx)(C.II, {
                        label: v.intl.string(v.t['CIGa+/']),
                        error: this.renderError('password'),
                        onChange: (e) => this.setState({ password: e }),
                        name: 'password',
                        type: 'password',
                        setRef: this.setPasswordRef,
                        autoComplete: 'off',
                        spellCheck: 'false',
                        autoFocus: r,
                        value: this.state.password,
                        required: !0
                    }),
                    (0, s.jsx)(C.zx, {
                        onClick: this.handleForgotPassword,
                        look: c.zx.Looks.LINK,
                        color: c.zx.Colors.LINK,
                        className: I.marginTop4,
                        children: v.intl.string(v.t.wWIufn)
                    })
                ]
            })
        });
    }
    renderDefault() {
        let { loginStatus: e, onBackPressed: t } = this.props;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.x, {
                    title: v.intl.string(v.t.bPP34e),
                    subtitle: v.intl.string(v.t.rvx0T0)
                }),
                (0, s.jsx)(h.f, { children: this.renderDefaultForm() }),
                (0, s.jsx)(u.G, {
                    leading: (0, s.jsx)(p.Avr, {
                        variant: 'secondary',
                        size: 'md',
                        onClick: t,
                        text: v.intl.string(v.t['13/7kZ']),
                        type: 'button'
                    }),
                    actions: [
                        {
                            variant: 'primary',
                            text: v.intl.string(v.t['3PatS0']),
                            onClick: this.handleLogin,
                            loading: e === k.u34.LOGGING_IN
                        }
                    ]
                })
            ]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, s.jsx)(y.Cd, {
            mfaFinish: this.handleTokenSubmitMFA,
            mfaChallenge: e,
            onEarlyClose: () => {
                this.handleReset();
            },
            width: '100%',
            headerAlignStart: !0
        });
    }
    renderDisabledAccount() {
        let e = this.props.loginStatus === k.u34.ACCOUNT_DISABLED,
            t = e ? v.intl.string(v.t['j3rC+f']) : v.intl.string(v.t.ZFWofn),
            r = e ? v.intl.string(v.t['6eNTWV']) : v.intl.string(v.t.pCBti4);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.x, {
                    title: t,
                    subtitle: r
                }),
                (0, s.jsx)(u.G, {
                    leading: (0, s.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        color: 'text-secondary',
                        children: v.intl.format(v.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                    }),
                    actions: [
                        {
                            variant: 'primary',
                            text: v.intl.string(v.t.JhDw5u),
                            onClick: this.handleReset
                        }
                    ]
                })
            ]
        });
    }
    renderResetPhonePassword() {
        let { resetPasswordPhoneToken: e } = this.state;
        return (0, s.jsx)(
            g.Z,
            L(
                {
                    resetToken: e,
                    onLoginSuccess: (e) => {
                        (this.setState({ errors: {} }), f.Z.switchAccountToken(e));
                    },
                    width: '100%'
                },
                this.props
            )
        );
    }
    renderPhonePasswordRecovery() {
        let { phoneVerifyError: e } = this.state;
        return (0, s.jsx)(h.f, {
            children: (0, s.jsx)(b.Z, {
                title: v.intl.string(v.t['+xqy3d']),
                subtitle: v.intl.format(v.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: e,
                onSubmit: this.handlePasswordReset,
                onCancel: void 0
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
        (super(e),
            T(this, 'loginRef', void 0),
            T(this, 'passwordRef', void 0),
            T(this, 'codeRef', void 0),
            T(this, 'handleAuthToken', async (e) => {
                (this.setState({ errors: {} }), await f.Z.loginToken(e, !1));
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
                    let r = t[e];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }),
            T(this, 'handleForgotPassword', async (e) => {
                var t;
                (null == e || e.preventDefault(), null == (t = this.loginRef) || t.focus());
                let r = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((E.S.dispatch(k.CkL.WAVE_EMPHASIZE), !(await f.Z.forgotPassword(r)))) return;
                    (0, p.h7j)((e) =>
                        (0, s.jsx)(
                            p.ConfirmModal,
                            D(
                                L(
                                    {
                                        header: v.intl.string(v.t.f5Pi7O),
                                        confirmText: v.intl.string(v.t.BddRzc),
                                        confirmButtonColor: c.zx.Colors.BRAND
                                    },
                                    e
                                ),
                                {
                                    children: (0, s.jsx)(p.Text, {
                                        variant: 'text-md/normal',
                                        children: v.intl.format(v.t['6u5hQ0'], { email: r })
                                    })
                                }
                            )
                        )
                    );
                } catch (t) {
                    let e = (0, _.p)(t);
                    this.setState({ errors: e });
                }
            }),
            T(this, 'handleLogin', async (e) => {
                let { password: t, undelete: r } = this.state;
                (null == e || e.preventDefault(), this.setState({ errors: {} }));
                try {
                    await f.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: r,
                        isMultiAccount: !0
                    });
                } catch (t) {
                    let e = (0, _.p)(t);
                    this.setState({ errors: e });
                }
            }),
            T(this, 'handlePasswordReset', async (e) => {
                this.setState({
                    phoneVerifyError: null,
                    errors: {}
                });
                try {
                    let { token: t } = await w.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
                    this.setState({ resetPasswordPhoneToken: t });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            T(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: r, ticket: n } = e;
                return f.Z.loginMFAv2({
                    code: r,
                    ticket: n,
                    mfaType: t,
                    isMultiAccount: !0
                });
            }),
            T(this, 'handleResendCode', () => {
                w.Z.resendCode(this.getFullLogin());
            }),
            T(this, 'handleReset', (e) => {
                (null == e || e.preventDefault(),
                    f.Z.loginReset(!0),
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
T(F, 'defaultProps', {
    transitionTo: (e) => r.g.location.assign(e),
    replaceWith: (e) => r.g.location.replace(e)
});
let N = function (e) {
    var { onClose: t, transitionState: r, onBackPressed: n } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        s = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) ((r = o[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) ((r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
            }
            return s;
        })(e, ['onClose', 'transitionState', 'onBackPressed']);
    let h = (0, a.cj)([S.Z, R.default, P.Z, j.Z], () => ({
        authenticated: R.default.isAuthenticated(),
        loginStatus: R.default.getLoginStatus(),
        mfaTicket: R.default.getMFATicket(),
        mfaMethods: R.default.getMFAMethods(),
        defaultRoute: S.Z.defaultRoute,
        country: P.Z.getCountryCode(),
        theme: j.Z.theme
    }));
    (0, m.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.USER_LOGIN
    });
    let d = o.useCallback(() => {
        (t(), n());
    }, [t, n]);
    return (0, s.jsx)(l.I, {
        size: 'md',
        onClose: t,
        transitionState: r,
        children: (0, s.jsx)(
            F,
            D(L({}, u, h), {
                transitionTo: O.uL,
                replaceWith: O.dL,
                onBackPressed: d,
                authBoxClassName: A.card
            })
        )
    });
};
