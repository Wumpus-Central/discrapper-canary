n.d(t, { Z: () => ed }), n(704826), n(35282), n(781311), n(388685), n(314940);
var r,
    i = n(951288),
    s = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    h = n(846519),
    g = n(28664),
    m = n(481060),
    p = n(893776),
    f = n(881052),
    _ = n(899370),
    x = n(224841),
    E = n(13430),
    v = n(213609),
    j = n(882037),
    b = n(254942),
    I = n(481230),
    y = n(388905),
    S = n(853268),
    N = n(639946),
    O = n(616952),
    C = n(792766),
    A = n(692483),
    T = n(100159),
    Z = n(473855),
    P = n(726745),
    R = n(929809),
    L = n(541692),
    w = n(986197),
    D = n(135200),
    k = n(219496),
    M = n(807369),
    B = n(180529),
    U = n(703656),
    G = n(108427),
    F = n(314897),
    V = n(480294),
    W = n(896797),
    H = n(626135),
    z = n(585483),
    K = n(70956),
    q = n(624138),
    Y = n(481153),
    J = n(588705),
    Q = n(163671),
    X = n(981631),
    $ = n(355142),
    ee = n(188785),
    et = n(701476),
    en = n(801461),
    er = n(388032),
    ei = n(33724),
    es = n(197571);
