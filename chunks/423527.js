n.d(t, { Z: () => ep }), n(704826), n(35282), n(781311), n(388685), n(314940);
var r,
    i = n(255367),
    l = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(593473),
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
    O = n(254942),
    I = n(481230),
    j = n(388905),
    S = n(853268),
    N = n(639946),
    y = n(616952),
    C = n(792766),
    T = n(692483),
    P = n(100159),
    A = n(473855),
    Z = n(726745),
    R = n(929809),
    L = n(541692),
    w = n(986197),
    D = n(135200),
    k = n(219496),
    M = n(794099),
    U = n(807369),
    G = n(180529),
    B = n(703656),
    F = n(108427),
    z = n(314897),
    V = n(480294),
    K = n(896797),
    H = n(626135),
    W = n(585483),
    q = n(70956),
    Y = n(63063),
    J = n(624138),
    X = n(481153),
    Q = n(588705),
    $ = n(163671),
    ee = n(981631),
    et = n(355142),
    en = n(188785),
    er = n(701476),
    ei = n(801461),
    el = n(388032),
    es = n(840368),
    eo = n(20493);
function ea(e, t, n) {
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
function ec(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
let ed = /\.$/,
    eh = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ed, ''))
                  .join('. ')
                  .trim()
            : e;
class eg extends (r = l.PureComponent) {
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
            ee.rMx.REGISTER_VIEWED,
            ec(
                {
                    location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                    registration_source: this.registrationSource
                },
                null != e ? (0, P.Z)(e, !1, !1) : {}
            ),
            { flush: !0 }
        ),
            null == this.props.consentRequired && p.Z.getLocationMetadata(),
            (0, F.e)('register');
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
        let { authenticated: n, isUnderage: r, invite: i, onChangeStep: l } = this.props,
            { apiErrors: s, parsedDateOfBirth: o } = this.state;
        (t.apiErrors !== s || t.parsedDateOfBirth !== o) &&
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
                          'number' == typeof s.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(s.retry_after * q.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, R.c)(er.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = et.EW.FULL;
        r || this.hasError('date_of_birth') ? (a = et.EW.AGE_GATE) : null != i && (null != i.guild || null != i.channel) && (a = et.EW.INVITE), l(a);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : K.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: l } = this.state,
            { invite: s, guildTemplate: o, giftCode: a, onRegister: c, usernameSuggestion: u, isMobileWebInviteRegistration: d, inUnclaimedFlowExperiment: h } = this.props,
            g = null != s ? s.code : null,
            p = null != a ? a.skuId : null,
            f = b.MD.getState(),
            _ = (0, J.Ew)(u) ? null : t === u,
            x = en.a ? await (0, T.K)(t) : t,
            E = en.a ? await (0, T.K)(n) : n;
        W.S.dispatch(ee.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            d || null == s
                ? await (0, I.R$)({
                      email: e,
                      username: x,
                      globalName: E,
                      consent: i,
                      password: r,
                      invite: g,
                      usedUsernameSuggestion: _,
                      guildTemplateCode: null == o ? void 0 : o.code,
                      giftCodeSKUId: p,
                      birthday: l,
                      promoEmailConsent: f.required ? f : null
                  })
                : await (0, I.ZP)({
                      consent: i,
                      invite: g,
                      giftCodeSKUId: p,
                      usedUsernameSuggestion: _,
                      globalName: E,
                      birthday: h ? l : void 0
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof m.Hx))) return;
            let e = (0, O.F)(t);
            this.setState({ apiErrors: e });
        }
    }
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    renderConsentComponents() {
        let { consent: e } = this.state,
            { consentRequired: t, inUnclaimedFlowExperiment: n } = this.props,
            r = null,
            l = null;
        return (
            t
                ? (l = (0, i.jsx)(S.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: el.intl.format(el.t.qMDAPz, {
                          termsURL: ee.EYA.TERMS,
                          privacyURL: ee.EYA.PRIVACY
                      })
                  }))
                : (r = n
                      ? (0, i.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            className: o()(eo.marginTop8, es.centeredSubText),
                            children: el.intl.format(el.t.BvbzxM, {
                                termsURL: ee.EYA.TERMS,
                                privacyURL: ee.EYA.PRIVACY
                            })
                        })
                      : (0, i.jsx)(j.i_, {
                            className: o()(eo.marginTop8, { [es.centeredSubText]: n }),
                            children: el.intl.format(el.t['F+0zT0'], {
                                termsURL: ee.EYA.TERMS,
                                privacyURL: ee.EYA.PRIVACY
                            })
                        })),
            {
                subText: r,
                consentText: l
            }
        );
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
                (0, i.jsx)(Q.R, {}),
                (0, i.jsxs)(j.gO, {
                    className: eo.marginTop40,
                    children: [
                        (0, i.jsx)(g.vwX, { children: el.intl.string(el.t.TWzdWl) }),
                        (0, i.jsx)(g.ua7, {
                            text: el.intl.string(el.t['hBB85+']),
                            position: 'right',
                            color: g.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: r, onMouseLeave: l } = e;
                                return (0, i.jsx)(j.II, {
                                    autoFocus: !0,
                                    className: eo.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: el.intl.string(el.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: r,
                                    onMouseLeave: l,
                                    onFocus: () => this.trackInputFocus('username'),
                                    onBlur: () => this.trackInputBlur('username')
                                });
                            }
                        }),
                        (0, i.jsx)(j.zx, {
                            className: eo.marginTop20,
                            disabled: !0,
                            children: el.intl.string(el.t['3PatS0'])
                        }),
                        (0, i.jsx)(j.i_, {
                            disabled: !0,
                            className: eo.marginTop8,
                            children: el.intl.format(el.t['F+0zT0'], {
                                termsURL: ee.EYA.TERMS,
                                privacyURL: ee.EYA.PRIVACY
                            })
                        }),
                        en.a
                            ? null
                            : (0, i.jsx)(j.zx, {
                                  look: j.zx.Looks.LINK,
                                  color: j.zx.Colors.LINK,
                                  disabled: !0,
                                  className: eo.marginTop20,
                                  children: el.intl.string(el.t['r/jzu7'])
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
              ? (0, i.jsx)(N.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(Q.Z, {
                    invite: e,
                    inUnclaimedFlowExperiment: t
                });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t, inUnclaimedFlowExperiment: n } = this.props,
            { consent: r, registering: l } = this.state,
            s = j.zx.Colors.BRAND,
            o = n ? el.intl.string(el.t['825cFx']) : el.intl.string(el.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((s = j.zx.Colors.GREEN), (o = el.intl.string(el.t['5UKyUl']))),
            (0, i.jsx)(g.ua7, {
                text: !r && t ? el.intl.string(el.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        eu(ec({ className: n ? eo.marginTop8 : eo.marginTop20 }, e), {
                            children: (0, i.jsx)(j.zx, {
                                type: 'submit',
                                submitting: l,
                                disabled: !this.hasConsent(),
                                color: s,
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
                apiErrors: { username: r, global_name: l, date_of_birth: s },
                globalName: o,
                globalNameClientError: a,
                dateOfBirthClientError: c,
                parsedDateOfBirth: u,
                globalNameFocused: d
            } = this.state,
            { subText: h, consentText: p } = this.renderConsentComponents(),
            m = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            f = (e) => {
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
                        m ? (0, i.jsx)('div', { className: es.divider }) : null,
                        (0, i.jsxs)(j.gO, {
                            className: m ? void 0 : eo.marginTop40,
                            children: [
                                (0, i.jsx)(g.vwX, {
                                    error: null != a ? a : eh(null != l ? l : r),
                                    children: el.intl.string(el.t['9AjdkJ'])
                                }),
                                (0, i.jsx)(g.ua7, {
                                    text: el.intl.string(el.t['hBB85+']),
                                    position: 'right',
                                    color: g.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(j.II, {
                                            autoFocus: !0,
                                            className: eo.marginBottom8,
                                            name: 'global_name',
                                            value: o,
                                            placeholder: el.intl.string(el.t['09Q8ys']),
                                            onChange: f,
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
                                (0, i.jsx)(G.Z, {
                                    show: !n || d,
                                    children: (0, i.jsx)(g.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: el.intl.string(el.t['330TCQ'])
                                    })
                                }),
                                n
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(x.Z, {
                                                  label: el.intl.string(el.t.rhBeKS),
                                                  labelTag: g.RB0.H3,
                                                  wrapperClassName: eo.marginTop20,
                                                  name: 'date_of_birth',
                                                  onChange: this.handleBirthdayChange,
                                                  ref: this.dateOfBirthRef,
                                                  error: null != c ? c : eh(s),
                                                  value: u
                                              }),
                                              (0, i.jsx)(g.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-secondary',
                                                  className: es.birthdayText,
                                                  children: el.intl.format(el.t['6ENSU1'], { helpURL: Y.Z.getArticleURL(ee.BhN.AGE_GATE) })
                                              })
                                          ]
                                      })
                                    : null,
                                n && h,
                                this.renderInviteButton(),
                                !n && h,
                                p,
                                en.a
                                    ? null
                                    : (0, i.jsx)('div', {
                                          className: n ? es.centeredButtonContainer : void 0,
                                          children: (0, i.jsx)(j.zx, {
                                              look: j.zx.Looks.LINK,
                                              color: j.zx.Colors.LINK,
                                              onClick: this.handleGotoLogin,
                                              className: eo.marginTop20,
                                              children: n ? el.intl.string(el.t['1lWxu7']) : el.intl.string(el.t['r/jzu7'])
                                          })
                                      })
                            ]
                        })
                    ]
                }),
                null != e && m
                    ? (0, i.jsx)(j.ZP, {
                          className: eo.marginTop20,
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
            : (0, i.jsx)(j.i_, {
                  className: o()(eo.marginTop20, es.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: r, globalName: s, password: a, consent: c, parsedDateOfBirth: u, globalNameFocused: d, emailClientError: h, usernameClientError: p, passwordClientError: m, dateOfBirthClientError: f, registering: _, apiErrors: { email: E, username: b, global_name: v, password: O, date_of_birth: I } = {} } = this.state,
            {
                consentRequired: S,
                isMobileWebInviteRegistration: N,
                uniqueUsernameRegistrationConfig: { suggestions: C },
                authBoxClassName: T,
                hasLoggedInAccounts: P
            } = this.props,
            { subText: A, consentText: Z } = this.renderConsentComponents(),
            R = this.renderErrorMessage(),
            L = (0, i.jsx)(g.ua7, {
                text: !c && S ? el.intl.string(el.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        eu(ec({ className: eo.marginTop20 }, e), {
                            children: (0, i.jsx)(j.zx, {
                                type: 'submit',
                                submitting: _,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: el.intl.string(el.t['3PatS0'])
                            })
                        })
                    )
            }),
            k = async () => {
                this.setState({ usernameFocused: !0 }), C && s.length > 0 && !D.Z.wasRegistrationSuggestionFetched(s) && (await w.Z.fetchSuggestionsRegistration(s));
            },
            M = null != e ? (0, i.jsx)(l.Fragment, { children: e() }, 'custom-header') : (0, i.jsx)(j.Dx, { children: el.intl.string(el.t.wC4TlZ) }, 'title'),
            U = (0, i.jsxs)(j.gO, {
                className: eo.marginTop20,
                children: [
                    (0, i.jsx)(j.II, {
                        autoFocus: !0,
                        className: eo.marginBottom20,
                        label: el.intl.string(el.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? el.intl.string(el.t.EkokLy) : null
                            }),
                        error: null != h ? h : eh(E),
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
                        label: el.intl.string(el.t['9AjdkJ']),
                        className: eo.marginBottom20,
                        name: 'global_name',
                        value: s,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: eh(v),
                        maxLength: ei.hy,
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
                    (0, i.jsx)(G.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: el.intl.string(el.t['330TCQ'])
                        })
                    }),
                    (0, i.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: k,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(j.II, {
                                label: el.intl.string(el.t.TWzdWl),
                                className: eo.marginBottom20,
                                name: 'username',
                                value: r,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? el.intl.string(el.t.EkokLy) : null
                                    });
                                },
                                error: null != p ? p : eh(b),
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
                        label: el.intl.string(el.t['CIGa+/']),
                        name: 'password',
                        value: a,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? el.intl.string(el.t.EkokLy) : null
                            }),
                        error: null != m ? m : eh(O),
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
                        label: el.intl.string(el.t.rhBeKS),
                        wrapperClassName: eo.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != f ? f : eh(I),
                        value: u,
                        required: !0,
                        onFocus: this.trackInputFocus,
                        onBlur: this.trackInputBlur
                    }),
                    (0, i.jsx)(y.Z, {}),
                    L,
                    R,
                    Z,
                    A,
                    en.a
                        ? null
                        : (0, i.jsx)(j.zx, {
                              look: N ? j.zx.Looks.FILLED : j.zx.Looks.LINK,
                              color: N ? j.zx.Colors.PRIMARY : j.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: eo.marginTop20,
                              children: el.intl.string(el.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, i.jsx)($.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(T, es.horizontalAuthBox),
                  children: () => [
                      M,
                      (0, i.jsxs)(
                          'div',
                          {
                              className: es.flex,
                              children: [
                                  (0, i.jsx)(j.Dx, {
                                      className: es.createAccountTemplateHeader,
                                      children: el.intl.string(el.t.wC4TlZ)
                                  }),
                                  U
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, i.jsxs)(j.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: T,
                  children: [
                      P && !N
                          ? (0, i.jsx)(j.zx, {
                                onClick: this.handleGotoLogin,
                                look: j.zx.Looks.LINK,
                                color: j.zx.Colors.PRIMARY,
                                className: es.goBackButton,
                                children: (0, i.jsxs)('div', {
                                    className: es.content,
                                    children: [
                                        (0, i.jsx)(g.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: es.caret
                                        }),
                                        (0, i.jsx)(g.Text, {
                                            variant: 'text-md/normal',
                                            children: el.intl.string(el.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      M,
                      U
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t, inUnclaimedFlowExperiment: n } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, i.jsx)(_.Z, { inUnclaimedFlowExperiment: n });
        let { giftCode: r, invite: l, guildTemplate: s } = this.props,
            o = null != l && null == l.guild && null == l.channel && null != l.inviter;
        return null == l || o || t
            ? null != s
                ? this.renderFull(() => (0, i.jsx)(A.Z, { guildTemplate: s }), !0)
                : null != r
                  ? this.renderFull(() => (0, i.jsx)(X.Z, { giftCode: r }))
                  : null != l && o && l.state === ee.r2o.RESOLVED && !t
                    ? this.renderFull(() =>
                          (0, i.jsx)(Q.Z, {
                              invite: l,
                              isRegister: !0
                          })
                      )
                    : this.renderFull()
            : l.state === ee.r2o.RESOLVING
              ? this.renderInviteResolving()
              : this.renderInvite();
    }
    constructor(e) {
        var t;
        super(e),
            ea(this, 'emailRef', void 0),
            ea(this, 'usernameRef', void 0),
            ea(this, 'globalNameRef', void 0),
            ea(this, 'passwordRef', void 0),
            ea(this, 'dateOfBirthRef', l.createRef()),
            ea(this, '_retryTimer', new h.V7()),
            ea(this, 'handleGotoLogin', (e) => {
                let t,
                    { email: n } = this.state,
                    { giftCode: r, guildTemplate: i, invite: l, location: s, onLoginStart: o, redirectTo: c, transitionTo: u, isMobileWebInviteRegistration: d } = this.props;
                if (d) {
                    null == o || o(e);
                    return;
                }
                let h = null != s ? (0, a.parse)(s.search) : {};
                null != l ? (t = ee.Z5c.INVITE_LOGIN(l.code)) : null != r ? (t = ee.Z5c.GIFT_CODE_LOGIN(r.code)) : null != i ? (t = ee.Z5c.GUILD_TEMPLATE_LOGIN(i.code)) : null != c ? ((t = ee.Z5c.LOGIN), (h.redirect_to = c)) : ((t = ee.Z5c.LOGIN), '' !== n && (h = { email: n })),
                    p.Z.loginReset(),
                    u(t, {
                        search: (0, a.stringify)(h),
                        source: 'register'
                    }),
                    null == o || o(e),
                    W.S.dispatch(ee.CkL.WAVE_EMPHASIZE);
            }),
            ea(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i, globalName: l } = this.state,
                    { invite: s, consentRequired: o, inUnclaimedFlowExperiment: a } = this.props;
                if (null === o) return;
                let c = !1;
                null == s && (0 === t.length && (this.setState({ emailClientError: el.intl.string(el.t.EkokLy) }), (c = !0)), 0 === n.length && (this.setState({ usernameClientError: el.intl.string(el.t.EkokLy) }), (c = !0)), 0 === r.length && (this.setState({ passwordClientError: el.intl.string(el.t.EkokLy) }), (c = !0)), null == i && (this.setState({ dateOfBirthClientError: el.intl.string(el.t.EkokLy) }), (c = !0))), a && (0 === l.length && (this.setState({ globalNameClientError: el.intl.string(el.t.EkokLy) }), (c = !0)), null == i && (this.setState({ dateOfBirthClientError: el.intl.string(el.t.EkokLy) }), (c = !0))), c || this.handleRegister();
            }),
            ea(this, 'trackInputFocus', (e) => {
                H.default.track(ee.rMx.REGISTER_INPUT_FOCUS, { field: e });
            }),
            ea(this, 'trackInputBlur', (e) => {
                H.default.track(ee.rMx.REGISTER_INPUT_BLUR, { field: e });
            }),
            ea(this, 'handleBirthdayChange', (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            ea(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    {
                        usernameSuggestion: r,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: l }
                    } = this.props;
                return (0, i.jsx)(em, {
                    username: e,
                    suggestion: r,
                    livecheckEnabled: l,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({ username: r });
                    }
                });
            });
        let n = null != e.location ? (0, a.parse)(e.location.search) : {};
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
function ep(e) {
    let t = (0, d.cj)([V.Z, z.default, f.Z, L.Z, Z.Z], () => ({
            consentRequired: V.Z.getAuthenticationConsentRequired(),
            authenticated: z.default.isAuthenticated(),
            isUnderage: f.Z.isUnderageAnonymous(),
            country: L.Z.getCountryCode(),
            hasLoggedInAccounts: Z.Z.getHasLoggedInAccounts()
        })),
        n = (0, M.F4)(),
        r = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
        [s, o] = l.useState(et.EW.FULL);
    (0, E.Z)(
        {
            type: u.ImpressionTypes.VIEW,
            name: u.ImpressionNames.USER_REGISTRATION,
            properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: s
            }
        },
        {},
        [s]
    );
    let { enabled: a } = v.Z.useExperiment({ location: 'register' }, { autoTrackExposure: s === et.EW.INVITE });
    return (0, i.jsx)(
        eg,
        ec(
            {
                onChangeStep: (e) => o(e),
                uniqueUsernameRegistrationConfig: n,
                usernameSuggestion: r,
                inUnclaimedFlowExperiment: a
            },
            e,
            t
        )
    );
}
function em(e) {
    let t,
        { username: n, suggestion: r, globalName: l, livecheckEnabled: s, isUsernameFocused: o, onClickSuggestion: a } = e,
        u = (0, U.a)(n, s, !0),
        d = s && n.length > 0;
    return (
        (t = d
            ? (0, c.EQ)(u)
                  .with(
                      {
                          type: k.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, i.jsx)(g.Text, {
                              className: es.messageNegative,
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
                              className: es.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, i.jsx)(g.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: el.intl.string(el.t.z7c4bG)
                      })
                  )
            : null != r && r.length > 0 && l.length > 0
              ? (0, i.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: el.intl.format(el.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: a
                    })
                })
              : (0, i.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: el.intl.string(el.t.z7c4bG)
                })),
        (0, i.jsx)(G.Z, {
            show: (d && (null == u ? void 0 : u.type) === k.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
ea(eg, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: B.uL
});
