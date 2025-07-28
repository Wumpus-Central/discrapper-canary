(r.d(t, { Z: () => E }), r(35282));
var n,
    s = r(255367),
    i = r(73800),
    l = r(120356),
    o = r.n(l),
    a = r(593473),
    c = r(873546),
    u = r(442837),
    h = r(570140),
    d = r(893776),
    p = r(129293),
    m = r(254942),
    f = r(388905),
    g = r(17894),
    b = r(124860),
    j = r(703656),
    y = r(108427),
    x = r(314897),
    O = r(585483),
    S = r(981631),
    v = r(388032),
    w = r(20493);
function C(e, t, r) {
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
class P extends (n = i.PureComponent) {
    componentDidMount() {
        (0, y.e)('reset_password');
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: n, working: i } = this.state,
            { theme: l, authBoxClassName: o } = this.props,
            a = null != t ? t : this.renderError('password');
        return (0, s.jsxs)(f.ZP, {
            onSubmit: this.handleSubmit,
            tag: 'form',
            theme: l,
            className: o,
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    src: null == a ? r(26230) : r(935227),
                    className: w.marginBottom20
                }),
                (0, s.jsx)(f.Dx, { children: v.intl.string(v.t['1LV6Ki']) }),
                (0, s.jsxs)(f.gO, {
                    className: w.marginTop20,
                    children: [
                        (0, s.jsx)(f.II, {
                            label: v.intl.string(v.t['8dM4FB']),
                            className: w.marginBottom20,
                            name: 'password',
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: a,
                            type: 'password'
                        }),
                        (0, s.jsx)(f.zx, {
                            type: 'submit',
                            submitting: i,
                            children: v.intl.string(v.t['FRep5+'])
                        }),
                        n
                            ? (0, s.jsx)(f.zx, {
                                  className: w.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: f.zx.Colors.PRIMARY,
                                  children: v.intl.string(v.t['ETE/oK'])
                              })
                            : null
                    ]
                })
            ]
        });
    }
    renderMFA() {
        let { mfaTicket: e, mfaMethods: t, theme: r, authBoxClassName: n, width: i } = this.props;
        return (0, s.jsx)(f.ZP, {
            style: { padding: 0 },
            theme: r,
            className: n,
            children: (0, s.jsx)(b.Cd, {
                mfaFinish: (e) => {
                    let { mfaType: t, data: r } = e;
                    return this.handleTokenSubmitMFAv2(t, r);
                },
                mfaChallenge: {
                    ticket: e,
                    methods: t
                },
                onEarlyClose: () => {
                    h.Z.dispatch({ type: 'LOGIN_RESET' });
                },
                width: null != i ? i : 480
            })
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, s.jsxs)(f.ZP, {
            theme: e,
            className: t,
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    src: r(26230),
                    className: o()(w.marginBottom20, c.tq ? w.marginTop20 : '')
                }),
                (0, s.jsx)(f.Dx, {
                    className: w.marginBottom40,
                    children: v.intl.string(v.t.WAUOoK)
                }),
                (0, s.jsx)(f.zx, {
                    onClick: this.handleOpenApp,
                    children: v.intl.string(v.t.uJWIj4)
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
            C(this, 'handleSubmit', async (e) => {
                let { location: t, onLoginSuccess: r, source: n, resetToken: s } = this.props,
                    { password: i, error: l } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    (this.setState({ error: v.intl.string(v.t.R98xDw) }), O.S.dispatch(S.CkL.WAVE_EMPHASIZE));
                    return;
                }
                null != l && this.setState({ error: null });
                let o = s;
                if ((null != t && (o = (0, p.Z)(t)), null != o)) {
                    this.setState({ working: !0 });
                    try {
                        let { result: e, sms: t, webauthn: s, ticket: l, token: a, totp: c, backup: u } = await d.Z.resetPassword(o, i, n);
                        e === d.c.MFA
                            ? h.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: l,
                                  sms: t,
                                  webauthn: s,
                                  totp: c,
                                  backup: u
                              })
                            : null != r
                              ? r(a)
                              : (h.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: a
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (e) {
                        this.setState({ apiErrors: (0, m.p)(e) });
                    }
                    this.setState({ working: !1 });
                }
            }),
            C(this, 'handleTokenSubmitMFAv2', async (e, t) => {
                let { location: r, mfaTicket: n, onLoginSuccess: s, resetToken: i, source: l } = this.props,
                    { password: o } = this.state;
                if (0 === o.length) return (h.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject());
                let a = i;
                if ((null != r && (a = (0, p.Z)(r)), null == a)) return (h.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject());
                this.setState({ working: !0 });
                try {
                    let r = await d.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: n,
                        password: o,
                        token: a,
                        source: l
                    });
                    if (null != s) return void s(r);
                    (h.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: r
                    }),
                        this.handlePasswordChangeSuccess());
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            C(this, 'handlePasswordChangeSuccess', () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) return void this.setState({ success: !0 });
                e(S.Z5c.APP);
            }),
            C(this, 'handleGoToLogin', () => {
                let { transitionTo: e } = this.props;
                (d.Z.loginReset(), e(S.Z5c.LOGIN, { source: 'reset_password' }));
            }),
            C(this, 'handleOpenApp', () => {
                (0, g.Z)('password_reset');
            }),
            C(this, 'hasError', (e) => null != this.state.apiErrors[e] || null != this.state.error),
            C(this, 'renderError', (e) => {
                let { apiErrors: t } = this.state;
                if (this.hasError(e)) {
                    let r = t[e];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            }));
        let r = (null == (t = this.props.location) ? void 0 : t.search) != null && '' !== this.props.location.search ? (0, a.parse)(this.props.location.search) : null;
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
C(P, 'defaultProps', {
    transitionTo: j.uL,
    replaceWith: j.dL
});
let E = function (e) {
    let t = (0, u.cj)([x.default], () => ({
        mfaTicket: x.default.getMFATicket(),
        mfaMethods: x.default.getMFAMethods()
    }));
    return (0, s.jsx)(
        P,
        (function (e) {
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
                        C(e, t, r[t]);
                    }));
            }
            return e;
        })({}, e, t)
    );
};
