"use strict";
n.d(t, { A: () => X });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(110259),
    c = n(311907),
    d = n(451988),
    u = n(397927),
    h = n(830215),
    _ = n(198982),
    p = n(17841),
    m = n(965252),
    g = n(139286),
    A = n(934337),
    f = n(15552),
    E = n(906564),
    x = n(908192),
    I = n(341826),
    N = n(669629),
    v = n(854378);
n(829926);
var C = n(491509),
    T = n(895600),
    j = n(274303),
    S = n(942614),
    y = n(148864),
    b = n(976860),
    R = n(210714),
    O = n(493527),
    L = n(544395),
    w = n(961350),
    k = n(153488),
    B = n(650048),
    D = n(954571),
    P = n(203982),
    U = n(927813),
    G = n(240248),
    F = n(161928),
    M = n(890698),
    V = n(538796),
    W = n(652215),
    H = n(68729);
n(436317);
var K = n(771016),
    z = n(985018),
    Q = n(135622),
    q = n(885106);
c.Ay.initialize();
class Y extends s.PureComponent {
    emailRef;
    usernameRef;
    globalNameRef;
    passwordRef;
    dateOfBirthRef = s.createRef();
    _retryTimer = new d.Ep();
    static defaultProps = { giftCodeResolved: !1, transitionTo: b.pX };
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
    componentDidMount() {
        this.redirectIfAuthenticated();
        let { giftCodeSKU: e, invite: t } = this.props;
        D.default.track(
            W.HAw.REGISTER_VIEWED,
            {
                location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                registration_source: this.registrationSource,
                ...(null != e ? (0, C.A)(e, !1, !1) : {}),
            },
            { flush: !0 },
        ),
            null == this.props.consentRequired && h.A.getLocationMetadata(),
            (0, R.d)("register");
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
                          this._retryTimer.start(r.retry_after * U.A.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, S.C)(K.zY.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = H.ju.FULL;
        i || this.hasError("date_of_birth")
            ? (a = H.ju.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (a = H.ju.INVITE),
            s(a);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : B.A.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: s, parsedDateOfBirth: r } = this.state,
            { invite: l, guildTemplate: a, giftCode: o, onRegister: c, usernameSuggestion: d } = this.props,
            u = null != l ? l.code : null,
            h = null != o ? o.skuId : null,
            p = A.mZ.getState(),
            m = (0, G.uJ)(d) ? null : t === d;
        P._.dispatch(W.jej.WAVE_EMPHASIZE), this.setState({ registering: !0, apiErrors: {} });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, E.Ay)({
                      consent: s,
                      invite: u,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: m,
                      globalName: n,
                      birthday: r,
                  })
                : await (0, E.pG)({
                      email: e,
                      username: t,
                      globalName: n,
                      consent: s,
                      password: i,
                      invite: u,
                      usedUsernameSuggestion: m,
                      guildTemplateCode: a?.code,
                      giftCodeSKUId: h,
                      birthday: r,
                      promoEmailConsent: p.required ? p : null,
                  }),
                c?.();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof _.LG))) return;
            let e = (0, f.W)(t);
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
            ? (t = W.BVt.INVITE_LOGIN(r.code))
            : null != i
              ? (t = W.BVt.GIFT_CODE_LOGIN(i.code))
              : null != s
                ? (t = W.BVt.GUILD_TEMPLATE_LOGIN(s.code))
                : null != c
                  ? ((t = W.BVt.LOGIN), (u.redirect_to = c))
                  : ((t = W.BVt.LOGIN), "" !== n && (u = { email: n })),
            h.A.loginReset(),
            d(t, { search: (0, a.stringify)(u), source: "register" }),
            o?.(e),
            P._.dispatch(W.jej.WAVE_EMPHASIZE);
    };
    handleSubmit = (e) => {
        e?.preventDefault();
        let { email: t, username: n, password: i, parsedDateOfBirth: s, globalName: r } = this.state,
            { consentRequired: l } = this.props;
        if (null === l) return;
        let a = this.inGuildOrChannelInviteFlow(),
            o = !1;
        a
            ? 0 === r.length && (this.setState({ globalNameClientError: z.intl.string(z.t.EkokLy) }), (o = !0))
            : (0 === t.length && (this.setState({ emailClientError: z.intl.string(z.t.EkokLy) }), (o = !0)),
              0 === n.length && (this.setState({ usernameClientError: z.intl.string(z.t.EkokLy) }), (o = !0)),
              0 === i.length && (this.setState({ passwordClientError: z.intl.string(z.t.EkokLy) }), (o = !0))),
            null == s && (this.setState({ dateOfBirthClientError: z.intl.string(z.t.EkokLy) }), (o = !0)),
            o || this.handleRegister();
    };
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    trackInputFocus = (e) => {
        D.default.track(W.HAw.REGISTER_INPUT_FOCUS, { field: e });
    };
    trackInputBlur = (e) => {
        D.default.track(W.HAw.REGISTER_INPUT_BLUR, { field: e });
    };
    handleBirthdayChange = (e) => {
        this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
    };
    renderFull(e, t) {
        let {
                email: n,
                username: r,
                globalName: a,
                password: o,
                consent: c,
                parsedDateOfBirth: d,
                globalNameFocused: h,
                emailClientError: _,
                usernameClientError: p,
                passwordClientError: m,
                dateOfBirthClientError: g,
                registering: A,
                apiErrors: f,
                isRateLimited: E,
                usernameFocused: I,
            } = this.state,
            { consentRequired: N, authBoxClassName: C, hasLoggedInAccounts: T, usernameSuggestion: j } = this.props,
            S = async () => {
                this.setState({ usernameFocused: !0 }),
                    a.length > 0 &&
                        !L.A.wasRegistrationSuggestionFetched(a) &&
                        (await O.A.fetchSuggestionsRegistration(a));
            },
            y = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? z.intl.string(z.t.EkokLy) : null,
                });
            },
            b =
                null != e
                    ? (0, i.jsx)(s.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(v.hE, { children: z.intl.string(z.t.wC4TlR) }, "title"),
            R = (0, i.jsx)(x.A, {
                email: n,
                globalName: a,
                username: r,
                password: o,
                parsedDateOfBirth: d,
                consent: c,
                consentRequired: N,
                globalNameFocused: h,
                dateOfBirthRef: this.dateOfBirthRef,
                registering: A,
                isRateLimited: E,
                usernameFocused: I,
                apiErrors: f,
                emailClientError: _,
                usernameClientError: p,
                passwordClientError: m,
                dateOfBirthClientError: g,
                onEmailChange: (e) =>
                    this.setState({ email: e, emailClientError: 0 === e.length ? z.intl.string(z.t.EkokLy) : null }),
                setEmailRef: (e) => {
                    this.emailRef = e;
                },
                onEmailFocus: () => this.trackInputFocus("email"),
                onEmailBlur: () => this.trackInputBlur("email"),
                onGlobalNameChange: (e) => this.setState({ globalName: e }),
                setGlobalNameRef: (e) => {
                    this.globalNameRef = e;
                },
                onGlobalNameFocus: () => {
                    this.setState({ globalNameFocused: !0 }), this.trackInputFocus("global_name");
                },
                onGlobalNameBlur: () => {
                    this.setState({ globalNameFocused: !1 }), this.trackInputBlur("global_name");
                },
                onUsernameChange: y,
                setUsernameRef: (e) => {
                    this.usernameRef = e;
                },
                onUsernameFocus: S,
                onUsernameBlur: () => this.setState({ usernameFocused: !1 }),
                onUsernameInputFocus: () => this.trackInputFocus("username"),
                onUsernameInputBlur: () => this.trackInputBlur("username"),
                onPasswordChange: (e) =>
                    this.setState({
                        password: e,
                        passwordClientError: 0 === e.length ? z.intl.string(z.t.EkokLy) : null,
                    }),
                setPasswordRef: (e) => {
                    this.passwordRef = e;
                },
                onPasswordFocus: () => this.trackInputFocus("password"),
                onPasswordBlur: () => this.trackInputBlur("password"),
                usernameSuggestion: j,
                onUsernameSuggestionClick: () => {
                    null != this.usernameRef && this.usernameRef.focus(),
                        null != j && j.length > 0 && this.setState({ username: j });
                },
                onBirthdayChange: this.handleBirthdayChange,
                onConsentChange: (e) => this.setState({ consent: e }),
                onGotoLogin: this.handleGotoLogin,
                onBirthdayInputFocus: this.trackInputFocus,
                onBirthdayInputBlur: this.trackInputBlur,
            });
        return t
            ? (0, i.jsx)(V.A, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: l()(C, Q.Sy),
                  children: () => [
                      b,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: Q.Uu,
                              children: [(0, i.jsx)(v.hE, { className: Q.lR, children: z.intl.string(z.t.wC4TlR) }), R],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(v.Ay, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: C,
                  children: [
                      T
                          ? (0, i.jsx)("div", {
                                className: Q.AX,
                                children: (0, i.jsx)(u.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: z.intl.string(z.t["1MrpWO"]),
                                    icon: u.n2b,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      b,
                      R,
                  ],
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError("date_of_birth")) return (0, i.jsx)(m.A, {});
        let { giftCode: n, invite: s, guildTemplate: r, authBoxClassName: l, consentRequired: a } = this.props,
            {
                globalName: o,
                apiErrors: c,
                globalNameClientError: d,
                dateOfBirthClientError: u,
                parsedDateOfBirth: h,
                consent: _,
                registering: p,
            } = this.state,
            g = null != s && null == s.guild && null == s.channel && null != s.inviter;
        if (null != s && t)
            if (s.state === W.elq.RESOLVING)
                return (0, i.jsx)(I.A, {
                    authBoxClassName: l,
                    name: o,
                    onNameChange: (e) => this.setState({ globalName: e }),
                    onNameFocus: () => this.trackInputFocus("username"),
                    onNameBlur: () => this.trackInputBlur("username"),
                });
            else
                return (0, i.jsx)(N.A, {
                    invite: s,
                    authBoxClassName: l,
                    consentRequired: a,
                    apiErrors: c,
                    name: o,
                    globalNameClientError: d,
                    dateOfBirthClientError: u,
                    parsedDateOfBirth: h,
                    consent: _,
                    registering: p,
                    dateOfBirthRef: this.dateOfBirthRef,
                    onSubmit: this.handleSubmit,
                    onNameChange: (e) => {
                        this.setState({ globalName: e });
                    },
                    onNameFocus: () => {
                        this.setState({ globalNameFocused: !0 }), this.trackInputFocus("global_name");
                    },
                    onNameBlur: () => {
                        this.setState({ globalNameFocused: !1 }), this.trackInputBlur("global_name");
                    },
                    onBirthdayChange: this.handleBirthdayChange,
                    onGotoLogin: this.handleGotoLogin,
                    onConsentChange: (e) => this.setState({ consent: e }),
                });
        return null != r
            ? this.renderFull(() => (0, i.jsx)(T.A, { guildTemplate: r }), !0)
            : null != n
              ? this.renderFull(() => (0, i.jsx)(F.A, { giftCode: n }))
              : null != s && g && s.state === W.elq.RESOLVED
                ? this.renderFull(() =>
                      (0, i.jsx)("div", { className: q.S3, children: (0, i.jsx)(M.A, { invite: s, isRegister: !0 }) }),
                  )
                : this.renderFull();
    }
}
function X(e) {
    let t = (0, c.cf)([k.A, w.default, p.A, y.A, j.A], () => ({
            consentRequired: k.A.getAuthenticationConsentRequired(),
            authenticated: w.default.isAuthenticated(),
            isUnderage: p.A.isUnderageAnonymous(),
            country: y.A.getCountryCode(),
            hasLoggedInAccounts: j.A.getHasLoggedInAccounts(),
        })),
        n = (0, c.bG)([L.A], () => L.A.registrationUsernameSuggestion()),
        [r, l] = s.useState(H.ju.FULL);
    return (
        (0, g.A)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: o.ImpressionGroups.USER_REGISTRATION_FLOW, step: r },
            },
            {},
            [r],
        ),
        (0, i.jsx)(Y, { onChangeStep: (e) => l(e), usernameSuggestion: n, ...e, ...t })
    );
}
