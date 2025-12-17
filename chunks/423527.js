n.d(t, { Z: () => ed }), n(704826), n(35282), n(781311), n(388685), n(314940);
var r,
    i = n(54381),
    s = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    h = n(846519),
    f = n(28664),
    g = n(481060),
    m = n(893776),
    p = n(881052),
    x = n(899370),
    _ = n(224841),
    E = n(13430),
    v = n(213609),
    b = n(882037),
    j = n(254942),
    I = n(481230),
    N = n(388905),
    y = n(853268),
    S = n(639946),
    C = n(616952),
    T = n(792766),
    O = n(692483),
    A = n(100159),
    Z = n(473855),
    P = n(726745),
    R = n(929809),
    L = n(541692),
    D = n(986197),
    k = n(135200),
    w = n(219496),
    M = n(807369),
    B = n(180529),
    U = n(703656),
    G = n(108427),
    F = n(314897),
    V = n(480294),
    W = n(896797),
    H = n(626135),
    K = n(585483),
    z = n(70956),
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
    ei = n(910388),
    es = n(478411);
function ea(e, t, n) {
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
function el(e) {
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
                ea(e, t, n[t]);
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
            el(
                {
                    location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: this.registrationSource,
                },
                null != e ? (0, A.Z)(e, !1, !1) : {},
            ),
            { flush: !0 },
        ),
            null == this.props.consentRequired && m.Z.getLocationMetadata(),
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
            { apiErrors: s, parsedDateOfBirth: a } = this.state;
        (t.apiErrors !== s || t.parsedDateOfBirth !== a) &&
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
                          this._retryTimer.start(s.retry_after * z.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, R.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let l = $.EW.FULL;
        r || this.hasError("date_of_birth")
            ? (l = $.EW.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (l = $.EW.INVITE),
            i(l);
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
            { invite: a, guildTemplate: l, giftCode: o, onRegister: c, usernameSuggestion: u } = this.props,
            d = null != a ? a.code : null,
            h = null != o ? o.skuId : null,
            f = b.MD.getState(),
            g = (0, q.Ew)(u) ? null : t === u,
            m = ee.a ? await (0, O.K)(t) : t,
            x = ee.a ? await (0, O.K)(n) : n;
        K.S.dispatch(X.CkL.WAVE_EMPHASIZE),
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
                      usedUsernameSuggestion: g,
                      globalName: x,
                      birthday: s,
                  })
                : await (0, I.R$)({
                      email: e,
                      username: m,
                      globalName: x,
                      consent: i,
                      password: r,
                      invite: d,
                      usedUsernameSuggestion: g,
                      guildTemplateCode: null == l ? void 0 : l.code,
                      giftCodeSKUId: h,
                      birthday: s,
                      promoEmailConsent: f.required ? f : null,
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof p.Hx))) return;
            let e = (0, j.F)(t);
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
            ? (0, i.jsx)(y.default, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: er.intl.format(er.t.qMDAP0, {
                      termsURL: X.EYA.TERMS,
                      privacyURL: X.EYA.PRIVACY,
                  }),
                  marginTopStyle: ei.consentBox,
                  subtextClassName: ei.consentSubText,
              })
            : (0, i.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  color: "text-subtle",
                  className: l()(es.marginTop8, ei.consentSubText),
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
        return (0, i.jsxs)(N.ZP, {
            className: e,
            children: [
                (0, i.jsx)(J.R, {}),
                (0, i.jsxs)(N.gO, {
                    className: ei.authBlock,
                    children: [
                        (0, i.jsx)(f.u, {
                            text: er.intl.string(er.t["hBB85/"]),
                            position: "right",
                            children: (0, i.jsx)(N.II, {
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
                        (0, i.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: l()(es.marginTop20, ei.consentSubText),
                            children: er.intl.format(er.t["KI+BSb"], {
                                termsURL: X.EYA.TERMS,
                                privacyURL: X.EYA.PRIVACY,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: es.marginTop8,
                            children: (0, i.jsx)(g.Button, {
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
                                  children: (0, i.jsx)(g.Avr, {
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
            ? (0, i.jsx)(S.r, {
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
        return (0, i.jsx)(f.u, {
            text: !t && e ? er.intl.string(er.t.AY4IVA) : null,
            children: (0, i.jsx)("div", {
                className: es.marginTop8,
                children: (0, i.jsx)(g.Button, {
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
                globalName: a,
                globalNameClientError: l,
                dateOfBirthClientError: o,
                parsedDateOfBirth: c,
            } = this.state,
            u = (null == e ? void 0 : e.guild_scheduled_event) != null,
            d = (e) => {
                this.setState({ globalName: e });
            };
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(N.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        u ? (0, i.jsx)("div", { className: ei.divider }) : null,
                        (0, i.jsxs)(N.gO, {
                            className: u ? void 0 : ei.authBlock,
                            children: [
                                (0, i.jsx)(g.oil, {
                                    helperText: er.intl.string(er.t["330TCc"]),
                                    label: er.intl.string(er.t["9AjdkD"]),
                                    error: null != l ? l : ec(null != r ? r : n),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: a,
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
                                          children: (0, i.jsx)(g.Avr, {
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
                    ? (0, i.jsx)(N.ZP, {
                          className: es.marginTop20,
                          children: (0, i.jsx)(T.y, {
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
            : (0, i.jsx)(N.i_, {
                  className: l()(es.marginTop20, ei.errorMessage),
                  children: e,
              });
    }
    renderFull(e, t) {
        let {
                email: n,
                username: r,
                globalName: a,
                password: o,
                consent: c,
                parsedDateOfBirth: u,
                globalNameFocused: d,
                emailClientError: h,
                usernameClientError: m,
                passwordClientError: p,
                dateOfBirthClientError: x,
                registering: _,
                apiErrors: { email: v, username: b, global_name: j, password: I, date_of_birth: y } = {},
            } = this.state,
            { consentRequired: S, authBoxClassName: T, hasLoggedInAccounts: O } = this.props,
            A = this.renderErrorMessage(),
            Z = (0, i.jsx)(f.u, {
                text: !c && S ? er.intl.string(er.t.AY4IVA) : null,
                children: (0, i.jsx)("div", {
                    className: es.marginTop20,
                    children: (0, i.jsx)(g.Button, {
                        text: er.intl.string(er.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: _,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                    }),
                }),
            }),
            P = async () => {
                this.setState({ usernameFocused: !0 }),
                    a.length > 0 &&
                        !k.Z.wasRegistrationSuggestionFetched(a) &&
                        (await D.Z.fetchSuggestionsRegistration(a));
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
                    : (0, i.jsx)(N.Dx, { children: er.intl.string(er.t.wC4TlR) }, "title"),
            w = (0, i.jsxs)(N.gO, {
                className: es.marginTop20,
                children: [
                    (0, i.jsx)(N.II, {
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
                    (0, i.jsx)(N.II, {
                        label: er.intl.string(er.t["9AjdkD"]),
                        className: es.marginBottom20,
                        name: "global_name",
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: ec(j),
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
                        children: (0, i.jsx)(g.Text, {
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
                            (0, i.jsx)(N.II, {
                                label: er.intl.string(er.t.TWzdWj),
                                className: es.marginBottom20,
                                name: "username",
                                value: r,
                                onChange: R,
                                error: null != m ? m : ec(b),
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
                    (0, i.jsx)(N.II, {
                        label: er.intl.string(er.t["CIGa+7"]),
                        name: "password",
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? er.intl.string(er.t.EkokLy) : null,
                            }),
                        error: null != p ? p : ec(I),
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
                        error: null != x ? x : ec(y),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur,
                    }),
                    (0, i.jsx)(C.Z, {}),
                    this.renderConsentComponent(),
                    Z,
                    A,
                    ee.a
                        ? null
                        : (0, i.jsx)("div", {
                              className: es.marginTop20,
                              children: (0, i.jsx)(g.Avr, {
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
                  className: l()(T, ei.horizontalAuthBox),
                  children: () => [
                      L,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: ei.flex,
                              children: [
                                  (0, i.jsx)(N.Dx, {
                                      className: ei.createAccountTemplateHeader,
                                      children: er.intl.string(er.t.wC4TlR),
                                  }),
                                  w,
                              ],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(N.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: T,
                  children: [
                      O
                          ? (0, i.jsx)("div", {
                                className: ei.goBackButton,
                                children: (0, i.jsx)(g.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: er.intl.string(er.t["1MrpWO"]),
                                    icon: g.V7D,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      L,
                      w,
                  ],
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError("date_of_birth")) return (0, i.jsx)(_.Z, {});
        let { giftCode: n, invite: r, guildTemplate: s } = this.props,
            a = null != r && null == r.guild && null == r.channel && null != r.inviter;
        return null != r && t
            ? r.state === X.r2o.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != s
              ? this.renderFull(() => (0, i.jsx)(Z.Z, { guildTemplate: s }), !0)
              : null != n
                ? this.renderFull(() => (0, i.jsx)(Y.Z, { giftCode: n }))
                : null != r && a && r.state === X.r2o.RESOLVED
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
            ea(this, "emailRef", void 0),
            ea(this, "usernameRef", void 0),
            ea(this, "globalNameRef", void 0),
            ea(this, "passwordRef", void 0),
            ea(this, "dateOfBirthRef", s.createRef()),
            ea(this, "_retryTimer", new h.V7()),
            ea(this, "handleGotoLogin", (e) => {
                let t,
                    { email: n } = this.state,
                    {
                        giftCode: r,
                        guildTemplate: i,
                        invite: s,
                        location: a,
                        onLoginStart: l,
                        redirectTo: c,
                        transitionTo: u,
                    } = this.props,
                    d = null != a ? (0, o.parse)(a.search) : {};
                null != s
                    ? (t = X.Z5c.INVITE_LOGIN(s.code))
                    : null != r
                      ? (t = X.Z5c.GIFT_CODE_LOGIN(r.code))
                      : null != i
                        ? (t = X.Z5c.GUILD_TEMPLATE_LOGIN(i.code))
                        : null != c
                          ? ((t = X.Z5c.LOGIN), (d.redirect_to = c))
                          : ((t = X.Z5c.LOGIN), "" !== n && (d = { email: n })),
                    m.Z.loginReset(),
                    u(t, {
                        search: (0, o.stringify)(d),
                        source: "register",
                    }),
                    null == l || l(e),
                    K.S.dispatch(X.CkL.WAVE_EMPHASIZE);
            }),
            ea(this, "handleSubmit", (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: s } = this.state,
                    { consentRequired: a } = this.props;
                if (null === a) return;
                let l = this.inGuildOrChannelInviteFlow(),
                    o = !1;
                l
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
            ea(this, "trackInputFocus", (e) => {
                H.default.track(X.rMx.REGISTER_INPUT_FOCUS, { field: e });
            }),
            ea(this, "trackInputBlur", (e) => {
                H.default.track(X.rMx.REGISTER_INPUT_BLUR, { field: e });
            }),
            ea(this, "handleBirthdayChange", (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            ea(this, "renderUsernameValidation", () => {
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
    let t = (0, d.cj)([V.Z, F.default, x.Z, L.Z, P.Z], () => ({
            consentRequired: V.Z.getAuthenticationConsentRequired(),
            authenticated: F.default.isAuthenticated(),
            isUnderage: x.Z.isUnderageAnonymous(),
            country: L.Z.getCountryCode(),
            hasLoggedInAccounts: P.Z.getHasLoggedInAccounts(),
        })),
        n = (0, d.e7)([k.Z], () => k.Z.registrationUsernameSuggestion()),
        [r, a] = s.useState($.EW.FULL);
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
            el(
                {
                    onChangeStep: (e) => a(e),
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
        { username: n, suggestion: r, globalName: s, isUsernameFocused: a, onClickSuggestion: l } = e,
        o = (0, M.a)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(o)
                  .with(
                      {
                          type: w.K.ERROR,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(g.Text, {
                              className: ei.messageNegative,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .with(
                      {
                          type: w.K.AVAILABLE,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(g.Text, {
                              className: ei.messagePositive,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(g.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: er.intl.string(er.t.z7c4bP),
                      }),
                  )
            : null != r && r.length > 0 && s.length > 0
              ? (0, i.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: er.intl.format(er.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: l,
                    }),
                })
              : (0, i.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: er.intl.string(er.t.z7c4bP),
                })),
        (0, i.jsx)(B.Z, {
            show: (u && (null == o ? void 0 : o.type) === w.K.ERROR) || a,
            top: -12,
            bottom: 20,
            children: t,
        })
    );
}
ea(eu, "defaultProps", {
    giftCodeResolved: !1,
    transitionTo: U.uL,
});
