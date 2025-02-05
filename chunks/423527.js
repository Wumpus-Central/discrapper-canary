n.d(t, { Z: () => ed }), n(757143), n(47120), n(627341);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(593473),
    c = n(278074),
    d = n(990547),
    u = n(442837),
    _ = n(846519),
    h = n(481060),
    g = n(893776),
    p = n(881052),
    m = n(899370),
    f = n(224841),
    E = n(13430),
    I = n(213609),
    x = n(882037),
    C = n(201207),
    N = n(254942),
    v = n(481230),
    T = n(388905),
    S = n(853268),
    A = n(639946),
    b = n(616952),
    Z = n(792766),
    R = n(692483),
    L = n(100159),
    j = n(473855),
    O = n(726745),
    P = n(929809),
    y = n(541692),
    D = n(986197),
    k = n(135200),
    U = n(219496),
    w = n(794099),
    B = n(807369),
    M = n(180529),
    G = n(108427),
    F = n(314897),
    z = n(480294),
    H = n(896797),
    V = n(626135),
    K = n(585483),
    W = n(70956),
    q = n(624138),
    Y = n(481153),
    J = n(588705),
    X = n(163671),
    Q = n(981631),
    $ = n(355142),
    ee = n(188785),
    et = n(701476),
    en = n(801461),
    ei = n(388032),
    er = n(240854),
    el = n(232186);
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
u.ZP.initialize();
let eo = /\.$/,
    es = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(eo, ''))
                  .join('. ')
                  .trim()
            : e;
