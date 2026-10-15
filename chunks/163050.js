s.d(t, { A: () => _ });
var n = s(477900),
    r = s(582128),
    a = s(492462),
    i = s(607399),
    l = s(17928),
    o = s(825484),
    c = s(821609),
    d = s(73153),
    u = s(830215),
    h = s(396681),
    p = s(15552),
    m = s(854378),
    N = s(701273),
    E = s(572469),
    g = s(976860),
    f = s(210714),
    A = s(280450),
    y = s(625494),
    x = s(652215),
    I = s(105292),
    w = s(498206),
    C = s(221851);
l.Ay.initialize();
class v extends r.PureComponent {
    static defaultProps = { transitionTo: g.pX, replaceWith: g.bG };
    constructor(e) {
        super(e);
        const t =
            this.props.location?.search != null && "" !== this.props.location.search
                ? (0, a.parse)(this.props.location.search)
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
        let { location: t, source: s, resetToken: n } = this.props,
            { password: r, error: a } = this.state;
        if ((e.preventDefault(), 0 === r.length)) {
            (this.setState({ error: I.intl.string(I.t.R98xD5) }), y._.dispatch(x.jej.WAVE_EMPHASIZE));
            return;
        }
        null != a && this.setState({ error: null });
        let i = n;
        if ((null != t && (i = (0, h.A)(t)), null != i)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: e,
                    sms: t,
                    webauthn: n,
                    ticket: a,
                    token: l,
                    totp: o,
                    backup: c,
                } = await u.A.resetPassword(i, r, s);
                e === u.W.MFA
                    ? d.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: a, sms: t, webauthn: n, totp: o, backup: c })
                    : this.handlePasswordResetComplete(l);
            } catch (e) {
                this.setState({ apiErrors: (0, p.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: s, mfaTicket: n, resetToken: r, source: a } = this.props,
            { password: i } = this.state;
        if (0 === i.length) return (d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject());
        let l = r;
        if ((null != s && (l = (0, h.A)(s)), null == l))
            return (d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject());
        this.setState({ working: !0 });
        try {
            let s = await u.A.resetPasswordMFAv2({ method: e, code: t, ticket: n, password: i, token: l, source: a });
            this.handlePasswordResetComplete(s);
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
        (u.A.loginReset(), t(x.BVt.LOGIN, { source: "reset_password", state: { passwordReset: !0 } }));
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: e } = this.props;
        i.v1 || i.Fr ? this.setState({ success: !0 }) : e(x.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: e } = this.props;
        (u.A.loginReset(), e(x.BVt.LOGIN, { source: "reset_password" }));
    };
    handleOpenApp = () => {
        (0, N.A)("password_reset");
    };
    hasError = (e) => null != this.state.apiErrors[e] || null != this.state.error;
    renderError = (e) => {
        let { apiErrors: t } = this.state;
        if (this.hasError(e)) {
            let s = t[e];
            return Array.isArray(s) ? s[0] : s;
        }
        return null;
    };
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: r, working: a } = this.state,
            { theme: i, authBoxClassName: l } = this.props,
            d = t ?? this.renderError("password");
        return (0, n.jsxs)(m.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: i,
            className: l,
            children: [
                (0, n.jsx)("img", { alt: "", src: null == d ? s(79418) : s(579656), className: C.SX }),
                (0, n.jsx)(m.hE, { children: I.intl.string(I.t["1LV6Kq"]) }),
                (0, n.jsxs)(m.eB, {
                    className: C.QX,
                    children: [
                        (0, n.jsx)(m.pd, {
                            label: I.intl.string(I.t["8dM4FO"]),
                            className: C.SX,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: d,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, n.jsxs)(o.e, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, n.jsx)(c.$, { text: I.intl.string(I.t["FRep5/"]), type: "submit", loading: a }),
                                r &&
                                    (0, n.jsx)(c.$, {
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
        let { mfaTicket: e, mfaMethods: t, theme: s, authBoxClassName: r } = this.props,
            a = (e) => {
                let { mfaType: t, data: s } = e;
                return this.handleTokenSubmitMFAv2(t, s);
            };
        return (0, n.jsx)(m.Ay, {
            style: { padding: 0 },
            theme: s,
            className: r,
            children: (0, n.jsx)(E.t, {
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
        return (0, n.jsxs)(m.Ay, {
            theme: e,
            className: t,
            contentClassName: w.oe,
            children: [
                (0, n.jsx)(m.hE, { className: C.C2, children: I.intl.string(I.t.WAUOoK) }),
                (0, n.jsx)(c.$, { text: I.intl.string(I.t["uJWIj/"]), fullWidth: !0, onClick: this.handleOpenApp }),
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
let _ = function (e) {
    let t = (0, l.cf)([A.default], () => ({
        mfaTicket: A.default.getMFATicket(),
        mfaMethods: A.default.getMFAMethods(),
    }));
    return (0, n.jsx)(v, { ...e, ...t });
};
