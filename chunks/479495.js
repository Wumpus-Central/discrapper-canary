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
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
u.ZP.initialize();
class T extends (s = i.PureComponent) {
    componentDidMount() {
        (0, g.e)('reset_password');
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: s, working: i } = this.state,
            l = null != t ? t : this.renderError('password');
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
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
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
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, r.jsx)(m.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(f.Cd, {
                mfaFinish: (e) => {
                    let { mfaType: t, data: n } = e;
                    return this.handleTokenSubmitMFAv2(t, n);
                },
                mfaChallenge: e,
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
    constructor(e) {
        var t;
        super(e),
            E(this, 'handleSubmit', async (e) => {
                let { location: t, onLoginSuccess: n, source: s, resetToken: r } = this.props,
                    { password: i, error: l } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    this.setState({ error: N.intl.string(N.t.R98xDw) }), j.S.dispatch(v.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != l && this.setState({ error: null });
                let a = r;
                if ((null != t && (a = (0, p.Z)(t)), null != a)) {
                    this.setState({ working: !0 });
                    try {
                        let { result: e, sms: t, webauthn: r, ticket: l, token: o, totp: c, backup: u } = await h.Z.resetPassword(a, i, s);
                        e === h.c.MFA
                            ? d.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: l,
                                  sms: t,
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
                    } catch (e) {}
                    this.setState({ working: !1 });
                }
            }),
            E(this, 'handleTokenSubmitMFAv2', async (e, t) => {
                let { location: n, mfaTicket: s, onLoginSuccess: r, resetToken: i, source: l } = this.props,
                    { password: a } = this.state;
                if (0 === a.length) return d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                let o = i;
                if ((null != n && (o = (0, p.Z)(n)), null == o)) return d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                this.setState({ working: !0 });
                try {
                    let n = await h.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: s,
                        password: a,
                        token: o,
                        source: l
                    });
                    if (null != r) {
                        r(n);
                        return;
                    }
                    d.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: n
                    }),
                        this.handlePasswordChangeSuccess();
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            E(this, 'handlePasswordChangeSuccess', () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) {
                    this.setState({ success: !0 });
                    return;
                }
                e(v.Z5c.APP);
            }),
            E(this, 'handleGoToLogin', () => {
                let { transitionTo: e } = this.props;
                h.Z.loginReset(), e(v.Z5c.LOGIN);
            }),
            E(this, 'handleOpenApp', () => {
                (0, x.Z)('password_reset');
            }),
            E(this, 'hasError', (e) => null != this.props.errors[e] || null != this.state.error),
            E(this, 'renderError', (e) => {
                let { errors: t } = this.props;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            });
        let n = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && '' !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
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
E(T, 'defaultProps', {
    transitionTo: (e) => n.g.location.assign(e),
    replaceWith: (e) => n.g.location.replace(e)
});
t.Z = function (e) {
    let t = (0, u.cj)([C.default], () => ({
        mfaTicket: C.default.getMFATicket(),
        errors: C.default.getErrors(),
        mfaMethods: C.default.getMFAMethods()
    }));
    return (0, r.jsx)(T, {
        ...e,
        ...t
    });
};
