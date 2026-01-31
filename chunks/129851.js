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
    c = n(511815),
    u = n(158954),
    d = n(311907),
    h = n(139033),
    p = n(397927),
    g = n(73153),
    f = n(830215),
    _ = n(6981),
    m = n(351671),
    A = n(15552),
    x = n(212640),
    E = n(854378),
    v = n(952116),
    y = n(235986),
    b = n(491509),
    j = n(895600),
    O = n(720353),
    I = n(559568),
    S = n(274303),
    N = n(13437),
    C = n(557722),
    T = n(148864),
    R = n(146571),
    w = n(976860),
    P = n(913612),
    k = n(210714),
    L = n(933924),
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
    z = n(652215),
    Q = n(401755),
    q = n(985018),
    Y = n(228723),
    J = n(473169);

function X(e, t, n) {
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
                X(e, t, n[t]);
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
    return (0, i.jsx)(E.Ay, {
        children: (0, i.jsx)(p.y$y, {}),
    });
}
class et extends (r = s.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n
            ? null
            : {
                  checkingHandoff: !1,
              };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, _.ST)() : t && this.loginOrSSO(t, i, !0),
            G.default.track(
                z.HAw.LOGIN_VIEWED,
                $(
                    Z(
                        {
                            location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
                            login_source: this.loginSource,
                            authenticated: t,
                        },
                        null != n ? (0, b.A)(n, !1, !1) : {},
                    ),
                    {
                        source: (0, w.PR)(),
                    },
                ),
                {
                    flush: !0,
                },
            ),
            t ||
                (0, L.a)({
                    abortController: this.state.conditionalMediationAbortController,
                    loginSource: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                }),
            f.A.getLocationMetadata(),
            (0, k.d)("login");
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
        return null != i ? (0, m.Q)(i) : null;
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
            (this.setState({
                redirecting: !0,
            }),
            n ? f.A.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, o.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) {
            if ((0, x.RZ)(n)) return void (0, x.NY)(n);
            null != r ? r(n) : t(n);
        } else if (null == i.service) t(z.BVt.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + z.Rsh.SSO,
                t = $(Z({}, i), {
                    token: D.default.getToken(),
                });
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
                    className: J.QB,
                    children: q.intl.string(q.t.S6RMNA),
                }),
                (0, i.jsx)(E.tK, {
                    children: q.intl.string(q.t.YZiJbh),
                }),
            ],
        });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === z.aUe.ACCOUNT_DISABLED,
            n = t ? q.intl.string(q.t["j3rC+U"]) : q.intl.string(q.t.ZFWofo),
            r = t ? q.intl.string(q.t["6eNTWe"]) : q.intl.string(q.t["pCBti+"]);
        return (0, i.jsx)(E.Ay, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(p.Fmo, {
                component: (0, i.jsx)(E.hE, {
                    className: J.QB,
                    children: n,
                }),
                children: [
                    (0, i.jsx)(E.tK, {
                        className: J.SX,
                        children: r,
                    }),
                    (0, i.jsxs)(E.eB, {
                        children: [
                            (0, i.jsx)(p.Button, {
                                text: q.intl.string(q.t.JhDw5o),
                                fullWidth: !0,
                                type: "submit",
                            }),
                            (0, i.jsx)("div", {
                                className: a()(J.Ot, Y.Qt),
                                children: q.intl.format(q.t.js2rr5, {
                                    onClick: this.handleCancelAccountDeletion,
                                }),
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
                    className: J.QX,
                    children: [
                        (0, i.jsx)(R.A, {
                            className: J.SX,
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
                            className: J.SX,
                            label: q.intl.string(q.t["CIGa+7"]),
                            onChange: (e) =>
                                this.setState({
                                    password: e,
                                }),
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            value: this.state.password,
                            required: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: J.QB,
                            children: (0, i.jsx)(p.Button, {
                                text: q.intl.string(q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                disabled: !0,
                            }),
                        }),
                        (0, i.jsx)(p.QWc, {
                            text: q.intl.string(q.t.wWIufs),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: J.a5,
                            children: (0, i.jsx)(p.QWc, {
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
                          className: J.S3,
                          children: (0, i.jsx)(W.A, {
                              invite: r,
                          }),
                      })
                    : null != s
                      ? (0, i.jsx)(V.A, {
                            giftCode: s,
                        })
                      : (0, i.jsxs)("div", {
                            className: Y.wx,
                            children: [
                                (0, i.jsx)(
                                    E.hE,
                                    {
                                        className: J.QB,
                                        children: q.intl.string(q.t["7fNJgA"]),
                                    },
                                    "title",
                                ),
                                !1 === (0, F.isAndroidWeb)()
                                    ? (0, i.jsx)(
                                          E.tK,
                                          {
                                              children: q.intl.string(q.t.euS7r4),
                                          },
                                          "subtitle",
                                      )
                                    : null,
                            ],
                        })),
            (0, i.jsxs)(
                y.A,
                {
                    direction: y.A.Direction.HORIZONTAL,
                    align: y.A.Align.CENTER,
                    children: [
                        (0, i.jsxs)("div", {
                            className: Y.Eh,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)("div", {
                                        className: Y.AX,
                                        children: (0, i.jsx)(p.Button, {
                                            onClick: () => {
                                                this.setState((e) =>
                                                    $(Z({}, e), {
                                                        dismissedChooseAccount: !1,
                                                    }),
                                                );
                                            },
                                            variant: "secondary",
                                            text: q.intl.string(q.t["1MrpWO"]),
                                            icon: p.n2b,
                                        }),
                                    }),
                                n,
                                (0, i.jsx)(p.Fmo, {
                                    children: (0, i.jsxs)(E.eB, {
                                        className: J.QX,
                                        children: [
                                            (0, i.jsx)(R.A, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(" ")[0],
                                                className: J.SX,
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
                                                onChange: (e) =>
                                                    this.setState({
                                                        password: e,
                                                    }),
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
                                                className: a()(J.SX, J.a5),
                                                children: (0, i.jsx)(p.QWc, {
                                                    text: q.intl.string(q.t.wWIufs),
                                                    textVariant: "text-sm/normal",
                                                    onClick: this.handleForgotPassword,
                                                }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: J.QB,
                                                children: (0, i.jsx)(p.Button, {
                                                    text: q.intl.string(q.t.dKhVQN),
                                                    fullWidth: !0,
                                                    type: "submit",
                                                    loading: l === z.aUe.LOGGING_IN,
                                                }),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: J.a5,
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        className: Y.Qt,
                                                        children: q.intl.string(q.t.tmE73r),
                                                    }),
                                                    (0, i.jsx)("span", {
                                                        className: Y.Z8,
                                                        children: (0, i.jsx)(p.QWc, {
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
                        (0, i.jsx)(p.Fmo, {
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
                t && (0, i.jsx)(I.A, {}),
            ],
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(K.A, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: a()(this.props.authBoxClassName, Y.Sy),
            children: () => [
                (0, i.jsx)(
                    j.A,
                    {
                        guildTemplate: e,
                    },
                    "template",
                ),
                this.renderDefaultForm(!1),
            ],
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, i.jsx)(E.Ay, {
            style: {
                padding: 0,
            },
            children: (0, i.jsx)(O.t, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    g.h.dispatch({
                        type: "LOGIN_RESET",
                    });
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
            children: (0, i.jsx)(v.A, {
                title: q.intl.string(q.t.w55Oco),
                subtitle: q.intl.format(q.t.CfRZBj, {
                    onResendClick: this.handleResendCode,
                }),
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
            children: (0, i.jsx)(v.A, {
                title: q.intl.string(q.t["+xqy3d"]),
                subtitle: q.intl.format(q.t.ef4uZ7, {
                    onResendClick: this.handleResendCode,
                }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset,
            }),
        });
    }
    renderChooseAccount() {
        let e = () => {
            this.setState((e) =>
                $(Z({}, e), {
                    dismissedChooseAccount: !0,
                }),
            );
        };
        return (0, i.jsx)(N.A, {
            onDismiss: e,
        });
    }
    render() {
        let { invite: e, guildTemplate: t, loginStatus: n, handoffAvailable: r } = this.props,
            { checkingHandoff: s, redirecting: l } = this.state;
        if (l || s) return (0, i.jsx)(ee, {});
        if (r) return this.renderHandOffAvailable();
        switch (n) {
            case z.aUe.LOGGING_IN_MFA_SMS:
            case z.aUe.MFA_SMS_STEP:
            case z.aUe.LOGGING_IN_MFA:
            case z.aUe.MFA_STEP:
                return this.renderMFA();
            case z.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case z.aUe.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case z.aUe.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case z.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case z.aUe.LOGGING_IN:
            case z.aUe.NONE:
            default:
                if (null != e && e.state === z.elq.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === Q.QB.RESOLVING) return this.renderResolving();
                    else return this.renderGuildTemplate(t);
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            X(this, "loginRef", void 0),
            X(this, "passwordRef", void 0),
            X(this, "codeRef", void 0),
            X(this, "handleAuthToken", async (e, t) => {
                this.setState({
                    errors: {},
                }),
                    await f.A.loginToken(e, !1),
                    G.default.track(z.HAw.LOGIN_SUCCESSFUL, {
                        source: z.mdB.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: "remote_auth",
                        login_instance_id: null != t ? t : null,
                    });
            }),
            X(this, "loginReset", () => {
                this.state.conditionalMediationAbortController.abort("Login state reset"),
                    this.setState({
                        errors: {},
                    }),
                    f.A.loginReset();
            }),
            X(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            X(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            X(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            X(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            X(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            X(this, "handleLogin", async (e) => {
                let { password: t, undelete: n, conditionalMediationAbortController: r } = this.state;
                null == e || e.preventDefault(),
                    r.abort("Starting password login"),
                    M._.dispatch(z.jej.WAVE_EMPHASIZE),
                    this.setState({
                        errors: {},
                    });
                try {
                    await f.A.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                        invite: this.props.invite,
                    });
                } catch (t) {
                    let e = (0, A.p)(t);
                    this.setState({
                        errors: e,
                    });
                }
            }),
            X(this, "handleIPAuthorize", async (e) => {
                let t = this.getFullLogin();
                this.setState({
                    errors: {},
                });
                try {
                    let { token: n } = await C.A.verifyPhone(t, e, !1);
                    await f.A.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body &&
                        null != e.body.message &&
                        this.setState({
                            phoneVerifyError: e.body.message,
                        });
                }
            }),
            X(this, "handlePasswordReset", async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({
                    phoneVerifyError: null,
                });
                try {
                    let { token: n } = await C.A.verifyPhone(this.getFullLogin(), e, !1);
                    t(z.BVt.RESET, {
                        search: (0, o.stringify)({
                            token: n,
                            from_login: "true",
                        }),
                    });
                } catch (e) {
                    null != e.body &&
                        null != e.body.message &&
                        this.setState({
                            phoneVerifyError: e.body.message,
                        });
                }
            }),
            X(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    M._.dispatch(z.jej.WAVE_EMPHASIZE),
                    f.A.loginMFAv2({
                        code: n,
                        ticket: r,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                    })
                );
            }),
            X(this, "handleForgotPassword", async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({
                    errors: {},
                });
                try {
                    M._.dispatch(z.jej.WAVE_EMPHASIZE);
                    let e = await f.A.forgotPassword(t);
                    if (!1 === e) return;
                    e === c.D.ONE_TIME_LOGIN
                        ? (0, p.qfG)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: q.intl.string(q.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, i.jsx)(
                                  u.Modal,
                                  $(
                                      Z(
                                          {
                                              title: q.intl.string(q.t["6Ecyts"]),
                                              actions: t,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, i.jsx)(p.Text, {
                                              variant: "text-md/normal",
                                              children: q.intl.string(q.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, h.A)({
                              title: q.intl.string(q.t.f5Pi7A),
                              subtitle: q.intl.format(q.t["6u5hQ9"], {
                                  email: t,
                              }),
                          });
                } catch (t) {
                    let e = (0, A.p)(t);
                    this.setState({
                        errors: e,
                    });
                }
            }),
            X(this, "handleResendCode", () => {
                C.A.resendCode(this.getFullLogin());
            }),
            X(this, "handleReset", (e) => {
                null != e && e.preventDefault(),
                    f.A.loginReset(),
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
            X(this, "handleCancelAccountDeletion", () => {
                this.setState(
                    {
                        undelete: !0,
                    },
                    this.handleLogin,
                );
            }),
            X(this, "handleGotoRegister", () => {
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
                        ? ((c.mode = "register"), (e = z.BVt.INVITE(n.code)))
                        : null != r
                          ? ((c.mode = "register"), (e = z.BVt.GIFT_CODE(r.code)))
                          : null != i
                            ? (e = z.BVt.GUILD_TEMPLATE(i.code))
                            : null != a
                              ? ((e = z.BVt.REGISTER), (c.redirect_to = a))
                              : (e = z.BVt.REGISTER),
                    this.loginReset(),
                    l(e, {
                        search: (0, o.stringify)(c),
                    }),
                    M._.dispatch(z.jej.WAVE_EMPHASIZE);
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
X(et, "defaultProps", {
    transitionTo: (e) => n.g.location.assign(e),
});
let en = function (e) {
    (0, P.K)();
    let t = (0, d.cf)([B.A, U.A, D.default, S.A, T.A], () => ({
        authenticated: D.default.isAuthenticated(),
        handoffAvailable: B.A.isHandoffAvailable(),
        user: B.A.user,
        loginStatus: D.default.getLoginStatus(),
        mfaTicket: D.default.getMFATicket(),
        mfaMethods: D.default.getMFAMethods(),
        defaultRoute: U.A.defaultRoute,
        country: T.A.getCountryCode(),
        hasLoggedInAccounts: S.A.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(et, Z({}, e, t));
};
