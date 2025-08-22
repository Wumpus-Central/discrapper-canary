n.d(t, { Z: () => ed }), n(704826), n(35282), n(781311), n(388685), n(314940);
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    s = n.n(o),
    a = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    h = n(846519),
    f = n(481060),
    p = n(893776),
    g = n(881052),
    m = n(899370),
    _ = n(224841),
    x = n(13430),
    v = n(213609),
    E = n(882037),
    b = n(254942),
    j = n(481230),
    I = n(388905),
    N = n(853268),
    y = n(639946),
    O = n(616952),
    S = n(792766),
    C = n(692483),
    Z = n(100159),
    A = n(473855),
    T = n(726745),
    P = n(929809),
    R = n(541692),
    w = n(986197),
    L = n(135200),
    D = n(219496),
    k = n(807369),
    M = n(180529),
    B = n(703656),
    F = n(108427),
    U = n(314897),
    G = n(480294),
    z = n(896797),
    V = n(626135),
    K = n(585483),
    H = n(70956),
    W = n(624138),
    q = n(481153),
    Y = n(588705),
    J = n(163671),
    X = n(981631),
    Q = n(355142),
    $ = n(188785),
    ee = n(701476),
    et = n(801461),
    en = n(388032),
    er = n(33724),
    ei = n(197571);
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
function eo(e) {
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
function es(e, t) {
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
d.ZP.initialize();
let ea = /\.$/,
    ec = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ea, ""))
                  .join(". ")
                  .trim()
            : e;
