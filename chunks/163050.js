s.d(t, { A: () => _ });
var n = s(627968),
    r = s(64700),
    a = s(503698),
    i = s.n(a),
    l = s(492462),
    o = s(607399),
    c = s(17928),
    d = s(825484),
    u = s(821609),
    h = s(228366),
    p = s(830215),
    m = s(396681),
    N = s(15552),
    E = s(854378),
    y = s(701273),
    A = s(572469),
    g = s(976860),
    f = s(210714),
    w = s(495544),
    I = s(625494),
    x = s(652215),
    C = s(375708),
    v = s(818050);
c.Ay.initialize();
class S extends r.PureComponent {
    static defaultProps = { transitionTo: g.pX, replaceWith: g.bG };
    constructor(e) {
        super(e);
        const t =
            this.props.location?.search != null && "" !== this.props.location.search
                ? (0, l.parse)(this.props.location.search)
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
        (0, f.d)("reset_password");
    }
    handleSubmit = async (e) => {
        let { location: t, onLoginSuccess: s, source: n, resetToken: r } = this.props,
            { password: a, error: i } = this.state;
        if ((e.preventDefault(), 0 === a.length)) {
            this.setState({ error: C.intl.string(C.t.R98xD5) }), I._.dispatch(x.jej.WAVE_EMPHASIZE);
            return;
        }
        null != i && this.setState({ error: null });
        let l = r;
        if ((null != t && (l = (0, m.A)(t)), null != l)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: e,
                    sms: t,
                    webauthn: r,
                    ticket: i,
                    token: o,
                    totp: c,
                    backup: d,
                } = await p.A.resetPassword(l, a, n);
                e === p.W.MFA
                    ? h.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: i, sms: t, webauthn: r, totp: c, backup: d })
                    : null != s
                      ? s(o)
                      : (h.h.dispatch({ type: "LOGIN_SUCCESS", token: o }), this.handlePasswordChangeSuccess());
            } catch (e) {
                this.setState({ apiErrors: (0, N.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: s, mfaTicket: n, onLoginSuccess: r, resetToken: a, source: i } = this.props,
            { password: l } = this.state;
        if (0 === l.length) return h.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        let o = a;
        if ((null != s && (o = (0, m.A)(s)), null == o)) return h.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        this.setState({ working: !0 });
        try {
            let s = await p.A.resetPasswordMFAv2({ method: e, code: t, ticket: n, password: l, token: o, source: i });
            if (null != r) return void r(s);
            h.h.dispatch({ type: "LOGIN_SUCCESS", token: s }), this.handlePasswordChangeSuccess();
        } finally {
            this.setState({ working: !1 });
        }
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: e } = this.props;
        o.v1 || o.Fr ? this.setState({ success: !0 }) : e(x.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: e } = this.props;
        p.A.loginReset(), e(x.BVt.LOGIN, { source: "reset_password" });
    };
    handleOpenApp = () => {
        (0, y.A)("password_reset");
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
            o = t ?? this.renderError("password");
        return (0, n.jsxs)(E.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: i,
            className: l,
            children: [
                (0, n.jsx)("img", { alt: "", src: null == o ? s(79418) : s(579656), className: v.SX }),
                (0, n.jsx)(E.hE, { children: C.intl.string(C.t["1LV6Kq"]) }),
                (0, n.jsxs)(E.eB, {
                    className: v.QX,
                    children: [
                        (0, n.jsx)(E.pd, {
                            label: C.intl.string(C.t["8dM4FO"]),
                            className: v.SX,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: o,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, n.jsxs)(d.e, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, n.jsx)(u.$, { text: C.intl.string(C.t["FRep5/"]), type: "submit", loading: a }),
                                r &&
                                    (0, n.jsx)(u.$, {
                                        text: C.intl.string(C.t["ETE/oC"]),
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
        let { mfaTicket: e, mfaMethods: t, theme: s, authBoxClassName: r, width: a } = this.props,
            i = (e) => {
                let { mfaType: t, data: s } = e;
                return this.handleTokenSubmitMFAv2(t, s);
            };
        return (0, n.jsx)(E.Ay, {
            style: { padding: 0 },
            theme: s,
            className: r,
            children: (0, n.jsx)(A.t, {
                mfaFinish: i,
                mfaChallenge: { ticket: e, methods: t },
                onEarlyClose: () => {
                    h.h.dispatch({ type: "LOGIN_RESET" });
                },
                width: a ?? 480,
            }),
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, n.jsxs)(E.Ay, {
            theme: e,
            className: t,
            children: [
                (0, n.jsx)("img", { alt: "", src: s(79418), className: i()(v.SX, o.Fr ? v.QX : "") }),
                (0, n.jsx)(E.hE, { className: v.C2, children: C.intl.string(C.t.WAUOoK) }),
                (0, n.jsx)(u.$, { text: C.intl.string(C.t["uJWIj/"]), fullWidth: !0, onClick: this.handleOpenApp }),
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
    let t = (0, c.cf)([w.default], () => ({
        mfaTicket: w.default.getMFATicket(),
        mfaMethods: w.default.getMFAMethods(),
    }));
    return (0, n.jsx)(S, { ...e, ...t });
};
