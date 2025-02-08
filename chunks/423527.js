n.d(t, { Z: () => ed }), n(757143), n(47120), n(627341);
var i,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(593473),
    c = n(278074),
    d = n(990547),
    u = n(442837),
    h = n(846519),
    _ = n(481060),
    g = n(893776),
    m = n(881052),
    p = n(899370),
    f = n(224841),
    E = n(13430),
    x = n(213609),
    I = n(882037),
    C = n(201207),
    v = n(254942),
    N = n(481230),
    b = n(388905),
    S = n(853268),
    T = n(639946),
    A = n(616952),
    R = n(792766),
    Z = n(692483),
    j = n(100159),
    O = n(473855),
    L = n(726745),
    y = n(929809),
    P = n(541692),
    k = n(986197),
    D = n(135200),
    w = n(219496),
    B = n(794099),
    U = n(807369),
    M = n(180529),
    G = n(108427),
    F = n(314897),
    z = n(480294),
    V = n(896797),
    K = n(626135),
    H = n(585483),
    W = n(70956),
    Y = n(624138),
    q = n(481153),
    J = n(588705),
    X = n(163671),
    Q = n(981631),
    $ = n(355142),
    ee = n(188785),
    et = n(701476),
    en = n(801461),
    ei = n(388032),
    er = n(240854),
    ea = n(232186);
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
u.ZP.initialize();
let eo = /\.$/,
    es = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(eo, ''))
                  .join('. ')
                  .trim()
            : e;
