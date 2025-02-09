s.d(t, { Z: () => A }), s(757143);
var n,
    r = s(200651),
    i = s(192379),
    l = s(120356),
    a = s.n(l),
    o = s(593473),
    c = s(873546),
    d = s(442837),
    u = s(570140),
    h = s(893776),
    m = s(129293),
    p = s(254942),
    x = s(388905),
    g = s(17894),
    f = s(124860),
    j = s(108427),
    C = s(314897),
    v = s(585483),
    N = s(981631),
    E = s(388032),
    k = s(814632);
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
d.ZP.initialize();
class T extends (n = i.PureComponent) {
    componentDidMount() {
        (0, j.e)('reset_password');
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: n, working: i } = this.state,
            l = null != t ? t : this.renderError('password');
        return (0, r.jsxs)(x.ZP, {
            onSubmit: this.handleSubmit,
            tag: 'form',
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: null == l ? s(26230) : s(935227),
                    className: k.marginBottom20
                }),
                (0, r.jsx)(x.Dx, { children: E.intl.string(E.t['1LV6Ki']) }),
                (0, r.jsxs)(x.gO, {
                    className: k.marginTop20,
                    children: [
                        (0, r.jsx)(x.II, {
                            label: E.intl.string(E.t['8dM4FB']),
                            className: k.marginBottom20,
                            name: 'password',
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: l,
                            type: 'password'
                        }),
                        (0, r.jsx)(x.zx, {
                            type: 'submit',
                            submitting: i,
                            children: E.intl.string(E.t['FRep5+'])
                        }),
                        n
                            ? (0, r.jsx)(x.zx, {
                                  className: k.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: x.zx.Colors.PRIMARY,
                                  children: E.intl.string(E.t['ETE/oK'])
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
        return (0, r.jsx)(x.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(f.Cd, {
                mfaFinish: (e) => {
                    let { mfaType: t, data: s } = e;
                    return this.handleTokenSubmitMFAv2(t, s);
                },
                mfaChallenge: e,
                onEarlyClose: () => {
                    u.Z.dispatch({ type: 'LOGIN_RESET' });
                },
                width: 480
            })
        });
    }
    renderSucceeded() {
        return (0, r.jsxs)(x.ZP, {
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: s(26230),
                    className: a()(k.marginBottom20, c.tq ? k.marginTop20 : '')
                }),
                (0, r.jsx)(x.Dx, {
                    className: k.marginBottom40,
                    children: E.intl.string(E.t.WAUOoK)
                }),
                (0, r.jsx)(x.zx, {
                    onClick: this.handleOpenApp,
                    children: E.intl.string(E.t.uJWIj4)
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
            S(this, 'handleSubmit', async (e) => {
                let { location: t, onLoginSuccess: s, source: n, resetToken: r } = this.props,
                    { password: i, error: l } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    this.setState({ error: E.intl.string(E.t.R98xDw) }), v.S.dispatch(N.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != l && this.setState({ error: null });
                let a = r;
                if ((null != t && (a = (0, m.Z)(t)), null != a)) {
                    this.setState({ working: !0 });
                    try {
                        let { result: e, sms: t, webauthn: r, ticket: l, token: o, totp: c, backup: d } = await h.Z.resetPassword(a, i, n);
                        e === h.c.MFA
                            ? u.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: l,
                                  sms: t,
                                  webauthn: r,
                                  totp: c,
                                  backup: d
                              })
                            : null != s
                              ? s(o)
                              : (u.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: o
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (e) {
                        this.setState({ apiErrors: (0, p.p)(e) });
                    }
                    this.setState({ working: !1 });
                }
            }),
            S(this, 'handleTokenSubmitMFAv2', async (e, t) => {
                let { location: s, mfaTicket: n, onLoginSuccess: r, resetToken: i, source: l } = this.props,
                    { password: a } = this.state;
                if (0 === a.length) return u.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                let o = i;
                if ((null != s && (o = (0, m.Z)(s)), null == o)) return u.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                this.setState({ working: !0 });
                try {
                    let s = await h.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: n,
                        password: a,
                        token: o,
                        source: l
                    });
                    if (null != r) {
                        r(s);
                        return;
                    }
                    u.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: s
                    }),
                        this.handlePasswordChangeSuccess();
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            S(this, 'handlePasswordChangeSuccess', () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) {
                    this.setState({ success: !0 });
                    return;
                }
                e(N.Z5c.APP);
            }),
            S(this, 'handleGoToLogin', () => {
                let { transitionTo: e } = this.props;
                h.Z.loginReset(), e(N.Z5c.LOGIN);
            }),
            S(this, 'handleOpenApp', () => {
                (0, g.Z)('password_reset');
            }),
            S(this, 'hasError', (e) => null != this.state.apiErrors[e] || null != this.state.error),
            S(this, 'renderError', (e) => {
                let { apiErrors: t } = this.state;
                if (this.hasError(e)) {
                    let s = t[e];
                    return Array.isArray(s) ? s[0] : s;
                }
                return null;
            });
        let s = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && '' !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
        this.state = {
            method: '',
            password: '',
            code: '',
            apiErrors: {},
            error: null,
            hasCancel: null != s && null != s.from_login,
            working: !1,
            success: !1
        };
    }
}
S(T, 'defaultProps', {
    transitionTo: (e) => s.g.location.assign(e),
    replaceWith: (e) => s.g.location.replace(e)
});
let A = function (e) {
    let t = (0, d.cj)([C.default], () => ({
        mfaTicket: C.default.getMFATicket(),
        mfaMethods: C.default.getMFAMethods()
    }));
    return (0, r.jsx)(T, {
        ...e,
        ...t
    });
};
