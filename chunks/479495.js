n(757143);
var s,
    r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    c = n(873546),
    u = n(442837),
    d = n(570140),
    h = n(893776),
    p = n(129293),
    m = n(388905),
    x = n(17894),
    f = n(124860),
    g = n(108427),
    C = n(314897),
    j = n(585483),
    v = n(981631),
    N = n(388032),
    S = n(232186);
function E(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
u.ZP.initialize();
class A extends (s = i.PureComponent) {
    componentDidMount() {
        (0, g.e)('reset_password');
    }
    renderPasswordReset() {
        let { password: t, error: e, hasCancel: s } = this.state,
            i = this.isSubmitting(),
            l = null != e ? e : this.renderError('password');
        return (0, r.jsxs)(m.ZP, {
            onSubmit: this.handleSubmit,
            tag: 'form',
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: null == l ? n(26230) : n(935227),
                    className: S.marginBottom20
                }),
                (0, r.jsx)(m.Dx, { children: N.intl.string(N.t['1LV6Ki']) }),
                (0, r.jsxs)(m.gO, {
                    className: S.marginTop20,
                    children: [
                        (0, r.jsx)(m.II, {
                            label: N.intl.string(N.t['8dM4FB']),
                            className: S.marginBottom20,
                            name: 'password',
                            value: t,
                            onChange: (t) => this.setState({ password: t }),
                            error: l,
                            type: 'password'
                        }),
                        (0, r.jsx)(m.zx, {
                            type: 'submit',
                            submitting: i,
                            children: N.intl.string(N.t['FRep5+'])
                        }),
                        s
                            ? (0, r.jsx)(m.zx, {
                                  className: S.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: m.zx.Colors.PRIMARY,
                                  children: N.intl.string(N.t['ETE/oK'])
                              })
                            : null
                    ]
                })
            ]
        });
    }
    renderMFA() {
        let t = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, r.jsx)(m.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(f.Cd, {
                mfaFinish: (t) => {
                    let { mfaType: e, data: n } = t;
                    return this.handleTokenSubmitMFAv2(e, n);
                },
                mfaChallenge: t,
                onEarlyClose: () => {
                    d.Z.dispatch({ type: 'LOGIN_RESET' });
                },
                width: 480
            })
        });
    }
    renderSucceeded() {
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: n(26230),
                    className: a()(S.marginBottom20, c.tq ? S.marginTop20 : '')
                }),
                (0, r.jsx)(m.Dx, {
                    className: S.marginBottom40,
                    children: N.intl.string(N.t.WAUOoK)
                }),
                (0, r.jsx)(m.zx, {
                    onClick: this.handleOpenApp,
                    children: N.intl.string(N.t.uJWIj4)
                })
            ]
        });
    }
    render() {
        return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && '' !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset();
    }
    constructor(t) {
        var e;
        super(t),
            E(this, 'handleSubmit', async (t) => {
                let { location: e, onLoginSuccess: n, source: s, resetToken: r } = this.props,
                    { password: i, error: l } = this.state;
                if ((null != t && t.preventDefault(), 0 === i.length)) {
                    this.setState({ error: N.intl.string(N.t.R98xDw) }), j.S.dispatch(v.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != l && this.setState({ error: null });
                let a = r;
                if ((null != e && (a = (0, p.Z)(e)), null != a)) {
                    this.setState({ working: !0 });
                    try {
                        let { result: t, sms: e, webauthn: r, ticket: l, token: o, totp: c, backup: u } = await h.Z.resetPassword(a, i, s);
                        t === h.c.MFA
                            ? d.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: l,
                                  sms: e,
                                  webauthn: r,
                                  totp: c,
                                  backup: u
                              })
                            : null != n
                              ? n(o)
                              : (d.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: o
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (t) {}
                    this.setState({ working: !1 });
                }
            }),
            E(this, 'handleTokenSubmitMFAv2', (t, e) => {
                let { location: n, mfaTicket: s, onLoginSuccess: r, resetToken: i, source: l } = this.props,
                    { password: a } = this.state;
                if (0 === a.length) return d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                let o = i;
                return (null != n && (o = (0, p.Z)(n)), null == o)
                    ? (d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject())
                    : h.Z.resetPasswordMFAv2({
                          method: t,
                          code: e,
                          ticket: s,
                          password: a,
                          token: o,
                          source: l
                      }).then((t) => {
                          null != r
                              ? r(t)
                              : (d.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: t
                                }),
                                this.handlePasswordChangeSuccess());
                      });
            }),
            E(this, 'handlePasswordChangeSuccess', () => {
                let { replaceWith: t } = this.props;
                if (c.Em || c.tq) {
                    this.setState({ success: !0 });
                    return;
                }
                t(v.Z5c.APP);
            }),
            E(this, 'handleGoToLogin', () => {
                let { transitionTo: t } = this.props;
                h.Z.loginReset(), t(v.Z5c.LOGIN);
            }),
            E(this, 'isSubmitting', () => {
                let { loginStatus: t } = this.props,
                    { working: e } = this.state;
                return e || t === v.u34.LOGGING_IN_MFA;
            }),
            E(this, 'handleOpenApp', () => {
                (0, x.Z)('password_reset');
            }),
            E(this, 'hasError', (t) => null != this.props.errors[t] || null != this.state.error),
            E(this, 'renderError', (t) => {
                let { errors: e } = this.props;
                if (this.hasError(t)) {
                    let n = e[t];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            });
        let n = (null === (e = this.props.location) || void 0 === e ? void 0 : e.search) != null && '' !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
        this.state = {
            method: '',
            password: '',
            code: '',
            error: null,
            hasCancel: null != n && null != n.from_login,
            working: !1,
            success: !1
        };
    }
}
E(A, 'defaultProps', {
    transitionTo: (t) => n.g.location.assign(t),
    replaceWith: (t) => n.g.location.replace(t)
});
e.Z = function (t) {
    let e = (0, u.cj)([C.default], () => ({
        loginStatus: C.default.getLoginStatus(),
        mfaTicket: C.default.getMFATicket(),
        errors: C.default.getErrors(),
        mfaMethods: C.default.getMFAMethods()
    }));
    return (0, r.jsx)(A, {
        ...t,
        ...e
    });
};
