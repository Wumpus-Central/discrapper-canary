"use strict";
n.d(t, { A: () => ei });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(110259),
    c = n(311907),
    d = n(451988),
    u = n(990078),
    h = n(397927),
    _ = n(830215),
    p = n(198982),
    g = n(17841),
    m = n(965252),
    A = n(201505),
    f = n(139286),
    E = n(934337),
    x = n(15552),
    I = n(906564),
    N = n(782021),
    v = n(341826),
    C = n(669629),
    T = n(773134),
    j = n(854378),
    S = n(442184);
n(829926);
var y = n(491509),
    b = n(895600),
    R = n(274303),
    O = n(942614),
    L = n(148864),
    w = n(976860),
    k = n(210714),
    D = n(493527),
    B = n(544395),
    P = n(794696),
    U = n(961350),
    G = n(153488),
    F = n(650048),
    M = n(954571),
    V = n(203982),
    W = n(927813),
    H = n(240248),
    K = n(161928),
    z = n(890698),
    Q = n(538796),
    q = n(652215),
    Y = n(68729);
n(436317);
var X = n(771016);
n(45723);
var J = n(985018),
    $ = n(135622),
    Z = n(885106);
c.Ay.initialize();
let ee = /\.$/,
    et = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ee, ""))
                  .join(". ")
                  .trim()
            : e;
