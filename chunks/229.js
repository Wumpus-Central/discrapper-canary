n.d(t, {
    A: () => ea,
}),
    n(747238),
    n(812715),
    n(733351),
    n(896048),
    n(801541);
var r,
    i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(492462),
    c = n(889137),
    u = n(110259),
    d = n(311907),
    h = n(451988),
    f = n(990078),
    p = n(397927),
    g = n(830215),
    m = n(198982),
    A = n(17841),
    x = n(965252),
    _ = n(201505),
    E = n(139286),
    b = n(934337),
    v = n(15552),
    j = n(906564),
    y = n(854378),
    S = n(359438),
    N = n(442184),
    O = n(383302);
n(829926);
var I = n(491509),
    T = n(895600),
    C = n(274303),
    R = n(942614),
    w = n(148864),
    P = n(32120),
    L = n(574454),
    k = n(963334),
    D = n(781436),
    B = n(926451),
    U = n(976860),
    G = n(210714),
    M = n(961350),
    F = n(153488),
    V = n(650048),
    W = n(954571),
    H = n(203982),
    K = n(927813),
    Q = n(240248),
    z = n(161928),
    q = n(890698),
    Y = n(538796),
    X = n(652215),
    J = n(68729);
n(436317);
var Z = n(771016);
n(789622);
var $ = n(985018),
    ee = n(246313),
    et = n(473169);

function en(e, t, n) {
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

function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
d.Ay.initialize();
let ei = /\.$/,
    es = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ei, ""))
                  .join(". ")
                  .trim()
            : e;
