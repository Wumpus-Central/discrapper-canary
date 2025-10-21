r.d(t, { Z: () => E }), r(35282);
var n,
    s = r(951288),
    i = r(647438),
    o = r(120356),
    a = r.n(o),
    l = r(593473),
    c = r(873546),
    u = r(442837),
    d = r(570140),
    h = r(893776),
    p = r(129293),
    f = r(254942),
    m = r(388905),
    g = r(17894),
    y = r(124860),
    C = r(703656),
    O = r(108427),
    b = r(314897),
    j = r(585483),
    w = r(981631),
    S = r(388032),
    v = r(197571);
function x(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
u.ZP.initialize();
class P extends (n = i.PureComponent) {
    componentDidMount() {
        (0, O.e)("reset_password");
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: n, working: i } = this.state,
            { theme: o, authBoxClassName: a } = this.props,
            l = null != t ? t : this.renderError("password");
        return (0, s.jsxs)(m.ZP, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: o,
            className: a,
            children: [
                (0, s.jsx)("img", {
                    alt: "",
                    src: null == l ? r(26230) : r(935227),
                    className: v.marginBottom20,
                }),
                (0, s.jsx)(m.Dx, { children: S.intl.string(S.t["1LV6Kq"]) }),
                (0, s.jsxs)(m.gO, {
                    className: v.marginTop20,
                    children: [
                        (0, s.jsx)(m.II, {
                            label: S.intl.string(S.t["8dM4FO"]),
                            className: v.marginBottom20,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: l,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, s.jsx)(m.zx, {
                            type: "submit",
                            submitting: i,
                            children: S.intl.string(S.t["FRep5/"]),
                        }),
                        n
                            ? (0, s.jsx)(m.zx, {
                                  className: v.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: m.zx.Colors.PRIMARY,
                                  children: S.intl.string(S.t["ETE/oC"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let { mfaTicket: e, mfaMethods: t, theme: r, authBoxClassName: n, width: i } = this.props,
            o = (e) => {
                let { mfaType: t, data: r } = e;
                return this.handleTokenSubmitMFAv2(t, r);
            };
        return (0, s.jsx)(m.ZP, {
            style: { padding: 0 },
            theme: r,
            className: n,
            children: (0, s.jsx)(y.Cd, {
                mfaFinish: o,
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
                    src: r(26230),
                    className: a()(v.marginBottom20, c.tq ? v.marginTop20 : ""),
                }),
                (0, s.jsx)(m.Dx, {
                    className: v.marginBottom40,
                    children: S.intl.string(S.t.WAUOoK),
                }),
                (0, s.jsx)(m.zx, {
                    onClick: this.handleOpenApp,
                    children: S.intl.string(S.t["uJWIj/"]),
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
            x(this, "handleSubmit", async (e) => {
                let { location: t, onLoginSuccess: r, source: n, resetToken: s } = this.props,
                    { password: i, error: o } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    this.setState({ error: S.intl.string(S.t.R98xD5) }), j.S.dispatch(w.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != o && this.setState({ error: null });
                let a = s;
                if ((null != t && (a = (0, p.Z)(t)), null != a)) {
                    this.setState({ working: !0 });
                    try {
                        let {
                            result: e,
                            sms: t,
                            webauthn: s,
                            ticket: o,
                            token: l,
                            totp: c,
                            backup: u,
                        } = await h.Z.resetPassword(a, i, n);
                        e === h.c.MFA
                            ? d.Z.dispatch({
                                  type: "LOGIN_MFA_STEP",
                                  ticket: o,
                                  sms: t,
                                  webauthn: s,
                                  totp: c,
                                  backup: u,
                              })
                            : null != r
                              ? r(l)
                              : (d.Z.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: l,
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (e) {
                        this.setState({ apiErrors: (0, f.p)(e) });
                    }
                    this.setState({ working: !1 });
                }
            }),
            x(this, "handleTokenSubmitMFAv2", async (e, t) => {
                let { location: r, mfaTicket: n, onLoginSuccess: s, resetToken: i, source: o } = this.props,
                    { password: a } = this.state;
                if (0 === a.length) return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
                let l = i;
                if ((null != r && (l = (0, p.Z)(r)), null == l))
                    return d.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
                this.setState({ working: !0 });
                try {
                    let r = await h.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: n,
                        password: a,
                        token: l,
                        source: o,
                    });
                    if (null != s) return void s(r);
                    d.Z.dispatch({
                        type: "LOGIN_SUCCESS",
                        token: r,
                    }),
                        this.handlePasswordChangeSuccess();
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            x(this, "handlePasswordChangeSuccess", () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) return void this.setState({ success: !0 });
                e(w.Z5c.APP);
            }),
            x(this, "handleGoToLogin", () => {
                let { transitionTo: e } = this.props;
                h.Z.loginReset(), e(w.Z5c.LOGIN, { source: "reset_password" });
            }),
            x(this, "handleOpenApp", () => {
                (0, g.Z)("password_reset");
            }),
            x(this, "hasError", (e) => null != this.state.apiErrors[e] || null != this.state.error),
            x(this, "renderError", (e) => {
                let { apiErrors: t } = this.state;
                if (this.hasError(e)) {
                    let r = t[e];
                    return Array.isArray(r) ? r[0] : r;
                }
                return null;
            });
        let r =
            (null == (t = this.props.location) ? void 0 : t.search) != null && "" !== this.props.location.search
                ? (0, l.parse)(this.props.location.search)
                : null;
        this.state = {
            method: "",
            password: "",
            code: "",
            apiErrors: {},
            error: null,
            hasCancel: null != r && null != r.from_login,
            working: !1,
            success: !1,
        };
    }
}
x(P, "defaultProps", {
    transitionTo: C.uL,
    replaceWith: C.dL,
});
let E = function (e) {
    let t = (0, u.cj)([b.default], () => ({
        mfaTicket: b.default.getMFATicket(),
        mfaMethods: b.default.getMFAMethods(),
    }));
    return (0, s.jsx)(
        P,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        x(e, t, r[t]);
                    });
            }
            return e;
        })({}, e, t),
    );
};
