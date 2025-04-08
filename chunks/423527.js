n.d(t, { Z: () => ep }), n(704826), n(35282), n(781311), n(388685), n(314940);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    p = n(846519),
    h = n(481060),
    g = n(893776),
    f = n(881052),
    m = n(899370),
    _ = n(224841),
    b = n(13430),
    x = n(213609),
    N = n(882037),
    v = n(254942),
    E = n(481230),
    I = n(388905),
    j = n(853268),
    S = n(639946),
    O = n(616952),
    C = n(792766),
    y = n(692483),
    T = n(100159),
    P = n(473855),
    A = n(726745),
    Z = n(929809),
    R = n(541692),
    w = n(986197),
    L = n(135200),
    D = n(219496),
    k = n(794099),
    W = n(807369),
    B = n(180529),
    M = n(703656),
    G = n(108427),
    U = n(314897),
    F = n(480294),
    z = n(896797),
    V = n(626135),
    H = n(585483),
    K = n(70956),
    q = n(624138),
    Y = n(481153),
    J = n(588705),
    X = n(163671),
    Q = n(981631),
    $ = n(355142),
    ee = n(188785),
    et = n(701476),
    en = n(801461),
    er = n(388032),
    ei = n(840368),
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
function el(e) {
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
let ec = /\.$/,
    eu = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ec, ''))
                  .join('. ')
                  .trim()
            : e;
