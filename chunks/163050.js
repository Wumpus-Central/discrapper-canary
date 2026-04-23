"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(492462),
    o = n(607399),
    d = n(17928),
    c = n(825484),
    u = n(821609),
    _ = n(228366),
    h = n(830215),
    p = n(396681),
    m = n(15552),
    g = n(854378),
    x = n(701273),
    f = n(572469),
    A = n(976860),
    E = n(210714),
    I = n(495544),
    v = n(625494),
    j = n(652215),
    C = n(985018),
    N = n(818050);
d.Ay.initialize();
class T extends s.PureComponent {
    static defaultProps = { transitionTo: A.pX, replaceWith: A.bG };
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
        (0, E.d)("reset_password");
    }
    handleSubmit = async (e) => {
        let { location: t, onLoginSuccess: n, source: i, resetToken: s } = this.props,
            { password: l, error: r } = this.state;
        if ((e.preventDefault(), 0 === l.length)) {
            this.setState({ error: C.intl.string(C.t.R98xD5) }), v._.dispatch(j.jej.WAVE_EMPHASIZE);
            return;
        }
        null != r && this.setState({ error: null });
        let a = s;
        if ((null != t && (a = (0, p.A)(t)), null != a)) {
            this.setState({ working: !0 });
            try {
                let {
                    result: e,
                    sms: t,
                    webauthn: s,
                    ticket: r,
                    token: o,
                    totp: d,
                    backup: c,
                } = await h.A.resetPassword(a, l, i);
                e === h.W.MFA
                    ? _.h.dispatch({ type: "LOGIN_MFA_STEP", ticket: r, sms: t, webauthn: s, totp: d, backup: c })
                    : null != n
                      ? n(o)
                      : (_.h.dispatch({ type: "LOGIN_SUCCESS", token: o }), this.handlePasswordChangeSuccess());
            } catch (e) {
                this.setState({ apiErrors: (0, m.p)(e) });
            }
            this.setState({ working: !1 });
        }
    };
    handleTokenSubmitMFAv2 = async (e, t) => {
        let { location: n, mfaTicket: i, onLoginSuccess: s, resetToken: l, source: r } = this.props,
            { password: a } = this.state;
        if (0 === a.length) return _.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        let o = l;
        if ((null != n && (o = (0, p.A)(n)), null == o)) return _.h.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
        this.setState({ working: !0 });
        try {
            let n = await h.A.resetPasswordMFAv2({ method: e, code: t, ticket: i, password: a, token: o, source: r });
            if (null != s) return void s(n);
            _.h.dispatch({ type: "LOGIN_SUCCESS", token: n }), this.handlePasswordChangeSuccess();
        } finally {
            this.setState({ working: !1 });
        }
    };
    handlePasswordChangeSuccess = () => {
        let { replaceWith: e } = this.props;
        o.v1 || o.Fr ? this.setState({ success: !0 }) : e(j.BVt.APP);
    };
    handleGoToLogin = () => {
        let { transitionTo: e } = this.props;
        h.A.loginReset(), e(j.BVt.LOGIN, { source: "reset_password" });
    };
    handleOpenApp = () => {
        (0, x.A)("password_reset");
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
        let { password: e, error: t, hasCancel: s, working: l } = this.state,
            { theme: r, authBoxClassName: a } = this.props,
            o = t ?? this.renderError("password");
        return (0, i.jsxs)(g.Ay, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: r,
            className: a,
            children: [
                (0, i.jsx)("img", { alt: "", src: null == o ? n(79418) : n(579656), className: N.SX }),
                (0, i.jsx)(g.hE, { children: C.intl.string(C.t["1LV6Kq"]) }),
                (0, i.jsxs)(g.eB, {
                    className: N.QX,
                    children: [
                        (0, i.jsx)(g.pd, {
                            label: C.intl.string(C.t["8dM4FO"]),
                            className: N.SX,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: o,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, i.jsxs)(c.e, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(u.$, { text: C.intl.string(C.t["FRep5/"]), type: "submit", loading: l }),
                                s &&
                                    (0, i.jsx)(u.$, {
                                        text: C.intl.string(C.t["ETE/oC"]),
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
        let { mfaTicket: e, mfaMethods: t, theme: n, authBoxClassName: s, width: l } = this.props,
            r = (e) => {
                let { mfaType: t, data: n } = e;
                return this.handleTokenSubmitMFAv2(t, n);
            };
        return (0, i.jsx)(g.Ay, {
            style: { padding: 0 },
            theme: n,
            className: s,
            children: (0, i.jsx)(f.t, {
                mfaFinish: r,
                mfaChallenge: { ticket: e, methods: t },
                onEarlyClose: () => {
                    _.h.dispatch({ type: "LOGIN_RESET" });
                },
                width: l ?? 480,
            }),
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, i.jsxs)(g.Ay, {
            theme: e,
            className: t,
            children: [
                (0, i.jsx)("img", { alt: "", src: n(79418), className: r()(N.SX, o.Fr ? N.QX : "") }),
                (0, i.jsx)(g.hE, { className: N.C2, children: C.intl.string(C.t.WAUOoK) }),
                (0, i.jsx)(u.$, { text: C.intl.string(C.t["uJWIj/"]), fullWidth: !0, onClick: this.handleOpenApp }),
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
    let t = (0, d.cf)([I.default], () => ({
        mfaTicket: I.default.getMFATicket(),
        mfaMethods: I.default.getMFAMethods(),
    }));
    return (0, i.jsx)(T, { ...e, ...t });
};
