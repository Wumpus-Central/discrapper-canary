n.d(t, { Z: () => E }), n(35282);
var r,
    s = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(593473),
    c = n(873546),
    u = n(442837),
    d = n(570140),
    p = n(893776),
    h = n(129293),
    f = n(254942),
    m = n(388905),
    g = n(17894),
    y = n(124860),
    b = n(703656),
    w = n(108427),
    S = n(314897),
    O = n(585483),
    C = n(981631),
    x = n(388032),
    j = n(881488);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
u.ZP.initialize();
class P extends (r = i.PureComponent) {
    componentDidMount() {
        (0, w.e)("reset_password");
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: r, working: i } = this.state,
            { theme: a, authBoxClassName: l } = this.props,
            o = null != t ? t : this.renderError("password");
        return (0, s.jsxs)(m.ZP, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: a,
            className: l,
            children: [
                (0, s.jsx)("img", {
                    alt: "",
                    src: null == o ? n(26230) : n(935227),
                    className: j.marginBottom20,
                }),
                (0, s.jsx)(m.Dx, { children: x.intl.string(x.t["1LV6Ki"]) }),
                (0, s.jsxs)(m.gO, {
                    className: j.marginTop20,
                    children: [
                        (0, s.jsx)(m.II, {
                            label: x.intl.string(x.t["8dM4FB"]),
                            className: j.marginBottom20,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: o,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, s.jsx)(m.zx, {
                            type: "submit",
                            submitting: i,
                            children: x.intl.string(x.t["FRep5+"]),
                        }),
                        r
                            ? (0, s.jsx)(m.zx, {
                                  className: j.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: m.zx.Colors.PRIMARY,
                                  children: x.intl.string(x.t["ETE/oK"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let { mfaTicket: e, mfaMethods: t, theme: n, authBoxClassName: r, width: i } = this.props;
        return (0, s.jsx)(m.ZP, {
            style: { padding: 0 },
            theme: n,
            className: r,
            children: (0, s.jsx)(y.Cd, {
                mfaFinish: (e) => {
                    let { mfaType: t, data: n } = e;
                    return this.handleTokenSubmitMFAv2(t, n);
                },
                mfaChallenge: {
                    ticket: e,
                    methods: t,
                },
                onEarlyClose: () => {
                    d.Z.dispatch({ type: "LOGIN_RESET" });
                },
                width: null != i ? i : 480,
            }),
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, s.jsxs)(m.ZP, {
            theme: e,
            className: t,
            children: [
                (0, s.jsx)("img", {
                    alt: "",
                    src: n(26230),
                    className: l()(j.marginBottom20, c.tq ? j.marginTop20 : ""),
                }),
                (0, s.jsx)(m.Dx, {
                    className: j.marginBottom40,
                    children: x.intl.string(x.t.WAUOoK),
                }),
                (0, s.jsx)(m.zx, {
                    onClick: this.handleOpenApp,
                    children: x.intl.string(x.t.uJWIj4),
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
    constructor(e) {
        var t;
        super(e),
            v(this, "handleSubmit", async (e) => {
                let { location: t, onLoginSuccess: n, source: r, resetToken: s } = this.props,
                    { password: i, error: a } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    this.setState({ error: x.intl.string(x.t.R98xDw) }), O.S.dispatch(C.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != a && this.setState({ error: null });
                let l = s;
                if ((null != t && (l = (0, h.Z)(t)), null != l)) {
                    this.setState({ working: !0 });
                    try {
                        let {
                            result: e,
                            sms: t,
                            webauthn: s,
                            ticket: a,
                            token: o,
                            totp: c,
                            backup: u,
                        } = await p.Z.resetPassword(l, i, r);
                        e === p.c.MFA
                            ? d.Z.dispatch({
                                  type: "LOGIN_MFA_STEP",
                                  ticket: a,
                                  sms: t,
                                  webauthn: s,
                                  totp: c,
                                  backup: u,
                              })
                            : null != n
                              ? n(o)
                              : (d.Z.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: o,
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (e) {
                        this.setState({ apiErrors: (0, f.p)(e) });
                    }
                    this.setState({ working: !1 });
                }
            }),
            v(this, "handleTokenSubmitMFAv2", async (e, t) => {
                let { location: n, mfaTicket: r, onLoginSuccess: s, resetToken: i, source: a } = this.props,
                    { password: l } = this.state;
                if (0 === l.length) return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
                let o = i;
                if ((null != n && (o = (0, h.Z)(n)), null == o))
                    return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
                this.setState({ working: !0 });
                try {
                    let n = await p.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: r,
                        password: l,
                        token: o,
                        source: a,
                    });
                    if (null != s) return void s(n);
                    d.Z.dispatch({
                        type: "LOGIN_SUCCESS",
                        token: n,
                    }),
                        this.handlePasswordChangeSuccess();
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            v(this, "handlePasswordChangeSuccess", () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) return void this.setState({ success: !0 });
                e(C.Z5c.APP);
            }),
            v(this, "handleGoToLogin", () => {
                let { transitionTo: e } = this.props;
                p.Z.loginReset(), e(C.Z5c.LOGIN, { source: "reset_password" });
            }),
            v(this, "handleOpenApp", () => {
                (0, g.Z)("password_reset");
            }),
            v(this, "hasError", (e) => null != this.state.apiErrors[e] || null != this.state.error),
            v(this, "renderError", (e) => {
                let { apiErrors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            });
        let n =
            (null == (t = this.props.location) ? void 0 : t.search) != null && "" !== this.props.location.search
                ? (0, o.parse)(this.props.location.search)
                : null;
        this.state = {
            method: "",
            password: "",
            code: "",
            apiErrors: {},
            error: null,
            hasCancel: null != n && null != n.from_login,
            working: !1,
            success: !1,
        };
    }
}
v(P, "defaultProps", {
    transitionTo: b.uL,
    replaceWith: b.dL,
});
let E = function (e) {
    let t = (0, u.cj)([S.default], () => ({
        mfaTicket: S.default.getMFATicket(),
        mfaMethods: S.default.getMFAMethods(),
    }));
    return (0, s.jsx)(
        P,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        v(e, t, n[t]);
                    });
            }
            return e;
        })({}, e, t),
    );
};
