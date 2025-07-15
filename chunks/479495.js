(n.d(t, { Z: () => P }), n(35282));
var r,
    s = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    c = n(873546),
    u = n(442837),
    d = n(570140),
    h = n(893776),
    p = n(129293),
    m = n(254942),
    f = n(388905),
    x = n(17894),
    g = n(124860),
    j = n(703656),
    v = n(108427),
    C = n(314897),
    b = n(585483),
    y = n(981631),
    O = n(388032),
    E = n(20493);
function N(e, t, n) {
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
class S extends (r = i.PureComponent) {
    componentDidMount() {
        (0, v.e)('reset_password');
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: r, working: i } = this.state,
            l = null != t ? t : this.renderError('password');
        return (0, s.jsxs)(f.ZP, {
            onSubmit: this.handleSubmit,
            tag: 'form',
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    src: null == l ? n(26230) : n(935227),
                    className: E.marginBottom20
                }),
                (0, s.jsx)(f.Dx, { children: O.intl.string(O.t['1LV6Ki']) }),
                (0, s.jsxs)(f.gO, {
                    className: E.marginTop20,
                    children: [
                        (0, s.jsx)(f.II, {
                            label: O.intl.string(O.t['8dM4FB']),
                            className: E.marginBottom20,
                            name: 'password',
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: l,
                            type: 'password'
                        }),
                        (0, s.jsx)(f.zx, {
                            type: 'submit',
                            submitting: i,
                            children: O.intl.string(O.t['FRep5+'])
                        }),
                        r
                            ? (0, s.jsx)(f.zx, {
                                  className: E.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: f.zx.Colors.PRIMARY,
                                  children: O.intl.string(O.t['ETE/oK'])
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
        return (0, s.jsxs)(f.ZP, {
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    src: n(26230),
                    className: a()(E.marginBottom20, c.tq ? E.marginTop20 : '')
                }),
                (0, s.jsx)(f.Dx, {
                    className: E.marginBottom40,
                    children: O.intl.string(O.t.WAUOoK)
                }),
                (0, s.jsx)(f.zx, {
                    onClick: this.handleOpenApp,
                    children: O.intl.string(O.t.uJWIj4)
                })
            ]
        });
    }
    render() {
        return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && '' !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset();
    }
    constructor(e) {
        var t;
        (super(e),
            N(this, 'handleSubmit', async (e) => {
                let { location: t, onLoginSuccess: n, source: r, resetToken: s } = this.props,
                    { password: i, error: l } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    (this.setState({ error: O.intl.string(O.t.R98xDw) }), b.S.dispatch(y.CkL.WAVE_EMPHASIZE));
                    return;
                }
                null != l && this.setState({ error: null });
                let a = s;
                if ((null != t && (a = (0, p.Z)(t)), null != a)) {
                    this.setState({ working: !0 });
                    try {
                        let { result: e, sms: t, webauthn: s, ticket: l, token: o, totp: c, backup: u } = await h.Z.resetPassword(a, i, r);
                        e === h.c.MFA
                            ? d.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: l,
                                  sms: t,
                                  webauthn: s,
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
                    } catch (e) {
                        this.setState({ apiErrors: (0, m.p)(e) });
                    }
                    this.setState({ working: !1 });
                }
            }),
            N(this, 'handleTokenSubmitMFAv2', async (e, t) => {
                let { location: n, mfaTicket: r, onLoginSuccess: s, resetToken: i, source: l } = this.props,
                    { password: a } = this.state;
                if (0 === a.length) return (d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject());
                let o = i;
                if ((null != n && (o = (0, p.Z)(n)), null == o)) return (d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject());
                this.setState({ working: !0 });
                try {
                    let n = await h.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: r,
                        password: a,
                        token: o,
                        source: l
                    });
                    if (null != s) return void s(n);
                    (d.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: n
                    }),
                        this.handlePasswordChangeSuccess());
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            N(this, 'handlePasswordChangeSuccess', () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) return void this.setState({ success: !0 });
                e(y.Z5c.APP);
            }),
            N(this, 'handleGoToLogin', () => {
                let { transitionTo: e } = this.props;
                (h.Z.loginReset(), e(y.Z5c.LOGIN, { source: 'reset_password' }));
            }),
            N(this, 'handleOpenApp', () => {
                (0, x.Z)('password_reset');
            }),
            N(this, 'hasError', (e) => null != this.state.apiErrors[e] || null != this.state.error),
            N(this, 'renderError', (e) => {
                let { apiErrors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }));
        let n = (null == (t = this.props.location) ? void 0 : t.search) != null && '' !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
        this.state = {
            method: '',
            password: '',
            code: '',
            apiErrors: {},
            error: null,
            hasCancel: null != n && null != n.from_login,
            working: !1,
            success: !1
        };
    }
}
N(S, 'defaultProps', {
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
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        N(e, t, n[t]);
                    }));
            }
            return e;
        })({}, e, t)
    );
};
