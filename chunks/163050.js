n.d(t, { A: () => S });
var s = n(477900),
    r = n(582128),
    a = n(492462),
    i = n(607399),
    l = n(17928),
    o = n(825484),
    c = n(821609),
    d = n(73153),
    u = n(830215),
    h = n(396681),
    p = n(15552),
    m = n(854378),
    N = n(701273),
    E = n(572469),
    f = n(976860),
    g = n(210714),
    y = n(280450),
    A = n(625494),
    x = n(652215),
    I = n(375708),
    w = n(498206),
    C = n(221851);
l.Ay.initialize();
class v extends r.PureComponent {
    static defaultProps = { transitionTo: f.pX, replaceWith: f.bG };
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
        (0, g.d0)("reset_password");
    }
    handleSubmit = async (e) => {
        let { location: t, onLoginSuccess: n, source: s, resetToken: r } = this.props,
            { password: a, error: i } = this.state;
        if ((e.preventDefault(), 0 === a.length)) {
            (this.setState({ error: I.intl.string(I.t.R98xD5) }), A._.dispatch(x.jej.WAVE_EMPHASIZE));
            return;
        }
        null != i && this.setState({ error: null });
        let l = r;
        if ((null != t && (l = (0, h.A)(t)), null != l)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: e,
                    sms: t,
                    webauthn: r,
                    ticket: i,
                    token: o,
                    totp: c,
                    backup: h,
                } = await u.A.resetPassword(l, a, s);
                e === u.W.MFA
                    ? d.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: i, sms: t, webauthn: r, totp: c, backup: h })
                    : null != n
                      ? n(o)
                      : (d.h.dispatch({ type: "LOGIN_SUCCESS", token: o }), this.handlePasswordChangeSuccess());
            } catch (e) {
                this.setState({ apiErrors: (0, p.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: n, mfaTicket: s, onLoginSuccess: r, resetToken: a, source: i } = this.props,
            { password: l } = this.state;
        if (0 === l.length) return (d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject());
        let o = a;
        if ((null != n && (o = (0, h.A)(n)), null == o))
            return (d.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject());
        this.setState({ working: !0 });
        try {
            let n = await u.A.resetPasswordMFAv2({ method: e, code: t, ticket: s, password: l, token: o, source: i });
            if (null != r) return void r(n);
            (d.h.dispatch({ type: "LOGIN_SUCCESS", token: n }), this.handlePasswordChangeSuccess());
        } finally {
            this.setState({ working: !1 });
        }
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
            contentClassName: w.oe,
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
let S = function (e) {
    let t = (0, l.cf)([y.default], () => ({
        mfaTicket: y.default.getMFATicket(),
        mfaMethods: y.default.getMFAMethods(),
    }));
    return (0, s.jsx)(v, { ...e, ...t });
};