class el extends (r = s.PureComponent) {
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
            X.HAw.REGISTER_VIEWED,
            er(
                {
                    location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: this.registrationSource,
                },
                null != e ? (0, I.A)(e, !1, !1) : {},
            ),
            {
                flush: !0,
            },
        ),
            null == this.props.consentRequired && g.A.getLocationMetadata(),
            (0, G.d)("register");
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
            : {
                  consentRequiredProp: n,
              };
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
                          (this.setState({
                              isRateLimited: !0,
                          }),
                          this._retryTimer.start(s.retry_after * K.A.Millis.SECOND, () => {
                              this.setState({
                                  isRateLimited: !1,
                              });
                          }))),
            n && !e.authenticated && ((0, R.C)(Z.zY.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = J.ju.FULL;
        r || this.hasError("date_of_birth")
            ? (a = J.ju.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (a = J.ju.INVITE),
            i(a);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : V.A.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: s } = this.state,
            { invite: l, guildTemplate: a, giftCode: o, onRegister: c, usernameSuggestion: u } = this.props,
            d = null != l ? l.code : null,
            h = null != o ? o.skuId : null,
            f = b.mZ.getState(),
            p = (0, Q.uJ)(u) ? null : t === u;
        H._.dispatch(X.jej.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {},
            });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, j.Ay)({
                      consent: i,
                      invite: d,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: p,
                      globalName: n,
                      birthday: s,
                  })
                : await (0, j.pG)({
                      email: e,
                      username: t,
                      globalName: n,
                      consent: i,
                      password: r,
                      invite: d,
                      usedUsernameSuggestion: p,
                      guildTemplateCode: null == a ? void 0 : a.code,
                      giftCodeSKUId: h,
                      birthday: s,
                      promoEmailConsent: f.required ? f : null,
                  }),
                null == c || c();
        } catch (t) {
            if (
                (this.setState({
                    registering: !1,
                }),
                !(t instanceof m.LG))
            )
                return;
            let e = (0, v.W)(t);
            this.setState({
                apiErrors: e,
            });
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
                  className: ee.IQ,
                  children: (0, i.jsx)(p.JuY, {
                      label: $.intl.format($.t.qMDAP0, {
                          termsURL: X.X7G.TERMS,
                          privacyURL: X.X7G.PRIVACY,
                      }),
                      checked: e,
                      onChange: (e) =>
                          this.setState({
                              consent: e,
                          }),
                      labelType: "secondary",
                  }),
              })
            : (0, i.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  color: "text-subtle",
                  className: a()(et.Ot, ee.E2),
                  children: $.intl.format($.t["KI+BSb"], {
                      termsURL: X.X7G.TERMS,
                      privacyURL: X.X7G.PRIVACY,
                  }),
              });
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({
                    globalName: e,
                });
            },
            n = this.state.globalName;
        return (0, i.jsxs)(y.Ay, {
            className: e,
            children: [
                (0, i.jsx)(q.M, {}),
                (0, i.jsxs)(y.eB, {
                    className: ee.y0,
                    children: [
                        (0, i.jsx)(f.m, {
                            text: $.intl.string($.t["hBB85/"]),
                            position: "right",
                            children: (0, i.jsx)(y.pd, {
                                label: $.intl.string($.t["9AjdkD"]),
                                autoFocus: !0,
                                className: et.QB,
                                name: "username",
                                value: n,
                                placeholder: $.intl.string($.t["09Q8yp"]),
                                onChange: t,
                                onFocus: () => this.trackInputFocus("username"),
                                onBlur: () => this.trackInputBlur("username"),
                            }),
                        }),
                        (0, i.jsx)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: a()(et.QX, ee.E2),
                            children: $.intl.format($.t["KI+BSb"], {
                                termsURL: X.X7G.TERMS,
                                privacyURL: X.X7G.PRIVACY,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: et.Ot,
                            children: (0, i.jsx)(p.Button, {
                                text: $.intl.string($.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                disabled: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: et.QX,
                            children: (0, i.jsx)(p.QWc, {
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
        return (null == e ? void 0 : e.guild_scheduled_event) != null
            ? (0, i.jsx)(S.X, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
              })
            : (0, i.jsx)("div", {
                  className: et.S3,
                  children: (0, i.jsx)(q.A, {
                      invite: e,
                      inUnclaimedFlow: !0,
                  }),
              });
    }
    renderInviteButton() {
        let { consentRequired: e } = this.props,
            { consent: t, registering: n } = this.state,
            r = $.intl.string($.t["825cFy"]);
        return (0, i.jsx)(f.m, {
            text: !t && e ? $.intl.string($.t.AY4IVA) : null,
            children: (0, i.jsx)("div", {
                className: et.Ot,
                children: (0, i.jsx)(p.Button, {
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
                this.setState({
                    globalName: e,
                });
            };
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(y.Ay, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        u
                            ? (0, i.jsx)("div", {
                                  className: ee.yF,
                              })
                            : null,
                        (0, i.jsxs)(y.eB, {
                            className: u ? void 0 : ee.y0,
                            children: [
                                (0, i.jsx)(p.ksK, {
                                    helperText: $.intl.string($.t["330TCc"]),
                                    label: $.intl.string($.t["9AjdkD"]),
                                    error: null != a ? a : es(null != r ? r : n),
                                    autoFocus: !0,
                                    name: "global_name",
                                    value: l,
                                    placeholder: $.intl.string($.t["09Q8yp"]),
                                    onChange: d,
                                    onFocus: () => {
                                        this.setState({
                                            globalNameFocused: !0,
                                        }),
                                            this.trackInputFocus("global_name");
                                    },
                                    onBlur: () => {
                                        this.setState({
                                            globalNameFocused: !1,
                                        }),
                                            this.trackInputBlur("global_name");
                                    },
                                }),
                                (0, i.jsx)(_.A, {
                                    label: $.intl.string($.t.rhBeKe),
                                    wrapperClassName: ee.DC,
                                    name: "date_of_birth",
                                    onChange: this.handleBirthdayChange,
                                    ref: this.dateOfBirthRef,
                                    error: null != o ? o : es(s),
                                    value: c,
                                }),
                                this.renderConsentComponent(),
                                this.renderInviteButton(),
                                (0, i.jsx)("div", {
                                    className: et.QX,
                                    children: (0, i.jsx)(p.QWc, {
                                        text: $.intl.string($.t["1lWxux"]),
                                        textVariant: "text-sm/normal",
                                        onClick: this.handleGotoLogin,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                null != e && u
                    ? (0, i.jsx)(y.Ay, {
                          className: et.QX,
                          children: (0, i.jsx)(O.N, {
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
            : (0, i.jsx)(y.ME, {
                  className: a()(et.QX, ee.gJ),
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
                usernameClientError: g,
                passwordClientError: m,
                dateOfBirthClientError: A,
                registering: x,
                apiErrors: { email: E, username: b, global_name: v, password: j, date_of_birth: S } = {},
            } = this.state,
            { consentRequired: O, authBoxClassName: I, hasLoggedInAccounts: T } = this.props,
            C = this.renderErrorMessage(),
            R = (0, i.jsx)(f.m, {
                text: !c && O ? $.intl.string($.t.AY4IVA) : null,
                children: (0, i.jsx)("div", {
                    className: et.QX,
                    children: (0, i.jsx)(p.Button, {
                        text: $.intl.string($.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !this.hasConsent() || this.state.isRateLimited,
                    }),
                }),
            }),
            w = async () => {
                this.setState({
                    usernameFocused: !0,
                }),
                    l.length > 0 &&
                        !L.A.wasRegistrationSuggestionFetched(l) &&
                        (await P.A.fetchSuggestionsRegistration(l));
            },
            k = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null,
                });
            },
            D =
                null != e
                    ? (0, i.jsx)(
                          s.Fragment,
                          {
                              children: e(),
                          },
                          "custom-header",
                      )
                    : (0, i.jsx)(
                          y.hE,
                          {
                              children: $.intl.string($.t.wC4TlR),
                          },
                          "title",
                      ),
            U = (0, i.jsxs)(y.eB, {
                className: et.QX,
                children: [
                    (0, i.jsx)(y.pd, {
                        autoFocus: !0,
                        className: et.SX,
                        label: $.intl.string($.t.dI4d4S),
                        name: "email",
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null,
                            }),
                        error: null != h ? h : es(E),
                        type: "email",
                        autoComplete: "username",
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("email"),
                        onBlur: () => this.trackInputBlur("email"),
                    }),
                    (0, i.jsx)(y.pd, {
                        label: $.intl.string($.t["9AjdkD"]),
                        className: et.SX,
                        name: "global_name",
                        value: l,
                        onChange: (e) =>
                            this.setState({
                                globalName: e,
                            }),
                        error: es(v),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => {
                            this.setState({
                                globalNameFocused: !0,
                            }),
                                this.trackInputFocus("global_name");
                        },
                        onBlur: () => {
                            this.setState({
                                globalNameFocused: !1,
                            }),
                                this.trackInputBlur("global_name");
                        },
                    }),
                    (0, i.jsx)(B.A, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: $.intl.string($.t["330TCc"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () =>
                            this.setState({
                                usernameFocused: !1,
                            }),
                        onFocus: w,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(y.pd, {
                                label: $.intl.string($.t.TWzdWj),
                                className: et.SX,
                                name: "username",
                                value: r,
                                onChange: k,
                                error: null != g ? g : es(b),
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
                    (0, i.jsx)(y.pd, {
                        label: $.intl.string($.t["CIGa+7"]),
                        name: "password",
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? $.intl.string($.t.EkokLy) : null,
                            }),
                        error: null != m ? m : es(j),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("password"),
                        onBlur: () => this.trackInputBlur("password"),
                    }),
                    (0, i.jsx)(_.A, {
                        label: $.intl.string($.t.rhBeKe),
                        wrapperClassName: ee.UJ,
                        name: "date_of_birth",
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != A ? A : es(S),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur,
                    }),
                    (0, i.jsx)(N.A, {}),
                    this.renderConsentComponent(),
                    R,
                    C,
                    (0, i.jsx)("div", {
                        className: et.QX,
                        children: (0, i.jsx)(p.QWc, {
                            text: $.intl.string($.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: this.handleGotoLogin,
                        }),
                    }),
                ],
            });
        return t
            ? (0, i.jsx)(Y.A, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: a()(I, ee.Sy),
                  children: () => [
                      D,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: ee.Uu,
                              children: [
                                  (0, i.jsx)(y.hE, {
                                      className: ee.lR,
                                      children: $.intl.string($.t.wC4TlR),
                                  }),
                                  U,
                              ],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(y.Ay, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: I,
                  children: [
                      T
                          ? (0, i.jsx)("div", {
                                className: ee.AX,
                                children: (0, i.jsx)(p.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: $.intl.string($.t["1MrpWO"]),
                                    icon: p.n2b,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      D,
                      U,
                  ],
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError("date_of_birth")) return (0, i.jsx)(x.A, {});
        let { giftCode: n, invite: r, guildTemplate: s } = this.props,
            l = null != r && null == r.guild && null == r.channel && null != r.inviter;
        return null != r && t
            ? r.state === X.elq.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != s
              ? this.renderFull(
                    () =>
                        (0, i.jsx)(T.A, {
                            guildTemplate: s,
                        }),
                    !0,
                )
              : null != n
                ? this.renderFull(() =>
                      (0, i.jsx)(z.A, {
                          giftCode: n,
                      }),
                  )
                : null != r && l && r.state === X.elq.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)("div", {
                            className: et.S3,
                            children: (0, i.jsx)(q.A, {
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
            en(this, "emailRef", void 0),
            en(this, "usernameRef", void 0),
            en(this, "globalNameRef", void 0),
            en(this, "passwordRef", void 0),
            en(this, "dateOfBirthRef", s.createRef()),
            en(this, "_retryTimer", new h.Ep()),
            en(this, "handleGotoLogin", (e) => {
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
                    ? (t = X.BVt.INVITE_LOGIN(s.code))
                    : null != r
                      ? (t = X.BVt.GIFT_CODE_LOGIN(r.code))
                      : null != i
                        ? (t = X.BVt.GUILD_TEMPLATE_LOGIN(i.code))
                        : null != c
                          ? ((t = X.BVt.LOGIN), (d.redirect_to = c))
                          : ((t = X.BVt.LOGIN),
                            "" !== n &&
                                (d = {
                                    email: n,
                                })),
                    g.A.loginReset(),
                    u(t, {
                        search: (0, o.stringify)(d),
                        source: "register",
                    }),
                    null == a || a(e),
                    H._.dispatch(X.jej.WAVE_EMPHASIZE);
            }),
            en(this, "handleSubmit", (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: s } = this.state,
                    { consentRequired: l } = this.props;
                if (null === l) return;
                let a = this.inGuildOrChannelInviteFlow(),
                    o = !1;
                a
                    ? 0 === s.length &&
                      (this.setState({
                          globalNameClientError: $.intl.string($.t.EkokLy),
                      }),
                      (o = !0))
                    : (0 === t.length &&
                          (this.setState({
                              emailClientError: $.intl.string($.t.EkokLy),
                          }),
                          (o = !0)),
                      0 === n.length &&
                          (this.setState({
                              usernameClientError: $.intl.string($.t.EkokLy),
                          }),
                          (o = !0)),
                      0 === r.length &&
                          (this.setState({
                              passwordClientError: $.intl.string($.t.EkokLy),
                          }),
                          (o = !0))),
                    null == i &&
                        (this.setState({
                            dateOfBirthClientError: $.intl.string($.t.EkokLy),
                        }),
                        (o = !0)),
                    o || this.handleRegister();
            }),
            en(this, "trackInputFocus", (e) => {
                W.default.track(X.HAw.REGISTER_INPUT_FOCUS, {
                    field: e,
                });
            }),
            en(this, "trackInputBlur", (e) => {
                W.default.track(X.HAw.REGISTER_INPUT_BLUR, {
                    field: e,
                });
            }),
            en(this, "handleBirthdayChange", (e) => {
                this.setState({
                    parsedDateOfBirth: e,
                }),
                    null != e &&
                        this.setState({
                            dateOfBirthClientError: null,
                        });
            }),
            en(this, "renderUsernameValidation", () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    { usernameSuggestion: r } = this.props,
                    s = () => {
                        null != this.usernameRef && this.usernameRef.focus(),
                            null != r &&
                                r.length > 0 &&
                                this.setState({
                                    username: r,
                                });
                    };
                return (0, i.jsx)(eo, {
                    username: e,
                    suggestion: r,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: s,
                });
            });
        const n = null != e.location ? (0, o.parse)(e.location.search) : {};
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

function ea(e) {
    let t = (0, d.cf)([F.A, M.default, A.A, w.A, C.A], () => ({
            consentRequired: F.A.getAuthenticationConsentRequired(),
            authenticated: M.default.isAuthenticated(),
            isUnderage: A.A.isUnderageAnonymous(),
            country: w.A.getCountryCode(),
            hasLoggedInAccounts: C.A.getHasLoggedInAccounts(),
        })),
        n = (0, d.bG)([L.A], () => L.A.registrationUsernameSuggestion()),
        [r, l] = s.useState(J.ju.FULL);
    return (
        (0, E.A)(
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
            el,
            er(
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

function eo(e) {
    let t,
        { username: n, suggestion: r, globalName: s, isUsernameFocused: l, onClickSuggestion: a } = e,
        o = (0, D.i)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, c.YW)(o)
                  .with(
                      {
                          type: k.q.ERROR,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(p.Text, {
                              className: ee.vU,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .with(
                      {
                          type: k.q.AVAILABLE,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(p.Text, {
                              className: ee.vq,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(p.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: $.intl.string($.t.z7c4bP),
                      }),
                  )
            : null != r && r.length > 0 && s.length > 0
              ? (0, i.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: $.intl.format($.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: a,
                    }),
                })
              : (0, i.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: $.intl.string($.t.z7c4bP),
                })),
        (0, i.jsx)(B.A, {
            show: (u && (null == o ? void 0 : o.type) === k.q.ERROR) || l,
            top: -12,
            bottom: 20,
            children: t,
        })
    );
}
en(el, "defaultProps", {
    giftCodeResolved: !1,
    transitionTo: U.pX,
});
