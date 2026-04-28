s.d(e, { A: () => N });
var r = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    l = s(492462),
    h = s(607399),
    o = s(17928),
    d = s(825484),
    c = s(821609),
    p = s(228366),
    u = s(830215),
    m = s(396681),
    g = s(15552),
    S = s(854378),
    A = s(701273),
    k = s(572469),
    f = s(976860),
    w = s(210714),
    E = s(495544),
    x = s(625494),
    y = s(652215),
    j = s(985018),
    C = s(818050);
o.Ay.initialize();
class T extends n.PureComponent {
    static defaultProps = { transitionTo: f.pX, replaceWith: f.bG };
    constructor(t) {
        super(t);
        const e =
            this.props.location?.search != null && "" !== this.props.location.search
                ? (0, l.parse)(this.props.location.search)
                : null;
        this.state = {
            method: "",
            password: "",
            code: "",
            apiErrors: {},
            error: null,
            hasCancel: null != e && null != e.from_login,
            working: !1,
            success: !1,
        };
    }
    componentDidMount() {
        (0, w.d)("reset_password");
    }
    handleSubmit = async (t) => {
        let { location: e, onLoginSuccess: s, source: r, resetToken: n } = this.props,
            { password: a, error: i } = this.state;
        if ((t.preventDefault(), 0 === a.length)) {
            this.setState({ error: j.intl.string(j.t.R98xD5) }), x._.dispatch(y.jej.WAVE_EMPHASIZE);
            return;
        }
        null != i && this.setState({ error: null });
        let l = n;
        if ((null != e && (l = (0, m.A)(e)), null != l)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: t,
                    sms: e,
                    webauthn: n,
                    ticket: i,
                    token: h,
                    totp: o,
                    backup: d,
                } = await u.A.resetPassword(l, a, r);
                t === u.W.MFA
                    ? p.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: i, sms: e, webauthn: n, totp: o, backup: d })
                    : null != s
                      ? s(h)
                      : (p.h.dispatch({ type: "LOGIN_SUCCESS", token: h }), this.handlePasswordChangeSuccess());
            } catch (t) {
                this.setState({ apiErrors: (0, g.p)(t) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (t, e) => {
        let { location: s, mfaTicket: r, onLoginSuccess: n, resetToken: a, source: i } = this.props,
            { password: l } = this.state;
        if (0 === l.length) return p.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        let h = a;
        if ((null != s && (h = (0, m.A)(s)), null == h)) return p.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        this.setState({ working: !0 });
        try {
            let s = await u.A.resetPasswordMFAv2({ method: t, code: e, ticket: r, password: l, token: h, source: i });
            if (null != n) return void n(s);
            p.h.dispatch({ type: "LOGIN_SUCCESS", token: s }), this.handlePasswordChangeSuccess();
        } finally {
            this.setState({ working: !1 });
        }
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: t } = this.props;
        h.v1 || h.Fr ? this.setState({ success: !0 }) : t(y.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: t } = this.props;
        u.A.loginReset(), t(y.BVt.LOGIN, { source: "reset_password" });
    };
    handleOpenApp = () => {
        (0, A.A)("password_reset");
    };
    hasError = (t) => null != this.state.apiErrors[t] || null != this.state.error;
    renderError = (t) => {
        let { apiErrors: e } = this.state;
        if (this.hasError(t)) {
            let s = e[t];
            return Array.isArray(s) ? s[0] : s;
        }
        return null;
    };
    renderPasswordReset() {
        let { password: t, error: e, hasCancel: n, working: a } = this.state,
            { theme: i, authBoxClassName: l } = this.props,
            h = e ?? this.renderError("password");
        return (0, r.jsxs)(S.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: i,
            className: l,
            children: [
                (0, r.jsx)("img", { alt: "", src: null == h ? s(79418) : s(579656), className: C.SX }),
                (0, r.jsx)(S.hE, { children: j.intl.string(j.t["1LV6Kq"]) }),
                (0, r.jsxs)(S.eB, {
                    className: C.QX,
                    children: [
                        (0, r.jsx)(S.pd, {
                            label: j.intl.string(j.t["8dM4FO"]),
                            className: C.SX,
                            name: "password",
                            value: t,
                            onChange: (t) => this.setState({ password: t }),
                            error: h,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, r.jsxs)(d.e, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(c.$, { text: j.intl.string(j.t["FRep5/"]), type: "submit", loading: a }),
                                n &&
                                    (0, r.jsx)(c.$, {
                                        text: j.intl.string(j.t["ETE/oC"]),
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
        let { mfaTicket: t, mfaMethods: e, theme: s, authBoxClassName: n, width: a } = this.props,
            i = (t) => {
                let { mfaType: e, data: s } = t;
                return this.handleTokenSubmitMFAv2(e, s);
            };
        return (0, r.jsx)(S.Ay, {
            style: { padding: 0 },
            theme: s,
            className: n,
            children: (0, r.jsx)(k.t, {
                mfaFinish: i,
                mfaChallenge: { ticket: t, methods: e },
                onEarlyClose: () => {
                    p.h.dispatch({ type: "LOGIN_RESET" });
                },
                width: a ?? 480,
            }),
        });
    }
    renderSucceeded() {
        let { theme: t, authBoxClassName: e } = this.props;
        return (0, r.jsxs)(S.Ay, {
            theme: t,
            className: e,
            children: [
                (0, r.jsx)("img", { alt: "", src: s(79418), className: i()(C.SX, h.Fr ? C.QX : "") }),
                (0, r.jsx)(S.hE, { className: C.C2, children: j.intl.string(j.t.WAUOoK) }),
                (0, r.jsx)(c.$, { text: j.intl.string(j.t["uJWIj/"]), fullWidth: !0, onClick: this.handleOpenApp }),
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
let N = function (t) {
    let e = (0, o.cf)([E.default], () => ({
        mfaTicket: E.default.getMFATicket(),
        mfaMethods: E.default.getMFAMethods(),
    }));
    return (0, r.jsx)(T, { ...t, ...e });
};
