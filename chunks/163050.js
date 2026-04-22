s.d(t, { A: () => v });
var r = s(627968),
    n = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(492462),
    o = s(607399),
    c = s(311907),
    h = s(825484),
    d = s(821609),
    u = s(73153),
    p = s(830215),
    m = s(396681),
    C = s(15552),
    f = s(854378),
    A = s(701273),
    g = s(720353),
    y = s(976860),
    x = s(210714),
    E = s(961350),
    N = s(203982),
    S = s(652215),
    w = s(985018),
    k = s(818050);
c.Ay.initialize();
class j extends n.PureComponent {
    static defaultProps = { transitionTo: y.pX, replaceWith: y.bG };
    constructor(e) {
        super(e);
        const t =
            this.props.location?.search != null && "" !== this.props.location.search
                ? (0, i.parse)(this.props.location.search)
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
        (0, x.d)("reset_password");
    }
    handleSubmit = async (e) => {
        let { location: t, onLoginSuccess: s, source: r, resetToken: n } = this.props,
            { password: l, error: a } = this.state;
        if ((e.preventDefault(), 0 === l.length)) {
            this.setState({ error: w.intl.string(w.t.R98xD5) }), N._.dispatch(S.jej.WAVE_EMPHASIZE);
            return;
        }
        null != a && this.setState({ error: null });
        let i = n;
        if ((null != t && (i = (0, m.A)(t)), null != i)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: e,
                    sms: t,
                    webauthn: n,
                    ticket: a,
                    token: o,
                    totp: c,
                    backup: h,
                } = await p.A.resetPassword(i, l, r);
                e === p.W.MFA
                    ? u.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: a, sms: t, webauthn: n, totp: c, backup: h })
                    : null != s
                      ? s(o)
                      : (u.h.dispatch({ type: "LOGIN_SUCCESS", token: o }), this.handlePasswordChangeSuccess());
            } catch (e) {
                this.setState({ apiErrors: (0, C.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: s, mfaTicket: r, onLoginSuccess: n, resetToken: l, source: a } = this.props,
            { password: i } = this.state;
        if (0 === i.length) return u.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        let o = l;
        if ((null != s && (o = (0, m.A)(s)), null == o)) return u.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        this.setState({ working: !0 });
        try {
            let s = await p.A.resetPasswordMFAv2({ method: e, code: t, ticket: r, password: i, token: o, source: a });
            if (null != n) return void n(s);
            u.h.dispatch({ type: "LOGIN_SUCCESS", token: s }), this.handlePasswordChangeSuccess();
        } finally {
            this.setState({ working: !1 });
        }
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: e } = this.props;
        o.v1 || o.Fr ? this.setState({ success: !0 }) : e(S.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: e } = this.props;
        p.A.loginReset(), e(S.BVt.LOGIN, { source: "reset_password" });
    };
    handleOpenApp = () => {
        (0, A.A)("password_reset");
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
        let { password: e, error: t, hasCancel: n, working: l } = this.state,
            { theme: a, authBoxClassName: i } = this.props,
            o = t ?? this.renderError("password");
        return (0, r.jsxs)(f.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: a,
            className: i,
            children: [
                (0, r.jsx)("img", { alt: "", src: null == o ? s(79418) : s(579656), className: k.SX }),
                (0, r.jsx)(f.hE, { children: w.intl.string(w.t["1LV6Kq"]) }),
                (0, r.jsxs)(f.eB, {
                    className: k.QX,
                    children: [
                        (0, r.jsx)(f.pd, {
                            label: w.intl.string(w.t["8dM4FO"]),
                            className: k.SX,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: o,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, r.jsxs)(h.e, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(d.$, { text: w.intl.string(w.t["FRep5/"]), type: "submit", loading: l }),
                                n &&
                                    (0, r.jsx)(d.$, {
                                        text: w.intl.string(w.t["ETE/oC"]),
                                        variant: "secondary",
                                        onClick: this.handleGoToLogin,
                                        loading: l,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let { mfaTicket: e, mfaMethods: t, theme: s, authBoxClassName: n, width: l } = this.props,
            a = (e) => {
                let { mfaType: t, data: s } = e;
                return this.handleTokenSubmitMFAv2(t, s);
            };
        return (0, r.jsx)(f.Ay, {
            style: { padding: 0 },
            theme: s,
            className: n,
            children: (0, r.jsx)(g.t, {
                mfaFinish: a,
                mfaChallenge: { ticket: e, methods: t },
                onEarlyClose: () => {
                    u.h.dispatch({ type: "LOGIN_RESET" });
                },
                width: l ?? 480,
            }),
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, r.jsxs)(f.Ay, {
            theme: e,
            className: t,
            children: [
                (0, r.jsx)("img", { alt: "", src: s(79418), className: a()(k.SX, o.Fr ? k.QX : "") }),
                (0, r.jsx)(f.hE, { className: k.C2, children: w.intl.string(w.t.WAUOoK) }),
                (0, r.jsx)(d.$, { text: w.intl.string(w.t["uJWIj/"]), fullWidth: !0, onClick: this.handleOpenApp }),
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
let v = function (e) {
    let t = (0, c.cf)([E.default], () => ({
        mfaTicket: E.default.getMFATicket(),
        mfaMethods: E.default.getMFAMethods(),
    }));
    return (0, r.jsx)(j, { ...e, ...t });
};