function el(e, t, n) {
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
function ea(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
d.ZP.initialize();
let eo = /\.$/,
    ec = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(eo, ""))
                  .join(". ")
                  .trim()
            : e;
class eu extends (r = s.PureComponent) {
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
        H.default.track(
            X.rMx.REGISTER_VIEWED,
            ea(
                {
                    location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: this.registrationSource,
                },
                null != e ? (0, T.Z)(e, !1, !1) : {},
            ),
            { flush: !0 },
        ),
            null == this.props.consentRequired && p.Z.getLocationMetadata(),
            (0, G.e)("register");
    }
    componentWillUnmount() {
        this._retryTimer.stop();
    }
    static getDerivedStateFromProps(e, t) {
        let { consentRequired: n } = e,
            { consentRequiredProp: r } = t;
        return null == r && null != n
            ? {
                  consent: !n,
                  consentRequiredProp: n,
              }
            : { consentRequiredProp: n };
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, isUnderage: r, onChangeStep: i } = this.props,
            { apiErrors: s, parsedDateOfBirth: l } = this.state;
        (t.apiErrors !== s || t.parsedDateOfBirth !== l) &&
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
                          "number" == typeof s.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(s.retry_after * K.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, R.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = $.EW.FULL;
        r || this.hasError("date_of_birth")
            ? (a = $.EW.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (a = $.EW.INVITE),
            i(a);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : W.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: s } = this.state,
            { invite: l, guildTemplate: a, giftCode: o, onRegister: c, usernameSuggestion: u } = this.props,
            d = null != l ? l.code : null,
            h = null != o ? o.skuId : null,
            g = j.MD.getState(),
            m = (0, q.Ew)(u) ? null : t === u,
            p = ee.a ? await (0, A.K)(t) : t,
            _ = ee.a ? await (0, A.K)(n) : n;
        z.S.dispatch(X.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {},
            });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, I.ZP)({
                      consent: i,
                      invite: d,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: m,
                      globalName: _,
                      birthday: s,
                  })
                : await (0, I.R$)({
                      email: e,
                      username: p,
                      globalName: _,
                      consent: i,
                      password: r,
                      invite: d,
                      usedUsernameSuggestion: m,
                      guildTemplateCode: null == a ? void 0 : a.code,
                      giftCodeSKUId: h,
                      birthday: s,
                      promoEmailConsent: g.required ? g : null,
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof f.Hx))) return;
            let e = (0, b.F)(t);
            this.setState({ apiErrors: e });
        }
    }
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    renderConsentComponent() {
        let { consent: e } = this.state,
            { consentRequired: t } = this.props;
        return t
            ? (0, i.jsx)(S.default, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: er.intl.format(er.t.qMDAP0, {
                      termsURL: X.EYA.TERMS,
                      privacyURL: X.EYA.PRIVACY,
                  }),
                  marginTopStyle: ei.consentBox,
                  subtextClassName: ei.consentSubText,
              })
            : (0, i.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "text-secondary",
                  className: a()(es.marginTop8, ei.consentSubText),
                  children: er.intl.format(er.t["KI+BSb"], {
                      termsURL: X.EYA.TERMS,
                      privacyURL: X.EYA.PRIVACY,
                  }),
              });
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, i.jsxs)(y.ZP, {
            className: e,
            children: [
                (0, i.jsx)(J.R, {}),
                (0, i.jsxs)(y.gO, {
                    className: ei.authBlock,
                    children: [
                        (0, i.jsx)(g.u, {
                            text: er.intl.string(er.t["hBB85/"]),
                            position: "right",
                            children: (0, i.jsx)(y.II, {
                                label: er.intl.string(er.t["9AjdkD"]),
                                autoFocus: !0,
                                className: es.marginBottom8,
                                name: "username",
                                value: n,
                                placeholder: er.intl.string(er.t["09Q8yp"]),
                                onChange: t,
                                onFocus: () => this.trackInputFocus("username"),
                                onBlur: () => this.trackInputBlur("username"),
                            }),
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            className: a()(es.marginTop20, ei.consentSubText),
                            children: er.intl.format(er.t["KI+BSb"], {
                                termsURL: X.EYA.TERMS,
                                privacyURL: X.EYA.PRIVACY,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: es.marginTop8,
                            children: (0, i.jsx)(m.Button, {
                                text: er.intl.string(er.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                disabled: !0,
                            }),
                        }),
                        ee.a
                            ? null
                            : (0, i.jsx)("div", {
                                  className: es.marginTop20,
                                  children: (0, i.jsx)(m.Avr, {
                                      text: er.intl.string(er.t["1lWxux"]),
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
        return (null == e ? void 0 : e.guild_scheduled_event) != null
            ? (0, i.jsx)(N.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
              })
            : (0, i.jsx)(J.Z, {
                  invite: e,
                  inUnclaimedFlow: !0,
              });
    }
    renderInviteButton() {
        let { consentRequired: e } = this.props,
            { consent: t, registering: n } = this.state,
            r = er.intl.string(er.t["825cFy"]);
        return (0, i.jsx)(g.u, {
            text: !t && e ? er.intl.string(er.t.AY4IVA) : null,
            children: (0, i.jsx)("div", {
                className: es.marginTop8,
                children: (0, i.jsx)(m.Button, {
                    text: r,
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
                apiErrors: { username: n, global_name: r, date_of_birth: s },
                globalName: l,
                globalNameClientError: a,
                dateOfBirthClientError: o,
                parsedDateOfBirth: c,
            } = this.state,
            u = (null == e ? void 0 : e.guild_scheduled_event) != null,
            d = (e) => {
                this.setState({ globalName: e });
            };
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(y.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        u ? (0, i.jsx)("div", { className: ei.divider }) : null,
                        (0, i.jsxs)(y.gO, {
                            className: u ? void 0 : ei.authBlock,
                            children: [
                                (0, i.jsx)(m.oil, {
                                    helperText: er.intl.string(er.t["330TCc"]),
                                    label: er.intl.string(er.t["9AjdkD"]),
                                    error: null != a ? a : ec(null != r ? r : n),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: l,
                                    placeholder: er.intl.string(er.t["09Q8yp"]),
                                    onChange: d,
                                    onFocus: () => {
                                        this.setState({ globalNameFocused: !0 }), this.trackInputFocus("global_name");
                                    },
                                    onBlur: () => {
                                        this.setState({ globalNameFocused: !1 }), this.trackInputBlur("global_name");
                                    },
                                }),
                                ee.a
                                    ? null
                                    : (0, i.jsx)(E.Z, {
                                          label: er.intl.string(er.t.rhBeKe),
                                          wrapperClassName: ei.inviteBirthdayInput,
                                          name: "date_of_birth",
                                          onChange: this.handleBirthdayChange,
                                          ref: this.dateOfBirthRef,
                                          error: null != o ? o : ec(s),
                                          value: c,
                                      }),
                                this.renderConsentComponent(),
                                this.renderInviteButton(),
                                ee.a
                                    ? null
                                    : (0, i.jsx)("div", {
                                          className: es.marginTop20,
                                          children: (0, i.jsx)(m.Avr, {
                                              text: er.intl.string(er.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: this.handleGotoLogin,
                                          }),
                                      }),
                            ],
                        }),
                    ],
                }),
                null != e && u
                    ? (0, i.jsx)(y.ZP, {
                          className: es.marginTop20,
                          children: (0, i.jsx)(C.y, {
                              guild: e.guild,
                              onlineCount: e.approximate_presence_count,
                          }),
                      })
                    : null,
            ],
        });
    }
    renderErrorMessage() {
        let {
            apiErrors: { message: e },
        } = this.state;
        return "string" != typeof e
            ? null
            : (0, i.jsx)(y.i_, {
                  className: a()(es.marginTop20, ei.errorMessage),
                  children: e,
              });
    }
    renderFull(e, t) {
        let {
                email: n,
                username: r,
                globalName: l,
                password: o,
                consent: c,
                parsedDateOfBirth: u,
                globalNameFocused: d,
                emailClientError: h,
                usernameClientError: p,
                passwordClientError: f,
                dateOfBirthClientError: _,
                registering: x,
                apiErrors: { email: v, username: j, global_name: b, password: I, date_of_birth: S } = {},
            } = this.state,
            { consentRequired: N, authBoxClassName: C, hasLoggedInAccounts: A } = this.props,
            T = this.renderErrorMessage(),
            Z = (0, i.jsx)(g.u, {
                text: !c && N ? er.intl.string(er.t.AY4IVA) : null,
                children: (0, i.jsx)("div", {
                    className: es.marginTop20,
                    children: (0, i.jsx)(m.Button, {
                        text: er.intl.string(er.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                    }),
                }),
            }),
            P = async () => {
                this.setState({ usernameFocused: !0 }),
                    l.length > 0 &&
                        !D.Z.wasRegistrationSuggestionFetched(l) &&
                        (await w.Z.fetchSuggestionsRegistration(l));
            },
            R = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null,
                });
            },
            L =
                null != e
                    ? (0, i.jsx)(s.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(y.Dx, { children: er.intl.string(er.t.wC4TlR) }, "title"),
            k = (0, i.jsxs)(y.gO, {
                className: es.marginTop20,
                children: [
                    (0, i.jsx)(y.II, {
                        autoFocus: !0,
                        className: es.marginBottom20,
                        label: er.intl.string(er.t.dI4d4S),
                        name: "email",
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null,
                            }),
                        error: null != h ? h : ec(v),
                        type: "email",
                        autoComplete: "username",
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("email"),
                        onBlur: () => this.trackInputBlur("email"),
                    }),
                    (0, i.jsx)(y.II, {
                        label: er.intl.string(er.t["9AjdkD"]),
                        className: es.marginBottom20,
                        name: "global_name",
                        value: l,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: ec(b),
                        maxLength: en.hy,
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
                    (0, i.jsx)(B.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: er.intl.string(er.t["330TCc"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: P,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(y.II, {
                                label: er.intl.string(er.t.TWzdWj),
                                className: es.marginBottom20,
                                name: "username",
                                value: r,
                                onChange: R,
                                error: null != p ? p : ec(j),
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
                    (0, i.jsx)(y.II, {
                        label: er.intl.string(er.t["CIGa+7"]),
                        name: "password",
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null,
                            }),
                        error: null != f ? f : ec(I),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("password"),
                        onBlur: () => this.trackInputBlur("password"),
                    }),
                    (0, i.jsx)(E.Z, {
                        label: er.intl.string(er.t.rhBeKe),
                        wrapperClassName: ei.birthdayInput,
                        name: "date_of_birth",
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != _ ? _ : ec(S),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur,
                    }),
                    (0, i.jsx)(O.Z, {}),
                    this.renderConsentComponent(),
                    Z,
                    T,
                    ee.a
                        ? null
                        : (0, i.jsx)("div", {
                              className: es.marginTop20,
                              children: (0, i.jsx)(m.Avr, {
                                  text: er.intl.string(er.t["1lWxux"]),
                                  textVariant: "text-sm/normal",
                                  onClick: this.handleGotoLogin,
                              }),
                          }),
                ],
            });
        return t
            ? (0, i.jsx)(Q.Z, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: a()(C, ei.horizontalAuthBox),
                  children: () => [
                      L,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: ei.flex,
                              children: [
                                  (0, i.jsx)(y.Dx, {
                                      className: ei.createAccountTemplateHeader,
                                      children: er.intl.string(er.t.wC4TlR),
                                  }),
                                  k,
                              ],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(y.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: C,
                  children: [
                      A
                          ? (0, i.jsx)("div", {
                                className: ei.goBackButton,
                                children: (0, i.jsx)(m.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: er.intl.string(er.t["1MrpWO"]),
                                    icon: m.V7D,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      L,
                      k,
                  ],
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError("date_of_birth")) return (0, i.jsx)(x.Z, {});
        let { giftCode: n, invite: r, guildTemplate: s } = this.props,
            l = null != r && null == r.guild && null == r.channel && null != r.inviter;
        return null != r && t
            ? r.state === X.r2o.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != s
              ? this.renderFull(() => (0, i.jsx)(Z.Z, { guildTemplate: s }), !0)
              : null != n
                ? this.renderFull(() => (0, i.jsx)(Y.Z, { giftCode: n }))
                : null != r && l && r.state === X.r2o.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)(J.Z, {
                            invite: r,
                            isRegister: !0,
                        }),
                    )
                  : this.renderFull();
    }
    constructor(e) {
        var t;
        super(e),
            el(this, "emailRef", void 0),
            el(this, "usernameRef", void 0),
            el(this, "globalNameRef", void 0),
            el(this, "passwordRef", void 0),
            el(this, "dateOfBirthRef", s.createRef()),
            el(this, "_retryTimer", new h.V7()),
            el(this, "handleGotoLogin", (e) => {
                let t,
                    { email: n } = this.state,
                    {
                        giftCode: r,
                        guildTemplate: i,
                        invite: s,
                        location: l,
                        onLoginStart: a,
                        redirectTo: c,
                        transitionTo: u,
                    } = this.props,
                    d = null != l ? (0, o.parse)(l.search) : {};
                null != s
                    ? (t = X.Z5c.INVITE_LOGIN(s.code))
                    : null != r
                      ? (t = X.Z5c.GIFT_CODE_LOGIN(r.code))
                      : null != i
                        ? (t = X.Z5c.GUILD_TEMPLATE_LOGIN(i.code))
                        : null != c
                          ? ((t = X.Z5c.LOGIN), (d.redirect_to = c))
                          : ((t = X.Z5c.LOGIN), "" !== n && (d = { email: n })),
                    p.Z.loginReset(),
                    u(t, {
                        search: (0, o.stringify)(d),
                        source: "register",
                    }),
                    null == a || a(e),
                    z.S.dispatch(X.CkL.WAVE_EMPHASIZE);
            }),
            el(this, "handleSubmit", (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: s } = this.state,
                    { consentRequired: l } = this.props;
                if (null === l) return;
                let a = this.inGuildOrChannelInviteFlow(),
                    o = !1;
                a
                    ? (0 === s.length &&
                          (this.setState({ globalNameClientError: er.intl.string(er.t.EkokLy) }), (o = !0)),
                      null != i ||
                          ee.a ||
                          (this.setState({ dateOfBirthClientError: er.intl.string(er.t.EkokLy) }), (o = !0)))
                    : (0 === t.length && (this.setState({ emailClientError: er.intl.string(er.t.EkokLy) }), (o = !0)),
                      0 === n.length && (this.setState({ usernameClientError: er.intl.string(er.t.EkokLy) }), (o = !0)),
                      0 === r.length && (this.setState({ passwordClientError: er.intl.string(er.t.EkokLy) }), (o = !0)),
                      null == i && (this.setState({ dateOfBirthClientError: er.intl.string(er.t.EkokLy) }), (o = !0))),
                    o || this.handleRegister();
            }),
            el(this, "trackInputFocus", (e) => {
                H.default.track(X.rMx.REGISTER_INPUT_FOCUS, { field: e });
            }),
            el(this, "trackInputBlur", (e) => {
                H.default.track(X.rMx.REGISTER_INPUT_BLUR, { field: e });
            }),
            el(this, "handleBirthdayChange", (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            el(this, "renderUsernameValidation", () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    { usernameSuggestion: r } = this.props,
                    s = () => {
                        null != this.usernameRef && this.usernameRef.focus(),
                            null != r && r.length > 0 && this.setState({ username: r });
                    };
                return (0, i.jsx)(eh, {
                    username: e,
                    suggestion: r,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: s,
                });
            });
        let n = null != e.location ? (0, o.parse)(e.location.search) : {};
        this.state = {
            email: null != (t = n.email) ? t : "",
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
}
function ed(e) {
    let t = (0, d.cj)([V.Z, F.default, _.Z, L.Z, P.Z], () => ({
            consentRequired: V.Z.getAuthenticationConsentRequired(),
            authenticated: F.default.isAuthenticated(),
            isUnderage: _.Z.isUnderageAnonymous(),
            country: L.Z.getCountryCode(),
            hasLoggedInAccounts: P.Z.getHasLoggedInAccounts(),
        })),
        n = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
        [r, l] = s.useState($.EW.FULL);
    return (
        (0, v.Z)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: r,
                },
            },
            {},
            [r],
        ),
        (0, i.jsx)(
            eu,
            ea(
                {
                    onChangeStep: (e) => l(e),
                    usernameSuggestion: n,
                },
                e,
                t,
            ),
        )
    );
}
function eh(e) {
    let t,
        { username: n, suggestion: r, globalName: s, isUsernameFocused: l, onClickSuggestion: a } = e,
        o = (0, M.a)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(o)
                  .with(
                      {
                          type: k.K.ERROR,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(m.Text, {
                              className: ei.messageNegative,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .with(
                      {
                          type: k.K.AVAILABLE,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(m.Text, {
                              className: ei.messagePositive,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(m.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: er.intl.string(er.t.z7c4bP),
                      }),
                  )
            : null != r && r.length > 0 && s.length > 0
              ? (0, i.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: er.intl.format(er.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: a,
                    }),
                })
              : (0, i.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: er.intl.string(er.t.z7c4bP),
                })),
        (0, i.jsx)(B.Z, {
            show: (u && (null == o ? void 0 : o.type) === k.K.ERROR) || l,
            top: -12,
            bottom: 20,
            children: t,
        })
    );
}
el(eu, "defaultProps", {
    giftCodeResolved: !1,
    transitionTo: U.uL,
});
