n.d(t, { Z: () => eg }), n(704826), n(35282), n(781311), n(388685), n(314940);
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    h = n(846519),
    g = n(481060),
    p = n(893776),
    m = n(881052),
    f = n(899370),
    _ = n(224841),
    x = n(13430),
    E = n(213609),
    b = n(882037),
    v = n(8184),
    I = n(254942),
    O = n(481230),
    S = n(388905),
    y = n(853268),
    j = n(639946),
    N = n(616952),
    C = n(792766),
    T = n(692483),
    A = n(100159),
    P = n(473855),
    Z = n(726745),
    R = n(929809),
    w = n(541692),
    L = n(986197),
    D = n(135200),
    k = n(219496),
    M = n(807369),
    U = n(180529),
    B = n(703656),
    G = n(108427),
    F = n(314897),
    z = n(480294),
    V = n(896797),
    H = n(626135),
    K = n(585483),
    W = n(70956),
    q = n(63063),
    Y = n(624138),
    J = n(481153),
    X = n(588705),
    Q = n(163671),
    $ = n(981631),
    ee = n(355142),
    et = n(188785),
    en = n(701476),
    er = n(801461),
    ei = n(388032),
    el = n(840368),
    ea = n(20493);
function eo(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function es(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eo(e, t, n[t]);
            });
    }
    return e;
}
function ec(e, t) {
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
let eu = /\.$/,
    ed = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(eu, ''))
                  .join('. ')
                  .trim()
            : e;
