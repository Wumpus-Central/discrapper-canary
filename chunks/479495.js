r.d(t, { Z: () => N }), r(35282);
var n,
    s = r(54381),
    i = r(473749),
    a = r(120356),
    o = r.n(a),
    l = r(593473),
    c = r(873546),
    u = r(442837),
    d = r(481060),
    h = r(570140),
    p = r(893776),
    f = r(129293),
    m = r(254942),
    g = r(388905),
    y = r(17894),
    O = r(124860),
    C = r(703656),
    b = r(108427),
    j = r(314897),
    w = r(585483),
    v = r(981631),
    S = r(388032),
    x = r(197571);
function P(e, t, r) {
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
class E extends (n = i.PureComponent) {
    componentDidMount() {
        (0, b.e)("reset_password");
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: n, working: i } = this.state,
            { theme: a, authBoxClassName: o } = this.props,
            l = null != t ? t : this.renderError("password");
        return (0, s.jsxs)(g.ZP, {
            onSubmit: this.handleSubmit,
            tag: "form",
            theme: a,
            className: o,
            children: [
                (0, s.jsx)("img", {
                    alt: "",
                    src: null == l ? r(26230) : r(935227),
                    className: x.marginBottom20,
                }),
                (0, s.jsx)(g.Dx, { children: S.intl.string(S.t["1LV6Kq"]) }),
                (0, s.jsxs)(g.gO, {
                    className: x.marginTop20,
                    children: [
                        (0, s.jsx)(g.II, {
                            label: S.intl.string(S.t["8dM4FO"]),
                            className: x.marginBottom20,
                            name: "password",
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: l,
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, s.jsxs)(d.ButtonGroup, {
                            direction: "vertical",
                            fullWidth: !0,
                            children: [
                                (0, s.jsx)(d.Button, {
                                    text: S.intl.string(S.t["FRep5/"]),
                                    type: "submit",
                                    loading: i,
                                }),
                                n &&
                                    (0, s.jsx)(d.Button, {
                                        text: S.intl.string(S.t["ETE/oC"]),
                                        variant: "secondary",
                                        onClick: this.handleGoToLogin,
                                        loading: i,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    renderMFA() {
        let { mfaTicket: e, mfaMethods: t, theme: r, authBoxClassName: n, width: i } = this.props,
            a = (e) => {
                let { mfaType: t, data: r } = e;
                return this.handleTokenSubmitMFAv2(t, r);
            };
        return (0, s.jsx)(g.ZP, {
            style: { padding: 0 },
            theme: r,
            className: n,
            children: (0, s.jsx)(O.C, {
                mfaFinish: a,
                mfaChallenge: {
                    ticket: e,
                    methods: t,
                },
                onEarlyClose: () => {
                    h.Z.dispatch({ type: "LOGIN_RESET" });
                },
                width: null != i ? i : 480,
            }),
        });
    }
    renderSucceeded() {
        let { theme: e, authBoxClassName: t } = this.props;
        return (0, s.jsxs)(g.ZP, {
            theme: e,
            className: t,
            children: [
                (0, s.jsx)("img", {
                    alt: "",
                    src: r(26230),
                    className: o()(x.marginBottom20, c.tq ? x.marginTop20 : ""),
                }),
                (0, s.jsx)(g.Dx, {
                    className: x.marginBottom40,
                    children: S.intl.string(S.t.WAUOoK),
                }),
                (0, s.jsx)(d.Button, {
                    text: S.intl.string(S.t["uJWIj/"]),
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
    constructor(e) {
        var t;
        super(e),
            P(this, "handleSubmit", async (e) => {
                let { location: t, onLoginSuccess: r, source: n, resetToken: s } = this.props,
                    { password: i, error: a } = this.state;
                if ((e.preventDefault(), 0 === i.length)) {
                    this.setState({ error: S.intl.string(S.t.R98xD5) }), w.S.dispatch(v.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != a && this.setState({ error: null });
                let o = s;
                if ((null != t && (o = (0, f.Z)(t)), null != o)) {
                    this.setState({ working: !0 });
                    try {
                        let {
                            result: e,
                            sms: t,
                            webauthn: s,
                            ticket: a,
                            token: l,
                            totp: c,
                            backup: u,
                        } = await p.Z.resetPassword(o, i, n);
                        e === p.c.MFA
                            ? h.Z.dispatch({
                                  type: "LOGIN_MFA_STEP",
                                  ticket: a,
                                  sms: t,
                                  webauthn: s,
                                  totp: c,
                                  backup: u,
                              })
                            : null != r
                              ? r(l)
                              : (h.Z.dispatch({
                                    type: "LOGIN_SUCCESS",
                                    token: l,
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (e) {
                        this.setState({ apiErrors: (0, m.p)(e) });
                    }
                    this.setState({ working: !1 });
                }
            }),
            P(this, "handleTokenSubmitMFAv2", async (e, t) => {
                let { location: r, mfaTicket: n, onLoginSuccess: s, resetToken: i, source: a } = this.props,
                    { password: o } = this.state;
                if (0 === o.length) return h.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
                let l = i;
                if ((null != r && (l = (0, f.Z)(r)), null == l))
                    return h.Z.dispatch({ type: "LOGIN_RESET" }), Promise.reject();
                this.setState({ working: !0 });
                try {
                    let r = await p.Z.resetPasswordMFAv2({
                        method: e,
                        code: t,
                        ticket: n,
                        password: o,
                        token: l,
                        source: a,
                    });
                    if (null != s) return void s(r);
                    h.Z.dispatch({
                        type: "LOGIN_SUCCESS",
                        token: r,
                    }),
                        this.handlePasswordChangeSuccess();
                } finally {
                    this.setState({ working: !1 });
                }
            }),
            P(this, "handlePasswordChangeSuccess", () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) return void this.setState({ success: !0 });
                e(v.Z5c.APP);
            }),
            P(this, "handleGoToLogin", () => {
                let { transitionTo: e } = this.props;
                p.Z.loginReset(), e(v.Z5c.LOGIN, { source: "reset_password" });
            }),
            P(this, "handleOpenApp", () => {
                (0, y.Z)("password_reset");
            }),
            P(this, "hasError", (e) => null != this.state.apiErrors[e] || null != this.state.error),
            P(this, "renderError", (e) => {
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
P(E, "defaultProps", {
    transitionTo: C.uL,
    replaceWith: C.dL,
});
let N = function (e) {
    let t = (0, u.cj)([j.default], () => ({
        mfaTicket: j.default.getMFATicket(),
        mfaMethods: j.default.getMFAMethods(),
    }));
    return (0, s.jsx)(
        E,
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
                        P(e, t, r[t]);
                    });
            }
            return e;
        })({}, e, t),
    );
};
