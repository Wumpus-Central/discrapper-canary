n.d(t, {
    A: () => en,
    Z: () => ee,
}),
    n(747238);
var r,
    i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(492462),
    c = n(607399),
    u = n(511815),
    d = n(158954),
    h = n(311907),
    f = n(397927),
    p = n(73153),
    g = n(830215),
    m = n(6981),
    A = n(351671),
    x = n(15552),
    _ = n(212640),
    E = n(854378),
    b = n(952116),
    v = n(235986),
    j = n(491509),
    y = n(895600),
    S = n(720353),
    N = n(559568),
    O = n(274303),
    I = n(13437),
    T = n(557722),
    C = n(148864),
    R = n(146571),
    w = n(976860),
    P = n(913612),
    L = n(210714),
    k = n(933924),
    D = n(961350),
    B = n(115036),
    U = n(650048),
    G = n(954571),
    M = n(203982),
    F = n(723702),
    V = n(161928),
    W = n(890698),
    H = n(344961),
    K = n(538796),
    Q = n(652215),
    z = n(401755),
    q = n(985018),
    Y = n(228723),
    X = n(473169);
function J(e, t, n) {
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
function Z(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ee() {
    return (0, i.jsx)(E.Ay, { children: (0, i.jsx)(f.y$y, {}) });
}
class et extends (r = s.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, m.ST)() : t && this.loginOrSSO(t, i, !0),
            G.default.track(
                Q.HAw.LOGIN_VIEWED,
                $(
                    Z(
                        {
                            location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
                            login_source: this.loginSource,
                            authenticated: t,
                        },
                        null != n ? (0, j.A)(n, !1, !1) : {},
                    ),
                    { source: (0, w.PR)() },
                ),
                { flush: !0 },
            ),
            t ||
                (0, k.a)({
                    abortController: this.state.conditionalMediationAbortController,
                    loginSource: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                }),
            g.A.getLocationMetadata(),
            (0, L.d)("login");
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: r, handoffAvailable: i } = this.props,
            { checkingHandoff: s, redirecting: l } = this.state;
        if (
            (!n ||
                e.authenticated ||
                (s && (i || l)) ||
                (this.state.conditionalMediationAbortController.abort("Transitioning to authenticated state"),
                this.loginOrSSO(n, r)),
            t.errors !== this.state.errors)
        ) {
            var a, o, c;
            this.hasError("password")
                ? null == (a = this.passwordRef) || a.focus()
                : this.hasError("email") || this.hasError("login")
                  ? null == (o = this.loginRef) || o.focus()
                  : this.hasError("code") && (null == (c = this.codeRef) || c.focus());
        }
    }
    get loginSource() {
        let { giftCode: e, guildTemplate: t, invite: n, loginSource: r, redirectTo: i } = this.props;
        if (null != r) return r;
        if (null != e) return "gift";
        if (null != t) return "guild_template";
        if (null != n) {
            if (null != n.guild) return "guild_invite";
            else if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
        }
        return null != i ? (0, A.Q)(i) : null;
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
            n ? g.A.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, o.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) {
            if ((0, _.RZ)(n)) return void (0, _.NY)(n);
            null != r ? r(n) : t(n);
        } else if (null == i.service) t(Q.BVt.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + Q.Rsh.SSO,
                t = $(Z({}, i), { token: D.default.getToken() });
            window.location = "".concat(e, "?").concat((0, o.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, i.jsxs)(E.Ay, {
            className: e,
            children: [
                (0, i.jsx)(E.CK, {}),
                (0, i.jsx)(E.hE, {
                    className: X.QB,
                    children: q.intl.string(q.t.S6RMNA),
                }),
                (0, i.jsx)(E.tK, { children: q.intl.string(q.t.YZiJbh) }),
            ],
        });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === Q.aUe.ACCOUNT_DISABLED,
            n = t ? q.intl.string(q.t["j3rC+U"]) : q.intl.string(q.t.ZFWofo),
            r = t ? q.intl.string(q.t["6eNTWe"]) : q.intl.string(q.t["pCBti+"]);
        return (0, i.jsx)(E.Ay, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(f.Fmo, {
                component: (0, i.jsx)(E.hE, {
                    className: X.QB,
                    children: n,
                }),
                children: [
                    (0, i.jsx)(E.tK, {
                        className: X.SX,
                        children: r,
                    }),
                    (0, i.jsxs)(E.eB, {
                        children: [
                            (0, i.jsx)(f.Button, {
                                text: q.intl.string(q.t.JhDw5o),
                                fullWidth: !0,
                                type: "submit",
                            }),
                            (0, i.jsx)("div", {
                                className: a()(X.Ot, Y.Qt),
                                children: q.intl.format(q.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
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
                (0, i.jsx)(W.M, {}),
                (0, i.jsxs)(E.eB, {
                    className: X.QX,
                    children: [
                        (0, i.jsx)(R.A, {
                            className: X.SX,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(" ")[0],
                            label: q.intl.string(q.t.tUjnxr),
                            onChange: (e, t) =>
                                this.setState({
                                    login: e,
                                    loginPrefix: t,
                                }),
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
                            className: X.SX,
                            label: q.intl.string(q.t["CIGa+7"]),
                            onChange: (e) => this.setState({ password: e }),
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            value: this.state.password,
                            required: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: X.QB,
                            children: (0, i.jsx)(f.Button, {
                                text: q.intl.string(q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                disabled: !0,
                            }),
                        }),
                        (0, i.jsx)(f.QWc, {
                            text: q.intl.string(q.t.wWIufs),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: X.a5,
                            children: (0, i.jsx)(f.QWc, {
                                text: q.intl.string(q.t.tmE73r),
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
        var t;
        let n,
            {
                invite: r,
                giftCode: s,
                loginStatus: l,
                country: o,
                showMobileWebHandoff: c,
                disableAutofocusOnDefaultForm: u,
            } = this.props,
            d = !this.hasError("email") && this.hasError("password");
        return (
            (n =
                null != r
                    ? (0, i.jsx)("div", {
                          className: X.S3,
                          children: (0, i.jsx)(W.A, { invite: r }),
                      })
                    : null != s
                      ? (0, i.jsx)(V.A, { giftCode: s })
                      : (0, i.jsxs)("div", {
                            className: Y.wx,
                            children: [
                                (0, i.jsx)(
                                    E.hE,
                                    {
                                        className: X.QB,
                                        children: q.intl.string(q.t["7fNJgA"]),
                                    },
                                    "title",
                                ),
                                !1 === (0, F.isAndroidWeb)()
                                    ? (0, i.jsx)(E.tK, { children: q.intl.string(q.t.euS7r4) }, "subtitle")
                                    : null,
                            ],
                        })),
            (0, i.jsxs)(
                v.A,
                {
                    direction: v.A.Direction.HORIZONTAL,
                    align: v.A.Align.CENTER,
                    children: [
                        (0, i.jsxs)("div", {
                            className: Y.Eh,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)("div", {
                                        className: Y.AX,
                                        children: (0, i.jsx)(f.Button, {
                                            onClick: () => {
                                                this.setState((e) => $(Z({}, e), { dismissedChooseAccount: !1 }));
                                            },
                                            variant: "secondary",
                                            text: q.intl.string(q.t["1MrpWO"]),
                                            icon: f.n2b,
                                        }),
                                    }),
                                n,
                                (0, i.jsx)(f.Fmo, {
                                    children: (0, i.jsxs)(E.eB, {
                                        className: X.QX,
                                        children: [
                                            (0, i.jsx)(R.A, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(" ")[0],
                                                className: X.SX,
                                                label: q.intl.string(q.t.tUjnxr),
                                                error:
                                                    null != (t = this.renderError("login"))
                                                        ? t
                                                        : this.renderError("email"),
                                                onChange: (e, t) =>
                                                    this.setState({
                                                        login: e,
                                                        loginPrefix: t,
                                                    }),
                                                setRef: this.setLoginRef,
                                                autoCapitalize: "none",
                                                autoComplete: "username webauthn",
                                                autoCorrect: "off",
                                                spellCheck: "false",
                                                value: this.state.login,
                                                autoFocus: !d && !c && !u,
                                                required: !0,
                                            }),
                                            (0, i.jsx)(E.pd, {
                                                label: q.intl.string(q.t["CIGa+7"]),
                                                error: this.renderError("password"),
                                                onChange: (e) => this.setState({ password: e }),
                                                name: "password",
                                                type: "password",
                                                setRef: this.setPasswordRef,
                                                autoComplete: "current-password",
                                                spellCheck: "false",
                                                autoFocus: d && !c && !u,
                                                value: this.state.password,
                                                required: !0,
                                            }),
                                            (0, i.jsx)("div", {
                                                className: a()(X.SX, X.a5),
                                                children: (0, i.jsx)(f.QWc, {
                                                    text: q.intl.string(q.t.wWIufs),
                                                    textVariant: "text-sm/normal",
                                                    onClick: this.handleForgotPassword,
                                                }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: X.QB,
                                                children: (0, i.jsx)(f.Button, {
                                                    text: q.intl.string(q.t.dKhVQN),
                                                    fullWidth: !0,
                                                    type: "submit",
                                                    loading: l === Q.aUe.LOGGING_IN,
                                                }),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: X.a5,
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        className: Y.Qt,
                                                        children: q.intl.string(q.t.tmE73r),
                                                    }),
                                                    (0, i.jsx)("span", {
                                                        className: Y.Z8,
                                                        children: (0, i.jsx)(f.QWc, {
                                                            text: q.intl.string(q.t.pV8xeR),
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
                        (0, i.jsx)(f.Fmo, {
                            children: e
                                ? (0, i.jsx)(H.A, {
                                      authTokenCallback: this.handleAuthToken,
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
            className: Y.__invalid_pageContainer,
            children: [
                (0, i.jsx)(E.Ay, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0),
                }),
                t && (0, i.jsx)(N.A, {}),
            ],
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(K.A, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: a()(this.props.authBoxClassName, Y.Sy),
            children: () => [(0, i.jsx)(y.A, { guildTemplate: e }, "template"), this.renderDefaultForm(!1)],
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, i.jsx)(E.Ay, {
            style: { padding: 0 },
            children: (0, i.jsx)(S.t, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    p.h.dispatch({ type: "LOGIN_RESET" });
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
            children: (0, i.jsx)(b.A, {
                title: q.intl.string(q.t.w55Oco),
                subtitle: q.intl.format(q.t.CfRZBj, { onResendClick: this.handleResendCode }),
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
            children: (0, i.jsx)(b.A, {
                title: q.intl.string(q.t["+xqy3d"]),
                subtitle: q.intl.format(q.t.ef4uZ7, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset,
            }),
        });
    }
    renderChooseAccount() {
        let e = () => {
            this.setState((e) => $(Z({}, e), { dismissedChooseAccount: !0 }));
        };
        return (0, i.jsx)(I.A, { onDismiss: e });
    }
    render() {
        let { invite: e, guildTemplate: t, loginStatus: n, handoffAvailable: r } = this.props,
            { checkingHandoff: s, redirecting: l } = this.state;
        if (l || s) return (0, i.jsx)(ee, {});
        if (r) return this.renderHandOffAvailable();
        switch (n) {
            case Q.aUe.LOGGING_IN_MFA_SMS:
            case Q.aUe.MFA_SMS_STEP:
            case Q.aUe.LOGGING_IN_MFA:
            case Q.aUe.MFA_STEP:
                return this.renderMFA();
            case Q.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case Q.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case Q.aUe.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case Q.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case Q.aUe.LOGGING_IN:
            case Q.aUe.NONE:
            default:
                if (null != e && e.state === Q.elq.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === z.QB.RESOLVING) return this.renderResolving();
                    else return this.renderGuildTemplate(t);
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            J(this, "loginRef", void 0),
            J(this, "passwordRef", void 0),
            J(this, "codeRef", void 0),
            J(this, "handleAuthToken", async (e, t) => {
                this.setState({ errors: {} }),
                    await g.A.loginToken(e, !1),
                    G.default.track(Q.HAw.LOGIN_SUCCESSFUL, {
                        source: Q.mdB.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: "remote_auth",
                        login_instance_id: null != t ? t : null,
                    });
            }),
            J(this, "loginReset", () => {
                this.state.conditionalMediationAbortController.abort("Login state reset"),
                    this.setState({ errors: {} }),
                    g.A.loginReset();
            }),
            J(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            J(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            J(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            J(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            J(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            J(this, "handleLogin", async (e) => {
                let { password: t, undelete: n, conditionalMediationAbortController: r } = this.state;
                null == e || e.preventDefault(),
                    r.abort("Starting password login"),
                    M._.dispatch(Q.jej.WAVE_EMPHASIZE),
                    this.setState({ errors: {} });
                try {
                    await g.A.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                        invite: this.props.invite,
                    });
                } catch (t) {
                    let e = (0, x.p)(t);
                    this.setState({ errors: e });
                }
            }),
            J(this, "handleIPAuthorize", async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await T.A.verifyPhone(t, e, !1);
                    await g.A.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            J(this, "handlePasswordReset", async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await T.A.verifyPhone(this.getFullLogin(), e, !1);
                    t(Q.BVt.RESET, {
                        search: (0, o.stringify)({
                            token: n,
                            from_login: "true",
                        }),
                    });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            J(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    M._.dispatch(Q.jej.WAVE_EMPHASIZE),
                    g.A.loginMFAv2({
                        code: n,
                        ticket: r,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                    })
                );
            }),
            J(this, "handleForgotPassword", async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    M._.dispatch(Q.jej.WAVE_EMPHASIZE);
                    let e = await g.A.forgotPassword(t);
                    if (!1 === e) return;
                    e === u.D.ONE_TIME_LOGIN
                        ? (0, f.qfG)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: q.intl.string(q.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, i.jsx)(
                                  d.Modal,
                                  $(
                                      Z(
                                          {
                                              title: q.intl.string(q.t["6Ecyts"]),
                                              actions: t,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, i.jsx)(f.Text, {
                                              variant: "text-md/normal",
                                              children: q.intl.string(q.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, f.qfG)((e) =>
                              (0, i.jsx)(
                                  f.VoidConfirmModal,
                                  $(
                                      Z(
                                          {
                                              header: q.intl.string(q.t.f5Pi7A),
                                              confirmText: q.intl.string(q.t.BddRzS),
                                              className: c.Fr ? Y.Hw : "",
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, i.jsx)(f.Text, {
                                              variant: "text-md/normal",
                                              children: q.intl.format(q.t["6u5hQ9"], { email: t }),
                                          }),
                                      },
                                  ),
                              ),
                          );
                } catch (t) {
                    let e = (0, x.p)(t);
                    this.setState({ errors: e });
                }
            }),
            J(this, "handleResendCode", () => {
                T.A.resendCode(this.getFullLogin());
            }),
            J(this, "handleReset", (e) => {
                null != e && e.preventDefault(),
                    g.A.loginReset(),
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
            }),
            J(this, "handleCancelAccountDeletion", () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            J(this, "handleGotoRegister", () => {
                let e,
                    { login: t } = this.state,
                    {
                        invite: n,
                        giftCode: r,
                        guildTemplate: i,
                        location: s,
                        transitionTo: l,
                        redirectTo: a,
                    } = this.props,
                    c = null != s ? (0, o.parse)(s.search) : {};
                "" !== t && (c.email = t),
                    null != n
                        ? ((c.mode = "register"), (e = Q.BVt.INVITE(n.code)))
                        : null != r
                          ? ((c.mode = "register"), (e = Q.BVt.GIFT_CODE(r.code)))
                          : null != i
                            ? (e = Q.BVt.GUILD_TEMPLATE(i.code))
                            : null != a
                              ? ((e = Q.BVt.REGISTER), (c.redirect_to = a))
                              : (e = Q.BVt.REGISTER),
                    this.loginReset(),
                    l(e, { search: (0, o.stringify)(c) }),
                    M._.dispatch(Q.jej.WAVE_EMPHASIZE);
            });
        const r = null != e.location ? (0, o.parse)(e.location.search) : {};
        this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: "",
            login: null != (t = null != (n = r.email) ? n : r.login) ? t : "",
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
}
J(et, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let en = function (e) {
    (0, P.K)();
    let t = (0, h.cf)([B.A, U.A, D.default, O.A, C.A], () => ({
        authenticated: D.default.isAuthenticated(),
        handoffAvailable: B.A.isHandoffAvailable(),
        user: B.A.user,
        loginStatus: D.default.getLoginStatus(),
        mfaTicket: D.default.getMFATicket(),
        mfaMethods: D.default.getMFAMethods(),
        defaultRoute: U.A.defaultRoute,
        country: C.A.getCountryCode(),
        hasLoggedInAccounts: O.A.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(et, Z({}, e, t));
};
