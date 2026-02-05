s.d(t, { A: () => k });
var r = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    l = s(492462),
    o = s(607399),
    h = s(311907),
    c = s(397927),
    d = s(73153),
    u = s(830215),
    p = s(396681),
    m = s(15552),
    C = s(854378),
    A = s(701273),
    g = s(720353),
    E = s(976860),
    S = s(210714),
    f = s(961350),
    x = s(203982),
    y = s(652215),
    w = s(985018),
    N = s(473169);
h.Ay.initialize();
class j extends n.PureComponent {
    static defaultProps = { transitionTo: E.pX, replaceWith: E.bG };
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
        (0, S.d)("reset_password");
    }
    handleSubmit = async (e) => {
        let { location: t, onLoginSuccess: s, source: r, resetToken: n } = this.props,
            { password: a, error: i } = this.state;
        if ((e.preventDefault(), 0 === a.length)) {
            this.setState({ error: w.intl.string(w.t.R98xD5) }), x._.dispatch(y.jej.WAVE_EMPHASIZE);
            return;
        }
        null != i && this.setState({ error: null });
        let l = n;
        if ((null != t && (l = (0, p.A)(t)), null != l)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: e,
                    sms: t,
                    webauthn: n,
                    ticket: i,
                    token: o,
                    totp: h,
                    backup: c,
                } = await u.A.resetPassword(l, a, r);
                e === u.W.MFA
                    ? d.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: i, sms: t, webauthn: n, totp: h, backup: c })
                    : null != s
                      ? s(o)
                      : (d.h.dispatch({ type: "LOGIN_SUCCESS", token: o }), this.handlePasswordChangeSuccess());
            } catch (e) {
                this.setState({ apiErrors: (0, m.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: s, mfaTicket: r, onLoginSuccess: n, resetToken: a, source: i } = this.props,
            { password: l } = this.state;
        if (0 === l.length) return d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        let o = a;
        if ((null != s && (o = (0, p.A)(s)), null == o)) return d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        this.setState({ working: !0 });
        try {
            let s = await u.A.resetPasswordMFAv2({ method: e, code: t, ticket: r, password: l, token: o, source: i });
            if (null != n) return void n(s);
            d.h.dispatch({ type: "LOGIN_SUCCESS", token: s }), this.handlePasswordChangeSuccess();
        } finally {
            this.setState({ working: !1 });
        }
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: e } = this.props;
        o.v1 || o.Fr ? this.setState({ success: !0 }) : e(y.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: e } = this.props;
        u.A.loginReset(), e(y.BVt.LOGIN, { source: "reset_password" });
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
        let { password: e, error: t, hasCancel: n, working: a } = this.state,
            { theme: i, authBoxClassName: l } = this.props,
            o = t ?? this.renderError("password");
        return (0, r.jsxs)(C.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: i,
            className: l,
            children: [
                (0, r.jsx)("img", { alt: "", src: null == o ? s(79418) : s(579656), className: N.SX }),
                (0, r.jsx)(C.hE, { children: w.intl.string(w.t["1LV6Kq"]) }),
                (0, r.jsxs)(C.eB, {
                    className: N.QX,
                    children: [
                        (0, r.jsx)(C.pd, {
                            label: w.intl.string(w.t["8dM4FO"]),
                            className: N.SX,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: o,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, r.jsxs)(c.ButtonGroup, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(c.Button, {
                                    text: w.intl.string(w.t["FRep5/"]),
                                    type: "submit",
                                    loading: a,
                                }),
                                n &&
                                    (0, r.jsx)(c.Button, {
                                        text: w.intl.string(w.t["ETE/oC"]),
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
        let { mfaTicket: e, mfaMethods: t, theme: s, authBoxClassName: n, width: a } = this.props,
            i = (e) => {
                let { mfaType: t, data: s } = e;
                return this.handleTokenSubmitMFAv2(t, s);
            };
        return (0, r.jsx)(C.Ay, {
            style: { padding: 0 },
            theme: s,
            className: n,
            children: (0, r.jsx)(g.t, {
                mfaFinish: i,
                mfaChallenge: { ticket: e, methods: t },
                onEarlyClose: () => {
                    d.h.dispatch({ type: "LOGIN_RESET" });
                },
                width: a ?? 480,
            }),
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, r.jsxs)(C.Ay, {
            theme: e,
            className: t,
            children: [
                (0, r.jsx)("img", { alt: "", src: s(79418), className: i()(N.SX, o.Fr ? N.QX : "") }),
                (0, r.jsx)(C.hE, { className: N.C2, children: w.intl.string(w.t.WAUOoK) }),
                (0, r.jsx)(c.Button, {
                    text: w.intl.string(w.t["uJWIj/"]),
                    fullWidth: !0,
                    onClick: this.handleOpenApp,
                }),
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
let k = function (e) {
    let t = (0, h.cf)([f.default], () => ({
        mfaTicket: f.default.getMFATicket(),
        mfaMethods: f.default.getMFAMethods(),
    }));
    return (0, r.jsx)(j, { ...e, ...t });
};