class eh extends (r = l.PureComponent) {
    get registrationSource() {
        let { giftCode: e, guildTemplate: t, invite: n } = this.props;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        if (null != n) {
            if (null != n.guild) return 'guild_invite';
            else if (null != n.channel) return 'dm_invite';
            else if (null != n.inviter) return 'friend_invite';
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
            $.rMx.REGISTER_VIEWED,
            es(
                {
                    location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                    registration_source: this.registrationSource
                },
                null != e ? (0, A.Z)(e, !1, !1) : {}
            ),
            { flush: !0 }
        ),
            null == this.props.consentRequired && p.Z.getLocationMetadata(),
            (0, G.e)('register');
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
                  consentRequiredProp: n
              }
            : { consentRequiredProp: n };
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, isUnderage: r, onChangeStep: i } = this.props,
            { apiErrors: l, parsedDateOfBirth: a } = this.state;
        (t.apiErrors !== l || t.parsedDateOfBirth !== a) &&
            (this.hasError('email') || this.hasError('phone')
                ? null != this.emailRef && this.emailRef.focus()
                : this.hasError('username')
                  ? null != this.usernameRef && this.usernameRef.focus()
                  : this.hasError('global_name')
                    ? null != this.globalNameRef && this.globalNameRef.focus()
                    : this.hasError('password')
                      ? null != this.passwordRef && this.passwordRef.focus()
                      : null == this.state.parsedDateOfBirth
                        ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus()
                        : this.hasError('retry_after') &&
                          'number' == typeof l.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(l.retry_after * W.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, R.c)(en.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let o = ee.EW.FULL;
        r || this.hasError('date_of_birth') ? (o = ee.EW.AGE_GATE) : this.inGuildOrChannelInviteFlow() && (o = ee.EW.INVITE), i(o);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : V.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: l } = this.state,
            { invite: a, guildTemplate: o, giftCode: s, onRegister: c, usernameSuggestion: u, inUnclaimedFlowExperiment: d } = this.props,
            h = null != a ? a.code : null,
            g = null != s ? s.skuId : null,
            p = b.MD.getState(),
            f = (0, Y.Ew)(u) ? null : t === u,
            _ = et.a ? await (0, T.K)(t) : t,
            x = et.a ? await (0, T.K)(n) : n;
        K.S.dispatch($.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            this.inGuildOrChannelInviteFlow()
                ? await (0, O.ZP)({
                      consent: i,
                      invite: h,
                      giftCodeSKUId: g,
                      usedUsernameSuggestion: f,
                      globalName: x,
                      birthday: d ? l : void 0
                  })
                : await (0, O.R$)({
                      email: e,
                      username: _,
                      globalName: x,
                      consent: i,
                      password: r,
                      invite: h,
                      usedUsernameSuggestion: f,
                      guildTemplateCode: null == o ? void 0 : o.code,
                      giftCodeSKUId: g,
                      birthday: l,
                      promoEmailConsent: p.required ? p : null
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof m.Hx))) return;
            let e = (0, I.F)(t);
            this.setState({ apiErrors: e });
        }
    }
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    renderConsentComponent() {
        let { consent: e } = this.state,
            { consentRequired: t, inUnclaimedFlowExperiment: n } = this.props;
        return t
            ? (0, i.jsx)(y.Z, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: ei.intl.format(ei.t.qMDAPz, {
                      termsURL: $.EYA.TERMS,
                      privacyURL: $.EYA.PRIVACY
                  }),
                  marginTopStyle: el.consentBox,
                  subtextClassName: el.consentSubText
              })
            : n
              ? (0, i.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    className: o()(ea.marginTop8, el.consentSubText),
                    children: ei.intl.format(ei.t.BvbzxM, {
                        termsURL: $.EYA.TERMS,
                        privacyURL: $.EYA.PRIVACY
                    })
                })
              : (0, i.jsx)(S.i_, {
                    className: ea.marginTop8,
                    children: ei.intl.format(ei.t['F+0zT0'], {
                        termsURL: $.EYA.TERMS,
                        privacyURL: $.EYA.PRIVACY
                    })
                });
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, i.jsxs)(S.ZP, {
            className: e,
            children: [
                (0, i.jsx)(X.R, {}),
                (0, i.jsxs)(S.gO, {
                    className: el.authBlock,
                    children: [
                        (0, i.jsx)(g.vwX, { children: ei.intl.string(ei.t.TWzdWl) }),
                        (0, i.jsx)(g.ua7, {
                            text: ei.intl.string(ei.t['hBB85+']),
                            position: 'right',
                            color: g.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: r, onMouseLeave: l } = e;
                                return (0, i.jsx)(S.II, {
                                    autoFocus: !0,
                                    className: ea.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: ei.intl.string(ei.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: r,
                                    onMouseLeave: l,
                                    onFocus: () => this.trackInputFocus('username'),
                                    onBlur: () => this.trackInputBlur('username')
                                });
                            }
                        }),
                        (0, i.jsx)(S.zx, {
                            className: ea.marginTop20,
                            disabled: !0,
                            children: ei.intl.string(ei.t['3PatS0'])
                        }),
                        (0, i.jsx)(S.i_, {
                            disabled: !0,
                            className: ea.marginTop8,
                            children: ei.intl.format(ei.t['F+0zT0'], {
                                termsURL: $.EYA.TERMS,
                                privacyURL: $.EYA.PRIVACY
                            })
                        }),
                        et.a
                            ? null
                            : (0, i.jsx)(S.zx, {
                                  look: S.zx.Looks.LINK,
                                  color: S.zx.Colors.LINK,
                                  disabled: !0,
                                  className: ea.marginTop20,
                                  children: ei.intl.string(ei.t['r/jzu7'])
                              })
                    ]
                })
            ]
        });
    }
    renderInviteHeader() {
        let { invite: e, inUnclaimedFlowExperiment: t } = this.props;
        return (null == e ? void 0 : e.stage_instance) != null && null != e.guild
            ? (0, i.jsx)(C.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, i.jsx)(j.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(X.Z, {
                    invite: e,
                    inUnclaimedFlowExperiment: t
                });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t, inUnclaimedFlowExperiment: n } = this.props,
            { consent: r, registering: l } = this.state,
            a = S.zx.Colors.BRAND,
            o = n ? ei.intl.string(ei.t['825cFx']) : ei.intl.string(ei.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((a = S.zx.Colors.GREEN), (o = ei.intl.string(ei.t['5UKyUl']))),
            (0, i.jsx)(g.ua7, {
                text: !r && t ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        ec(es({ className: n ? ea.marginTop8 : ea.marginTop20 }, e), {
                            children: (0, i.jsx)(S.zx, {
                                type: 'submit',
                                submitting: l,
                                disabled: !this.hasConsent(),
                                color: a,
                                children: o
                            })
                        })
                    )
            })
        );
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t, inUnclaimedFlowExperiment: n } = this.props,
            {
                apiErrors: { username: r, global_name: l, date_of_birth: a },
                globalName: o,
                globalNameClientError: s,
                dateOfBirthClientError: c,
                parsedDateOfBirth: u,
                globalNameFocused: d
            } = this.state,
            h = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            p = (e) => {
                this.setState({ globalName: e });
            };
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)(S.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        h ? (0, i.jsx)('div', { className: el.divider }) : null,
                        (0, i.jsxs)(S.gO, {
                            className: h ? void 0 : el.authBlock,
                            children: [
                                (0, i.jsx)(g.vwX, {
                                    error: null != s ? s : ed(null != l ? l : r),
                                    children: ei.intl.string(ei.t['9AjdkJ'])
                                }),
                                (0, i.jsx)(g.ua7, {
                                    text: ei.intl.string(ei.t['hBB85+']),
                                    position: 'right',
                                    color: g.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(S.II, {
                                            autoFocus: !0,
                                            className: ea.marginBottom8,
                                            name: 'global_name',
                                            value: o,
                                            placeholder: ei.intl.string(ei.t['09Q8ys']),
                                            onChange: p,
                                            error: null != r || null != l ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onFocus: () => {
                                                this.setState({ globalNameFocused: !0 }), this.trackInputFocus('global_name');
                                            },
                                            onBlur: () => {
                                                this.setState({ globalNameFocused: !1 }), this.trackInputBlur('global_name');
                                            }
                                        });
                                    }
                                }),
                                (0, i.jsx)(U.Z, {
                                    show: !n || d,
                                    children: (0, i.jsx)(g.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: ei.intl.string(ei.t['330TCQ'])
                                    })
                                }),
                                n
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(x.Z, {
                                                  label: ei.intl.string(ei.t.rhBeKS),
                                                  labelTag: g.RB0.H3,
                                                  wrapperClassName: ea.marginTop20,
                                                  name: 'date_of_birth',
                                                  onChange: this.handleBirthdayChange,
                                                  ref: this.dateOfBirthRef,
                                                  error: null != c ? c : ed(a),
                                                  value: u
                                              }),
                                              (0, i.jsx)(g.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-secondary',
                                                  className: el.birthdayText,
                                                  children: ei.intl.format(ei.t['6ENSU1'], { helpURL: q.Z.getArticleURL($.BhN.AGE_GATE) })
                                              })
                                          ]
                                      })
                                    : null,
                                n ? this.renderConsentComponent() : null,
                                this.renderInviteButton(),
                                n ? null : this.renderConsentComponent(),
                                et.a
                                    ? null
                                    : (0, i.jsx)('div', {
                                          children: (0, i.jsx)(S.zx, {
                                              look: S.zx.Looks.LINK,
                                              color: S.zx.Colors.LINK,
                                              onClick: this.handleGotoLogin,
                                              className: ea.marginTop20,
                                              children: n ? ei.intl.string(ei.t['1lWxu7']) : ei.intl.string(ei.t['r/jzu7'])
                                          })
                                      })
                            ]
                        })
                    ]
                }),
                null != e && h
                    ? (0, i.jsx)(S.ZP, {
                          className: ea.marginTop20,
                          children: (0, i.jsx)(C.y, {
                              guild: e.guild,
                              onlineCount: e.approximate_presence_count
                          })
                      })
                    : null
            ]
        });
    }
    renderErrorMessage() {
        let {
            apiErrors: { message: e }
        } = this.state;
        return 'string' != typeof e
            ? null
            : (0, i.jsx)(S.i_, {
                  className: o()(ea.marginTop20, el.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: r, globalName: a, password: s, consent: c, parsedDateOfBirth: u, globalNameFocused: d, emailClientError: h, usernameClientError: p, passwordClientError: m, dateOfBirthClientError: f, registering: _, apiErrors: { email: E, username: b, global_name: v, password: I, date_of_birth: O } = {} } = this.state,
            { consentRequired: y, authBoxClassName: j, hasLoggedInAccounts: C, inUnclaimedFlowExperiment: T } = this.props,
            A = this.renderErrorMessage(),
            P = (0, i.jsx)(g.ua7, {
                text: !c && y ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        ec(es({ className: T ? ea.marginTop8 : ea.marginTop20 }, e), {
                            children: (0, i.jsx)(S.zx, {
                                type: 'submit',
                                submitting: _,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: T ? ei.intl.string(ei.t['825cFx']) : ei.intl.string(ei.t['3PatS0'])
                            })
                        })
                    )
            }),
            Z = async () => {
                this.setState({ usernameFocused: !0 }), a.length > 0 && !D.Z.wasRegistrationSuggestionFetched(a) && (await L.Z.fetchSuggestionsRegistration(a));
            },
            R = null != e ? (0, i.jsx)(l.Fragment, { children: e() }, 'custom-header') : (0, i.jsx)(S.Dx, { children: ei.intl.string(ei.t.wC4TlZ) }, 'title'),
            w = (0, i.jsxs)(S.gO, {
                className: ea.marginTop20,
                children: [
                    (0, i.jsx)(S.II, {
                        autoFocus: !0,
                        className: ea.marginBottom20,
                        label: ei.intl.string(ei.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != h ? h : ed(E),
                        type: 'email',
                        autoComplete: 'username',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus('email'),
                        onBlur: () => this.trackInputBlur('email')
                    }),
                    (0, i.jsx)(S.II, {
                        label: ei.intl.string(ei.t['9AjdkJ']),
                        className: ea.marginBottom20,
                        name: 'global_name',
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: ed(v),
                        maxLength: er.hy,
                        autoComplete: 'off',
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => {
                            this.setState({ globalNameFocused: !0 }), this.trackInputFocus('global_name');
                        },
                        onBlur: () => {
                            this.setState({ globalNameFocused: !1 }), this.trackInputBlur('global_name');
                        }
                    }),
                    (0, i.jsx)(U.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: ei.intl.string(ei.t['330TCQ'])
                        })
                    }),
                    (0, i.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: Z,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(S.II, {
                                label: ei.intl.string(ei.t.TWzdWl),
                                className: ea.marginBottom20,
                                name: 'username',
                                value: r,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                                    });
                                },
                                error: null != p ? p : ed(b),
                                autoComplete: 'off',
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0,
                                onFocus: () => this.trackInputFocus('username'),
                                onBlur: () => this.trackInputBlur('username')
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, i.jsx)(S.II, {
                        label: ei.intl.string(ei.t['CIGa+/']),
                        name: 'password',
                        value: s,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != m ? m : ed(I),
                        type: 'password',
                        autoComplete: 'new-password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus('password'),
                        onBlur: () => this.trackInputBlur('password')
                    }),
                    (0, i.jsx)(x.Z, {
                        label: ei.intl.string(ei.t.rhBeKS),
                        wrapperClassName: T ? el.birthdayInput : ea.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != f ? f : ed(O),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur
                    }),
                    (0, i.jsx)(N.Z, {}),
                    T ? this.renderConsentComponent() : null,
                    P,
                    A,
                    T ? null : this.renderConsentComponent(),
                    et.a
                        ? null
                        : (0, i.jsx)(S.zx, {
                              look: S.zx.Looks.LINK,
                              color: S.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: ea.marginTop20,
                              children: T ? ei.intl.string(ei.t['1lWxu7']) : ei.intl.string(ei.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, i.jsx)(Q.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(j, el.horizontalAuthBox),
                  children: () => [
                      R,
                      (0, i.jsxs)(
                          'div',
                          {
                              className: el.flex,
                              children: [
                                  (0, i.jsx)(S.Dx, {
                                      className: el.createAccountTemplateHeader,
                                      children: ei.intl.string(ei.t.wC4TlZ)
                                  }),
                                  w
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, i.jsxs)(S.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: j,
                  children: [
                      C
                          ? (0, i.jsx)(S.zx, {
                                onClick: this.handleGotoLogin,
                                look: S.zx.Looks.LINK,
                                color: S.zx.Colors.PRIMARY,
                                className: el.goBackButton,
                                children: (0, i.jsxs)('div', {
                                    className: el.content,
                                    children: [
                                        (0, i.jsx)(g.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: el.caret
                                        }),
                                        (0, i.jsx)(g.Text, {
                                            variant: 'text-md/normal',
                                            children: ei.intl.string(ei.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      R,
                      w
                  ]
              });
    }
    render() {
        let { isUnderage: e, inUnclaimedFlowExperiment: t } = this.props,
            n = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError('date_of_birth')) return (0, i.jsx)(_.Z, { inUnclaimedFlowExperiment: t });
        let { giftCode: r, invite: l, guildTemplate: a } = this.props,
            o = null != l && null == l.guild && null == l.channel && null != l.inviter;
        return null != l && n
            ? l.state === $.r2o.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != a
              ? this.renderFull(() => (0, i.jsx)(P.Z, { guildTemplate: a }), !0)
              : null != r
                ? this.renderFull(() => (0, i.jsx)(J.Z, { giftCode: r }))
                : null != l && o && l.state === $.r2o.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)(X.Z, {
                            invite: l,
                            isRegister: !0
                        })
                    )
                  : this.renderFull();
    }
    constructor(e) {
        var t;
        super(e),
            eo(this, 'emailRef', void 0),
            eo(this, 'usernameRef', void 0),
            eo(this, 'globalNameRef', void 0),
            eo(this, 'passwordRef', void 0),
            eo(this, 'dateOfBirthRef', l.createRef()),
            eo(this, '_retryTimer', new h.V7()),
            eo(this, 'handleGotoLogin', (e) => {
                let t,
                    { email: n } = this.state,
                    { giftCode: r, guildTemplate: i, invite: l, location: a, onLoginStart: o, redirectTo: c, transitionTo: u } = this.props,
                    d = null != a ? (0, s.parse)(a.search) : {};
                null != l ? (t = $.Z5c.INVITE_LOGIN(l.code)) : null != r ? (t = $.Z5c.GIFT_CODE_LOGIN(r.code)) : null != i ? (t = $.Z5c.GUILD_TEMPLATE_LOGIN(i.code)) : null != c ? ((t = $.Z5c.LOGIN), (d.redirect_to = c)) : ((t = $.Z5c.LOGIN), '' !== n && (d = { email: n })),
                    p.Z.loginReset(),
                    u(t, {
                        search: (0, s.stringify)(d),
                        source: 'register'
                    }),
                    null == o || o(e),
                    K.S.dispatch($.CkL.WAVE_EMPHASIZE);
            }),
            eo(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: l } = this.state,
                    { consentRequired: a, inUnclaimedFlowExperiment: o } = this.props;
                if (null === a) return;
                let s = this.inGuildOrChannelInviteFlow(),
                    c = !1;
                s || (0 === t.length && (this.setState({ emailClientError: ei.intl.string(ei.t.EkokLy) }), (c = !0)), 0 === n.length && (this.setState({ usernameClientError: ei.intl.string(ei.t.EkokLy) }), (c = !0)), 0 === r.length && (this.setState({ passwordClientError: ei.intl.string(ei.t.EkokLy) }), (c = !0)), null == i && (this.setState({ dateOfBirthClientError: ei.intl.string(ei.t.EkokLy) }), (c = !0))), s && o && (0 === l.length && (this.setState({ globalNameClientError: ei.intl.string(ei.t.EkokLy) }), (c = !0)), null == i && (this.setState({ dateOfBirthClientError: ei.intl.string(ei.t.EkokLy) }), (c = !0))), c || this.handleRegister();
            }),
            eo(this, 'trackInputFocus', (e) => {
                H.default.track($.rMx.REGISTER_INPUT_FOCUS, { field: e });
            }),
            eo(this, 'trackInputBlur', (e) => {
                H.default.track($.rMx.REGISTER_INPUT_BLUR, { field: e });
            }),
            eo(this, 'handleBirthdayChange', (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            eo(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    { usernameSuggestion: r } = this.props;
                return (0, i.jsx)(ep, {
                    username: e,
                    suggestion: r,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({ username: r });
                    }
                });
            });
        let n = null != e.location ? (0, s.parse)(e.location.search) : {};
        this.state = {
            email: null != (t = n.email) ? t : '',
            username: '',
            globalName: '',
            password: '',
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
            apiErrors: {}
        };
    }
}
function eg(e) {
    let t = (0, d.cj)([z.Z, F.default, f.Z, w.Z, Z.Z], () => ({
            consentRequired: z.Z.getAuthenticationConsentRequired(),
            authenticated: F.default.isAuthenticated(),
            isUnderage: f.Z.isUnderageAnonymous(),
            country: w.Z.getCountryCode(),
            hasLoggedInAccounts: Z.Z.getHasLoggedInAccounts()
        })),
        n = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
        [r, a] = l.useState(ee.EW.FULL);
    (0, E.Z)(
        {
            type: u.ImpressionTypes.VIEW,
            name: u.ImpressionNames.USER_REGISTRATION,
            properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: r
            }
        },
        {},
        [r]
    );
    let { enabled: o } = v.Z.useExperiment({ location: 'register' }, { autoTrackExposure: r === ee.EW.INVITE });
    return (0, i.jsx)(
        eh,
        es(
            {
                onChangeStep: (e) => a(e),
                usernameSuggestion: n,
                inUnclaimedFlowExperiment: o
            },
            e,
            t
        )
    );
}
function ep(e) {
    let t,
        { username: n, suggestion: r, globalName: l, isUsernameFocused: a, onClickSuggestion: o } = e,
        s = (0, M.a)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(s)
                  .with(
                      {
                          type: k.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, i.jsx)(g.Text, {
                              className: el.messageNegative,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .with(
                      {
                          type: k.K.AVAILABLE,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, i.jsx)(g.Text, {
                              className: el.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, i.jsx)(g.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: ei.intl.string(ei.t.z7c4bG)
                      })
                  )
            : null != r && r.length > 0 && l.length > 0
              ? (0, i.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.format(ei.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: o
                    })
                })
              : (0, i.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.string(ei.t.z7c4bG)
                })),
        (0, i.jsx)(U.Z, {
            show: (u && (null == s ? void 0 : s.type) === k.K.ERROR) || a,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
eo(eh, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: B.uL
});
