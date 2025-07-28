(n.d(t, { Z: () => ed }), n(704826), n(35282), n(781311), n(388685), n(314940));
var r,
    i = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    h = n(846519),
    p = n(481060),
    g = n(893776),
    m = n(881052),
    f = n(899370),
    _ = n(224841),
    x = n(13430),
    b = n(213609),
    E = n(882037),
    v = n(254942),
    I = n(481230),
    j = n(388905),
    O = n(853268),
    S = n(639946),
    y = n(616952),
    N = n(792766),
    C = n(692483),
    A = n(100159),
    T = n(473855),
    P = n(726745),
    Z = n(929809),
    R = n(541692),
    w = n(986197),
    L = n(135200),
    D = n(219496),
    k = n(807369),
    M = n(180529),
    B = n(703656),
    U = n(108427),
    G = n(314897),
    F = n(480294),
    z = n(896797),
    V = n(626135),
    H = n(585483),
    K = n(70956),
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
    er = n(840368),
    ei = n(20493);
function el(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                el(e, t, n[t]);
            }));
    }
    return e;
}
function ea(e, t) {
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
let eo = /\.$/,
    ec = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(eo, ''))
                  .join('. ')
                  .trim()
            : e;
class eu extends (r = l.PureComponent) {
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
        (V.default.track(
            X.rMx.REGISTER_VIEWED,
            es(
                {
                    location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                    registration_source: this.registrationSource
                },
                null != e ? (0, A.Z)(e, !1, !1) : {}
            ),
            { flush: !0 }
        ),
            null == this.props.consentRequired && g.Z.getLocationMetadata(),
            (0, U.e)('register'));
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
            { apiErrors: l, parsedDateOfBirth: s } = this.state;
        ((t.apiErrors !== l || t.parsedDateOfBirth !== s) &&
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
                          this._retryTimer.start(l.retry_after * K.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, Z.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated()));
        let a = Q.EW.FULL;
        (r || this.hasError('date_of_birth') ? (a = Q.EW.AGE_GATE) : this.inGuildOrChannelInviteFlow() && (a = Q.EW.INVITE), i(a));
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
            { invite: s, guildTemplate: a, giftCode: o, onRegister: c, usernameSuggestion: u } = this.props,
            d = null != s ? s.code : null,
            h = null != o ? o.skuId : null,
            p = E.MD.getState(),
            g = (0, W.Ew)(u) ? null : t === u,
            f = $.a ? await (0, C.K)(t) : t,
            _ = $.a ? await (0, C.K)(n) : n;
        (H.S.dispatch(X.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            }));
        try {
            (this.inGuildOrChannelInviteFlow()
                ? await (0, I.ZP)({
                      consent: i,
                      invite: d,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: g,
                      globalName: _,
                      birthday: l
                  })
                : await (0, I.R$)({
                      email: e,
                      username: f,
                      globalName: _,
                      consent: i,
                      password: r,
                      invite: d,
                      usedUsernameSuggestion: g,
                      guildTemplateCode: null == a ? void 0 : a.code,
                      giftCodeSKUId: h,
                      birthday: l,
                      promoEmailConsent: p.required ? p : null
                  }),
                null == c || c());
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof m.Hx))) return;
            let e = (0, v.F)(t);
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
            ? (0, i.jsx)(O.Z, {
                  value: e,
                  onChange: (e) => this.setState({ consent: e }),
                  subText: en.intl.format(en.t.qMDAPz, {
                      termsURL: X.EYA.TERMS,
                      privacyURL: X.EYA.PRIVACY
                  }),
                  marginTopStyle: er.consentBox,
                  subtextClassName: er.consentSubText
              })
            : (0, i.jsx)(p.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-secondary',
                  className: a()(ei.marginTop8, er.consentSubText),
                  children: en.intl.format(en.t['KI+BSU'], {
                      termsURL: X.EYA.TERMS,
                      privacyURL: X.EYA.PRIVACY
                  })
              });
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, i.jsxs)(j.ZP, {
            className: e,
            children: [
                (0, i.jsx)(Y.R, {}),
                (0, i.jsxs)(j.gO, {
                    className: er.authBlock,
                    children: [
                        (0, i.jsx)(p.vwX, { children: en.intl.string(en.t['9AjdkJ']) }),
                        (0, i.jsx)(p.ua7, {
                            text: en.intl.string(en.t['hBB85+']),
                            position: 'right',
                            color: p.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: r, onMouseLeave: l } = e;
                                return (0, i.jsx)(j.II, {
                                    autoFocus: !0,
                                    className: ei.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: en.intl.string(en.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: r,
                                    onMouseLeave: l,
                                    onFocus: () => this.trackInputFocus('username'),
                                    onBlur: () => this.trackInputBlur('username')
                                });
                            }
                        }),
                        (0, i.jsx)(p.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            className: a()(ei.marginTop20, er.consentSubText),
                            children: en.intl.format(en.t['KI+BSU'], {
                                termsURL: X.EYA.TERMS,
                                privacyURL: X.EYA.PRIVACY
                            })
                        }),
                        (0, i.jsx)(j.zx, {
                            className: ei.marginTop8,
                            disabled: !0,
                            children: en.intl.string(en.t['825cFx'])
                        }),
                        $.a
                            ? null
                            : (0, i.jsx)(j.zx, {
                                  look: j.zx.Looks.LINK,
                                  color: j.zx.Colors.LINK,
                                  disabled: !0,
                                  className: ei.marginTop20,
                                  children: en.intl.string(en.t['1lWxu7'])
                              })
                    ]
                })
            ]
        });
    }
    renderInviteHeader() {
        let { invite: e } = this.props;
        return (null == e ? void 0 : e.stage_instance) != null && null != e.guild
            ? (0, i.jsx)(N.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, i.jsx)(S.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(Y.Z, {
                    invite: e,
                    inUnclaimedFlow: !0
                });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: r } = this.state,
            l = j.zx.Colors.BRAND,
            s = en.intl.string(en.t['825cFx']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((l = j.zx.Colors.GREEN), (s = en.intl.string(en.t['5UKyUl']))),
            (0, i.jsx)(p.ua7, {
                text: !n && t ? en.intl.string(en.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        ea(es({ className: ei.marginTop8 }, e), {
                            children: (0, i.jsx)(j.zx, {
                                type: 'submit',
                                submitting: r,
                                disabled: !this.hasConsent(),
                                color: l,
                                children: s
                            })
                        })
                    )
            })
        );
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: r, date_of_birth: l },
                globalName: s,
                globalNameClientError: a,
                dateOfBirthClientError: o,
                parsedDateOfBirth: c,
                globalNameFocused: u
            } = this.state,
            d = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            h = (e) => {
                this.setState({ globalName: e });
            };
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)(j.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        d ? (0, i.jsx)('div', { className: er.divider }) : null,
                        (0, i.jsxs)(j.gO, {
                            className: d ? void 0 : er.authBlock,
                            children: [
                                (0, i.jsx)(p.vwX, {
                                    error: null != a ? a : ec(null != r ? r : n),
                                    children: en.intl.string(en.t['9AjdkJ'])
                                }),
                                (0, i.jsx)(p.ua7, {
                                    text: en.intl.string(en.t['hBB85+']),
                                    position: 'right',
                                    color: p.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: l } = e;
                                        return (0, i.jsx)(j.II, {
                                            autoFocus: !0,
                                            className: ei.marginBottom8,
                                            name: 'global_name',
                                            value: s,
                                            placeholder: en.intl.string(en.t['09Q8ys']),
                                            onChange: h,
                                            error: null != n || null != r ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: l,
                                            onFocus: () => {
                                                (this.setState({ globalNameFocused: !0 }), this.trackInputFocus('global_name'));
                                            },
                                            onBlur: () => {
                                                (this.setState({ globalNameFocused: !1 }), this.trackInputBlur('global_name'));
                                            }
                                        });
                                    }
                                }),
                                (0, i.jsx)(M.Z, {
                                    show: u,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: en.intl.string(en.t['330TCQ'])
                                    })
                                }),
                                (0, i.jsx)(x.Z, {
                                    label: en.intl.string(en.t.rhBeKS),
                                    labelTag: p.RB0.H3,
                                    wrapperClassName: er.inviteBirthdayInput,
                                    name: 'date_of_birth',
                                    onChange: this.handleBirthdayChange,
                                    ref: this.dateOfBirthRef,
                                    error: null != o ? o : ec(l),
                                    value: c
                                }),
                                this.renderConsentComponent(),
                                this.renderInviteButton(),
                                $.a
                                    ? null
                                    : (0, i.jsx)('div', {
                                          children: (0, i.jsx)(j.zx, {
                                              look: j.zx.Looks.LINK,
                                              color: j.zx.Colors.LINK,
                                              onClick: this.handleGotoLogin,
                                              className: ei.marginTop20,
                                              children: en.intl.string(en.t['1lWxu7'])
                                          })
                                      })
                            ]
                        })
                    ]
                }),
                null != e && d
                    ? (0, i.jsx)(j.ZP, {
                          className: ei.marginTop20,
                          children: (0, i.jsx)(N.y, {
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
            : (0, i.jsx)(j.i_, {
                  className: a()(ei.marginTop20, er.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: r, globalName: s, password: o, consent: c, parsedDateOfBirth: u, globalNameFocused: d, emailClientError: h, usernameClientError: g, passwordClientError: m, dateOfBirthClientError: f, registering: _, apiErrors: { email: b, username: E, global_name: v, password: I, date_of_birth: O } = {} } = this.state,
            { consentRequired: S, authBoxClassName: N, hasLoggedInAccounts: C } = this.props,
            A = this.renderErrorMessage(),
            T = (0, i.jsx)(p.ua7, {
                text: !c && S ? en.intl.string(en.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        ea(es({ className: ei.marginTop20 }, e), {
                            children: (0, i.jsx)(j.zx, {
                                type: 'submit',
                                submitting: _,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: en.intl.string(en.t['825cFx'])
                            })
                        })
                    )
            }),
            P = async () => {
                (this.setState({ usernameFocused: !0 }), s.length > 0 && !L.Z.wasRegistrationSuggestionFetched(s) && (await w.Z.fetchSuggestionsRegistration(s)));
            },
            Z = null != e ? (0, i.jsx)(l.Fragment, { children: e() }, 'custom-header') : (0, i.jsx)(j.Dx, { children: en.intl.string(en.t.wC4TlZ) }, 'title'),
            R = (0, i.jsxs)(j.gO, {
                className: ei.marginTop20,
                children: [
                    (0, i.jsx)(j.II, {
                        autoFocus: !0,
                        className: ei.marginBottom20,
                        label: en.intl.string(en.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
                            }),
                        error: null != h ? h : ec(b),
                        type: 'email',
                        autoComplete: 'username',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0,
                        onFocus: () => this.trackInputFocus('email'),
                        onBlur: () => this.trackInputBlur('email')
                    }),
                    (0, i.jsx)(j.II, {
                        label: en.intl.string(en.t['9AjdkJ']),
                        className: ei.marginBottom20,
                        name: 'global_name',
                        value: s,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: ec(v),
                        maxLength: et.hy,
                        autoComplete: 'off',
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => {
                            (this.setState({ globalNameFocused: !0 }), this.trackInputFocus('global_name'));
                        },
                        onBlur: () => {
                            (this.setState({ globalNameFocused: !1 }), this.trackInputBlur('global_name'));
                        }
                    }),
                    (0, i.jsx)(M.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(p.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
                            children: en.intl.string(en.t['330TCQ'])
                        })
                    }),
                    (0, i.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: P,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(j.II, {
                                label: en.intl.string(en.t.TWzdWl),
                                className: ei.marginBottom20,
                                name: 'username',
                                value: r,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
                                    });
                                },
                                error: null != g ? g : ec(E),
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
                    (0, i.jsx)(j.II, {
                        label: en.intl.string(en.t['CIGa+/']),
                        name: 'password',
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
                            }),
                        error: null != m ? m : ec(I),
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
                        label: en.intl.string(en.t.rhBeKS),
                        wrapperClassName: er.birthdayInput,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != f ? f : ec(O),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur
                    }),
                    (0, i.jsx)(y.Z, {}),
                    this.renderConsentComponent(),
                    T,
                    A,
                    $.a
                        ? null
                        : (0, i.jsx)(j.zx, {
                              look: j.zx.Looks.LINK,
                              color: j.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: ei.marginTop20,
                              children: en.intl.string(en.t['1lWxu7'])
                          })
                ]
            });
        return t
            ? (0, i.jsx)(J.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: a()(N, er.horizontalAuthBox),
                  children: () => [
                      Z,
                      (0, i.jsxs)(
                          'div',
                          {
                              className: er.flex,
                              children: [
                                  (0, i.jsx)(j.Dx, {
                                      className: er.createAccountTemplateHeader,
                                      children: en.intl.string(en.t.wC4TlZ)
                                  }),
                                  R
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, i.jsxs)(j.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: N,
                  children: [
                      C
                          ? (0, i.jsx)(j.zx, {
                                onClick: this.handleGotoLogin,
                                look: j.zx.Looks.LINK,
                                color: j.zx.Colors.PRIMARY,
                                className: er.goBackButton,
                                children: (0, i.jsxs)('div', {
                                    className: er.content,
                                    children: [
                                        (0, i.jsx)(p.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: er.caret
                                        }),
                                        (0, i.jsx)(p.Text, {
                                            variant: 'text-md/normal',
                                            children: en.intl.string(en.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      Z,
                      R
                  ]
              });
    }
    render() {
        let { isUnderage: e } = this.props,
            t = this.inGuildOrChannelInviteFlow();
        if (e || this.hasError('date_of_birth')) return (0, i.jsx)(_.Z, {});
        let { giftCode: n, invite: r, guildTemplate: l } = this.props,
            s = null != r && null == r.guild && null == r.channel && null != r.inviter;
        return null != r && t
            ? r.state === X.r2o.RESOLVING
                ? this.renderInviteResolving()
                : this.renderInvite()
            : null != l
              ? this.renderFull(() => (0, i.jsx)(T.Z, { guildTemplate: l }), !0)
              : null != n
                ? this.renderFull(() => (0, i.jsx)(q.Z, { giftCode: n }))
                : null != r && s && r.state === X.r2o.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)(Y.Z, {
                            invite: r,
                            isRegister: !0
                        })
                    )
                  : this.renderFull();
    }
    constructor(e) {
        var t;
        (super(e),
            el(this, 'emailRef', void 0),
            el(this, 'usernameRef', void 0),
            el(this, 'globalNameRef', void 0),
            el(this, 'passwordRef', void 0),
            el(this, 'dateOfBirthRef', l.createRef()),
            el(this, '_retryTimer', new h.V7()),
            el(this, 'handleGotoLogin', (e) => {
                let t,
                    { email: n } = this.state,
                    { giftCode: r, guildTemplate: i, invite: l, location: s, onLoginStart: a, redirectTo: c, transitionTo: u } = this.props,
                    d = null != s ? (0, o.parse)(s.search) : {};
                (null != l ? (t = X.Z5c.INVITE_LOGIN(l.code)) : null != r ? (t = X.Z5c.GIFT_CODE_LOGIN(r.code)) : null != i ? (t = X.Z5c.GUILD_TEMPLATE_LOGIN(i.code)) : null != c ? ((t = X.Z5c.LOGIN), (d.redirect_to = c)) : ((t = X.Z5c.LOGIN), '' !== n && (d = { email: n })),
                    g.Z.loginReset(),
                    u(t, {
                        search: (0, o.stringify)(d),
                        source: 'register'
                    }),
                    null == a || a(e),
                    H.S.dispatch(X.CkL.WAVE_EMPHASIZE));
            }),
            el(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: l } = this.state,
                    { consentRequired: s } = this.props;
                if (null === s) return;
                let a = this.inGuildOrChannelInviteFlow(),
                    o = !1;
                (a ? 0 === l.length && (this.setState({ globalNameClientError: en.intl.string(en.t.EkokLy) }), (o = !0)) : (0 === t.length && (this.setState({ emailClientError: en.intl.string(en.t.EkokLy) }), (o = !0)), 0 === n.length && (this.setState({ usernameClientError: en.intl.string(en.t.EkokLy) }), (o = !0)), 0 === r.length && (this.setState({ passwordClientError: en.intl.string(en.t.EkokLy) }), (o = !0))), null == i && (this.setState({ dateOfBirthClientError: en.intl.string(en.t.EkokLy) }), (o = !0)), o || this.handleRegister());
            }),
            el(this, 'trackInputFocus', (e) => {
                V.default.track(X.rMx.REGISTER_INPUT_FOCUS, { field: e });
            }),
            el(this, 'trackInputBlur', (e) => {
                V.default.track(X.rMx.REGISTER_INPUT_BLUR, { field: e });
            }),
            el(this, 'handleBirthdayChange', (e) => {
                (this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null }));
            }),
            el(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    { usernameSuggestion: r } = this.props;
                return (0, i.jsx)(eh, {
                    username: e,
                    suggestion: r,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        (null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({ username: r }));
                    }
                });
            }));
        let n = null != e.location ? (0, o.parse)(e.location.search) : {};
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
function ed(e) {
    let t = (0, d.cj)([F.Z, G.default, f.Z, R.Z, P.Z], () => ({
            consentRequired: F.Z.getAuthenticationConsentRequired(),
            authenticated: G.default.isAuthenticated(),
            isUnderage: f.Z.isUnderageAnonymous(),
            country: R.Z.getCountryCode(),
            hasLoggedInAccounts: P.Z.getHasLoggedInAccounts()
        })),
        n = (0, d.e7)([L.Z], () => L.Z.registrationUsernameSuggestion()),
        [r, s] = l.useState(Q.EW.FULL);
    return (
        (0, b.Z)(
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
        ),
        (0, i.jsx)(
            eu,
            es(
                {
                    onChangeStep: (e) => s(e),
                    usernameSuggestion: n
                },
                e,
                t
            )
        )
    );
}
function eh(e) {
    let t,
        { username: n, suggestion: r, globalName: l, isUsernameFocused: s, onClickSuggestion: a } = e,
        o = (0, k.a)(n, !0, !0),
        u = n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(o)
                  .with(
                      {
                          type: D.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, i.jsx)(p.Text, {
                              className: er.messageNegative,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .with(
                      {
                          type: D.K.AVAILABLE,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, i.jsx)(p.Text, {
                              className: er.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, i.jsx)(p.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-default',
                          children: en.intl.string(en.t.z7c4bG)
                      })
                  )
            : null != r && r.length > 0 && l.length > 0
              ? (0, i.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: en.intl.format(en.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: a
                    })
                })
              : (0, i.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    children: en.intl.string(en.t.z7c4bG)
                })),
        (0, i.jsx)(M.Z, {
            show: (u && (null == o ? void 0 : o.type) === D.K.ERROR) || s,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
el(eu, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: B.uL
});
