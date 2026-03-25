"use strict";
n.d(t, { A: () => $, Z: () => J });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(511815),
    d = n(158954),
    c = n(311907),
    u = n(139033),
    h = n(397927),
    _ = n(73153),
    p = n(830215),
    g = n(6981),
    m = n(351671),
    A = n(15552),
    f = n(212640),
    E = n(854378),
    x = n(952116),
    I = n(235986),
    N = n(491509),
    v = n(895600),
    j = n(720353),
    S = n(559568),
    T = n(274303),
    C = n(13437),
    y = n(557722),
    b = n(148864),
    R = n(146571),
    O = n(976860),
    L = n(913612),
    w = n(210714),
    k = n(933924),
    D = n(961350),
    P = n(115036),
    U = n(650048),
    B = n(954571),
    G = n(203982),
    F = n(723702),
    M = n(161928),
    V = n(890698),
    W = n(344961),
    H = n(538796),
    K = n(652215),
    z = n(401755),
    Q = n(985018),
    q = n(228723),
    Y = n(473169);
function J() {
    return (0, i.jsx)(E.Ay, { children: (0, i.jsx)(h.y$y, {}) });
}
class X extends s.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    loginRef;
    passwordRef;
    codeRef;
    constructor(e) {
        super(e);
        const t = null != e.location ? (0, a.parse)(e.location.search) : {};
        this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: "",
            login: t.email ?? t.login ?? "",
            password: "",
            code: "",
            smsCode: "",
            undelete: !1,
            phoneVerifyError: null,
            dismissedChooseAccount: !1,
            conditionalMediationAbortController: new AbortController(),
            errors: {},
        };
    }
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: i, location: s } = this.props;
        e && !t ? (0, g.ST)() : t && this.loginOrSSO(t, s, !0),
            B.default.track(
                K.HAw.LOGIN_VIEWED,
                {
                    location: null != i ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: this.loginSource,
                    authenticated: t,
                    ...(null != n ? (0, N.A)(n, !1, !1) : {}),
                    source: (0, O.PR)(),
                },
                { flush: !0 },
            ),
            t ||
                (0, k.a)({
                    abortController: this.state.conditionalMediationAbortController,
                    loginSource: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                }),
            p.A.getLocationMetadata(),
            (0, w.d)("login");
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: i, handoffAvailable: s } = this.props,
            { checkingHandoff: r, redirecting: l } = this.state;
        !n ||
            e.authenticated ||
            (r && (s || l)) ||
            (this.state.conditionalMediationAbortController.abort("Transitioning to authenticated state"),
            this.loginOrSSO(n, i)),
            t.errors !== this.state.errors &&
                (this.hasError("password")
                    ? this.passwordRef?.focus()
                    : this.hasError("email") || this.hasError("login")
                      ? this.loginRef?.focus()
                      : this.hasError("code") && this.codeRef?.focus());
    }
    get loginSource() {
        let { giftCode: e, guildTemplate: t, invite: n, loginSource: i, redirectTo: s } = this.props;
        if (null != i) return i;
        if (null != e) return "gift";
        if (null != t) return "guild_template";
        if (null != n) {
            if (null != n.guild) return "guild_invite";
            else if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
        }
        return null != s ? (0, m.Q)(s) : null;
    }
    get giftCodeSKUId() {
        let { giftCode: e } = this.props;
        return null != e ? e.skuId : null;
    }
    get canShowChooseAccount() {
        return this.props.hasLoggedInAccounts;
    }
    loginOrSSO(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e &&
            null != t &&
            (this.setState({ redirecting: !0 }),
            n ? p.A.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    handleAuthSuccess(e) {
        this.setState({ errors: {} }),
            B.default.track(K.HAw.LOGIN_SUCCESSFUL, {
                source: K.mdB.QR_CODE,
                login_source: this.loginSource,
                gift_code_sku_id: this.giftCodeSKUId,
                is_new_user: !1,
                login_method: "remote_auth",
                login_instance_id: e ?? null,
            });
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: i } = this.props,
            s = null != e ? (0, a.parse)(e.search) : {};
        if ((delete s.redirect_to, null != n)) {
            if ((0, f.RZ)(n)) return void (0, f.NY)(n);
            null != i ? i(n) : t(n);
        } else if (null == s.service) t(K.BVt.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + K.Rsh.SSO,
                t = { ...s, token: D.default.getToken() };
            window.location = `${e}?${(0, a.stringify)(t)}`;
        }
    }
    loginReset = () => {
        this.state.conditionalMediationAbortController.abort("Login state reset"),
            this.setState({ errors: {} }),
            p.A.loginReset();
    };
    setLoginRef = (e) => {
        this.loginRef = e;
    };
    setPasswordRef = (e) => {
        this.passwordRef = e;
    };
    setCodeRef = (e) => {
        this.codeRef = e;
    };
    getFullLogin = () => {
        let { loginPrefix: e, login: t } = this.state;
        return e + t;
    };
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderError = (e) => {
        let { errors: t } = this.state;
        if (this.hasError(e)) {
            let n = t[e];
            return Array.isArray(n) ? n[0] : n;
        }
        return null;
    };
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, i.jsxs)(E.Ay, {
            className: e,
            children: [
                (0, i.jsx)(E.CK, {}),
                (0, i.jsx)(E.hE, { className: Y.QB, children: Q.intl.string(Q.t.S6RMNA) }),
                (0, i.jsx)(E.tK, { children: Q.intl.string(Q.t.YZiJbh) }),
            ],
        });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === K.aUe.ACCOUNT_DISABLED,
            n = t ? Q.intl.string(Q.t["j3rC+U"]) : Q.intl.string(Q.t.ZFWofo),
            s = t ? Q.intl.string(Q.t["6eNTWe"]) : Q.intl.string(Q.t["pCBti+"]);
        return (0, i.jsx)(E.Ay, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(h.Fmo, {
                component: (0, i.jsx)(E.hE, { className: Y.QB, children: n }),
                children: [
                    (0, i.jsx)(E.tK, { className: Y.SX, children: s }),
                    (0, i.jsxs)(E.eB, {
                        children: [
                            (0, i.jsx)(h.Button, { text: Q.intl.string(Q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                            (0, i.jsx)("div", {
                                className: l()(Y.Ot, q.Qt),
                                children: Q.intl.format(Q.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsxs)(E.Ay, {
            className: e,
            children: [
                (0, i.jsx)(V.M, {}),
                (0, i.jsxs)(E.eB, {
                    className: Y.QX,
                    children: [
                        (0, i.jsx)(R.A, {
                            className: Y.SX,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(" ")[0],
                            label: Q.intl.string(Q.t.tUjnxr),
                            onChange: (e, t) => this.setState({ login: e, loginPrefix: t }),
                            setRef: this.setLoginRef,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: this.state.login,
                            autoFocus: !0,
                            required: !0,
                        }),
                        (0, i.jsx)(E.pd, {
                            className: Y.SX,
                            label: Q.intl.string(Q.t["CIGa+7"]),
                            onChange: (e) => this.setState({ password: e }),
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            value: this.state.password,
                            required: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: Y.QB,
                            children: (0, i.jsx)(h.Button, {
                                text: Q.intl.string(Q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                disabled: !0,
                            }),
                        }),
                        (0, i.jsx)(h.QWc, {
                            text: Q.intl.string(Q.t.wWIufs),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: Y.a5,
                            children: (0, i.jsx)(h.QWc, {
                                text: Q.intl.string(Q.t.tmE73r),
                                textVariant: "text-sm/normal",
                                disabled: !0,
                            }),
                        }),
                    ],
                }),
            ],
        });
    }
    renderDefaultForm(e) {
        let t,
            {
                invite: n,
                giftCode: s,
                loginStatus: r,
                country: a,
                showMobileWebHandoff: o,
                disableAutofocusOnDefaultForm: d,
            } = this.props,
            c = !this.hasError("email") && this.hasError("password");
        return (
            (t =
                null != n
                    ? (0, i.jsx)("div", { className: Y.S3, children: (0, i.jsx)(V.A, { invite: n }) })
                    : null != s
                      ? (0, i.jsx)(M.A, { giftCode: s })
                      : (0, i.jsxs)("div", {
                            className: q.wx,
                            children: [
                                (0, i.jsx)(E.hE, { className: Y.QB, children: Q.intl.string(Q.t["7fNJgA"]) }, "title"),
                                !1 === (0, F.isAndroidWeb)()
                                    ? (0, i.jsx)(E.tK, { children: Q.intl.string(Q.t.euS7r4) }, "subtitle")
                                    : null,
                            ],
                        })),
            (0, i.jsxs)(
                I.A,
                {
                    direction: I.A.Direction.HORIZONTAL,
                    align: I.A.Align.CENTER,
                    children: [
                        (0, i.jsxs)("div", {
                            className: q.Eh,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)("div", {
                                        className: q.AX,
                                        children: (0, i.jsx)(h.Button, {
                                            onClick: () => {
                                                this.setState((e) => ({ ...e, dismissedChooseAccount: !1 }));
                                            },
                                            variant: "secondary",
                                            text: Q.intl.string(Q.t["1MrpWO"]),
                                            icon: h.n2b,
                                        }),
                                    }),
                                t,
                                (0, i.jsx)(h.Fmo, {
                                    children: (0, i.jsxs)(E.eB, {
                                        className: Y.QX,
                                        children: [
                                            (0, i.jsx)(R.A, {
                                                alpha2: a.alpha2,
                                                countryCode: a.code.split(" ")[0],
                                                className: Y.SX,
                                                label: Q.intl.string(Q.t.tUjnxr),
                                                error: this.renderError("login") ?? this.renderError("email"),
                                                onChange: (e, t) => this.setState({ login: e, loginPrefix: t }),
                                                setRef: this.setLoginRef,
                                                autoCapitalize: "none",
                                                autoComplete: "username webauthn",
                                                autoCorrect: "off",
                                                spellCheck: "false",
                                                value: this.state.login,
                                                autoFocus: !c && !o && !d,
                                                required: !0,
                                            }),
                                            (0, i.jsx)(E.pd, {
                                                label: Q.intl.string(Q.t["CIGa+7"]),
                                                error: this.renderError("password"),
                                                onChange: (e) => this.setState({ password: e }),
                                                name: "password",
                                                type: "password",
                                                setRef: this.setPasswordRef,
                                                autoComplete: "current-password",
                                                spellCheck: "false",
                                                autoFocus: c && !o && !d,
                                                value: this.state.password,
                                                required: !0,
                                            }),
                                            (0, i.jsx)("div", {
                                                className: l()(Y.SX, Y.a5),
                                                children: (0, i.jsx)(h.QWc, {
                                                    text: Q.intl.string(Q.t.wWIufs),
                                                    textVariant: "text-sm/normal",
                                                    onClick: this.handleForgotPassword,
                                                }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: Y.QB,
                                                children: (0, i.jsx)(h.Button, {
                                                    text: Q.intl.string(Q.t.dKhVQN),
                                                    fullWidth: !0,
                                                    type: "submit",
                                                    loading: r === K.aUe.LOGGING_IN,
                                                }),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: Y.a5,
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        className: q.Qt,
                                                        children: Q.intl.string(Q.t.tmE73r),
                                                    }),
                                                    (0, i.jsx)("span", {
                                                        className: q.Z8,
                                                        children: (0, i.jsx)(h.QWc, {
                                                            text: Q.intl.string(Q.t.pV8xeR),
                                                            textVariant: "text-sm/normal",
                                                            onClick: this.handleGotoRegister,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(h.Fmo, {
                            children: e
                                ? (0, i.jsx)(W.A, {
                                      onAuthenticateSuccess: this.handleAuthSuccess,
                                      conditionalMediationAbortController:
                                          this.state.conditionalMediationAbortController,
                                  })
                                : null,
                        }),
                    ],
                },
                "form-wrapper",
            )
        );
    }
    renderDefault() {
        let { authBoxClassName: e, showMobileWebHandoff: t } = this.props;
        return (0, i.jsxs)("div", {
            className: q.__invalid_pageContainer,
            children: [
                (0, i.jsx)(E.Ay, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0),
                }),
                t && (0, i.jsx)(S.A, {}),
            ],
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(H.A, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: l()(this.props.authBoxClassName, q.Sy),
            children: () => [(0, i.jsx)(v.A, { guildTemplate: e }, "template"), this.renderDefaultForm(!1)],
        });
    }
    renderMFA() {
        let e = { ticket: this.props.mfaTicket, methods: this.props.mfaMethods };
        return (0, i.jsx)(E.Ay, {
            style: { padding: 0 },
            children: (0, i.jsx)(j.t, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    _.h.dispatch({ type: "LOGIN_RESET" });
                },
                width: 480,
            }),
        });
    }
    renderIPAuthorization() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(E.Ay, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(x.A, {
                title: Q.intl.string(Q.t.w55Oco),
                subtitle: Q.intl.format(Q.t.CfRZBj, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset,
            }),
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(E.Ay, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(x.A, {
                title: Q.intl.string(Q.t["+xqy3d"]),
                subtitle: Q.intl.format(Q.t.ef4uZ7, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset,
            }),
        });
    }
    renderChooseAccount() {
        let e = () => {
            this.setState((e) => ({ ...e, dismissedChooseAccount: !0 }));
        };
        return (0, i.jsx)(C.A, { onDismiss: e });
    }
    render() {
        let { invite: e, guildTemplate: t, loginStatus: n, handoffAvailable: s } = this.props,
            { checkingHandoff: r, redirecting: l } = this.state;
        if (l || r) return (0, i.jsx)(J, {});
        if (s) return this.renderHandOffAvailable();
        switch (n) {
            case K.aUe.LOGGING_IN_MFA_SMS:
            case K.aUe.MFA_SMS_STEP:
            case K.aUe.LOGGING_IN_MFA:
            case K.aUe.MFA_STEP:
                return this.renderMFA();
            case K.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case K.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case K.aUe.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case K.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case K.aUe.LOGGING_IN:
            case K.aUe.NONE:
            default:
                if (null != e && e.state === K.elq.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === z.QB.RESOLVING) return this.renderResolving();
                    else return this.renderGuildTemplate(t);
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    handleLogin = async (e) => {
        let { password: t, undelete: n, conditionalMediationAbortController: i } = this.state;
        e?.preventDefault(),
            i.abort("Starting password login"),
            G._.dispatch(K.jej.WAVE_EMPHASIZE),
            this.setState({ errors: {} });
        try {
            await p.A.login({
                login: this.getFullLogin(),
                password: t,
                undelete: n,
                source: this.loginSource,
                giftCodeSKUId: this.giftCodeSKUId,
                invite: this.props.invite,
            });
        } catch (t) {
            let e = (0, A.p)(t);
            this.setState({ errors: e });
        }
    };
    handleIPAuthorize = async (e) => {
        let t = this.getFullLogin();
        this.setState({ errors: {} });
        try {
            let { token: n } = await y.A.verifyPhone(t, e, !1);
            await p.A.authorizeIPAddress(n), this.handleLogin();
        } catch (e) {
            null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
        }
    };
    handlePasswordReset = async (e) => {
        let { transitionTo: t } = this.props;
        this.setState({ phoneVerifyError: null });
        try {
            let { token: n } = await y.A.verifyPhone(this.getFullLogin(), e, !1);
            t(K.BVt.RESET, { search: (0, a.stringify)({ token: n, from_login: "true" }) });
        } catch (e) {
            null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
        }
    };
    handleTokenSubmitMFA = (e) => {
        let { mfaType: t, data: n, ticket: i } = e;
        return (
            G._.dispatch(K.jej.WAVE_EMPHASIZE),
            p.A.loginMFAv2({
                code: n,
                ticket: i,
                mfaType: t,
                source: this.loginSource,
                giftCodeSKUId: this.giftCodeSKUId,
            })
        );
    };
    handleForgotPassword = async (e) => {
        null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
        let t = this.getFullLogin();
        this.setState({ errors: {} });
        try {
            G._.dispatch(K.jej.WAVE_EMPHASIZE);
            let e = await p.A.forgotPassword(t);
            if (!1 === e) return;
            e === o.D.ONE_TIME_LOGIN
                ? (0, h.qfG)((e) => {
                      let t = [
                          { variant: "primary", text: Q.intl.string(Q.t.BddRzS), onClick: e.onClose, fullWidth: !0 },
                      ];
                      return (0, i.jsx)(d.Modal, {
                          title: Q.intl.string(Q.t["6Ecyts"]),
                          actions: t,
                          ...e,
                          children: (0, i.jsx)(h.Text, {
                              variant: "text-md/normal",
                              children: Q.intl.string(Q.t.iAcrqV),
                          }),
                      });
                  })
                : (0, u.A)({ title: Q.intl.string(Q.t.f5Pi7A), subtitle: Q.intl.format(Q.t["6u5hQ9"], { email: t }) });
        } catch (t) {
            let e = (0, A.p)(t);
            this.setState({ errors: e });
        }
    };
    handleResendCode = () => {
        y.A.resendCode(this.getFullLogin());
    };
    handleReset = (e) => {
        null != e && e.preventDefault(),
            p.A.loginReset(),
            this.setState({
                password: "",
                loginPrefix: "",
                login: "",
                code: "",
                smsCode: "",
                undelete: !1,
                checkingHandoff: !1,
                redirecting: !1,
                errors: {},
            });
    };
    handleCancelAccountDeletion = () => {
        this.setState({ undelete: !0 }, this.handleLogin);
    };
    handleGotoRegister = () => {
        let e,
            { login: t } = this.state,
            { invite: n, giftCode: i, guildTemplate: s, location: r, transitionTo: l, redirectTo: o } = this.props,
            d = null != r ? (0, a.parse)(r.search) : {};
        "" !== t && (d.email = t),
            null != n
                ? ((d.mode = "register"), (e = K.BVt.INVITE(n.code)))
                : null != i
                  ? ((d.mode = "register"), (e = K.BVt.GIFT_CODE(i.code)))
                  : null != s
                    ? (e = K.BVt.GUILD_TEMPLATE(s.code))
                    : null != o
                      ? ((e = K.BVt.REGISTER), (d.redirect_to = o))
                      : (e = K.BVt.REGISTER),
            this.loginReset(),
            l(e, { search: (0, a.stringify)(d) }),
            G._.dispatch(K.jej.WAVE_EMPHASIZE);
    };
}
let $ = function (e) {
    (0, L.K)();
    let t = (0, c.cf)([P.A, U.A, D.default, T.A, b.A], () => ({
        authenticated: D.default.isAuthenticated(),
        handoffAvailable: P.A.isHandoffAvailable(),
        user: P.A.user,
        loginStatus: D.default.getLoginStatus(),
        mfaTicket: D.default.getMFATicket(),
        mfaMethods: D.default.getMFAMethods(),
        defaultRoute: U.A.defaultRoute,
        country: b.A.getCountryCode(),
        hasLoggedInAccounts: T.A.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(X, { ...e, ...t });
};
