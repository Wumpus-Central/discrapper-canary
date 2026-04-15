"use strict";
n.d(t, { A: () => es }), n(801541);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(889137),
    c = n(110259),
    d = n(311907),
    u = n(451988),
    h = n(990078),
    _ = n(397927),
    p = n(830215),
    g = n(198982),
    m = n(17841),
    A = n(965252),
    f = n(201505),
    E = n(139286),
    x = n(934337),
    I = n(15552),
    N = n(906564),
    v = n(854378),
    T = n(359438),
    C = n(442184),
    j = n(383302);
n(829926);
var S = n(491509),
    y = n(895600),
    b = n(274303),
    R = n(942614),
    O = n(148864),
    L = n(976860),
    w = n(210714),
    k = n(493527),
    D = n(544395),
    B = n(546727),
    P = n(975169),
    U = n(794696),
    G = n(961350),
    F = n(153488),
    M = n(650048),
    V = n(954571),
    W = n(203982),
    H = n(927813),
    K = n(240248),
    z = n(161928),
    Q = n(890698),
    q = n(538796),
    Y = n(652215),
    X = n(68729);
n(436317);
var J = n(771016);
n(45723);
var $ = n(985018),
    Z = n(135622),
    ee = n(885106);
d.Ay.initialize();
let et = /\.$/,
    en = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(et, ""))
                  .join(". ")
                  .trim()
            : e;
