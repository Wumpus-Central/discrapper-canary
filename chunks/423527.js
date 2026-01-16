n.d(t, { Z: () => eu }), n(704826), n(35282), n(781311), n(388685), n(314940);
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
    y = n(639946),
    S = n(616952),
    C = n(792766),
    O = n(692483),
    T = n(100159),
    A = n(473855),
    Z = n(726745),
    P = n(929809),
    R = n(541692),
    L = n(986197),
    D = n(135200),
    k = n(219496),
    w = n(807369),
    M = n(180529),
    B = n(703656),
    U = n(108427),
    G = n(314897),
    F = n(480294),
    V = n(896797),
    W = n(626135),
    H = n(585483),
    K = n(70956),
    z = n(624138),
    q = n(481153),
    Y = n(588705),
    J = n(163671),
    Q = n(981631),
    X = n(355142),
    $ = n(188785),
    ee = n(701476),
    et = n(801461),
    en = n(388032),
    er = n(910388),
    ei = n(478411);
function es(e, t, n) {
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
                es(e, t, n[t]);
            });
    }
    return e;
}
d.ZP.initialize();
let el = /\.$/,
    eo = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(el, ""))
                  .join(". ")
                  .trim()
            : e;
class ec extends (r = s.PureComponent) {
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
        W.default.track(
            Q.rMx.REGISTER_VIEWED,
            ea(
                {
                    location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: this.registrationSource,
                },
                null != e ? (0, T.Z)(e, !1, !1) : {},
            ),
            { flush: !0 },
        ),
            null == this.props.consentRequired && m.Z.getLocationMetadata(),
            (0, U.e)("register");
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
                          this._retryTimer.start(s.retry_after * K.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, P.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let l = X.EW.FULL;
        r || this.hasError("date_of_birth")
            ? (l = X.EW.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (l = X.EW.INVITE),
            i(l);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : V.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: s } = this.state,
            { invite: a, guildTemplate: l, giftCode: o, onRegister: c, usernameSuggestion: u } = this.props,
            d = null != a ? a.code : null,
            h = null != o ? o.skuId : null,
            f = b.MD.getState(),
            g = (0, z.Ew)(u) ? null : t === u,
            m = $.aA ? await (0, O.K)(t) : t,
            x = $.aA ? await (0, O.K)(n) : n;
        H.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
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
            ? (0, i.jsx)("div", {
                  className: er.consentBox,
                  children: (0, i.jsx)(g.Cnq, {
                      label: en.intl.format(en.t.qMDAP0, {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY,
                      }),
                      checked: e,
                      onChange: (e) => this.setState({ consent: e }),
                      labelType: "secondary",
                  }),
              })
            : (0, i.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  color: "text-subtle",
                  className: l()(ei.marginTop8, er.consentSubText),
                  children: en.intl.format(en.t["KI+BSb"], {
                      termsURL: Q.EYA.TERMS,
                      privacyURL: Q.EYA.PRIVACY,
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
                (0, i.jsx)(Y.R, {}),
                (0, i.jsxs)(N.gO, {
                    className: er.authBlock,
                    children: [
                        (0, i.jsx)(f.u, {
                            text: en.intl.string(en.t["hBB85/"]),
                            position: "right",
                            children: (0, i.jsx)(N.II, {
                                label: en.intl.string(en.t["9AjdkD"]),
                                autoFocus: !0,
                                className: ei.marginBottom8,
                                name: "username",
                                value: n,
                                placeholder: en.intl.string(en.t["09Q8yp"]),
                                onChange: t,
                                onFocus: () => this.trackInputFocus("username"),
                                onBlur: () => this.trackInputBlur("username"),
                            }),
                        }),
                        (0, i.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: l()(ei.marginTop20, er.consentSubText),
                            children: en.intl.format(en.t["KI+BSb"], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: ei.marginTop8,
                            children: (0, i.jsx)(g.Button, {
                                text: en.intl.string(en.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                disabled: !0,
                            }),
                        }),
                        $.aA
                            ? null
                            : (0, i.jsx)("div", {
                                  className: ei.marginTop20,
                                  children: (0, i.jsx)(g.Avr, {
                                      text: en.intl.string(en.t["1lWxux"]),
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
            ? (0, i.jsx)(y.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
              })
            : (0, i.jsx)("div", {
                  className: ei.marginBottom24,
                  children: (0, i.jsx)(Y.Z, {
                      invite: e,
                      inUnclaimedFlow: !0,
                  }),
              });
    }
    renderInviteButton() {
        let { consentRequired: e } = this.props,
            { consent: t, registering: n } = this.state,
            r = en.intl.string(en.t["825cFy"]);
        return (0, i.jsx)(f.u, {
            text: !t && e ? en.intl.string(en.t.AY4IVA) : null,
            children: (0, i.jsx)("div", {
                className: ei.marginTop8,
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
                        u ? (0, i.jsx)("div", { className: er.divider }) : null,
                        (0, i.jsxs)(N.gO, {
                            className: u ? void 0 : er.authBlock,
                            children: [
                                (0, i.jsx)(g.oil, {
                                    helperText: en.intl.string(en.t["330TCc"]),
                                    label: en.intl.string(en.t["9AjdkD"]),
                                    error: null != l ? l : eo(null != r ? r : n),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: a,
                                    placeholder: en.intl.string(en.t["09Q8yp"]),
                                    onChange: d,
                                    onFocus: () => {
                                        this.setState({ globalNameFocused: !0 }), this.trackInputFocus("global_name");
                                    },
                                    onBlur: () => {
                                        this.setState({ globalNameFocused: !1 }), this.trackInputBlur("global_name");
                                    },
                                }),
                                $.aA
                                    ? null
                                    : (0, i.jsx)(E.Z, {
                                          label: en.intl.string(en.t.rhBeKe),
                                          wrapperClassName: er.inviteBirthdayInput,
                                          name: "date_of_birth",
                                          onChange: this.handleBirthdayChange,
                                          ref: this.dateOfBirthRef,
                                          error: null != o ? o : eo(s),
                                          value: c,
                                      }),
                                this.renderConsentComponent(),
                                this.renderInviteButton(),
                                $.aA
                                    ? null
                                    : (0, i.jsx)("div", {
                                          className: ei.marginTop20,
                                          children: (0, i.jsx)(g.Avr, {
                                              text: en.intl.string(en.t["1lWxux"]),
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
                          className: ei.marginTop20,
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
            : (0, i.jsx)(N.i_, {
                  className: l()(ei.marginTop20, er.errorMessage),
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
            { consentRequired: C, authBoxClassName: O, hasLoggedInAccounts: T } = this.props,
            A = this.renderErrorMessage(),
            Z = (0, i.jsx)(f.u, {
                text: !c && C ? en.intl.string(en.t.AY4IVA) : null,
                children: (0, i.jsx)("div", {
                    className: ei.marginTop20,
                    children: (0, i.jsx)(g.Button, {
                        text: en.intl.string(en.t["825cFy"]),
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
                        !D.Z.wasRegistrationSuggestionFetched(a) &&
                        (await L.Z.fetchSuggestionsRegistration(a));
            },
            R = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null,
                });
            },
            k =
                null != e
                    ? (0, i.jsx)(s.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(N.Dx, { children: en.intl.string(en.t.wC4TlR) }, "title"),
            w = (0, i.jsxs)(N.gO, {
                className: ei.marginTop20,
                children: [
                    (0, i.jsx)(N.II, {
                        autoFocus: !0,
                        className: ei.marginBottom20,
                        label: en.intl.string(en.t.dI4d4S),
                        name: "email",
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null,
                            }),
                        error: null != h ? h : eo(v),
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
                        label: en.intl.string(en.t["9AjdkD"]),
                        className: ei.marginBottom20,
                        name: "global_name",
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: eo(j),
                        maxLength: et.hy,
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
                    (0, i.jsx)(M.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: en.intl.string(en.t["330TCc"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: P,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(N.II, {
                                label: en.intl.string(en.t.TWzdWj),
                                className: ei.marginBottom20,
                                name: "username",
                                value: r,
                                onChange: R,
                                error: null != m ? m : eo(b),
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
                        label: en.intl.string(en.t["CIGa+7"]),
                        name: "password",
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null,
                            }),
                        error: null != p ? p : eo(I),
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
                        label: en.intl.string(en.t.rhBeKe),
                        wrapperClassName: er.birthdayInput,
                        name: "date_of_birth",
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != x ? x : eo(y),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur,
                    }),
                    (0, i.jsx)(S.Z, {}),
                    this.renderConsentComponent(),
                    Z,
                    A,
                    $.aA
                        ? null
                        : (0, i.jsx)("div", {
                              className: ei.marginTop20,
                              children: (0, i.jsx)(g.Avr, {
                                  text: en.intl.string(en.t["1lWxux"]),
                                  textVariant: "text-sm/normal",
                                  onClick: this.handleGotoLogin,
                              }),
                          }),
                ],
            });
        return t
            ? (0, i.jsx)(J.Z, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: l()(O, er.horizontalAuthBox),
                  children: () => [
                      k,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: er.flex,
                              children: [
                                  (0, i.jsx)(N.Dx, {
                                      className: er.createAccountTemplateHeader,
                                      children: en.intl.string(en.t.wC4TlR),
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
                  className: O,
                  children: [
                      T
                          ? (0, i.jsx)("div", {
                                className: er.goBackButton,
                                children: (0, i.jsx)(g.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: en.intl.string(en.t["1MrpWO"]),
                                    icon: g.V7D,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      k,
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
            ? r.state === Q.r2o.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != s
              ? this.renderFull(() => (0, i.jsx)(A.Z, { guildTemplate: s }), !0)
              : null != n
                ? this.renderFull(() => (0, i.jsx)(q.Z, { giftCode: n }))
                : null != r && a && r.state === Q.r2o.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)("div", {
                            className: ei.marginBottom24,
                            children: (0, i.jsx)(Y.Z, {
                                invite: r,
                                isRegister: !0,
                            }),
                        }),
                    )
                  : this.renderFull();
    }
    constructor(e) {
        var t;
        super(e),
            es(this, "emailRef", void 0),
            es(this, "usernameRef", void 0),
            es(this, "globalNameRef", void 0),
            es(this, "passwordRef", void 0),
            es(this, "dateOfBirthRef", s.createRef()),
            es(this, "_retryTimer", new h.V7()),
            es(this, "handleGotoLogin", (e) => {
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
                    ? (t = Q.Z5c.INVITE_LOGIN(s.code))
                    : null != r
                      ? (t = Q.Z5c.GIFT_CODE_LOGIN(r.code))
                      : null != i
                        ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(i.code))
                        : null != c
                          ? ((t = Q.Z5c.LOGIN), (d.redirect_to = c))
                          : ((t = Q.Z5c.LOGIN), "" !== n && (d = { email: n })),
                    m.Z.loginReset(),
                    u(t, {
                        search: (0, o.stringify)(d),
                        source: "register",
                    }),
                    null == l || l(e),
                    H.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            es(this, "handleSubmit", (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: s } = this.state,
                    { consentRequired: a } = this.props;
                if (null === a) return;
                let l = this.inGuildOrChannelInviteFlow(),
                    o = !1;
                l
                    ? (0 === s.length &&
                          (this.setState({ globalNameClientError: en.intl.string(en.t.EkokLy) }), (o = !0)),
                      null != i ||
                          $.aA ||
                          (this.setState({ dateOfBirthClientError: en.intl.string(en.t.EkokLy) }), (o = !0)))
                    : (0 === t.length && (this.setState({ emailClientError: en.intl.string(en.t.EkokLy) }), (o = !0)),
                      0 === n.length && (this.setState({ usernameClientError: en.intl.string(en.t.EkokLy) }), (o = !0)),
                      0 === r.length && (this.setState({ passwordClientError: en.intl.string(en.t.EkokLy) }), (o = !0)),
                      null == i && (this.setState({ dateOfBirthClientError: en.intl.string(en.t.EkokLy) }), (o = !0))),
                    o || this.handleRegister();
            }),
            es(this, "trackInputFocus", (e) => {
                W.default.track(Q.rMx.REGISTER_INPUT_FOCUS, { field: e });
            }),
            es(this, "trackInputBlur", (e) => {
                W.default.track(Q.rMx.REGISTER_INPUT_BLUR, { field: e });
            }),
            es(this, "handleBirthdayChange", (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            es(this, "renderUsernameValidation", () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    { usernameSuggestion: r } = this.props,
                    s = () => {
                        null != this.usernameRef && this.usernameRef.focus(),
                            null != r && r.length > 0 && this.setState({ username: r });
                    };
                return (0, i.jsx)(ed, {
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
function eu(e) {
    let t = (0, d.cj)([F.Z, G.default, x.Z, R.Z, Z.Z], () => ({
            consentRequired: F.Z.getAuthenticationConsentRequired(),
            authenticated: G.default.isAuthenticated(),
            isUnderage: x.Z.isUnderageAnonymous(),
            country: R.Z.getCountryCode(),
            hasLoggedInAccounts: Z.Z.getHasLoggedInAccounts(),
        })),
        n = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
        [r, a] = s.useState(X.EW.FULL);
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
            ec,
            ea(
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
function ed(e) {
    let t,
        { username: n, suggestion: r, globalName: s, isUsernameFocused: a, onClickSuggestion: l } = e,
        o = (0, w.a)(n, !0, !0),
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
                          (0, i.jsx)(g.Text, {
                              className: er.messageNegative,
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
                          (0, i.jsx)(g.Text, {
                              className: er.messagePositive,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(g.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: en.intl.string(en.t.z7c4bP),
                      }),
                  )
            : null != r && r.length > 0 && s.length > 0
              ? (0, i.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: en.intl.format(en.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: l,
                    }),
                })
              : (0, i.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: en.intl.string(en.t.z7c4bP),
                })),
        (0, i.jsx)(M.Z, {
            show: (u && (null == o ? void 0 : o.type) === k.K.ERROR) || a,
            top: -12,
            bottom: 20,
            children: t,
        })
    );
}
es(ec, "defaultProps", {
    giftCodeResolved: !1,
    transitionTo: B.uL,
});
