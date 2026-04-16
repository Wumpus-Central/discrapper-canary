"use strict";
n.d(t, { A: () => Y });
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
    g = n(965252),
    m = n(139286),
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
    O = n(544395),
    L = n(961350),
    w = n(153488),
    D = n(650048),
    k = n(954571),
    U = n(203982),
    P = n(927813),
    B = n(240248),
    G = n(161928),
    M = n(890698),
    F = n(538796),
    V = n(652215),
    W = n(68729);
n(436317);
var H = n(771016),
    K = n(985018),
    z = n(731286),
    Q = n(818050);
c.Ay.initialize();
class q extends s.PureComponent {
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
        k.default.track(
            V.HAw.REGISTER_VIEWED,
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
            { apiErrors: r } = this.state;
        t.apiErrors !== r &&
            this.hasError("retry_after") &&
            "number" == typeof r.retry_after &&
            (this.setState({ isRateLimited: !0 }),
            this._retryTimer.start(r.retry_after * P.A.Millis.SECOND, () => {
                this.setState({ isRateLimited: !1 });
            })),
            n && !e.authenticated && ((0, S.C)(H.zY.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let l = W.ju.FULL;
        i || this.hasError("date_of_birth")
            ? (l = W.ju.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (l = W.ju.INVITE),
            s(l);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : D.A.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: s, parsedDateOfBirth: r } = this.state,
            { invite: l, guildTemplate: a, giftCode: o, onRegister: c, usernameSuggestion: d } = this.props,
            u = null != l ? l.code : null,
            h = null != o ? o.skuId : null,
            p = A.mZ.getState(),
            g = (0, B.uJ)(d) ? null : t === d;
        U._.dispatch(V.jej.WAVE_EMPHASIZE), this.setState({ registering: !0, apiErrors: {} });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, E.Ay)({
                      consent: s,
                      invite: u,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: g,
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
                      usedUsernameSuggestion: g,
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
            ? (t = V.BVt.INVITE_LOGIN(r.code))
            : null != i
              ? (t = V.BVt.GIFT_CODE_LOGIN(i.code))
              : null != s
                ? (t = V.BVt.GUILD_TEMPLATE_LOGIN(s.code))
                : null != c
                  ? ((t = V.BVt.LOGIN), (u.redirect_to = c))
                  : ((t = V.BVt.LOGIN), "" !== n && (u = { email: n })),
            h.A.loginReset(),
            d(t, { search: (0, a.stringify)(u), source: "register" }),
            o?.(e),
            U._.dispatch(V.jej.WAVE_EMPHASIZE);
    };
    handleSubmit = (e) => {
        e?.preventDefault();
        let { email: t, username: n, password: i, parsedDateOfBirth: s, globalName: r } = this.state,
            { consentRequired: l } = this.props;
        if (null === l) return;
        let a = this.inGuildOrChannelInviteFlow(),
            o = !1;
        a
            ? 0 === r.length && (this.setState({ globalNameClientError: K.intl.string(K.t.EkokLy) }), (o = !0))
            : (0 === t.length && (this.setState({ emailClientError: K.intl.string(K.t.EkokLy) }), (o = !0)),
              0 === n.length && (this.setState({ usernameClientError: K.intl.string(K.t.EkokLy) }), (o = !0)),
              0 === i.length && (this.setState({ passwordClientError: K.intl.string(K.t.EkokLy) }), (o = !0))),
            null == s && (this.setState({ dateOfBirthClientError: K.intl.string(K.t.EkokLy) }), (o = !0)),
            o || this.handleRegister();
    };
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
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
                emailClientError: h,
                usernameClientError: _,
                passwordClientError: p,
                dateOfBirthClientError: g,
                registering: m,
                apiErrors: A,
                isRateLimited: f,
            } = this.state,
            { authBoxClassName: E, hasLoggedInAccounts: I, usernameSuggestion: N } = this.props,
            C = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? K.intl.string(K.t.EkokLy) : null,
                });
            },
            T =
                null != e
                    ? (0, i.jsx)(s.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(v.hE, { children: K.intl.string(K.t.wC4TlR) }, "title"),
            j = (0, i.jsx)(x.A, {
                email: n,
                globalName: a,
                username: r,
                password: o,
                parsedDateOfBirth: d,
                consent: c,
                registering: m,
                isRateLimited: f,
                apiErrors: A,
                emailClientError: h,
                usernameClientError: _,
                passwordClientError: p,
                dateOfBirthClientError: g,
                onEmailChange: (e) =>
                    this.setState({ email: e, emailClientError: 0 === e.length ? K.intl.string(K.t.EkokLy) : null }),
                onGlobalNameChange: (e) => this.setState({ globalName: e }),
                onUsernameChange: C,
                onPasswordChange: (e) =>
                    this.setState({
                        password: e,
                        passwordClientError: 0 === e.length ? K.intl.string(K.t.EkokLy) : null,
                    }),
                usernameSuggestion: N,
                onUsernameSuggestionClick: () => {
                    null != N && N.length > 0 && this.setState({ username: N });
                },
                onBirthdayChange: this.handleBirthdayChange,
                onConsentChange: (e) => this.setState({ consent: e }),
                onGotoLogin: this.handleGotoLogin,
            });
        return t
            ? (0, i.jsx)(F.A, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: l()(E, z.Sy),
                  children: () => [
                      T,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: z.Uu,
                              children: [(0, i.jsx)(v.hE, { className: z.lR, children: K.intl.string(K.t.wC4TlR) }), j],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(v.Ay, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: E,
                  children: [
                      I
                          ? (0, i.jsx)("div", {
                                className: z.AX,
                                children: (0, i.jsx)(u.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: K.intl.string(K.t["1MrpWO"]),
                                    icon: u.n2b,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      T,
                      j,
                  ],
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError("date_of_birth")) return (0, i.jsx)(g.A, {});
        let { giftCode: n, invite: s, guildTemplate: r, authBoxClassName: l } = this.props,
            {
                globalName: a,
                apiErrors: o,
                globalNameClientError: c,
                dateOfBirthClientError: d,
                parsedDateOfBirth: u,
                consent: h,
                registering: _,
            } = this.state,
            p = null != s && null == s.guild && null == s.channel && null != s.inviter;
        if (null != s && t)
            if (s.state === V.elq.RESOLVING)
                return (0, i.jsx)(I.A, {
                    authBoxClassName: l,
                    name: a,
                    onNameChange: (e) => this.setState({ globalName: e }),
                });
            else
                return (0, i.jsx)(N.A, {
                    invite: s,
                    authBoxClassName: l,
                    apiErrors: o,
                    name: a,
                    globalNameClientError: c,
                    dateOfBirthClientError: d,
                    parsedDateOfBirth: u,
                    consent: h,
                    registering: _,
                    onSubmit: this.handleSubmit,
                    onNameChange: (e) => {
                        this.setState({ globalName: e });
                    },
                    onBirthdayChange: this.handleBirthdayChange,
                    onGotoLogin: this.handleGotoLogin,
                    onConsentChange: (e) => this.setState({ consent: e }),
                });
        return null != r
            ? this.renderFull(() => (0, i.jsx)(T.A, { guildTemplate: r }), !0)
            : null != n
              ? this.renderFull(() => (0, i.jsx)(G.A, { giftCode: n }))
              : null != s && p && s.state === V.elq.RESOLVED
                ? this.renderFull(() =>
                      (0, i.jsx)("div", { className: Q.S3, children: (0, i.jsx)(M.A, { invite: s, isRegister: !0 }) }),
                  )
                : this.renderFull();
    }
}
function Y(e) {
    let t = (0, c.cf)([w.A, L.default, p.A, y.A, j.A], () => ({
            consentRequired: w.A.getAuthenticationConsentRequired(),
            authenticated: L.default.isAuthenticated(),
            isUnderage: p.A.isUnderageAnonymous(),
            country: y.A.getCountryCode(),
            hasLoggedInAccounts: j.A.getHasLoggedInAccounts(),
        })),
        n = (0, c.bG)([O.A], () => O.A.registrationUsernameSuggestion()),
        [r, l] = s.useState(W.ju.FULL);
    return (
        (0, m.A)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: o.ImpressionGroups.USER_REGISTRATION_FLOW, step: r },
            },
            {},
            [r],
        ),
        (0, i.jsx)(q, { onChangeStep: (e) => l(e), usernameSuggestion: n, ...e, ...t })
    );
}