class ei extends s.PureComponent {
    emailRef;
    usernameRef;
    globalNameRef;
    passwordRef;
    dateOfBirthRef = s.createRef();
    _retryTimer = new u.Ep();
    static defaultProps = { giftCodeResolved: !1, transitionTo: L.pX };
    constructor(e) {
        super(e);
        const t = null != e.location ? (0, a.parse)(e.location.search) : {};
        this.state = {
            email: t.email ?? "",
            username: "",
            globalName: "",
            password: "",
            parsedDateOfBirth: null,
            emailClientError: null,
            usernameClientError: null,
            passwordClientError: null,
            dateOfBirthClientError: null,
            globalNameClientError: null,
            consent: !e.consentRequired,
            consentRequiredProp: e.consentRequired,
            isRateLimited: !1,
            globalNameFocused: !1,
            usernameFocused: !1,
            registering: !1,
            apiErrors: {},
        };
    }
    get registrationSource() {
        let { giftCode: e, guildTemplate: t, invite: n } = this.props;
        if (null != e) return "gift";
        if (null != t) return "guild_template";
        if (null != n) {
            if (null != n.guild) return "guild_invite";
            else if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
        }
        return null;
    }
    hasConsent() {
        let { consentRequired: e } = this.props,
            { consent: t } = this.state;
        return null != e && t;
    }
    componentDidMount() {
        this.redirectIfAuthenticated();
        let { giftCodeSKU: e, invite: t } = this.props;
        V.default.track(
            Y.HAw.REGISTER_VIEWED,
            {
                location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                registration_source: this.registrationSource,
                ...(null != e ? (0, S.A)(e, !1, !1) : {}),
            },
            { flush: !0 },
        ),
            null == this.props.consentRequired && p.A.getLocationMetadata(),
            (0, w.d)("register");
    }
    componentWillUnmount() {
        this._retryTimer.stop();
    }
    static getDerivedStateFromProps(e, t) {
        let { consentRequired: n } = e,
            { consentRequiredProp: i } = t;
        return null == i && null != n ? { consent: !n, consentRequiredProp: n } : { consentRequiredProp: n };
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, isUnderage: i, onChangeStep: s } = this.props,
            { apiErrors: r, parsedDateOfBirth: l } = this.state;
        (t.apiErrors !== r || t.parsedDateOfBirth !== l) &&
            (this.hasError("email") || this.hasError("phone")
                ? null != this.emailRef && this.emailRef.focus()
                : this.hasError("username")
                  ? null != this.usernameRef && this.usernameRef.focus()
                  : this.hasError("global_name")
                    ? null != this.globalNameRef && this.globalNameRef.focus()
                    : this.hasError("password")
                      ? null != this.passwordRef && this.passwordRef.focus()
                      : null == this.state.parsedDateOfBirth
                        ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus()
                        : this.hasError("retry_after") &&
                          "number" == typeof r.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(r.retry_after * H.A.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, R.C)(J.zY.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = X.ju.FULL;
        i || this.hasError("date_of_birth")
            ? (a = X.ju.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (a = X.ju.INVITE),
            s(a);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : M.A.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: s, parsedDateOfBirth: r } = this.state,
            { invite: l, guildTemplate: a, giftCode: o, onRegister: c, usernameSuggestion: d } = this.props,
            u = null != l ? l.code : null,
            h = null != o ? o.skuId : null,
            _ = x.mZ.getState(),
            p = (0, K.uJ)(d) ? null : t === d;
        W._.dispatch(Y.jej.WAVE_EMPHASIZE), this.setState({ registering: !0, apiErrors: {} });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, N.Ay)({
                      consent: s,
                      invite: u,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: p,
                      globalName: n,
                      birthday: r,
                  })
                : await (0, N.pG)({
                      email: e,
                      username: t,
                      globalName: n,
                      consent: s,
                      password: i,
                      invite: u,
                      usedUsernameSuggestion: p,
                      guildTemplateCode: a?.code,
                      giftCodeSKUId: h,
                      birthday: r,
                      promoEmailConsent: _.required ? _ : null,
                  }),
                c?.();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof g.LG))) return;
            let e = (0, I.W)(t);
            this.setState({ apiErrors: e });
        }
    }
    handleGotoLogin = (e) => {
        let t,
            { email: n } = this.state,
            {
                giftCode: i,
                guildTemplate: s,
                invite: r,
                location: l,
                onLoginStart: o,
                redirectTo: c,
                transitionTo: d,
            } = this.props,
            u = null != l ? (0, a.parse)(l.search) : {};
        null != r
            ? (t = Y.BVt.INVITE_LOGIN(r.code))
            : null != i
              ? (t = Y.BVt.GIFT_CODE_LOGIN(i.code))
              : null != s
                ? (t = Y.BVt.GUILD_TEMPLATE_LOGIN(s.code))
                : null != c
                  ? ((t = Y.BVt.LOGIN), (u.redirect_to = c))
                  : ((t = Y.BVt.LOGIN), "" !== n && (u = { email: n })),
            p.A.loginReset(),
            d(t, { search: (0, a.stringify)(u), source: "register" }),
            o?.(e),
            W._.dispatch(Y.jej.WAVE_EMPHASIZE);
    };
    handleSubmit = (e) => {
        e?.preventDefault();
        let { email: t, username: n, password: i, parsedDateOfBirth: s, globalName: r } = this.state,
            { consentRequired: l } = this.props;
        if (null === l) return;
        let a = this.inGuildOrChannelInviteFlow(),
            o = !1;
        a
            ? 0 === r.length && (this.setState({ globalNameClientError: $.intl.string($.t.EkokLy) }), (o = !0))
            : (0 === t.length && (this.setState({ emailClientError: $.intl.string($.t.EkokLy) }), (o = !0)),
              0 === n.length && (this.setState({ usernameClientError: $.intl.string($.t.EkokLy) }), (o = !0)),
              0 === i.length && (this.setState({ passwordClientError: $.intl.string($.t.EkokLy) }), (o = !0))),
            null == s && (this.setState({ dateOfBirthClientError: $.intl.string($.t.EkokLy) }), (o = !0)),
            o || this.handleRegister();
    };
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    trackInputFocus = (e) => {
        V.default.track(Y.HAw.REGISTER_INPUT_FOCUS, { field: e });
    };
    trackInputBlur = (e) => {
        V.default.track(Y.HAw.REGISTER_INPUT_BLUR, { field: e });
    };
    renderConsentComponent() {
        let { consent: e } = this.state,
            { consentRequired: t } = this.props;
        return t
            ? (0, i.jsx)("div", {
                  className: Z.IQ,
                  children: (0, i.jsx)(_.JuY, {
                      label: $.intl.format($.t.qMDAP0, { termsURL: Y.X7G.TERMS, privacyURL: Y.X7G.PRIVACY }),
                      checked: e,
                      onChange: (e) => this.setState({ consent: e }),
                      labelType: "secondary",
                  }),
              })
            : (0, i.jsx)(_.Text, {
                  variant: "text-sm/normal",
                  color: "text-subtle",
                  className: l()(ee.Ot, Z.E2),
                  children: $.intl.format($.t["KI+BSb"], { termsURL: Y.X7G.TERMS, privacyURL: Y.X7G.PRIVACY }),
              });
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, i.jsxs)(v.Ay, {
            className: e,
            children: [
                (0, i.jsx)(Q.M, {}),
                (0, i.jsxs)(v.eB, {
                    className: Z.y0,
                    children: [
                        (0, i.jsx)(h.m, {
                            text: $.intl.string($.t["hBB85/"]),
                            position: "right",
                            children: (0, i.jsx)(v.pd, {
                                label: $.intl.string($.t["9AjdkD"]),
                                autoFocus: !0,
                                className: ee.QB,
                                name: "username",
                                value: n,
                                placeholder: $.intl.string($.t["09Q8yp"]),
                                onChange: t,
                                onFocus: () => this.trackInputFocus("username"),
                                onBlur: () => this.trackInputBlur("username"),
                            }),
                        }),
                        (0, i.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: l()(ee.QX, Z.E2),
                            children: $.intl.format($.t["KI+BSb"], {
                                termsURL: Y.X7G.TERMS,
                                privacyURL: Y.X7G.PRIVACY,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: ee.Ot,
                            children: (0, i.jsx)(_.Button, {
                                text: $.intl.string($.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                disabled: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: ee.QX,
                            children: (0, i.jsx)(_.QWc, {
                                text: $.intl.string($.t["1lWxux"]),
                                textVariant: "text-sm/normal",
                                disabled: !0,
                            }),
                        }),
                    ],
                }),
            ],
        });
    }
    renderInviteHeader() {
        let { invite: e } = this.props;
        return e?.guild_scheduled_event != null
            ? (0, i.jsx)(T.X, { channel: e.channel, guildScheduledEvent: e.guild_scheduled_event })
            : (0, i.jsx)("div", { className: ee.S3, children: (0, i.jsx)(Q.A, { invite: e, inUnclaimedFlow: !0 }) });
    }
    renderInviteButton() {
        let { consentRequired: e } = this.props,
            { consent: t, registering: n } = this.state,
            s = $.intl.string($.t["825cFy"]);
        return (0, i.jsx)(h.m, {
            text: !t && e ? $.intl.string($.t.AY4IVA) : null,
            children: (0, i.jsx)("div", {
                className: ee.Ot,
                children: (0, i.jsx)(_.Button, {
                    text: s,
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    loading: n,
                    disabled: !this.hasConsent(),
                }),
            }),
        });
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: s, date_of_birth: r },
                globalName: l,
                globalNameClientError: a,
                dateOfBirthClientError: o,
                parsedDateOfBirth: c,
            } = this.state,
            d = e?.guild_scheduled_event != null,
            u = (e) => {
                this.setState({ globalName: e });
            };
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(v.Ay, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        d ? (0, i.jsx)("div", { className: Z.yF }) : null,
                        (0, i.jsxs)(v.eB, {
                            className: d ? void 0 : Z.y0,
                            children: [
                                (0, i.jsx)(_.ksK, {
                                    helperText: $.intl.string($.t["330TCc"]),
                                    label: $.intl.string($.t["9AjdkD"]),
                                    error: a ?? en(s ?? n),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: l,
                                    placeholder: $.intl.string($.t["09Q8yp"]),
                                    onChange: u,
                                    onFocus: () => {
                                        this.setState({ globalNameFocused: !0 }), this.trackInputFocus("global_name");
                                    },
                                    onBlur: () => {
                                        this.setState({ globalNameFocused: !1 }), this.trackInputBlur("global_name");
                                    },
                                }),
                                (0, i.jsx)(f.A, {
                                    label: $.intl.string($.t.rhBeKe),
                                    wrapperClassName: Z.DC,
                                    name: "date_of_birth",
                                    onChange: this.handleBirthdayChange,
                                    ref: this.dateOfBirthRef,
                                    error: o ?? en(r),
                                    value: c,
                                }),
                                this.renderConsentComponent(),
                                this.renderInviteButton(),
                                (0, i.jsx)("div", {
                                    className: ee.QX,
                                    children: (0, i.jsx)(_.QWc, {
                                        text: $.intl.string($.t["1lWxux"]),
                                        textVariant: "text-sm/normal",
                                        onClick: this.handleGotoLogin,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != e && d
                    ? (0, i.jsx)(v.Ay, {
                          className: ee.QX,
                          children: (0, i.jsx)(j.N, { guild: e.guild, onlineCount: e.approximate_presence_count }),
                      })
                    : null,
            ],
        });
    }
    renderErrorMessage() {
        let {
            apiErrors: { message: e },
        } = this.state;
        return "string" != typeof e ? null : (0, i.jsx)(v.ME, { className: l()(ee.QX, Z.gJ), children: e });
    }
    handleBirthdayChange = (e) => {
        this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
    };
    renderUsernameValidation = () => {
        let { username: e, globalName: t, usernameFocused: n } = this.state,
            { usernameSuggestion: s } = this.props,
            r = () => {
                null != this.usernameRef && this.usernameRef.focus(),
                    null != s && s.length > 0 && this.setState({ username: s });
            };
        return (0, i.jsx)(er, {
            username: e,
            suggestion: s,
            globalName: t,
            isUsernameFocused: n,
            onClickSuggestion: r,
        });
    };
    renderFull(e, t) {
        let {
                email: n,
                username: r,
                globalName: a,
                password: o,
                consent: c,
                parsedDateOfBirth: d,
                globalNameFocused: u,
                emailClientError: p,
                usernameClientError: g,
                passwordClientError: m,
                dateOfBirthClientError: A,
                registering: E,
                apiErrors: { email: x, username: I, global_name: N, password: T, date_of_birth: j } = {},
            } = this.state,
            { consentRequired: S, authBoxClassName: y, hasLoggedInAccounts: b } = this.props,
            R = this.renderErrorMessage(),
            O = (0, i.jsx)(h.m, {
                text: !c && S ? $.intl.string($.t.AY4IVA) : null,
                children: (0, i.jsx)("div", {
                    className: ee.QX,
                    children: (0, i.jsx)(_.Button, {
                        text: $.intl.string($.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: E,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                    }),
                }),
            }),
            L = async () => {
                this.setState({ usernameFocused: !0 }),
                    a.length > 0 &&
                        !D.A.wasRegistrationSuggestionFetched(a) &&
                        (await k.A.fetchSuggestionsRegistration(a));
            },
            w = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null,
                });
            },
            B =
                null != e
                    ? (0, i.jsx)(s.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(v.hE, { children: $.intl.string($.t.wC4TlR) }, "title"),
            P = (0, i.jsxs)(v.eB, {
                className: ee.QX,
                children: [
                    (0, i.jsx)(v.pd, {
                        autoFocus: !0,
                        className: ee.SX,
                        label: $.intl.string($.t.dI4d4S),
                        name: "email",
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null,
                            }),
                        error: p ?? en(x),
                        type: "email",
                        autoComplete: "username",
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("email"),
                        onBlur: () => this.trackInputBlur("email"),
                    }),
                    (0, i.jsx)(v.pd, {
                        label: $.intl.string($.t["9AjdkD"]),
                        className: ee.SX,
                        name: "global_name",
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: en(N),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => {
                            this.setState({ globalNameFocused: !0 }), this.trackInputFocus("global_name");
                        },
                        onBlur: () => {
                            this.setState({ globalNameFocused: !1 }), this.trackInputBlur("global_name");
                        },
                    }),
                    (0, i.jsx)(U.A, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: $.intl.string($.t["330TCc"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: L,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(v.pd, {
                                label: $.intl.string($.t.TWzdWj),
                                className: ee.SX,
                                name: "username",
                                value: r,
                                onChange: w,
                                error: g ?? en(I),
                                autoComplete: "off",
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0,
                                onFocus: () => this.trackInputFocus("username"),
                                onBlur: () => this.trackInputBlur("username"),
                            }),
                            this.renderUsernameValidation(),
                        ],
                    }),
                    (0, i.jsx)(v.pd, {
                        label: $.intl.string($.t["CIGa+7"]),
                        name: "password",
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null,
                            }),
                        error: m ?? en(T),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("password"),
                        onBlur: () => this.trackInputBlur("password"),
                    }),
                    (0, i.jsx)(f.A, {
                        label: $.intl.string($.t.rhBeKe),
                        wrapperClassName: Z.UJ,
                        name: "date_of_birth",
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: A ?? en(j),
                        value: d,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur,
                    }),
                    (0, i.jsx)(C.A, {}),
                    this.renderConsentComponent(),
                    O,
                    R,
                    (0, i.jsx)("div", {
                        className: ee.QX,
                        children: (0, i.jsx)(_.QWc, {
                            text: $.intl.string($.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: this.handleGotoLogin,
                        }),
                    }),
                ],
            });
        return t
            ? (0, i.jsx)(q.A, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: l()(y, Z.Sy),
                  children: () => [
                      B,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: Z.Uu,
                              children: [(0, i.jsx)(v.hE, { className: Z.lR, children: $.intl.string($.t.wC4TlR) }), P],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(v.Ay, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: y,
                  children: [
                      b
                          ? (0, i.jsx)("div", {
                                className: Z.AX,
                                children: (0, i.jsx)(_.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: $.intl.string($.t["1MrpWO"]),
                                    icon: _.n2b,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      B,
                      P,
                  ],
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError("date_of_birth")) return (0, i.jsx)(A.A, {});
        let { giftCode: n, invite: s, guildTemplate: r } = this.props,
            l = null != s && null == s.guild && null == s.channel && null != s.inviter;
        return null != s && t
            ? s.state === Y.elq.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != r
              ? this.renderFull(() => (0, i.jsx)(y.A, { guildTemplate: r }), !0)
              : null != n
                ? this.renderFull(() => (0, i.jsx)(z.A, { giftCode: n }))
                : null != s && l && s.state === Y.elq.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)("div", {
                            className: ee.S3,
                            children: (0, i.jsx)(Q.A, { invite: s, isRegister: !0 }),
                        }),
                    )
                  : this.renderFull();
    }
}
function es(e) {
    let t = (0, d.cf)([F.A, G.default, m.A, O.A, b.A], () => ({
            consentRequired: F.A.getAuthenticationConsentRequired(),
            authenticated: G.default.isAuthenticated(),
            isUnderage: m.A.isUnderageAnonymous(),
            country: O.A.getCountryCode(),
            hasLoggedInAccounts: b.A.getHasLoggedInAccounts(),
        })),
        n = (0, d.bG)([D.A], () => D.A.registrationUsernameSuggestion()),
        [r, l] = s.useState(X.ju.FULL);
    return (
        (0, E.A)(
            {
                type: c.ImpressionTypes.VIEW,
                name: c.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: c.ImpressionGroups.USER_REGISTRATION_FLOW, step: r },
            },
            {},
            [r],
        ),
        (0, i.jsx)(ei, { onChangeStep: (e) => l(e), usernameSuggestion: n, ...e, ...t })
    );
}
function er(e) {
    let t,
        { username: n, suggestion: s, globalName: r, isUsernameFocused: l, onClickSuggestion: a } = e,
        c = (0, P.i)(n, !0, !0),
        d = n.length > 0;
    return (
        (t = d
            ? (0, o.YW)(c)
                  .with({ type: B.q.ERROR, message: o.P.select() }, (e) =>
                      (0, i.jsx)(_.Text, { className: Z.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: B.q.AVAILABLE, message: o.P.select() }, (e) =>
                      (0, i.jsx)(_.Text, { className: Z.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(_.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: $.intl.string($.t.z7c4bP),
                      }),
                  )
            : null != s && s.length > 0 && r.length > 0
              ? (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: $.intl.format($.t.nDGqqq, { suggestion: s, nameOnClick: a }),
                })
              : (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: $.intl.string($.t.z7c4bP),
                })),
        (0, i.jsx)(U.A, { show: (d && c?.type === B.q.ERROR) || l, top: -12, bottom: 20, children: t })
    );
}