class en extends s.PureComponent {
    emailRef;
    usernameRef;
    globalNameRef;
    passwordRef;
    dateOfBirthRef = s.createRef();
    _retryTimer = new d.Ep();
    static defaultProps = { giftCodeResolved: !1, transitionTo: w.pX };
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
        M.default.track(
            q.HAw.REGISTER_VIEWED,
            {
                location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                registration_source: this.registrationSource,
                ...(null != e ? (0, y.A)(e, !1, !1) : {}),
            },
            { flush: !0 },
        ),
            null == this.props.consentRequired && _.A.getLocationMetadata(),
            (0, k.d)("register");
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
                          this._retryTimer.start(r.retry_after * W.A.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, O.C)(X.zY.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = Y.ju.FULL;
        i || this.hasError("date_of_birth")
            ? (a = Y.ju.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (a = Y.ju.INVITE),
            s(a);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : F.A.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: s, parsedDateOfBirth: r } = this.state,
            { invite: l, guildTemplate: a, giftCode: o, onRegister: c, usernameSuggestion: d } = this.props,
            u = null != l ? l.code : null,
            h = null != o ? o.skuId : null,
            _ = E.mZ.getState(),
            g = (0, H.uJ)(d) ? null : t === d;
        V._.dispatch(q.jej.WAVE_EMPHASIZE), this.setState({ registering: !0, apiErrors: {} });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, I.Ay)({
                      consent: s,
                      invite: u,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: g,
                      globalName: n,
                      birthday: r,
                  })
                : await (0, I.pG)({
                      email: e,
                      username: t,
                      globalName: n,
                      consent: s,
                      password: i,
                      invite: u,
                      usedUsernameSuggestion: g,
                      guildTemplateCode: a?.code,
                      giftCodeSKUId: h,
                      birthday: r,
                      promoEmailConsent: _.required ? _ : null,
                  }),
                c?.();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof p.LG))) return;
            let e = (0, x.W)(t);
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
            ? (t = q.BVt.INVITE_LOGIN(r.code))
            : null != i
              ? (t = q.BVt.GIFT_CODE_LOGIN(i.code))
              : null != s
                ? (t = q.BVt.GUILD_TEMPLATE_LOGIN(s.code))
                : null != c
                  ? ((t = q.BVt.LOGIN), (u.redirect_to = c))
                  : ((t = q.BVt.LOGIN), "" !== n && (u = { email: n })),
            _.A.loginReset(),
            d(t, { search: (0, a.stringify)(u), source: "register" }),
            o?.(e),
            V._.dispatch(q.jej.WAVE_EMPHASIZE);
    };
    handleSubmit = (e) => {
        e?.preventDefault();
        let { email: t, username: n, password: i, parsedDateOfBirth: s, globalName: r } = this.state,
            { consentRequired: l } = this.props;
        if (null === l) return;
        let a = this.inGuildOrChannelInviteFlow(),
            o = !1;
        a
            ? 0 === r.length && (this.setState({ globalNameClientError: J.intl.string(J.t.EkokLy) }), (o = !0))
            : (0 === t.length && (this.setState({ emailClientError: J.intl.string(J.t.EkokLy) }), (o = !0)),
              0 === n.length && (this.setState({ usernameClientError: J.intl.string(J.t.EkokLy) }), (o = !0)),
              0 === i.length && (this.setState({ passwordClientError: J.intl.string(J.t.EkokLy) }), (o = !0))),
            null == s && (this.setState({ dateOfBirthClientError: J.intl.string(J.t.EkokLy) }), (o = !0)),
            o || this.handleRegister();
    };
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    trackInputFocus = (e) => {
        M.default.track(q.HAw.REGISTER_INPUT_FOCUS, { field: e });
    };
    trackInputBlur = (e) => {
        M.default.track(q.HAw.REGISTER_INPUT_BLUR, { field: e });
    };
    renderErrorMessage() {
        let {
            apiErrors: { message: e },
        } = this.state;
        return "string" != typeof e ? null : (0, i.jsx)(j.ME, { className: l()(Z.QX, $.gJ), children: e });
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
        return (0, i.jsx)(T.A, {
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
                globalNameFocused: _,
                emailClientError: p,
                usernameClientError: g,
                passwordClientError: m,
                dateOfBirthClientError: f,
                registering: E,
                apiErrors: { email: x, username: I, global_name: v, password: C, date_of_birth: T } = {},
            } = this.state,
            { consentRequired: y, authBoxClassName: b, hasLoggedInAccounts: R } = this.props,
            O = this.renderErrorMessage(),
            L = (0, i.jsx)(u.m, {
                text: !c && y ? J.intl.string(J.t.AY4IVA) : null,
                children: (0, i.jsx)("div", {
                    className: Z.QX,
                    children: (0, i.jsx)(h.Button, {
                        text: J.intl.string(J.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: E,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                    }),
                }),
            }),
            w = async () => {
                this.setState({ usernameFocused: !0 }),
                    a.length > 0 &&
                        !B.A.wasRegistrationSuggestionFetched(a) &&
                        (await D.A.fetchSuggestionsRegistration(a));
            },
            k = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? J.intl.string(J.t.EkokLy) : null,
                });
            },
            U =
                null != e
                    ? (0, i.jsx)(s.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(j.hE, { children: J.intl.string(J.t.wC4TlR) }, "title"),
            G = (0, i.jsxs)(j.eB, {
                className: Z.QX,
                children: [
                    (0, i.jsx)(j.pd, {
                        autoFocus: !0,
                        className: Z.SX,
                        label: J.intl.string(J.t.dI4d4S),
                        name: "email",
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? J.intl.string(J.t.EkokLy) : null,
                            }),
                        error: p ?? et(x),
                        type: "email",
                        autoComplete: "username",
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("email"),
                        onBlur: () => this.trackInputBlur("email"),
                    }),
                    (0, i.jsx)(j.pd, {
                        label: J.intl.string(J.t["9AjdkD"]),
                        className: Z.SX,
                        name: "global_name",
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: et(v),
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
                    (0, i.jsx)(P.A, {
                        show: _,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: J.intl.string(J.t["330TCc"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: w,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(j.pd, {
                                label: J.intl.string(J.t.TWzdWj),
                                className: Z.SX,
                                name: "username",
                                value: r,
                                onChange: k,
                                error: g ?? et(I),
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
                    (0, i.jsx)(j.pd, {
                        label: J.intl.string(J.t["CIGa+7"]),
                        name: "password",
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? J.intl.string(J.t.EkokLy) : null,
                            }),
                        error: m ?? et(C),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("password"),
                        onBlur: () => this.trackInputBlur("password"),
                    }),
                    (0, i.jsx)(A.A, {
                        label: J.intl.string(J.t.rhBeKe),
                        wrapperClassName: $.UJ,
                        name: "date_of_birth",
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: f ?? et(T),
                        value: d,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur,
                    }),
                    (0, i.jsx)(S.A, {}),
                    (0, i.jsx)(N.A, {
                        consent: c,
                        consentRequired: y,
                        onConsentChange: (e) => this.setState({ consent: e }),
                    }),
                    L,
                    O,
                    (0, i.jsx)("div", {
                        className: Z.QX,
                        children: (0, i.jsx)(h.QWc, {
                            text: J.intl.string(J.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: this.handleGotoLogin,
                        }),
                    }),
                ],
            });
        return t
            ? (0, i.jsx)(Q.A, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: l()(b, $.Sy),
                  children: () => [
                      U,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: $.Uu,
                              children: [(0, i.jsx)(j.hE, { className: $.lR, children: J.intl.string(J.t.wC4TlR) }), G],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(j.Ay, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: b,
                  children: [
                      R
                          ? (0, i.jsx)("div", {
                                className: $.AX,
                                children: (0, i.jsx)(h.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: J.intl.string(J.t["1MrpWO"]),
                                    icon: h.n2b,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      U,
                      G,
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
            if (s.state === q.elq.RESOLVING)
                return (0, i.jsx)(v.A, {
                    authBoxClassName: l,
                    name: o,
                    onNameChange: (e) => this.setState({ globalName: e }),
                    onNameFocus: () => this.trackInputFocus("username"),
                    onNameBlur: () => this.trackInputBlur("username"),
                });
            else
                return (0, i.jsx)(C.A, {
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
            ? this.renderFull(() => (0, i.jsx)(b.A, { guildTemplate: r }), !0)
            : null != n
              ? this.renderFull(() => (0, i.jsx)(K.A, { giftCode: n }))
              : null != s && g && s.state === q.elq.RESOLVED
                ? this.renderFull(() =>
                      (0, i.jsx)("div", { className: Z.S3, children: (0, i.jsx)(z.A, { invite: s, isRegister: !0 }) }),
                  )
                : this.renderFull();
    }
}
function ei(e) {
    let t = (0, c.cf)([G.A, U.default, g.A, L.A, R.A], () => ({
            consentRequired: G.A.getAuthenticationConsentRequired(),
            authenticated: U.default.isAuthenticated(),
            isUnderage: g.A.isUnderageAnonymous(),
            country: L.A.getCountryCode(),
            hasLoggedInAccounts: R.A.getHasLoggedInAccounts(),
        })),
        n = (0, c.bG)([B.A], () => B.A.registrationUsernameSuggestion()),
        [r, l] = s.useState(Y.ju.FULL);
    return (
        (0, f.A)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: o.ImpressionGroups.USER_REGISTRATION_FLOW, step: r },
            },
            {},
            [r],
        ),
        (0, i.jsx)(en, { onChangeStep: (e) => l(e), usernameSuggestion: n, ...e, ...t })
    );
}