class eu extends (r = l.PureComponent) {
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
            X.rMx.REGISTER_VIEWED,
            eo(
                {
                    location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: this.registrationSource,
                },
                null != e ? (0, Z.Z)(e, !1, !1) : {},
            ),
            { flush: !0 },
        ),
            null == this.props.consentRequired && p.Z.getLocationMetadata(),
            (0, F.e)("register");
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
            { apiErrors: l, parsedDateOfBirth: o } = this.state;
        (t.apiErrors !== l || t.parsedDateOfBirth !== o) &&
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
                          "number" == typeof l.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(l.retry_after * H.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, P.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let s = Q.EW.FULL;
        r || this.hasError("date_of_birth")
            ? (s = Q.EW.AGE_GATE)
            : this.inGuildOrChannelInviteFlow() && (s = Q.EW.INVITE),
            i(s);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : z.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: l } = this.state,
            { invite: o, guildTemplate: s, giftCode: a, onRegister: c, usernameSuggestion: u } = this.props,
            d = null != o ? o.code : null,
            h = null != a ? a.skuId : null,
            f = E.MD.getState(),
            p = (0, W.Ew)(u) ? null : t === u,
            m = $.a ? await (0, C.K)(t) : t,
            _ = $.a ? await (0, C.K)(n) : n;
        K.S.dispatch(X.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {},
            });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, j.ZP)({
                      consent: i,
                      invite: d,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: p,
                      globalName: _,
                      birthday: l,
                  })
                : await (0, j.R$)({
                      email: e,
                      username: m,
                      globalName: _,
                      consent: i,
                      password: r,
                      invite: d,
                      usedUsernameSuggestion: p,
                      guildTemplateCode: null == s ? void 0 : s.code,
                      giftCodeSKUId: h,
                      birthday: l,
                      promoEmailConsent: f.required ? f : null,
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof g.Hx))) return;
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
            ? (0, i.jsx)(N.Z, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: en.intl.format(en.t.qMDAPz, {
                      termsURL: X.EYA.TERMS,
                      privacyURL: X.EYA.PRIVACY,
                  }),
                  marginTopStyle: er.consentBox,
                  subtextClassName: er.consentSubText,
              })
            : (0, i.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  color: "text-secondary",
                  className: s()(ei.marginTop8, er.consentSubText),
                  children: en.intl.format(en.t["KI+BSU"], {
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
        return (0, i.jsxs)(I.ZP, {
            className: e,
            children: [
                (0, i.jsx)(Y.R, {}),
                (0, i.jsxs)(I.gO, {
                    className: er.authBlock,
                    children: [
                        (0, i.jsx)(f.vwX, { children: en.intl.string(en.t["9AjdkJ"]) }),
                        (0, i.jsx)(f.ua7, {
                            text: en.intl.string(en.t["hBB85+"]),
                            position: "right",
                            color: f.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: r, onMouseLeave: l } = e;
                                return (0, i.jsx)(I.II, {
                                    autoFocus: !0,
                                    className: ei.marginBottom8,
                                    name: "username",
                                    value: n,
                                    placeholder: en.intl.string(en.t["09Q8ys"]),
                                    onChange: t,
                                    onMouseEnter: r,
                                    onMouseLeave: l,
                                    onFocus: () => this.trackInputFocus("username"),
                                    onBlur: () => this.trackInputBlur("username"),
                                });
                            },
                        }),
                        (0, i.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            className: s()(ei.marginTop20, er.consentSubText),
                            children: en.intl.format(en.t["KI+BSU"], {
                                termsURL: X.EYA.TERMS,
                                privacyURL: X.EYA.PRIVACY,
                            }),
                        }),
                        (0, i.jsx)(I.zx, {
                            className: ei.marginTop8,
                            disabled: !0,
                            children: en.intl.string(en.t["825cFx"]),
                        }),
                        $.a
                            ? null
                            : (0, i.jsx)(I.zx, {
                                  look: I.zx.Looks.LINK,
                                  color: I.zx.Colors.LINK,
                                  disabled: !0,
                                  className: ei.marginTop20,
                                  children: en.intl.string(en.t["1lWxu7"]),
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
            : (0, i.jsx)(Y.Z, {
                  invite: e,
                  inUnclaimedFlow: !0,
              });
    }
    renderInviteButton() {
        let { consentRequired: e } = this.props,
            { consent: t, registering: n } = this.state,
            r = I.zx.Colors.BRAND,
            l = en.intl.string(en.t["825cFx"]);
        return (0, i.jsx)(f.ua7, {
            text: !t && e ? en.intl.string(en.t.AY4IVF) : null,
            children: (e) =>
                (0, i.jsx)(
                    "div",
                    es(eo({ className: ei.marginTop8 }, e), {
                        children: (0, i.jsx)(I.zx, {
                            type: "submit",
                            submitting: n,
                            disabled: !this.hasConsent(),
                            color: r,
                            children: l,
                        }),
                    }),
                ),
        });
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: r, date_of_birth: l },
                globalName: o,
                globalNameClientError: s,
                dateOfBirthClientError: a,
                parsedDateOfBirth: c,
                globalNameFocused: u,
            } = this.state,
            d = (null == e ? void 0 : e.guild_scheduled_event) != null,
            h = (e) => {
                this.setState({ globalName: e });
            };
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsxs)(I.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: "form",
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        d ? (0, i.jsx)("div", { className: er.divider }) : null,
                        (0, i.jsxs)(I.gO, {
                            className: d ? void 0 : er.authBlock,
                            children: [
                                (0, i.jsx)(f.vwX, {
                                    error: null != s ? s : ec(null != r ? r : n),
                                    children: en.intl.string(en.t["9AjdkJ"]),
                                }),
                                (0, i.jsx)(f.ua7, {
                                    text: en.intl.string(en.t["hBB85+"]),
                                    position: "right",
                                    color: f.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: l } = e;
                                        return (0, i.jsx)(I.II, {
                                            autoFocus: !0,
                                            className: ei.marginBottom8,
                                            name: "global_name",
                                            value: o,
                                            placeholder: en.intl.string(en.t["09Q8ys"]),
                                            onChange: h,
                                            error: null != n || null != r ? "" : null,
                                            onMouseEnter: t,
                                            onMouseLeave: l,
                                            onFocus: () => {
                                                this.setState({ globalNameFocused: !0 }),
                                                    this.trackInputFocus("global_name");
                                            },
                                            onBlur: () => {
                                                this.setState({ globalNameFocused: !1 }),
                                                    this.trackInputBlur("global_name");
                                            },
                                        });
                                    },
                                }),
                                (0, i.jsx)(M.Z, {
                                    show: u,
                                    children: (0, i.jsx)(f.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: en.intl.string(en.t["330TCQ"]),
                                    }),
                                }),
                                (0, i.jsx)(x.Z, {
                                    label: en.intl.string(en.t.rhBeKS),
                                    labelTag: f.RB0.H3,
                                    wrapperClassName: er.inviteBirthdayInput,
                                    name: "date_of_birth",
                                    onChange: this.handleBirthdayChange,
                                    ref: this.dateOfBirthRef,
                                    error: null != a ? a : ec(l),
                                    value: c,
                                }),
                                this.renderConsentComponent(),
                                this.renderInviteButton(),
                                $.a
                                    ? null
                                    : (0, i.jsx)("div", {
                                          children: (0, i.jsx)(I.zx, {
                                              look: I.zx.Looks.LINK,
                                              color: I.zx.Colors.LINK,
                                              onClick: this.handleGotoLogin,
                                              className: ei.marginTop20,
                                              children: en.intl.string(en.t["1lWxu7"]),
                                          }),
                                      }),
                            ],
                        }),
                    ],
                }),
                null != e && d
                    ? (0, i.jsx)(I.ZP, {
                          className: ei.marginTop20,
                          children: (0, i.jsx)(S.y, {
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
            : (0, i.jsx)(I.i_, {
                  className: s()(ei.marginTop20, er.errorMessage),
                  children: e,
              });
    }
    renderFull(e, t) {
        let {
                email: n,
                username: r,
                globalName: o,
                password: a,
                consent: c,
                parsedDateOfBirth: u,
                globalNameFocused: d,
                emailClientError: h,
                usernameClientError: p,
                passwordClientError: g,
                dateOfBirthClientError: m,
                registering: _,
                apiErrors: { email: v, username: E, global_name: b, password: j, date_of_birth: N } = {},
            } = this.state,
            { consentRequired: y, authBoxClassName: S, hasLoggedInAccounts: C } = this.props,
            Z = this.renderErrorMessage(),
            A = (0, i.jsx)(f.ua7, {
                text: !c && y ? en.intl.string(en.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        "div",
                        es(eo({ className: ei.marginTop20 }, e), {
                            children: (0, i.jsx)(I.zx, {
                                type: "submit",
                                submitting: _,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: en.intl.string(en.t["825cFx"]),
                            }),
                        }),
                    ),
            }),
            T = async () => {
                this.setState({ usernameFocused: !0 }),
                    o.length > 0 &&
                        !L.Z.wasRegistrationSuggestionFetched(o) &&
                        (await w.Z.fetchSuggestionsRegistration(o));
            },
            P = (e) => {
                this.setState({
                    username: e.toLocaleLowerCase(),
                    usernameClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null,
                });
            },
            R =
                null != e
                    ? (0, i.jsx)(l.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(I.Dx, { children: en.intl.string(en.t.wC4TlZ) }, "title"),
            D = (0, i.jsxs)(I.gO, {
                className: ei.marginTop20,
                children: [
                    (0, i.jsx)(I.II, {
                        autoFocus: !0,
                        className: ei.marginBottom20,
                        label: en.intl.string(en.t.dI4d4e),
                        name: "email",
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null,
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
                    (0, i.jsx)(I.II, {
                        label: en.intl.string(en.t["9AjdkJ"]),
                        className: ei.marginBottom20,
                        name: "global_name",
                        value: o,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: ec(b),
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
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: en.intl.string(en.t["330TCQ"]),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: T,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(I.II, {
                                label: en.intl.string(en.t.TWzdWl),
                                className: ei.marginBottom20,
                                name: "username",
                                value: r,
                                onChange: P,
                                error: null != p ? p : ec(E),
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
                    (0, i.jsx)(I.II, {
                        label: en.intl.string(en.t["CIGa+/"]),
                        name: "password",
                        value: a,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null,
                            }),
                        error: null != g ? g : ec(j),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus("password"),
                        onBlur: () => this.trackInputBlur("password"),
                    }),
                    (0, i.jsx)(x.Z, {
                        label: en.intl.string(en.t.rhBeKS),
                        wrapperClassName: er.birthdayInput,
                        name: "date_of_birth",
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != m ? m : ec(N),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur,
                    }),
                    (0, i.jsx)(O.Z, {}),
                    this.renderConsentComponent(),
                    A,
                    Z,
                    $.a
                        ? null
                        : (0, i.jsx)(I.zx, {
                              look: I.zx.Looks.LINK,
                              color: I.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: ei.marginTop20,
                              children: en.intl.string(en.t["1lWxu7"]),
                          }),
                ],
            });
        return t
            ? (0, i.jsx)(J.Z, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: s()(S, er.horizontalAuthBox),
                  children: () => [
                      R,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: er.flex,
                              children: [
                                  (0, i.jsx)(I.Dx, {
                                      className: er.createAccountTemplateHeader,
                                      children: en.intl.string(en.t.wC4TlZ),
                                  }),
                                  D,
                              ],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(I.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: "form",
                  className: S,
                  children: [
                      C
                          ? (0, i.jsx)(I.zx, {
                                onClick: this.handleGotoLogin,
                                look: I.zx.Looks.LINK,
                                color: I.zx.Colors.PRIMARY,
                                className: er.goBackButton,
                                children: (0, i.jsxs)("div", {
                                    className: er.content,
                                    children: [
                                        (0, i.jsx)(f.V7D, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: er.caret,
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-md/normal",
                                            children: en.intl.string(en.t["1MrpWF"]),
                                        }),
                                    ],
                                }),
                            })
                          : null,
                      R,
                      D,
                  ],
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError("date_of_birth")) return (0, i.jsx)(_.Z, {});
        let { giftCode: n, invite: r, guildTemplate: l } = this.props,
            o = null != r && null == r.guild && null == r.channel && null != r.inviter;
        return null != r && t
            ? r.state === X.r2o.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != l
              ? this.renderFull(() => (0, i.jsx)(A.Z, { guildTemplate: l }), !0)
              : null != n
                ? this.renderFull(() => (0, i.jsx)(q.Z, { giftCode: n }))
                : null != r && o && r.state === X.r2o.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)(Y.Z, {
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
            el(this, "dateOfBirthRef", l.createRef()),
            el(this, "_retryTimer", new h.V7()),
            el(this, "handleGotoLogin", (e) => {
                let t,
                    { email: n } = this.state,
                    {
                        giftCode: r,
                        guildTemplate: i,
                        invite: l,
                        location: o,
                        onLoginStart: s,
                        redirectTo: c,
                        transitionTo: u,
                    } = this.props,
                    d = null != o ? (0, a.parse)(o.search) : {};
                null != l
                    ? (t = X.Z5c.INVITE_LOGIN(l.code))
                    : null != r
                      ? (t = X.Z5c.GIFT_CODE_LOGIN(r.code))
                      : null != i
                        ? (t = X.Z5c.GUILD_TEMPLATE_LOGIN(i.code))
                        : null != c
                          ? ((t = X.Z5c.LOGIN), (d.redirect_to = c))
                          : ((t = X.Z5c.LOGIN), "" !== n && (d = { email: n })),
                    p.Z.loginReset(),
                    u(t, {
                        search: (0, a.stringify)(d),
                        source: "register",
                    }),
                    null == s || s(e),
                    K.S.dispatch(X.CkL.WAVE_EMPHASIZE);
            }),
            el(this, "handleSubmit", (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: l } = this.state,
                    { consentRequired: o } = this.props;
                if (null === o) return;
                let s = this.inGuildOrChannelInviteFlow(),
                    a = !1;
                s
                    ? 0 === l.length &&
                      (this.setState({ globalNameClientError: en.intl.string(en.t.EkokLy) }), (a = !0))
                    : (0 === t.length && (this.setState({ emailClientError: en.intl.string(en.t.EkokLy) }), (a = !0)),
                      0 === n.length && (this.setState({ usernameClientError: en.intl.string(en.t.EkokLy) }), (a = !0)),
                      0 === r.length &&
                          (this.setState({ passwordClientError: en.intl.string(en.t.EkokLy) }), (a = !0))),
                    null == i && (this.setState({ dateOfBirthClientError: en.intl.string(en.t.EkokLy) }), (a = !0)),
                    a || this.handleRegister();
            }),
            el(this, "trackInputFocus", (e) => {
                V.default.track(X.rMx.REGISTER_INPUT_FOCUS, { field: e });
            }),
            el(this, "trackInputBlur", (e) => {
                V.default.track(X.rMx.REGISTER_INPUT_BLUR, { field: e });
            }),
            el(this, "handleBirthdayChange", (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            el(this, "renderUsernameValidation", () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    { usernameSuggestion: r } = this.props,
                    l = () => {
                        null != this.usernameRef && this.usernameRef.focus(),
                            null != r && r.length > 0 && this.setState({ username: r });
                    };
                return (0, i.jsx)(eh, {
                    username: e,
                    suggestion: r,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: l,
                });
            });
        let n = null != e.location ? (0, a.parse)(e.location.search) : {};
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
    let t = (0, d.cj)([G.Z, U.default, m.Z, R.Z, T.Z], () => ({
            consentRequired: G.Z.getAuthenticationConsentRequired(),
            authenticated: U.default.isAuthenticated(),
            isUnderage: m.Z.isUnderageAnonymous(),
            country: R.Z.getCountryCode(),
            hasLoggedInAccounts: T.Z.getHasLoggedInAccounts(),
        })),
        n = (0, d.e7)([L.Z], () => L.Z.registrationUsernameSuggestion()),
        [r, o] = l.useState(Q.EW.FULL);
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
            eo(
                {
                    onChangeStep: (e) => o(e),
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
        { username: n, suggestion: r, globalName: l, isUsernameFocused: o, onClickSuggestion: s } = e,
        a = (0, k.a)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(a)
                  .with(
                      {
                          type: D.K.ERROR,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(f.Text, {
                              className: er.messageNegative,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .with(
                      {
                          type: D.K.AVAILABLE,
                          message: c.P.select(),
                      },
                      (e) =>
                          (0, i.jsx)(f.Text, {
                              className: er.messagePositive,
                              variant: "text-sm/normal",
                              children: e,
                          }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(f.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: en.intl.string(en.t.z7c4bG),
                      }),
                  )
            : null != r && r.length > 0 && l.length > 0
              ? (0, i.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: en.intl.format(en.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: s,
                    }),
                })
              : (0, i.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: en.intl.string(en.t.z7c4bG),
                })),
        (0, i.jsx)(M.Z, {
            show: (u && (null == a ? void 0 : a.type) === D.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t,
        })
    );
}
el(eu, "defaultProps", {
    giftCodeResolved: !1,
    transitionTo: B.uL,
});