class ec extends (i = a.PureComponent) {
    get registrationSource() {
        let { giftCode: e, guildTemplate: t, invite: n } = this.props;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        if (null != n) {
            if (null != n.guild) return 'guild_invite';
            if (null != n.channel) return 'dm_invite';
            if (null != n.inviter) return 'friend_invite';
        }
        return null;
    }
    hasConsent() {
        let { consentRequired: e } = this.props,
            { consent: t } = this.state;
        return null != e && t;
    }
    componentDidMount() {
        this.redirectIfAuthenticated(), C.Z.trackExposure({ location: '0ba758_1' });
        let { giftCodeSKU: e, invite: t } = this.props;
        K.default.track(
            Q.rMx.REGISTER_VIEWED,
            {
                location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                registration_source: this.registrationSource,
                ...(null != e ? (0, j.Z)(e, !1, !1) : {})
            },
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
            { consentRequiredProp: i } = t;
        return null == i && null != n
            ? {
                  consent: !n,
                  consentRequiredProp: n
              }
            : { consentRequiredProp: n };
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, isUnderage: i, invite: r, onChangeStep: a } = this.props,
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
                          this._retryTimer.start(l.retry_after * W.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, y.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let s = $.EW.FULL;
        i || this.hasError('date_of_birth') ? (s = $.EW.AGE_GATE) : null != r && (null != r.guild || null != r.channel) && (s = $.EW.INVITE), a(s);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : V.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: r, parsedDateOfBirth: a } = this.state,
            { invite: l, guildTemplate: o, giftCode: s, onRegister: c, usernameSuggestion: d, isMobileWebInviteRegistration: u } = this.props,
            h = null != l ? l.code : null,
            _ = null != s ? s.skuId : null,
            g = I.MD.getState(),
            p = (0, Y.Ew)(d) ? null : t === d,
            f = ee.a ? await (0, Z.K)(t) : t,
            E = ee.a ? await (0, Z.K)(n) : n;
        H.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            u || null == l
                ? await (0, N.R$)({
                      email: e,
                      username: f,
                      globalName: E,
                      consent: r,
                      password: i,
                      invite: h,
                      usedUsernameSuggestion: p,
                      guildTemplateCode: null == o ? void 0 : o.code,
                      giftCodeSKUId: _,
                      birthday: a,
                      promoEmailConsent: g.required ? g : null
                  })
                : await (0, N.ZP)({
                      consent: r,
                      invite: h,
                      giftCodeSKUId: _,
                      usedUsernameSuggestion: p,
                      globalName: E
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof m.Hx))) return;
            let e = (0, v.F)(t);
            this.setState({ apiErrors: e });
        }
    }
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    renderConsentComponents() {
        let { consent: e } = this.state,
            {
                consentRequired: t,
                registrationCopyExperimentConfig: { enableNewCopy: n, hasProminentCopy: i }
            } = this.props,
            a = null,
            l = null;
        return (
            t
                ? (l = (0, r.jsx)(S.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: ei.intl.format(ei.t.qMDAPz, {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY
                      })
                  }))
                : (a = (0, r.jsx)(b.i_, {
                      isProminent: !!i,
                      className: ea.marginTop8,
                      children: n
                          ? ei.intl.format(ei.t.oRFxPj, {
                                buttonText: ei.intl.string(ei.t['3PatS0']),
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                          : ei.intl.format(ei.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                  })),
            {
                subText: a,
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
        return (0, r.jsxs)(b.ZP, {
            className: e,
            children: [
                (0, r.jsx)(J.R, {}),
                (0, r.jsxs)(b.gO, {
                    className: ea.marginTop40,
                    children: [
                        (0, r.jsx)(_.vwX, { children: ei.intl.string(ei.t.TWzdWl) }),
                        (0, r.jsx)(_.ua7, {
                            text: ei.intl.string(ei.t['hBB85+']),
                            position: 'right',
                            color: _.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: i, onMouseLeave: a } = e;
                                return (0, r.jsx)(b.II, {
                                    autoFocus: !0,
                                    className: ea.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: ei.intl.string(ei.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: i,
                                    onMouseLeave: a
                                });
                            }
                        }),
                        (0, r.jsx)(b.zx, {
                            className: ea.marginTop20,
                            disabled: !0,
                            children: ei.intl.string(ei.t['3PatS0'])
                        }),
                        (0, r.jsx)(b.i_, {
                            disabled: !0,
                            className: ea.marginTop8,
                            children: ei.intl.format(ei.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                        }),
                        ee.a
                            ? null
                            : (0, r.jsx)(b.zx, {
                                  look: b.zx.Looks.LINK,
                                  color: b.zx.Colors.LINK,
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
        let { invite: e } = this.props;
        return (null == e ? void 0 : e.stage_instance) != null && null != e.guild
            ? (0, r.jsx)(R.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(T.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, r.jsx)(J.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: i } = this.state,
            a = b.zx.Colors.BRAND,
            l = ei.intl.string(ei.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((a = b.zx.Colors.GREEN), (l = ei.intl.string(ei.t['5UKyUl']))),
            (0, r.jsx)(_.ua7, {
                text: !n && t ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: ea.marginTop20,
                        ...e,
                        children: (0, r.jsx)(b.zx, {
                            type: 'submit',
                            submitting: i,
                            disabled: !this.hasConsent(),
                            color: a,
                            children: l
                        })
                    })
            })
        );
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: i },
                globalName: a
            } = this.state,
            { subText: l, consentText: o } = this.renderConsentComponents(),
            s = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            c = (e) => {
                this.setState({ globalName: e });
            };
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(b.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        s ? (0, r.jsx)('div', { className: er.divider }) : null,
                        (0, r.jsxs)(b.gO, {
                            className: s ? void 0 : ea.marginTop40,
                            children: [
                                (0, r.jsx)(_.vwX, {
                                    error: es(null != i ? i : n),
                                    children: ei.intl.string(ei.t['9AjdkJ'])
                                }),
                                (0, r.jsx)(_.ua7, {
                                    text: ei.intl.string(ei.t['hBB85+']),
                                    position: 'right',
                                    color: _.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: l } = e;
                                        return (0, r.jsx)(b.II, {
                                            autoFocus: !0,
                                            className: ea.marginBottom8,
                                            name: 'global_name',
                                            value: a,
                                            placeholder: ei.intl.string(ei.t['09Q8ys']),
                                            onChange: c,
                                            error: null != n || null != i ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        });
                                    }
                                }),
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ei.intl.string(ei.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                l,
                                o,
                                ee.a
                                    ? null
                                    : (0, r.jsx)(b.zx, {
                                          look: b.zx.Looks.LINK,
                                          color: b.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: ea.marginTop20,
                                          children: ei.intl.string(ei.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && s
                    ? (0, r.jsx)(b.ZP, {
                          className: ea.marginTop20,
                          children: (0, r.jsx)(R.y, {
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
            : (0, r.jsx)(b.i_, {
                  className: o()(ea.marginTop20, er.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: i, globalName: l, password: s, consent: c, parsedDateOfBirth: d, globalNameFocused: u, emailClientError: h, usernameClientError: g, passwordClientError: m, dateOfBirthClientError: p, registering: f, apiErrors: { email: x, username: I, global_name: C, password: v, date_of_birth: N } = {} } = this.state,
            {
                consentRequired: S,
                isMobileWebInviteRegistration: T,
                uniqueUsernameRegistrationConfig: { suggestions: R },
                authBoxClassName: Z,
                hasLoggedInAccounts: j,
                registrationCopyExperimentConfig: { hasCopyAboveButton: O }
            } = this.props,
            { subText: L, consentText: y } = this.renderConsentComponents(),
            P = this.renderErrorMessage(),
            w = (0, r.jsx)(_.ua7, {
                text: !c && S ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: ea.marginTop20,
                        ...e,
                        children: (0, r.jsx)(b.zx, {
                            type: 'submit',
                            submitting: f,
                            disabled: !this.hasConsent() || this.state.isRateLimited,
                            children: ei.intl.string(ei.t['3PatS0'])
                        })
                    })
            }),
            B = async () => {
                this.setState({ usernameFocused: !0 }), R && l.length > 0 && !D.Z.wasRegistrationSuggestionFetched(l) && (await k.Z.fetchSuggestionsRegistration(l));
            },
            U = null != e ? (0, r.jsx)(a.Fragment, { children: e() }, 'custom-header') : (0, r.jsx)(b.Dx, { children: ei.intl.string(ei.t.wC4TlZ) }, 'title'),
            G = (0, r.jsxs)(b.gO, {
                className: ea.marginTop20,
                children: [
                    (0, r.jsx)(b.II, {
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
                        error: null != h ? h : es(x),
                        type: 'email',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(b.II, {
                        label: ei.intl.string(ei.t['9AjdkJ']),
                        className: ea.marginBottom20,
                        name: 'global_name',
                        value: l,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: es(C),
                        maxLength: en.hy,
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => this.setState({ globalNameFocused: !0 }),
                        onBlur: () => this.setState({ globalNameFocused: !1 })
                    }),
                    (0, r.jsx)(M.Z, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, r.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: ei.intl.string(ei.t['330TCQ'])
                        })
                    }),
                    (0, r.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: B,
                        tabIndex: -1,
                        children: [
                            (0, r.jsx)(b.II, {
                                label: ei.intl.string(ei.t.TWzdWl),
                                className: ea.marginBottom20,
                                name: 'username',
                                value: i,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                                    });
                                },
                                error: null != g ? g : es(I),
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, r.jsx)(b.II, {
                        label: ei.intl.string(ei.t['CIGa+/']),
                        name: 'password',
                        value: s,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != m ? m : es(v),
                        type: 'password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(E.Z, {
                        label: ei.intl.string(ei.t.rhBeKS),
                        wrapperClassName: ea.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != p ? p : es(N),
                        value: d,
                        required: !0
                    }),
                    O && L,
                    (0, r.jsx)(A.Z, {}),
                    w,
                    P,
                    y,
                    !O && L,
                    ee.a
                        ? null
                        : (0, r.jsx)(b.zx, {
                              look: T ? b.zx.Looks.FILLED : b.zx.Looks.LINK,
                              color: T ? b.zx.Colors.PRIMARY : b.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: ea.marginTop20,
                              children: ei.intl.string(ei.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, r.jsx)(X.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(Z, er.horizontalAuthBox),
                  children: () => [
                      U,
                      (0, r.jsxs)(
                          'div',
                          {
                              className: er.flex,
                              children: [
                                  (0, r.jsx)(b.Dx, {
                                      className: er.createAccountTemplateHeader,
                                      children: ei.intl.string(ei.t.wC4TlZ)
                                  }),
                                  G
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, r.jsxs)(b.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: Z,
                  children: [
                      j && !T
                          ? (0, r.jsx)(b.zx, {
                                onClick: this.handleGotoLogin,
                                look: b.zx.Looks.LINK,
                                color: b.zx.Colors.PRIMARY,
                                className: er.goBackButton,
                                children: (0, r.jsxs)('div', {
                                    className: er.content,
                                    children: [
                                        (0, r.jsx)(_.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: er.caret
                                        }),
                                        (0, r.jsx)(_.Text, {
                                            variant: 'text-md/normal',
                                            children: ei.intl.string(ei.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      U,
                      G
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, r.jsx)(f.Z, {});
        let { invite: n, giftCode: i, guildTemplate: a } = this.props,
            l = null != n && null == n.guild && null == n.channel && null != n.inviter;
        return null == n || l || t
            ? null != a
                ? this.renderFull(() => (0, r.jsx)(O.Z, { guildTemplate: a }), !0)
                : null != i
                  ? this.renderFull(() => (0, r.jsx)(q.Z, { giftCode: i }))
                  : null != n && l && n.state === Q.r2o.RESOLVED && !t
                    ? this.renderFull(() =>
                          (0, r.jsx)(J.Z, {
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
            el(this, 'dateOfBirthRef', a.createRef()),
            el(this, '_retryTimer', new h.V7()),
            el(this, 'handleGotoLogin', (e) => {
                let t;
                let { email: n } = this.state,
                    { giftCode: i, guildTemplate: r, invite: a, location: l, onLoginStart: o, redirectTo: c, transitionTo: d, isMobileWebInviteRegistration: u } = this.props;
                if (u) {
                    null == o || o(e);
                    return;
                }
                let h = null != l ? (0, s.parse)(l.search) : {};
                null != a ? (t = Q.Z5c.INVITE_LOGIN(a.code)) : null != i ? (t = Q.Z5c.GIFT_CODE_LOGIN(i.code)) : null != r ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(r.code)) : null != c ? ((t = Q.Z5c.LOGIN), (h.redirect_to = c)) : ((t = Q.Z5c.LOGIN), '' !== n && (h = { email: n })), g.Z.loginReset(), d(t, { search: (0, s.stringify)(h) }), null == o || o(e), H.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            el(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: i, parsedDateOfBirth: r } = this.state,
                    { invite: a, consentRequired: l } = this.props;
                if (null !== l) {
                    if (null == a) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === i.length && (this.setState({ passwordClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), null == r && (this.setState({ dateOfBirthClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), e)) return;
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
                        usernameSuggestion: i,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: a }
                    } = this.props;
                return (0, r.jsx)(eu, {
                    username: e,
                    suggestion: i,
                    livecheckEnabled: a,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != i && i.length > 0 && this.setState({ username: i });
                    }
                });
            });
        let n = null != e.location ? (0, s.parse)(e.location.search) : {};
        this.state = {
            email: null !== (t = n.email) && void 0 !== t ? t : '',
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
function ed(e) {
    let t = (0, u.cj)([z.Z, F.default, p.Z, P.Z, L.Z], () => ({
            consentRequired: z.Z.getAuthenticationConsentRequired(),
            authenticated: F.default.isAuthenticated(),
            isUnderage: p.Z.isUnderageAnonymous(),
            country: P.Z.getCountryCode(),
            hasLoggedInAccounts: L.Z.getHasLoggedInAccounts()
        })),
        n = (0, B.F4)(),
        i = (0, u.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
        [l, o] = a.useState($.EW.FULL);
    return (
        (0, x.Z)(
            {
                type: d.ImpressionTypes.VIEW,
                name: d.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: l
                }
            },
            {},
            [l]
        ),
        (0, r.jsx)(ec, {
            onChangeStep: (e) => o(e),
            registrationCopyExperimentConfig: C.Z.getCurrentConfig({ location: '0ba758_2' }, { autoTrackExposure: !1 }),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t
        })
    );
}
function eu(e) {
    let t,
        { username: n, suggestion: i, globalName: a, livecheckEnabled: l, isUsernameFocused: o, onClickSuggestion: s } = e,
        d = (0, U.a)(n, l, !0),
        u = l && n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(d)
                  .with(
                      {
                          type: w.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(_.Text, {
                              className: er.messageNegative,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .with(
                      {
                          type: w.K.AVAILABLE,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(_.Text, {
                              className: er.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, r.jsx)(_.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: ei.intl.string(ei.t.z7c4bG)
                      })
                  )
            : null != i && i.length > 0 && a.length > 0
              ? (0, r.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.format(ei.t.nDGqqq, {
                        suggestion: i,
                        nameOnClick: s
                    })
                })
              : (0, r.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.string(ei.t.z7c4bG)
                })),
        (0, r.jsx)(M.Z, {
            show: (u && (null == d ? void 0 : d.type) === w.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
el(ec, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: (e) => n.g.location.assign(e)
});