class ed extends (r = o.PureComponent) {
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
        V.default.track(
            Q.rMx.REGISTER_VIEWED,
            el(
                {
                    location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                    registration_source: this.registrationSource
                },
                null != e ? (0, T.Z)(e, !1, !1) : {}
            ),
            { flush: !0 }
        ),
            null == this.props.consentRequired && g.Z.getLocationMetadata(),
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
        let { authenticated: n, isUnderage: r, invite: i, onChangeStep: o } = this.props,
            { apiErrors: a, parsedDateOfBirth: l } = this.state;
        (t.apiErrors !== a || t.parsedDateOfBirth !== l) &&
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
                          'number' == typeof a.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(a.retry_after * K.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, Z.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let s = $.EW.FULL;
        r || this.hasError('date_of_birth') ? (s = $.EW.AGE_GATE) : null != i && (null != i.guild || null != i.channel) && (s = $.EW.INVITE), o(s);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : z.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: o } = this.state,
            { invite: a, guildTemplate: l, giftCode: s, onRegister: c, usernameSuggestion: u, isMobileWebInviteRegistration: d } = this.props,
            p = null != a ? a.code : null,
            h = null != s ? s.skuId : null,
            g = N.MD.getState(),
            m = (0, q.Ew)(u) ? null : t === u,
            _ = ee.a ? await (0, y.K)(t) : t,
            b = ee.a ? await (0, y.K)(n) : n;
        H.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            d || null == a
                ? await (0, E.R$)({
                      email: e,
                      username: _,
                      globalName: b,
                      consent: i,
                      password: r,
                      invite: p,
                      usedUsernameSuggestion: m,
                      guildTemplateCode: null == l ? void 0 : l.code,
                      giftCodeSKUId: h,
                      birthday: o,
                      promoEmailConsent: g.required ? g : null
                  })
                : await (0, E.ZP)({
                      consent: i,
                      invite: p,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: m,
                      globalName: b
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof f.Hx))) return;
            let e = (0, v.F)(t);
            this.setState({ apiErrors: e });
        }
    }
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    renderConsentComponents() {
        let { consent: e } = this.state,
            { consentRequired: t } = this.props,
            n = null,
            r = null;
        return (
            t
                ? (r = (0, i.jsx)(j.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: er.NW.format(er.t.qMDAPz, {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY
                      })
                  }))
                : (n = (0, i.jsx)(I.i_, {
                      className: eo.marginTop8,
                      children: er.NW.format(er.t['F+0zT0'], {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY
                      })
                  })),
            {
                subText: n,
                consentText: r
            }
        );
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
                (0, i.jsx)(J.R, {}),
                (0, i.jsxs)(I.gO, {
                    className: eo.marginTop40,
                    children: [
                        (0, i.jsx)(h.vwX, { children: er.NW.string(er.t.TWzdWl) }),
                        (0, i.jsx)(h.ua7, {
                            text: er.NW.string(er.t['hBB85+']),
                            position: 'right',
                            color: h.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: r, onMouseLeave: o } = e;
                                return (0, i.jsx)(I.II, {
                                    autoFocus: !0,
                                    className: eo.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: er.NW.string(er.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: r,
                                    onMouseLeave: o
                                });
                            }
                        }),
                        (0, i.jsx)(I.zx, {
                            className: eo.marginTop20,
                            disabled: !0,
                            children: er.NW.string(er.t['3PatS0'])
                        }),
                        (0, i.jsx)(I.i_, {
                            disabled: !0,
                            className: eo.marginTop8,
                            children: er.NW.format(er.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                        }),
                        ee.a
                            ? null
                            : (0, i.jsx)(I.zx, {
                                  look: I.zx.Looks.LINK,
                                  color: I.zx.Colors.LINK,
                                  disabled: !0,
                                  className: eo.marginTop20,
                                  children: er.NW.string(er.t['r/jzu7'])
                              })
                    ]
                })
            ]
        });
    }
    renderInviteHeader() {
        let { invite: e } = this.props;
        return (null == e ? void 0 : e.stage_instance) != null && null != e.guild
            ? (0, i.jsx)(C.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, i.jsx)(S.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(J.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: r } = this.state,
            o = I.zx.Colors.BRAND,
            a = er.NW.string(er.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((o = I.zx.Colors.GREEN), (a = er.NW.string(er.t['5UKyUl']))),
            (0, i.jsx)(h.ua7, {
                text: !n && t ? er.NW.string(er.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        es(el({ className: eo.marginTop20 }, e), {
                            children: (0, i.jsx)(I.zx, {
                                type: 'submit',
                                submitting: r,
                                disabled: !this.hasConsent(),
                                color: o,
                                children: a
                            })
                        })
                    )
            })
        );
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: r },
                globalName: o
            } = this.state,
            { subText: a, consentText: l } = this.renderConsentComponents(),
            s = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            c = (e) => {
                this.setState({ globalName: e });
            };
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)(I.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        s ? (0, i.jsx)('div', { className: ei.divider }) : null,
                        (0, i.jsxs)(I.gO, {
                            className: s ? void 0 : eo.marginTop40,
                            children: [
                                (0, i.jsx)(h.vwX, {
                                    error: eu(null != r ? r : n),
                                    children: er.NW.string(er.t['9AjdkJ'])
                                }),
                                (0, i.jsx)(h.ua7, {
                                    text: er.NW.string(er.t['hBB85+']),
                                    position: 'right',
                                    color: h.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: a } = e;
                                        return (0, i.jsx)(I.II, {
                                            autoFocus: !0,
                                            className: eo.marginBottom8,
                                            name: 'global_name',
                                            value: o,
                                            placeholder: er.NW.string(er.t['09Q8ys']),
                                            onChange: c,
                                            error: null != n || null != r ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: a
                                        });
                                    }
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: er.NW.string(er.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                a,
                                l,
                                ee.a
                                    ? null
                                    : (0, i.jsx)(I.zx, {
                                          look: I.zx.Looks.LINK,
                                          color: I.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: eo.marginTop20,
                                          children: er.NW.string(er.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && s
                    ? (0, i.jsx)(I.ZP, {
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
            : (0, i.jsx)(I.i_, {
                  className: l()(eo.marginTop20, ei.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: r, globalName: a, password: s, consent: c, parsedDateOfBirth: u, globalNameFocused: d, emailClientError: p, usernameClientError: g, passwordClientError: f, dateOfBirthClientError: m, registering: _, apiErrors: { email: x, username: N, global_name: v, password: E, date_of_birth: j } = {} } = this.state,
            {
                consentRequired: S,
                isMobileWebInviteRegistration: C,
                uniqueUsernameRegistrationConfig: { suggestions: y },
                authBoxClassName: T,
                hasLoggedInAccounts: P
            } = this.props,
            { subText: A, consentText: Z } = this.renderConsentComponents(),
            R = this.renderErrorMessage(),
            D = (0, i.jsx)(h.ua7, {
                text: !c && S ? er.NW.string(er.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        es(el({ className: eo.marginTop20 }, e), {
                            children: (0, i.jsx)(I.zx, {
                                type: 'submit',
                                submitting: _,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: er.NW.string(er.t['3PatS0'])
                            })
                        })
                    )
            }),
            k = async () => {
                this.setState({ usernameFocused: !0 }), y && a.length > 0 && !L.Z.wasRegistrationSuggestionFetched(a) && (await w.Z.fetchSuggestionsRegistration(a));
            },
            W = null != e ? (0, i.jsx)(o.Fragment, { children: e() }, 'custom-header') : (0, i.jsx)(I.Dx, { children: er.NW.string(er.t.wC4TlZ) }, 'title'),
            M = (0, i.jsxs)(I.gO, {
                className: eo.marginTop20,
                children: [
                    (0, i.jsx)(I.II, {
                        autoFocus: !0,
                        className: eo.marginBottom20,
                        label: er.NW.string(er.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? er.NW.string(er.t.EkokLy) : null
                            }),
                        error: null != p ? p : eu(x),
                        type: 'email',
                        autoComplete: 'username',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, i.jsx)(I.II, {
                        label: er.NW.string(er.t['9AjdkJ']),
                        className: eo.marginBottom20,
                        name: 'global_name',
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: eu(v),
                        maxLength: en.hy,
                        autoComplete: 'off',
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => this.setState({ globalNameFocused: !0 }),
                        onBlur: () => this.setState({ globalNameFocused: !1 })
                    }),
                    (0, i.jsx)(B.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: er.NW.string(er.t['330TCQ'])
                        })
                    }),
                    (0, i.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: k,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(I.II, {
                                label: er.NW.string(er.t.TWzdWl),
                                className: eo.marginBottom20,
                                name: 'username',
                                value: r,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? er.NW.string(er.t.EkokLy) : null
                                    });
                                },
                                error: null != g ? g : eu(N),
                                autoComplete: 'off',
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, i.jsx)(I.II, {
                        label: er.NW.string(er.t['CIGa+/']),
                        name: 'password',
                        value: s,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? er.NW.string(er.t.EkokLy) : null
                            }),
                        error: null != f ? f : eu(E),
                        type: 'password',
                        autoComplete: 'new-password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, i.jsx)(b.Z, {
                        label: er.NW.string(er.t.rhBeKS),
                        wrapperClassName: eo.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != m ? m : eu(j),
                        value: u,
                        required: !0
                    }),
                    (0, i.jsx)(O.Z, {}),
                    D,
                    R,
                    Z,
                    A,
                    ee.a
                        ? null
                        : (0, i.jsx)(I.zx, {
                              look: C ? I.zx.Looks.FILLED : I.zx.Looks.LINK,
                              color: C ? I.zx.Colors.PRIMARY : I.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: eo.marginTop20,
                              children: er.NW.string(er.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, i.jsx)(X.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: l()(T, ei.horizontalAuthBox),
                  children: () => [
                      W,
                      (0, i.jsxs)(
                          'div',
                          {
                              className: ei.flex,
                              children: [
                                  (0, i.jsx)(I.Dx, {
                                      className: ei.createAccountTemplateHeader,
                                      children: er.NW.string(er.t.wC4TlZ)
                                  }),
                                  M
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, i.jsxs)(I.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: T,
                  children: [
                      P && !C
                          ? (0, i.jsx)(I.zx, {
                                onClick: this.handleGotoLogin,
                                look: I.zx.Looks.LINK,
                                color: I.zx.Colors.PRIMARY,
                                className: ei.goBackButton,
                                children: (0, i.jsxs)('div', {
                                    className: ei.content,
                                    children: [
                                        (0, i.jsx)(h.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: ei.caret
                                        }),
                                        (0, i.jsx)(h.Text, {
                                            variant: 'text-md/normal',
                                            children: er.NW.string(er.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      W,
                      M
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, i.jsx)(_.Z, {});
        let { invite: n, giftCode: r, guildTemplate: o } = this.props,
            a = null != n && null == n.guild && null == n.channel && null != n.inviter;
        return null == n || a || t
            ? null != o
                ? this.renderFull(() => (0, i.jsx)(P.Z, { guildTemplate: o }), !0)
                : null != r
                  ? this.renderFull(() => (0, i.jsx)(Y.Z, { giftCode: r }))
                  : null != n && a && n.state === Q.r2o.RESOLVED && !t
                    ? this.renderFull(() =>
                          (0, i.jsx)(J.Z, {
                              invite: n,
                              isRegister: !0
                          })
                      )
                    : this.renderFull()
            : n.state === Q.r2o.RESOLVING
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
            ea(this, 'dateOfBirthRef', o.createRef()),
            ea(this, '_retryTimer', new p.V7()),
            ea(this, 'handleGotoLogin', (e) => {
                let t,
                    { email: n } = this.state,
                    { giftCode: r, guildTemplate: i, invite: o, location: a, onLoginStart: l, redirectTo: c, transitionTo: u, isMobileWebInviteRegistration: d } = this.props;
                if (d) {
                    null == l || l(e);
                    return;
                }
                let p = null != a ? (0, s.parse)(a.search) : {};
                null != o ? (t = Q.Z5c.INVITE_LOGIN(o.code)) : null != r ? (t = Q.Z5c.GIFT_CODE_LOGIN(r.code)) : null != i ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(i.code)) : null != c ? ((t = Q.Z5c.LOGIN), (p.redirect_to = c)) : ((t = Q.Z5c.LOGIN), '' !== n && (p = { email: n })),
                    g.Z.loginReset(),
                    u(t, {
                        search: (0, s.stringify)(p),
                        source: 'register'
                    }),
                    null == l || l(e),
                    H.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            ea(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i } = this.state,
                    { invite: o, consentRequired: a } = this.props;
                if (null !== a) {
                    if (null == o) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), 0 === r.length && (this.setState({ passwordClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), null == i && (this.setState({ dateOfBirthClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), e)) return;
                    }
                    this.handleRegister();
                }
            }),
            ea(this, 'handleBirthdayChange', (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            ea(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    {
                        usernameSuggestion: r,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: o }
                    } = this.props;
                return (0, i.jsx)(eh, {
                    username: e,
                    suggestion: r,
                    livecheckEnabled: o,
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
    let t = (0, d.cj)([F.Z, U.default, m.Z, R.Z, A.Z], () => ({
            consentRequired: F.Z.getAuthenticationConsentRequired(),
            authenticated: U.default.isAuthenticated(),
            isUnderage: m.Z.isUnderageAnonymous(),
            country: R.Z.getCountryCode(),
            hasLoggedInAccounts: A.Z.getHasLoggedInAccounts()
        })),
        n = (0, k.F4)(),
        r = (0, d.e7)([L.Z], () => L.Z.registrationUsernameSuggestion()),
        [a, l] = o.useState($.EW.FULL);
    return (
        (0, x.Z)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: a
                }
            },
            {},
            [a]
        ),
        (0, i.jsx)(
            ed,
            el(
                {
                    onChangeStep: (e) => l(e),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: r
                },
                e,
                t
            )
        )
    );
}
function eh(e) {
    let t,
        { username: n, suggestion: r, globalName: o, livecheckEnabled: a, isUsernameFocused: l, onClickSuggestion: s } = e,
        u = (0, W.a)(n, a, !0),
        d = a && n.length > 0;
    return (
        (t = d
            ? (0, c.EQ)(u)
                  .with(
                      {
                          type: D.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, i.jsx)(h.Text, {
                              className: ei.messageNegative,
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
                          (0, i.jsx)(h.Text, {
                              className: ei.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, i.jsx)(h.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: er.NW.string(er.t.z7c4bG)
                      })
                  )
            : null != r && r.length > 0 && o.length > 0
              ? (0, i.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: er.NW.format(er.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: s
                    })
                })
              : (0, i.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: er.NW.string(er.t.z7c4bG)
                })),
        (0, i.jsx)(B.Z, {
            show: (d && (null == u ? void 0 : u.type) === D.K.ERROR) || l,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
ea(ed, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: M.uL
});
