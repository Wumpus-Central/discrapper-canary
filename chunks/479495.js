r.d(t, { Z: () => P }), r(35282);
var n,
    s = r(255367),
    i = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(593473),
    c = r(873546),
    u = r(442837),
    d = r(570140),
    h = r(893776),
    p = r(129293),
    m = r(254942),
    f = r(388905),
    x = r(17894),
    g = r(124860),
    j = r(703656),
    v = r(108427),
    C = r(314897),
    N = r(585483),
    O = r(981631),
    b = r(388032),
    y = r(20493);
function E(e, t, r) {
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
u.ZP.initialize();
class S extends (n = i.PureComponent) {
    componentDidMount() {
        (0, v.e)('reset_password');
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: n, working: i } = this.state,
            l = null != t ? t : this.renderError('password');
        return (0, s.jsxs)(f.ZP, {
            onSubmit: this.handleSubmit,
            tag: 'form',
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    src: null == l ? r(26230) : r(935227),
                    className: y.marginBottom20
                }),
                (0, s.jsx)(f.Dx, { children: b.intl.string(b.t['1LV6Ki']) }),
                (0, s.jsxs)(f.gO, {
                    className: y.marginTop20,
                    children: [
                        (0, s.jsx)(f.II, {
                            label: b.intl.string(b.t['8dM4FB']),
                            className: y.marginBottom20,
                            name: 'password',
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: l,
                            type: 'password'
                        }),
                        (0, s.jsx)(f.zx, {
                            type: 'submit',
                            submitting: i,
                            children: b.intl.string(b.t['FRep5+'])
                        }),
                        n
                            ? (0, s.jsx)(f.zx, {
                                  className: y.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: f.zx.Colors.PRIMARY,
                                  children: b.intl.string(b.t['ETE/oK'])
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
        return (0, s.jsx)(f.ZP, {
            style: { padding: 0 },
            children: (0, s.jsx)(g.Cd, {
                mfaFinish: (e) => {
                    let { mfaType: t, data: r } = e;
                    return this.handleTokenSubmitMFAv2(t, r);
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
        return (0, s.jsxs)(f.ZP, {
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    src: r(26230),
                    className: a()(y.marginBottom20, c.tq ? y.marginTop20 : '')
                }),
                (0, s.jsx)(f.Dx, {
                    className: y.marginBottom40,
                    children: b.intl.string(b.t.WAUOoK)
                }),
                (0, s.jsx)(f.zx, {
                    onClick: this.handleOpenApp,
                    children: b.intl.string(b.t.uJWIj4)
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
                let { location: t, onLoginSuccess: r, source: n, resetToken: s } = this.props,
                    { password: i, error: l } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    this.setState({ error: b.intl.string(b.t.R98xDw) }), N.S.dispatch(O.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != l && this.setState({ error: null });
                let a = s;
                if ((null != t && (a = (0, p.Z)(t)), null != a)) {
                    this.setState({ working: !0 });
                    try {
                        let { result: e, sms: t, webauthn: s, ticket: l, token: o, totp: c, backup: u } = await h.Z.resetPassword(a, i, n);
                        e === h.c.MFA
                            ? d.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: l,
                                  sms: t,
                                  webauthn: s,
                                  totp: c,
                                  backup: u
                              })
                            : null != r
                              ? r(o)
                              : (d.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: o
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (e) {
                        this.setState({ apiErrors: (0, m.p)(e) });
                    }
                    this.setState({ working: !1 });
                }
            }),
            E(this, 'handleTokenSubmitMFAv2', async (e, t) => {
                let { location: r, mfaTicket: n, onLoginSuccess: s, resetToken: i, source: l } = this.props,
                    { password: a } = this.state;
                if (0 === a.length) return d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                let o = i;
                if ((null != r && (o = (0, p.Z)(r)), null == o)) return d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                this.setState({ working: !0 });
                try {
                    let r = await h.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: n,
                        password: a,
                        token: o,
                        source: l
                    });
                    if (null != s) return void s(r);
                    d.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: r
                    }),
                        this.handlePasswordChangeSuccess();
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            E(this, 'handlePasswordChangeSuccess', () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) return void this.setState({ success: !0 });
                e(O.Z5c.APP);
            }),
            E(this, 'handleGoToLogin', () => {
                let { transitionTo: e } = this.props;
                h.Z.loginReset(), e(O.Z5c.LOGIN, { source: 'reset_password' });
            }),
            E(this, 'handleOpenApp', () => {
                (0, x.Z)('password_reset');
            }),
            E(this, 'hasError', (e) => null != this.state.apiErrors[e] || null != this.state.error),
            E(this, 'renderError', (e) => {
                let { apiErrors: t } = this.state;
                if (this.hasError(e)) {
                    let r = t[e];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            });
        let r = (null == (t = this.props.location) ? void 0 : t.search) != null && '' !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
        this.state = {
            method: '',
            password: '',
            code: '',
            apiErrors: {},
            error: null,
            hasCancel: null != r && null != r.from_login,
            working: !1,
            success: !1
        };
    }
}
E(S, 'defaultProps', {
    transitionTo: j.uL,
    replaceWith: j.dL
});
let P = function (e) {
    let t = (0, u.cj)([C.default], () => ({
        mfaTicket: C.default.getMFATicket(),
        mfaMethods: C.default.getMFAMethods()
    }));
    return (0, s.jsx)(
        S,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        E(e, t, r[t]);
                    });
            }
            return e;
        })({}, e, t)
    );
};
