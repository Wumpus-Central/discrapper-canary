n.d(t, { Z: () => eh }), n(704826), n(35282), n(781311), n(388685), n(314940);
var r,
    i = n(200651),
    s = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    h = n(846519),
    p = n(481060),
    g = n(893776),
    f = n(881052),
    m = n(899370),
    _ = n(224841),
    N = n(13430),
    x = n(213609),
    b = n(882037),
    E = n(254942),
    v = n(481230),
    j = n(388905),
    I = n(853268),
    O = n(639946),
    S = n(616952),
    y = n(792766),
    C = n(692483),
    P = n(100159),
    A = n(473855),
    T = n(726745),
    Z = n(929809),
    R = n(541692),
    w = n(986197),
    L = n(135200),
    D = n(219496),
    k = n(794099),
    W = n(807369),
    M = n(180529),
    G = n(703656),
    B = n(108427),
    U = n(314897),
    F = n(480294),
    z = n(896797),
    V = n(626135),
    K = n(585483),
    H = n(70956),
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
    ei = n(902807),
    es = n(971005);
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
function eo(e) {
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
                el(e, t, n[t]);
            });
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
let ec = /\.$/,
    eu = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ec, ''))
                  .join('. ')
                  .trim()
            : e;
class ed extends (r = s.PureComponent) {
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
            eo(
                {
                    location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                    registration_source: this.registrationSource
                },
                null != e ? (0, P.Z)(e, !1, !1) : {}
            ),
            { flush: !0 }
        ),
            null == this.props.consentRequired && g.Z.getLocationMetadata(),
            (0, B.e)('register');
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
        let { authenticated: n, isUnderage: r, invite: i, onChangeStep: s } = this.props,
            { apiErrors: l, parsedDateOfBirth: o } = this.state;
        (t.apiErrors !== l || t.parsedDateOfBirth !== o) &&
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
                          this._retryTimer.start(l.retry_after * H.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, Z.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = $.EW.FULL;
        r || this.hasError('date_of_birth') ? (a = $.EW.AGE_GATE) : null != i && (null != i.guild || null != i.channel) && (a = $.EW.INVITE), s(a);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : z.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: r, consent: i, parsedDateOfBirth: s } = this.state,
            { invite: l, guildTemplate: o, giftCode: a, onRegister: c, usernameSuggestion: u, isMobileWebInviteRegistration: d } = this.props,
            h = null != l ? l.code : null,
            p = null != a ? a.skuId : null,
            g = b.MD.getState(),
            m = (0, q.Ew)(u) ? null : t === u,
            _ = ee.a ? await (0, C.K)(t) : t,
            N = ee.a ? await (0, C.K)(n) : n;
        K.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            d || null == l
                ? await (0, v.R$)({
                      email: e,
                      username: _,
                      globalName: N,
                      consent: i,
                      password: r,
                      invite: h,
                      usedUsernameSuggestion: m,
                      guildTemplateCode: null == o ? void 0 : o.code,
                      giftCodeSKUId: p,
                      birthday: s,
                      promoEmailConsent: g.required ? g : null
                  })
                : await (0, v.ZP)({
                      consent: i,
                      invite: h,
                      giftCodeSKUId: p,
                      usedUsernameSuggestion: m,
                      globalName: N
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof f.Hx))) return;
            let e = (0, E.F)(t);
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
                ? (r = (0, i.jsx)(I.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: er.NW.format(er.t.qMDAPz, {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY
                      })
                  }))
                : (n = (0, i.jsx)(j.i_, {
                      className: es.marginTop8,
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
        return (0, i.jsxs)(j.ZP, {
            className: e,
            children: [
                (0, i.jsx)(J.R, {}),
                (0, i.jsxs)(j.gO, {
                    className: es.marginTop40,
                    children: [
                        (0, i.jsx)(p.vwX, { children: er.NW.string(er.t.TWzdWl) }),
                        (0, i.jsx)(p.ua7, {
                            text: er.NW.string(er.t['hBB85+']),
                            position: 'right',
                            color: p.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: r, onMouseLeave: s } = e;
                                return (0, i.jsx)(j.II, {
                                    autoFocus: !0,
                                    className: es.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: er.NW.string(er.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: r,
                                    onMouseLeave: s
                                });
                            }
                        }),
                        (0, i.jsx)(j.zx, {
                            className: es.marginTop20,
                            disabled: !0,
                            children: er.NW.string(er.t['3PatS0'])
                        }),
                        (0, i.jsx)(j.i_, {
                            disabled: !0,
                            className: es.marginTop8,
                            children: er.NW.format(er.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                        }),
                        ee.a
                            ? null
                            : (0, i.jsx)(j.zx, {
                                  look: j.zx.Looks.LINK,
                                  color: j.zx.Colors.LINK,
                                  disabled: !0,
                                  className: es.marginTop20,
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
            ? (0, i.jsx)(y.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, i.jsx)(O.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(J.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: r } = this.state,
            s = j.zx.Colors.BRAND,
            l = er.NW.string(er.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((s = j.zx.Colors.GREEN), (l = er.NW.string(er.t['5UKyUl']))),
            (0, i.jsx)(p.ua7, {
                text: !n && t ? er.NW.string(er.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        ea(eo({ className: es.marginTop20 }, e), {
                            children: (0, i.jsx)(j.zx, {
                                type: 'submit',
                                submitting: r,
                                disabled: !this.hasConsent(),
                                color: s,
                                children: l
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
                globalName: s
            } = this.state,
            { subText: l, consentText: o } = this.renderConsentComponents(),
            a = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            c = (e) => {
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
                        a ? (0, i.jsx)('div', { className: ei.divider }) : null,
                        (0, i.jsxs)(j.gO, {
                            className: a ? void 0 : es.marginTop40,
                            children: [
                                (0, i.jsx)(p.vwX, {
                                    error: eu(null != r ? r : n),
                                    children: er.NW.string(er.t['9AjdkJ'])
                                }),
                                (0, i.jsx)(p.ua7, {
                                    text: er.NW.string(er.t['hBB85+']),
                                    position: 'right',
                                    color: p.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: l } = e;
                                        return (0, i.jsx)(j.II, {
                                            autoFocus: !0,
                                            className: es.marginBottom8,
                                            name: 'global_name',
                                            value: s,
                                            placeholder: er.NW.string(er.t['09Q8ys']),
                                            onChange: c,
                                            error: null != n || null != r ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        });
                                    }
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: er.NW.string(er.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                l,
                                o,
                                ee.a
                                    ? null
                                    : (0, i.jsx)(j.zx, {
                                          look: j.zx.Looks.LINK,
                                          color: j.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: es.marginTop20,
                                          children: er.NW.string(er.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && a
                    ? (0, i.jsx)(j.ZP, {
                          className: es.marginTop20,
                          children: (0, i.jsx)(y.y, {
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
                  className: o()(es.marginTop20, ei.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: r, globalName: l, password: a, consent: c, parsedDateOfBirth: u, globalNameFocused: d, emailClientError: h, usernameClientError: g, passwordClientError: f, dateOfBirthClientError: m, registering: _, apiErrors: { email: x, username: b, global_name: E, password: v, date_of_birth: I } = {} } = this.state,
            {
                consentRequired: O,
                isMobileWebInviteRegistration: y,
                uniqueUsernameRegistrationConfig: { suggestions: C },
                authBoxClassName: P,
                hasLoggedInAccounts: A
            } = this.props,
            { subText: T, consentText: Z } = this.renderConsentComponents(),
            R = this.renderErrorMessage(),
            D = (0, i.jsx)(p.ua7, {
                text: !c && O ? er.NW.string(er.t.AY4IVF) : null,
                children: (e) =>
                    (0, i.jsx)(
                        'div',
                        ea(eo({ className: es.marginTop20 }, e), {
                            children: (0, i.jsx)(j.zx, {
                                type: 'submit',
                                submitting: _,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: er.NW.string(er.t['3PatS0'])
                            })
                        })
                    )
            }),
            k = async () => {
                this.setState({ usernameFocused: !0 }), C && l.length > 0 && !L.Z.wasRegistrationSuggestionFetched(l) && (await w.Z.fetchSuggestionsRegistration(l));
            },
            W = null != e ? (0, i.jsx)(s.Fragment, { children: e() }, 'custom-header') : (0, i.jsx)(j.Dx, { children: er.NW.string(er.t.wC4TlZ) }, 'title'),
            G = (0, i.jsxs)(j.gO, {
                className: es.marginTop20,
                children: [
                    (0, i.jsx)(j.II, {
                        autoFocus: !0,
                        className: es.marginBottom20,
                        label: er.NW.string(er.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? er.NW.string(er.t.EkokLy) : null
                            }),
                        error: null != h ? h : eu(x),
                        type: 'email',
                        autoComplete: 'username',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, i.jsx)(j.II, {
                        label: er.NW.string(er.t['9AjdkJ']),
                        className: es.marginBottom20,
                        name: 'global_name',
                        value: l,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: eu(E),
                        maxLength: en.hy,
                        autoComplete: 'off',
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => this.setState({ globalNameFocused: !0 }),
                        onBlur: () => this.setState({ globalNameFocused: !1 })
                    }),
                    (0, i.jsx)(M.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, i.jsx)(p.Text, {
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
                            (0, i.jsx)(j.II, {
                                label: er.NW.string(er.t.TWzdWl),
                                className: es.marginBottom20,
                                name: 'username',
                                value: r,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? er.NW.string(er.t.EkokLy) : null
                                    });
                                },
                                error: null != g ? g : eu(b),
                                autoComplete: 'off',
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, i.jsx)(j.II, {
                        label: er.NW.string(er.t['CIGa+/']),
                        name: 'password',
                        value: a,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? er.NW.string(er.t.EkokLy) : null
                            }),
                        error: null != f ? f : eu(v),
                        type: 'password',
                        autoComplete: 'new-password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, i.jsx)(N.Z, {
                        label: er.NW.string(er.t.rhBeKS),
                        wrapperClassName: es.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != m ? m : eu(I),
                        value: u,
                        required: !0
                    }),
                    (0, i.jsx)(S.Z, {}),
                    D,
                    R,
                    Z,
                    T,
                    ee.a
                        ? null
                        : (0, i.jsx)(j.zx, {
                              look: y ? j.zx.Looks.FILLED : j.zx.Looks.LINK,
                              color: y ? j.zx.Colors.PRIMARY : j.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: es.marginTop20,
                              children: er.NW.string(er.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, i.jsx)(X.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(P, ei.horizontalAuthBox),
                  children: () => [
                      W,
                      (0, i.jsxs)(
                          'div',
                          {
                              className: ei.flex,
                              children: [
                                  (0, i.jsx)(j.Dx, {
                                      className: ei.createAccountTemplateHeader,
                                      children: er.NW.string(er.t.wC4TlZ)
                                  }),
                                  G
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, i.jsxs)(j.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: P,
                  children: [
                      A && !y
                          ? (0, i.jsx)(j.zx, {
                                onClick: this.handleGotoLogin,
                                look: j.zx.Looks.LINK,
                                color: j.zx.Colors.PRIMARY,
                                className: ei.goBackButton,
                                children: (0, i.jsxs)('div', {
                                    className: ei.content,
                                    children: [
                                        (0, i.jsx)(p.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: ei.caret
                                        }),
                                        (0, i.jsx)(p.Text, {
                                            variant: 'text-md/normal',
                                            children: er.NW.string(er.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      W,
                      G
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, i.jsx)(_.Z, {});
        let { invite: n, giftCode: r, guildTemplate: s } = this.props,
            l = null != n && null == n.guild && null == n.channel && null != n.inviter;
        return null == n || l || t
            ? null != s
                ? this.renderFull(() => (0, i.jsx)(A.Z, { guildTemplate: s }), !0)
                : null != r
                  ? this.renderFull(() => (0, i.jsx)(Y.Z, { giftCode: r }))
                  : null != n && l && n.state === Q.r2o.RESOLVED && !t
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
            el(this, 'emailRef', void 0),
            el(this, 'usernameRef', void 0),
            el(this, 'globalNameRef', void 0),
            el(this, 'passwordRef', void 0),
            el(this, 'dateOfBirthRef', s.createRef()),
            el(this, '_retryTimer', new h.V7()),
            el(this, 'handleGotoLogin', (e) => {
                let t,
                    { email: n } = this.state,
                    { giftCode: r, guildTemplate: i, invite: s, location: l, onLoginStart: o, redirectTo: c, transitionTo: u, isMobileWebInviteRegistration: d } = this.props;
                if (d) {
                    null == o || o(e);
                    return;
                }
                let h = null != l ? (0, a.parse)(l.search) : {};
                null != s ? (t = Q.Z5c.INVITE_LOGIN(s.code)) : null != r ? (t = Q.Z5c.GIFT_CODE_LOGIN(r.code)) : null != i ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(i.code)) : null != c ? ((t = Q.Z5c.LOGIN), (h.redirect_to = c)) : ((t = Q.Z5c.LOGIN), '' !== n && (h = { email: n })),
                    g.Z.loginReset(),
                    u(t, {
                        search: (0, a.stringify)(h),
                        source: 'register'
                    }),
                    null == o || o(e),
                    K.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            el(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: r, parsedDateOfBirth: i } = this.state,
                    { invite: s, consentRequired: l } = this.props;
                if (null !== l) {
                    if (null == s) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), 0 === r.length && (this.setState({ passwordClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), null == i && (this.setState({ dateOfBirthClientError: er.NW.string(er.t.EkokLy) }), (e = !0)), e)) return;
                    }
                    this.handleRegister();
                }
            }),
            el(this, 'handleBirthdayChange', (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            el(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    {
                        usernameSuggestion: r,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: s }
                    } = this.props;
                return (0, i.jsx)(ep, {
                    username: e,
                    suggestion: r,
                    livecheckEnabled: s,
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
function eh(e) {
    let t = (0, d.cj)([F.Z, U.default, m.Z, R.Z, T.Z], () => ({
            consentRequired: F.Z.getAuthenticationConsentRequired(),
            authenticated: U.default.isAuthenticated(),
            isUnderage: m.Z.isUnderageAnonymous(),
            country: R.Z.getCountryCode(),
            hasLoggedInAccounts: T.Z.getHasLoggedInAccounts()
        })),
        n = (0, k.F4)(),
        r = (0, d.e7)([L.Z], () => L.Z.registrationUsernameSuggestion()),
        [l, o] = s.useState($.EW.FULL);
    return (
        (0, x.Z)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: l
                }
            },
            {},
            [l]
        ),
        (0, i.jsx)(
            ed,
            eo(
                {
                    onChangeStep: (e) => o(e),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: r
                },
                e,
                t
            )
        )
    );
}
function ep(e) {
    let t,
        { username: n, suggestion: r, globalName: s, livecheckEnabled: l, isUsernameFocused: o, onClickSuggestion: a } = e,
        u = (0, W.a)(n, l, !0),
        d = l && n.length > 0;
    return (
        (t = d
            ? (0, c.EQ)(u)
                  .with(
                      {
                          type: D.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, i.jsx)(p.Text, {
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
                          (0, i.jsx)(p.Text, {
                              className: ei.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, i.jsx)(p.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: er.NW.string(er.t.z7c4bG)
                      })
                  )
            : null != r && r.length > 0 && s.length > 0
              ? (0, i.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: er.NW.format(er.t.nDGqqq, {
                        suggestion: r,
                        nameOnClick: a
                    })
                })
              : (0, i.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: er.NW.string(er.t.z7c4bG)
                })),
        (0, i.jsx)(M.Z, {
            show: (d && (null == u ? void 0 : u.type) === D.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
el(ed, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: G.uL
});
