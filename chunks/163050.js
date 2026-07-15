n.d(t, { A: () => _ });
var s = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    l = n(492462),
    o = n(607399),
    c = n(17928),
    d = n(825484),
    u = n(821609),
    h = n(228366),
    p = n(830215),
    m = n(396681),
    N = n(15552),
    E = n(854378),
    g = n(701273),
    f = n(572469),
    y = n(976860),
    A = n(210714),
    x = n(280450),
    w = n(625494),
    I = n(652215),
    C = n(375708),
    v = n(818050);
c.Ay.initialize();
class S extends r.PureComponent {
    static defaultProps = { transitionTo: y.pX, replaceWith: y.bG };
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
        (0, A.d0)("reset_password");
    }
    handleSubmit = async (e) => {
        let { location: t, onLoginSuccess: n, source: s, resetToken: r } = this.props,
            { password: a, error: i } = this.state;
        if ((e.preventDefault(), 0 === a.length)) {
            this.setState({ error: C.intl.string(C.t.R98xD5) }), w._.dispatch(I.jej.WAVE_EMPHASIZE);
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
                } = await p.A.resetPassword(l, a, s);
                e === p.W.MFA
                    ? h.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: i, sms: t, webauthn: r, totp: c, backup: d })
                    : null != n
                      ? n(o)
                      : (h.h.dispatch({ type: "LOGIN_SUCCESS", token: o }), this.handlePasswordChangeSuccess());
            } catch (e) {
                this.setState({ apiErrors: (0, N.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: n, mfaTicket: s, onLoginSuccess: r, resetToken: a, source: i } = this.props,
            { password: l } = this.state;
        if (0 === l.length) return h.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        let o = a;
        if ((null != n && (o = (0, m.A)(n)), null == o)) return h.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        this.setState({ working: !0 });
        try {
            let n = await p.A.resetPasswordMFAv2({ method: e, code: t, ticket: s, password: l, token: o, source: i });
            if (null != r) return void r(n);
            h.h.dispatch({ type: "LOGIN_SUCCESS", token: n }), this.handlePasswordChangeSuccess();
        } finally {
            this.setState({ working: !1 });
        }
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: e } = this.props;
        o.v1 || o.Fr ? this.setState({ success: !0 }) : e(I.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: e } = this.props;
        p.A.loginReset(), e(I.BVt.LOGIN, { source: "reset_password" });
    };
    handleOpenApp = () => {
        (0, g.A)("password_reset");
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
            o = t ?? this.renderError("password");
        return (0, s.jsxs)(E.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: i,
            className: l,
            children: [
                (0, s.jsx)("img", { alt: "", src: null == o ? n(79418) : n(579656), className: v.SX }),
                (0, s.jsx)(E.hE, { children: C.intl.string(C.t["1LV6Kq"]) }),
                (0, s.jsxs)(E.eB, {
                    className: v.QX,
                    children: [
                        (0, s.jsx)(E.pd, {
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
                        (0, s.jsxs)(d.e, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, s.jsx)(u.$, { text: C.intl.string(C.t["FRep5/"]), type: "submit", loading: a }),
                                r &&
                                    (0, s.jsx)(u.$, {
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
        let { mfaTicket: e, mfaMethods: t, theme: n, authBoxClassName: r, width: a } = this.props,
            i = (e) => {
                let { mfaType: t, data: n } = e;
                return this.handleTokenSubmitMFAv2(t, n);
            };
        return (0, s.jsx)(E.Ay, {
            style: { padding: 0 },
            theme: n,
            className: r,
            children: (0, s.jsx)(f.t, {
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
        return (0, s.jsxs)(E.Ay, {
            theme: e,
            className: t,
            children: [
                (0, s.jsx)("img", { alt: "", src: n(79418), className: i()(v.SX, o.Fr ? v.QX : "") }),
                (0, s.jsx)(E.hE, { className: v.C2, children: C.intl.string(C.t.WAUOoK) }),
                (0, s.jsx)(u.$, { text: C.intl.string(C.t["uJWIj/"]), fullWidth: !0, onClick: this.handleOpenApp }),
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
    let t = (0, c.cf)([x.default], () => ({
        mfaTicket: x.default.getMFATicket(),
        mfaMethods: x.default.getMFAMethods(),
    }));
    return (0, s.jsx)(S, { ...e, ...t });
};
