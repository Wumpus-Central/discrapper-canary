"use strict";
n.d(t, { A: () => Q });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(511815),
    c = n(158954),
    d = n(311907),
    u = n(139033),
    _ = n(397927),
    h = n(830215),
    g = n(6981),
    p = n(351671),
    m = n(15552),
    A = n(29093),
    f = n(8e5),
    E = n(934842),
    x = n(664053),
    I = n(212640),
    N = n(854378),
    v = n(952116),
    T = n(491509),
    j = n(895600),
    C = n(559568),
    S = n(274303),
    y = n(13437),
    b = n(557722),
    R = n(148864),
    O = n(976860),
    L = n(913612),
    w = n(210714),
    k = n(933924),
    D = n(961350),
    U = n(115036),
    P = n(650048),
    B = n(954571),
    G = n(203982),
    M = n(538796),
    F = n(652215),
    V = n(401755),
    W = n(985018),
    H = n(379154),
    K = n(818050);
class z extends s.PureComponent {
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
                F.HAw.LOGIN_VIEWED,
                {
                    location: null != i ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: this.loginSource,
                    authenticated: t,
                    ...(null != n ? (0, T.A)(n, !1, !1) : {}),
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
            h.A.getLocationMetadata(),
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
        return null != s ? (0, p.Q)(s) : null;
    }
    get giftCodeSKUId() {
        let { giftCode: e } = this.props;
        return null != e ? e.skuId : null;
    }
    loginOrSSO(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e &&
            null != t &&
            (this.setState({ redirecting: !0 }),
            n ? h.A.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    handleAuthSuccess = (e) => {
        this.setState({ errors: {} }),
            B.default.track(F.HAw.LOGIN_SUCCESSFUL, {
                source: F.mdB.QR_CODE,
                login_source: this.loginSource,
                gift_code_sku_id: this.giftCodeSKUId,
                is_new_user: !1,
                login_method: "remote_auth",
                login_instance_id: e ?? null,
            });
    };
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: i } = this.props,
            s = null != e ? (0, a.parse)(e.search) : {};
        if ((delete s.redirect_to, null != n)) {
            if ((0, I.RZ)(n)) return void (0, I.NY)(n);
            null != i ? i(n) : t(n);
        } else if (null == s.service) t(F.BVt.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + F.Rsh.SSO,
                t = { ...s, token: D.default.getToken() };
            window.location = `${e}?${(0, a.stringify)(t)}`;
        }
    }
    loginReset = () => {
        this.state.conditionalMediationAbortController.abort("Login state reset"),
            this.setState({ errors: {} }),
            h.A.loginReset();
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
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsx)(x.A, {
            authBoxClassName: e,
            country: t,
            login: this.state.login,
            password: this.state.password,
            onLoginChange: (e, t) => this.setState({ login: e, loginPrefix: t }),
            onPasswordChange: (e) => this.setState({ password: e }),
            setLoginRef: this.setLoginRef,
            setPasswordRef: this.setPasswordRef,
        });
    }
    renderDefaultForm(e) {
        let {
                invite: t,
                giftCode: n,
                loginStatus: s,
                country: r,
                showMobileWebHandoff: l,
                disableAutofocusOnDefaultForm: a,
            } = this.props,
            {
                dismissedChooseAccount: o,
                login: c,
                password: d,
                errors: u,
                conditionalMediationAbortController: _,
            } = this.state;
        return (0, i.jsx)(f.A, {
            invite: t,
            giftCode: n,
            loginStatus: s,
            country: r,
            showMobileWebHandoff: l,
            disableAutofocusOnDefaultForm: a,
            withQR: e,
            dismissedChooseAccount: o,
            login: c,
            password: d,
            errors: u,
            conditionalMediationAbortController: _,
            onLoginChange: (e, t) => this.setState({ login: e, loginPrefix: t }),
            onPasswordChange: (e) => this.setState({ password: e }),
            setLoginRef: this.setLoginRef,
            setPasswordRef: this.setPasswordRef,
            onReturnToChooseAccount: () => {
                this.setState((e) => ({ ...e, dismissedChooseAccount: !1 }));
            },
            handleForgotPassword: this.handleForgotPassword,
            handleGotoRegister: this.handleGotoRegister,
            handleAuthSuccess: this.handleAuthSuccess,
        });
    }
    render() {
        let {
                invite: e,
                guildTemplate: t,
                loginStatus: n,
                handoffAvailable: s,
                authBoxClassName: r,
                showMobileWebHandoff: a,
            } = this.props,
            { checkingHandoff: o, redirecting: c, phoneVerifyError: d } = this.state;
        if (c || o) return (0, i.jsx)(N.Ay, { children: (0, i.jsx)(_.y$y, {}) });
        if (s)
            return (0, i.jsxs)(N.Ay, {
                className: r,
                children: [
                    (0, i.jsx)(N.CK, {}),
                    (0, i.jsx)(N.hE, { className: K.QB, children: W.intl.string(W.t.S6RMNA) }),
                    (0, i.jsx)(N.tK, { children: W.intl.string(W.t.YZiJbh) }),
                ],
            });
        switch (n) {
            case F.aUe.LOGGING_IN_MFA_SMS:
            case F.aUe.MFA_SMS_STEP:
            case F.aUe.LOGGING_IN_MFA:
            case F.aUe.MFA_STEP:
                return (0, i.jsx)(E.A, { loginSource: this.loginSource, giftCodeSKUId: this.giftCodeSKUId });
            case F.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case F.aUe.ACCOUNT_DISABLED:
                return (0, i.jsx)(A.A, {
                    loginStatus: this.props.loginStatus,
                    authBoxClassName: this.props.authBoxClassName ?? "",
                    onSubmit: this.handleReset,
                    onCancelAccountDeletion: this.handleCancelAccountDeletion,
                });
            case F.aUe.PHONE_IP_AUTHORIZATION:
                return (0, i.jsx)(N.Ay, {
                    tag: "form",
                    className: r,
                    children: (0, i.jsx)(v.A, {
                        title: W.intl.string(W.t.w55Oco),
                        subtitle: W.intl.format(W.t.CfRZBj, { onResendClick: this.handleResendCode }),
                        error: d,
                        onSubmit: this.handleIPAuthorize,
                        onCancel: this.loginReset,
                    }),
                });
            case F.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return (0, i.jsx)(N.Ay, {
                    tag: "form",
                    className: r,
                    children: (0, i.jsx)(v.A, {
                        title: W.intl.string(W.t["+xqy3d"]),
                        subtitle: W.intl.format(W.t.ef4uZ7, { onResendClick: this.handleResendCode }),
                        error: d,
                        onSubmit: this.handlePasswordReset,
                        onCancel: this.loginReset,
                    }),
                });
            case F.aUe.LOGGING_IN:
            case F.aUe.NONE:
            default:
                if (null != e && e.state === F.elq.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === V.QB.RESOLVING) return this.renderResolving();
                    else
                        return (0, i.jsx)(M.A, {
                            onSubmit: this.handleLogin,
                            tag: "form",
                            className: l()(this.props.authBoxClassName, H.Sy),
                            children: () => [
                                (0, i.jsx)(j.A, { guildTemplate: t }, "template"),
                                this.renderDefaultForm(!1),
                            ],
                        });
                if (this.props.hasLoggedInAccounts && !this.state.dismissedChooseAccount)
                    return (0, i.jsx)(y.A, {
                        onDismiss: () => this.setState((e) => ({ ...e, dismissedChooseAccount: !0 })),
                    });
                return (0, i.jsxs)("div", {
                    className: H.__invalid_pageContainer,
                    children: [
                        (0, i.jsx)(N.Ay, {
                            onSubmit: this.handleLogin,
                            tag: "form",
                            className: r,
                            expanded: !0,
                            children: this.renderDefaultForm(!0),
                        }),
                        a && (0, i.jsx)(C.A, {}),
                    ],
                });
        }
    }
    handleLogin = async (e) => {
        let { password: t, undelete: n, conditionalMediationAbortController: i } = this.state;
        e?.preventDefault(),
            i.abort("Starting password login"),
            G._.dispatch(F.jej.WAVE_EMPHASIZE),
            this.setState({ errors: {} });
        try {
            await h.A.login({
                login: this.getFullLogin(),
                password: t,
                undelete: n,
                source: this.loginSource,
                giftCodeSKUId: this.giftCodeSKUId,
                invite: this.props.invite,
            });
        } catch (t) {
            let e = (0, m.p)(t);
            this.setState({ errors: e });
        }
    };
    handleIPAuthorize = async (e) => {
        let t = this.getFullLogin();
        this.setState({ errors: {} });
        try {
            let { token: n } = await b.A.verifyPhone(t, e, !1);
            await h.A.authorizeIPAddress(n), this.handleLogin();
        } catch (e) {
            null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
        }
    };
    handlePasswordReset = async (e) => {
        let { transitionTo: t } = this.props;
        this.setState({ phoneVerifyError: null });
        try {
            let { token: n } = await b.A.verifyPhone(this.getFullLogin(), e, !1);
            t(F.BVt.RESET, { search: (0, a.stringify)({ token: n, from_login: "true" }) });
        } catch (e) {
            null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
        }
    };
    handleForgotPassword = async (e) => {
        null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
        let t = this.getFullLogin();
        this.setState({ errors: {} });
        try {
            G._.dispatch(F.jej.WAVE_EMPHASIZE);
            let e = await h.A.forgotPassword(t);
            if (!1 === e) return;
            e === o.D.ONE_TIME_LOGIN
                ? (0, _.qfG)((e) => {
                      let t = [
                          { variant: "primary", text: W.intl.string(W.t.BddRzS), onClick: e.onClose, fullWidth: !0 },
                      ];
                      return (0, i.jsx)(c.Modal, {
                          title: W.intl.string(W.t["6Ecyts"]),
                          actions: t,
                          ...e,
                          children: (0, i.jsx)(_.Text, {
                              variant: "text-md/normal",
                              children: W.intl.string(W.t.iAcrqV),
                          }),
                      });
                  })
                : (0, u.A)({ title: W.intl.string(W.t.f5Pi7A), subtitle: W.intl.format(W.t["6u5hQ9"], { email: t }) });
        } catch (t) {
            let e = (0, m.p)(t);
            this.setState({ errors: e });
        }
    };
    handleResendCode = () => {
        b.A.resendCode(this.getFullLogin());
    };
    handleReset = (e) => {
        null != e && e.preventDefault(),
            h.A.loginReset(),
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
            c = null != r ? (0, a.parse)(r.search) : {};
        "" !== t && (c.email = t),
            null != n
                ? ((c.mode = "register"), (e = F.BVt.INVITE(n.code)))
                : null != i
                  ? ((c.mode = "register"), (e = F.BVt.GIFT_CODE(i.code)))
                  : null != s
                    ? (e = F.BVt.GUILD_TEMPLATE(s.code))
                    : null != o
                      ? ((e = F.BVt.REGISTER), (c.redirect_to = o))
                      : (e = F.BVt.REGISTER),
            this.loginReset(),
            l(e, { search: (0, a.stringify)(c) }),
            G._.dispatch(F.jej.WAVE_EMPHASIZE);
    };
}
let Q = function (e) {
    (0, L.K)();
    let t = (0, d.cf)([U.A, P.A, D.default, S.A, R.A], () => ({
        authenticated: D.default.isAuthenticated(),
        handoffAvailable: U.A.isHandoffAvailable(),
        user: U.A.user,
        loginStatus: D.default.getLoginStatus(),
        defaultRoute: P.A.defaultRoute,
        country: R.A.getCountryCode(),
        hasLoggedInAccounts: S.A.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(z, { ...e, ...t });
};
