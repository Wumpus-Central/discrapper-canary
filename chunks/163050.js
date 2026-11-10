var s = n(477900),
    r = n(582128),
    a = n(492462),
    i = n(607399),
    l = n(855986),
    o = n(825484),
    c = n(821609),
    d = n(73153),
    u = n(830215),
    h = n(396681),
    p = n(15552),
    m = n(854378),
    N = n(701273),
    E = n(397404),
    g = n(976860),
    f = n(210714),
    y = n(46653),
    A = n(188567),
    w = n(652215),
    I = n(792996),
    x = n(498206),
    C = n(221851);
l.Ay.initialize();
class v extends r.PureComponent {
    static defaultProps = { transitionTo: g.pX, replaceWith: g.bG };
    constructor(e) {
        super(e);
        let t =
            this.props.location?.search != null && "" !== this.props.location.search
                ? (0, a.qg)(this.props.location.search)
                : null;
        this.state = {
            method: "",
            password: "",
            code: "",
            apiErrors: {},
            error: null,
            hasCancel: null != t && null != t.from_login,
            working: !1,
            success: !1,
        };
    }
    componentDidMount() {
        (0, f.d0)("reset_password");
    }
    handleSubmit = async (e) => {
        let { location: t, source: n, resetToken: s } = this.props,
            { password: r, error: a } = this.state;
        if ((e.preventDefault(), 0 === r.length)) {
            (this.setState({ error: I.intl.string(I.t.R98xD5) }), A._.dispatch(w.jej.WAVE_EMPHASIZE));
            return;
        }
        null != a && this.setState({ error: null });
        let i = s;
        if ((null != t && (i = (0, h.A)(t)), null != i)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: e,
                    sms: t,
                    webauthn: s,
                    ticket: a,
                    token: l,
                    totp: o,
                    backup: c,
                } = await u.A.resetPassword(i, r, n);
                e === u.W.MFA
                    ? d.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: a, sms: t, webauthn: s, totp: o, backup: c })
                    : this.handlePasswordResetComplete(l);
            } catch (e) {
                this.setState({ apiErrors: (0, p.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: n, mfaTicket: s, resetToken: r, source: a } = this.props,
            { password: i } = this.state;
        if (0 === i.length) return (d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject());
        let l = r;
        if ((null != n && (l = (0, h.A)(n)), null == l))
            return (d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject());
        this.setState({ working: !0 });
        try {
            let n = await u.A.resetPasswordMFAv2({ method: e, code: t, ticket: s, password: i, token: l, source: a });
            this.handlePasswordResetComplete(n);
        } finally {
            this.setState({ working: !1 });
        }
    };
    handlePasswordResetComplete = (e) => {
        let { onLoginSuccess: t } = this.props;
        null == e
            ? this.handleLoginRequired()
            : null != t
              ? t(e)
              : (d.h.dispatch({ type: "LOGIN_SUCCESS", token: e }), this.handlePasswordChangeSuccess());
    };
    handleLoginRequired = () => {
        let { onLoginRequired: e, transitionTo: t } = this.props;
        if (null != e) return void e();
        if (i.v1 || i.Fr) {
            (u.A.loginReset(), this.setState({ success: !0 }));
            return;
        }
        (u.A.loginReset(), t(w.BVt.LOGIN, { source: "reset_password", state: { passwordReset: !0 } }));
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: e } = this.props;
        i.v1 || i.Fr ? this.setState({ success: !0 }) : e(w.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: e } = this.props;
        (u.A.loginReset(), e(w.BVt.LOGIN, { source: "reset_password" }));
    };
    handleOpenApp = () => {
        (0, N.A)("password_reset");
    };
    hasError = (e) => null != this.state.apiErrors[e] || null != this.state.error;
    renderError = (e) => {
        let { apiErrors: t } = this.state;
        if (this.hasError(e)) {
            let n = t[e];
            return Array.isArray(n) ? n[0] : n;
        }
        return null;
    };
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: r, working: a } = this.state,
            { theme: i, authBoxClassName: l } = this.props,
            d = t ?? this.renderError("password");
        return (0, s.jsxs)(m.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: i,
            className: l,
            children: [
                (0, s.jsx)("img", { alt: "", src: null == d ? n(79418) : n(579656), className: C.SX }),
                (0, s.jsx)(m.hE, { children: I.intl.string(I.t["1LV6Kq"]) }),
                (0, s.jsxs)(m.eB, {
                    className: C.QX,
                    children: [
                        (0, s.jsx)(m.pd, {
                            label: I.intl.string(I.t["8dM4FO"]),
                            className: C.SX,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: d,
                            type: "password",
                            revealable: !0,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, s.jsxs)(o.e, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, s.jsx)(c.$, { text: I.intl.string(I.t["FRep5/"]), type: "submit", loading: a }),
                                r &&
                                    (0, s.jsx)(c.$, {
                                        text: I.intl.string(I.t["ETE/oC"]),
                                        variant: "secondary",
                                        onClick: this.handleGoToLogin,
                                        loading: a,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let { mfaTicket: e, mfaMethods: t, theme: n, authBoxClassName: r } = this.props,
            a = (e) => {
                let { mfaType: t, data: n } = e;
                return this.handleTokenSubmitMFAv2(t, n);
            };
        return (0, s.jsx)(m.Ay, {
            style: { padding: 0 },
            theme: n,
            className: r,
            children: (0, s.jsx)(E.t, {
                mfaFinish: a,
                mfaChallenge: { ticket: e, methods: t },
                onEarlyClose: () => {
                    d.h.dispatch({ type: "LOGIN_RESET" });
                },
            }),
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, s.jsxs)(m.Ay, {
            theme: e,
            className: t,
            contentClassName: x.oe,
            children: [
                (0, s.jsx)(m.hE, { className: C.C2, children: I.intl.string(I.t.WAUOoK) }),
                (0, s.jsx)(c.$, { text: I.intl.string(I.t["uJWIj/"]), fullWidth: !0, onClick: this.handleOpenApp }),
            ],
        });
    }
    render() {
        return this.state.success
            ? this.renderSucceeded()
            : null != this.props.mfaTicket && "" !== this.props.mfaTicket
              ? this.renderMFA()
              : this.renderPasswordReset();
    }
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, l.cf)([y.default], () => ({
                mfaTicket: y.default.getMFATicket(),
                mfaMethods: y.default.getMFAMethods(),
            }));
            return (0, s.jsx)(v, { ...e, ...t });
        },
    },
);