class ec extends (i = l.PureComponent) {
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
        V.default.track(
            Q.rMx.REGISTER_VIEWED,
            {
                location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                registration_source: this.registrationSource,
                ...(null != e ? (0, L.Z)(e, !1, !1) : {})
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
        let { authenticated: n, isUnderage: i, invite: r, onChangeStep: l } = this.props,
            { apiErrors: a, parsedDateOfBirth: o } = this.state;
        (t.apiErrors !== a || t.parsedDateOfBirth !== o) &&
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
                          this._retryTimer.start(a.retry_after * W.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, P.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let s = $.EW.FULL;
        i || this.hasError('date_of_birth') ? (s = $.EW.AGE_GATE) : null != r && (null != r.guild || null != r.channel) && (s = $.EW.INVITE), l(s);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : H.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: r, parsedDateOfBirth: l } = this.state,
            { invite: a, guildTemplate: o, giftCode: s, onRegister: c, usernameSuggestion: d, isMobileWebInviteRegistration: u } = this.props,
            _ = null != a ? a.code : null,
            h = null != s ? s.skuId : null,
            g = x.MD.getState(),
            m = (0, q.Ew)(d) ? null : t === d,
            f = ee.a ? await (0, R.K)(t) : t,
            E = ee.a ? await (0, R.K)(n) : n;
        K.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            u || null == a
                ? await (0, v.R$)({
                      email: e,
                      username: f,
                      globalName: E,
                      consent: r,
                      password: i,
                      invite: _,
                      usedUsernameSuggestion: m,
                      guildTemplateCode: null == o ? void 0 : o.code,
                      giftCodeSKUId: h,
                      birthday: l,
                      promoEmailConsent: g.required ? g : null
                  })
                : await (0, v.ZP)({
                      consent: r,
                      invite: _,
                      giftCodeSKUId: h,
                      usedUsernameSuggestion: m,
                      globalName: E
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof p.Hx))) return;
            let e = (0, N.F)(t);
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
            l = null,
            a = null;
        return (
            t
                ? (a = (0, r.jsx)(S.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: ei.intl.format(ei.t.qMDAPz, {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY
                      })
                  }))
                : (l = (0, r.jsx)(T.i_, {
                      isProminent: !!i,
                      className: el.marginTop8,
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
                subText: l,
                consentText: a
            }
        );
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, r.jsxs)(T.ZP, {
            className: e,
            children: [
                (0, r.jsx)(J.R, {}),
                (0, r.jsxs)(T.gO, {
                    className: el.marginTop40,
                    children: [
                        (0, r.jsx)(h.vwX, { children: ei.intl.string(ei.t.TWzdWl) }),
                        (0, r.jsx)(h.ua7, {
                            text: ei.intl.string(ei.t['hBB85+']),
                            position: 'right',
                            color: h.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: i, onMouseLeave: l } = e;
                                return (0, r.jsx)(T.II, {
                                    autoFocus: !0,
                                    className: el.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: ei.intl.string(ei.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: i,
                                    onMouseLeave: l
                                });
                            }
                        }),
                        (0, r.jsx)(T.zx, {
                            className: el.marginTop20,
                            disabled: !0,
                            children: ei.intl.string(ei.t['3PatS0'])
                        }),
                        (0, r.jsx)(T.i_, {
                            disabled: !0,
                            className: el.marginTop8,
                            children: ei.intl.format(ei.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                        }),
                        ee.a
                            ? null
                            : (0, r.jsx)(T.zx, {
                                  look: T.zx.Looks.LINK,
                                  color: T.zx.Colors.LINK,
                                  disabled: !0,
                                  className: el.marginTop20,
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
            ? (0, r.jsx)(Z.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(A.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, r.jsx)(J.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: i } = this.state,
            l = T.zx.Colors.BRAND,
            a = ei.intl.string(ei.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((l = T.zx.Colors.GREEN), (a = ei.intl.string(ei.t['5UKyUl']))),
            (0, r.jsx)(h.ua7, {
                text: !n && t ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: el.marginTop20,
                        ...e,
                        children: (0, r.jsx)(T.zx, {
                            type: 'submit',
                            submitting: i,
                            disabled: !this.hasConsent(),
                            color: l,
                            children: a
                        })
                    })
            })
        );
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: i },
                globalName: l
            } = this.state,
            { subText: a, consentText: o } = this.renderConsentComponents(),
            s = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            c = (e) => {
                this.setState({ globalName: e });
            };
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(T.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        s ? (0, r.jsx)('div', { className: er.divider }) : null,
                        (0, r.jsxs)(T.gO, {
                            className: s ? void 0 : el.marginTop40,
                            children: [
                                (0, r.jsx)(h.vwX, {
                                    error: es(null != i ? i : n),
                                    children: ei.intl.string(ei.t['9AjdkJ'])
                                }),
                                (0, r.jsx)(h.ua7, {
                                    text: ei.intl.string(ei.t['hBB85+']),
                                    position: 'right',
                                    color: h.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: a } = e;
                                        return (0, r.jsx)(T.II, {
                                            autoFocus: !0,
                                            className: el.marginBottom8,
                                            name: 'global_name',
                                            value: l,
                                            placeholder: ei.intl.string(ei.t['09Q8ys']),
                                            onChange: c,
                                            error: null != n || null != i ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: a
                                        });
                                    }
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ei.intl.string(ei.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                a,
                                o,
                                ee.a
                                    ? null
                                    : (0, r.jsx)(T.zx, {
                                          look: T.zx.Looks.LINK,
                                          color: T.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: el.marginTop20,
                                          children: ei.intl.string(ei.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && s
                    ? (0, r.jsx)(T.ZP, {
                          className: el.marginTop20,
                          children: (0, r.jsx)(Z.y, {
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
            : (0, r.jsx)(T.i_, {
                  className: o()(el.marginTop20, er.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: i, globalName: a, password: s, consent: c, parsedDateOfBirth: d, globalNameFocused: u, emailClientError: _, usernameClientError: g, passwordClientError: p, dateOfBirthClientError: m, registering: f, apiErrors: { email: I, username: x, global_name: C, password: N, date_of_birth: v } = {} } = this.state,
            {
                consentRequired: S,
                isMobileWebInviteRegistration: A,
                uniqueUsernameRegistrationConfig: { suggestions: Z },
                authBoxClassName: R,
                hasLoggedInAccounts: L,
                registrationCopyExperimentConfig: { hasCopyAboveButton: j }
            } = this.props,
            { subText: O, consentText: P } = this.renderConsentComponents(),
            y = this.renderErrorMessage(),
            U = (0, r.jsx)(h.ua7, {
                text: !c && S ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: el.marginTop20,
                        ...e,
                        children: (0, r.jsx)(T.zx, {
                            type: 'submit',
                            submitting: f,
                            disabled: !this.hasConsent() || this.state.isRateLimited,
                            children: ei.intl.string(ei.t['3PatS0'])
                        })
                    })
            }),
            w = async () => {
                this.setState({ usernameFocused: !0 }), Z && a.length > 0 && !k.Z.wasRegistrationSuggestionFetched(a) && (await D.Z.fetchSuggestionsRegistration(a));
            },
            B = null != e ? (0, r.jsx)(l.Fragment, { children: e() }, 'custom-header') : (0, r.jsx)(T.Dx, { children: ei.intl.string(ei.t.wC4TlZ) }, 'title'),
            G = (0, r.jsxs)(T.gO, {
                className: el.marginTop20,
                children: [
                    (0, r.jsx)(T.II, {
                        autoFocus: !0,
                        className: el.marginBottom20,
                        label: ei.intl.string(ei.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != _ ? _ : es(I),
                        type: 'email',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(T.II, {
                        label: ei.intl.string(ei.t['9AjdkJ']),
                        className: el.marginBottom20,
                        name: 'global_name',
                        value: a,
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
                        children: (0, r.jsx)(h.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: ei.intl.string(ei.t['330TCQ'])
                        })
                    }),
                    (0, r.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: w,
                        tabIndex: -1,
                        children: [
                            (0, r.jsx)(T.II, {
                                label: ei.intl.string(ei.t.TWzdWl),
                                className: el.marginBottom20,
                                name: 'username',
                                value: i,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                                    });
                                },
                                error: null != g ? g : es(x),
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, r.jsx)(T.II, {
                        label: ei.intl.string(ei.t['CIGa+/']),
                        name: 'password',
                        value: s,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != p ? p : es(N),
                        type: 'password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(E.Z, {
                        label: ei.intl.string(ei.t.rhBeKS),
                        wrapperClassName: el.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != m ? m : es(v),
                        value: d,
                        required: !0
                    }),
                    j && O,
                    (0, r.jsx)(b.Z, {}),
                    U,
                    y,
                    P,
                    !j && O,
                    ee.a
                        ? null
                        : (0, r.jsx)(T.zx, {
                              look: A ? T.zx.Looks.FILLED : T.zx.Looks.LINK,
                              color: A ? T.zx.Colors.PRIMARY : T.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: el.marginTop20,
                              children: ei.intl.string(ei.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, r.jsx)(X.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(R, er.horizontalAuthBox),
                  children: () => [
                      B,
                      (0, r.jsxs)(
                          'div',
                          {
                              className: er.flex,
                              children: [
                                  (0, r.jsx)(T.Dx, {
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
            : (0, r.jsxs)(T.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: R,
                  children: [
                      L && !A
                          ? (0, r.jsx)(T.zx, {
                                onClick: this.handleGotoLogin,
                                look: T.zx.Looks.LINK,
                                color: T.zx.Colors.PRIMARY,
                                className: er.goBackButton,
                                children: (0, r.jsxs)('div', {
                                    className: er.content,
                                    children: [
                                        (0, r.jsx)(h.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: er.caret
                                        }),
                                        (0, r.jsx)(h.Text, {
                                            variant: 'text-md/normal',
                                            children: ei.intl.string(ei.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      B,
                      G
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, r.jsx)(f.Z, {});
        let { invite: n, giftCode: i, guildTemplate: l } = this.props,
            a = null != n && null == n.guild && null == n.channel && null != n.inviter;
        return null == n || a || t
            ? null != l
                ? this.renderFull(() => (0, r.jsx)(j.Z, { guildTemplate: l }), !0)
                : null != i
                  ? this.renderFull(() => (0, r.jsx)(Y.Z, { giftCode: i }))
                  : null != n && a && n.state === Q.r2o.RESOLVED && !t
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
            ea(this, 'emailRef', void 0),
            ea(this, 'usernameRef', void 0),
            ea(this, 'globalNameRef', void 0),
            ea(this, 'passwordRef', void 0),
            ea(this, 'dateOfBirthRef', l.createRef()),
            ea(this, '_retryTimer', new _.V7()),
            ea(this, 'handleGotoLogin', (e) => {
                let t;
                let { email: n } = this.state,
                    { giftCode: i, guildTemplate: r, invite: l, location: a, onLoginStart: o, redirectTo: c, transitionTo: d, isMobileWebInviteRegistration: u } = this.props;
                if (u) {
                    null == o || o(e);
                    return;
                }
                let _ = null != a ? (0, s.parse)(a.search) : {};
                null != l ? (t = Q.Z5c.INVITE_LOGIN(l.code)) : null != i ? (t = Q.Z5c.GIFT_CODE_LOGIN(i.code)) : null != r ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(r.code)) : null != c ? ((t = Q.Z5c.LOGIN), (_.redirect_to = c)) : ((t = Q.Z5c.LOGIN), '' !== n && (_ = { email: n })), g.Z.loginReset(), d(t, { search: (0, s.stringify)(_) }), null == o || o(e), K.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            ea(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: i, parsedDateOfBirth: r } = this.state,
                    { invite: l, consentRequired: a } = this.props;
                if (null !== a) {
                    if (null == l) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === i.length && (this.setState({ passwordClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), null == r && (this.setState({ dateOfBirthClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), e)) return;
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
                        usernameSuggestion: i,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: l }
                    } = this.props;
                return (0, r.jsx)(eu, {
                    username: e,
                    suggestion: i,
                    livecheckEnabled: l,
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
    let t = (0, u.cj)([z.Z, F.default, m.Z, y.Z, O.Z], () => ({
            consentRequired: z.Z.getAuthenticationConsentRequired(),
            authenticated: F.default.isAuthenticated(),
            isUnderage: m.Z.isUnderageAnonymous(),
            country: y.Z.getCountryCode(),
            hasLoggedInAccounts: O.Z.getHasLoggedInAccounts()
        })),
        n = (0, w.F4)(),
        i = (0, u.e7)([k.Z], () => k.Z.registrationUsernameSuggestion()),
        [a, o] = l.useState($.EW.FULL);
    return (
        (0, I.Z)(
            {
                type: d.ImpressionTypes.VIEW,
                name: d.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: a
                }
            },
            {},
            [a]
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
        { username: n, suggestion: i, globalName: l, livecheckEnabled: a, isUsernameFocused: o, onClickSuggestion: s } = e,
        d = (0, B.a)(n, a, !0),
        u = a && n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(d)
                  .with(
                      {
                          type: U.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(h.Text, {
                              className: er.messageNegative,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .with(
                      {
                          type: U.K.AVAILABLE,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(h.Text, {
                              className: er.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, r.jsx)(h.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: ei.intl.string(ei.t.z7c4bG)
                      })
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, r.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.format(ei.t.nDGqqq, {
                        suggestion: i,
                        nameOnClick: s
                    })
                })
              : (0, r.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.string(ei.t.z7c4bG)
                })),
        (0, r.jsx)(M.Z, {
            show: (u && (null == d ? void 0 : d.type) === U.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
ea(ec, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: (e) => n.g.location.assign(e)
});
